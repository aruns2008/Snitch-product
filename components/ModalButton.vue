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

<script>
export default {

}
</script>

<style>

</style>