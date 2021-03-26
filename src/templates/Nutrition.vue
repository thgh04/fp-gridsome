<template>
  <Layout>
    <v-container>
        <v-row>
            <v-col
            :cols="14"
            sm="4"
            >
            <v-card>
                <v-img
                        :src="`http://localhost:1337${$page.nutrition.thumbnail}`"
                        contain
                        >
                </v-img>
            </v-card>
        </v-col>
            <v-col>
            <v-card
                class="pa-md-4 mx-lg-auto"
                cols="12"
                sm="6"
                >
                <h1>{{ $page.nutrition.title }}</h1>
                <p style="font-weight: bold;">Duration: {{ $page.nutrition.duration }} minutes</p>
                 <vue-simple-markdown :source="`${ $page.nutrition.description }`"></vue-simple-markdown>

                <v-btn
                    icon
                    color="red"
                    x-large
                    @click="$router.push(`/nutrition/`)"
                >
                <v-icon>mdi-close-box</v-icon>
                </v-btn>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  nutrition(id: $id) {
        id
        title
        description
        duration
        thumbnail
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.nutrition.title
        }
    }
}
</script>

<style>

</style>