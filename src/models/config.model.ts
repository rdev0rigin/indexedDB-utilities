export interface IDBUConfigModel {
	version: number;
	dbName: string;
	storeNames: string[];
	keyPath?: string;
}
