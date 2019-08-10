<template>
<v-app>
  <div>
    <toolbar :show="false" ></toolbar>
  <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
  <v-layout mt-5></v-layout>
      <div class="text-xs-center mt-3">
        <h2><strong>Research</strong></h2></div>
           <v-container >
             <p style="text-align:center;font-size:24px;font-family: 'Roboto', sans-serif;">Our skilled, qualified faculty is encouraged by the Management to initiate research; we also extend the use of selected research facilities to scholars from other institutions and organize national and international conferences to facilitate a healthy exchange of ideas benefiting the larger academic
              community. We also encourage our faculty to seek external funding for research.</p> </v-container>
          <v-layout row wrap align-center justify-center >
          <div  v-for="(item, i) in items" :key="i">
               <div data-aos="fade-in">
            <v-card
              class="elevation-12 ro mx-2  my-3"
              :color="item.color"
              width="220"
              height="221"
            >
            <div  style="text-align:center;"><v-icon class="white--text mt-4" style="font-size: 100px;">{{ item.icon }}</v-icon></div>
                <v-divider dark class="mt-5"></v-divider>
                <div style="text-align:center;"><p class="mt-1 white--text" style="font-size:20px;"><strong>{{ item.title}}</strong></p></div>
            </v-card>
               </div>
            </div>
          </v-layout>
      <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
     <footnav></footnav>
     </div>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import deptnav from './deptnav'
import footnav from './footnav.vue'
import fv from './fv'
import axios from 'axios'
export default {
  components:{
    toolbar,fv,footnav,deptnav
  },
    data(){ 
        return {
          route:this.$route.path.split('/'),
          title: '',
          fv_name: "",
         fv_email:"",
         fv_no: "",
         fv_dept: "",
        items:[
            {title:"Publications" , icon:"book", color:"red"},
            {title:"Activities" , icon:"hourglass_empty", color:"green"},
            {title:"Enrichment Program" , icon:"build", color:"orange"},
            {title:"Project Proposals" , icon:"dashboard", color:"blue darken-1"},
            {title:"MOUs" , icon:"aspect_ratio", color:"purple"},
            {title:"Patent" , icon:"bookmark", color:"orange darken-3"}
        ]
    }},
    watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
//     mounted() {
//      var url = `http://192.168.43.94:8000`;
//       axios.get(`${url}/cse/home`).then(res => {
//       res.data.labs.forEach(e => {
//         this.fv_name = res.data.hod_name;
//               this.fv_email = res.data.hod_email;
//               this.fv_no = res.data.hod_num;
//               this.fv_dept = res.data.name;
//              this.title = res.data.name;
//       })
//   });
// }
}
</script>

<style scoped>
.ro{
    transition: .6s;
    transform: rotateX(20deg) translateY(-50px) translateZ(-80px);
}
.ro:hover{
    transform: rotateX(0deg)
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
</style>
