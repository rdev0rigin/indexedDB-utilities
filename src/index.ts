import openIDB from './utilities/index-db.utility';
import {IDBUConfigModel} from "./models/config.model";

const iDBU = (config: IDBUConfigModel) => openIDB(config);

export default iDBU;
