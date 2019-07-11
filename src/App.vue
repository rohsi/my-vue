<template>
  <div id="app">
<hello-world/>
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
  </div>
</template>

<style>

</style>
<script>
    import Portfolios from "./components/Portfolios";
    import HelloWorld from "./components/HelloWorld";
    export default {
        components: {HelloWorld, Portfolios}
    }
</script>