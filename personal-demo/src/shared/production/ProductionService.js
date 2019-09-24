import ApiService from "../Service";
import * as API from '../api/api';
import {message} from "antd";

class ProductionService extends ApiService {
  async query(qobj: any) {
    const msg = new API.APIQueryCeMsg();
    msg.count = qobj.count === true;
    msg.start = qobj.start;
    msg.limit = qobj.limit;
    msg.fields = qobj.fields;
    msg.sortBy = 'createDate';
    msg.sortDirection = 'desc';
    msg.conditions = qobj.conditions ? qobj.conditions : [];
    const result = await this.call(msg);
    if (result.success) {
      return result
    }else {
      message.error('请求失败!!');
      return null;
    }
  }
}

export default new ProductionService();