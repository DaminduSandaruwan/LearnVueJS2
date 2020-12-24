<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
    return {
      ninjas:['Damindu','Sandaruwan','Bandara']
    }
  },
}
</script>

<style scoped>
h1{
  color: green;
}
</style>
