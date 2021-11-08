
<template>
  <SfSection :title-heading="title" class="section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        data-cy="related-products-carousel"
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem
          class="carousel__item"
          v-for="(product, i) in products"
          :key="i"
        >
          <SfProductCard
            @click="myfunc(product)"
            :title="productGetters.getName(product)"
            :image="productGetters.getCoverImage(product)"
            :regular-price="
              $n(productGetters.getPrice(product).regular, 'currency')
            "
            :special-price="
              productGetters.getPrice(product).special &&
              $n(productGetters.getPrice(product).special, 'currency')
            "
            :link="
              localePath(
                `/p/${productGetters.getId(product)}/${productGetters.getSlug(
                  product
                )}`
              )
            "
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
} from "@storefront-ui/vue";

import { productGetters } from "@vue-storefront/shopify";


export default {
  name: "RelatedProducts",
  data() {
    return {
      currentproduct:[],
      temp: [],
      alreadyin: null,
      k: 0,
    };
  },
  methods: {
    myfunc(product) {
      const item = JSON.parse(localStorage.getItem("recent")); 
      this.currentproduct.push(product)  
      localStorage.setItem("current", JSON.stringify(this.currentproduct));             
      this.currentproduct.length>0?this.currentproduct.shift():''   
         
      if (item != null) {
        this.temp = item;
        this.temp.filter((item1) => {           
            return item1.id.includes(product.id)
            }).length==0?this.temp.push(product):''             
        this.temp.length>5?this.temp.shift():''
      
      localStorage.setItem("recent", JSON.stringify(this.temp));
      }
      if (item == null) {
        this.temp.push(product);
        localStorage.setItem("recent", JSON.stringify(this.temp));
      }
    },
  },

  setup() {
    return { productGetters };
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,

  },
  props: {
    title: String,
    products: Array,
    loading: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
</style>
