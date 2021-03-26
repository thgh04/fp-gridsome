<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
           <h1 style="align-content: centre;">Workouts</h1>
           <p>Please select below wether you wish to view workouts or exercises.</p>
          <v-tabs v-model="tab" grow>
            <v-tab>All</v-tab>
            <v-tab>Full Workouts</v-tab>
            <v-tab>Exercises</v-tab>
          </v-tabs>
          <v-row class="justify-space-around">
            <v-card
              v-for="edge in workouts" :key="edge.node.id"
              max-
width="300"
              class="mt-5"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="`http://localhost:1337${edge.node.thumbnail}`"
              >
                <v-card-title>{{ edge.node.title }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Duration: {{ edge.node.duration }} minutes
              </v-card-subtitle>

            <v-card-actions>
                 <v-btn
                    @click="$router.push(`/workouts/${edge.node.id}`)"
                    color="orange"
                    text
                  >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    
  </Layout>
</template>

<page-query>
  query {
    workouts: allWorkout {
      edges {
        node {
          id,
          title,
          description,
          duration,
          thumbnail,
          image,
          category
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Workouts'
  },
  data() {
    return {
      tab: 0,
      workouts: []
    }
  },
  mounted() {
    this.workouts = this.$page.workouts.edges
  },
  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllWorkouts()
      } else {
        this.showWorkoutByType(val)
      }
    }
  },
  methods: {
    showAllWorkouts() {
      this.workouts = this.$page.workouts.edges
    },
    showWorkoutByType(val) {
      this.workouts = this.$page.workouts.edges.filter((edge) => {
        return edge.node.category === val
      })
    }
  }
}
</script>