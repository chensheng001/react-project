import * as pro from './action-type';
import ProductionService from "../../shared/production/ProductionService";
import * as API from '../../shared/api/api';

// 初始化获取商品数据，保存至redux
export const getProData = (currentPage) => {
  return async (dispatch) => {
    try {
      const qobj = new API.QueryObject();
      qobj.limit = 10;
      qobj.start = qobj.limit * (currentPage - 1);
      const result = await ProductionService.query(qobj);
      console.log(result)
      //const result = await function(){return [1,2,3]}();
      dispatch({
        type: pro.GETLIST,
        dataList: result
      })
    } catch (e) {
      console.log(e)
    }
  }
};

// 清空选择
export const addProData = () => {
  return {
    type: pro.ADD,
  }
};