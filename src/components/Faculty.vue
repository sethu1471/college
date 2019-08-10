<template>
<v-app>
  <div>
    <!-- phase 1 -->
  <toolbar :show="false" ></toolbar>
  <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
       <v-layout mt-5></v-layout>
       <!-- phase 2 -->
      <v-flex mt-3>
        <h2>
          <strong>Faculties</strong>
        </h2>
      </v-flex>
    <v-container>
     <p style="text-align:center;font-size:24px;font-family: 'Roboto', sans-serif;"> The department of CSE currently has an active and energetic team of near 38 faculty members with diverse educational backgrounds and academic experiences. They are embarking on a journey of building a future world.</p>
    </v-container>
    <!-- phase 2 computer -->
    <v-container fluid class="hidden-sm-and-down" >
      <v-layout row wrap justify-center align-center>
        <div data-aos="fadein"  v-for="(i,j) in items" :key="j"  >
          <v-btn loading fab flat color="blue" large v-show="!i.show"></v-btn>
        <v-card class="ma-2  sk" v-show="i.show" height="176" width="413" style="overflow:hidden">
          <v-layout  align-center justify-start class="pa-2">
            <v-avatar
            :tile="false"
            size="160"
            >
          <img :src="i.img" alt="avatar">
        </v-avatar>
         <v-flex text-xs-center px-1>
           <h4 class=" mt-2" style=" font-family: 'Roboto Slab', serif;color:blue" @click="$router.push('')">{{ i.name }}</h4>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.proffesion }}</h6>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.phone_num }}</h6>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.email }}</h6>
          <a :href="i.email1" style="text-decoration:none;"> <v-btn fab small flat class="red--text"><v-icon>email</v-icon></v-btn></a><a :href="i.no" style="text-decoration:none;"><v-btn  fab small flat class="blue--text hidden-md-and-up"><v-icon>phone</v-icon></v-btn></a>
         </v-flex>
          </v-layout>
        </v-card>
        </div>
      </v-layout>
    </v-container>
    <!-- phase 2 mobile -->
     <v-container fluid class="hidden-md-and-up" >
      <v-layout row wrap justify-center align-center>
        <div data-aos="fadein"  v-for="(i,j) in items" :key="j"  >
          <v-btn loading fab flat color="blue" large v-show="!i.show"></v-btn>
        <v-card class="ma-2  sk" v-show="i.show" height="176" width="380" style="overflow:hidden">
          <v-layout  align-center justify-start class="pa-3">
            <v-avatar
            :tile="false"
            size="140"
            >
          <img  :src="i.img" alt="skct">
        </v-avatar>
         <v-flex text-xs-center px-1>
           <h5 class=" mt-2" style=" font-family: 'Roboto Slab', serif;color:blue">{{ i.name }}</h5>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.proffesion }}</h6>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.phone_num }}</h6>
           <h6 style="font-family: 'Roboto', sans-serif;">{{ i.email }}</h6>
          <a :href="i.email1" style="text-decoration:none;"> <v-btn fab small flat class="red--text"><v-icon>email</v-icon></v-btn></a><a :href="i.no" style="text-decoration:none;"><v-btn  fab small flat class="blue--text hidden-md-and-up"><v-icon>phone</v-icon></v-btn></a>
         </v-flex>
          </v-layout>
        </v-card>
        </div>
      </v-layout>
    </v-container>
    <!-- phase 3 -->
  <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
  <footnav></footnav>
  <!-- end of all phase -->
  </div>
</v-app>
</template>


<script>
import toolbar from "./toolbar.vue";
import fv from "./fv";
import deptnav from './deptnav'
import footnav from "./footnav.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default {
  components: {
    toolbar,
    fv,
    footnav,deptnav
  },
  data() {
    return {
         route:this.$route.path.split('/'),
         title: "",
         fv_name: "",
         fv_email:"",
         fv_no: "",
         fv_dept: "",
        items: [
        {
          email: "",
          img: "",
          name: "",
          show: false,
          phone_num: "",
          proffesion: "",
          no: "",
          email: ""
        }
      ]
    };
  },
  watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
  // mounted() {
  //   var url = `http://192.168.43.94:8000/cse/faculty`;
  //   var baseurl = `http://192.168.43.94:8000`;
  //   var temp_list = [];
  //   axios.get(url).then(res => {
  //     res.data.faculty.forEach(e => {
  //         temp_list.push({
  //               show: true,
  //               email: e.email,
  //               // img: `${baseurl}${e.img}`,
  //               img: e.img,
  //               name: e.name,
  //               phone_num: e.phone_num,
  //               proffesion: e.pos,
  //               no : "tel:" + e.phone_num,
  //               email1: "mailto:" + e.email,  
  //         });
  //     });
  //     this.items = temp_list;
  //   });
    
  //   axios.get(`${baseurl}/cse/home`).then(res => {
            
  //       this.fv_name = res.data.hod_name;
  //             this.fv_email = res.data.hod_email;
  //             this.fv_no = res.data.hod_num;
  //             this.fv_dept = res.data.name;
  //            this.title = res.data.name;
  // });
  // },
}
</script>

<style scoped>
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
