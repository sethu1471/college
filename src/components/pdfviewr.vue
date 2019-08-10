<template>
<div>
       <v-btn
          large
          class="ml-4"
          fixed=""
          flat
          fab
        >
        <img src="@/assets/cn2.png" height="110">
        </v-btn>

    <v-layout mt-2 align-center justify-center  >
<div style="border:solid 2px blue;overflow:hidden;width:850px;height:740px">
<iframe  oncontextmenu="window.alert('All Rights Reserved &copy;');return false;"  style="margin-top:-60px;" target="_blank" src="http://skct.edu.in/SKCT-CSE/docs/department%20achivement.pdf" type="pdf/document" frameborder="0" scrolling="auto" height="810" width="850" >
</iframe></div>
</v-layout>

</div>
</template>

<script>
export default {
    data(){
        return{
            url: 'https://docs.google.com/viewer?url=skct.edu.in/SKCT-CSE/docs/staff/dhivyapraba.pdf',
        }
    },
   
}
</script>

<style scoped>
</style>
