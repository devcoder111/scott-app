<template>
  <q-page>

  	<div >

  		<template>
  			<q-list bordered padding class="q-mb-md">		
				<q-table
					title="Listening music"
					:data="data"
					:columns="columns"
					row-key="name"			
					>
					 <template v-slot:body-cell="props">
						<q-td :props="props" @click.native="mediaPlay(props)">
						<div>{{ props.value }}</div>
						</q-td>
					</template>
					
					
				</q-table>			
		</q-list>
		
  		</template>

		  <q-btn
			to="/friends"
			color="primary"
			icon="people"
			label="Back"
			flat />

  	</div>
	
  </q-page>
</template>

<script>
	import { mapGetters, mapState, mapActions } from 'vuex'
	import { LocalStorage } from 'quasar'

	export default {
		data() {
			return {
			
				columns: [
					{
					name: 'filename',
					required: true,
					label: 'File Name',
					align: 'center',
					field: row => row.filename,
					format: val => `${val}`,
					sortable: true
					},
					
					{ name: 'filePath', label: 'File Path', field: 'filePath', align: 'center'},
				
				
				],
				data:[
					
				],
				
				
			}
		},
		computed: {
			...mapGetters('settings', ['files']),
			getFiles() {
				console.log("file", this.files)
				return {
					files: Object.values(this.files),
				}
		
			},
	
			
		},
		methods: {
			mediaPlay(data){
				console.log('mediadata', data)	
				window.open(data.row.downloadurl)
			}
		},
		mounted() {
			
			this.data = Object.values(this.files)
		
		
		},
		
		watch:{
			files(data){
				console.log("change", data)
				this.data = Object.values(this.files)
			}
			
			
		},

		components: {
		
		}
	}
</script>


