<template>
  <q-card style="min-width: 300px">
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="text-h6">Add Friend</div>
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
        <q-btn flat label="Add Friend" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
	import { mapGetters, mapActions, mapState } from 'vuex'
	import EventBus from './../../pages/event-bus';
	export default {
		
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
			...mapActions('settings', ['addFriend']),
			
			submiFriend() {
				this.addFriend(this.friendToSubmit)
				this.$emit('close')			
			},
			submitForm() {  
				this.submiFriend()
				
            }
		},
		computed: {
			
		
		},
	}
</script>