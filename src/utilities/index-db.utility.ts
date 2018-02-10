import { IDBUConfigModel } from '../models/config.model';
import { IDBUtility } from '../models/idb-utility.model';

const openIDB = async (config: IDBUConfigModel): Promise<IDBUtility> => {
	if (!window.indexedDB) {
		// console.log("Your browser doesn't support a stable version of IndexedDB. IndexedDB will not be available.");
		return void 0;
	}
	return new Promise<IDBUtility>((resolve, reject) => {
		const request = indexedDB.open(config.dbName, config.version);
		request.onerror = () => {
			reject(request.result);
		};
		request.onupgradeneeded = (evt: IDBVersionChangeEvent | any): void => {
			const nextDb = evt.target.result;
			const newStores: string[] = config.storeNames
				.filter((value, i) => value !== nextDb.objectStoreNames[i]);
			if(config.keyPath){
				newStores
					.forEach((storeName: string) => {
						nextDb.createObjectStore(
							storeName,
							{
								keyPath: config.keyPath
							}
						);
					});
			} else {
				newStores
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
		request.onsuccess = () => {
			const db = request.result;
			resolve({
				async add(storeName: string, value: {}): Promise<string | {}> {
					return new Promise((res, rej) => {
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
				async update(storeName: string, key: string, value: any): Promise<string | {}> {
					return new Promise((res, rej) => {
						const transaction = db.transaction([storeName], 'readwrite');
						const getRequest = transaction
							.objectStore(storeName)
							.get(key);
						transaction.onerror = () => {
							rej(request.result);
						};
						getRequest.onsuccess = () => {
							const currentValue = getRequest.result;
							const updatedValue = mergeDeep(currentValue, value);
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
				async remove(storeName: string, keyValue: string): Promise<{}> {
					return new Promise((res, rej) => {
						const delRequest = db.transaction([storeName], 'readwrite')
							.objectStore(storeName)
							.delete(keyValue);
						delRequest.onsuccess = () => {
							res(delRequest.result);
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
				},
				async getAll(storeName: string): Promise<{}> {
					let response = {};
					return new Promise((res, rej) => {
						const cursor = db.transaction([storeName])
							.objectStore(storeName)
							.openCursor();
						cursor.onsuccess = (event) => {
							const cursor = event.target.result;
							if (cursor) {
								response = {...response, [cursor.key]: cursor.value};
								cursor.continue();
							} else {
								res(response);
							}
						};
						cursor.onerror = () => {
							rej(request.result);
						};
					});
				}
			});
		};
	});
};

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
function mergeDeep (target, source)  {
	if (typeof target === "object" && typeof source === "object") {
		for (const key in source) {
			if (source[key] === null
				&& (target[key] === undefined
					|| target[key] === null)) {
				target[key] = null;
			} else if (source[key] instanceof Array) {
				if (!target[key]) target[key] = [];
				target[key] = target[key]
					.concat(source[key]);
			} else if (typeof source[key] === "object") {
				if (!target[key]) target[key] = {};
				this.mergeDeep(target[key], source[key]);
			} else {
				target[key] = source[key];
			}
		}
	}
	return target;
}

export const openIDBUtilities = openIDB;
