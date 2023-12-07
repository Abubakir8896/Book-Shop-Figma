import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useHome() {
  const store = useStore();
  const loading = computed(() => store.state.loading);
  const products = computed(() => store.getters.products);
  const searchingTitle = ref("");

  async function onSearchProducts() {
    await store.dispatch("searchProducts", searchingTitle.value);
  }

  async function onFilterCategory(title) {
    await store.dispatch("getProducts", title);
  }

  return {
    products,
    loading,
    searchingTitle,
    onSearchProducts,
    onFilterCategory,
  };
}