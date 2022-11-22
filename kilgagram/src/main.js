import { createApp } from 'vue'
import App from './App.vue'

// 아래 방법으로 자주 쓰는 라이브러리는 세팅 후 global하게 사용 가능(axios)
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;


app.mount('#app')
