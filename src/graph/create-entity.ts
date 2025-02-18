import { TYPES_ATTRIBUTE } from '../core/ids/system.js';
import { generate } from '../id.js';
import { Relation } from '../relation.js';
import { Triple } from '../triple.js';
import type { CreateRelationOp, Op, SetTripleOp, ValueType } from '../types.js';

type Params = {
  attributes?: {
    [filedName: string]: string;
  };
  mapping?: {
    [filedName: string]: { id: string; type: ValueType };
  };
  types?: Array<string>;
  relations?: Array<{
    relationTypeId: string;
    toId: string;
  }>;
};

export const createEntity = async ({ attributes, mapping, types, relations }: Params) => {
  const id = generate();
  const ops: Array<Op> = [];
  if (attributes && mapping) {
    for (const [fieldName, value] of Object.entries(attributes)) {
      const attributeMapping = mapping[fieldName];
      if (!attributeMapping) {
        throw new Error(`Attribute ID for field ${fieldName} not found`);
      }
      const setTripleOp: SetTripleOp = Triple.make({
        entityId: id,
        attributeId: attributeMapping.id,
        value: {
          type: attributeMapping.type,
          value,
        },
      });

      ops.push(setTripleOp);
    }
  }

  if (types) {
    // add types
    for (const typeId of types) {
      const setRelationOp: CreateRelationOp = Relation.make({
        fromId: id,
        relationTypeId: TYPES_ATTRIBUTE,
        toId: typeId,
      });
      ops.push(setRelationOp);
    }
  }

  if (relations) {
    // TODO add relations
  }

  return { id, ops };
};
