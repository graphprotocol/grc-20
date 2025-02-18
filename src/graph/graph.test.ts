import { describe, expect, it } from 'vitest';
import { NAME_ATTRIBUTE } from '../core/ids/system.js';
import type { Op } from '../types.js';
import { createEntity } from './create-entity.js';
import { createRelationType } from './create-relation-type.js';
import { createType } from './create-type.js';

describe('Graph', () => {
  it('creates multiple types, relation types, entities, relations', async () => {
    const operations: Array<Op> = [];

    // create person type
    const {
      id: personTypeId,
      ops: createPersonTypeOps,
      mapping: personMapping,
    } = await createType({
      attributes: {
        name: {
          id: NAME_ATTRIBUTE,
          type: 'TEXT',
          name: 'Name',
        },
        age: {
          // ID is optional and will be generated automatically
          type: 'NUMBER',
          name: 'Age',
        },
      },
    });
    operations.push(...createPersonTypeOps);

    // create restaurant type
    const {
      id: restaurantTypeId,
      ops: createRestaurantTypeOps,
      mapping: restaurantMapping,
    } = await createType({
      attributes: {
        name: {
          id: NAME_ATTRIBUTE,
          type: 'TEXT',
          name: 'Name',
        },
      },
    });
    operations.push(...createRestaurantTypeOps);

    // create loves relation type
    const { id: relationTypeId, ops: createRelationTypeOps } = await createRelationType({
      from: personTypeId,
      to: restaurantTypeId,
      name: 'Loves',
    });
    operations.push(...createRelationTypeOps);

    // create restaurant entity
    const { id: restaurantId, ops: createRestaurantOps } = await createEntity({
      types: [restaurantTypeId],
      attributes: {
        name: 'Yummy Dining',
      },
      mapping: restaurantMapping,
    });
    operations.push(...createRestaurantOps);

    // create person entity
    const { id: personId, ops: createPersonOps } = await createEntity({
      types: [personTypeId],
      attributes: {
        name: 'John Doe',
      },
      mapping: personMapping,
      relations: [{ relationTypeId, toId: restaurantId }],
    });
    operations.push(...createPersonOps);

    expect(operations.length).toBe(12);

    from: Person
to: Name
relation type: PROPERTIES

    // publish all changes
    // const { proposalId } = await publish({
    //   operations,
    //   editName: 'Create person, restaurant, and loves relation',
    //   spaceId: '0x1',
    //   accountId: '0x2',
    // });
  });
});
