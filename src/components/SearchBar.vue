<template>
<v-container>
   <v-layout justify-center>
     <v-flex  xs12 sm6 md6 >
          <v-text-field
            label="city search"
            v-model="searchText"
            placeholder="Enter city name"
            append-icon="search"
            @keyup.native.enter="searchText===null ? $event.prevent : searchLocation(searchText)"
            @click:append="searchText===null ? $event.prevent : searchLocation(searchText)"
            solo
            hide-details
          ></v-text-field>
        </v-flex>
   </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchText: null

    }
  },
  methods: {
    searchLocation (searchText) {
      this.$store.dispatch('searchLocation', searchText)
    }
  }
}
</script>
