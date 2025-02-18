import { describe, expect, it } from 'vitest';
import { AUTHORS_ATTRIBUTE, WEBSITE_ATTRIBUTE } from '../core/ids/content.js';
import { ATTRIBUTE, NAME_ATTRIBUTE, SCHEMA_TYPE, TYPES_ATTRIBUTE } from '../core/ids/system.js';
import { createType } from './create-type.js';

describe('createType', () => {
  it('creates a basic type', async () => {
    const type = await createType({
      name: 'Article',
    });

    expect(type).toBeDefined();
    expect(typeof type.id).toBe('string');
    expect(type.ops).toBeDefined();
    expect(type.ops.length).toBe(2);

    // Check name triple
    expect(type.ops[0]?.type).toBe('SET_TRIPLE');
    expect(type.ops[0]).toMatchObject({
      triple: {
        attribute: NAME_ATTRIBUTE,
        entity: type.id,
        value: {
          type: 'TEXT',
          value: 'Article',
        },
      },
      type: 'SET_TRIPLE',
    });

    // Check type relation to itself (marking it as a type)
    expect(type.ops[1]?.type).toBe('CREATE_RELATION');
    if (type.ops[1]?.type === 'CREATE_RELATION') {
      expect(type.ops[1]).toMatchObject({
        relation: {
          fromEntity: type.id,
          toEntity: SCHEMA_TYPE,
          type: TYPES_ATTRIBUTE,
        },
        type: 'CREATE_RELATION',
      });
    }
  });

  it('creates a type with multiple properties', async () => {
    const type = await createType({
      name: 'Article',
      properties: [WEBSITE_ATTRIBUTE, AUTHORS_ATTRIBUTE],
    });

    expect(type).toBeDefined();
    expect(typeof type.id).toBe('string');
    expect(type.ops).toBeDefined();
    expect(type.ops.length).toBe(4);

    // Check name triple
    expect(type.ops[0]?.type).toBe('SET_TRIPLE');
    expect(type.ops[0]).toMatchObject({
      triple: {
        attribute: NAME_ATTRIBUTE,
        entity: type.id,
        value: {
          type: 'TEXT',
          value: 'Article',
        },
      },
      type: 'SET_TRIPLE',
    });

    // Check types relation
    expect(type.ops[1]?.type).toBe('CREATE_RELATION');
    expect(type.ops[1]).toMatchObject({
      relation: {
        fromEntity: type.id,
        toEntity: SCHEMA_TYPE,
        type: TYPES_ATTRIBUTE,
      },
      type: 'CREATE_RELATION',
    });

    // Check website relation
    expect(type.ops[2]?.type).toBe('CREATE_RELATION');
    expect(type.ops[2]).toMatchObject({
      relation: {
        fromEntity: type.id,
        toEntity: WEBSITE_ATTRIBUTE,
        type: ATTRIBUTE,
      },
      type: 'CREATE_RELATION',
    });

    // Check author relation
    expect(type.ops[3]?.type).toBe('CREATE_RELATION');
    expect(type.ops[3]).toMatchObject({
      relation: {
        fromEntity: type.id,
        toEntity: AUTHORS_ATTRIBUTE,
        type: ATTRIBUTE,
      },
      type: 'CREATE_RELATION',
    });
  });
});
