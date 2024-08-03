<script setup lang="ts">
import chairImage from '~/assets/product/Chair_image.png';
import chairPlastic from '~/assets/product/Chair_Plastic_orange.png';
import chairPlasticWhite from '~/assets/product/Chair_Plastic_white.png';
import chairLibrary from '~/assets/product/Library_Stool_ Chair.png';
import type { IProduct } from '~/types/types';
import { chairList } from '~/utils/product';

const {
  data: allProduct,
  pending,
  error,
  status,
} = await useFetch('http://localhost:3000/api/v1/product', {
  lazy: true,
});

const imageMap = {
  chairImage: chairImage,
  chairPlastic: chairPlastic,
  chairPlasticWhite: chairPlasticWhite,
  chairLibrary: chairLibrary,
};

const categories = ref<string[]>([
  'novo',
  'lançamento',
  'comforto',
  'mais vendidos',
]);

const selectedCategory = ref<string>('');
const product = ref<IProduct[]>();

function filterCategories(categorie: string) {
  selectedCategory.value = categorie;
  product.value = chairList.filter((item) => item.categorie === categorie);
}

const getProduct = computed(() => {
  let { products }: any = allProduct.value;

  return products.map((product: { image: string }) => ({
    ...product,
    image: imageMap[product.image] || product.image,
  }));
});

const listProduct = computed(() => {
  return product.value ? product.value : chairList;
});

function buyProduct(product: IProduct) {
  console.log(product);
}
</script>

<template>
  <div>
    <mainPage />
    <sectionPage />

    <div>
      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
        <h3 class="text-xl font-bold text-center mt-10">Nossos Produtos</h3>

        <div v-if="pending">
          <p>Aguarde...</p>
        </div>

        <div v-else-if="error">
          <p>Ocorreu um erro: {{ status }}</p>
        </div>

        <products v-else :listProduct="getProduct" @buyProduct="buyProduct" />
      </div>

      <categoriesPage />

      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
        <h3 class="text-xl font-bold text-center mt-10">Todos Produtos</h3>

        <div class="mx-auto flex justify-center mt-4">
          <button v-for="categorie in categories" :key="categorie">
            <span
              :class="[
                'font-medium mx-4 capitalize pb-1',
                {
                  'border-b-2 border-b-primary': selectedCategory === categorie,
                },
              ]"
              @click="filterCategories(categorie)"
            >
              {{ categorie }}
            </span>
          </button>
        </div>

        <products :listProduct="listProduct" @buyProduct="buyProduct" />
      </div>

      <depositions />

      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
        <h3 class="font-bold text-xl">Novidades da loja</h3>

        <products :listProduct="getProduct" @buyProduct="buyProduct" />
      </div>
    </div>
  </div>
</template>
