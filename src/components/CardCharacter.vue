<template>
  <v-card>
    <v-card-title>
      {{character.name}}
    </v-card-title>
    <v-img v-bind:src="character.image" alt="character photo" />
  </v-card>
</template>

<script>
export default {
  props: ["character"]
}
</script>