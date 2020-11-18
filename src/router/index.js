import Vue from 'vue'
import Router from 'vue-router'
import MealPCPage from '@/pages/mealpc_page'
import MealAppPage from '@/pages/mealapp_page'
import MealPCManager from '@/pages/mealpc_manager_page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mealpc',
      name: 'MealPC',
      component: MealPCPage
    },
    {
      path: '/mealapp',
      name: 'MealAppPage',
      component: MealAppPage
    },
    {
      path: '/',
      name: 'MealPCManager',
      component: MealPCManager
    }
  ]
})
