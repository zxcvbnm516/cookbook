import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import find from 'components/find'
import square from 'components/square'
import mine from 'components/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/square',
      name: 'square',
      component: square
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
