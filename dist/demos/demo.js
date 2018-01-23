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
import iDBU from "../index";
function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var stores, addResponse, putResponse, updateResponse, getResponse, removeResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, iDBU({
                        version: 1,
                        dbName: 'DemoIDB',
                        storeNames: ['demoStore0', 'demoStore1'],
                        keyPath: 'myKey' // keyPath is optional, if provided this will be how you get selective values from the stores and must be a property in your object value you wish to store. If omitted the stores will be indexed 0 to (n-1);
                    })];
                case 1:
                    stores = _a.sent();
                    return [4 /*yield*/, stores.add('demoStore0', {
                            myKey: 'foo',
                            value: [{ bat: 'squeek' }, { bear: 'grrr' }]
                        })];
                case 2:
                    addResponse = _a.sent();
                    console.log('add response', addResponse);
                    return [4 /*yield*/, stores.put('demoStore0', {
                            myKey: 'foo',
                            value: [{ cat: 'meow' }]
                        })];
                case 3:
                    putResponse = _a.sent();
                    console.log('put response', putResponse);
                    return [4 /*yield*/, stores.update('demoStore0', 'foo', {
                            myKey: 'foo',
                            value: [{ bat: 'squeek' }, { bear: 'grrr' }]
                        })];
                case 4:
                    updateResponse = _a.sent();
                    console.log('update Response', updateResponse);
                    return [4 /*yield*/, stores.get('demoStore0', 'foo')];
                case 5:
                    getResponse = _a.sent();
                    console.log('get response', getResponse);
                    return [4 /*yield*/, stores.remove('demoStore0', 'foo')];
                case 6:
                    removeResponse = _a.sent();
                    console.log('removeResponse, should be void', removeResponse);
                    return [2 /*return*/];
            }
        });
    });
}
demo();
//# sourceMappingURL=demo.js.map