/**
 * This module provides utility functions for working with data blocks
 * in TypeScript.
 *
 * @since 0.0.6
 */

import { generate } from '../../id.js';
import { Relation } from '../../relation.js';
import { SYSTEM_IDS } from '../../system-ids.js';
import type { CreateRelationOp, SetTripleOp } from '../../types.js';

type DataBlockSourceType = 'QUERY' | 'COLLECTION' | 'GEO';

function getSourceTypeId(sourceType: DataBlockSourceType) {
  switch (sourceType) {
    case 'COLLECTION':
      return SYSTEM_IDS.COLLECTION_DATA_SOURCE;
    case 'GEO':
      return SYSTEM_IDS.ALL_OF_GEO_DATA_SOURCE;
    case 'QUERY':
      return SYSTEM_IDS.QUERY_DATA_SOURCE;
  }
}

type DataBlockArgs = { fromId: string; sourceType: DataBlockSourceType; position?: string; name?: string };

/**
 * Returns the ops to create an entity representing a Data Block.
 *
 * @example
 * ```ts
 * const ops = DataBlock.make({
 *   fromId: 'from-id',
 *   sourceType: 'COLLECTION',
 *   // optional
 *   position: 'position-string',
 *   name: 'name',
 * });
 * ```
 *
 * @param param args {@link TextBlockArgs}
 * @returns ops – The ops for the Data Block entity: {@link Op}[]
 */
export function make({ fromId, sourceType, position, name }: DataBlockArgs): (SetTripleOp | CreateRelationOp)[] {
  const newBlockId = generate();

  const dataBlockType = Relation.make({
    fromId: newBlockId,
    relationTypeId: SYSTEM_IDS.TYPES_ATTRIBUTE,
    toId: SYSTEM_IDS.DATA_BLOCK,
  });

  const dataBlockSourceType = Relation.make({
    fromId: newBlockId,
    relationTypeId: SYSTEM_IDS.DATA_SOURCE_TYPE_RELATION_TYPE,
    toId: getSourceTypeId(sourceType),
  });

  const dataBlockRelation = Relation.make({
    fromId,
    relationTypeId: SYSTEM_IDS.BLOCKS,
    toId: newBlockId,
    position,
  });

  const ops: (SetTripleOp | CreateRelationOp)[] = [dataBlockType, dataBlockSourceType, dataBlockRelation];

  if (name) {
    ops.push({
      type: 'SET_TRIPLE',
      triple: {
        attribute: SYSTEM_IDS.NAME_ATTRIBUTE,
        entity: newBlockId,
        value: {
          type: 'TEXT',
          value: name,
        },
      },
    });
  }

  return ops;
}
