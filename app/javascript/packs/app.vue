<template>
  <v-app>
    <AppHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter />
  </v-app>
</template>

​<script>
  import AppFooter from './components/application/footer'
  import AppHeader from './components/application/header'
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
