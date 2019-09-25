/**
 * 全局配置文件
 */
let baseURL; 

if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://192.168.211.71';
}else{
  baseURL = 'http://192.168.211.72';
}


export default {baseURL};