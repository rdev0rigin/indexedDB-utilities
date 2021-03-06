import {openIDBUtilities} from "./utilities/index-db.utility";
import {IDBUConfigModel} from "./models/config.model";
import {IDBUtility} from "./models/idb-utility.model";

declare var window;
window.openIDBUtilities = openIDBUtilities;

export declare const openIDBUtulities: (config: IDBUConfigModel) => IDBUtility;
