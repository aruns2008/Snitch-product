<template>
  <!-- <SfSection :title-heading="title" class="section">
   <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        data-cy="related-products-carousel"
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
      
        <SfCarouselItem class="carousel__item"  v-for="(product, i) in products" :key="i">
          <SfProductCard @click="my()"
            :title="productGetters.getName(product)"
            :image="productGetters.getCoverImage(product)"
            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                   
          />
       
        </SfCarouselItem>   
   
      </SfCarousel>
    </SfLoader>
  </SfSection> -->
  <div>         
    
       <!-- <SfCarouselItem class="carousel__item"  v-for="(product, i) in products" :key="i">
          <SfProductCard @click="my()"
            :title="productGetters.getName(product)"
            :image="productGetters.getCoverImage(product)"
            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                   
          />
       
        </SfCarouselItem>   -->
    </div>
  
</template>

<script lang="ts">

import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader
} from '@storefront-ui/vue';

import { productGetters } from '@vue-storefront/shopify';


export default {
     props: {
    products: Array,
    title: String,
    loading: Boolean 
  }, 
  name: 'RelatedProducts',
  data () {
    return {
      temp : [],   
      titlenew : '',       
      image : '',
      regular : '',
      link : '',
      special : '',

    }
  },
  methods : {
     mymeth (product) {
       this.temp = product
       console.log(this.temp)
     }
  },
  
  setup() {
    
    // function previouspage() {              
    //   this.temp.push(this.product)            
    //   console.log(this.products)              
    // }
    return { productGetters };
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
   
  },
 
   

//   mounted () { 
//     console.log(this.products)
//   }
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
