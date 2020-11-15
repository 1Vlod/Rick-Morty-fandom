<template>
  <v-main class="mt-8">
    <v-row justify="center">
      <v-card>
        <v-card-title>
          {{character.name}}
        </v-card-title>
        <div class="d-flex">
          <v-img :src="character.image" alt="character photo"/>
          <v-card-text class="pt-0">
            <v-list-item height="200" two-line v-for="(value, key) in characterInfo" :key="key">
              <v-list-item-content class="pt-0">
                <v-list-item-title>{{value}}</v-list-item-title>
                <v-list-item-subtitle>{{key.charAt(0).toUpperCase() + key.slice(1)}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item height="200" two-line v-for="(value, key) in characterInfo" :key="key">
              <v-list-item-content class="pt-0">
                <v-list-item-title>{{locationInfo}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </div>
        
      </v-card>
      <router-link to="/">Home</router-link>      
    </v-row>
  </v-main>
</template>

<script>
import { getCharacter } from "rickmortyapi"

export default {
  data() {
    return {
      character: ""
    }
  },

  async mounted() {
    const characterQ = await getCharacter(Number(this.$route.params.id))
    this.character = characterQ
  },

  computed: {
    characterInfo() {
      const { name, status, species, type, gender } = this.character
      return { status, species, type: type || "None", gender}
    },
    locationInfo() {
      const { origin, location } = this.character
      console.log({origin, location})
      if (origin.name === location.name) {
        return {
          "origin/location": origin.name,
          
        }
      }
    }
  }
}
</script>