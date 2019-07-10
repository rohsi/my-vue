import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from './components/Portfolio';
import HelloWorld from './components/HelloWorld';
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "",
      name: "helloworld",
      component: HelloWorld
    },
    {
      path: "/portfolio",
      name: "portfolio",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Portfolio
    }
  ]
});
