
class APIMessage {
  session: any;
}

export class QueryCondition {
  name: string;
  op: string;
  value: string;
}

export class APIQueryMsg extends APIMessage {
  conditions: Array<QueryCondition>;
  limit: number;
  start: number;
  count: boolean;
  sortBy: string;
  groupBy: string;
  sortDirection: string;
  fields: Array<string>;
  replyWithCount = true;
  noError: boolean;
  timeout: number;
}

export class QueryObject {
  start: number;
  limit: number;
  sortBy: string;
  groupBy: string;
  sortDirection: string;
  count: boolean;
  fields: Array<string>;
  replySharedResource: boolean;
  onlySelf: boolean;
  noError: boolean;
  replyWidthCount = true;
  conditions: QueryCondition[];
  addCondition(cond: QueryCondition) {
    if (!this.conditions) {
      this.conditions = [];
    }
    this.conditions.push(cond);
  }
}

export class APILogInByAccountMsg extends APIMessage{
  path = '/account/api';
  accountName: string;
  imageUuid: string;
  imageCode: string;
  password: string;
  toApiMap(): any {
    var msg = {
      'com.syscxp.account.header.identity.APILogInByAccountMsg': this
    };
    return msg;
  }
}

export class APIGetImageCodeMsg extends APIMessage{
  path = '/account/api';
  toApiMap(): any {
    var msg = {
      'com.syscxp.sms.header.APIGetImageCodeMsg': this
    };
    return msg;
  }
}

export class APIQueryCeMsg extends APIQueryMsg{
  path = '/sdwan/api';
  toApiMap(): any {
    var msg = {
      'com.syscxp.header.sdwan.ce.APIQueryCeMsg': this
    };
    return msg;
  }
}