<template>
<div >
  <SfLoader
    v-if="productloading"
    class="pdc-pdp-loader"
    :loading="productloading"
  >
    <div />
  </SfLoader>
  <div id="product" v-else>
    <SfBreadcrumbs class="breadcrumbs" :breadcrumbs="breadcrumbs">
      <template #link="{ breadcrumb }">
        <nuxt-link
          :data-testid="breadcrumb.text"
          :to="breadcrumb.route.link"
          class="sf-link disable-active-link sf-breadcrumbs__breadcrumb"
        >
          {{ breadcrumb.text }}
        </nuxt-link>
      </template>
    </SfBreadcrumbs>

    <div class="product">
      <SfGallery
        :images="productGallery"
        :current="ActiveVariantImage + 1"
        class="product__gallery"
        imageWidth="922"
        imageHeight="994"
        thumbWidth="76"
        thumbHeight="130"
      />
      <div class="product__info">
        <div class="product__header row">
          <div>
            <SfHeading
              :title="productGetters.getName(product)"
              :level="1"
              class="sf-heading--no-underline sf-heading--left"
            />
          </div>
 <div class="review">
           <a href="#" class="rev"> <img src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1636018224/Capture1.png" alt="alt" style="width:110px">&nbsp; 2 review</a>
          </div>
       
          <div class="product__price-and-rating">
            <template
              v-if="
                productGetters.getPrice(product).special &&
                parseFloat(productGetters.getPrice(product).special) <
                  parseFloat(productGetters.getPrice(product).regular)
              "
            >
              <SfPrice
                :special="
                  $n(productGetters.getPrice(product).special, 'currency')
                "
              />
             
            </template>
            <SfPrice
              :regular="
                $n(productGetters.getPrice(product).special, 'currency')
              "
              v-else-if="
                productGetters.getPrice(product).special &&
                parseFloat(productGetters.getPrice(product).special) >
                  parseFloat(productGetters.getPrice(product).regular)
              "
            />
            <SfPrice
              :regular="
                $n(productGetters.getPrice(product).regular, 'currency')
              "
              v-else
            />
          </div>
        </div>
        <div>



          <template>
      <div style="display: flex">
            <div
              style="
                width: 59.152px;
                height: 59.152px;
                background-size: cover;
                background-image: url(https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1465.jpg?v=1635601260&amp;width=80&amp;height=80&amp;crop=top&amp;format=pjpg);
              "
              class="
                star-set-image
              "
              swatch-inside="true"
            >
              
            </div>
            <div
              style="
                width: 59.152px;
                height: 59.152px;
                background-size: cover;
                background-image: url(https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_Sep21__Day22324.jpg?v=1635601359&amp;width=80&amp;height=80&amp;crop=top&amp;format=pjpg);
              "
              class="
                star-set-image
              "
              swatch-inside="true"
            >
              
            </div>
            <div
              style="
                width: 59.152px;
                height: 59.152px;
                background-size: cover;
                background-image: url(https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1717.jpg?v=1635601471&amp;width=80&amp;height=80&amp;crop=top&amp;format=pjpg);
              "
              class="
                star-set-image
              "
              swatch-inside="true"
            >
              
            </div>
            <div
              style="
                width: 59.152px;
                height: 59.152px;
                background-size: cover;
                background-image: url(https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1739.jpg?v=1635601629&amp;width=80&amp;height=80&amp;crop=top&amp;format=pjpg);
              "
              class="
                star-set-image
                
              "
              swatch-inside="true"
            >
              
            </div>
          </div>
 </template>

<template>
<div>
  <div>
    <label class="swatch-label swatch-label-custom-image"
      ><span class="swatch-option-name">Color</span
      ><span class="swatch-variant-name">
        <span class="swatch-variant-name">—</span> Navy</span
      ></label
    >
  </div>
  <div
    style="
      background-color:#000080;
      width: 40.152px;
      height: 40.152px;
      background-size: cover;
    "
    class="star-set-image"
    swatch-inside="true"
  >
    
  </div>
</div>
</template>

<template>
 <div>
            <label class="swatch-label swatch-label-custom-image"
              ><span class="swatch-option-name">Size</span></label
            >
          </div>
          <div style="display:flex;  " class="padd">
            <div
              style="
                background-color: white;
                width: 40.152px;
                height: 40.152px;
                background-size: cover;
                border: solid 1px;
              "
              class="star-set-image"
              swatch-inside="true"
            >
              <p class="size">S</p>
            </div>
            <div
              style="
                background-color: white;
                width: 40.152px;
                height: 40.152px;
                background-size: cover;
                border: solid 1px;
              "
              class="star-set-image"
              swatch-inside="true"
            >
              <p class="size">M</p>
            </div>
            <div
              style="
                background-color: white;
                width: 40.152px;
                height: 40.152px;
                background-size: cover;
                border: solid 1px;
              "
              class="star-set-image"
              swatch-inside="true"
            >
              <p class="size">L</p>
            </div>
            <div
              style="
                background-color: white;
                width: 40.152px;
                height: 40.152px;
                background-size: cover;
                border: solid 1px;
              "
              class="star-set-image"
              swatch-inside="true"
            >
              <p class="size">XL</p>
            </div>
          </div>
          <hr class="line" />

</template>

<template>
   <div>
  <button id="show-btn" class="btn" @click="$bvModal.show('bv-modal-example')"><span class=""
              ><span class="_ks_text"
                >FIND YOUR SIZE <span class="size-question">?</span></span
              ></span
            ></button>

  <b-modal id="bv-modal-example" hide-footer>
    <b-img src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635931775/Capture.png" class="img" alt="#"/>
  </b-modal>
</div>
</template>
 <template>
   
 </template>

 <div class="px-3">
                 
   <p class="quantity my-3"> Quantity</p>
         
          <SfAddToCart
            data-cy="product-cart_add"
            :stock="stock"
            v-model="qty"
            :canAddToCart="stock > 0"
            class="product__add-to-cart"
            v-if="productGetters.getStockStatus(product) === true"
          >
           <br>
            <template #add-to-cart-btn>
              <div class="row">
                 <div class="col-9">
                <SfLink
                @click="handleCheckout(checkoutURL)"
                link="javascript:void(0);"
              >
                <SfButton
                  class="sf-add-to-cart__button mt-2"
                  :disabled="loading"
                  link="javascript:void(0);"
                >
                  BUY NOW
                </SfButton>
              </SfLink>
              </div>
              <div class="col-3">
              <SfButton
                class="Add mt-2"
                :disabled="loading"
                @click="addingToCart({ product, quantity: parseInt(qty) })"
              >
                ADD
              </SfButton>
              </div>
              </div>
            </template>         
            
          </SfAddToCart>
          

          
          <div>
            <p class="deliveryoption mt-2 py-2">Delivery Options</p>
            <input
              class="pincodebox"
              type="text"              
              maxlength="6"
              name="PostalCode"
              placeholder="Enter pincode" v-model="enteredcode"
            />
            <button
              type="button"
              class="deliverybox"
              @click="checkCodAvailability()"
            >
              Check
            </button>
          </div>
          <div class="codeavailable pt-2">
            {{this.output}}
          </div>
          <div>
            <p class="deliverydialogue">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <div class="pt-5 ">
              <img class="offrimg" src="~/assets/a.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    <!-- Product Description Section -->

    <div class="productspec">
      <description />
    </div>

    <div class="space"></div>
    <LazyHydrate when-visible >
      <RelatedProducts
        :productss="this.temp"                
        :loading="relatedLoading"
        title="Recently viewed items"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <RelatedProducts
        :products="relatedProducts"
        :loading="relatedLoading"
        title="You may also like"
      />
    </LazyHydrate>

<LowerBanner></LowerBanner>
   
  </div>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBadge,
  SfBanner,
  SfAlert,
  SfSticky,
  SfReview,
  SfBreadcrumbs,
  SfLoader,
  SfButton,
  SfColor,
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLink,
} from "@storefront-ui/vue";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import InstagramFeed from "~/components/InstagramFeed.vue";
import RelatedProducts from "~/components/RelatedProducts1.vue";
import { ref, computed, watch } from "@vue/composition-api";
import { useProduct, useCart, productGetters,cartGetters } from "@vue-storefront/shopify";
import MobileStoreBanner from "~/components/MobileStoreBanner.vue";
import LazyHydrate from "vue-lazy-hydration";
import { onSSR } from "@vue-storefront/core";
import useUiNotification from "~/composables/useUiNotification";
import RelatedProducts1 from "~/components/RelatedProducts.vue";
import description from "~/components/description.vue";
import LowerBanner from "~/components/LowerBanner.vue";

export default {
  name: "Product",
  transition: "fade",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  methods: {
     handleCheckout(checkoutURL) {
      setTimeout(() => {
        window.location.replace(checkoutURL);
      }, 400);
    },
    checkCodAvailability () { 
      
      this.pincodes.filter((item1) => {           
            return item1.code.includes(this.enteredcode)
            }).length==0?this.output = 'Cash on Delivery is not available to this postal code.':this.output='Cash on Delivery Available' 
            this.enteredcode = ''
      
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async addingToCart(Productdata) {
      await this.addItem(Productdata).then(() => {
        this.sendNotification({
          key: "product_added",
          message: `${Productdata.product.name} has been successfully added to your cart.`,
          type: "success",
          title: "Product added!",
          icon: "check",
        });
        this.qty = 1;
      });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    updatedQuantity(value) {
      this.qty = value;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setGalleryWidth() {
      const gallary = document.getElementsByClassName("product__gallery");
      const gallerySlider =
        gallary.length > 0 && gallary[0].querySelectorAll(".glide__slides");
      const galleryAllSlides =
        gallerySlider.length > 0 &&
        gallerySlider[0].querySelectorAll(".glide__slide");
      typeof galleryAllSlides !== Boolean &&
        galleryAllSlides.length > 0 &&
        galleryAllSlides.forEach((gallerySlide) => {
          gallerySlide.style.flexBasis = gallerySlide.style.width;
        });
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    const items = JSON.parse(localStorage.getItem("recent"));
    this.temp = items,   
    window.addEventListener("load", () => {
      this.setGalleryWidth();
    });
    this.$nextTick(() => {
      this.setGalleryWidth();
      this.setBreadcrumb();
      window.addEventListener("resize", this.setGalleryWidth);
    });
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updated() {
    this.setGalleryWidth();
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props, context) {

       const { cart, removeItem, updateItemQty, load: loadCart } = useCart();
    const checkoutURL = computed(() => cartGetters.getcheckoutURL(cart.value));

    const breadcrumbs = ref([]);
    const atttLbl = "";
    const qty = ref(1);
    const { slug } = context.root.$route.params;
    const {
      loading: productloading,
      products,
      search,
    } = useProduct("products");
    const { send: sendNotification } = useUiNotification();
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
    } = useProduct("relatedProducts");
    const { addItem, loading } = useCart();

    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: context.root.$route.query,
        })[0]
    );
    const id = computed(() => productGetters.getId(product.value));
    const originalId = computed(() =>
      productGetters.getProductOriginalId(product.value)
    );
    const productTitle = computed(() => productGetters.getName(product.value));
    const productCoverImage = computed(() =>
      productGetters.getPDPCoverImage(product.value)
    );
    const productDescription = computed(() =>
      productGetters.getDescription(product.value)
    );
    const productDescriptionHtml = computed(() =>
      productGetters.getDescription(product.value, true)
    );
    const options = computed(() =>
      productGetters.getAttributes(products.value)
    );
    const configuration = computed(() => {
      return productGetters.getSelectedVariant(
        products.value,
        context.root.$route.query
      );
    });

    const setBreadcrumb = () => {
      breadcrumbs.value = [
        {
          text: "Home",
          route: { link: "/" },
        },
        {
          text: "products",
          route: { link: "#" },
        },
        {
          text: productTitle.value,
          route: { link: "#" },
        },
      ];
    };

    watch(
      productTitle,
      (currproductTitle, prevproductTitle) => {
        if (currproductTitle !== prevproductTitle) {
          setBreadcrumb();
        }
      },
      { deep: true }
    );
    const productGallery = computed(() => {
      if (product.value && product.value.images.length === 0) {
        product.value.images.push({
          originalSrc:
            "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127",
        });
      }
      return productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: product.value._name || product.value.name,
      }));
    });
    const stock = computed(() => {
      return productGetters.getStock(product.value);
    });
    const ActiveVariantImage = computed(() => {
      return productGetters.getVariantImage(product.value) || 0;
    });

    onSSR(async () => {
      await search({ slug, selectedOptions: configuration.value }).then(() => {
        if (productTitle.value === "Product's name") {
          return context.root.error({
            statusCode: 404,
            message: "This product could not be found",
          });
        }
      });
      await searchRelatedProducts({ productId: id.value, related: true });
    });

    const updateFilter = (filter) => {
      if (options.value) {
        Object.keys(options.value).forEach((attr) => {
          if (attr in filter) {
            return;
          }
          filter[attr] =
            Object.keys(configuration.value).length > 0
              ? configuration.value[attr]
              : options.value[attr][0].value;
        });
      }
      context.root.$router.push({
        path: context.root.$route.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    return {
      updateFilter,
      configuration,
      product,
      productDescription,
      productCoverImage,
      productDescriptionHtml,
      ActiveVariantImage,
      sendNotification,
      originalId,
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      stock,
      productTitle,
      breadcrumbs,
      qty,
      addItem,
      loading,
      productloading,
      productGallery,
      productGetters,
      setBreadcrumb,
      atttLbl,
      checkoutURL,
    };
  },
  components: {
    SfAlert,
    SfColor,
    SfLoader,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfReview,
    SfBadge,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    MobileStoreBanner,
    LazyHydrate,
    SfCarousel,
    SfProductCard,
    SfSection,
    RelatedProducts1,
    description,
    LowerBanner,
    SfLink
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {      
      output : '',
      recentlyviewd: [],
      temp: [],
      enteredcode : '',      
      pincodes : [ 
        {
          code:"1234"
        },
        {
          code:"1111"
        }
        ],
      
      stock: 5,
      properties: [
        {
          name: "Product Code",
          value: "578902-00",
        },
        {
          name: "Category",
          value: "Pants",
        },
        {
          name: "Material",
          value: "Cotton",
        },
        {
          name: "Country",
          value: "Germany",
        },
      ],
      previous: [],
      description:
        "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      detailsIsActive: false,
      brand:
        "Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",
      careInstructions: "Do not wash!",
    };
  },
};
</script>

<style lang="scss">

.sf-gallery__stage{
flex: 1;
    max-width: var(--gallery-stage-width, 46.375rem);
}
.sf-gallery{
   margin-top: 16px;
}
.sf-product-card{
 max-width: 37rem;
 text-decoration: none;
}
.sf-link{
    text-decoration: none;
}

.pdc-pdp-loader {
  min-height: 200px;
  padding: 100px 0;
}
.sf-add-to-cart {
  display: block;
}

#product {
  box-sizing: border-box;
}
.pincode {
  -webkit-text-security: disc;
  -moz-text-security: disc;
}
.pdc-pdp-loader {
  min-height: 200px;
  padding: 100px 0;
}

#product {
  box-sizing: border-box;
  @include for-desktop {
   // max-width: 1472px;
     margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
     max-width: 32.625rem;
     margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
    //  margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    //margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
     //margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.banner-app {
  --banner-container-width: 100%;
  --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-title-font-size: var(--h1-font-size);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-title-font-weight: var(--font-weight--semibold);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-title-text-transform: capitalize;
  --banner-subtitle-text-transform: capitalize;
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }
  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.space {
  width: 100%;
  background: #f3f4f9;
  padding: 65px 0 68px;
  margin-bottom: 59px;
  margin-top: 50px;
}
h5 {
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #000;
  margin-bottom: 15px;
  display: block;
  font-size: 16px;
  font-family: Jost, sans-serif;
}
span {
  font-family: Jost, sans-serif;
  letter-spacing: 0.04em;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  list-style: none;
  font-weight: 100;
  color: grey;
}
p {
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #000;
  margin-bottom: 15px;
  display: block;
  font-family: Jost, sans-serif;
  line-height: 1.6;
  font-size: 16px;
}
.h5 {
  font-weight: 700;
  color: grey;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: Jost, sans-serif;
  letter-spacing: 0.04em;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
}
.deliverydialogue {
  margin: 19px 0 0;
  line-height: 1.2;
  color: grey;
  font-size: 14px;
}
.pincodebox {
  font-family: Jost, sans-serif;
  letter-spacing: 0.04em;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  width: 100%;
  font-size: 13px;
  color: grey;
  height: 48px;
  padding: 0 85px 0 20px;
  position: relative;
  border-color: #000;
}
.deliverybox {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;
  margin-left: -100px;
  margin-top: 13px;
  letter-spacing: 0.7px;
  background: 0 0;
  border: none;
  display: inline-block;
  -webkit-appearance: none;
}
.deliveryoption {
  font-size: 18px;
  text-transform: inherit;
  color: grey;
  font-weight: 400;
  font-family: Jost,sans-serif;
  line-height: 1.6;
  letter-spacing: 0.3px;
  margin-bottom: 20 px;
}
.codeavailable {
  color: rgb(255, 0, 0);
  font-size: 13px;
  font-weight: 400;
  font-family: Jost,sans-serif;
    letter-spacing: .04em;
}
.star-set-image{
  border-radius: 5px;
  margin: 10px;
}.swatch-label {
  padding: 10px;
 
  font-style: normal;
}
.swatch-option-name {
  font-size: 17px;
  font-weight: 900;
  color: #000;
}
.swatch-variant-name {
  font-size: 17px;
  padding: 0px 3px;
  color: #000;
}
.star-set-image{
  border-radius: 7px;
  padding: 10px 0px 0px 10px;
  margin: 10px;
}
.swatch-label{
  padding-bottom: 10px;
}
.swatch-option-name {
  padding:0px 10px 0px 10px;
  font-size: 17px;
  color: #000;
  font-weight: 600;
  font-style: normal;
}
div.star-set-image:hover, div.star-set-image:active {color: black;}
div.star-set-image:hover, div.star-set-image:active {background-color: black !important;}
p.size:hover,p.size:active {color: white !important;}
.btn{
  position: relative;
  overflow: hidden;
 width: 100%;
 text-align: center ;
 background-color: #f5f4f4!important;
 border: 1px #f0f0f0 solid;
 font-size: 14px;
 padding: 10px 0px;
 margin-left:13px ;
}
.sf-add-to-cart__button {
  display: block;
  width: 100%;
  line-height: 1.42;
  text-decoration: none !important;
  text-align: center;
  white-space: normal;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 90px;
  cursor: pointer;
  border: 1px;
  border-radius: 0;
  color: #fff;
  background: #111;
  height: 100%;
}
.Add {
  background: #afecf5 !important;
  border-color: #afecf5 !important;
  color: #000 !important;
  width: 120%;
  margin-left: -10px;
  height: 100%;
}
.img {
  width :100%;
}
.rev{
  color: #000;
  text-decoration:none;
}
@media only screen and (max-width: 600px) { 
  .offrimg {
    width:100%;
  }
  .productspec {
    width: 100%;
  }  

}
</style>
