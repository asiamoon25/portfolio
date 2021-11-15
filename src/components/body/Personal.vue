<template>
    <v-main id="personalPage">
      <v-row justify="center">
        <v-col cols="3">
          <v-card>
            <v-img src="@/assets/CODEBOOK.png" @click="goToGit"/>
          </v-card>
        </v-col>
        <v-col cols="3">
          <p class="font-weight-bold text-h5">CODEBOOK</p>
          <p>2021.07~2021.08</p>
          <span class="font-weight-bold text-h6">
            개발자들이 서로 의견을 내고 배울 수 있는 커뮤니티 사이트
          </span>
          <a href="https://github.com/JunghoLim/CODEBOOK">https://github.com/JunghoLim/CODEBOOK</a>
          <v-row class="mt-3">
            <v-col cols="1">
              <v-card style="width: 30px; height: 30px;">
                <v-img src="@/assets/javamini.png" style="width: 30px;height: 30px;"></v-img>
              </v-card>
            </v-col>
            <v-col cols="1">
              <v-card style="width: 30px; height: 30px;">
                <v-img src="@/assets/springbootmini.png" style="width: 30px;height: 30px;"></v-img>
              </v-card>
            </v-col>
            <v-col cols="1">
              <v-card style="width: 30px; height: 30px;">
                <v-img src="@/assets/oraclemini.png" style="width: 30px;height: 30px;"></v-img>
              </v-card>
            </v-col>
            <v-col cols="1">
              <v-card style="width: 30px; height: 30px;">
                <v-img src="@/assets/SpringSecuritymini.png" style="width: 30px;height: 30px;"></v-img>
              </v-card>
            </v-col>
            <v-col cols="1">
              <v-card style="width: 30px; height: 30px;">
                <v-img src="@/assets/vuemini.png" style="width: 30px;height: 30px;"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
</template>
<script>
export default {
  methods:{
    goToGit(){
      location.href="https://github.com/JunghoLim/CODEBOOK";
    }
  }
}
</script>
<style>
#personalPage{
  font-family: "Montserrat",sans-serif;
}
</style>