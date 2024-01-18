<template>
  <div class="pl-20">
    <h2>Find Your Car</h2>
    <div class="autocomplete-select-icon">
      <FormKit
        type="autocomplete"
        name="make-search"
        label="Find your make"
        placeholder="Please select"
        help="some help text"
        empty-message="No results match"
        validation="required"
        error-behaviour="live"
        :options="makes"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// Find Your Car Component here

const makes = ref([
  {
    value: "ford",
    label: "Ford",
  },
  {
    value: "mustang",
    label: "Mustang",
  },
  {
    value: "tesla",
    label: "Tesla",
  },
  {
    value: "bmw",
    label: "BMW",
  },
]);
</script>

<style lang="scss">
.autocomplete-select-icon {
  svg {
    background-position: 0;
    display: block;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset%3DUS-ASCII,%3Csvg%20baseProfile%3D%22tiny%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23727272%22%20d%3D%22M8.922%2011.828l-5.42-5.656h10.997L8.92%2011.828z%22%2F%3E%3C%2Fsvg%3E") !important;
  }
}
</style>
