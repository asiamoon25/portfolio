<template>
<v-app
    id="mainPage"
>
  <!-- 전체화면 방법 없을까? -->
  <v-container>

        <v-row
            align="center"
            justify="center"
            id="rowMargin"
        >
          <v-col
              class="text-center"
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
          </v-col>
        </v-row>
  </v-container>

</v-app>

</template>

<script>
export default {
data:()=>({

}),
  methods:{
  goAbout(){
    this.$router.push("/about").catch(()=>{});
  }
  }
}
</script>

<style>
#mainPage {
  background: url("../../assets/ImNan.jpg") center;
}
#rowMargin{
  margin-top: 400px;
}
.vue-typer .custom.char.typed {
  color: white;
}

</style>