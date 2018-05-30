<template>
  <footer>  
  	<p>{{copyright}}</p>
  </footer>
</template>

<script>
import {bus} from '../main';

export default {
 	data() {
    	return {
    		copyright: 'VoxPopuli j.d.o.o - sva prava pridržana'
    	}
  	}  
}
</script>

<style scoped>
footer{
	background: #222;
	padding: 6px;
}

p{
	color: lightgreen;
	text-align: center;
}

</style>
