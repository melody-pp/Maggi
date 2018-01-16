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
  }
}