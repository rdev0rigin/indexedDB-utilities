export interface IDBUtility {
    add: (storeName: string, value: {}) => Promise<string | {}>;
    put: (storeName: string, value: {}) => Promise<string | {}>;
    update: (storeName: string, keyValue: string, value: {}) => Promise<string | {}>;
    get: (storeName: string, keyValue: string) => Promise<{}>;
    getAll: (storeName: string) => Promise<{}>;
    remove: (storeName: string, keyValue: string) => Promise<{} | void>;
}
