import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      좋아요눌렀니 : false,
    }
  },
  mutations: {
    좋아요(state) {
      if (state.좋아요눌렀니== false) {
        state.likes++;
        state.좋아요눌렀니 = true;
      } else {
        state.likes--
        state.좋아요눌렀니 = false;
      }
      
    },
    이름변경(state) { 
      state.name='kil'
    },
    나이증가(state, data) {
      state.age += data;
    }
  }
})

export default store;