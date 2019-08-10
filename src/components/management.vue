<template>
<v-app>
<div class="body2">
<toolbar  :tool_name="title" :show="false"></toolbar>
<div class="mt-5">
    <v-tabs
        centered
        class="hidden-sm-and-down"
        color
        v-model="active"
        slider-color="blue"
        icons-and-text
        >
          <v-tab class="pt-1">
             ChairPerson & Managing Trustee
              <v-icon>person</v-icon>
          </v-tab>
            <!-- <v-tab
          >
             Trustee
               <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Advicor
             <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Chief Excutive Officer (CEO)
              <v-icon>person</v-icon>
          </v-tab> -->
            <v-tab
          >
             Principal
               <v-icon>person</v-icon>
          </v-tab>
            <v-tab
          >
             Governing bodies
               <v-icon>person</v-icon>
          </v-tab>
            
          <v-tab-item >
            <v-container>
              <v-layout column wrap align-center justify-center>
                  
                   <v-avatar
            :tile="tile"
            size="200"
            class="mb-3"
            >
          <img :src="cm" alt="avatar">
        </v-avatar>
                    <h3 style="color:blue; font-family: 'Roboto Slab', serif;"><strong>Smt. S. Malarvizhi, Chairperson</strong></h3>
                     <h5 style="text-align:center" class="pa-3">Smt. S. Malarvizhi, Chairperson and Managing Trustee, being an eminent educationalist by herself, brings in her rich experience. She leads and guides the college towards excellence in all spheres of academic and administrative activities. The institution grows with her vision.
                    <br/><br/><i  style="color:blue">"Our Honorable Chairperson and Managing Trustee has been Nominated as the Syndicate Member of Anna University Chennai"</i>
                   </h5>
                    
                  
              </v-layout>     
              </v-container>         
          </v-tab-item>
          <!-- <v-tab-item >
            <v-container>
              <v-layout column wrap align-center justify-center>
                
                  <v-avatar
            :tile="tile"
            size="230"
            class="mb-3"
            >
          <img src="http://skct.edu.in/v1/images/p2/trustee.gif" alt="avatar">
        </v-avatar>

                     <h3  style="color:blue;font-family: 'Roboto Slab', serif;"><strong>Mr.C.R.Swaminathan, Trustee</strong></h3>
                    <h5 class="pa-4"  style="text-align:center" >
                        <b> Mr.C.R.Swaminathan</b>, has more than four decades of experience in educational administration. He has to his credit an MBA degree and he plays an active role in various industrial and social organizations. He had held coveted positions as President SIEMA, CII and Indian Machine Tool Manufacturers'Association. Presently he is the Chairman in National Council-India institute of Foundrymen, President in COINDIA, RAAC and Cyber Society of India, Coimbatore chapter. He is
                          a member of our Governing Council since inception and contributes richly through his wise counsel to the development of the college</h5>
                
              </v-layout> 
              </v-container>             
          </v-tab-item>
          <v-tab-item >
            <v-container>
              <v-layout column wrap align-center justify-center>
                    <v-avatar
            :tile="tile"
            size="230"
            class="mb-3"
            >
          <img src="http://skct.edu.in/v1/images/p2/advisor.gif" alt="avatar">
        </v-avatar>
                  
                  
                     <h3  style="color:blue;font-family: 'Roboto Slab', serif;"><strong>Dr.S.Subramanyan, Advisor</strong></h3>
                     <h5 class="pa-4" style="text-align:center;">
                         <b>Dr.S.Subramanyan</b>, Former Vice-Chancellor, Bharathiar University, has an enormous experience in academics and administration. He has obtained his PG degree in Technology from Manchester, U.K. and PhD from the University of Madras. He was the registrar of Bharathiar University and Principal of PSG College of Technology. He has authored text books in Heat & Mass Transfer Data and CAD/CAM areas. He is also a Fellow of the institution of Engineers. 
                         His valuable and timely guidance are the undisputed reasons for the faster growth of the institution. </h5>
                   
                  
              </v-layout></v-container>              
          </v-tab-item>          
           <v-tab-item ><v-container>
              <v-layout column wrap align-center justify-center>
                  
                     <v-avatar
            :tile="tile"
            size="230"
            class="mb-3"
            >
          <img src="http://skct.edu.in/v1/images/p2/2.jpg" alt="avatar">
        </v-avatar>
        <h3  style="color:blue;font-family: 'Roboto Slab', serif;"><strong>Dr. K .Sundararaman M.Com, M.Phil., Ph.D. ;CEO</strong></h3>
                     <h5 class="pa-4" style="text-align:center">
                         <b>Dr. K .Sundararaman</b> M.Com, M.Phil., Ph.D. has 40 years of teaching experience as the Head of the Department of Commerce and also has 17 years of dynamic administrative experience in managing all the courses under
                          self –financing stream in a reputed autonomous College in Coimbatore. He joined the college as Principal in the year 2005. He has published five books.His area of specialization is Quality Assurance in Higher Education.</h5>
              </v-layout></v-container>            
          </v-tab-item>  55-->
           <v-tab-item >
             <v-container>
              <v-layout column wrap align-center justify-center>
                    <v-avatar
                    :tile="tile"
                    size="200"
                    class="mb-3"
                    >
                    <img :src="principal" alt="avatar">
                     </v-avatar>
                <h3  style="color:blue;font-family: 'Roboto Slab', serif;"><strong>Dr. Srinivasan Alavandar, Principal</strong></h3>
                <h5 class="pa-4" style="text-align:center">
                    Dr. Srinivasan Alavandar B.E, M.E, PhD (IIT)has been working more than 13 years in leading engineering institutions as Professor and Head, Dean R&D i/c, 
                    Programme Leader and Dean Academics including Institutions like Caledonian College of Engineering Oman, affiliated to GCU, UK.<br>
                    <h6>Read more...</h6>
                  <div class="my-2"> <b>Email:</b><a href="mailto:principal@skct.edu.in" style="text-decoration:none;color:blue">principal@skct.edu.in</a></div>
                  <div><b>Phone No:</b><a href="tel:+919994051191" style="text-decoration:none;color:blue">+91-9994051191</a></div>
                </h5>
              </v-layout></v-container>              
          </v-tab-item>
            <v-tab-item >

              <v-layout align-start>
      <v-card height="500" min-width="450" max-width="450" style="overflow:hidden;overflow-y:scroll;" >
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      
       <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
             <v-icon right class="blue--text">chevron_right</v-icon>
             Members from the Management
        </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
            <v-icon right class="blue--text">chevron_right</v-icon>
                Industrialist/Educationist Nominated
        by the management
             </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;">
            <v-icon right class="blue--text">chevron_right</v-icon>
                UGC Nominee Nominated by UGC
             </div>
      </v-item>
      <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;overflow-wrap: break-word;word-wrap: break-word;hyphens: auto;">
          <div style="text-align:left"><v-icon right class="blue--text">chevron_right</v-icon>State Government Nominee</div>
             </div>
      </v-item>
         <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;overflow-wrap: break-word;word-wrap: break-word;hyphens: auto;">
          <div style="text-align:left"><v-icon right class="blue--text">chevron_right</v-icon>UGC Nominee - Nominated by University</div>
             </div>
      </v-item>
         <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;overflow-wrap: break-word;word-wrap: break-word;hyphens: auto;">
          <div style="text-align:left"><v-icon right class="blue--text">chevron_right</v-icon>Faculty members from the Institution </div>
             </div>
      </v-item>
         <v-item
        v-slot:default="{ active,toggle }"
      >
        <div :input-value="active"  @click="toggle" class="my" style="padding-top:10px;padding-bottom:13px;padding-left:10px;font-weight:bold;overflow-wrap: break-word;word-wrap: break-word;hyphens: auto;">
          <div style="text-align:left"><v-icon right class="blue--text">chevron_right</v-icon>Member Secretary </div>
             </div>
      </v-item>
    </v-item-group>
      </v-card>
    <v-flex>
      <v-window
        v-model="window"
        class="elevation-1"
        horizontal
      >
         <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">Members from the Management</h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange">Shri. K. Adithya</h5>
                 <h5>Trustee</h5>
                    <h6>Sri Krishna Institutions<br>
                    Kovaipudur,<br>
                    Coimbatore - 641 042.<br>
                    Cell : 9943288000</h6>
               </div>
                <div class="text-xs-center mx-3 my-2">
                 <h5 style="color:orange">Shri. Mahendra Ramdas</h5>
                 <h5>Managing Director,</h5>
                    <h6>Mahendra Pumps Pvt Ltd.,<br>
733, P.N.Palayam road, <br>Puliakulam,<br>
Coimbatore – 641045<br>
Mobile No: 9894043025</h6>
               </div>
                <div class="text-xs-center mx-3 my-2">
                 <h5 style="color:orange">Shri P. Mahesh Kumar</h5>
                 <h5>Chief Advocate</h5>
                    <h6>Wallcliffs Law Firm<br>
No.49, West Club Road,<br> Race Course,<br>
Coimbatore - 641 018.<br>
Mobile : 7339186668</h6>
               </div>
                <div class="text-xs-center mx-3 my-2">
                 <h5 style="color:orange">Dr. K. Sundararaman</h5>
                 <h5>Chief Executive Officer (CEO)</h5>
                    <h6>Sri Krishna Institutions,<br>
Kovaipudur,<br> Coimbatore - 641 042.<br>
Mobile No:9786607000</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">An Industrialist/Educationist Nominated
by the management</h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange">Sri.V.Udaya Sankar</h5>
                 <h5> Regional Lead,</h5>
                    <h6>Nasscom,<br>
TRIL Info park Amenity Floor, <br>Hardy Towers,<br>
OMR, Chennai-600113.<br>
Mobile No:98405 22324<br>
Email :udaya@nasscom.in</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">UGC Nominee Nominated by UGC</h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange"> Prof.Hareshkumar M.Patel</h5>
                 <h5>  Department of Civil Engineering,</h5>
                    <h6>The M.S.University of Baroda<br>
Vadodara, Gujarat 390002.<br>
Office No:0265 -2327911<br>
Mobile :09427602524<br>
E Mail : haresh_patel@yahoo.com</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">
State Government Nominee – Director of Technical Education Nominated by State Government</h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange">  Dr. D. Padmini</h5>
                 <h5> Associate Professor</h5>
                    <h6>Department of Civil Engineering,<br>
Government College of Technology,<br>
Coimbatore - 641013.<br>
Cell : 9442548932<br>
E Mail :dpmini2017@gmail.com</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
         <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">
UGC Nominee - Nominated by University</h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange"> Dr. L. Karunamoorthy</h5>
                 <h5>Professor</h5>
                    <h6>Department of Civil Engineering,<br> CEG Campus,
Anna University, <br>Chennai - 600 025.<br>
Cell : 9444118628<br>
Email : karun.anna@gmail.com</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
         <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">
Faculty members from the Institution </h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange"> Dr. M. Padmavathi</h5>
                 <h5>  Associate Professor and Head</h5>
                    <h6>Department of Master of Business Administration<br>
Sri Krishna College of Technology<br>
Kovaipudur, Coimbatore - 641042.<br>
Cell : 9942571273</h6>
               </div>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange">  Dr. R. Udaiyakumar</h5>
                 <h5>Professor and Head</h5>
                    <h6>Department of Electronics and Communication Engeering<br>
Sri Krishna College of Technology<br>
Kovaipudur, Coimbatore - 641042.<br>
Cell : 9626273374</h6>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
          <v-window-item
        >
          <v-card flat class="pa-3" height="500" style="overflow:hidden; overflow-y:scroll;">
            <h4 class="text-xs-center" style="color:blue">
Member Secretary </h4>
            <v-card-text class="pl-4">
              <v-layout row wrap align-center justify-center>
               <div class="text-xs-center  mx-3 my-2">
                 <h5 style="color:orange"> Principal</h5>
                 <h5>
Sri Krishna College of Technology,<br>
Kovaipudur, Coimbatore – 641 042. </h5>
               </div>
               </v-layout>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-flex>  
  </v-layout>


          </v-tab-item>
        </v-tabs>

        <!-- mobile -->

        <allfooter></allfooter>
</div>
</div>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter'
import mam from '@/assets/management/mam.jpg'
import principal from '@/assets/management/principal.jpg'
export default {
    components:{
        toolbar,allfooter
    },
   data(){
       return{
           window: 0,
           cm:mam,
           principal: principal,
       }
   }
}
</script>

<style scoped>
.my:hover{
  background-color: #dddddd;
}
.my:active{
  background-color: #1c47e3;
  color: white;
}
</style>
