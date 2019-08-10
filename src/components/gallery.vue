<template>
    <v-app>
        <div>
          <!-- phase 1 -->
          <toolbar :show="false"></toolbar>
  <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
          <v-layout mt-5></v-layout>
          <!-- phase 2 -->
        <h2 class="mt-3 h2"><strong>GALLERY</strong></h2>
           <v-container fluid>  
               <v-layout row wrap justify-start align-start ml-5>
                <div  v-for="(item,i) in image" :key="i">
                   <v-img :src="item.src" height="190px" width="335px" class="mx-2 my-2" ></v-img>
                </div>
             </v-layout>
             </v-container>
             <!-- phase 3 -->
         <footnav></footnav>
         <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
         <!-- end of all phase -->
        </div>
    </v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import deptnav from './deptnav'
import fv from './fv'
import footnav from './footnav.vue'
import axios from 'axios'
export default {
  components:{
    toolbar,fv,footnav,deptnav
           }, 
           data(){
                return{
                   route:this.$route.path.split('/'),
                    fv_name: "",
                    fv_email:"",
                    fv_no: "",
                    fv_dept: "",
                    title:'',
                    image:[
                    ]
                    }
                  },
                  watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
//  mounted(){
//  var url = `http://192.168.43.94:8000`;
//           axios.get(`${url}/cse/home`).then((res)=>{
//               this.title = res.data.name;
//               this.fv_name = res.data.hod_name;
//               this.fv_email = res.data.hod_email;
//               this.fv_no = res.data.hod_num;
//               this.fv_dept = res.data.name; 
//               var list = [];
//               res.data.gallery.forEach(e=>{
//                 list.push({src:`${url}${e}`});
//               });
//               this.items3 = list;
//           });
//      }
 }
</script>

<style scoped>
.h2 {
	color: #000;
  font-family: 'Roboto Slab', serif;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
.h2::after {
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
