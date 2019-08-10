<template>
<v-app>
    <toolbar  :tool_name="title" :show="false"></toolbar>
    <v-layout mt-5></v-layout>
    <v-container class="mb-5">
      <h2 class="mb-5">Message Us !!</h2>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Personal Details & Feedback</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2">Thank You</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class=" elevation-0"
        > 
           <v-flex class="hidden-md-and-up" text-xs-center pt-1 black--text><h3>Personal Details & feedback</h3></v-flex>
           <v-form v-model="valid"  @submit.prevent="submit">
           <v-text-field
          v-model="name"
          class="mx-2 mt-4"
          label="NAME"
          :rules="namerules"
          box
          outline
          required
          flat
          clearable
          prepend-inner-icon="person"
          background-color="blue"
        ></v-text-field>
         <v-text-field
          v-model="gmail"
           class="mx-2"
          :rules="emailRules"
          label="E-mail"
          box
          outline
          required
          flat
          clearable
          prepend-inner-icon="email"
          background-color="blue"
        ></v-text-field>
           <v-textarea
      v-model="message"
      class="mx-2"
      background-color="blue"
      label="Message"
      outline
      :rules="namerules"
      clearable=""
      counter=""
      prepend-inner-icon="message"
      box=""
      aria-required=""
    >
    </v-textarea>
    <v-layout align-center justify-center>
        <v-btn
          color="primary"
          round
          outline
          large
          :disabled="!valid"
          @click="e1 = 2"
          type="submit"
        >
          Submit
        </v-btn>
    </v-layout>
        </v-form>
    </v-card>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="elevation-0"
          height="300px"
        > <v-flex text-xs-center pt-5 black--text><h3>Thanks For Your Feedback !!</h3>
        <p style="color:red">*please check your mail for confirmation*</p>
        <img src="@/assets/cn2.png" height="150" @click="$router.push('/index')" />
        </v-flex>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-container>
<allfooter></allfooter>
</v-app>
</template>

<script>
import toolbar from './toolbar.vue'
import allfooter from './allfooter.vue'
import axios from 'axios'
export default {
  components:{
    toolbar,allfooter
  },
  data(){
      return{
          title: 'CONTACT',
          valid: false,
          gmail: "",
          message: null,
          name: null,
          e1:0,
          namerules: [
                v => !!v || 'Name is required',
                ], 
         emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@skct.edu.in/.test(v) || /.+@gmail.com/.test(v) || 'E-mail must be valid'
        ], 
      }},
      methods: {
        submit : function(){
           var querystring = require('querystring');
           var url = "http://192.168.43.158:8000/feedback/";
           var data = {
             gmail: this.gmail,
             message: this.message,
             name: this.name,
           }
           axios.post(url, querystring.stringify(data));
            },
},
}
</script>

<style scoped>
h2 {
	color: #000;
  font-family: 'Open Sans', sans-serif;
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
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
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
