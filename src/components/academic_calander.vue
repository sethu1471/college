<template>
<v-app>
    <div>
      <!-- phase 1 -->
          <toolbar :show="true" ></toolbar>
          <v-layout mt-5></v-layout>
        <!-- phase 2 -->
        <h2 class="mt-3"><b>ACADEMIC CALANDER</b></h2>


        
      <!-- phase 3 -->
     <allfooter></allfooter>
    <!-- end of all phase -->
    </div>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter'

import axios from 'axios'
export default {
  components:{
    toolbar,allfooter
  },
  data(){
    return{
      }},
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
