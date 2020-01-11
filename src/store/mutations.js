import * as types from './mutations-type'
// ! import * as types 这里是定义一个types 通过数组的方式取出定义常量作为函数名  关联mutation就是mutations-type的作用
const mutations = {
  // *标准写法
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE] (state, list) {
    state.sequencelist = list
  },
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENTINDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_SINGERID] (state, id) {
    state.singerId = id
  }
}
export default mutations
