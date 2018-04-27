<template>
  <div>
      <a href="#" @click.prevent="add">Add random number</a>
  </div>
</template>
<script>
export default {
  name: "add-number",
  methods: {
    add() {
      this.$store.dispatch("fetchNumber", {
        min: 1,
        max: 100
      });
    }
  }
};
</script>
