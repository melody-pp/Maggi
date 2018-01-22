let isMoving = false
const setMoving = () => {
  isMoving = true

  const el = document.getElementById('main-frame')
  el.style.transition = 'all 700ms ease-out'

  setTimeout(() => {
    isMoving = false
    el.style.transition = ''
  }, 1000)
}

export default {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLikeLog (state, LikeLog) {
    state.LikeLog = LikeLog
  },
  upvote (state, OpenId) {
    const item = state.LikeLog.find(item => item.OpenId === OpenId)

    if (item) {
      item.LikeCount++
    } else {
      state.LikeLog.push({OpenId, LikeCount: 1})
    }
  },
  setOpenIdPK (state, OpenIdPK) {
    state.OpenIdPK = OpenIdPK
  },
  setStep (state, Step) {
    state.Step = Step
  },
  setSelf (state, Self) {
    state.Self = Self
  },
  setUserId (state, UserId) {
    state.UserId = UserId
  },
  moveTo (state, Current) {
    state.Current = Current
  },
  moveDown (state) {
    if (state.Current < 10 && !isMoving) {
      setMoving()
      state.Current++
    }
  },
  moveUp (state) {
    if (state.Current > 0 && !isMoving) {
      setMoving()
      state.Current--
    }
  }
}
