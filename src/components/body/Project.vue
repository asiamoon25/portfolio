<template>
  <v-main id="projectPage" class="mt-5">
    <v-row justify="center">
      <v-col cols="1">
        <v-btn
          text
          link
          to="/personal"
          class="font-weight-black"
        >
          PERSONAL
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn
            text
            link
            to="/company"
            class="font-weight-black"
        >
          COMPANY
        </v-btn>
      </v-col>
    </v-row>
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
  </v-main>
</template>
<script>
export default{
  name:'PortfolioComponent',
  data:()=>({

  })
}
</script>
<style>
#projectPage{
  font-family: "Montserrat",sans-serif
}
</style>