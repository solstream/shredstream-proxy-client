import { ChannelCredentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

import { type Timestamp } from "./generated/google/protobuf/timestamp";
import { type Socket } from "./generated/shared";
import {
  type CommitmentLevel,
  type Entry,
  type Heartbeat,
  type HeartbeatResponse,
  type SubscribeEntriesRequest,
  type SubscribeRequestFilterAccounts,
  type SubscribeRequestFilterAccountsFilter,
  type SubscribeRequestFilterAccountsFilterLamports,
  type SubscribeRequestFilterAccountsFilterMemcmp,
  type SubscribeRequestFilterSlots,
  type SubscribeRequestFilterTransactions,
  type TraceShred,
} from "./generated/shredstream";
import { ShredstreamProxyClient } from "./generated/shredstream.client";

export function createShredstreamProxyClient(endpointUrl: string) {
  const endpoint = new URL(endpointUrl);

  let transport;
  if (endpoint.protocol === "https:") {
    transport = new GrpcTransport({
      host: endpoint.host,
      channelCredentials: ChannelCredentials.createSsl(),
    });
  } else {
    transport = new GrpcTransport({
      host: endpoint.host,
      channelCredentials: ChannelCredentials.createInsecure(),
    });
  }

  return new ShredstreamProxyClient(transport);
}

export {
  type Timestamp as ProtobufTimestamp,
  type CommitmentLevel as ShredstreamCommitmentLevel,
  type Entry as ShredstreamEntry,
  type Heartbeat as ShredstreamHeartbeat,
  type HeartbeatResponse as ShredstreamHeartbeatResponse,
  type SubscribeEntriesRequest as ShredstreamSubscribeEntriesRequest,
  type SubscribeRequestFilterAccounts as ShredstreamSubscribeRequestFilterAccounts,
  type SubscribeRequestFilterAccountsFilter as ShredstreamSubscribeRequestFilterAccountsFilter,
  type SubscribeRequestFilterAccountsFilterLamports as ShredstreamSubscribeRequestFilterAccountsFilterLamports,
  type SubscribeRequestFilterAccountsFilterMemcmp as ShredstreamSubscribeRequestFilterAccountsFilterMemcmp,
  type SubscribeRequestFilterSlots as ShredstreamSubscribeRequestFilterSlots,
  type SubscribeRequestFilterTransactions as ShredstreamSubscribeRequestFilterTransactions,
  type TraceShred as ShredstreamTraceShred,
  type Socket,
};
