export default {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLikes (state, likes) {
    state.likes = likes
  },
  setOpenIdPk (state, openIdPk) {
    state.openIdPk = openIdPk
  },
  moveTo (state, current) {
    state.current = current
  },
  moveDown (state) {
    if (state.current < 9) {
      state.current++
    }
  },
  moveUp (state) {
    if (state.current > 0) {
      state.current--
    }
  }
}