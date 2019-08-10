<template>
    <v-toolbar dense :height="40" dark color="indigo accent-3">
     
           <!-- <v-menu class="py-5"  bottom style="z-index:99999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                class="btn1" style="z-index:99999"
                v-on="on"
                >
                {{ route_path }} DEPARTMENT  <v-icon class="ml-1">expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile @click="$router.push('/')" class="my">
                <v-list-tile-title>ADMISSION</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/facilities')"  class="my">
                <v-list-tile-title>FACILITIES</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/coe')"  class="my">
                <v-list-tile-title>COE</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('')"  class="my">
                <v-list-tile-title>SKCT @ GLANCE</v-list-tile-title>
                </v-list-tile>
                <v-list-tile class="my">
                <v-list-tile-title>
                    <v-menu class="py-5" open-on-hover offset-x right  style="z-index:99999">
            <template v-slot:activator="{ on }">
                <div
                 style="z-index:99899"
                v-on="on">
                ACADAMICS</div>
            </template>
            <v-list>
                <v-list-tile @click="$router.push('/')" class="my">
                <v-list-tile-title>COMPUTER SCIENCE ENGIEERING</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
                </v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/placements')"  class="my">
                <v-list-tile-title>ABOUT US</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/placements')"  class="my">
                <v-list-tile-title>CONTACT</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
       -->
        <v-toolbar-items> 
           <v-menu class="py-5" open-on-hover offset-y bottom open-on hover  style="z-index:99999">
            <template v-slot:activator="{ on }">
                 <v-btn
                 @click="$router.push({name:'dp',params:{dept:route[1]}})"
                flat=""
                class="btn1"
                v-on="on"
                >
                 {{ route[1] }} DEPARTMENT<v-icon class="ml-1">expand_more</v-icon>
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
             <v-divider
            inset
            vertical
            ></v-divider>
     <v-btn flat="" @click="$router.push('/')">
        HOME
      </v-btn>
       <v-menu class="py-5" open-on-hover bottom style="z-index:99999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                class="btn1"
                v-on="on"
                >
                CURRICULAM<v-icon class="ml-1">expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile class="my" @click="$router.push({name:'curriculam',params:{dept:route[1]}})">
                <v-list-tile-title>ACADEMICS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile class="my"  @click="$router.push({name:'bp',params:{dept:route[1]}})">
                <v-list-tile-title>BEST PRACTICES</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
      <v-btn flat=""   @click="$router.push({name:'Faculty',params:{dept:route[1]}})">
        FACULTY
      </v-btn>
      <v-btn flat=""  @click="$router.push({name:'lab',params:{dept:route[1]}})">
        LABORATORY
      </v-btn>
      <v-btn flat=""   @click="$router.push({name:'research',params:{dept:route[1]}})">
        RESEARCH
      </v-btn>
      <v-btn flat=""   @click="$router.push({name:'placements',params:{dept:route[1]}})">
        PLACEMENTS
      </v-btn>
       <v-menu class="py-5" open-on-hover bottom style="z-index:99999" offset-y offset-overflow>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                class="btn1"
                v-on="on"
                >
                ACHIEVEMENTS<v-icon class="ml-1">expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile class="my">
                <v-list-tile-title>DEPARTMENT</v-list-tile-title>
                </v-list-tile>
                <v-list-tile class="my">
                <v-list-tile-title>FACULTY</v-list-tile-title>
                </v-list-tile>
                <v-list-tile class="my">
                <v-list-tile-title>STUDENT</v-list-tile-title>
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
                ACTIVITIES<v-icon class="ml-1">expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile class="my"  @click="$router.push({name:'events',params:{dept:route[1]}})">
                <v-list-tile-title >EVENTS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile class="my"  @click="$router.push({name:'club',params:{dept:route[1]}})">
                <v-list-tile-title>CLUBS</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
      <v-btn flat=""   @click="$router.push({name:'gallery',params:{dept:route[1]}})">
        GALLERY
      </v-btn>
       </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
    props:['route_path','route'],
    data(){
        return{
            route1:this.route,
            mv: "/mv",
            pl: "/placements",
        }},
}
</script>
<style scoped>
.kk:hover{
    background-color: #dddddd;
}
</style>
