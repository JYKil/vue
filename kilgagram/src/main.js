import { createApp } from 'vue'
import App from './App.vue'

// 아래 방법으로 자주 쓰는 라이브러리는 세팅 후 global하게 사용 가능(axios)
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

// vuex 사용방법. 하기와 같이 하고나면 store.js 에 저장된 모든 state를 모든 components 가 사용 가능
import store from './store.js'

import './registerServiceWorker'

app.use(store).mount('#app')
