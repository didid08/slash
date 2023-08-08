// @generated by protoc-gen-es v1.3.0
// @generated from file store/shortcut.proto (package slash.store, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RowStatus } from "./common_pb.js";

/**
 * @generated from enum slash.store.Visibility
 */
export declare enum Visibility {
  /**
   * @generated from enum value: VISIBILITY_UNSPECIFIED = 0;
   */
  VISIBILITY_UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRIVATE = 1;
   */
  PRIVATE = 1,

  /**
   * @generated from enum value: WORKSPACE = 2;
   */
  WORKSPACE = 2,

  /**
   * @generated from enum value: PUBLIC = 3;
   */
  PUBLIC = 3,
}

/**
 * @generated from message slash.store.Shortcut
 */
export declare class Shortcut extends Message<Shortcut> {
  /**
   * @generated from field: int32 id = 1;
   */
  id: number;

  /**
   * @generated from field: int32 creator_id = 2;
   */
  creatorId: number;

  /**
   * @generated from field: int64 created_ts = 3;
   */
  createdTs: bigint;

  /**
   * @generated from field: int64 updated_ts = 4;
   */
  updatedTs: bigint;

  /**
   * @generated from field: slash.store.RowStatus row_status = 5;
   */
  rowStatus: RowStatus;

  /**
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * @generated from field: string link = 7;
   */
  link: string;

  /**
   * @generated from field: string title = 8;
   */
  title: string;

  /**
   * @generated from field: repeated string tags = 9;
   */
  tags: string[];

  /**
   * @generated from field: string description = 10;
   */
  description: string;

  /**
   * @generated from field: slash.store.Visibility visibility = 11;
   */
  visibility: Visibility;

  /**
   * @generated from field: slash.store.OpenGraphMetadata og_metadata = 12;
   */
  ogMetadata?: OpenGraphMetadata;

  constructor(data?: PartialMessage<Shortcut>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "slash.store.Shortcut";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shortcut;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shortcut;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shortcut;

  static equals(a: Shortcut | PlainMessage<Shortcut> | undefined, b: Shortcut | PlainMessage<Shortcut> | undefined): boolean;
}

/**
 * @generated from message slash.store.OpenGraphMetadata
 */
export declare class OpenGraphMetadata extends Message<OpenGraphMetadata> {
  /**
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: string image = 3;
   */
  image: string;

  constructor(data?: PartialMessage<OpenGraphMetadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "slash.store.OpenGraphMetadata";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenGraphMetadata;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenGraphMetadata;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenGraphMetadata;

  static equals(a: OpenGraphMetadata | PlainMessage<OpenGraphMetadata> | undefined, b: OpenGraphMetadata | PlainMessage<OpenGraphMetadata> | undefined): boolean;
}
