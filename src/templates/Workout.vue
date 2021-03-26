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
                        :src="`http://localhost:1337${$page.workout.image}`"
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
                <h1>{{ $page.workout.title }}</h1>
                <p style="font-weight: bold;">Duration: {{ $page.workout.duration }} minutes</p>
                <vue-simple-markdown :source="`${ $page.workout.description }`"></vue-simple-markdown>
                <v-dialog
                    transition="dialog-top-transition"
                    max-width="600"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                    >Watch Video</v-btn>
                    </template>
                    <template v-slot:default="dialog">
                        <v-card>
                            <v-toolbar
                            color="primary"
                            dark
                            >{{ $page.workout.title }}</v-toolbar>
                                <youtube :video-id="`${$page.workout.videourl}`" :player-vars="fitParent"/>
                            <v-card-actions class="justify-end">
                            <v-btn
                                text
                                @click="dialog.value = false"
                            >Close</v-btn>
                            </v-card-actions>
                        </v-card>
                        </template>
                </v-dialog>

                 <v-btn
                    icon
                    color="red"
                    x-large
                    @click="$router.push(`/workouts/`)">
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
  workout(id: $id) {
        id
        title
        description
        duration
        image
        videourl
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.workout.title
        }
    }
}
</script>

<style>

</style>