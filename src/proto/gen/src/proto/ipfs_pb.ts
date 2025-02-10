// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file src/proto/ipfs.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum OpType
 */
export enum OpType {
  /**
   * @generated from enum value: OP_TYPE_UNKNOWN = 0;
   */
  OP_TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: SET_TRIPLE = 1;
   */
  SET_TRIPLE = 1,

  /**
   * @generated from enum value: DELETE_TRIPLE = 2;
   */
  DELETE_TRIPLE = 2,

  /**
   * @generated from enum value: SET_TRIPLE_BATCH = 3;
   */
  SET_TRIPLE_BATCH = 3,

  /**
   * @generated from enum value: DELETE_ENTITY = 4;
   */
  DELETE_ENTITY = 4,

  /**
   * @generated from enum value: CREATE_RELATION = 5;
   */
  CREATE_RELATION = 5,

  /**
   * @generated from enum value: DELETE_RELATION = 6;
   */
  DELETE_RELATION = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(OpType)
proto3.util.setEnumType(OpType, "OpType", [
  { no: 0, name: "OP_TYPE_UNKNOWN" },
  { no: 1, name: "SET_TRIPLE" },
  { no: 2, name: "DELETE_TRIPLE" },
  { no: 3, name: "SET_TRIPLE_BATCH" },
  { no: 4, name: "DELETE_ENTITY" },
  { no: 5, name: "CREATE_RELATION" },
  { no: 6, name: "DELETE_RELATION" },
]);

/**
 * @generated from enum ValueType
 */
export enum ValueType {
  /**
   * @generated from enum value: VALUE_TYPE_UNKNOWN = 0;
   */
  VALUE_TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: TEXT = 1;
   */
  TEXT = 1,

  /**
   * @generated from enum value: NUMBER = 2;
   */
  NUMBER = 2,

  /**
   * @generated from enum value: CHECKBOX = 3;
   */
  CHECKBOX = 3,

  /**
   * @generated from enum value: URL = 4;
   */
  URL = 4,

  /**
   * @generated from enum value: TIME = 5;
   */
  TIME = 5,

  /**
   * @generated from enum value: POINT = 6;
   */
  POINT = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(ValueType)
proto3.util.setEnumType(ValueType, "ValueType", [
  { no: 0, name: "VALUE_TYPE_UNKNOWN" },
  { no: 1, name: "TEXT" },
  { no: 2, name: "NUMBER" },
  { no: 3, name: "CHECKBOX" },
  { no: 4, name: "URL" },
  { no: 5, name: "TIME" },
  { no: 6, name: "POINT" },
]);

/**
 * @generated from enum ActionType
 */
export enum ActionType {
  /**
   * @generated from enum value: ACTION_TYPE_UNKNOWN = 0;
   */
  ACTION_TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: ADD_EDIT = 1;
   */
  ADD_EDIT = 1,

  /**
   * @generated from enum value: ADD_SUBSPACE = 2;
   */
  ADD_SUBSPACE = 2,

  /**
   * @generated from enum value: REMOVE_SUBSPACE = 3;
   */
  REMOVE_SUBSPACE = 3,

  /**
   * @generated from enum value: IMPORT_SPACE = 4;
   */
  IMPORT_SPACE = 4,

  /**
   * @generated from enum value: ARCHIVE_SPACE = 5;
   */
  ARCHIVE_SPACE = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(ActionType)
proto3.util.setEnumType(ActionType, "ActionType", [
  { no: 0, name: "ACTION_TYPE_UNKNOWN" },
  { no: 1, name: "ADD_EDIT" },
  { no: 2, name: "ADD_SUBSPACE" },
  { no: 3, name: "REMOVE_SUBSPACE" },
  { no: 4, name: "IMPORT_SPACE" },
  { no: 5, name: "ARCHIVE_SPACE" },
]);

/**
 * @generated from message IpfsMetadata
 */
export class IpfsMetadata extends Message<IpfsMetadata> {
  /**
   * We version the data structured used to represent proposal metadata. Each
   * proposal type has their own metadata and versioning that we can change
   * independently of other proposal types.
   *
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: ActionType type = 2;
   */
  type = ActionType.ACTION_TYPE_UNKNOWN;

  constructor(data?: PartialMessage<IpfsMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "IpfsMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ActionType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IpfsMetadata {
    return new IpfsMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IpfsMetadata {
    return new IpfsMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IpfsMetadata {
    return new IpfsMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: IpfsMetadata | PlainMessage<IpfsMetadata> | undefined, b: IpfsMetadata | PlainMessage<IpfsMetadata> | undefined): boolean {
    return proto3.util.equals(IpfsMetadata, a, b);
  }
}

/**
 * @generated from message Edit
 */
export class Edit extends Message<Edit> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: ActionType type = 2;
   */
  type = ActionType.ACTION_TYPE_UNKNOWN;

  /**
   * @generated from field: string id = 3;
   */
  id = "";

  /**
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * @generated from field: repeated Op ops = 5;
   */
  ops: Op[] = [];

  /**
   * @generated from field: repeated string authors = 6;
   */
  authors: string[] = [];

  constructor(data?: PartialMessage<Edit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Edit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ActionType) },
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ops", kind: "message", T: Op, repeated: true },
    { no: 6, name: "authors", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Edit {
    return new Edit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Edit {
    return new Edit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Edit {
    return new Edit().fromJsonString(jsonString, options);
  }

  static equals(a: Edit | PlainMessage<Edit> | undefined, b: Edit | PlainMessage<Edit> | undefined): boolean {
    return proto3.util.equals(Edit, a, b);
  }
}

/**
 * @generated from message ImportEdit
 */
export class ImportEdit extends Message<ImportEdit> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: ActionType type = 2;
   */
  type = ActionType.ACTION_TYPE_UNKNOWN;

  /**
   * @generated from field: string id = 3;
   */
  id = "";

  /**
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * @generated from field: repeated Op ops = 5;
   */
  ops: Op[] = [];

  /**
   * @generated from field: repeated string authors = 6;
   */
  authors: string[] = [];

  /**
   * @generated from field: string created_by = 7;
   */
  createdBy = "";

  /**
   * @generated from field: string created_at = 8;
   */
  createdAt = "";

  /**
   * @generated from field: string block_hash = 9;
   */
  blockHash = "";

  /**
   * @generated from field: string block_number = 10;
   */
  blockNumber = "";

  /**
   * @generated from field: string transaction_hash = 11;
   */
  transactionHash = "";

  constructor(data?: PartialMessage<ImportEdit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ImportEdit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ActionType) },
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ops", kind: "message", T: Op, repeated: true },
    { no: 6, name: "authors", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "created_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "block_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "block_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "transaction_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportEdit {
    return new ImportEdit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportEdit {
    return new ImportEdit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportEdit {
    return new ImportEdit().fromJsonString(jsonString, options);
  }

  static equals(a: ImportEdit | PlainMessage<ImportEdit> | undefined, b: ImportEdit | PlainMessage<ImportEdit> | undefined): boolean {
    return proto3.util.equals(ImportEdit, a, b);
  }
}

/**
 * @generated from message Op
 */
export class Op extends Message<Op> {
  /**
   * @generated from field: OpType type = 1;
   */
  type = OpType.OP_TYPE_UNKNOWN;

  /**
   * @generated from field: Triple triple = 2;
   */
  triple?: Triple;

  /**
   * @generated from field: Entity entity = 3;
   */
  entity?: Entity;

  /**
   * @generated from field: Relation relation = 4;
   */
  relation?: Relation;

  /**
   * @generated from field: repeated Triple triples = 5;
   */
  triples: Triple[] = [];

  constructor(data?: PartialMessage<Op>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Op";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(OpType) },
    { no: 2, name: "triple", kind: "message", T: Triple },
    { no: 3, name: "entity", kind: "message", T: Entity },
    { no: 4, name: "relation", kind: "message", T: Relation },
    { no: 5, name: "triples", kind: "message", T: Triple, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Op {
    return new Op().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Op {
    return new Op().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Op {
    return new Op().fromJsonString(jsonString, options);
  }

  static equals(a: Op | PlainMessage<Op> | undefined, b: Op | PlainMessage<Op> | undefined): boolean {
    return proto3.util.equals(Op, a, b);
  }
}

/**
 * @generated from message Triple
 */
export class Triple extends Message<Triple> {
  /**
   * @generated from field: string entity = 1;
   */
  entity = "";

  /**
   * @generated from field: string attribute = 2;
   */
  attribute = "";

  /**
   * @generated from field: Value value = 3;
   */
  value?: Value;

  constructor(data?: PartialMessage<Triple>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Triple";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "attribute", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "message", T: Value },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Triple {
    return new Triple().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Triple {
    return new Triple().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Triple {
    return new Triple().fromJsonString(jsonString, options);
  }

  static equals(a: Triple | PlainMessage<Triple> | undefined, b: Triple | PlainMessage<Triple> | undefined): boolean {
    return proto3.util.equals(Triple, a, b);
  }
}

/**
 * @generated from message Value
 */
export class Value extends Message<Value> {
  /**
   * @generated from field: ValueType type = 1;
   */
  type = ValueType.VALUE_TYPE_UNKNOWN;

  /**
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ValueType) },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value {
    return new Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value {
    return new Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value {
    return new Value().fromJsonString(jsonString, options);
  }

  static equals(a: Value | PlainMessage<Value> | undefined, b: Value | PlainMessage<Value> | undefined): boolean {
    return proto3.util.equals(Value, a, b);
  }
}

/**
 * @generated from message Relation
 */
export class Relation extends Message<Relation> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string type = 2;
   */
  type = "";

  /**
   * @generated from field: string from_entity = 3;
   */
  fromEntity = "";

  /**
   * @generated from field: string to_entity = 4;
   */
  toEntity = "";

  /**
   * @generated from field: string index = 5;
   */
  index = "";

  constructor(data?: PartialMessage<Relation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Relation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "from_entity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "to_entity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relation {
    return new Relation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relation {
    return new Relation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relation {
    return new Relation().fromJsonString(jsonString, options);
  }

  static equals(a: Relation | PlainMessage<Relation> | undefined, b: Relation | PlainMessage<Relation> | undefined): boolean {
    return proto3.util.equals(Relation, a, b);
  }
}

/**
 * @generated from message Entity
 */
export class Entity extends Message<Entity> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: repeated string types = 2;
   */
  types: string[] = [];

  constructor(data?: PartialMessage<Entity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Entity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Entity {
    return new Entity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Entity {
    return new Entity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Entity {
    return new Entity().fromJsonString(jsonString, options);
  }

  static equals(a: Entity | PlainMessage<Entity> | undefined, b: Entity | PlainMessage<Entity> | undefined): boolean {
    return proto3.util.equals(Entity, a, b);
  }
}

/**
 * @generated from message Import
 */
export class Import extends Message<Import> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: ActionType type = 2;
   */
  type = ActionType.ACTION_TYPE_UNKNOWN;

  /**
   * @generated from field: string previous_network = 3;
   */
  previousNetwork = "";

  /**
   * @generated from field: string previous_contract_address = 4;
   */
  previousContractAddress = "";

  /**
   * @generated from field: repeated string edits = 5;
   */
  edits: string[] = [];

  constructor(data?: PartialMessage<Import>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Import";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ActionType) },
    { no: 3, name: "previous_network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "previous_contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "edits", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Import {
    return new Import().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Import {
    return new Import().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Import {
    return new Import().fromJsonString(jsonString, options);
  }

  static equals(a: Import | PlainMessage<Import> | undefined, b: Import | PlainMessage<Import> | undefined): boolean {
    return proto3.util.equals(Import, a, b);
  }
}

/**
 * @generated from message Options
 */
export class Options extends Message<Options> {
  /**
   * @generated from field: string format = 1;
   */
  format = "";

  /**
   * @generated from field: string crop = 2;
   */
  crop = "";

  constructor(data?: PartialMessage<Options>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Options";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "crop", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Options {
    return new Options().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Options {
    return new Options().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Options {
    return new Options().fromJsonString(jsonString, options);
  }

  static equals(a: Options | PlainMessage<Options> | undefined, b: Options | PlainMessage<Options> | undefined): boolean {
    return proto3.util.equals(Options, a, b);
  }
}

