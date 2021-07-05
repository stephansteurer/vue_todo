<template>
  <div>
    <h1>Dashboard - {{ appname }}</h1>
    <iirdsPackageList />
  </div>
</template>

<script>
import iirdsPackageList from '@/views/iirdsPackageList'
export default {
  data () {
    return {
      appname: 'FluidTopics Connector'
    }
  },
  components: {
    iirdsPackageList
  }
}
</script>

<style></style>
