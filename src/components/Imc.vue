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
    const calculatedIMC: number = +this.weight / ((+this.height / 100) ** 2);
    const imcToReturn = calculatedIMC.toFixed(2);

    if (calculatedIMC >= 16 && calculatedIMC <= 16.9) {
      return `${imcToReturn} kg/m²: Muito abaixo do peso`;
    }

    if (calculatedIMC >= 17 && calculatedIMC <= 18.4) {
      return `${imcToReturn} kg/m²: Abaixo do peso`;
    }

    if (calculatedIMC >= 18.5 && calculatedIMC <= 24.9) {
      return `${imcToReturn} kg/m²: Peso normal`;
    }

    if (calculatedIMC >= 25 && calculatedIMC <= 29.9) {
      return `${imcToReturn} kg/m²: Acima do peso`;
    }

    if (calculatedIMC >= 30 && calculatedIMC <= 34.9) {
      return `${imcToReturn} kg/m²: Obesidade grau 1`;
    }

    if (calculatedIMC >= 35 && calculatedIMC <= 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 2`;
    }

    if (calculatedIMC > 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 3`;
    }
    
    return '';
  }
}
</script>