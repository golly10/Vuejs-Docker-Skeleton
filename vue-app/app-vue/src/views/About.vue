<template>
    <div id="about">
        <h1> This is about view</h1>
        <Tabla />
        <el-button class="buttonP"
                   type="primary"
                   @click="goHome"
        >
            Go Home</el-button>
    </div>
</template>

<script>
import Tabla from "../components/Tabla.vue";
export default {
    name: "About",
    props: {
    msg: String
    },
    components: {
      Tabla
    },
    methods: {
        goHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style scoped lang="scss">
    .buttonP {
        margin-top: 5%;
    }
</style>