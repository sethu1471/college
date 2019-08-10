import Vue from 'vue'
import Router from 'vue-router'
import dp from '@/components/dp.vue'
import research from '@/components/research.vue'
import Faculty from '@/components/Faculty.vue'
import events from '@/components/events.vue'
import lab from '@/components/lab.vue'
import contact from '@/components/contact.vue'
import gallery from '@/components/gallery.vue'
import event_page from '@/components/event_page.vue'
import coe from '@/components/coe.vue'
import index from '@/components/index.vue'
import curriculam from '@/components/curriculam.vue'
import overview from '@/components/overview.vue'
import facilities from '@/components/facilities.vue'
import pdfviewr from '@/components/pdfviewr.vue'
import placement from '@/components/placement.vue'
import club from '@/components/club.vue'
import bp from '@/components/bp.vue'
import admission from '@/components/admission'
import database from '@/components/alumini/database'
import placements from '@/components/placements.vue'
import management from '@/components/management.vue'
import placement_mem from '@/components/placement_mem.vue'
import student_council from '@/components/student_council.vue'
import quality_circle from '@/components/quality_circle.vue'
import skct_digest from '@/components/skct_digest.vue'
import center_of_excelence from '@/components/center_of_excelence.vue'
import academic_calander from '@/components/academic_calander.vue'

Vue.use(Router);
Vue.prototype.urlname = "";

export default new Router({
  routes: [
    // HOME
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Admission',
      name: 'admission',
      component:admission
    },
    {
      path: '/Facilities',
      name: 'facilities',
      component: facilities
    },
    {
      path: '/coe',
      name: 'coe',
      component: coe
    },
    {
      path: '/Student Council',
      name: 'student_council',
      component:student_council
    },
    {
      path: '/Center Of Excelence',
      name: 'center_of_excelence',
      component:center_of_excelence
    },
    {
      path: '/Quality Circle',
      name: 'quality_circle',
      component:quality_circle
    },
    {
      path: '/Academic calender',
      name: 'academic_calander',
      component:academic_calander
    },
    {
      path: '/Skct Digest',
      name: 'skct_digest',
      component:skct_digest
    },
    {
      path: '/alumini/database',
      name: 'database',
      component:database
    },
    {
      path: '/Placement',
      name: 'placement',
      component: placement
    },
    {
      path: '/Overview',
      name: 'overview',
      component:overview
    },
    
    {
      path: '/Management',
      name: 'management',
      component: management
    },
    
    // DEPARTMENTS
    {
      path: '/:dept/home',
      name: 'dp',
      component: dp,
    },
    {
      path: '/:dept/faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/:dept/academics',
      name: 'curriculam',
      component: curriculam
    },
    {
      path: '/:dept/best',
      name: 'bp',
      component:bp
    },
    {
      path: '/:dept/placements',
      name: 'placements',
      component: placements
    },
    {
      path: '/placementyear',
      name: 'placement_mem',
      component:placement_mem
    },
    {
      path: '/:dept/club',
      name: 'club',
      component: club
    },
    {
      path: '/:dept/research',
      name: 'research',
      component: research
    },
    {
      path: '/:dept/lab',
      name: 'lab',
      component: lab
    },
    {
      path: '/:dept/events',
      name: 'events',
      component: events
    },
    {
      path: '/events/:pk',
      name: 'event_page',
      component: event_page
    },
    {
      path: '/:dept/gallery',
      name: 'gallery',
      component: gallery
    },

    // CONTACT
    {
      path: '/Contact',
      name: 'contact',
      component: contact
    }, 

    // PDFVIEWER
    {
      path: '/Pdf',
      name: 'pdfviewr',
      component: pdfviewr
    },
  ]
});
