<template>
<v-app>
    <div>
         <toolbar :tool_name="title" :show="false" :height="100" ></toolbar>
         <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
           <v-layout mt-5></v-layout>
             <h2 class="my my-4"><strong class="">PLACEMENT STATISTICS</strong></h2>
             <v-container>
             <v-layout row wrap align-center justify-center>
                 <a  v-for="i in 10" :key="i" class="border">{{year}}</a>
             </v-layout>
             </v-container>
           <v-container fluid="">
               <h2 class="my my-4"><strong class="">OUR RECUTIERS</strong></h2>
           <v-flex text-xs-center>
    <v-layout row wrap align-center justify-center>
      <div v-for="(i,j) in 12" :key="j">
       <v-flex md2 xs1>
          <v-card class="transparent elevation-0" height="130" width="130">
              <swiper :options="swiperOption4">
                <div class="swiper-slide ">
                  <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/1.png" height="130" width="130" />
                </div>
                <div class="swiper-slide">
                  <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/7.png" height="130" width="130"  />
                </div>
                <div class="swiper-slide">
                  <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/19.png" height="130" width="130"  />
                </div>
            </swiper>
          </v-card>
        </v-flex>
      </div> 
    </v-layout>
  </v-flex>
  </v-container>
  </div>
    <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
</v-app>
</template>


<script>
import toolbar from './toolbar'
import deptnav from './deptnav.vue'
import fv from './fv'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from 'axios'
export default {
    components:{
        toolbar,deptnav,fv,swiper,swiperSlide
    },

    data(){
        return{
            title:"",
            route:this.$route.path.split('/'),
            dpt_vision:"",
            dpt_mission:"",
            fv_name:"",
            fv_email:"",
            fv_no:"",
            fv_dept:"",
            year:2015,
             swiperOption4:{
        grabCursor:true,
        effect:'flip',
        loop:true,
        autoplay:{
          delay:1500,
          disableOnInteraction:false,
        }},
        }},
        watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
  //       mounted(){
  //            var url = `http://192.168.43.94:8000`;
  //           axios.get(`${url}/cse/home`).then(e => {
  //               this.title = e.data.name;   
  //               this.dpt_vision = e.data.vision;
  //               this.dpt_mission = e.data.mission;
  //               this.fv_name = e.data.hod_name;
  //               this.fv_email = e.data.hod_email;
  //               this.fv_no = e.data.hod_num;
  //               this.fv_dept = e.data.name;
  // });
  //  },
}

</script>


<style scoped>
.my {
	color: #000;
     font-family: 'Roboto Slab', serif;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
.my::after {
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
.border {
  box-shadow: 0px 0px 0px 4px orange;
  transition: box-shadow 0.6s linear;
  margin: 0.4em; 
  text-decoration:none;
  font-weight:bold;
  font-size:20px;
  padding:8px;
  color:blue;
}

.border:hover { box-shadow: 0px 0px 0px 9px orange; }
</style>
