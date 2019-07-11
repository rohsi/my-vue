import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolios from './components/Portfolios';
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
      path: "/portfolios",
      name: "portfolios",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Portfolios
    }
  ]
});
