import React from 'react';
import './App.css';
import { Button,Table } from 'antd';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  getData(){  
    this.props.getData()
  }

  render(){
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
      },
      {
        title: '网站',
        dataIndex: 'website',
      },
    ];
    const data = this.props.num.data || []
    return(
      <div className="App">
      <Button type="primary" onClick={this.getData.bind(this)}>获取表格数据</Button>
      <Button type="primary" onClick={()=>{
       this.props.history.push('/home')
      }}>跳转到home组件</Button>
      <Table dataSource={data} columns={columns} rowKey="id" />;
    </div>
    )
  }
}

//通过mapState把对应redux只注入到当前组件props中，同时store发生改变该方法会被调用回去新的store
const mapStateToProps = (state) => {
  return {
    //一个state对应一个reducer，在合并reducer时候命名的key来获取对于state的值
    num: state.appReducer,
  }
}

//返回一个方法通过dispatch传递一个action给reducer从而修改store值，该方法也会注入到当前组件props中
const mapDispatchToProps = (dispatch) => {
  return {
    getData:() => dispatch({type:'GET_DECREMENT_REQ'}),
  }
}

//通过react-redux的connect来连接ui与redux，使其变成容器组件
export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(withRouter(App))
