<template>
<v-app>
<div>
  <!-- phase 1 -->
  <toolbar :show="show1"></toolbar>
  <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
  <!-- phase 2 -->
    <div class="mt-5">
        <v-img :src="first_image" height="280" >
          <v-layout
            column
            align-center
            justify-center
            class="white--text pt-4">
          <div data-aos="zoom-out" data-aos-duration="5000" class="text-xs-center">
            <img src="@/assets/cn2.png"  height="150">
            <h1 class="heading mb-2 mx-1 text-xs-center" style="font-family: 'Roboto Slab', serif;"><strong>DEPARTMENT OF {{ dpt_name  }}</strong></h1>
            <div class="subheading mb-3 text-xs-center" style="font-family: 'Roboto Slab', serif;">{{ dpt_certificate }}</div>
          </div>
          </v-layout>
        </v-img>
       </div>
       <!-- {{  this.urlname+this.$route.path+"/" }} -->
      <!-- phase 3 -->
     <section>
        <v-layout
          column
          wrap
          align-center>
           <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start>
                <v-flex xs12 md8>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class=" text-xs-center" ><h2><strong> About Department</strong></h2></div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                      <p style="font-size:17px;text-align:justify;font-family: 'Roboto', sans-serif;">
                         {{ about_dpt }}
                      </p>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-flex>
         <div ><h2><strong
         > UPCOMING EVENT</strong></h2></div>
      </v-flex>
      <!--phase 3 events -->
      <v-card class="elevation-0 transparent ">    
      <div class="swiper-inner">
      <!-- swiper -->
      <div style="padding-top:20px;"><swiper :options="swiperOption">
        <div class="card swiper-slide c-ach" v-for="(item,i) in ev_items" :key="i" style="width:250px !important;" >
         <v-img
          :src="item.image"
          height="140px"
        ></v-img>
          <div class="card-body">
            <h5 class="card-title" style="font-family:">{{item.name}}</h5>
            <p class="card-text text-muted" style="font-family:">{{item.date}}</p>
            <v-btn class="text-xs-center"  @click="$router.push({name:'event_page',params:{pk:item.pk}})" flat style="color:blue"><v-icon class="pr-2" >launch</v-icon>More</v-btn>
          </div>
        </div>
      </swiper></div>
      </div>
  </v-card>
   </v-card>
     </v-flex>
     </v-layout>
      </v-container>
          </v-flex>
             <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start justify-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent" >
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2" style="color:#3D5AFE">touch_app</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center" ><h3><strong> VISION</strong></h3></div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                      <p style="font-size:17px;text-align:justify;font-family: 'Roboto', sans-serif;">
                        {{ dpt_vision }}
                      </p>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent" style="overflow:hidden;" >
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2" style="color:#3D5AFE">ondemand_video</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><h3><strong>VIDEO</strong></h3></div>
                    </v-card-title>
                    <v-card-text>
                      <v-flex text-xs-center>
                      <iframe width="320px" height="170px" :src="video_url" 
                      frameborder="0" allow="accelerometer;encrypted-media; gyroscope;" 
                      allowfullscreen></iframe>
                      </v-flex>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent" >
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2" style="color:#3D5AFE">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><h3><strong> MISSION</strong></h3></div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout row wrap>
                        <p style="font-size:17px;text-align:justify;font-family: 'Roboto', sans-serif;">
                         <ol >
                           <li  v-for="i in dpt_mission" :key="i">{{ i }}</li>
                         </ol>
                        </p> 
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section> 
      <!-- phase 4 -->
    <v-flex text-xs-center>
    <h3 class="mt-3" style=" font-family: 'Roboto Slab', serif;"><b>HOD'S DESK</b></h3>
    </v-flex>
    <div class="mt-3">
      <section>
        <div style="background-color:#3D5AFE "  height="300"> 
        <section>
            <v-layout
              column
              wrap
              align-center
            >
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 md8>
                      <v-card class="elevation-0 transparent">
                        <v-card-text>
                          <v-layout>
                          <p style="font-size:22px;text-align:center;color:white;font-family: 'Roboto', sans-serif;">
                            {{ hod_thought }}
                          </p>
                          </v-layout>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="text-xs-center white--text"><b style="font-family: 'Roboto Slab', serif;font-size:22px;text-align:center;color:white;"> {{ hod_thought_name }}</b></div>
                        </v-card-title>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                              <v-avatar
                              :tile="tile"
                              size="220"
                              class="ml-5"
                              >
                            <img :src="hod_thought_image" >
                          </v-avatar>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              </v-layout>
              </section>  
            </div>
          </section>
        </div>
   <!-- phase 5 -->
<v-container grid-list-xl>
  <v-layout row wrap align-center>
    <v-flex xs12 md12>
	<div class="row">
		<div class="col-sm-12">
			<h2 class="non">What <b>our Alumini</b> are saying</h2>
   	<v-card class="mx-1 mt-0">    
      <div class="swiper-inner">
      <div style="padding-top:20px;">
        <swiper :options="swiperOption2">
        <div class="swiper-slide c-ach"  v-for="(i,j) in aluminis" :key="j" >
          <v-card  class="elevation-0" style="overflow:hidden">
            <v-flex text-xs-center>
            <v-avatar
            :tile="tile"
            size="140">
          <img :src="i.img">
        </v-avatar>
        <div class="text-xs-center mx-3 my-2">
    <h6 style="font-family: 'Roboto', sans-serif;">{{ i.thought }}</h6>
    <h4 class=" mt-1" style="font-family: 'Roboto Slab', serif;font-size:15px"><b style="color:blue">{{ i.name }}</b><br/>Alumini of {{ dpt_name }}</h4>
  </div>    
  </v-flex>   
  </v-card>
</div>
 </swiper>
 </div>
  </div>
  </v-card>
  </div>
	</div>
  </v-flex>
  </v-layout>
  </v-container>
  <!-- phase 6 -->
 <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
 <!-- end of all phase -->
</div> 
</v-app>
</template>

<script>

import toolbar from './toolbar.vue'
import fv from './fv'
import deptnav from './deptnav.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import footnav from './footnav.vue'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from 'axios';
export default {
    components: {
     toolbar,footnav,fv,swiper,swiperSlide,deptnav
      },
   data(){
       return{
           route:this.$route.path.split('/'),
           show1: false,
           ev_items:[{
           pk:"",
           image:'',
           date:'',
           desc:'',
           name:''
         }],
         dpt_name: '',
         dpt_certificate: "",
         first_image: '',
         about_dpt: "",
         dpt_mission: [],
         video_url:"",
         dpt_vision: "",
         hod_thought: "",
         hod_thought_name: "",
         hod_thought_image: "",
         fv_name: "",
         fv_email:"",
         fv_no: "",
         fv_dept: "", 
         aluminis:[
           {
            img: "",
            name: "",
            thought: ""
            }],
         swiperOption:{
           grapCursor:true,
           centeredSlides: true,
           slidesPerView: 'auto',
           autoplay: {
             delay: 2000,
             disableOnInteraction: false,
           }},
             swiperOption2:{
           grapCursor:true,
           centeredSlides: true,
           slidesPerView: 1,
           autoplay: {
             delay: 2000,
             disableOnInteraction: false,
           }},
           tile: false,
           value:0,
       }},
        watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
    //     mounted(){
    //   var currentUrl = this.$route;
    //     console.log(currentUrl);
    // },
    //       created: function(){

    //     var currentUrl = this.$route;

    //     console.log(currentUrl);

    //   }
//  mounted() {
//           var url = `http://192.168.43.94:8000`;
//           axios.get(`${url}/cse/home`).then((res)=>{
//               this.title = res.data.name;
//               this.fv_name = res.data.hod_name;
//               this.fv_email = res.data.hod_email;
//               this.fv_no = res.data.hod_num;
//               this.fv_dept = res.data.name,
//               this.dpt_name = res.data.name;
//               this.dpt_certificate = (res.data.having)?"(Accredited by NBA,New Delhi)":"";
//               this.about_dpt= res.data.about;
//               this.dpt_mission = res.data.mission;
//               this.dpt_vision = res.data.vision;
//               this.dpt_thought =res.data.thought;
//               this.dpt_thought_name = res.data.thought_author;
//               this.e1 = res.data.faculty_count;
//               this.e2 = res.data.student;
//               this.e3 = res.data.strength;
//               this.e4 = res.data.class_strength;
//               this.alumini_thought = res.data.alumni_quote;
//               this.alumini_name =  res.data.alumni_name;
//               this.first_image = `${url}${res.data.bg_img}`;
//               this.dpt_thought_image = `${url}${res.data.thought_photo}`;
//               this.alumini_image = `${url}${res.data.alumni_image}`;
//               var temp_list = [];
//               res.data.gallery.forEach(element => {
//                 temp_list.push({
//                   src: `${url}${element}`,
//                 });
//               });
//               this.items3 = temp_list;
//               var ev_list = [];
//               res.data.events.forEach(e => {
//                 console.log(e);
//                 ev_list.push({
//                   pk:e.pk,
//                   image:`${url}${e.image}`,
//                   date:e.date,
//                   desc:e.description,
//                   name:e.name
//                 });
//               });
//               var t_list = [];
//               res.data.aluminis.forEach((e)=>{
//                 t_list.push(
//                   {
//             img: `${url}${e.img}`,
//             name:e.name,
//             thought: e.thought,
//                   },
//                 );
//               });
//               this.aluminis = t_list;
//               this.ev_items = ev_list;
//               this.dpt_mission = res.data.mission.split("\r\n");
//           }).catch(e => {
//       console.log(e);
//     });
//     },  

   }
</script>

<style scoped>
html{
    scroll-behavior: smooth;
}

.br{
  border-radius: 5px;

}

.pro img {
  display: block;
  width:100%;
  height: 100%;
}
.pro{
  align-self: center;
  justify-self: center;
  display: block;
  overflow: hidden;
  max-width: 210px;
  max-height: 210px;
  border-radius: 50%;
}
.promob{
  overflow: hidden;
  height: 30%;
  border-radius: 50%;
}
.rdi{
  border-radius: 8px;
}
.rd{
  border-radius: 5px;
}

.hh{
  color: #000;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
  font-family: 'Roboto Slab', serif;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
.hh::after {
	content: "";
	width: 100px;
  font-family: 'Roboto Slab', serif;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: hsl(27, 93%, 44%);
	left: 0;
	right: 0;
  padding-bottom: 0;
	bottom: -10px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
/* .top{
 
  height:100%;
  position:relative;
  width:100%;
  
}


.top_3{
  padding-top:20px;
  padding-bottom:20px;
  font-family:'Alegreya', serif;
  text-decoration: underline;
  
  color:#000;
}
.top_4{
 
  height:100%;
  width:100%;
  background-attachment:fixed;
}

.top_8{
  display:inline-block;
}
.top_9{
  height:100%;
  width:90px;
}
.top_9_des{
  height:100%;
  width:130px;
}
.top_10_des{
  height:110px;
  width:130px;
  display:inline-block;
  padding-left:5px;
  padding-right:5px;
  padding-bottom:5px;
  padding-top:5px; 
}
.top_10{
  height:90px;
  width:90px;
  display:inline-block;
  padding-left:5px;
  padding-right:5px;
  padding-top:2px;
  padding-bottom:2px;
}
.top_11{
  height:100%;
  width:100%;
} */

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

.po{
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  padding-top: 8px;

}

.bp{
  font-size: 20px;
    font-family: 'Roboto', serif;
  color: white;
  padding-top: 8px;

}


.non {
	color: #000;
  font-family: 'Roboto Slab', serif;
	font-size: 26px;
	font-weight: 300;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 30px 0 70px;
}
.non::after {
	content: "";
  font-family: 'Roboto Slab', serif;
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 4px;
	border-radius: 1px;
	background: #1c47e3;
	left: 0;
	right: 0;
	bottom: -10px;
}
.cool_facts_area {
    position: relative;
    z-index: auto;
     background-color: #1c47e3;
    padding: 25px 0 25px 0;
}
.pro_cool{
  	background: url('https://png.pngtree.com/thumb_back/fh260/back_pic/00/01/54/555604115c64ab3.jpg');

}
.cool_facts_area:after {
    position: absolute;
    bottom: -100px;
    font-family: 'Roboto Slab', serif;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    content: ''
}


.counter-area {
    min-width: 100px;
      font-family: 'Roboto Slab', serif;
    -ms-flex-item-align: end;
    align-self: flex-end;
}

.counter-area > h3 {
    color: #ffffff;
    font-family: 'Roboto Slab', serif;
    font-size: 50px;
    margin-bottom: 0;
    line-height: 1;
}

.cool-facts-content > p {
    font-size: 24px;
    color: #ffffff;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 0;
}

.c-ach{
  margin: 10px;
}

.swiper-slide{
  width: 18rem;
}
</style>
