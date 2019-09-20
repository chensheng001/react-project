
class APIMessage {
  session: any;
}

export class APILogInByAccountMsg extends APIMessage{
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