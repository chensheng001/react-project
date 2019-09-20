/**
 * 全局配置文件
 */
let baseURL; 

if(process.env.NODE_ENV === 'development'){
  baseURL = '//192.168.211.72';
}else{
  baseURL = '//192.168.211.72';
}


export default {baseURL};