import React from 'react';
import {connect} from 'react-redux';
import {Button,Table} from 'antd';
import {withRouter} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    sub(){
        this.props.sub()
    }
    
    add(){  
        this.props.add()
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
              title: '网络',
              dataIndex: 'website',
            },
          ];
        const data = this.props.prop.data || []
        return(
            <div>
                <Button type="primary" onClick={()=>{
                    this.props.history.goBack()
                    }}>返回</Button>
                <div style={{display:'flex',margin:'10px 0'}}>
                    <Button type="primary" onClick={this.add.bind(this)}>+</Button>
                    <h1 style={{margin:'0 20px'}}>{this.props.prop.num}</h1>  
                    <Button type="primary" onClick={this.sub.bind(this)} >-</Button>
                </div>
                <Button type="primary" onClick={()=>{
                    this.props.getData()
                }} >获取数据</Button>
                   <Button style={{marginLeft:15}} type="primary" onClick={()=>{
                    this.props.delData()
                }} >删除数据</Button>
                 <Table dataSource={data} columns={columns} rowKey="id" />;
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        prop: state.homeReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add:() => dispatch({type:'HOME_INCREMENT'}),
        sub:() => dispatch({type:'HOME_DECREMENT'}),
        getData:() => dispatch({type:'GET_DECREMENT_HOME'}),
        delData:() => dispatch({type:'DEL_DECREMENT_HOME'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home))