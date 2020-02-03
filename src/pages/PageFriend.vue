<template>
  <q-page>

  	<div >

  		<template>
  			<q-list bordered padding class="q-mb-md">		
				<q-table
					title="My Friends"
					:data="data"
					:columns="columns"
					row-key="name"
					
					>
					
					<template v-slot:body-cell-actions="props">
						<q-td class="q-gutter-x-sm" style="text-align:center">
						<q-btn round outline color="primary" icon="edit" @click="modalEditFriend(props.row)"/>
						<!-- <q-btn round outline color="negative" icon="delete" @click.stop="promptToDelete(props.row.__index, props.row.userid)" /> -->
						</q-td>
					</template>
				</q-table>			
		</q-list>
		<div class="absolute-bottom text-center q-mb-lg no-pointer-events">
  				<q-btn 
  				@click="showAddFriend = true"
  				  round
  				  class="all-pointer-events"
  				  color="primary"
  				  size="24px"
  				  icon="add"
  				/>
  			</div>	
  		</template>

  	</div>

	  <template>
		  <div class="q-gutter-md" style="max-width: 335px">
		   <q-input outlined v-model="fileName" label="File Name" />
		   </div>
		<QFirebaseUploaderBase
			:filename="fileName"
			label="Upload Media"
			:metadata="metadata"
			auto-upload
			@upload="addFile"
			accept=".mp3"
			multiple/>
			<br />
			<q-btn
			to="/listening"
			color="primary"
			icon="people"
			label="Listening Music"
			flat />
	  </template>

		
		<q-dialog v-model="showAddFriend">
		  <add-friend @close="showAddFriend = false" />
		</q-dialog>
		<q-dialog v-model="showEditFriend" persistent>
			<edit-friend 
				@close="showEditFriend = false" 
				:friend="tmpFriendData"
				:id="tmpFriendID" />
		</q-dialog>
		
  </q-page>
</template>

<script>
	import { mapGetters, mapState, mapActions } from 'vuex'
	import { LocalStorage } from 'quasar'

	export default {
		data() {
			return {
				showAddFriend: false,
				showEditFriend:false,
				tmpFriendData:'',
				tmpFriendID:'',
				friendIds:'',
				metadata:{},
				fileName: '',

				columns: [
					{
					name: 'firstName',
					required: true,
					label: 'First Name',
					align: 'left',
					field: row => row.firstName,
					format: val => `${val}`,
					sortable: true
					},
					
					{ name: 'lastName', label: 'Last Name', field: 'lastName', sortable: true },
					{ name: 'email', label: 'Email Address', field: 'email' },
					{ name: 'friendID', label: 'Friend ID', field: 'friendID' },
					{ name: 'actions', field: 'id', label: 'Actions', sortable: false, required: true, align: 'center' }
				
				],
				data:[
					
				],
				
				
			}
		},
		computed: {
			...mapGetters('settings', ['friends']),
			getFriends() {
				console.log("friend", this.friends)
				return {
					friends: Object.values(this.friends),
				}
		
			},
			
		},
		methods: {
		modalEditFriend(friendData) {
			console.log("props", friendData)
				this.tmpFriendData =  friendData;
				this.tmpFriendID = friendData.friendID
				console.log("friendData", this.tmpFriendData, this.tmpFriendID)
				this.showEditFriend = true;
				
			},
		addFile (item) {
			Vue.set(this.gallery, item.id, item)
			// this.save()
		}
		},
		mounted() {
			this.$root.$on('showAddFriend', () => {
				this.showAddFriend = true
			})
			this.data = Object.values(this.friends)
			console.log('d', Object.values(this.friends))
		
		},
		
		watch:{
					
			friends(data){
				console.log("change", data)
				this.friendsIds = Object.keys(this.friends)
				console.log('friendlocation', this.friends)
				this.data = Object.values(this.friends)
				console.log('new dd', Object.values(this.friends))	
			}

		},

		components: {
			'add-friend' : require('components/Friends/AddFriend.vue').default,
			'edit-friend' : require('components/Friends/EditFriend.vue').default,
			'QFirebaseUploaderBase' : require('components/UploadFile/QFirebaseUploaderBase.vue').default,
		}
	}
</script>

<style>
	.q-scroll-area-tasks {
		display: flex;
		flex-grow: 1;
	}
</style>
