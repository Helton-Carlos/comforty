import chairImage from '~/assets/product/Chair_image.png';
import chairPlastic from '~/assets/product/Chair_Plastic_orange.png';
import chairPlasticWhite from '~/assets/product/Chair_Plastic_white.png';
import chairLibrary from '~/assets/product/Library_Stool_ Chair.png';
import chairImage1 from '~/assets/categories/chair_categories_1.png';
import chairImage2 from '~/assets/categories/chair_categories_2.png';
import chairImage3 from '~/assets/categories/chair_categories_3.png';
import chairImage4 from '~/assets/categories/chair_categories_4.png';
import type { IProduct, ApiResponse } from '~/types/types';

const product = ref<IProduct[]>();
const allProducts = ref<IProduct[] | undefined | any>();
const selectedCategory = ref<string>('');

const imageMap: { [key: string]: string } ={
  chairImage: chairImage,
  chairPlastic: chairPlastic,
  chairPlasticWhite: chairPlasticWhite,
  chairLibrary: chairLibrary,
  chairImage1: chairImage1,
  chairImage2: chairImage2,
  chairImage3: chairImage3,
  chairImage4: chairImage4,
};

async function getAllProducts() { 
  try {
    const { data } = await useFetch<ApiResponse>('http://localhost:3000/api/v1/product');

      if (data && data.value) {
          const { products } = data?.value;
          allProducts.value = products; 
          return products;
      }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

function filterCategories(categorie: string) { 
  selectedCategory.value = categorie;

  product.value = allProducts.value.filter((item: { categorie: string; }) => item.categorie === categorie);
}

const getProduct = computed(() => {
  if(allProducts.value) {
    return allProducts.value.map((product: { image: string }) => ({
      ...product,
      image: imageMap[product.image] || product.image,
    }));
  }
});

const listProduct = computed(() => {
  if(allProducts.value) {
    return product.value ? product.value.map((product: { image: string }) => ({
      ...product,
      image: imageMap[product.image] || product.image,
    })) : allProducts.value.map((product: { image: string }) => ({
      ...product,
      image: imageMap[product.image] || product.image,
    }));
  }
});

getAllProducts();

export {
  product,
  allProducts,
  selectedCategory,
  getAllProducts,
  filterCategories,
  imageMap,
  getProduct,
  listProduct
}