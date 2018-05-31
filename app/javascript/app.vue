<template>
  <v-app>
    <AppHeader />
    <v-content>
      <h4 class="black--text">Main Component</h4>
    </v-content>
    <AppFooter />
  </v-app>
</template>

​<script>
  import AppFooter from './src/components/application/footer'
  import AppHeader from './src/components/application/header'
  export default{
    data() {
      return {
      }
    },
    components: {
      AppFooter,
      AppHeader,
    }
  }
</script>

​<style>
  #app {
  }
</style>
