import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProData, addProData} from '../../store/production/action';
import { Table, Divider, Tag, Pagination } from 'antd';

class Production extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      columns: [
        {
          title: '序号',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '状况',
          dataIndex: 'state',
          key: 'state',
          render: itemValue => (
            <span>
              {
                <Tag color={itemValue === 'Enabled' ? 'geekblue' : 'green'} key={itemValue}>
                  {itemValue.toUpperCase()}
                </Tag>
              }
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a>Invite {record.name}</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          ),
        },
      ]
    }
  }


  componentDidMount(){
    if(!this.props.proData.dataList.length){
      this.props.getProData(this.state.currentPage);
    }
  }

  //表格翻页
  changePage = (page, pageSize) => {
    this.state.currentPage = page;
    this.props.getProData(this.state.currentPage);
  };

  render() {
    return (
      this.props.proData.dataList ?
      <div>
        <Table rowKey="uuid" dataSource={this.props.proData.dataList.inventories} columns={this.state.columns} pagination={false} />

        <Pagination style={{marginTop: '40px',float: 'right'}} current={this.state.currentPage} total={this.props.proData.dataList.total} onChange={this.changePage} />
      </div>
      :
      null
    );
  }
}

export default connect(state => {
  return {
    proData: state.proData
  }
}, {
  getProData
})(Production);