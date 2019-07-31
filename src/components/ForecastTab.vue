<template>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm6 md6 lg6>
          <v-tabs grow >
            <v-tab @click="setTabCurrent(true)">One day Forecast</v-tab>
            <v-tab @click="setTabCurrent(false)">Weekly Forecast</v-tab>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'ForecastTab',
  methods: {
    setTabCurrent (payload) {
      this.$store.commit('setTabFlag', payload)
    }
  }
}
</script>
