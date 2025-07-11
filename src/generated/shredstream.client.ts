/* eslint-disable */
// @generated by protobuf-ts 2.11.1 with parameter eslint_disable,generate_dependencies
// @generated from protobuf file "shredstream.proto" (package "shredstream", syntax proto3)
// tslint:disable
import { ShredstreamProxy } from "./shredstream";
import type { Entry } from "./shredstream";
import type { SubscribeEntriesRequest } from "./shredstream";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Shredstream } from "./shredstream";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HeartbeatResponse } from "./shredstream";
import type { Heartbeat } from "./shredstream";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service shredstream.Shredstream
 */
export interface IShredstreamClient {
    /**
     * RPC endpoint to send heartbeats to keep shreds flowing
     *
     * @generated from protobuf rpc: SendHeartbeat
     */
    sendHeartbeat(input: Heartbeat, options?: RpcOptions): UnaryCall<Heartbeat, HeartbeatResponse>;
}
/**
 * @generated from protobuf service shredstream.Shredstream
 */
export class ShredstreamClient implements IShredstreamClient, ServiceInfo {
    typeName = Shredstream.typeName;
    methods = Shredstream.methods;
    options = Shredstream.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * RPC endpoint to send heartbeats to keep shreds flowing
     *
     * @generated from protobuf rpc: SendHeartbeat
     */
    sendHeartbeat(input: Heartbeat, options?: RpcOptions): UnaryCall<Heartbeat, HeartbeatResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Heartbeat, HeartbeatResponse>("unary", this._transport, method, opt, input);
    }
}
// Shredstream Proxy

/**
 * @generated from protobuf service shredstream.ShredstreamProxy
 */
export interface IShredstreamProxyClient {
    /**
     * @generated from protobuf rpc: SubscribeEntries
     */
    subscribeEntries(input: SubscribeEntriesRequest, options?: RpcOptions): ServerStreamingCall<SubscribeEntriesRequest, Entry>;
}
// Shredstream Proxy

/**
 * @generated from protobuf service shredstream.ShredstreamProxy
 */
export class ShredstreamProxyClient implements IShredstreamProxyClient, ServiceInfo {
    typeName = ShredstreamProxy.typeName;
    methods = ShredstreamProxy.methods;
    options = ShredstreamProxy.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: SubscribeEntries
     */
    subscribeEntries(input: SubscribeEntriesRequest, options?: RpcOptions): ServerStreamingCall<SubscribeEntriesRequest, Entry> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeEntriesRequest, Entry>("serverStreaming", this._transport, method, opt, input);
    }
}
