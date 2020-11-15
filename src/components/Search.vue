<template>
  <v-row>
    <v-col cols="4" class="mx-auto">
      <v-text-field 
        label="Character name"
        v-model="query">       
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      query: "" 
    }
  },
  watch: {
    query() {
      this.$emit("input", this.query)
    }
  }
}
</script>