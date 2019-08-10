<template>
<v-app>
    <toolbar  :tool_name="title" :show="false"></toolbar>
       
        <div class="mt-5" >
        <v-tabs
        centered
        color
        v-model="active"
        slider-color="blue"
        icons-and-text
        >
          <v-tab
          >
             STAFF
              <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             FORMS
              <v-icon>note</v-icon>
          </v-tab>
            <v-tab
          >
             STUDENT ZONE
              <v-icon>record_voice_over</v-icon>
          </v-tab>
          <v-tab-item class="mb-4">
              <v-flex pt-3 text-xs-center>
                  <h2><strong> Staff Profile</strong></h2><br>
          <strong>  1) Chief Controller of Examinations<br /></strong>
           .....................<br /><br/>
           <strong> 2) Controller of The Examinations<br /></strong>
            ....................<br /><br/>
         <strong>3) Deputy Controller of The Examinations<br /></strong>
           ....................
              </v-flex>
          </v-tab-item>
          <v-tab-item>
            
           <v-flex text-xs-center pt-3>
               <h2><strong> FORMS </strong></h2><br>
               <v-layout column align-center>
                 <div style="display:inline-block">
                   <div v-for="item in items" :key="item" style="text-align:left;">
                           <p><v-icon  class="px-2 blue--text">cloud_download</v-icon>
                           <b> {{ item }}</b></p>
                   </div>
                   </div>
               </v-layout>
              </v-flex>
               
          </v-tab-item>


          <v-tab-item >
          <v-flex text-xs-center pt-3>
               <h2><strong> STUDENTS ZONE </strong></h2><br>
                <v-container>
                 <div class="text-xs-center">
                   <h5 style="">The journey of miles to different cities across the state has given us mind blowing exposure over the industrial experience!! It has made us surrounded by practical knowledge which help us to build up an industrial based career.</h5>
                 </div>

                </v-container>
              </v-flex>  
          </v-tab-item>
        </v-tabs>
        </div>
    
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
          title: 'COE',
          
          items:[
              "Course Work Registration Form and Hall Ticket","Application for Issue of New / Duplicate Certificate",
              "Application for Name Change","Application for Transcripts","Application for Withdrawal from End Semester Examination"
              ,"Application for Temporary Break of Study"," Application for Payment of Condonation Fee","No Dues Application"
              ," Blueprint of Question Paper"


          ]
           
      }},

    methods: {
     
    }
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
