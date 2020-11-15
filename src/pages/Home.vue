<template>
  <v-main>
      <v-container>
        <Search v-model="query"/>
        <CardAlert :error="error"/>

        <v-row justify-md="center">
          <v-col
            v-for="character in characters"
            :key="character.id"
            lg="2"
            md="4">
            <CardCharacter v-bind:character="character"/>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
</template>

<script>
import { getCharacter } from "rickmortyapi"

import CardCharacter from "@/components/CardCharacter"
import Search from "@/components/Search"
import CardAlert from "@/components/CardAlert"

export default {
  name: 'App',

  components: {
    Search,
    CardCharacter,
    CardAlert
  },

  data: () => ({
    characters: [],
    query: "",
    error: false
  }),

  async mounted() {
    const family = await getCharacter([1, 2, 3, 4, 5])
    this.characters = [...family]
  },
  
  watch: {
    async query() {
      if (this.query.length > 0) {
        try {
          const allCharacters = await getCharacter({
            name: this.query
          })
          this.characters = [...allCharacters.results]
          this.error = false
        } catch(e) {
          this.error = true
        }
      }
    }
  }
};
</script>
