import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Dock from 'primevue/dock';
import Terminal from 'primevue/terminal';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
import Tooltip from 'primevue/tooltip'
import Tree from 'primevue/tree';
import ToastService from 'primevue/toastservice'
import ScrollTop from 'primevue/scrolltop';
import ScrollPanel from 'primevue/scrollpanel'
import dataTable from 'primevue/datatable';
import Column from 'primevue/column';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import './assets/scss/main.scss'
import InputText from 'primevue/inputtext';

import Web3 from 'web3/dist/web3.min.js'
const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/28268f30bc314cd389cf65588795a4ec') 
//const web3 = new Web3(Web3.givenProvider || 'wss://rinkeby.infura.io/ws/v3/28268f30bc314cd389cf65588795a4ec') 


const app = createApp(App)

app.use(PrimeVue); 
app.use(ToastService)
app.component('Button', Button)
app.component('Card', Card)
app.component('ProgressBar', ProgressBar)
app.component('Dock', Dock)
app.component('Terminal', Terminal)
app.component('Toast', Toast)
app.component('Menubar', Menubar)
app.component('Dialog', Dialog)
app.component('Galleria', Galleria)
app.component('Tree', Tree)
app.component('ScrollTop', ScrollTop)
app.component('ScrollPanel', ScrollPanel)
app.component('dataTable', dataTable)
app.component('Column', Column)
app.component('InputText', InputText)

app.directive('Tooltip', Tooltip)


app.use(store);
app.use(router);
app.mount('#app');
