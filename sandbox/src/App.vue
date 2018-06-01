<template>
	<div>
		<app-zaglavlje></app-zaglavlje>
		<app-preglednik>			
		</app-preglednik>
		<app-podnozje></app-podnozje>
	</div>
</template>

<script>
import Zaglavlje from './components/Zaglavlje.vue';
import Preglednik from './components/Pregledniktreninga.vue';
import Podnozje from './components/Podnozje.vue';

export default {
	components:{
		'app-zaglavlje': Zaglavlje,
		'app-preglednik': Preglednik,
		'app-podnozje': Podnozje
	},
 	data () {
    	return {    		
    	}
  	}  
}
</script>

<style scoped>
h1{
	color:yellow
}
</style>
