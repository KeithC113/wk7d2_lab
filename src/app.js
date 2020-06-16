import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=>{
  new Vue({
    el: "#app",
    data: {
      countryURL: null,
      allCountries: [],
      selectedCountry: null
    },
    mounted(){
      this.fetchCountry();
    },
    computed: {
      calculateTotalPopulation: function(){
        return this.allCountries.reduce((runningTotal, country)=>{
          return runningTotal + country.population
        },0);
      }
    },
    methods: {
      fetchCountry: function(){
        const request = fetch ("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.allCountries = data)
        }
      }
    })
  })
