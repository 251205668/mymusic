// todo 取出state里面的数据
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequencelist = state => state.sequencelist

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const singerId = (state) => {
  return state.singerId
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchhistory = state => state.searchhistory

export const playhistory = state => state.playhistory

export const favoriatelist = state => state.favoriatelist
