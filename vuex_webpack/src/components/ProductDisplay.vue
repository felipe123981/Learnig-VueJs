<template>
  <div>
    <div>
      <b-card>
        <b-media>
          <template #aside>
            <b-img
              blank
              blank-color="#ccc"
              width="50"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Product Title - {{ currency }} {{ total }}</h5>
          <div class="star-rating">
            <b-form-rating
              v-model="rate"
              variant="warning"
              class="mb-2"
              id="form-control"
            ></b-form-rating>
          </div>

          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel ...</p>
          <b-row>
            <b-col lg="4" class="pb-2"
              ><b-button size="sm" pill
                ><i class="bx bx-shopping-bag"></i> Shop</b-button
              ></b-col
            >
            <b-col lg="4" class="pb-2"
              ><b-button size="sm" pill
                ><i class="bx bx-cart-alt"></i> Add t cart</b-button
              ></b-col
            >
          </b-row>
        </b-media>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDisplay",
  data() {
    return {
        total: 50.99,
        rate: 4.5,
        currency: 'U$'
    }
  }
};
</script>

<style scoped>
#form-control {
    display: block;
    min-width: 150px;
    width: 26%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
