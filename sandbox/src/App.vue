<template>
	<div>
		<app-zaglavlje></app-zaglavlje>
		<app-preglednik v-bind:treninzi="treninzi"></app-preglednik>
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
    		treninzi: [
				{
	     			datum: "2018-05-01", 
		        	vrijeme: "08:00", 
		        	mjesto: 'Svetice', 
	    	    	voditelj: "Viktor Bankin",
	        		status: "zakljucan"
		    	},
		    	{
	    	    	datum: "2018-05-02", 
	        		vrijeme: "16:00", 
	        		mjesto: 'Svetice', 
		        	voditelj: "Viktor Bankin",
		        	status: "objavljen"
	    		},
		    	{
		        	datum: "2018-05-02", 
	    	    	vrijeme: "16:00", 
	        		mjesto: 'Svetice', 
	        		voditelj: "Viktor Bankin",
		        	status: "upripremi"
		    	},
	    		{
	        		datum: "2018-05-02", 
	        		vrijeme: "16:00", 
		        	mjesto: 'Svetice', 
		        	voditelj: "Lucija Kolić",
	    	    	status: "upripremi"
	    		}
			]
    	}
  	}  
}
</script>

<style scoped>
h1{
	color:yellow
}
</style>
