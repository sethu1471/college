<template>
  <v-bottom-nav
      :value="true"
      fixed
      height="50"
      class="hidden-md-and-up"
    >
    <div  v-for="(item, index) in items1mob"
                :key="index"
                 >  
                  <v-btn
                  color="blue"
                  flat
                  :to="item.route"
                  style="text-decoration:none;"
                  >
                  <span>{{ item.title }}</span>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
    </div>
    </v-bottom-nav>
</template>

<script>
export default {
    data(){
        return{
           items1mob: [
            { title: "Home", icon: "home",route: "/"},
            { title: "Faculty", icon: "person",route: "/Faculty"},
            { title: "Laboratory", icon: "android",route: "/lab"},
            { title: "Research", icon: "wb_incandescent",route: "/research"},
            { title: "Events", icon: "history",route: "/events"},           
      ],
        }}

}
</script>

