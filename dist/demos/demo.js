var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//tslint:disable
import { openIDBUtilities } from "../utilities/index-db.utility";
function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var stores, addResponse, getResponse, putResponse, updateResponse, removeResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    /**
                     *
                     * Call openIDBUtilities(config) with config parameters to open an IndexedDB and return a promise that holds
                     * an Object with helper methods, add(), put(), update(), get() and remove().
                     * if one doesn't exsist then it will be made. Note: Once ObjectStores are defined they
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
                    console.log('calling open');
                    return [4 /*yield*/, openIDBUtilities({
                            version: 1,
                            dbName: 'DemoIDB-1',
                            storeNames: ['demoStore0', 'demoStore1'],
                            keyPath: 'myKey' // keyPath is optional, if provided this will be how you get selective values from the stores and must be a property in your object value you wish to store. If omitted the stores will be indexed 0 to (n-1);
                        })];
                case 1:
                    stores = _a.sent();
                    console.log('stores', stores);
                    /**
                     * 	add(storeName: string, value: any) => Promise<string | {}>;
                     * 	returns a string with the saved value's key or Request.Result Object.
                     * 	Note: You cannot add new values to objects with keys that already exsist, use put() or update().
                     */
                    console.log('calling add');
                    return [4 /*yield*/, stores.add('demoStore3', {
                            // myKey: 'foo',
                            value: [{ bat: 'squeak' }, { bear: 'grrr' }]
                        })
                            .catch(function (err) { return console.log('Add Error', err); })];
                case 2:
                    addResponse = _a.sent();
                    console.log('add response', addResponse); // add response foo
                    /**
                     *  get(storeName: string, key: string) => Promise<any>;
                     *  returns the value stored that matches the value stored in [keyPath]: String
                     *  or throws an Request.Result Object
                     */
                    console.log('calling get');
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 3:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // get response {myKey:'foo', value: [{ bat: 'squeak'}, {bear: 'grrr'}]}
                    /**
                     *  put(storeName: string, value: any) => Promise<string | {}>;
                     *  returns a string with the saved value's key or throws Request.Result Object.
                     *  Note: This will overwrite your value saved related your key.
                     */
                    console.log('calling put');
                    return [4 /*yield*/, stores.put('demoStore0', {
                            myKey: 'foo',
                            value: [{ cat: 'meow' }]
                        })];
                case 4:
                    putResponse = _a.sent();
                    console.log('put response', putResponse); // put response foo
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 5:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // {myKey:'foo', value: [{cat: 'meow'}]}
                    /**
                     *  update(storeName: string, key: string, value: any) => Promise<string | {}>;
                     *  returns a string with the updated value's key or throws an Request.Result Object.
                     *  Note: This will merge with your stored value, if it is an array it will concatenate
                     *  the new values.
                     */
                    console.log('calling update');
                    return [4 /*yield*/, stores.update('demoStore0', 'foo', {
                            myKey: 'foo',
                            value: [{ bat: 'squeak' }, { bear: 'grrr', dog: ['woof', 'bark'] }, { cat: 'purr' }, ['happy hacking!']]
                        })];
                case 6:
                    updateResponse = _a.sent();
                    console.log('update response', updateResponse); // update response foo
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 7:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // get response {myKey:'foo', value: [{cat: 'meow'}, { bat: 'squeak'}, {bear: 'grrr', dog: ['woof', 'bark']}, {cat: 'purr'}, ['happy hacking!']]}
                    /**
                     *  remove(storeName: string, key: string) => Promise<any>;
                     *  returns void or throws an Request.Result Object
                     */
                    console.log('calling remove');
                    return [4 /*yield*/, stores.remove('demoStore0', 'foo')
                            .catch(function (err) { return console.log('remove error', err); })];
                case 8:
                    removeResponse = _a.sent();
                    console.log('removeResponse', removeResponse); // removeResponse undefined
                    return [2 /*return*/];
            }
        });
    });
}
console.log('calling demo');
demo()
    .then(function (res) { return console.log('response', res); })
    .catch(function (err) { return console.log('Error: ', err); });
//# sourceMappingURL=demo.js.map