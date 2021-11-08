<template>
<v-main
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
            <h1
                class="text-h4 mb-4 color"
            >
              안녕하세요.
            </h1>
            <p class="color">
              백엔드 개발자를 희망하는 정연상입니다.
            </p>
            <v-btn
                text color="white"
                @click="goAbout()"
            >
              살펴보기
            </v-btn>
          </v-col>
        </v-row>
  </v-container>

</v-main>

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
#mainPage{
    background: url("../../assets/cafeCamera.jpeg") no-repeat center;
}
.color{
  font-weight: bolder;
  color: white;
}
#rowMargin{
  margin-top: 500px;
}

</style>