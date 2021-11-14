<template>
<v-app
    id="mainPage"
>
  <v-container>

        <v-row
            align="center"
            justify="center"
            id="rowMargin"

        >
          <v-col
              class="text-center mt-10"
              cols="12"
          >

            <vue-typer class="display-3 vue-typer .custom.char.typed"
                       :text='["안녕하세요.","정연상의", "포트폴리오 입니다."]'
                       :repeat='Infinity'
                       initial-action='typing'
                       :pre-type-delay='100'
                       :type-delay='150'
                       :pre-erase-delay='1500'
                       :erase-delay='150'
                       erase-style='backspace'
                       :erase-on-complete='false'
                       caret-animation='blink'
            ></vue-typer>
              <br>
            <v-btn
                class="mt-7"
                text
                color="white"
                @click="goAbout()"
            >
              살펴보기
            </v-btn>
          </v-col>
        </v-row>
  </v-container>

</v-app>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
data:()=>({

}),
  components:{
    VueperSlide,
    VueperSlides
  },
  methods:{
  goAbout(){
    this.$router.push("/about").catch(()=>{});
  }
  }
}
</script>

<style>
#mainPage {
  background: url("../../assets/keyboard.jpg") no-repeat center;
  background-size: cover;
  font-family: "Open Sans",serif
}
#rowMargin{
  font-family: 'Montserrat',sans-serif;
  font-weight: bold;
  margin-top: 400px;
}
.vue-typer .custom.char.typed {
  color: white;
  font-family: 'Montserrat',sans-serif;
  font-weight: bold;
}

</style>