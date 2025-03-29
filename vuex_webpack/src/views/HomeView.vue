<template>
  <div>
    <slot> List of products:</slot>
    <br />
    <ProductDisplay style="width: 70vw"></ProductDisplay>
    <br />
    <ProductDisplay style="width: 70vw"></ProductDisplay>
    <br />
    <ProductDisplay style="width: 70vw"></ProductDisplay>
    <br />
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <span class="page-link">Previous</span>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item ">
          <span class="page-link">
            2
            <span class="sr-only">(current)</span>
          </span>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";

export default {
  data() {
    return {
      value: ["all"],
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
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  components: {
    ProductDisplay,
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>
<style scoped>
body {
  background: #eee;
}
.product_block {
  width: 70vw;
  min-width: 250px;
}
.ratings i {
  font-size: 16px;
  color: red;
}
.strike-text {
  color: red;
  text-decoration: line-through;
}
.product-image {
  width: 100%;
}
.dot {
  height: 7px;
  width: 7px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 3px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
}
.spec-1 {
  color: #938787;
  font-size: 15px;
}
h5 {
  font-weight: 400;
}
.para {
  font-size: 16px;
}
</style>
