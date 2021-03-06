/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_index_db_utility__ = __webpack_require__(1);
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

function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var stores, addResponse, getResponse, putResponse, updateResponse, i, getAllResponse, removeResponse, i;
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
                    return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__utilities_index_db_utility__["a" /* openIDBUtilities */])({
                            version: 3,
                            dbName: 'DemoIDB-2',
                            storeNames: ['demoStore0', 'demoStore1', "demoStore2"],
                            keyPath: 'myKey' // keyPath is optional, if provided this will be how you get selective values from the stores and must be a property in your object value you wish to store. If omitted the stores will be indexed 0 to (n-1);
                        })];
                case 1:
                    stores = _a.sent();
                    console.log('stores', stores);
                    /**
                     * 	add(storeName: string, value: any) => Promise<string | {}>;
                     * 	Returns a string with the saved value's key or Request.Result Object.
                     * 	Note: You cannot add new values to objects with keys that already exsist, use put() or update().
                     */
                    console.log('calling add');
                    return [4 /*yield*/, stores.add('demoStore0', {
                            myKey: 'foo',
                            value: [{ bat: 'squeak' }, { bear: 'grrr' }]
                        })
                            .catch(function (err) { return console.log('Add Error: ', err); })];
                case 2:
                    addResponse = _a.sent();
                    console.log('add response', addResponse); // add response foo
                    /**
                     *  get(storeName: string, key: string) => Promise<any>;
                     *  Returns the value stored that matches the value stored in [keyPath]: String
                     *  or throws an Request.Result Object
                     */
                    console.log('calling get');
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 3:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // get response {myKey:'foo', value: [{ bat: 'squeak'}, {bear: 'grrr'}]}
                    /**
                     *  put(storeName: string, value: any) => Promise<string | {}>;
                     *  Returns a string with the saved value's key or throws Request.Result Object.
                     *  Note: This will overwrite your value saved related your key.
                     */
                    console.log('calling put');
                    return [4 /*yield*/, stores.put('demoStore0', {
                            myKey: 'foo',
                            value: [{ cat: 'meow' }]
                        })
                            .catch(function (err) { return "Put Error: " + err; })];
                case 4:
                    putResponse = _a.sent();
                    console.log('put response', putResponse); // put response foo
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 5:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // {myKey:'foo', value: [{cat: 'meow'}]}
                    /**
                     *  update(storeName: string, key: string, value: any) => Promise<string | {}>;
                     *  Returns a string with the updated value's key or throws an Request.Result Object.
                     *  Note: This will merge with your stored value, if it is an array it will concatenate
                     *  the new values.
                     */
                    console.log('calling update');
                    return [4 /*yield*/, stores.update('demoStore0', 'foo', {
                            myKey: 'foo',
                            value: [{ bat: 'squeak' }, { bear: 'grrr', dog: ['woof', 'bark'] }, { cat: 'purr' }, ['happy hacking!']]
                        })
                            .catch(function (err) { return "Update Error: " + err; })];
                case 6:
                    updateResponse = _a.sent();
                    console.log('update response', updateResponse); // update response foo
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 7:
                    getResponse = _a.sent();
                    console.log('get response', getResponse); // get response {myKey:'foo', value: [{cat: 'meow'}, { bat: 'squeak'}, {bear: 'grrr', dog: ['woof', 'bark']}, {cat: 'purr'}, ['happy hacking!']]}
                    i = 0;
                    _a.label = 8;
                case 8:
                    if (!(i < 10)) return [3 /*break*/, 11];
                    return [4 /*yield*/, stores.put('demoStore0', {
                            myKey: i.toString(),
                            value: i
                        })];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    i++;
                    return [3 /*break*/, 8];
                case 11: return [4 /*yield*/, stores.getAll('demoStore0')];
                case 12:
                    getAllResponse = _a.sent();
                    console.log('getAll Response', getAllResponse);
                    /**
                     *  remove(storeName: string, key: string) => Promise<any>;
                     *  returns void or throws an Request.Result Object
                     */
                    console.log('calling remove');
                    return [4 /*yield*/, stores.remove('demoStore0', 'foo')
                            .catch(function (err) { return console.log('remove error', err); })];
                case 13:
                    removeResponse = _a.sent();
                    console.log('removeResponse', removeResponse); // removeResponse undefined
                    i = 0;
                    _a.label = 14;
                case 14:
                    if (!(i < 10)) return [3 /*break*/, 17];
                    return [4 /*yield*/, stores.remove('demoStore0', i.toString())
                            .catch(function (err) { return console.log('Remove Error', err); })];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    i++;
                    return [3 /*break*/, 14];
                case 17: return [2 /*return*/];
            }
        });
    });
}
console.log('calling demo');
demo()
    .then(function (res) { return console.log('response', res); })
    .catch(function (err) { return console.log('Error: ', err); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openIDBUtilities; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var _this = this;
var openIDB = function (config) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!window.indexedDB) {
            // console.log("Your browser doesn't support a stable version of IndexedDB. IndexedDB will not be available.");
            return [2 /*return*/, void 0];
        }
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var request = indexedDB.open(config.dbName, config.version);
                request.onerror = function () {
                    reject(request.result);
                };
                request.onupgradeneeded = function (evt) {
                    var nextDb = evt.target.result;
                    var newStores = config.storeNames
                        .filter(function (value, i) { return value !== nextDb.objectStoreNames[i]; });
                    if (config.keyPath) {
                        newStores
                            .forEach(function (storeName) {
                            nextDb.createObjectStore(storeName, {
                                keyPath: config.keyPath
                            });
                        });
                    }
                    else {
                        newStores
                            .forEach(function (storeName) {
                            nextDb.createObjectStore(storeName, {
                                autoIncrement: true
                            });
                        });
                    }
                };
                request.onsuccess = function () {
                    var db = request.result;
                    resolve({
                        add: function (storeName, value) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var request = db.transaction([storeName], 'readwrite')
                                                .objectStore("" + storeName)
                                                .add(value);
                                            request.onsuccess = function (evt) {
                                                res(request.result);
                                            };
                                            request.onerror = function () {
                                                rej(request.result);
                                            };
                                        })];
                                });
                            });
                        },
                        put: function (storeName, value) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var request = db.transaction([storeName], 'readwrite')
                                                .objectStore(storeName)
                                                .put(value);
                                            request.onsuccess = function () {
                                                res(request.result);
                                            };
                                            request.onerror = function () {
                                                rej(request.result);
                                            };
                                        })];
                                });
                            });
                        },
                        update: function (storeName, key, value) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var transaction = db.transaction([storeName], 'readwrite');
                                            var getRequest = transaction
                                                .objectStore(storeName)
                                                .get(key);
                                            transaction.onerror = function () {
                                                rej(request.result);
                                            };
                                            getRequest.onsuccess = function () {
                                                var currentValue = getRequest.result;
                                                var updatedValue = mergeDeep(currentValue, value);
                                                var delRequest = transaction
                                                    .objectStore(storeName)
                                                    .delete(key);
                                                delRequest.onsuccess = function () {
                                                    var addRequest = transaction
                                                        .objectStore(storeName)
                                                        .add(updatedValue);
                                                    addRequest.onsuccess = function () {
                                                        res(addRequest.result);
                                                    };
                                                };
                                            };
                                        })];
                                });
                            });
                        },
                        remove: function (storeName, keyValue) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var delRequest = db.transaction([storeName], 'readwrite')
                                                .objectStore(storeName)
                                                .delete(keyValue);
                                            delRequest.onsuccess = function () {
                                                res(delRequest.result);
                                            };
                                            delRequest.onerror = function () {
                                                rej(delRequest.result);
                                            };
                                        })];
                                });
                            });
                        },
                        get: function (storeName, key) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var request = db.transaction([storeName])
                                                .objectStore(storeName)
                                                .get(key);
                                            request.onsuccess = function () {
                                                res(request.result);
                                            };
                                            request.onerror = function () {
                                                rej(request.result);
                                            };
                                        })];
                                });
                            });
                        },
                        getAll: function (storeName) {
                            return __awaiter(this, void 0, void 0, function () {
                                var response;
                                return __generator(this, function (_a) {
                                    response = {};
                                    return [2 /*return*/, new Promise(function (res, rej) {
                                            var cursor = db.transaction([storeName])
                                                .objectStore(storeName)
                                                .openCursor();
                                            cursor.onsuccess = function (event) {
                                                var cursor = event.target.result;
                                                if (cursor) {
                                                    response = __assign({}, response, (_a = {}, _a[cursor.key] = cursor.value, _a));
                                                    cursor.continue();
                                                }
                                                else {
                                                    res(response);
                                                }
                                                var _a;
                                            };
                                            cursor.onerror = function () {
                                                rej(request.result);
                                            };
                                        })];
                                });
                            });
                        }
                    });
                };
            })];
    });
}); };
// var objectStore = db.transaction("customers").objectStore("customers");
//
// objectStore.openCursor().onsuccess = function(event) {
// 	var cursor = event.target.result;
// 	if (cursor) {
// 		alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
// 		cursor.continue();
// 	}
// 	else {
// 		alert("No more entries!");
// 	}
// };
// https://stackoverflow.com/a/48275932/7473184
function mergeDeep(target, source) {
    if (typeof target === "object" && typeof source === "object") {
        for (var key in source) {
            if (source[key] === null
                && (target[key] === undefined
                    || target[key] === null)) {
                target[key] = null;
            }
            else if (source[key] instanceof Array) {
                if (!target[key])
                    target[key] = [];
                target[key] = target[key]
                    .concat(source[key]);
            }
            else if (typeof source[key] === "object") {
                if (!target[key])
                    target[key] = {};
                this.mergeDeep(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var openIDBUtilities = openIDB;


/***/ })
/******/ ]);
//# sourceMappingURL=demo.bundle.js.map