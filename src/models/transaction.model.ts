export interface IDBUtility {
	add: (storeName: string, value: {}) => Promise<string | {}>;
	put: (storeName: string, value: {}) => Promise<string | {}>;
	update: (storeName: string, key: string, value: {}) => Promise<string | {}>;
	get: (storeName: string, key: string) => Promise<any>;
	remove: (storeName: string, key: string) => Promise<any>;
}
