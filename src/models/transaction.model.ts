export interface TransactionModel {
	add: (storeName: string, value: any) => void;
	remove: (storeName: string, value: any) => void;
	get: (storeName: string, key: string) => any;
}
