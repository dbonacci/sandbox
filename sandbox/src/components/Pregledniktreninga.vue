<template>
	<table id="pregledniktreninga">
        <thead>
            <tr>
                <th>datum</th>
                <th>vrijeme</th>
                <th>mjesto</th>
                <th>voditelj</th>
                <th>akcije</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(trening, rbr) in treninzi" v-bind:class="trening.status">
                <td>{{rbr + 1}} . {{trening.datum}}</td>
                <td>{{trening.vrijeme}}</td>
                <td>{{trening.mjesto}}</td>
                <td>{{trening.voditelj}}</td>
                <td>
                    <button v-on:click="" v-show="trening.status != 'upripremi'">otvori</button>
                    <button v-on:click="trening.status = 'upripremi'" v-show="trening.status != 'zakljucan'">uredi</button>
                    <button v-on:click="trening.status = 'objavljen'" v-show="trening.status == 'upripremi'">objavi</button>
                    <button v-on:click="trening.status = 'zakljucan'" v-show="trening.status == 'objavljen'">zaključaj</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
	props:['treninzi'],
	data () {
    	return {
    		
    	}
  	},
  	beforeCreate(){
  		alert('beforeCreate');
  	}
  	,
  	created(){
  		alert('created');
  	},
  	beforeUpdate(){
  		alert('beforeUpdate');
  	},
  	updated(){
  		alert('updated');
  	}

}

</script>

<style scoped>

table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

.zakljucan td{
  color: navy
}

.objavljen td{
  color: green
}

.upripremi {
  color: gold
}

</style>
