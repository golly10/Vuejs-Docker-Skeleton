<template>
  <div class="home">
    <h1>Hello this is home view</h1>
    <Tabla />
    <el-button class="buttonP" type="primary" @click="goAbout">
      Go About</el-button
    >
  </div>
</template>

<script>
import Tabla from "../components/Tabla.vue";
export default {
  name: "home",
  components: {
    Tabla
  },
  methods: {
    goAbout() {
      this.$router.push("/about");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttonP {
  margin-top: 5%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
