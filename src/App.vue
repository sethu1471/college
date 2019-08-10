<template>
  <div id="app" class="disableselect">
    <router-view/>
    {{ route }}
  </div>
</template>

<script>
// import jQuery from 'jquery'
// jQuery(document).ready(function(){
//   jQuery(function() {
//         jQuery(this).bind("contextmenu", function(event) {
//             event.preventDefault();
//             // alert('oops!! right click is disabled')
//         });
//     });
// });
export default {
  name: 'App',
  data(){
    return{
      route:"",
    }},
}
</script>
<style>
.disableselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge*/
   user-select: none;          /* Non-prefixed version, currentl not supported by any browser */
}
</style>


