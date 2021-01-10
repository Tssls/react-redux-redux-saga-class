import {call,put,takeLatest} from 'redux-saga/effects';
import {getApiopen} from '../action';

function* getHomeData(){
    try {
        const data = yield call(getApiopen);
        yield put({type:"GET_HOME_DATA",data});
    } catch (error) {
        console.log('error',error)
        yield put({type: "ERR_HOME_DATA", error});
     }
}

function* watchGetHomeData(){
    yield takeLatest ('GET_DECREMENT_HOME', getHomeData)
}

export default watchGetHomeData;