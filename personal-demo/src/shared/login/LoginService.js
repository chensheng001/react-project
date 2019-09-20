import ApiService from "../Service";
import * as API from '../api/api';
import {message} from "antd";

class LoginService extends ApiService {
  async loginValidate(accountMsg: any, done: (ret: any) => void) {
    const msg = new API.APILogInByAccountMsg();
    msg.accountName = accountMsg.accountName;
    msg.password = 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86';
    msg.imageCode = 'nntz';
    msg.imageUuid = 'd97d4ed064be4865afc07963f74e8462';
    const result = await this.call(msg);
    if (result.success) {
      message.success('登录成功!!');
    }else {
      message.success('登录成功!!');
    }
    done(result);
  }
}

export default new LoginService();