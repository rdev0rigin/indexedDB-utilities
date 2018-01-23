//tslint:disable
import { openIDB } from "../utilities/index-db.utility";

async function demo() {

	/**
	 *
	 * Call iDBU(config) with config parameters to open an IndexedDB and return a promise that holds
	 * an Object with helper methods, add(), put(), update(), get() and remove().
     * if one doesn't exsist then it will be made. Note: Once ObjectStores are defined they are tied to this
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
	const stores = await openIDB({
		version: 1, // Numbers should be a positive Number and not contain any decimal digits.
		dbName: 'DemoIDB-1',
		storeNames: ['demoStore0', 'demoStore1'], // Provide and array of the storeNames in which you wish to store values in.
		keyPath: 'myKey' // keyPath is optional, if provided this will be how you get selective values from the stores and must be a property in your object value you wish to store. If omitted the stores will be indexed 0 to (n-1);
	});
	console.log('stores', stores);
	/**
	 * 	add(storeName: string, value: any) => Promise<string | {}>;
	 * 	returns a string with the saved value's key or Request.Result Object.
	 * 	Note: You cannot add new values to objects with keys that already exsist, use put() or update().
	 */
	console.log('calling add');
	const addResponse = await stores.add(
		'demoStore0',
		{
			myKey: 'foo',
			value: [{ bat: 'squeek'}, {bear: 'grrr'}]
		})
		.catch(err => console.log('Add Error', err));
	console.log('add response', addResponse);

	/**
	 *  put(storeName: string, value: any) => Promise<string | {}>;
	 *  returns a string with the saved value's key or throws Request.Result Object.
	 *  Note: This will overwrite your value saved related your key.
	 */
	console.log('calling put');
	const putResponse = await stores.put(
		'demoStore0',
		{
			myKey: 'foo',
			value: [{ cat: 'meow'}]
		});
	console.log('put response', putResponse);

	/**
	 *  update(storeName: string, key: string, value: any) => Promise<string | {}>;
	 *  returns a string with the updated value's key or throws an Request.Result Object.
	 *  Note: This will merge your values to an already stored object tied to a key
	 */
	console.log('calling update');
	const updateResponse = await stores.update(
		'demoStore0',
		'foo',
		{
			myKey: 'foo',
			value: [{ bat: 'squeek'}, {bear: 'grrr'}]
		});
	console.log('update Response', updateResponse);

	/**
	 *  get(storeName: string, key: string) => Promise<any>;
	 *  returns the value stored that matches the value stored in [keyPath]: String
	 *  or throws an Request.Result Object
	 */
	console.log('calling get');
	const getResponse = await stores.get('demoStore0', 'foo');
	console.log('get response', getResponse);

	/**
	 *  remove(storeName: string, key: string) => Promise<any>;
	 *  returns void or throws an Request.Result Object
	 */
	console.log('calling remove');
	const removeResponse = await stores.remove('demoStore0', 'foo')
		.catch(err => console.log('remove error', err));
	console.log('removeResponse, should be void', removeResponse);
}
console.log('calling demo');
demo()
	.then(res => console.log('response', res))
	.catch(err => console.log('Error', err));
