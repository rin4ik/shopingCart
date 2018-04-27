<template>
  <div class="sum" >   
 <numbers></numbers>
    {{sum}}
    <p>You have generated {{totalNumbers}} random numbers</p>
  </div>
</template>

<script>
import Numbers from "./Numbers";
export default {
  name: "sum",
  components: { Numbers },
  data() {
    return {};
  },
  computed: {
    sum() {
      return this.$store.getters.sum;
    },
    totalNumbers() {
      return this.$store.getters.totalNumbers;
    }
  }
};
</script>