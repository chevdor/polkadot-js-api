// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { ProviderInterface } from '../types';

require('./polyfill');

const assert = require('@polkadot/util/assert');
const JsonRpcCoder = require('../jsonRpcCoder');

module.exports = class HttpProvider extends JsonRpcCoder implements ProviderInterface {
  _endpoint: string;

  constructor (endpoint: string) {
    super();

    assert(endpoint, 'Endpoint should be provided');
    assert(/^http:\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

    this._endpoint = endpoint;
  }

  get isConnected (): boolean {
    return true;
  }

  async send (method: string, params: Array<any>): Promise<any> {
    const body = this.encodeJson(method, params);
    const response = await fetch(this._endpoint, {
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

    return this.decodeResponse(result);
  }
};