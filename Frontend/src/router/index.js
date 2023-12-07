import { createRouter, createWebHistory } from "vue-router";
import { layoutMiddleware } from "./middleware";
import {
  RT_HOME,
  MT_HOME,
  RT_LOGIN,
  MT_LOGIN,
  RT_ADMIN,
  MT_ADMIN
} from "../constants/routeNames";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Adminka from '../components/layouts/AdminLayout.vue'
import AddProduct from '../pages/admin/AddProduct.vue'
import Products from '../pages/admin/Product.vue'
import AdminMain from '../pages/admin/AdminMain.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: true,
        title: MT_HOME,
      },
    },
    {
      path: "/login",
      name: RT_LOGIN,
      component: Login,
      meta: {
        layout: "Auth",
        title: MT_LOGIN,
      },
    },
    {
      path: "/admin",
      name: RT_ADMIN,
      component: Adminka,
      children:[
        {
          path: "products",
          name: 'Product',
          component: Products,
          meta: {
            title: 'product',
          },
        },
        {
          path: "create/product",
          name: 'Add',
          component: AddProduct,
          meta: {
            title: 'add',
          },
        },
        {
          path: "main",
          name: 'Main',
          component: AdminMain,
          meta: {
            title: 'main',
          },
        },
      ]
    },
  ],
});

function decodeJwt(token) {
  if (token) {
    const base64Payload = token.split(".")[1];
    const payloadBuffer = window.atob(base64Payload);
    return JSON.parse(payloadBuffer.toString());
  } else {
    return { exp: 0 };
  }
}

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const parsedToken = decodeJwt(token);
  const isTokenExpired = parsedToken.exp < Date.now() / 1000;
  // true => logout

  if (to.name !== RT_LOGIN && isTokenExpired) {
    store.commit("LOGOUT");
  } else if (!isTokenExpired && to.name === RT_LOGIN) {
    next({ name: from.name });
  } else {
    next();
  }
});

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;
