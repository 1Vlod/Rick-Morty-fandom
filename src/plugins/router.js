import Vue from 'vue'
import Router from "vue-router"

import Home from "@/pages/Home"
import CharacterPage from "@/pages/CharacterPage"
import EPage from "@/pages/EPage"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/card/:id",
      component: CharacterPage
    },
    {
      path: "/*",
      component: EPage
    }
  ]
});
