import { describe, expect, it } from 'vitest';
import { NAME_ATTRIBUTE } from '../core/ids/system.js';
import type { Op } from '../types.js';
import { createEntity } from './create-entity.js';
import { createRelationType } from './create-relation-type.js';
import { createType } from './create-type.js';

describe('Graph', () => {
  it('creates multiple types, relation types, entities, relations', async () => {
    const ops: Array<Op> = [];

    // create person type
    const {
      id: personTypeId,
      ops: createPersonTypeOps,
      mapping: personMapping,
    } = await createType({
      newAttributes: {
        age: {
          type: 'NUMBER',
          name: 'Age',
        },
      },
      existingAttributes: {
        name: {
          id: NAME_ATTRIBUTE,
          type: 'TEXT',
        },
      },
    });
    ops.push(...createPersonTypeOps);

    // create restaurant type
    const {
      id: restaurantTypeId,
      ops: createRestaurantTypeOps,
      mapping: restaurantMapping,
    } = await createType({
      existingAttributes: {
        name: {
          id: NAME_ATTRIBUTE,
          type: 'TEXT',
        },
      },
    });
    ops.push(...createRestaurantTypeOps);

    // create loves relation type
    const { id: relationTypeId, ops: createRelationTypeOps } = await createRelationType({
      from: personTypeId,
      to: restaurantTypeId,
      name: 'Loves',
    });
    ops.push(...createRelationTypeOps);

    // create restaurant entity
    const { id: restaurantId, ops: createRestaurantOps } = await createEntity({
      types: [restaurantTypeId],
      attributes: {
        name: 'Yummy Dining',
      },
      mapping: restaurantMapping,
    });
    ops.push(...createRestaurantOps);

    // create person entity
    const { id: personId, ops: createPersonOps } = await createEntity({
      types: [personTypeId],
      attributes: {
        name: 'John Doe',
      },
      mapping: personMapping,
      relations: [{ relationTypeId, toId: restaurantId }],
    });
    ops.push(...createPersonOps);

    expect(ops.length).toBe(12);

    from: Person
to: Name
relation type: PROPERTIES

    // publish all changes
    // const { proposalId } = await publish({
    //   ops,
    //   editName: 'Create person, restaurant, and loves relation',
    //   spaceId: '0x1',
    //   accountId: '0x2',
    // });
  });
});
