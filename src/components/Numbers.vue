<template>
<div>
   <ul v-if="numbers.length">
      <li v-for="number in numbers">
          {{number}}
      </li>
    </ul>
    <p v-else>
      Start adding numbers
    </p>
  <add-number></add-number>
    
</div>

</template>

<script>
import AddNumber from "./AddNumber";
export default {
  name: "numbers",
  components: { AddNumber },
  computed: {
    numbers() {
      return this.$store.getters.numbers;
    }
  }
};
</script>
