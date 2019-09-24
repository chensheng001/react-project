import ApiService from "../Service";
import * as API from '../api/api';
import {message} from "antd";

class LoginService extends ApiService {
  async loginValidate(accountMsg: any, done: (ret: any) => void) {
    const msg = new API.APILogInByAccountMsg();
    msg.accountName = accountMsg.accountName;
    msg.password = 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86';
    msg.imageCode = accountMsg.imageCode;
    msg.imageUuid = accountMsg.imageUuid;
    const result = await this.call(msg);
    if (result.success) {
      message.success('登录成功!!');
    }else {
      //message.error('登录失败!');
    }
    done(result);
  }

  async getImgCode(callback: (ret: any) => void) {
    const msg = new API.APIGetImageCodeMsg();
    const result = await this.call(msg);
    if (result.success) {
      callback(result);
    }else {
      message.error('请求失败!');
    }
  }
}

export default new LoginService();