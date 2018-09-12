
```javascript
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = createApi(provider);
```