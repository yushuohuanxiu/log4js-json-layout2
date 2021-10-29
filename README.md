# log4js-json-layout2

Improve log Object type for [log4js-node](https://github.com/nomiddlename/log4js-node).

[![NPM](https://nodei.co/npm/log4js-json-layout2.png)](https://www.npmjs.com/package/log4js-json-layout2/)

## Installation

```bash
npm install log4js-json-layout2 --save
```

## Usage

Just need to require('log4js-json-layout2') under require('log4js')

## Example

```js
const log4js = require('log4js');
require('./jsonLayout');
const logger = log4js.getLogger();
logger.level = 'debug';

logger.info('JsonObject:', {name: 'yushuohuanxiu', date: [{id: 1234}, {id: 4567, goods: [{name: 'pen', id: 8879}, {name: 'pencil', id:8880}]}]});
```

### log4js default log

```json
[2021-10-29T14:09:37.362] [INFO] default - JsonObject: {
  name: 'yushuohuanxiu',
  date: [ { id: 1234 }, { id: 4567, goods: [Array] } ]
}
```

### use log4js-json-layout2 log

```json
[2021-10-29T14:10:19.190] [INFO] default - JsonObject: {"name":"yushuohuanxiu","date":[{"id":1234},{"id":4567,"goods":[{"name":"pen","id":8879},{"name":"pencil","id":8880}]}]}
```
