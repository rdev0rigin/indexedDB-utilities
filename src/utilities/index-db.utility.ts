import { IDBUConfigModel } from '../models/config.model';
import { TransactionModel } from '../models/transaction.model';

export async function openIDB(config: IDBUConfigModel): Promise<TransactionModel> {
	if (!window.indexedDB) {
		// console.log("Your browser doesn't support a stable version of IndexedDB. IndexedDB will not be available.");
		return void 0;
	}
	return new Promise<TransactionModel>((resolve, reject) => {
		let request = indexedDB.open(config.dbName, config.version);
		request.onerror = (evt: ErrorEvent | any) => {
			reject(evt.target.errorCode);
		};
		request.onupgradeneeded = (evt: IDBVersionChangeEvent | any): void  => {
			console.log('onupgradeneeded fired', evt);
			let nextDb = evt.target.result;
			config.storeNames.forEach((storeName: string) => {
				nextDb.createObjectStore(storeName, {keyPath: ['key']});
			});
		};
		request.onsuccess = (evt) => {
			const db = request.result;
			resolve({
				add(storeName: string, value: any){
					const transaction = db.transaction([storeName], 'readwrite');
					transaction.oncomplete = (evt) => {
						console.log('add complete', evt.target);
					};
					const store = transaction
						.objectStore(storeName);
					store.add(value);
				},
				remove(storeName: string, value: any){
					const store = db.transaction([storeName], 'readwrite')
						.objectStore(storeName);
					store.delete(value);
				},
				async get(storeName: string, key: string): Promise<any> {
					return new Promise(((resolve2, reject2) => {
					
					const transaction = db.transaction([storeName]);
					transaction.oncomplete  = (evt) => {
						console.log('Get complete', evt.target.result);
						resolve2(request.result);
					};
					transaction.onerror = (evt) => {
						reject2(evt);
					};
					transaction
						.objectStore(storeName)
						.get(storeName);
					}))
				}
			});
		};
	})
}
