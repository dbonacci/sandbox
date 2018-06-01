<template>
	<div>
	<input type="text" v-model="lokacija" placeholder="filtriraj lokaciju"/>
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
<!--
            <tr v-for="(trening, rbr) in treninzi" v-bind:class="trening.status">
                <td>{{rbr + 1}} . {{trening.datum}}</td>
                <td>{{trening.vrijeme}}</td>
                <td>{{trening.mjesto}}</td>
                <td>{{trening.voditelj}}</td>
                <td>                
-->
 			<tr v-for="(trening, rbr) in treninziNaLokaciji">
                <td>{{trening.trening_termin | formatDate}}</td>
                <td>{{trening.trening_termin | formatTime}}</td>
                <td>{{trening.trening_geolokacija.lokacija}}</td>
                <td>{{trening.oib_voditeljtreninga | stringify}}</td>
                    <button v-on:click.prevent="" v-show="trening.status != 'upripremi'">otvori</button>
                    <button v-on:click.prevent="trening.status = 'upripremi'" v-show="trening.status != 'zakljucan'">uredi</button>
                    <button v-on:click.prevent="trening.status = 'objavljen'" v-show="trening.status == 'upripremi'">objavi</button>
                    <button v-on:click.prevent="trening.status = 'zakljucan'" v-show="trening.status == 'objavljen'">zaključaj</button>
                	<button v-on:click.prevent="obrisiTrening">obriši</button>
                </td>
            </tr>
            <tr class="dodaj">
            	<td></td>
            	<td></td>
            	<td></td>
            	<td></td>
            	<td>
            		<button v-on:click.prevent="dodajTrening">dodaj</button>
            	</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
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
			],
			test: [],
			lokacija: ''
    	}
  	},
  	methods:{
  		dodajTrening: function(){
  			this.$http.get('http://localhost:3000/todos',{
  			}).then(function(podaci){
  				console.log(podaci);
  			})
  		}
  	},
  	created(){
  		this.$http.get('http://localhost:3001/trening',{
  		}).then(function(podaci){
  			this.test = podaci.body;
  		})
  	},
  	computed:{
  		treninziNaLokaciji: function(){
  			return this.test.filter((tr) => {
  				return tr.trening_geolokacija.lokacija.toLowerCase().match(this.lokacija.toLowerCase());
  			});
  		}
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

.dodaj {
	background: lightgray;
}

</style>
