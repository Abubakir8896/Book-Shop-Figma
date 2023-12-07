import { onMounted, ref, reactive } from 'vue';


export function useProduct() {
  const limitSize = ref(null);

  const product = reactive({
    title: '',
    description: '',
    image: 'https://picsum.photos/500',
    category: '',
    price: null,
    rating: {
      rate: 0,
      count: null,
    }
  })
    
  const products = ref([]);
  const showAddModal = ref(false);
  const showDeleteModal = ref(false);
  const showUpdateModal = ref(false);
  const editingItemId = ref(null);
  
  function resetProductObj() {
    product.category = '';
    product.title = '';
    product.description = '';
    product.price = null;
  }
  function fetchProducts() {
    fetch(`http://localhost:4000/product/all`)
      .then(res => res.json())
      .then(json => products.value = json)
}


    function onDeleteItem(id) {
      fetch(`http://localhost:4000/api/product/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        location.reload()
    }


  function onSubmitUpdateModal() {
    fetch(`http://localhost:4000/api/product/update/${id}`, {
        method: 'PUT',
        headers:  { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
        .then(res => res.json())
        .then((item) => {
          if (!item.id) {
            return;
          }
          showUpdateModal.value = false;
          fetchProducts(limitSize.value);
          resetProductObj()
        })
  }
    
    
    return {
      products,
      product,
      showAddModal,
      showDeleteModal,
      showUpdateModal,
      onSubmitUpdateModal,
      onDeleteItem,
    }
}