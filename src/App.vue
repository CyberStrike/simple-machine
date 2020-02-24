<template>
  <div id="app">
    <main-view/>
  </div>
</template>

<script>
import MainView from "./components/MainView";

export default {
  name: "App",
  components: {
    MainView
  }
};
</script>

<style>
  html, body {
    background: rgb(8, 10, 12);
  }
#app {
  margin-top: 60px;
}
</style>
