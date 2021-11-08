<template>
  <v-app-bar
      id="header"
      app
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
        to="/resume"
    >
        RESUME
    </v-btn>
    <v-btn
        text
        v-if="!show"
        link
        to="/portfolio"
    >
        PORTFOLIO
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name : 'DefaultHeader',
    data:()=>({


    }),
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
#header{
 background-color: #ffffff;

}
</style>