<template>
  <v-app>
    <v-app-bar
        id="header"
        app
        v-if="!show"
    >
      <v-app-bar-nav-icon
          v-if="show"

      />
      <v-btn
          text
          v-if="!show"
          @click="goToMain()"
      >
        HOME
      </v-btn>
      <v-btn
          text
          v-if="!show"
          link
          to="/about"
      >
        ABOUT
      </v-btn>
      <v-btn
          text
          v-if="!show"
          link
          to="/project"
      >
        PROJECT
      </v-btn>

    </v-app-bar>
    <vue-page-transition name="fade-in-right">
        <router-view />
    </vue-page-transition>

  </v-app>
</template>

<script>
export default {
    name : 'DefaultBody',
  computed:{
    show(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
    }
  },
  methods:{
    goToMain(){
      this.$router.push("/").catch(()=>{});
    }
  }
}
</script>

<style>

</style>