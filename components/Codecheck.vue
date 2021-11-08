<template>
  <div>
    <p class="deliveryoption mt-2 py-2">Delivery Options</p>
    <input
      class="pincodebox"
      type="text"
      maxlength="6"
      name="PostalCode"
      placeholder="Enter pincode"
      v-model="enteredcode"
    />
    <button type="button" class="deliverybox" @click="checkCodAvailability()">
      Check
    </button>

    <div>
      <div class="codeavailable pt-2" v-if="output.length == 54">
        {{ this.output }}
      </div>
      <div class="codeavailable1 pt-2" v-else-if="output.length == 26">
        {{ this.output }}
      </div>
    </div>

    <p class="deliverydialogue">
      Please enter PIN code to check delivery time & Pay on Delivery
      Availability
    </p>
    <div class="pt-5">
      <img class="offrimg" src="~/assets/a.png" alt="#" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: "",
      enteredcode: "",
      pincodes: [
        {
          code: "1234",
        },
        {
          code: "1111",
        },
      ],
    };
  },
  methods: {
    checkCodAvailability() {
      if (this.enteredcode != "") {
        this.pincodes.filter((item1) => {
          return item1.code.includes(this.enteredcode);
        }).length == 0
          ? (this.output =
              "Cash on Delivery is not available to this postal code.")
          : (this.output = "Cash on Delivery Available");
        this.enteredcode = null;
      }
    },
  },
};
</script>

<style>
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
.codeavailable1 {
  color: green;
  font-size: 13px;
  font-weight: 400;
  font-family: Jost,sans-serif;
    letter-spacing: .04em;
}
</style>