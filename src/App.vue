<template>
  <v-app id="inspire">
    <NavBar/>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  components: {
    NavBar
  }
}
</script>

