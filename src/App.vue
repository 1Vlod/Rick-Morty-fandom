<template>
  <v-app id="inspire">
    <NavBar/>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="4" class="mx-auto">
            <v-text-field label="something" v-model="query"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="character in characters"
            :key="character.id"
            cols="4"
          >
            <CardCharacter height="200" v-bind:character="character"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import { getCharacter } from "rickmortyapi"

import CardCharacter from "@/components/CardCharacter"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
export default {
  name: 'App',

  components: {
    NavBar,
    Search,
    CardCharacter
  },

  data: () => ({
    characters: [],
    query: ""
  }),
  async mounted() {
    const family = await getCharacter([1, 2, 3, 4, 5])
    console.log("family", family)
    this.characters = [...family]
  },
  watch: {
    async query() {
       if (this.query.length > 0) {
        const allCharacters = await getCharacter({
          name: this.query
        })
        console.log("allCharacters", allCharacters)
        this.characters = [...allCharacters.results]
      }
    }
  }
};
</script>
