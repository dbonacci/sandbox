<template>
  <div>
  	<h1>{{title}}</h1>
  	<baje></baje> 
  </div>
</template>

<script>
import Baje from './Baje.vue'

export default {
	components:{
		'baje': Baje
	},
 	data () {
    	return {
      		title: 'Evo meme među VUEove!'
    	}
  	}  
}
</script>

<style scoped>
h1{
	color:yellow
}
</style>
