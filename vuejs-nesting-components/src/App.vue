<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <!-- <hr/>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
  },
  data () {
    return {
      ninjas:[
        {name:'Damindu', speciality:'Vue Components', show:false},
        {name:'Sandaruwan', speciality:'HTML Components', show:false},
        {name:'Bandara', speciality:'Java', show:false},
        {name:'DSBandara', speciality:'Laravel', show:false},
        {name:'KGDS', speciality:'Flutter', show:false},
        {name:'BandaraKGDS', speciality:'Data mining', show:false},
      ],
      title:'Vue Ninjas'
    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
