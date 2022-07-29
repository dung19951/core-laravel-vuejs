import './bootstrap';
import { Tooltip, Toast, Popover } from 'bootstrap';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

//customElement
import CustomButton from './components/custom/CustomButton.vue'
import CustomInput from './components/custom/CustomInput.vue'
import CustomSelect from './components/custom/CustomSelect.vue'
import CustomTextArea from './components/custom/CustomTextArea.vue'
import Dropdown from './components/custom/Dropdown.vue'
import PageLoading from './components/custom/PageLoading.vue'
import SortTable from './components/custom/SortTable.vue'
//useElement components
app.component('CustomButton', CustomButton)
app.component('CustomInput', CustomInput)
app.component('CustomSelect', CustomSelect)
app.component('CustomTextArea', CustomTextArea)
app.component('Dropdown', Dropdown)
app.component('PageLoading', PageLoading)
app.component('SortTable', SortTable)

app.use(VueSweetalert2)
app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)
app.mount('#app')
