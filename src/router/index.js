import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';
Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/',
			redirect:'/index'
		},
		{
			path:'/index',
			component:resolve => require(['../components/HelloWorld.vue'],resolve)
		},
		{
			path:'/elment',
			component:resolve => require(['../components/elment.vue'],resolve)
		},
		{
			path:'/htmltest',
			component:resolve => require(['../components/htmltest.vue'],resolve)
		}
        

  ]
})
