<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
<b-card :per-page="perPage" :current-page="currentPage">
    <b-media >
      <template #aside>
        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0">Product title - U$ 49.90</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin.
      </p>
      <b-row>
        <b-col lg="4" class="pb-2">
          <b-button
            size="sm"
            class="registered-products-button"
            pill
            variant="primary"
            ><i class="bx bx-edit-alt"></i> Edit</b-button
          >
        </b-col>

        <b-col lg="4" class="pb-2">
          <b-button
            size="sm"
            class="registered-products-button"
            pill
            variant="danger"
            ><i class="bx bx-trash"></i> Remove</b-button
          >
        </b-col>
      </b-row>
    </b-media>
  </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>
