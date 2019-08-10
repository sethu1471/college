<template>
    <v-app>
        <toolbar  :tool_name="title" :show="false"></toolbar>
        
        <div class="hidden-sm-and-down">
         <v-container >
             <v-layout mt-5 row>
             <v-flex  xs6 md7> 
                 <h4 style="color:blue;font-size:30px">About SKCT</h4>
                 <p align="justify" class="sk1">Sri Krishna College of Technology (formerly V. L. B. Janakiammal College of Engineering and Technology) was instituted in the year 1985 by the V.L.B. Trust, a charitable organization founded by the great philanthropist and industrialist, 
                     late Sri.V.L.BalaKrishna Naidu. Late Sri.S.Vankatram, over two and half decades of tireless effort and guidance brought the college to its present preeminent position. The college is approved by AICTE,New Delhi and the UG programmes are accredited by NBA. All the courses are affiliated to Anna University,Chennai and Coimbatore. Housed in an area of 51.39 acres,the college campus is located at Kovaipudur situated on the eastern laps of the Western Ghats, 10 Km from Coimbatore city.</p>
              <h4 style="color:blue;font-size:30px">Vision</h4>
                 <p align="justify" class="sk1">Sri Krishna College of Technology aspires to be recognized as one of the pioneers in imparting world class technical education through Technology enabled Innovative Teaching Learning Processes with a focus on research activities to cater the societal needs.</p>
            <h4 style="color:blue;font-size:30px">Mission</h4>
            <p align="justify" class="sk1">1. To be recognized as centre of excellence in science, engineering and technology through effective teaching and learning processes by providing a conducive learning environment </p>
            <p align="justify" class="sk1">2. To foster research and development with creative and entrepreneurial skills by means of innovative applications of technology</p>
             <p align="justify" class="sk1">3. Accomplish expectations of the society and industry by nurturing the students to be competent professionals with integrity</p>
             </v-flex>
             <v-flex xs6 pl-4 pt-4 md5>
                <div data-aos="zoom-in" data-aos-duration="1100">
                  <v-carousel height="250px" cycle :show-arrows="false" hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
                </div>
             </v-flex>
             </v-layout>
         </v-container>
        </div>
         <div class="hidden-md-and-up">
         <v-container>
               <v-flex>
                  <div data-aos="zoom-in" data-aos-duration="1100">
                  <v-carousel height="250px" class="my-3" cycle hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
                  </div>
             </v-flex>
             <v-flex >
                 <h4 style="color:blue;font-size:30px">About SKCT</h4>
                 <p align="justify" class="sk1">Sri Krishna College of Technology (formerly V. L. B. Janakiammal College of Engineering and Technology) was instituted in the year 1985 by the V.L.B. Trust, a charitable organization founded by the great philanthropist and industrialist, 
                     late Sri.V.L.BalaKrishna Naidu. Late Sri.S.Vankatram, over two and half decades of tireless effort and guidance brought the college to its present preeminent position. The college is approved by AICTE,New Delhi and the UG programmes are accredited by NBA. All the courses are affiliated to Anna University,Chennai and Coimbatore. Housed in an area of 51.39 acres,the college campus is located at Kovaipudur situated on the eastern laps of the Western Ghats, 10 Km from Coimbatore city.</p>
              <h4 style="color:blue;font-size:30px">Vision</h4>
                 <p align="justify" class="sk1">Sri Krishna College of Technology aspires to be recognized as one of the pioneers in imparting world class technical education through Technology enabled Innovative Teaching Learning Processes with a focus on research activities to cater the societal needs.</p>
                  <h4 style="color:blue;font-size:30px">Mission</h4>
            <p align="justify" class="sk1">1. To be recognized as centre of excellence in science, engineering and technology through effective teaching and learning processes by providing a conducive learning environment </p>
            <p align="justify" class="sk1">2. To foster research and development with creative and entrepreneurial skills by means of innovative applications of technology</p>
             <p align="justify" class="sk1">3. Accomplish expectations of the society and industry by nurturing the students to be competent professionals with integrity</p>
             </v-flex>
         </v-container>
        </div>

         <allfooter></allfooter>
    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter'
import img1 from '@/assets/overview/img1.jpg'
import img2 from '@/assets/overview/img2.jpg'
import img3 from '@/assets/overview/img3.jpg'
import img4 from '@/assets/overview/img4.jpg'

export default {
    components:{
        toolbar,allfooter
    },
    data () {
      return {
        items: [
          {
            src: img1,
          },
          {
            src: img2,
          },
          {
            src: img3,
          },
          {
            src: img4,
          },
        ],
      }
    },

}
</script>

<style scoped>
  .sk1{
    transition: 1s ease-in-out;
    animation: sk;
    animation-duration: 1s;
    animation-delay: 0ms;
  }

  @keyframes sk {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.50;
    }
    100%{
      opacity: 1;
    }
    
  }
</style>
