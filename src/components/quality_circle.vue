<template>
    <v-app>
      <toolbar></toolbar>
      <v-layout mt-5></v-layout>
      <!-- <v-parallax src="http://skasc.ac.in/Images/slide3.gif">
        
      </v-parallax> -->
      <!-- <toolbar :tool_name="title"></toolbar>
         <v-layout mt-5></v-layout>
                 <v-layout align-start mt-5 mb-5>
          <v-card height="500" min-width="380" style="overflow:hidden;overflow-y:scroll;" >
    <v-item-group
      v-model="window"
      class="shrink mr-6 "
      mandatory
      tag="v-flex"
    >
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> 24x7 CONNECTED CLASSROOMS 
                </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon>LIBRARY 
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> HALL OF RESIDENCE
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> AUDITORIUM AND SEMINAR HALLS
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> FITNESS CENTER
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> TRANSPORT
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> FOOD AND AMENITY MALL
        </div>
      </v-item>
        <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
         <v-icon right class="blue--text">chevron_right</v-icon> YOGA CENTER
        </div>
      </v-item>
    </v-item-group></v-card>
    <v-flex>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center mt-2" style="color:blue">24x7 Connected Classrooms</h4></v-card-text>
            <v-card-media class="text-xs-center "><img src="http://skct.edu.in/img/scl/24x7.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
             The internet , the most powerful tool in the 21st century acts as a hub for learning 24*7 ! Our institution stands out from the crowd because of all the creative ideas which has been imposed on learning. We achieve so much more 
            , at unmatched scale with software and interactive learning. Smart classes are nothing but Smart Boards ,the evolution of interactive learning , that operates as part of a system that which enables effective and intellectual insight .
            The smart board technology ensures accessible learning along with give-and-take intelligence. The lectures given are chronicled and sent via mail to students instantly to replenish the knowldge about that particular subject.  </v-flex>
            </v-card-text>
          </v-card>
        </v-window-item>
         <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Library</h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/lib.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
             The fully computerized library is well equipped with modern facilities and access to resources like books, printed and electronic journals, CD-ROMs and on-line database. The Open Access System followed in the digital library provides information 
             services and access to print and e-resources, audio video cassettes, project reports etc. and journals. </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
         <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Hall of Residence </h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/hostel.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
             The students’ hostel with two distinct sections for boys and girls students can accommodate more than students. Hostels are provided with rooms on a bi /triple sharing basis. Hygienic dining, washrooms, lobby, terrace, etc. are provided separately for men and women’s hostels.
             </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
          <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Auditorium and Seminar Halls</h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/VANKATRAM%20HALL.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
            Vankataram Hall is a world class air-conditioned auditorium with a seating capacity of 3500. The hall mark of this structure is its interior design and an excellent stage to showcase the talents of the students.
             </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
          <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Fitness Center </h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/FITNESS%20CENTRE%20-%201.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
A world-class extravagant Gymnasium, separately for men / women is designed scientifically to encourage the Fitness seekers with the sophisticated equipment to incite relaxation par excellence for campus residents. 
             </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
          <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">TRANSPORT</h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/transport.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
We are providing college bus service from various prominent locations. 21 Busses with a seating capacity of 60 are available for the Satff and Students. 12 buses ply in and around Coimbatore by covering macimum areas including Pollachi, Metupalayam and Tirupur.             </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
          <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Food and Amenity Mall</h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/AROMA%202.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
College Cafeteria takes a meticulous care in providing hygienic and nutritive food. It helps the students to continue their academic discussions, career plans in the cafeteria setting themselves free from fatigue.             </v-flex>
             </v-card-text>
          </v-card>
        </v-window-item>
         <v-window-item>
          <v-card flat height="500" style="overflow:hidden; overflow-y:scroll;">
            <v-card-text><h4 class="text-xs-center" style="color:blue">Yoga Centre</h4></v-card-text>
            <v-card-media class="text-xs-center mt-3"><img src="http://skct.edu.in/img/scl/8.jpg" height="250" style="border-radius:8px"></v-card-media>
            <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
The original context of yoga was spiritual development practices to train the body and mind to self observe and become aware of their own nature. The purposes of yoga were to cultivate discernment, awareness, self-regulation and higher 
consciousness in the individual. As the split occurring between those seeking physical development versus those seeking spiritual development has widened, the lack of awareness and attention to inner experience has disconnected the practitioner from his body.           
        </v-flex>
         </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-flex>  
  </v-layout>
 -->


  <!-- something -->

  <v-flex mt-3>
          <h2><strong>QUALITY CIRCLE</strong></h2>
        </v-flex>
        <v-layout align-start my-4>
          <v-card height="500" min-width="290" max-width="290" style="overflow:hidden;overflow-y:scroll;" >
    <v-item-group
      v-model="window"
      class="shrink mr-6 "
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="(item,i) in items" :key="i"
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" >
          <v-layout style="padding-top:12px;padding-bottom:12px;padding-left:9px;padding-right:7px;font-weight:bold;">
          <v-flex ms2 md2>
            <v-icon right color="blue">chevron_right</v-icon>
          </v-flex>
          <v-flex ms8 xd8>
          <span style="text-transform: uppercase;">{{ item.fac_name }}</span>
          </v-flex>
          <v-flex ms2 xd2></v-flex>
          </v-layout>
        </div>
      </v-item>
        </v-item-group>
        </v-card>
        <!-- side windows -->
        <v-flex>
          <v-window
            v-model="window"
            class="elevation-1"
            horizontal
          >
            <v-window-item  v-for="(item,i) in items" :key="i">
              <v-card flat height="500" style="overflow:hidden;overflow-y:scroll;">
                <v-card-text><h4 class="text-xs-center" style="color:blue">{{ item.fac_name }}</h4></v-card-text>
                <div class="text-xs-center mt-1"><img :src="item.fac_img" height="230" style="border-radius:5px"></div>
                <div class="text-xs-center my-1" style="text-transform:uppercase"><b>{{ item.fac_thought }}</b></div>
                <v-card-text style="font-size:17px;text-align:justify"><v-flex px-2>
                  {{item.fac_desc}}</v-flex>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>  
      </v-layout>  
      <allfooter></allfooter>
    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter'

export default {
    components:{
        toolbar,allfooter
    },
    data(){
        return{
            window: 0,
            
            items:[
              
              ],
        }}

}
</script>

<style scoped>
 .img{
     height: 215px;
 }
 .img1{
     height: 240px;
 }
h2 {
	color: #000;
  font-family: 'Roboto Slab', serif;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
h2::after {
	content: "";
	width: 100px;
  font-family: 'Roboto Slab', serif;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: #1c47e3;
	left: 0;
	right: 0;
  padding-bottom: 0;
	bottom: -10px;
}
 p{
     font-family: 'Roboto', serif;
 }
 .my:hover{
  background-color: #ddd;
}
.my:active{
  background-color: #1c47e3;
  color: white;
}
</style>
