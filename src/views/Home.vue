<template>
  <div>
    <SearchBar />
    <ForecastTab />
    <Weather />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import ForecastTab from '../components/ForecastTab'
import Weather from '../components/Weather'

export default {
  components: {
    SearchBar,
    ForecastTab,
    Weather
  }
}
</script>
