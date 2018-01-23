import { IDBUConfigModel } from '../models/config.model';
import { IDBUtility } from '../models/idb-utility.model';
export declare function openIDB(config: IDBUConfigModel): Promise<IDBUtility>;
