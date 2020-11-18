// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './sass/main.scss'
import Vue from 'vue'
import App from './App'
import router from './router'

import utils from './utils/utils.js'
Vue.prototype.$utils = utils

import {
  Calendar,
  CheckboxGroup,
  Checkbox,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  Input,
  Pagination
} from 'element-ui'
Vue.use(Calendar)
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Pagination)

import { 
  Checkbox as VCheckbox, 
  CheckboxGroup as VCheckboxGroup,
  Button as VButton,
  List
} from 'vant';

Vue.use(VCheckbox);
Vue.use(VCheckboxGroup);
Vue.use(VButton)
Vue.use(List)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
