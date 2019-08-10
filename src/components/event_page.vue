<template>
    <v-app>
        <div>
            <toolbar  :show="false"></toolbar>
         <deptnav :route_path="dpt_name" :route="route" style="position:fixed;z-index:9999" ></deptnav>
        <v-layout mt-5></v-layout>
            <v-btn color="blue" outline @click="$router.push('/events')" class="mt-3"><v-icon class="pr-1">replay</v-icon> Back To Event Page </v-btn>
            <h2 id="mysp" class="text-xs-center my-1">Event DETAILS</h2>
        <v-container>
            <v-img :src="img_src" id="my"   aspect-ratio="1.8" class=" header hidden-md-and-up"></v-img>
             <v-img :src="img_src" height="450" class="hidden-sm-and-down"></v-img>
            <h3 class="mt-4 " style="color:blue;font-family: 'Roboto Slab', serif;font-size:32px"><b>{{ event_name }}</b></h3>
            <p class="mx-3 my-3" style="font-family: 'Roboto', sans-serif;font-size:17px">{{ event_details }}</p>
            <h5>Phone No:<span style="color:blue;font-family: 'Roboto Slab', serif;font-size:20px">{{ contact_no }}</span></h5>
            <h5>Email:<span style="color:blue;font-family: 'Roboto Slab', serif;font-size:20px">{{ email_id }}</span></h5>
        </v-container>
        
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
    props:['pk'],
    data(){
        return{
            route:this.$route.path.split('/'),
            fv_name: "",
            fv_email:"",
            vl: null,
            fv_no: "",
            fv_dept: "",
            title: "",
            event_name: "avantaa",
            img_src:'',
            contact_no:"",
            email_id:"",
            event_details: "I take immense pleasure in inviting you all on behalf of 'sri krishna college of technology' to the avantta held on 11.03.2017 .."
         }},
         watch:{
         $route(to, from){
           this.route=this.$route.path.split('/');
           console.log(this.$route.path.split('/'));
         }
       },
  //       mounted(){
  //            var url = `http://192.168.43.94:8000`;
  //           axios.get(`${url}/event/${this.$route.params.pk}/`).then((res)=>{
  //             this.event_name = res.data.name;
  //             this.event_details = res.data.description;
  //             this.img_src = `${url}${res.data.image}`;
  //             this.contact_no = res.data.contact;
  //             this.email_id = res.data.email;
  //                 });
  //          axios.get(`${url}/cse/home`).then(res => {
  //     res.data.labs.forEach(e => {
  //       this.fv_name = res.data.hod_name;
  //             this.fv_email = res.data.hod_email;
  //             this.fv_no = res.data.hod_num;
  //             this.fv_dept = res.data.name;
  //            this.title = res.data.name;
  //     })
  // });
  //  },
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
