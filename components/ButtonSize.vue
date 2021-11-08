<template lang="">
  <div>
    <button
    class="btn1 btwrapper"
      v-for="(attribs, a) in option"
      :key="`item-${a}`"
      @click.prevent="$emit('size-select',{ [o]: attribs.value })"
    >
      <span class="btntext"> {{ attribs.value }}</span>
     
    </button>
    <!-- { [o]: attribs.value } -->
  </div>
</template>
<script>
export default {
    props:['option','o']
};
</script>

<style scoped>
     .product__description{
      font-weight: 600;
    font-style: normal;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
        font-size: 17px;
    
}
.btn1{
    position: relative;
  overflow: hidden;
width:10%;
 text-align: center ;
 background-color: #f5f4f4!important;
 border: 1px black solid;
 font-size: 14px;
 padding: 10px 0px;
 margin-left:13px ;
padding: 10px;
border-radius: 7px;
margin: 10px;

}

.btntext:hover{
    color: white;
}
.btwrapper:hover{
  background-color: black !important;
  
}
</style>