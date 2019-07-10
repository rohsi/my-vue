<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style>

</style>
<script>
    import Portfolio from "./components/Portfolio";
    import HelloWorld from "./components/HelloWorld";
    export default {
        components: {HelloWorld, Portfolio}
    }
</script>