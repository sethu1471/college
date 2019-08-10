<template>
<v-app>
    <div>
      <!-- phase 1 -->
          <toolbar :show="false" ></toolbar>
  <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
          <v-layout mt-5></v-layout>
        <!-- phase 2 -->
        <!-- list view -->
        <v-flex mt-3>
          <h2><strong>BEST PRACTICES</strong></h2>
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
          <v-layout style="padding-top:10px;padding-bottom:12px;padding-left:9px;padding-right:7px;font-weight:bold;">
          <v-flex ms2 md2>
            <v-icon right color="blue">chevron_right</v-icon>
          </v-flex>
          <v-flex ms8 xd8>
          <span >{{ item.lab_name }}</span>
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
                <v-card-text><h4 class="text-xs-center" style="color:blue">{{ item.lab_name }}</h4></v-card-text>
                <div class="text-xs-center mt-3"><img :src="item.img" height="250" style="border-radius:5px"></div>
                <v-card-text style="font-size:17px;text-align:justify"><v-flex pa-3 >
                  {{item.lab_description}}</v-flex>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>  
      </v-layout>
      <!-- end of list view -->
      <!-- phase 3 -->
    <fv :hod_name="fv_name" :hod_email="fv_email" :hod_no="fv_no" :hod_dept="fv_dept" ></fv>
    <footnav></footnav>
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
         window: 0,
         fv_name: "",
         fv_email:"",
         fv_no: "",
         fv_dept: "",
         items:[],
         title: '',
      }},
      watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
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
.my:hover{
  background-color: #1c47e3;
  color: white;
  }
/* .my:active{
  background-color: #1c47e3;
  color: white;
 } */
</style>
