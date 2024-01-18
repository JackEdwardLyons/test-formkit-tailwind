<template>
  <div class="pl-20">
    <h2>Find Your Car</h2>
    <div class="autocomplete-select-icon max-w-[250px]">
      <FormKit
        type="autocomplete"
        name="make-search"
        label="Find your make"
        placeholder="Please select"
        empty-message="No results match"
        validation="required"
        error-behaviour="live"
        :options="makes"
      />

      <br />
      <FormKit
        type="autocomplete"
        name="model-search"
        label="Find your model"
        placeholder="Please select"
        empty-message="No results match"
        validation="required"
        error-behaviour="live"
        :options="models"
      />

      <br />
      <FormKit
        type="autocomplete"
        name="series-search"
        label="Find your series"
        placeholder="Please select"
        empty-message="No results match"
        validation="required"
        error-behaviour="live"
        :options="series"
      />

      <br />
      <FormKit
        type="autocomplete"
        name="body-search"
        label="Find your body"
        placeholder="Please select"
        empty-message="No results match"
        validation="required"
        error-behaviour="live"
        :options="body"
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
    value: "mercedes",
    label: "Mercedes",
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

const models = ref([
  {
    value: "f150",
    label: "F-150",
  },
  {
    value: "fiesta",
    label: "Fiesta",
  },
  {
    value: "mustang",
    label: "Mustang",
  },
  {
    value: "focus",
    label: "Focus",
  },
]);

const series = ref([
  {
    value: "premium",
    label: "Premium",
  },
  {
    value: "4x4",
    label: "4x4",
  },
  {
    value: "platinum",
    label: "Platinum",
  },
  {
    value: "gold",
    label: "Gold",
  },
]);

const body = ref([
  {
    value: "sedan",
    label: "Sedan",
  },
  {
    value: "4x4",
    label: "4x4",
  },
  {
    value: "wagon",
    label: "Wagon",
  },
  {
    value: "convertible",
    label: "Convertible",
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
