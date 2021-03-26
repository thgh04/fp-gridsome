<template>
  <v-app>
     <v-card>
    <v-app-bar
      app
      absolute
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fitpoise</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--white"
        >
          <v-list-item @click="$router.push(`/`)">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push(`/workouts/`)">
            <v-list-item-icon>
              <v-icon>mdi-football</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Workouts</v-list-item-title>
          </v-list-item>

           <v-list-item @click="$router.push(`/nutrition/`)">
            <v-list-item-icon>
              <v-icon>mdi-food-apple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Nutrition</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <v-parallax
    dark
    src="https://i.ibb.co/FKNx1TL/hero.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          {{$static.metadata.siteName}}
        </h1>
        <h4 class="subheading">
          {{$static.metadata.siteDescription}}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>


    <v-main>
      <slot/>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        Copyright {{ new Date().getFullYear() }} — <strong>{{ $static.metadata.siteName }}</strong> (All rights reserved)
      </v-col>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>


<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>