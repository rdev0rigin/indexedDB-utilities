import { openIDB } from './utilities/index-db.utility';

async function test(){
	console.log('test hit');
	const db = await openIDB({
		version: 1,
		dbName: 'tester01',
		storeNames: ['test3', 'test4'],
	});
	db.add('test3', [{key: 'bar', id: 'foo'}]);
	const response = await db.get('test3', 'bar')
		.catch(console.log);
	console.log('got', response);
}

test();
