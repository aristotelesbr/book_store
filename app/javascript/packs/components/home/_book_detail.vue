<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn slot="activator" icon>
        <v-icon color="blue">info</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="headline">{{book.attributes.title}}</v-card-title>
        <v-card-text>{{book.attributes.description}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  // const { title } = book.attributes
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: ['book']
  }
</script>
