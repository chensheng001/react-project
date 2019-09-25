import axios from 'axios';
import envconfig from "../envconfig/envconfig";
import {message} from 'antd';
import cookie from "../utils/cookes";

const firstItem = (obj)=> {
  return obj[Object.keys(obj)[0]];
};

export class SessionInventory {
  uuid: string;
  accountUuid: string;
  userUuid: string;
  type: string;
}

const toLogin = () => {
  window.location.href = '/#/login';
};

//axios实例化
const Service = axios.create({
  timeout: 5000,
  baseURL: '',
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 请求拦截器
Service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
Service.interceptors.response.use(response => {
  if (response.status >= 200 && response.status <300 || response.status === 304) {
    const res = response.data;
    if (res.state === 'Done') {
      const reply = firstItem(JSON.parse(res.result));
      if (!reply.success) {
        if (reply.error) {
          if (reply.error.code === 'ID.1001') {
            message.error('ID.1001');
            toLogin();
          }else if (reply.error.code === 'ID.1002') {
            message.error('ID.1002');
          }else {

          }
        }
      }
      return Promise.resolve(reply);
    }
  }else {
    return Promise.reject(response);
  }
}, error => {
  console.log('TCL: error', error);
  return Promise.reject(error)
});

export default class ApiService {
  call(msg) {
    const session: SessionInventory = new SessionInventory();
    if(!!cookie.getCookie('sessionid')){
      session.uuid = cookie.getCookie('sessionid');
    }
    msg.session = msg.isLogin ? {} :session;
    return Service({
      url: msg.path,
      data: msg.toApiMap(),
      method: msg.method || 'post'
    })
  }
}