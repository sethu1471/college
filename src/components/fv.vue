<template>
<div>
  <!-- phase 1 -->
  <div style="border-top: 5px solid orange;">
    <!-- phase 1 mobile -->
  <v-footer
    height="auto"
    class="mb-5 hidden-md-and-up"
    color="indigo accent-2"
  >
      <v-layout
      justify-center
      row
      wrap
    >
        <v-flex
        pb-2 pt-4 px-5
        text-xs-center
        white--text
        xs12
      >
           <h2>HEAD OF THE DEPARTMENT</h2>    
            {{ hod_name }},<br />
            HOD - {{ hod_dept }},<br />
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
             EMAIL: {{ hod_email }} <br />
              PHONE: {{ hod_no }}<br />
        </v-flex>  
        <v-flex>
        <v-divider></v-divider>  
        </v-flex>   
      <v-flex
       indigo accent-4
        py-3
        text-xs-center
        white--text
        xs12
      >
      <v-divider></v-divider>
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
    <!-- phase 1 computer -->
  <v-footer
    height="auto"
    class="hidden-sm-and-down"
    color="indigo accent-3"
  >
      <v-layout
      justify-center
      row
      wrap
    >
        <v-flex
        pb-2 pt-4 px-5
        text-xs-center
        white--text
        xs12
      >
          <h2>HEAD OF THE DEPARTMENT</h2>    
            {{ hod_name }},<br />
            HOD - {{ hod_dept }},<br />
            Sri Krishna College Of Technology,<br />
            Kovaipudur,<br />
            Coimbatore-42.<br />
            <br />
            EMAIL: {{ hod_email }} <br />
            PHONE: {{ hod_no }}<br />
        </v-flex>  
        <v-flex>
        <v-divider></v-divider>  
        </v-flex>   
      <v-flex
        py-2
        text-xs-center
        white--text
        xs12
      >
      <v-divider></v-divider>
        <strong>Copyright © 2019 SKCT</strong>
      </v-flex>
      </v-layout>
  </v-footer>
  </div>
     <!-- end of all phase -->
  </div>
</template>

<script>
export default{
  props:[ 'hod_name', 'hod_dept', 'hod_email', 'hod_no'],
}
</script>