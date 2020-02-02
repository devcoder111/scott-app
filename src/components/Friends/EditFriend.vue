<template>
  <q-card style="min-width: 300px">
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="text-h6">Edit Friend</div>
      </q-card-section>

      <q-card-section>
        <q-input outlined  label="First Name" placeholder="First Name"  v-model="friendToSubmit.firstName" autofocus :rules="[val => !!val || 'Field is required']" ref="firstName"/>
      </q-card-section>
      <q-card-section>
        <q-input outlined  label="Last Name" placeholder="Last Name"  v-model="friendToSubmit.lastName" :rules="[val => !!val || 'Field is required']"/>
      </q-card-section>
      <q-card-section>
        <q-input outlined  label="Email" placeholder="Email" v-model="friendToSubmit.email" :rules="[val => !!val || 'Field is required']"/>
      </q-card-section>
  
    

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Edit Friend" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
	import { mapGetters, mapActions, mapState } from 'vuex'
	// import EventBus from './../../pages/event-bus';
	export default {
		props:['friend', 'id'],
		data() {
			
			return {
				friendToSubmit : {
					firstName:'',
					lastName:'',
					email:'',
					
				}
			}
		},
		methods: {
			...mapActions('settings', ['updateFriend']),
			submitFriend() {
				
				this.updateFriend({
					id: this.id,
					updates: this.friendToSubmit
				})
				this.$emit('close')			
			},
			submitForm() {  
				this.submitFriend()
				// this.$refs.name.validate()
				// if (!this.$refs.name.hasError) {
				// 	this.submitLocation()
				// 	console.log("this", this)
				// 	this.$emit('close')
				// 	EventBus.$emit('EVENT_NAME', this.locations);
				// }
            }
			},
		mounted() {
			console.log("friend", this.friend, this.id)
				this.friendToSubmit.firstName = this.friend.firstName
				this.friendToSubmit.lastName = this.friend.lastName
				this.friendToSubmit.email = this.friend.email
		},
		watch:{
			friend(data) {
				console.log("watchfriend", data)
				this.friendToSubmit.firstName = this.friend.firstName
				this.friendToSubmit.lastName = this.friend.lastName
				this.friendToSubmit.email = this.friend.email
				
			}
			
		},
		computed: {
			
		
		},
	}
</script>