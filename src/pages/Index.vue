<template>
  <Layout>
  <v-row>
    <v-col class="d-flex child-flex" cols="12">
      <v-btn color="#9c88ff" style="height: 400px;" href="/workouts"><strong style="color: white; font-size: 22px">Workouts</strong></v-btn>
      <v-btn color="#e84118" style="height: 400px;" href="/nutrition"><strong style="color: white; font-size: 22px">Nutrition</strong></v-btn>
    </v-col>
  </v-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
    pageDescription: 'Fitpoise - Home'
  }
}
</script>

<style>

</style>
