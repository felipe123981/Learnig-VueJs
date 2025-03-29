<template>
  <div class="form">
    <p>
      <input
        type="text"
        placeholder="Insira o título"
        class="entrada"
        v-model="artigo.title"
      />
    </p>
    <p>
      <textarea
        placeholder="Insira seu conteúdo"
        class="entrada"
        v-model="artigo.content"
      ></textarea>
    </p>
    <p>
      <button v-if="editar" class="primary" @click="cadastrarArtigos">
        Editar
      </button>
      <button v-else class="success" @click="cadastrarArtigos">Postar</button>
    </p>
    <input type="hidden" v-model="artigo.id" />
  </div>
  <div class="hello">
    <div class="card">
      <div class="post" v-for="artigo in artigos" :key="artigo.id">
        <h3>{{ artigo.title }}</h3>
        <p>{{ artigo.content }}</p>
        <hr />
        <p>
          <button class="danger" @click="deletarArtigo(artigo.id)">
            Deletar
          </button>
          |
          <button class="info" @click="editarArtigo(artigo)">Editar</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyArtigos",
  data() {
    return {
      artigos: [],
      artigo: {},
      editar: false,
    };
  },
  methods: {
    fetchArtigos() {
      axios
        .get("http://localhost:3333/posts")
        .then((res) => {
          this.artigos = res.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    cadastrarArtigos() {
      if (this.editar == false) {
        if (this.artigo.title == "") {
          alert("Preencha o título");
          return;
        }
        axios
          .post("http://localhost:3333/posts", {
            title: this.artigo.title,
            content: this.artigo.content,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert("Dados cadastrados com sucesso!");
        this.fetchArtigos();
        (this.artigo.id = ""),
          (this.artigo.title = ""),
          (this.artigo.content = "");
      } else {
        axios
          .put(`http://localhost:3333/posts/${this.artigo.id}`, {
            title: this.artigo.title,
            content: this.artigo.content,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert("Dados atualizados com sucesso!");
        this.fetchArtigos();
        (this.artigo.id = ""),
          (this.artigo.title = ""),
          (this.artigo.content = ""),
          (this.editar = false);
      }
    },
    deletarArtigo(id) {
      if (confirm("Deseja deletar o artigo de id: " + id)) {
        alert("Agora sim!");
        axios
          .delete(`http://localhost:3333/posts/${id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert("Deletado com sucesso!");
        this.fetchArtigos();
      }
    },
    editarArtigo(artigo) {
      this.editar = true;
      this.artigo.id = artigo.id;
      this.artigo.title = artigo.title;
      this.artigo.content = artigo.content;
      //alert(artigo);
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
.info {
  color: #fff;
  background: blue;
  padding: 5px;
}
.success {
  color: #fff;
  background: green;
  padding: 15px;
  border: 1px;
}
.primary {
  color: #333;
  background: cyan;
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
