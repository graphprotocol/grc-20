export const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'editor',
        type: 'address',
      },
    ],
    name: 'EditorAddressInvalid',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'dao',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'personalAdminPlugin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'initialEditor',
        type: 'address',
      },
    ],
    name: 'GeoPersonalAdminPluginCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'decodeInstallationParams',
    outputs: [
      {
        internalType: 'address',
        name: 'initialEditor',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_initialEditor',
        type: 'address',
      },
    ],
    name: 'encodeInstallationParams',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dao',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'prepareInstallation',
    outputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address[]',
            name: 'helpers',
            type: 'address[]',
          },
          {
            components: [
              {
                internalType: 'enum PermissionLib.Operation',
                name: 'operation',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'where',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'who',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'condition',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'permissionId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct PermissionLib.MultiTargetPermission[]',
            name: 'permissions',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IPluginSetup.PreparedSetupData',
        name: 'preparedSetupData',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dao',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'plugin',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'currentHelpers',
            type: 'address[]',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct IPluginSetup.SetupPayload',
        name: '_payload',
        type: 'tuple',
      },
    ],
    name: 'prepareUninstallation',
    outputs: [
      {
        components: [
          {
            internalType: 'enum PermissionLib.Operation',
            name: 'operation',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'where',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'condition',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'permissionId',
            type: 'bytes32',
          },
        ],
        internalType: 'struct PermissionLib.MultiTargetPermission[]',
        name: 'permissions',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_dao',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: '_currentBuild',
        type: 'uint16',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'plugin',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'currentHelpers',
            type: 'address[]',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct IPluginSetup.SetupPayload',
        name: '_payload',
        type: 'tuple',
      },
    ],
    name: 'prepareUpdate',
    outputs: [
      {
        internalType: 'bytes',
        name: 'initData',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'address[]',
            name: 'helpers',
            type: 'address[]',
          },
          {
            components: [
              {
                internalType: 'enum PermissionLib.Operation',
                name: 'operation',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'where',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'who',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'condition',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'permissionId',
                type: 'bytes32',
              },
            ],
            internalType: 'struct PermissionLib.MultiTargetPermission[]',
            name: 'permissions',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IPluginSetup.PreparedSetupData',
        name: 'preparedSetupData',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
