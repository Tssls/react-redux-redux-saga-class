import { call, put ,takeLatest} from 'redux-saga/effects';
import {getApiopen} from '../action';
function* fetchData() {
    try {
        //使用call来发起一个ajax请求接收返回结果
       const data = yield call(getApiopen);
       //拿到返回结果后使用put发起一个actiong对象告知数据请求成功修改store
       yield put({type: "GET_DECREMENT", data});
    } catch (error) {
       yield put({type: "GET_DECREMENT_ERR", error});
    }
}

//通过takeLatest方法来启动任务
function* watchIncrementAsync() {
    //takeEvery允许同时执行多个任务，尽管之前还有一个任务没有完成也可以执行下一个任务
    //takeLatest只允许执行一个任务，并且这个任务是最后执行的那一个
    yield takeLatest ('GET_DECREMENT_REQ', fetchData)
}

export default watchIncrementAsync;

