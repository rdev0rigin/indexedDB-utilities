# IndexDB-Utilities
>A lightweight utility helper that opens or creates an `IndexedDB` with `objectStores` that returns a promise that resolves utility methods.

## Install

### NPM
```shell
npm i --save indexed-db-utilities
```

### Yarn
```shell
yarn add indexed-db-utilities
```

## How to use

Opening an instance requires a config object.
<b>Note:</b> Once the dbName is declared with an instance the keyPath is then tied to it and cannot change without changing
the version number.

```typescript
const config: {
    version: Number
    dbName: String
    storeNames: String[]
    keyPath?: String
}
```
Call `openIDBUtilities(config)` to return a promise holding an `IDBUtility` instance which has utility methods that return a promise.
These promises throw a `Request.result` object on error.

```typescript

const IDBUtility: {
    add: (storeName: string, value: {}) => Promise<string | Request.result>;
    put: (storeName: string, value: {}) => Promise<string | Request.result>;
    update: (storeName: string, keyValue: string, value: {}) => Promise<string | Request.result>;
    get: (storeName: string, keyValue: string) => Promise<{[keyPath]: string , ...{}} | Request.result>;
    getAll: (storeName: string) => Promise<{}>;
    remove: (storeName: string, keyValue: string) => Promise<void | Request.result>;
}

```

## TypeScript

```typescript

import { openIDBUtilities } from 'indexed-db-utilities/dist/utilities/index-db.utility';

async function demo() {

    /**
    *
    * Call openIDBUtilities(config) with config parameters to open an IndexedDB and return a promise that holds
    * an Object with helper methods, add(), put(), update(), get() and remove().
    * if one doesn't exist then it will be made. Note: Once ObjectStores are defined they
    * IDBs version number and to add more you must provide a new version number.
    *
    *  The Config Object = {
    *      version: Number
    *      dbName: String
    *      storeNames: String[]
    *      keyPath?: String
    *	}
    *
    **/

    const stores = await openIDBUtilities({
        version: 1, // Numbers should be a positive Number and not contain any decimal digits.
        dbName: 'DemoIDB-1',
        storeNames: ['demoStore0', 'demoStore1'], // Provide and array of the storeNames in which you wish to store values in.
        keyPath: 'myKey' // keyPath is optional, if provided this will be how you get selective values from the stores and must be a property in your object value you wish to store. If omitted the stores will be indexed 0 to (n-1);
    });

    /**
    * 	add(storeName: string, value: any) => Promise<string | {}>;
    * 	returns a string with the saved value's key or Request.Result Object.
    * 	Note: You cannot add new values to objects with keys that already exsist, use put() or update().
    */
    const addResponse = await stores.add(
    'demoStore0',
    {
        myKey: 'foo',
        value: [{ bat: 'squeak'}, {bear: 'grrr'}]
    })
        .catch(err => console.log('Add Error', err));

    /**
    *  get(storeName: string, key: string) => Promise<any>;
    *  returns the value stored that matches the value stored in [keyPath]: String
    *  or throws an Request.Result Object
    */
    let getResponse = await stores.get('demoStore0', 'foo');

    /**
    *  put(storeName: string, value: any) => Promise<string | {}>;
    *  returns a string with the saved value's key or throws Request.Result Object.
    *  Note: This will overwrite your value saved related your key.
    */
    const putResponse = await stores.put(
    'demoStore0',
    {
        myKey: 'foo',
        value: [{ cat: 'meow'}]
    });


    /**
    *  update(storeName: string, key: string, value: any) => Promise<string | {}>;
    *  returns a string with the updated value's key or throws an Request.Result Object.
    *  Note: This will merge with your stored value, if it is an array it will concatenate
    *  the new values.
    */    
    const updateResponse = await stores.update(
    'demoStore0',
    'foo',
    {
        myKey: 'foo',
        value: [{ bat: 'squeak'}, {bear: 'grrr', dog: ['woof', 'bark']}, {cat: 'purr'}, ['happy hacking!']]
    });
    
    /**
    * getAll (storeName: string) => Promise<{}>
    * Returns all values in the store.
    */
    for (let i = 0; i < 10; i++) {
        await stores.put('demoStore0', {
            myKey: i.toString(),
            value: i
        })
    }
    const getAllResponse = await stores.getAll('demoStore0');
    
    /**
    *  remove(storeName: string, key: string) => Promise<any>;
    *  returns void or throws an Request.Result Object
    */
    const removeResponse = await stores.remove('demoStore0', 'foo')
        .catch(err => console.log('remove error', err)); // removeResponse undefined
}
```

## ES6
example
```javascript
import { openIDBUtilities } from 'indexed-db-utilities/dist/utilities/index-db.utility';

 async function offlineCache() {
    const cache = await openIDBUtilities({
        version: 1,
        dbName: 'DemoIDB-1',
        storeNames: ['demoStore0', 'demoStore1'],
        keyPath: 'myKey'
    });

    cache.add('demoStore1', {myKey: 'foo', bat: 'squeak'}); // addResponse === 'foo'
}

```

## Browser

Place a `<script src="/node_modules/indexed-db-utilities/dist/indexed-db-utilities.js"></script>` inside of your document.
Note: This attaches `openIDBUtilities()` to your window, use ES6's `import` or TypeScript to avoid the global.


example
```html
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Demo</title>
       </head>
       <body>
           <h1>Demo</h1>
           <script src="/node_modules/indexed-db-utilities/dist/indexed-db-utilities.js"></script>
           <script>
               const stores = openIDBUtilities({
                   version: 1,
                   dbName: 'DemoIDB-1',
                   storeNames: ['demoStore0', 'demoStore1'],
                   keyPath: 'myKey'
               });
               stores.then(db => {
                   // call helper methods on the resolved object

                   const addResponse = db.add('demoStore1', {myKey: 'foo', bat: 'squeak'}); // addResponse === 'foo'
                   console.log('addResponse', addResponse);

               });
           </script>
       </body>
   </html>
```
