import { ATTRIBUTE, NAME_ATTRIBUTE, SCHEMA_TYPE, TYPES_ATTRIBUTE } from '../core/ids/system.js';
import { generate } from '../id.js';
import { Relation } from '../relation.js';
import { Triple } from '../triple.js';
import type { CreateRelationOp, Op, SetTripleOp } from '../types.js';

type Params = {
  from: string;
  to: string;
  name: string;
};

export const createRelationType = async ({ from, to, name }: Params) => {
  const id = generate();
  const ops: Op[] = [];

  const nameTripleOp: SetTripleOp = Triple.make({
    entityId: id,
    attributeId: NAME_ATTRIBUTE,
    value: {
      type: 'TEXT',
      value: name,
    },
  });
  ops.push(nameTripleOp);

  const setRelationOp: CreateRelationOp = Relation.make({
    fromId: id,
    relationTypeId: TYPES_ATTRIBUTE,
    toId: SCHEMA_TYPE, // this sets the relation type to be a typ type
  });
  ops.push(setRelationOp);

  const setRelationOp2: CreateRelationOp = Relation.make({
    fromId: id,
    relationTypeId: TYPES_ATTRIBUTE,
    toId: ATTRIBUTE, // this sets the relation type to be an "property" type
  });
  ops.push(setRelationOp2);

  // TODO relations

  return { id, ops };
};
