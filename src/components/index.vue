<template>
<v-app>
  <div>
    <!-- <toolbar></toolbar>
    <v-layout mt-4></v-layout> -->
    <div md-and-up class="hidden-sm-and-down">
      <toolbar></toolbar>
      <v-layout mt-4></v-layout>
      <!-- <nav class="navbar navbar-fixed-top navbar-fixed navbar-expand-lg navbar-toggleable-md navbar-toggleable-sm navbar-dark bg-light navigation_bar" style="z-index:100000;position:fixed;color:white;width:100%;padding-top:2px;padding-bottom:2px;background: rgb(27,49,153);background: linear-gradient(90deg, rgba(27,49,153,1) 0%, rgba(27,49,153,1) 50%, rgba(27,49,153,1) 100%);">
        <a href="#" class="navbar-brand"><img src="../assets/cn2.png" width="65"/></a>
        <h4 style="padding-left:5px;">Sri Krishna College of Technology</h4>
        <button class="navbar-toggler navbar-toggler-right mr-2" type="button" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon" style="color:white;font-color:white;"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="myNavbar">
        <ul class="navbar-nav">
          <li class="nav-item active mr-1 pr-2">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="divider"></li>
          <li class="nav-item active mr-1 pr-2">
            <a class="nav-link" href="#">Admission</a>
          </li>
          <li class="nav-item active mr-1 pr-2">
            <a class="nav-link" href="#">Skct @ Glance</a>
          </li>
          <li class="nav-item active mr-1 pr-2">
            <a class="nav-link" href="#">COE</a>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle" id="dropdownMenu" data-toggle="dropdown" role="button">Alumini</a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Events</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Database</a>
            </div>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle" id="dropdownMenu" data-toggle="dropdown" role="button">Academics</a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Under Graduate Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Post Graduate Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Ph.D Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Centre of Excellence</a>
            </div>
          </li>
          <li class="nav-item active mr-1 pr-2">
            <a class="nav-link" href="#">Facilities</a>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle" id="dropdownMenu" data-toggle="dropdown" role="button">About Us</a>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Overview</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Management</a>
            </div>
          </li>
        </ul>
        </div>
      </nav> -->
        <!-- <v-toolbar :height="90" fixed app  class="elevation-1" color="white">
    <v-layout column wrap >
    </v-layout>
    </v-toolbar>  -->
<!--     
<v-toolbar :height="90" fixed app  class="elevation-1" color="white">
    <v-layout column wrap>
    <v-flex text-xs-center xs12 mt-1 md12>
      <img :src="require('@/assets/logo.png')"  width="700">
    </v-flex></v-layout></v-toolbar>     
    <div>
     <v-toolbar flat color="indigo accent-3" v-show="true" dark style="z-index:999;" dense>
       <v-toolbar-title>SKCT</v-toolbar-title>
        <v-divider
            class="mx-3"
            inset
            vertical
            ></v-divider>
     <v-toolbar-items >
       <v-btn class="btn1" flat @click="$router.push('/index')">HOME</v-btn>
            <v-btn class="btn1" flat>ADMISSION</v-btn>
            <v-btn flat class="btn1" @click="$router.push('/facilities')">FACILITIES</v-btn>
            <v-btn class="btn1"  @click="$router.push('/coe')"  flat>COE</v-btn>
            <v-btn flat class="btn1">Skct @ Glance</v-btn>
               <v-menu class="py-5" open-on-hover top offset-y  >
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
                <v-list-tile  class="hover1">
                <v-list-tile-title>EVENTS</v-list-tile-title>
                </v-list-tile>
                <v-list-tile  class="hover1">
                <v-list-tile-title>DATABASE</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
              
            <v-menu class="py-5" open-on-hover bottom>
            <template v-slot:activator="{ on }">
                <v-btn
                flat=""
                v-on="on"
                class="btn1"
                >
                ACADEMICS <v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile @click="$router.push('/')">
                <v-list-tile-title >COMPUTER SCIENCE AND ENGINNERING</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
           <v-menu class="py-5" open-on-hover bottom style="z-index:99999">
               <template v-slot:activator="{ on }">
                  <v-btn
                flat=""
                v-on="on"
                class="btn1"
                >
                ABOUT US<v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list >
               <v-list-tile   @click="$router.push('/overview')">
                <v-list-tile-title>OVERVIEW</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/management')">
                <v-list-tile-title >MANAGEMENT</v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat @click="$router.push('/placememt')" class="btn1">PLACEMENTS</v-btn>
          <v-btn flat @click="$router.push('/contact')" class="btn1">Contact US</v-btn>
       </v-toolbar-items>
      </v-toolbar></div> -->
      <div class="title" style="overflow:visible;">
        <div class="title_1">
          <div class="container">
            <div class="row height-90 align-items-center justify-content-center title_2">
              <div class="col">
                <div class="banner text-center">
                  <center>
                    <div style="padding-bottom:20px;padding-top:120px;">
                      <img class="title_3" data-aos="zoom-in" src="../assets/cn2.png"/>
                    </div>
                  </center>
                  <div style="padding-top:20px;">
                  <span class="title_4" data-aos="zoom-in">
                    <pre data-aos="zoom-in" class="title_5">Sri</pre> 
                    <pre data-aos="zoom-in" class="title_5"> Krishna</pre> 
                    <pre data-aos="zoom-in" class="title_5"> College</pre> 
                    <pre data-aos="zoom-in" class="title_5"> of</pre> 
                    <pre data-aos="zoom-in" class="title_5"> Technology</pre>
                  </span></div>
                  <center>
                    <p class="title_6" style="font-family:'Alegreya', serif;color:yellow;font-size:17px;padding-top:20px;">An Autonomous Institution.Approved by AICTE and Affilated to Anna University</p>
                  </center>
                  <center>
                    <p class="title_6" style="font-family:'Alegreya', serif;color:yellow;font-size:17px;">Accredited by NAAC with 'A' Grade</p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div class="row mr-5 ml-5 mb-2" >
        <div class="col-lg-9" style="height:100%;">
          <div class="announcements_des" >
            <div id="pics" class="announcements_1">
              <center>
                <h1  class=" home" style="padding-top:20px;padding-bottom:0;text-decoration:none">ANNOUNCEMENTS</h1>
              </center>
            </div>
            <div class="announcements_3">
              <v-hover v-slot:default="{ hover }">
                <v-card 
                  elevation="15"
                  max-width="700"
                  class="mx-auto"
                > 
                  <v-carousel sm-and-down height="320" hide-delimiters :interval="4000" :cycle="true">
                    <v-carousel-item
                      v-for="(pic,i) in pics"
                      :key="i"
                      :src="pic.src"
                      style="background-size:cover"
                      class="img-responsive"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text"
                          style="height: 30%;background-color:rgba(255,255,255,0.4);font-size:10px;size:10px;"
                        >
                          <center>
                            <p style="display:inline-block;size:5px;font-size:40px;font-family:'Alegreya',serif;color:black;font-color:black;">{{ pic.des }}</p>
                          </center>
                        </div>
                      </v-expand-transition> 
                    </v-carousel-item>
                  </v-carousel> 
                </v-card>
              </v-hover>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3" style="height:100%;border:2px solid blue;height:450px">
          <div class="achievements_des" id="upcomming_events">
            <div class="achievements_1" style="background-color:blue;">
              <center>
                <h1 class="home" style="padding-top:20px;color:white">Upcoming Events</h1>
              </center>
            </div>
            <md-card>
              <md-card-media class="swiper-inner">
                <div style="padding-top:20px;background-color:#ddd">
                  <swiper :options="swiperOption">
                    <div class="card swiper-slide c-ach" v-for="ev in evs" :key="ev" style="width: 18rem;margin-left:50px;margin-right:50px;height:285px;">
                      <img :src="ev.ev_img" class="card-img-top" alt="..." height="140"/>
                      <div class="card-body">
                        <h5 class="card-title" style="font-family:'Spectral', serif">{{ ev.event }}</h5>
                        <p class="card-text text-muted" style="font-family:'Alegreya',serif;">{{ ev.date }}</p>
                      </div>
                      <div class="card-footer">
                        <a href="#" class="btn btn-link">more</a>
                      </div>
                    </div>
                  </swiper>
                </div>
              </md-card-media>
            </md-card>
          </div>
        </div>
      </div>
      <div class="glance">
          <div class="glance_1">
            <div class="glance_2">
              <center>
                <h1 class="pt-5 home">About SKCT</h1>
              </center>
            </div>
            <div class="glance_8_des row ml-3 mr-3 mb-3">
              <div class="glance_9_des col-lg-2">
                <center>
                  <div class="glance_13">
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="https://www.pngkit.com/png/full/638-6385722_engineering-corruption-icons.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>                 
                  </div><br>
                  <div class="glance_13_mid">
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="https://png.pngtree.com/svg/20170323/graduates__1284205.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>
                    </div><br>
                  <div class="glance_13">
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="https://cdn1.iconfinder.com/data/icons/modern-education-set/64/laboratory-test-lab-medical-biology-research-tube-glass-chemical-512.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
              <div class="glance_10_des col-lg-8 pt-5">
                
                <p data-aos="fade-out" class="glance_12_des" style="text-align:justify;">Sri Krishna College of Technology was instituted in the year 1985-1986. The college is accredited with A Grade by National Assessment and Accreditation Council, Bangalore. The college has been granted autonomous status by UGC during 2011-2012 and approved by AICTE, New Delhi and has a permanent affiliation to Anna University, Chennai. Housed in an area of 51.39 acres with a total built-up area of 1,00,000 sq.m. build up Area. SKCT has a distinctive collegiate structure with exemplary academic buildings, laboratories, library, hostels and play ground where the students experience pleasant and amiable intellectual ambiance.</p>
                <center>
                  <div style="display:inline-block;background-color:#3D5AFE;border-radius:30px;">
                    <div style="display:inline-block;padding-left:20px;padding-right:20px;padding-top:10px;">
                      <h3 style="font-family:'Roboto',sans-serif;color:white;">Counselling Code</h3>
                    </div><br>
                    <div style="display:inline-block;padding-left:20px;padding-right:20px;padding-bottom:10px;">
                      <h3 style="font-size:29px;color:white;">2722</h3>
                    </div>
                  </div>
                </center>
              </div>
              <div class="glance_11_des col-lg-2">
                <center>
                  <div class="glance_13">
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="https://cdn4.iconfinder.com/data/icons/flat-rounded-seo-icons/80/keyword-research-512.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>
                    </div><br>
                  <div class="glance_13_mid">
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="http://cscl.co.in/smart-classrooms-ta/img/cover1.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>
                      </div><br>
                  <div>
                    <div>
                      <div style="display:inline-block">
                        <img data-aos="fade-in" class="glance_14_des" src="https://www.centreofexcellence.com/app/uploads/2017/06/learner-of-the-year-award-icon.png" width="80"/>
                      </div><br>
                      <div style="display:inline-block;padding-top:10px;">
                        <div>
                          <h3 style="display:inline-block;font-family:'Crimson-text',serif">
                            9
                          </h3>
                        </div>
                        <div>
                          <p style="display:inline-block">
                            Departments
                          </p>
                        </div>
                      </div>
                    </div>
                     </div>
                </center>
              </div>
            </div>  
          </div>
        </div>
        <div class="explore mb-5 mt-3 mb-3" style="background-color:#3D5AFE ;padding:10px;padding-bottom:30px">
        <div class="explore_1 mb-5 mt-3">
          <center>
            <h1 class="home" data-aos="fade-in" style="color:white;font-family:'Alegreya',serif;font-size:30px;">Explore Our Campus</h1>
          </center>
        </div>
        <div class="explore_3 row" id="video">
          <div class="explore_4_des col-lg-6" style="text-align:center">
            <iframe src="https://www.youtube.com/embed/vzZTiLQjyBg" class="explore_5" data-aos="fade-in" gesture="media" allow="encrypted-media" allowfullscreeenwidth="560" width="550px" height="315" frameborder="0"></iframe>
          </div>
          <div class="explore_4_des col-lg-6" style="text-align:center;">
            <iframe src="https://www.youtube.com/embed/1Qzr8jDWRVM" class="explore_5" data-aos="fade-in" gesture="media" allow="encrypted-media" allowfullscreeenwidth="560" height="315" width="550px" frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <!-- <div class="placements_des">
        <div class="placements_1">
          <div class="placements_2">
            <center>
              <h1 data-aos="fade-out" class="placements_3">Placements</h1>
            </center>
          </div>
          <div class="placements_4" >
            <h1>
              <span>
                <p class="placements_5_des">902
                  <sup class="placements_6_des">2017-2018</sup>
                </p>
              </span>
              <span>
                <p class="placements_5_des">1051
                  <sup class="placements_6_des">2016-2017</sup>
                </p>
              </span>
              <span>
                <p class="placements_5_des">802
                  <sup class="placements_6_des">2015-2016</sup>
                </p>
              </span>
              <span>
                <p class="placements_5_des">712
                  <sup class="placements_6_des">2014-2015</sup>
                </p>
              </span>
            </h1>
          </div>
        </div>
      </div> -->

      <!-- <div class="top">
        <div class="top_1">
          <div class="top_2">
            <center>
              <h1 data-aos="fade-in" class="top_3">Our Top Recruiters</h1>
            </center>
          </div>
          <div class="top_4">
            <center class="top_5">
              <div class="card top_6">
                <div class="card-body top_7">
                  <div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des" style="opacity:0.99">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/1.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/7.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/19.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/2.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/9.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/27.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/3.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/10.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/28.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/4.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/15.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/29.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                  </div>
                  <div>  
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/5.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/17.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/32.png" style="opacity:0.99" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/31.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/40.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/41.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/44.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/46.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/47.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/50.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/51.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/54.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                  </div>
                  <div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/49.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/43.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/30.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/24.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/18.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/12.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/6.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/8.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/23.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/34.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/45.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/56.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                  </div>
                  <div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/16.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/13.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/36.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/37.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/34.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/25.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/53.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/45.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/42.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                    <div class="top_8">
                      <swiper :options="swiperOption4" class="top_9_des">
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/14.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/35.png" class="img-responsive top_11"/>
                        </div>
                        <div class="swiper-slide otr img-responsive top_10_des">
                          <img src="http://skct.edu.in/PLACEMENT%20SITE/img/icons/39.png" class="img-responsive top_11"/>
                        </div>
                      </swiper>
                    </div>
                  </div> 
                </div>
              </div>
            </center>
          </div>
        </div>
      </div> -->
    </div>
    </div>
    <div sm-and-up class="hidden-md-and-up">
      <nav class="navbar navbar-fixed-top navbar-fixed navbar-expand-lg navbar-toggleable-md navbar-toggleable-sm navbar-dark bg-light navigation_bar" style="z-index:100000;position:fixed;color:white;width:100%;padding-top:2px;padding-bottom:2px;background: rgb(27,49,153);background: linear-gradient(90deg, rgba(27,49,153,1) 0%, rgba(27,49,153,1) 50%, rgba(27,49,153,1) 100%);">
       <a href="#" class="navbar-brand mt-2 mb-2 ml-2"><img src="../assets/cn2.png" width="50"/></a>
      <h3 style="padding-left:5px;left:0">SKCT</h3>
      <button class="navbar-toggler navbar-toggler-right mr-4" style="size:20px;" type="button" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon" style="color:white;font-color:white;size:20px;width:33px;height:33px"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="myNavbar">
        <ul class="navbar-nav">
          <li class="nav-item active ml-4 mr-1 pr-2 mt-2 mb-2">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="divider"></li>
          <li class="nav-item active ml-4 mr-1 pr-2 mt-2 mb-2">
            <a class="nav-link" href="#">Admission</a>
          </li>
          <li class="nav-item active ml-4 mr-1 pr-2 mt-2 mb-2">
            <a class="nav-link" href="#">Skct @ Glance</a>
          </li>
          <li class="nav-item active ml-4 mr-1 pr-2 mt-2 mb-2">
            <a class="nav-link" href="#">COE</a>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle ml-4 mt-2 mb-2" id="dropdownMenu" data-toggle="dropdown" role="button">Alumini</a>
            <div class="dropdown-menu ml-2">
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Events</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Database</a>
            </div>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle ml-4 mt-2 mb-2" id="dropdownMenu" data-toggle="dropdown" role="button">Academics</a>
            <div class="dropdown-menu ml-2">
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Under Graduate Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Post Graduate Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Ph.D Programmes</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Centre of Excellence</a>
            </div>
          </li>
          <li class="nav-item active mr-1 pr-2 ml-4 mt-2 mb-2">
            <a class="nav-link" href="#">Facilities</a>
          </li>
          <li class="nav-item mr-1 pr-2 dropdown">
            <a href="#" class="nav-link active dropdown-toggle ml-4 mb-3 mt-2" id="dropdownMenu" data-toggle="dropdown" role="button">About Us</a>
            <div class="dropdown-menu ml-2">
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1">Overview</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item ml-2 mt-1 mb-1 ">Management</a>
            </div>
          </li>
        </ul>
      </div>
      </nav>
      <!-- <div class="title" style="overflow:visible;">
        <div class="title_1">
          <div class="container">
            <div class="row height-90 align-items-center justify-content-center title_2">
              <div class="col">
                <div class="banner text-center">
                  <center>
                    <div style="padding-bottom:20px;padding-top:120px;">
                      <img class="title_3" data-aos="zoom-in" src="../assets/cn2.png"/>
                    </div>
                  </center>
                  <div style="padding-top:20px;">
                  <span class="title_4" data-aos="zoom-in">
                    <pre data-aos="zoom-in" class="title_5">Sri</pre> 
                    <pre data-aos="zoom-in" class="title_5"> Krishna</pre> 
                    <pre data-aos="zoom-in" class="title_5"> College</pre> 
                    <pre data-aos="zoom-in" class="title_5"> of</pre> 
                    <pre data-aos="zoom-in" class="title_5"> Technology</pre>
                  </span></div>
                  <center>
                    <p class="title_6" style="font-family:'Alegreya', serif;color:yellow;font-size:17px;padding-top:20px;">An Autonomous Institution.Approved by AICTE and Affilated to Anna University</p>
                  </center>
                  <center>
                    <p class="title_6" style="font-family:'Alegreya', serif;color:yellow;font-size:17px;">Accredited by NAAC with 'A' Grade</p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="announcements" style="padding-top:70px;width:100%;" >
        <div id="pics" class="announcements_1">
          <center>
            <h1 data-aos="fade-in" class="announcements_2">Announcements</h1>
          </center>
        </div>
        <div class="announcements_3">
          <v-card 
            elevation="24"
            max-width="90%"
            class="mx-auto"
          >
            <v-carousel sm-and-down height="250" hide-delimiters :show-arrows="false" :interval="2000" :cycle="true">
              <v-carousel-item
                v-for="(pic,i) in pics"
                :key="i"
                :src="pic.src"
                style="background-size:cover"
                class="img-responsive"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        
        </div>
      </div>
      <div class="achievements ml-2 pr-3" id="upcomming_events">
        <div class="achievements_1">
          <center>
            <h1 data-aos="fade-in" class="achievements_2">Upcoming Events</h1>
          </center>
        </div>
        <md-card>
          <md-card-media class="swiper-inner">
            <div style="padding-top:20px;">
              <swiper :options="swiperOption">
                <div class="card swiper-slide c-ach" v-for="ev in evs" :key="ev" style="width: 18rem;height:283px;margin-left:20px;margin-left:20px;">
                  <img :src="ev.ev_img" class="card-img-top" alt="..." height="140"/>
                  <div class="card-body">
                    <h5 class="card-title" style="font-family:'Spectral', serif">{{ ev.event }}</h5>
                    <p class="card-text text-muted" style="font-family:'Alegreya',serif;">{{ ev.date }}</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-link">more</a>
                  </div>
                </div>
              </swiper>
            </div>
          </md-card-media>
        </md-card>
      </div>
      <div class="explore ml-3 mr-3">
        <div class="explore_1">
          <center>
            <h1 class="explore_2 mt-3 mb-5" data-aos="fade-in" style="text-decoration:underline;font-family:'Open sans',sans-serif;font-size:30px;">Explore Our Campus</h1>
          </center>
        </div>
        <div class="explore_3" id="video" style="text-align:center">
          <div class="explore_4">
            <iframe src="https://www.youtube.com/embed/vzZTiLQjyBg" class="explore_5 p-2" data-aos="fade-in" gesture="media" allow="encrypted-media" allowfullscreeenwidth="560" height="315" frameborder="0"></iframe>
          </div>
          <div class="explore_4">
            <iframe src="https://www.youtube.com/embed/1Qzr8jDWRVM" class="explore_5 p-2" data-aos="fade-in" gesture="media" allow="encrypted-media" allowfullscreeenwidth="560" height="315" frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div class="glance">
        <div class="glance_1">
          <div class="glance_2">
            <center>
              <h1 data-aos="fade-in" class="glance_3 ml-2 mr-2">SKCT @ Glance</h1>
            </center>
          </div>
          <div id="counter" class="glance_4">
            <div class="text-xs-center">
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e1"
                      :options="o1"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" class="glance_7" style="font-size:20px">Departments</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e2"
                      :options="o2"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">yrs of existence</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e3"
                      :options="o3"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Smart Classrooms</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e4"
                      :options="o4"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Students</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e5"
                      :options="o5"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Graduates</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e6"
                      :options="o6"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Laboratories</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e7"
                      :options="o7"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Centres of Excellence</p>
                  </span>
                </div>
              </span>
              <span class="counter">
                <div class="iCountUp glance_5">
                  <span class="glance_6" style="font-size:35px;">
                    <ICountUp
                      :delay="1000"
                      :endVal="e8"
                      :options="o8"
                      @ready="onReady"
                    />
                  </span>
                  <br>
                  <span>
                    <p data-aos="fade-in" style="font-size:20px" class="glance_7">Research Centers</p>
                  </span>
                </div>
              </span>
            </div>
          </div>
          <div>
            <p data-aos="fade-in" class="glance_12" style="text-align:justify;">Sri Krishna College of Technology was instituted in the year 1985-1986. The college is accredited with A Grade by National Assessment and Accreditation Council, Bangalore. The college has been granted autonomous status by UGC during 2011-2012 and approved by AICTE, New Delhi and has a permanent affiliation to Anna University, Chennai. Housed in an area of 51.39 acres with a total built-up area of 1,00,000 sq.m. build up Area. SKCT has a distinctive collegiate structure with exemplary academic buildings, laboratories, library, hostels and play ground where the students experience pleasant and amiable intellectual ambiance.</p>
          </div>
          <center><div style="display:inline-block;background-color:rgba(0,0,0,0.5);border-radius:20px;"><div style="display:inline-block;padding-left:20px;padding-right:20px;padding-top:10px;"><h3 style="font-family:'Open sans',sans-serif;color:white;">Counselling Code</h3></div><br><div style="display:inline-block;padding-left:20px;padding-right:20px;padding-bottom:10px;"><h3 style="font-family:'Crimson-text',serif;color:white;">2722</h3></div></div></center>  
        </div>
      </div>
      <div class="placements">
        <div class="placements_1">
          <div class="placements_2">
            <center>
              <h1 data-aos="fade-in" class="placements_3">Placements</h1>
            </center>
          </div>
          <div class="placements_4" >
            <h1>
              <span>
                <p class="placements_5">902
                  <sup>2017-2018</sup>
                </p>
              </span>
              <span>
                <p class="placements_5">1051
                  <sup>2016-2017</sup>
                </p>
              </span>
              <span>
                <p class="placements_5">802
                  <sup>2015-2016</sup>
                </p>
              </span>
              <span>
                <p class="placements_5">712
                  <sup>2014-2015</sup>
                </p>
              </span>
            </h1>
          </div>
        </div>
    </div>
    </div>
    
    <div class="association mb-3">
        <div class="association_1">
          <div class="association_2">
            <center  data-aos="fade-in">
              <h1 class="home pt-2">In Association With</h1>
            </center>
          </div>
          <div class="association_6">
            <md-card>
              <md-card-media class="swiper-inner">
            <swiper :options="swiperOption5">
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/1.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/2.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/3.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/4.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/5.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/6.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/7.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/8.png" class="img-responsive association_5"/></div>
              <div class="association_4 swiper-slide"><img src="http://skct.edu.in/img/brand/9.png" class="img-responsive association_5"/></div>
            </swiper>
              </md-card-media>
            </md-card>
          </div>
        </div>
    </div>
    <allfooter></allfooter>
  </div>
</v-app>
</template>
<script>
import allfooter from './allfooter'
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper.js';
import { swiper,swiperSlide } from 'vue-awesome-swiper';
import ICountUp from 'vue-countup-v2';
import toolbar from './toolbar';
import $ from 'jquery';

export default{
  data:() => ({
    pics: [
          {
            src: 'http://skct.edu.in/img/slider/nirf.jpg',
            des:'NIRF Ranking'
          },
          {
            src: 'http://skct.edu.in/img/slider/collegeday.jpg',
            des:'College day celebration'
          },
          {
            src: 'http://skct.edu.in/img/slider/graduation.jpg',
            des:'Graduation day'
          },
          {
            src: 'http://skct.edu.in/img/slider/It-team-new.jpg',
            des:'New IT team'
          }
      ],
    evs: [
        {ev_img:"https://cdn.pixabay.com/photo/2016/05/30/18/27/workshop-1425446__340.jpg",date:"Oct 13",event:"Workshop"},
        {ev_img:"https://hackernoon.com/hn-images/1*AXF8IYKqC3Y7JxYRaUrCPQ.png",date:"Aus 20",event:"Hackathon"},
        {ev_img:"https://cdn.pixabay.com/photo/2016/05/30/18/27/workshop-1425446__340.jpg",date:"Dec 1",event:"Workshop"},
      ],
      a:false,
    swiperOption: {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        }
      },
      swiperOption4:{
        grabCursor:true,
        effect:'flip',
        loop:true,
        autoplay:{
          delay:1500,
          disableOnInteraction:false,
        }
      },
      swiperOption5:{
        grabCursor:true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        }
      },
      e1:9,
      e2:32,
      e3:84,
      e4:4000,
      e5:15000,
      e6:140,
      e7:9,
      e8:4,
      delay: 20000,
      o1: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
      o2: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'',  
      },
      o3: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'',       
      },
      o4: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'+',        
      },
      o5: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'+',        
      },
      o6: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'+',        
      },
      o7: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'',        
      },
      o8: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix:'',    
      },
  }),
  components:{
    swiper,
    swiperSlide,
    ICountUp,allfooter,toolbar
  },
}
</script>
<style scoped>
  .achievements_des,.announcements_des,.explore,.explore_1,.explore_3,.placements_des,.events_des,.top_4,.top_2,.explore_1{
  margin:0;
  padding:0;
  border:0;
}
.ic:hover{
  z-index:1000;
  size:20px;
}
.html{
  scroll-behavior: smooth;
}
@media screen and (max-width:960px){
  *{
    margin:0;
    padding:0;
  }
}
.nav-item:hover{
  background-color:rgba(27,49,153,0.4);
  color:rgba(27,49,153,0.4);
}
.nav-link:hover{
  color:orange;
}
.nav-link{
  color:white;
  font-size:18px;
}
.dropdown:hover .dropdown-menu{
  display:block;
}
.dropdown-item:hover{
  background-color: #ddd;
}
.title{
  background:url('http://skct.edu.in/SKCT-S&H/images/slider/1.jpg');
  text-align:center;
  padding-top:0px;
  padding-bottom:0px;
  min-height:calc(100vh - 0px);
  width:100%;
  height:100%;
  margin-bottom:0;
  position:relative;
  height:100%;
  background-attachment:fixed
}
.title_1{
  min-height:calc(100vh-0px);
  height:100%;height:100vh;
  width:100%;
  background: rgb(7,19,222);
  background: linear-gradient(146deg, rgba(7,19,222,0.8475140397956058) 0%, rgba(50,116,219,0.63246459575) 100%);
}
.title_2{
  min-height:calc(100vh - 250px);
}
.title_3{
  z-index:99;
  width:200px;
}
.title_4{
  font-family:'Josefin Sans', sans-serif;
}
.title_5{
  display:inline-block;
  color:rgb(193, 237, 255);
  font-size:50px;
  animation:title_animation;
  animation-duration:3s;
  animation-delay:0;
  font-weight:bold;
  font-family:'Josefin Sans', sans-serif;
}
@keyframes title_animation{
  0%{
    opacity:0;
  }
  50%{
  }
  100%{
    opacity:1;
  }
}
.title_5_alt{
  display:inline-block;
  color:rgb(193, 237, 255);
  font-size:37px;
  animation:title_animation;
  animation-duration:3s;
  animation-delay:0;
  font-weight:bold;
  font-family:'Josefin Sans', sans-serif;
}
.title_6{
  font-family:'Alegreya', serif;
  color:yellow;
  font-size:17px;
}
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .9;
position: absolute;
width: 100%;
color:black;
text-size-adjust: 20px;
font-family: 'Alegreya', serif;
}
.swiper-wrapper{
  padding:20px;
}
.swiper-slide{
  flex-shrink:0;
  position:relative;
  transition-property: -webkit-transform;
}
.announcements{
  padding-top:0px;
  padding-bottom:0px;
  height:100%;
  width:100%;
  
}
.announcements_des{
  padding-top:0px;
  padding-bottom:0px;
  height:100%;
  width:90%;
  display:inline-block;
  
}
.announcements_1{
  padding-top:20px;
  padding-bottom:20px;
  } 
.announcements_2{
  font-family: 'Roboto Slab', serif;
  color: #000;
  font-size:30px;
  text-decoration: none;
  
}
.announcements_3{
  padding-top:20px;
  padding-bottom:20px;
  height:100%;
  
} 
.achievements{
  padding-top:0;
  padding-bottom:30px;
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
  width:100%;
 
}
.achievements_1{
  padding-top:16px;
  padding-bottom:16px;
 
}
.achievements_2{
  padding-bottom:8px;
  font-family:'Open sans',sans-serif;
  font-size:30px;
  font-weight:0;
  color:#000;
  text-decoration:underline;
  
}
.glance{
  height:100%;
  
}
.glance_1{
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,0.01);
}

.glance_3{
  padding-top:20px;
  padding-bottom:20px;
  font-family:'Open sans', sans-serif;
  color:#000;
  font-size:30px;
  text-decoration:underline;
  
}
.glance_4{
  display:block;
  padding-top:30px;
  padding-bottom:30px;
  height:100%;
  margin-left:10px;
  margin-right:10px;
}
.glance_5{
  display:inline-block;
  padding:5px;
}
.glance_6{
  color:rgb(70,196,222);
  font-family: 'Crimson Text', serif;
  font-size:40px;
}
.glance_7{
  font-size:25px;
  
  color:#000;
  font-family:'Roboto', sans-serif;
}
.glance_8_des{
  width:100%;
  height:100%;
  padding-top:20px;
  padding-bottom:20px;
}
.glance_9_des{
  width:25%;
  display:inline-block;
  height:100%;
}
.glance_10_des{
  width:50%;
  display:inline-block;
}
.glance_11_des{
  width:25%;
  height:100%;
  display:inline-block;
}
.glance_12_des{
  font-family:'Roboto',sans-serif;
  font-size: 23px;
  line-height: 40px;
  text-indent:200px;
  /* color:white; */
  color:#000;
  padding-top:20px;
}
.glance_12{
  font-family:'Roboto',sans-serif;
  font-size: 17px;
  /* color:white; */
  color:#000;
  padding:20px;
}
.glance_13_mid{
  padding-top:20px;
  padding-bottom:20px;
}
.glance_14_des:hover{
  animation: shake 0.5s;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.placements{
  height:100%;
  position:relative;
  width:100%;
}
.home{
	color: #000;
  font-family: 'Roboto Slab', serif;
	font-size: 26px;
	font-weight: 350;
	text-align: center;
	text-transform: uppercase;
	position: relative;
	margin: 0 0 0;
}
.home::after {
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
.placements_des{
   height:100%;
  position:relative;
  width:100%;
  
  display:inline-block;
  
}
.placements_1{
  
  height:100%;
}

.placements_3{
  padding-top:20px;
  padding-bottom:20px;
  font-family:'Alegreya', serif;
  text-decoration:underline;
  
  color:#000;
}
.placements_4{
  text-align:center;
  padding-top:40px;
  padding-bottom:20px;
  padding-left:20px;
  padding-right:20px;
}
.placements_5{
  display:inline-block;
  font-family: 'Crimson Text', serif;
  font-size:30px;
  padding:10px;
}
.placements_5_des{
  display:inline-block;
  font-family: 'Crimson Text', serif;
  font-size:48.534997941px;
  padding:10px;
}
.placements_6_des{
  font-size:35px;
}
.top{
 
  height:100%;
  position:relative;
  width:100%;
  
}


.top_3{
  padding-top:20px;
  padding-bottom:20px;
  font-family:'Alegreya', serif;
  text-decoration: underline;
  
  color:#000;
}
.top_4{
 
  height:100%;
  width:100%;
  background-attachment:fixed;
}


.top_8{
  display:inline-block;
}
.top_9{
  height:100%;
  width:90px;
}
.top_9_des{
  height:100%;
  width:130px;
}
.top_10_des{
  height:110px;
  width:130px;
  display:inline-block;
  padding-left:5px;
  padding-right:5px;
  padding-bottom:5px;
  padding-top:5px; 
}
.top_10{
  height:90px;
  width:90px;
  display:inline-block;
  padding-left:5px;
  padding-right:5px;
  padding-top:2px;
  padding-bottom:2px;
}
.top_11{
  height:100%;
  width:100%;
}
.association_3{
  padding-top:30px;
  padding-bottom:10px;
  font-family:'Alegreya',serif;
  font-size:30px;
  text-decoration:underline;
}
.association_4{
  display:inline-block;
  height:150px;
  width:200px;
  padding:20px;
}
.association_5{
  padding:20px;
}
/* .explore{
  height:100%;
 background-color:rgba(7, 144, 209, 0.4675465); 
  width:100%;
  background-attachment:fixed;
}

.explore_2{
  padding-top:20px;
  padding-bottom:20px;
  font-family:'Alegreya', serif;
  color:#000;
  text-decoration:underline;
  
}
.explore_3{
  padding-top:30px;
  height:0px;
  position:relative;
  padding-bottom:30px;
  display:block;
  height:100%;
  
}
.explore_4{
  width:100%;
  text-align:center;
}
.explore_4_des{
  display:inline-block;
  text-align:center;
}
.explore_5{
  padding:10px;
} */
</style>
