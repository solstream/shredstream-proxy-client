import { ChannelCredentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

import { Timestamp } from "./generated/google/protobuf/timestamp";
import { Socket } from "./generated/shared";
import {
  CommitmentLevel,
  Entry,
  Heartbeat,
  HeartbeatResponse,
  SubscribeEntriesRequest,
  SubscribeRequestFilterAccounts,
  SubscribeRequestFilterAccountsFilter,
  SubscribeRequestFilterAccountsFilterLamports,
  SubscribeRequestFilterAccountsFilterMemcmp,
  SubscribeRequestFilterSlots,
  SubscribeRequestFilterTransactions,
  TraceShred,
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
  Timestamp as ProtobufTimestamp,
  CommitmentLevel as ShredstreamCommitmentLevel,
  Entry as ShredstreamEntry,
  Heartbeat as ShredstreamHeartbeat,
  HeartbeatResponse as ShredstreamHeartbeatResponse,
  SubscribeEntriesRequest as ShredstreamSubscribeEntriesRequest,
  SubscribeRequestFilterAccounts as ShredstreamSubscribeRequestFilterAccounts,
  SubscribeRequestFilterAccountsFilter as ShredstreamSubscribeRequestFilterAccountsFilter,
  SubscribeRequestFilterAccountsFilterLamports as ShredstreamSubscribeRequestFilterAccountsFilterLamports,
  SubscribeRequestFilterAccountsFilterMemcmp as ShredstreamSubscribeRequestFilterAccountsFilterMemcmp,
  SubscribeRequestFilterSlots as ShredstreamSubscribeRequestFilterSlots,
  SubscribeRequestFilterTransactions as ShredstreamSubscribeRequestFilterTransactions,
  TraceShred as ShredstreamTraceShred,
  Socket,
};
