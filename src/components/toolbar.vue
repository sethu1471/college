<template>
<div>
  <v-content>
    <v-toolbar height="90" fixed app color="grey lighten-5" class="elevation-1" style="z-index:999">
    <v-layout column wrap>
    <v-flex text-xs-center xs12 mt-1 md12>
      <img :src="require('@/assets/logo.png')"  width="700">
      <!-- <v-img src="@/assets/cn2.png"></v-img> -->
    </v-flex>
    </v-layout>
    </v-toolbar> 
     <v-toolbar height="40" flat color="indigo accent-3" v-show="true" dark style="position:fixed;z-index:999" dense>
       <v-toolbar-title @click="$router.push('/')"><b>SKCT</b></v-toolbar-title>
        <v-divider
            class="mx-3"
            inset
            vertical
            ></v-divider>
     <v-toolbar-items >
       <v-btn class="btn1" flat @click="$router.push('/')">HOME</v-btn>
            <v-btn class="btn1" @click="$router.push('/admission')" flat>ADMISSION</v-btn>
            <v-btn class="btn1"  @click="$router.push('/coe')"  flat>COE</v-btn>
            <v-menu class="py-5" open-on-hover bottom style="z-index:99999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                class="btn1"
                v-on="on"
                >
                ALUMINI <v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile>
                <v-list-tile-title>EVENTS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/alumini/database')">
                <v-list-tile-title>DATABASE</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
           <v-menu class="py-5" open-on-hover bottom style="z-index:99999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                class="btn1"
                v-on="on"
                >
                ACADEMICS <v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
              <v-list-tile @click="$router.push('/Quality Circle')">
                <v-list-tile-title>QUALITY CIRCLE</v-list-tile-title>
                </v-list-tile>
              <v-list-tile @click="$router.push('/Student Council')">
                <v-list-tile-title>STUDENT COUNCIL</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/Academic calender')">
                <v-list-tile-title>ACADEMIC CALENDER</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/Center Of Excelence')">
                <v-list-tile-title>CENTER OF EXCELLENCE</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/')">
                <v-list-tile-title>RULES AND REGULATION</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
            <v-menu class="py-5" open-on-hover bottom style="z-index:999999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                v-on="on"
                class="btn1"
                >
                DEPARTMENTS <v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'CIVIL'}})">
                <v-list-tile-title >CIVIL ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'CSE'}})">
                <v-list-tile-title >COMPUTER SCIENCE AND ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'ECE'}})">
                <v-list-tile-title >ELCTRONICS AND COMMUNICATION ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'EEE'}})">
                <v-list-tile-title >ELECTRICAL AND ELECTRONICS ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'ICE'}})">
                <v-list-tile-title >INSTRUMENTAL AND CONTROL ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'IT'}})">
                <v-list-tile-title >INFORMATION TECHNOLOGY</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'MECH'}})">
                <v-list-tile-title >MECHANICAL ENGINNERING</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  @click="$router.push({name:'dp',params:{dept:'S&H'}})">
                <v-list-tile-title >SCIENCE AND HUMANITIES</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                <v-list-tile-title >SCHOOL OF MANAGEMENT</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
           <v-menu class="py-5" open-on-hover bottom style="z-index:99999" offset-y offset-overflow>
               <template v-slot:activator="{ on }">
                  <v-btn
                flat=""
                v-on="on"
                class="btn1"
                >
                ABOUT SKCT<v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list style="z-index:999">
              <v-list-tile   @click="$router.push('/Facilities')">
                <v-list-tile-title>FACILITIES</v-list-tile-title>
                </v-list-tile>
               <v-list-tile   @click="$router.push('/Overview')">
                <v-list-tile-title>OVERVIEW</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/Management')">
                <v-list-tile-title >MANAGEMENT</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/Skct Digest')">
                <v-list-tile-title >SKCT DIGEST</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat @click="$router.push('/Placement')" class="btn1">PLACEMENTS</v-btn>
     <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn flat  v-on="on" @click="$router.push('/Contact')">CONTACT US</v-btn>
      </template>
      <span> feedback & queries to <br> info@skct.edu.in</span>
    </v-tooltip> 
    </v-toolbar-items>
      </v-toolbar>
    </v-content>
   

    <!-- mobile -->
    <v-flex hidden-md-and-up>
    <v-toolbar dark class="indigo accent-3" fixed flat data-app style="z-index:9999999999999999999">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"  ><img src="../assets/cn2.png"  width="40px" alt=""></v-toolbar-side-icon>
        <v-toolbar-title ><strong>SKCT {{ tool_name }}</strong></v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      clipped=""
      absolute
      temporary
      width="300"
      style="position:fixed; overflow-y:scroll;"
    >
    <v-flex py-2 text-xs-center>
      <img width="60px" class="icn"  src="../assets/cn2.png" > <h3><strong>@SKCT</strong></h3>
    </v-flex>
    <v-list>
        <v-list-tile v-for="(item4,m) in top" :key="m"  router :to="item4.route">
            <v-list-tile-action>
                    <v-icon color="blue">star</v-icon>
                    </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item4.tit }}</v-list-tile-title>
                </v-list-tile-content>
        </v-list-tile>
    </v-list>

     <v-expansion-panel >
       <div  v-for="(item5,z) in eg" :key="z">
    <v-expansion-panel-content
     
    >
      <template v-slot:header>
         <v-flex py-2 text-xs-center>
       <h4>{{ item5.title }}</h4>
         </v-flex>
      </template>
      <v-card>
         <v-list-tile
           router :to="item5.sub.route"
        >
        <v-list-tile-action>
              <v-icon color="blue">{{ item5.sub.icon }}</v-icon>
            </v-list-tile-action>
          <v-list-tile-content wrap>
            <v-list-tile-title>{{ item5.sub.dis }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-card>
    </v-expansion-panel-content></div>
  </v-expansion-panel>
  
    </v-navigation-drawer>
 </v-flex>
</div>
</template>


<script>
export default {
  props:[ 'tool_name','show','height'],
     data () {
      return {
        drawer: false,
       
        top:[
          { tit:"Home"},
          { tit: "Coe",route:"/coe"},
          { tit: "facilities",route:"/facilities"},
          { tit: "Skct @Glance"},
          { tit: "Admission"}
        ],
        items: [
            { title: "Civil Engineering"},
            { title: "Computer Science and Engineering",route: "/"},
            { title: "Electronics and Communication Engineering"},
            { title: "Electrical and Electronics Engineering"},
            { title: "Instrumentation and Control Engineering"},
            { title: "Information Technology"},
            { title: "Mechanical Engineering"},
            { title: "Science and Humanities"},
            { title: "School of Management"},
            { title: "Centre of Excellence"},
      ],
     itemsus: [
            { title: "overview",route:'/overview'},
            { title: "management",route:'/management'}            
      ],
       itemsalumini: [
            { title: "Event"},
            { title: "Database"},           
      ],
         items1: [
            { title: "Home", icon: "home",route: "/"},
            { title: "Faculty", icon: "person",route: "/Faculty"},
            { title: "Laboratory", icon: "android",route: "/lab"},
            { title: "Research", icon: "wb_incandescent",route: "/research"},
            { title: "Events", icon: "history",route: "/events"},           
      ],
      dep:[
            { title:"Department",show:false, sub:[
            { dis:"Home",route: "/",icon: "school"},
            { dis: "Faculty",route: "/Faculty",icon: "school"},
            { dis: "Laboratory",route: "/lab",icon: "school"},
            { dis: "Research",route: "/research",icon: "school"},
            { dis: "Events",route: "/events",icon: "school"},
        ]}
      ],
       
      eg: [
        { title:"Acadamics", sub:[
            { dis: "Civil Engineering",icon: "star"},
            { dis: "Computer Science and Engineering",icon: "star",route: "/"},
            { dis: "Electronics and Communication Engineering",icon: "star"},
            { dis: "Instrumentation and Control Engineering",icon: "star"},
            { dis: "Information Technology",icon:"star"},
            { dis: "Mechanical Engineering",icon: "star"},
            { dis: "Science and Humanities",icon:"star"},
            { dis: "School of Management",icon:"star"},
            { dis: "Centre of Excellence",icon:"star"},
        ]},
        { title:"Alumini", sub:[
          { dis: "Event",icon: "person"},
          { dis: "Database",icon: "person"},  
        ]},
        { title: "About Us", sub:[
          { dis: "overview",icon: "360",route:'/overview'},
          { dis : "management",icon: "360",route:'/management'}
        ]},
        
      ],
      }
    },

}
</script>

<style scoped>
.icn:hover{
  transform: scale(1.2)
}
.image{
   transition: transform .2s;
   }
.image:hover{
  transform: scale(1.5);
}

     
</style>


