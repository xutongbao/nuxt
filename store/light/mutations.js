export default {
  setState(state, payload) {
    state[payload.key] = payload.value
    console.log({...state})
  }
}