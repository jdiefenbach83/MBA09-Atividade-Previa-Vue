<template>
  <div class="row">
    <form class="col s8">
      <div class="row">       
        <div class="input-field col s4">
          <input 
            id="height" 
            name="height" 
            type="number" 
            class="validate" 
            min="0" 
            step="any"            
            v-model="height"
          />
          <label 
            for="height"
            class="active"
          >Altura (cm)</label>
        </div>
        <div class="input-field col s4">
          <input 
            id="weight" 
            name="weight" 
            type="number" 
            class="validate" 
            min="0" 
            step="any"
            v-model="weight"            
          />
          <label 
            for="weight"
            class="active"
          >Peso (kg)</label>
        </div>        
      </div>
      <div class="row">
        <div class="input-field col s8">
          <input 
            disabled 
            name="result" 
            id="result" 
            type="text" 
            class="validate" 
            :value="calculateIMC"
          />
          <label 
            for="result"
            class="active"
          >IMC</label>
        </div>        
      </div>        
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Imc extends Vue {
  private height = '';
  private weight = '';
  
  get calculateIMC(): string {
    const imc: number = +this.weight / ((+this.height / 100) ** 2);
    const imcToReturn = imc.toFixed(2);

    if (imc >= 16 && imc < 17) {
      return `${imcToReturn} kg/m²: Muito abaixo do peso`;
    }

    if (imc >= 17 && imc < 18.5) {
      return `${imcToReturn} kg/m²: Abaixo do peso`;
    }

    if (imc >= 18.5 && imc < 25) {
      return `${imcToReturn} kg/m²: Peso normal`;
    }

    if (imc >= 25 && imc < 30) {
      return `${imcToReturn} kg/m²: Acima do peso`;
    }

    if (imc >= 30 && imc < 35) {
      return `${imcToReturn} kg/m²: Obesidade grau 1`;
    }

    if (imc >= 35 && imc <= 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 2`;
    }

    if (imc > 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 3`;
    }
    
    return '';
  }
}
</script>