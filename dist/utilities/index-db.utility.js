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
                    console.log('nextDB', nextDb);
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
                        }
                    });
                };
            })];
    });
}); };
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
export var openIDBUtilities = openIDB;
//# sourceMappingURL=index-db.utility.js.map