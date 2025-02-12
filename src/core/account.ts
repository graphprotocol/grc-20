/**
 * This module provides utility functions for working with knowledge graph
 * images in TypeScript.
 *
 * @since 0.0.6
 */

import { make as makeId } from '../id.js';
import { Relation } from '../relation.js';
import type { CreateRelationOp, SetTripleOp } from '../types.js';
import { getChecksumAddress } from './get-checksum-address.js';
import { ETHEREUM } from './ids/network.js';
import { ACCOUNT_TYPE, ADDRESS_ATTRIBUTE, NAME_ATTRIBUTE, NETWORK_ATTRIBUTE, TYPES_ATTRIBUTE } from './ids/system.js';

type MakeAccountReturnType = {
  accountId: string;
  ops: [CreateRelationOp, CreateRelationOp, SetTripleOp, SetTripleOp];
};

/**
 * Returns the ops to create an entity representing an Account.
 *
 * @example
 * ```ts
 * const { accountId, ops } = Account.make('0x1234');
 * console.log(accountId); // 'gw9uTVTnJdhtczyuzBkL3X'
 * console.log(ops); // [...]
 * ```
 *
 * @param address – Ethereum address
 * @returns accountId – base58 encoded v4 uuid representing the account entity: {@link MakeAccountReturnType}
 * @returns ops – The ops for the Account entity: {@link MakeAccountReturnType}
 */
export function make(address: string): MakeAccountReturnType {
  const accountId = makeId();
  const checkedAddress = getChecksumAddress(address);

  return {
    accountId,
    ops: [
      // Types -> Account
      Relation.make({
        fromId: accountId,
        relationTypeId: TYPES_ATTRIBUTE,
        toId: ACCOUNT_TYPE,
      }),
      // Network -> Ethereum
      // Signals that the account is for the Ethereum family of chains
      Relation.make({
        fromId: accountId,
        relationTypeId: NETWORK_ATTRIBUTE,
        toId: ETHEREUM,
      }),
      {
        type: 'SET_TRIPLE',
        triple: {
          entity: accountId,
          attribute: ADDRESS_ATTRIBUTE,
          value: {
            type: 'TEXT',
            value: checkedAddress,
          },
        },
      },
      {
        type: 'SET_TRIPLE',
        triple: {
          entity: accountId,
          attribute: NAME_ATTRIBUTE,
          value: {
            type: 'TEXT',
            value: checkedAddress,
          },
        },
      },
    ],
  };
}
