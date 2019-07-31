<template>
  <v-container fluid v-if=" weather != null ">
        <p class="text-center headline">{{weather.location.name}}, {{weather.location.country}}</p>
    <v-layout v-if="checkWeekTab"
    row justify-center >
      <v-flex xs12 sm6 md6 >
        <v-card  max-width="260px" class="mx-auto">
          <v-card-text>
            <v-layout>
              <v-img height="75" width="75" :src="weather.current.condition.icon" contain></v-img>
            </v-layout>
            <p class=" title text-center">{{weather.current.condition.text}}</p>
            <p class="subtitle-1 text-center my-0">Temp: {{weather.current.temp_c}}°c</p>
            <p class="subtitle-1 text-center my-0">Humidity: {{weather.current.humidity}}%</p>
            <p class="subtitle-1 text-center my-0">Wind speed: {{weather.current.wind_kph}}kph</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else
    justify-center
     row wrap
     >
         <v-flex
            xs12 sm6 md3 lg3 xl2
            class="mb-5"
            v-for="(forecastday, _) in weather.forecast.forecastday" :key="_" >
        <v-card  max-width="260px" height="275px" class="mx-auto">
          <v-card-text>
            <v-layout>
              <v-img height="75" width="75" :src="forecastday.day.condition.icon" contain></v-img>
            </v-layout>
            <p class=" title text-center">{{forecastday.day.condition.text}}</p>
            <p class="subtitle-1 text-center my-0">Date: {{forecastday.date}}</p>
            <p class="subtitle-1 text-center my-0">Avg Temp: {{forecastday.day.avgtemp_c}}°c</p>
            <p class="subtitle-1 text-center my-0">Wind speed: {{forecastday.day.maxwind_kph}}kph</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Weather',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('searchLocation', 'London')
    this.$store.commit('setTabFlag', true)
  },
  computed: {
    ...mapState(['checkWeekTab', 'weather'])
  }
}
</script>
