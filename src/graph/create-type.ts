import { ATTRIBUTE, SCHEMA_TYPE, TYPES_ATTRIBUTE } from '../core/ids/system.js';
import { generate } from '../id.js';
import { Relation } from '../relation.js';
import { Triple } from '../triple.js';
import type { CreateRelationOp, Op, SetTripleOp, ValueType } from '../types.js';

type Params = {
  existingAttributes?: { [filedName: string]: { id: string; type: ValueType } };
  newAttributes?: {
    [filedName: string]: { type: ValueType; name: string };
  };
  relations?: Array<{
    relationTypeId: string;
    toId: string;
  }>;
};

export const createType = async ({ newAttributes, existingAttributes }: Params) => {
  const id = generate();
  const ops: Op[] = [];
  const mapping: Record<string, { id: string; type: ValueType }> = {};

  // add the type relation
  const relationOp: CreateRelationOp = Relation.make({
    fromId: id,
    relationTypeId: TYPES_ATTRIBUTE,
    toId: SCHEMA_TYPE,
  });
  ops.push(relationOp);

  if (newAttributes) {
    for (const [fieldName, item] of Object.entries(newAttributes)) {
      const attributeId = generate();
      const setTripleOp: SetTripleOp = Triple.make({
        entityId: id,
        attributeId,
        value: {
          type: item.type,
          value: fieldName,
        },
      });

      const relationOp: CreateRelationOp = Relation.make({
        fromId: id,
        relationTypeId: ATTRIBUTE,
        toId: attributeId,
      });

      ops.push(setTripleOp, relationOp);
      mapping[fieldName] = { id: attributeId, type: item.type };
    }
  }

  if (existingAttributes) {
    for (const [fieldName, item] of Object.entries(existingAttributes)) {
      const relationOp: CreateRelationOp = Relation.make({
        fromId: id,
        relationTypeId: ATTRIBUTE,
        toId: item.id,
      });
      ops.push(relationOp);
      mapping[fieldName] = { id: item.id, type: item.type };
    }
  }

  // TODO relations

  return { id, ops, mapping };
};
