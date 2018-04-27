<template>
  <div class="sum" >   
 <numbers></numbers>
    {{sum}}
    <p>You have generated {{totalNumbers}} random numbers</p>
  </div>
</template>

<script>
import Numbers from "./Numbers";
import { mapGetters } from "vuex";
export default {
  name: "sum",
  components: { Numbers },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sum", "totalNumbers"])
  }
};
</script>