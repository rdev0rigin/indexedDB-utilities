import {IDBUConfigModel} from '../models/config.model';
import {IDBUtility} from '../models/transaction.model';

export async function openIDB(config: IDBUConfigModel): Promise<IDBUtility> {
	if (!window.indexedDB) {
		// console.log("Your browser doesn't support a stable version of IndexedDB. IndexedDB will not be available.");
		return void 0;
	}
	return new Promise<IDBUtility>((resolve, reject) => {
		console.log('opening DB', config);
		const request = indexedDB.open(config.dbName, config.version);
		request.onerror = (evt: ErrorEvent | any) => {
			console.log('opening error');
			reject(request.result);
		};
		request.onupgradeneeded = (evt: IDBVersionChangeEvent | any): void => {
			console.log('onupgradeneeded fired', evt);
			const nextDb = evt.target.result;
			if(config.keyPath){
				console.log('hit key path');
				config.storeNames
					.forEach((storeName: string) => {
						nextDb.createObjectStore(
							storeName,
							{
								keyPath: config.keyPath
							}
						);
					});
			} else {
				console.log('No hit key path');
				config.storeNames
					.forEach((storeName: string) => {
						nextDb.createObjectStore(
							storeName,
							{
								autoIncrement: true
							}
						);
					});
			}
		};
		request.onsuccess = (evt) => {
			const db = request.result;
			resolve({
				async add(storeName: string, value: {}): Promise<string | {}> {
					return new Promise((res, rej) => {
						console.log('calling add', storeName, value);
						const request = db.transaction([storeName], 'readwrite')
							.objectStore(`${storeName}`)
							.add(value);
						request.onsuccess = (evt) => {
							res(request.result);
						};
						request.onerror = () => {
							rej(request.result);
						};
					});
				},
				async put(storeName: string, value: {}): Promise<string | {}> {
					return new Promise((res, rej) => {
						const request = db.transaction([storeName], 'readwrite')
							.objectStore(storeName)
							.put(value);
						request.onsuccess = () => {
							res(request.result);
						};
						request.onerror = () => {
							rej(request.result);
						};
					});
				},
				async update(storeName: string, key: string, value: {}): Promise<string | {}> {
					return new Promise((res, rej) => {
						const transaction = db.transaction([storeName], 'readwrite');
						const getRequest = transaction
							.objectStore(storeName)
							.get(key);
						transaction.onerror = () => {
							rej(request.result);
						};
						getRequest.onsuccess = () => {
							const updatedValue = {...getRequest.result, ...value};
							const delRequest = transaction
								.objectStore(storeName)
								.delete(key);
							delRequest.onsuccess = () => {
								const addRequest = transaction
									.objectStore(storeName)
									.add(updatedValue);
								addRequest.onsuccess = () => {
									res(addRequest.result);
								};
							};
						};
					});
				},
				async remove(storeName: string, key: string): Promise<{}> {
					return new Promise((res, rej) => {
						const delRequest = db.transaction([storeName], 'readwrite')
							.objectStore(storeName)
							.delete(key);
						delRequest.onsuccess = () => {
							resolve(delRequest.result);
						};
						delRequest.onerror = () => {
							rej(delRequest.result);
						};
					});
				},
				async get(storeName: string, key: string): Promise<{}> {
					return new Promise((res, rej) => {
						const request = db.transaction([storeName])
							.objectStore(storeName)
							.get(key);
						request.onsuccess = () => {
							res(request.result);
						};
						request.onerror = () => {
							rej(request.result);
						};
					});
				}
			});
		};
	});
}
