export interface IDBUtility {
	add: (storeName: string, value: any) => Promise<string | {}>;
	remove: (storeName: string, value: any) => Promise<any>;
	get: (storeName: string, key: string) => Promise<any>;
	put: (storeName: string, value: any) => Promise<string | {}>;
	update: (storeName: string, key: string, value: any) => Promise<string | {}>;
}
