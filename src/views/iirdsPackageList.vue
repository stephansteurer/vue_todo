<template>
  <div>
    <h2>Aktuell iiRDS-Pakete</h2>
    <div v-for="(iirdsPackage, index) in activeIirdsPackages" :key="index">
      {{ iirdsPackage.name }}
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('fetchPackages')
  },
  computed: {
    activeIirdsPackages () {
      return this.$store.getters.activeIirdsPackages
    }
  }
}
</script>

<style>
</style>
