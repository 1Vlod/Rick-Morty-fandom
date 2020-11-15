<template>
  <router-link :to="`card/${this.character.id}`" style="text-decoration: none">
    <v-card max-width="300" hover>
      <div class="display-1 text-truncate">{{character.name}}</div>
      <v-img v-bind:src="character.image" alt="character photo"/>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: ["character"]
}
</script>