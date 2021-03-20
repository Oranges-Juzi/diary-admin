import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../mock/mock'
import {setUpAntd} from "./ant-design-vue"

const app = createApp(App)

setUpAntd(app)

app.use(store)
app.use(router)
app.mount("#app");
