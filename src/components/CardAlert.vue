<template>
  <v-row justify="center" v-if="error">
    <v-alert
      color="pink darken-1"
      dark>
      Не найдено персонажей с данным иминем =(
    </v-alert>
  </v-row>
</template>

<script>
export default {
  props: ["error"]
}
</script>