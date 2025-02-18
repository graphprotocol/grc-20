import { SCHEMA_TYPE, TYPES_ATTRIBUTE } from '../core/ids/system.js';
import { generate } from '../id.js';
import { Relation } from '../relation.js';
import { Triple } from '../triple.js';
import type { CreateRelationOp, Op, SetTripleOp, ValueType } from '../types.js';

type Params = {
  attributes: {
    [filedName: string]: { id?: string; type: ValueType; name: string };
  };
  relations?: Array<{
    relationTypeId: string;
    toId: string;
  }>;
};

export const createType = async ({ attributes }: Params) => {
  const id = generate();
  const ops: Op[] = [];
  const mapping: Record<string, { id: string; type: ValueType }> = {};

  for (const [fieldName, item] of Object.entries(attributes)) {
    const attributeId = item.id || generate();
    const setTripleOp: SetTripleOp = Triple.make({
      entityId: id,
      attributeId,
      value: {
        type: item.type,
        value: fieldName,
      },
    });

    ops.push(setTripleOp);
    mapping[fieldName] = { id: attributeId, type: item.type };
  }

  // add the type relation
  const setRelationOp: CreateRelationOp = Relation.make({
    fromId: id,
    relationTypeId: TYPES_ATTRIBUTE,
    toId: SCHEMA_TYPE,
  });
  ops.push(setRelationOp);

  // TODO relations

  return { id, ops, mapping };
};
