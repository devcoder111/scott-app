<template>
	<div>
		<form @submit.prevent="submitForm">
			<div class="row q-mb-md">
				<q-banner class="bg-grey-3 col">
				<template v-slot:avatar>
					<q-icon name="account_circle" color="primary" />
				</template>
				{{ tab | titleCase }} to access your Todos anywhere!
				</q-banner>
			</div>
			<div class="row q-mb-md">
				<q-input
					v-model="formData.email"
					:rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
					ref="email"
					lazy-rules
					outlined
					class="col"
					label="Email"
					stack-label />
			</div>
			<div class="row q-mb-md">
				<q-input
					v-model="formData.password"
					:rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"
					ref="password"
					lazy-rules
					type="password"
					outlined
					class="col"
					label="Password"
					stack-label />
			</div>
			<div class="row">
				<q-space />
				<q-btn
					color="primary"
					:label="tab"
					type="submit" />
			</div>
		</form>
		
		<div>
			<button v-if="tab=='login'" style="background: url('assets/google_logo.png') no-repeat; width: 194px; height: 50px; display: block; margin: auto;" @click="signInWithGoogle">Sign In With Google</button>
			<button v-if="tab=='register'" style="background: url('assets/google_logo.png') no-repeat; width: 194px; height: 50px; display: block; margin: auto;" @click="signUpWithGoogle">Sign Up With Google</button>
		</div>
	</div>
</template>


<script>
	import { mapActions } from 'vuex'
	import * as firebase from "firebase/app"
	import { firebaseAuth, firebaseDb } from 'boot/firebase'
	export default {
		props: ['tab'],
		data() {
			return {
				formData: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions('auth', ['registerUser', 'loginUser']),
			signInWithGoogle: function() {
				const provider = new firebase.auth.GoogleAuthProvider()
				firebase.auth().signInWithRedirect(provider).then((result) => {
				this.user = result.user
				}).catch(err => console.log(error))
			},
			signUpWithGoogle: function() {
				const provider = new firebase.auth.GoogleAuthProvider()
				firebase.auth().signInWithRedirect(provider).then((result) => {
				this.user = result.user
				}).catch(err => console.log(error))
			},
			isValidEmailAddress(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		    return re.test(String(email).toLowerCase())
			},
			submitForm() {
				this.$refs.email.validate()
				this.$refs.password.validate()
				if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
					if (this.tab == 'login') {
						this.loginUser(this.formData)
					}
					else {
						this.registerUser(this.formData)
					}
				}
			}
		},
		filters: {
			titleCase(value) {
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
	}
</script>