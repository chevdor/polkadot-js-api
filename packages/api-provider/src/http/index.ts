// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Logger } from '@polkadot/util/types';
import { RpcCoder } from '../coder/json/types';
import { ProviderInterface, ProviderInterface$Callback, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

import './polyfill';

import assert from '@polkadot/util/assert';
import logger from '@polkadot/util/logger';

import coder from '../coder/json';

export default class HttpProvider implements ProviderInterface {
  private coder: RpcCoder;
  private endpoint: string;
  private l: Logger;

  constructor (endpoint: string) {
    assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

    this.coder = coder();
    this.endpoint = endpoint;
    this.l = logger('api-http');
  }

  isConnected (): boolean {
    return true;
  }

  on (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void {
    this.l.error(`Provider does not have 'on' emitters for type '${type}'`);
  }

  async send (method: string, params: Array<any>): Promise<any> {
    const body = this.coder.encodeJson(method, params);
    const response = await fetch(this.endpoint, {
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Length': `${body.length}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    assert(response.ok, `[${response.status}]: ${response.statusText}`);

    const result = await response.json();

    return this.coder.decodeResponse(result);
  }

  async subscribe (method: string, params: Array<any>, cb: ProviderInterface$Callback): Promise<number> {
    throw new Error('Subscriptions has not been implemented');
  }

  async unsubscribe (method: string, id: number): Promise<boolean> {
    throw new Error('Subscriptions has not been implemented');
  }
}