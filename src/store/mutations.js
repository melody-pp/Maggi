export default {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLikeLog (state, likeLog) {
    state.likeLog = likeLog
  },
  upVote (state, OpenId) {
    const item = state.likeLog.find(item => item.OpenId === OpenId)

    if (item) {
      item.LikeCount++
    } else {
      state.likeLog.push({OpenId, LikeCount: 1})
    }
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
