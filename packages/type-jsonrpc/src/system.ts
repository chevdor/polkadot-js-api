// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import createSection from '@polkadot/params/section';

const chain: CreateItemOptions = {
  description: 'Retrieves the chain',
  params: [],
  type: 'String'
};

const name: CreateItemOptions = {
  description: 'Retrieves the node name',
  params: [],
  type: 'String'
};

const version: CreateItemOptions = {
  description: 'Retrieves the version of the node',
  params: [],
  type: 'String'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  chain, name, version
};

export type PrivateMethods = typeof privateMethods;
export type PublicMethods = typeof publicMethods;

/**
 * @summary Methods to retrieve system info.
 */
export default (sname: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(sname)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Methods to retrieve system info',
    public: {
      chain:
        createMethod('chain')(chain),
      name:
        createMethod('name')(name),
      version:
        createMethod('version')(version)
    }
  }));
