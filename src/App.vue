<template>
  <div id="app">
    <imc />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Imc from './components/Imc.vue';

@Component({
  components: {
    Imc,
  },  
})
export default class App extends Vue {}
</script>