<template>
  <div class="hello">
    <div class="card">
      <div class="post" v-for="artigo in artigos" :key="artigo.id">
        <h3>{{ artigo.title }}</h3>
        <p>{{ artigo.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyArtigos",
  data() {
    return {
      artigos: [
        { id: 1, titulo: "titulo 1", conteudo: "conteudo deste titulo" },
      ],
    };
  },
  methods: {
    fetchArtigos() {
      fetch(" http://localhost:3333/posts/ ")
        .then((res) => res.json())
        .then((res) => {
          this.artigos = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchArtigos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #333;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
.card {
  background-color: #fff;
  color: #333;
}
.post {
  border: 1px solid silver;
  padding: 10px;
  margin-top: 10px;
  text-align: left;
}
h3 {
  border-bottom: 1px dotted silver;
  margin-bottom: 10px;
}
.disabled {
  text-decoration: none;
  color: #ccc;
  cursor: default;
  pointer-events: none;
}
i {
  color: #333;
}
.danger {
  color: #fff;
  background: red;
  padding: 5px;
}
.success {
  color: #fff;
  background: green;
  padding: 15px;
  border: 1px;
}
.entrada {
  width: 98%;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
input.entrada {
  height: 30px;
}
textarea.entrada {
  height: 80px;
  margin-bottom: 10px;
}
</style>
