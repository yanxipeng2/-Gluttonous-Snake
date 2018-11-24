import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
