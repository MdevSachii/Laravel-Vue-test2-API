import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../components/ExampleComponent.vue'

const routes = [
  { path: '/', component: Index },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})