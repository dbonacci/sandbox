<template>
	<div>
		<h1>Koji baja ima jaja?</h1>
		<ul>
			<li v-for="baja in baje">{{baja}}</li>		
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
      baje: ['Mate', 'Ante', 'Kate', 'Roki je najjači']
    }
  } 
}
</script>

<style scoped>

h1{
	color:red;
}
</style>
