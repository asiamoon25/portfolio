<template>
  <v-main class="fill-height mt-16" id="about">
    <v-row class="justify-center">
      <v-col cols="4"><!-- 왼쪽화면 부분 -->
        <v-row justify="center"><!-- 이미지 자리 -->
          <v-col cols="4">
            <img style="width: 380px; height: 500px;" src="../../assets/ImNan.jpg" alt="profile"/>
            <div><v-icon class="mb-2 mr-1">mdi-email</v-icon><span>wjddustkd45@gmail.com</span></div>
            <div><v-icon class="mb-2 mr-1">mdi-cellphone</v-icon><span>010-8804-1072</span></div>
          </v-col>
        </v-row><!--이미지 자리 끝 -->
      </v-col><!--왼쪽 화면 부분 끝 -->
      <v-col cols="5"><!-- 화면중 오른쪽 절반 부분 -->
        <v-row class="font-weight-black" justify="center"><!-- 이름 성별 나이 부분 -->
          <v-col cols="4" class="text-h5">
            Name
          </v-col>
          <v-col cols="4" class="text-h5">
            BIRTH
          </v-col>
          <v-col cols="4" class="text-h5">
            SEX
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-3 name1">
          <v-col cols="4">
            JEONG YEONSANG
          </v-col/>
          <v-col cols="4">
            1997.08.20
          </v-col>
          <v-col cols="4">
              MALE
          </v-col>
        </v-row><!--이름 성격 부분 끝 -->
        <hr/>
        <v-row class="mt-5"><!--학력 캐리어 부분 시작 -->
          <v-col><!-- 학력! -->
            <div>
              <v-icon class="mb-3 font-weight-black" size="30">
                mdi-school
              </v-icon>
              <span class="text-h5">
                EDUCATION
              </span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>2013.03<span class="ml-3">경복고등학교 입학</span></p>
            <p>2016.02<span class="ml-3">경복고등학교 졸업</span></p>
            <p>2018.04<span class="ml-3">芝浦工業大学 入学</span></p>
            <p>2019.06<span class="ml-3">芝浦工業大学 １年修了</span></p>
          </v-col>
        </v-row><!--학력 끝 -->
        <v-row class="mt-4"><!--캐리어 부분 -->
          <v-col>
            <div>
              <v-icon size="30" class="mb-3">mdi-bag-checked</v-icon>
              <span class="text-h5">CAREER</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <p>2021.09<span class="ml-3">코리아IT아카데미 정보처리산업기사 과정 수료</span></p>
            <p>2021.09<span class="ml-3">(주)비즈톡 입사</span></p>
          </v-col>
        </v-row><!-- 캐리어 끝-->
        <v-row><!-- 자격증 등 그외 부분 시작 -->
          <v-col>
            <div>
              <v-icon class="mb-2 font-weight-black" size="30">mdi-certificate</v-icon>
              <span class="text-h5">
              CERTIFICATE
            </span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>2017.07<span class="ml-3">JLPT N2 합격</span></p>
          </v-col>
        </v-row><!-- 자격증 등 그 외 부분 끝 -->
        <v-row><!-- 스킬 부분 -->
          <v-col>
            <div>
              <v-icon class="mb-2 font-weight-black" size="30">mdi-wrench-outline</v-icon>
              <span class="text-h5">
              SKILLS
            </span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/java.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/spring.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/angular.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/vue.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/javascript.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/html.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/oraclelogo.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/mysqllogo.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img src="@/assets/githublogo.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card>
              <v-img  src="@/assets/mybatislogo.png"></v-img>
            </v-card>
          </v-col>
        </v-row><!-- 스킬 끝 -->
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default{
  name:'AboutComponent',
  data:()=>({
  }),

}

</script>
<style>
#about{
  font-family: 'Montserrat',sans-serif;
  font-weight: bold;
}
.name1{

}

</style>


<!--OPEN-SOURCE-GPLV3-LICENSE-->