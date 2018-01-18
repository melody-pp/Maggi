export default {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLikeLog (state, LikeLog) {
    state.LikeLog = LikeLog
  },
  upVote (state, OpenId) {
    const item = state.LikeLog.find(item => item.OpenId === OpenId)

    if (item) {
      item.LikeCount++
    } else {
      state.LikeLog.push({OpenId, LikeCount: 1})
    }
  },
  setOpenIdPk (state, OpenIdPk) {
    state.OpenIdPk = OpenIdPk
  },
  setStep (state, Step) {
    state.Step = Step
  },
  setSelf (state, Self) {
    state.Self = Self
  },
  moveTo (state, Current) {
    state.Current = Current
  },
  moveDown (state) {
    if (state.Current < 9) {
      state.Current++
    }
  },
  moveUp (state) {
    if (state.Current > 0) {
      state.Current--
    }
  }
}
