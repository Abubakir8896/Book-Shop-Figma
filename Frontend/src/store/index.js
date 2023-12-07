import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
import { RT_HOME, RT_LOGIN } from "../constants/routeNames";
import { errorToast } from "../utils/toast";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
  state: {
    user: {},
    products: [],
    loading: false,
  },

  getters: {
    products: (state) => state.products,
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const res = await axios.post(url + "customers/signin", payload);
        if (!res.data?.tokens.access_token && res.status !== 200) {
          return;
        }
        if(res.data.user.role_id == 1){
          commit("SET_TOKEN", res.data.tokens.access_token);
          commit("SET_USER", res.data);
        }
        else{
          console.log(res.data.user.role_id);
          commit("SET_TOKEN", res.data.tokens.access_token);
          commit("SET_ADMIN", res.data);
        }
      } catch (err) {
        errorToast("Something went wrong!");
      }
    },

    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      try {
        const res = await axios.get(url + "product/all");
        if (!res.data && res.status !== 200) {
          return;
        }
        commit("SET_LOADING", false);
        commit("SET_PRODUTS", res.data);
      } catch (err) {
        errorToast("Cannot fetch products");
      }
    },

    async searchProducts({ commit }, title) {
      try {
        const res = await axios.get(url + `product/search?keyword=${title}`);
        if (!res.data && res.status !== 200) {
          return;
        }
        commit("SET_PRODUTS", res.data);
      } catch (err) {
        errorToast("Cannot fetch products");
      }
    },

    async getProducts({commit}, type){
     try {
        const res = await axios.get(url + `productcategory/one/${type.value}`);
        if (!res.data?.products && res.status !== 200) {
          return;
        }
        commit("SET_PRODUTS", res.data.products)
      }catch(err){
        errorToast("Cannot fetch products");
      }
    },
  },

  mutations: {
    SET_LOADING: (state, payload) => (state.loading = payload),

    SET_TOKEN: (_, payload) => {
      localStorage.setItem("token", payload);
    },

    SET_USER: (state, payload) => {
      state.user = payload;
      router.push({ name: RT_HOME });
    },

    SET_ADMIN: (state, payload) => {
      state.user = payload;
      router.push({ name: "admin"});
    },

    SET_PRODUTS: (state, payload) => (state.products = payload),

    LOGOUT: (state) => {
      state.user = {};
      localStorage.removeItem("token");
      router.push({ name: RT_LOGIN });
    },
  },
});

export default store;