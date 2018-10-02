

# Type parameters
#### T :  [Base](_codec_base_.base.md)
# Hierarchy

↳  [Extrinsics](_extrinsics_.extrinsics.md)

**↳ PendingExtrinsics**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new PendingExtrinsics**(Type: *`object`*, value?: *`Array`<`any`>*): [PendingExtrinsics](_pendingextrinsics_.pendingextrinsics.md)

*Inherited from [Vector](_codec_vector_.vector.md).[constructor](_codec_vector_.vector.md#constructor)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Vector.ts:19](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Type | `object` | - |
| `Default value` value | `Array`<`any`> |  [] as Array&lt;any&gt; |

**Returns:** [PendingExtrinsics](_pendingextrinsics_.pendingextrinsics.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Inherited from [Vector](_codec_vector_.vector.md).[Type](_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:42](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L42)*

**Returns:** `string`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[length](_codec_vector_.vector.md#length)*

*Defined in [codec/Vector.ts:46](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L46)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[byteLength](_codec_vector_.vector.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Vector.ts:50](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L50)*

**Returns:** `number`

___
<a id="filter"></a>

##  filter

▸ **filter**(fn: *`function`*): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[filter](_codec_vector_.vector.md#filter)*

*Defined in [codec/Vector.ts:56](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L56)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`T`>

___
<a id="find"></a>

##  find

▸ **find**(fn: *`function`*):  `T` &#124; `undefined`

*Inherited from [Vector](_codec_vector_.vector.md).[find](_codec_vector_.vector.md#find)*

*Defined in [codec/Vector.ts:60](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:**  `T` &#124; `undefined`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(fn: *`function`*): `any`

*Inherited from [Vector](_codec_vector_.vector.md).[forEach](_codec_vector_.vector.md#foreach)*

*Defined in [codec/Vector.ts:64](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `any`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Vector](_codec_vector_.vector.md)<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[fromJSON](_codec_vector_.vector.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Vector.ts:68](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Vector](_codec_vector_.vector.md)<`T`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Vector](_codec_vector_.vector.md)<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[fromU8a](_codec_vector_.vector.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Vector.ts:76](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Vector](_codec_vector_.vector.md)<`T`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `T`

*Inherited from [Vector](_codec_vector_.vector.md).[get](_codec_vector_.vector.md#get)*

*Defined in [codec/Vector.ts:93](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="map"></a>

##  map

▸ **map**<`O`>(fn: *`function`*): `Array`<`O`>

*Inherited from [Vector](_codec_vector_.vector.md).[map](_codec_vector_.vector.md#map)*

*Defined in [codec/Vector.ts:97](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L97)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`O`>

___
<a id="push"></a>

##  push

▸ **push**(item: *`T`*): `void`

*Inherited from [Vector](_codec_vector_.vector.md).[push](_codec_vector_.vector.md#push)*

*Defined in [codec/Vector.ts:101](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="reduce"></a>

##  reduce

▸ **reduce**<`O`>(fn: *`function`*, initial: *`O`*): `O`

*Inherited from [Vector](_codec_vector_.vector.md).[reduce](_codec_vector_.vector.md#reduce)*

*Defined in [codec/Vector.ts:106](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L106)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |
| initial | `O` |

**Returns:** `O`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Vector](_codec_vector_.vector.md).[toJSON](_codec_vector_.vector.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Vector.ts:110](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L110)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Vector](_codec_vector_.vector.md).[toString](_codec_vector_.vector.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Vector.ts:125](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L125)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Vector](_codec_vector_.vector.md).[toU8a](_codec_vector_.vector.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Vector.ts:116](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`object`*): `object`

*Inherited from [Vector](_codec_vector_.vector.md).[with](_codec_vector_.vector.md#with)*

*Defined in [codec/Vector.ts:34](https://github.com/polkadot-js/api/blob/16bf230/packages/types/src/codec/Vector.ts#L34)*

**Type parameters:**

#### O :  [Base](_codec_base_.base.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `object` |

**Returns:** `object`

___
