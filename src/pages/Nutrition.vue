<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
           <h1 style="align-content: centre;">Nutrition</h1>
           <p>Please select below wether you wish to view recipes or food blogs.</p>
          <v-tabs v-model="tab" grow>
            <v-tab>All</v-tab>
            <v-tab>Food blogs</v-tab>
            <v-tab>Recipes</v-tab>
          </v-tabs>
          <v-row class="justify-space-around">
            <v-card
              v-for="edge in nutritions" :key="edge.node.id"
              max-width="300"
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
                  color="orange"
                  text
                  @click="$router.push(`/nutritions/${edge.node.id}`)"
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
    nutritions: allNutrition {
      edges {
        node {
          id,
          title,
          description,
          duration,
          thumbnail,
          type
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Nutrition',
    pageDescription: 'Test abc'
  },

  data() {
    return {
      tab: 0,
      nutritions: []
    }
  },
  mounted() {
    this.nutritions = this.$page.nutritions.edges
  },
  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllNutritions()
      } else {
        this.showNutritionByType(val)
      }
    }
  },
  methods: {
    showAllNutritions() {
      this.nutritions = this.$page.nutritions.edges
    },
    showNutritionByType(val) {
      this.nutritions = this.$page.nutritions.edges.filter((edge) => {
        return edge.node.type === val
      })
    }
  }
}

</script>
