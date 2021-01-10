import watchIncrementAsync from './getUserSaga';
import watchGetHomeData from './homeSaga';
import {all,fork} from 'redux-saga/effects'

export default function* rootSaga() {
  //all 用来命令 middleware 并行地运行多个 Effect
    yield all([
      //fork执行多个saga任务
      fork(watchIncrementAsync),
      fork(watchGetHomeData)
    ])
  }