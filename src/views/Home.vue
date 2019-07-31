<template>
  <div>
    <SearchBar />
    <ForecastTab />
    <Weather />
    <template v-if="error!==null">
      <v-snackbar
          :multi-line="true"
          color="error"
          :timeout="5000"
          @input="closeError"
          :value="true"
        >{{error}}
          <v-btn
            dark
            flat
            @click.native="closeError"
          >
            Close
          </v-btn>
      </v-snackbar>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '../components/SearchBar'
import ForecastTab from '../components/ForecastTab'
import Weather from '../components/Weather'

export default {
  components: {
    SearchBar,
    ForecastTab,
    Weather
  },
  computed: {
    ...mapState(['error'])

  },
  methods: {
    closeError () {
      this.$store.commit('clearError')
    }
  }
}
</script>
