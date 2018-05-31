<template>
  <v-toolbar color="blue">
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Livraria</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat></v-btn>
      <v-btn flat class="white--text">Biblioteca</v-btn>
      <v-btn flat class="white--text">Autores</v-btn>
      <v-btn flat class="white--text">Sair</v-btn>
      <v-btn flat class="white--text">Entrar</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: "appHeader",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
