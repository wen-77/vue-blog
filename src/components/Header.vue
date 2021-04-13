<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand to="/">77的小小世界</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav>
						<!-- b-nav-item支援router-link的to功能 -->
						<b-nav-item to="/">Home</b-nav-item>
						<!-- <b-nav-item to="/about">About</b-nav-item> -->
						<b-nav-item to="/login" title="登入"><b-icon icon="person-circle"></b-icon></b-nav-item>
						<!-- <b-nav-item to="/article">Article</b-nav-item> -->
					</b-navbar-nav>
					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchKey">
						</b-form-input>
						<b-button @click.prevent="submitSearchKey" size="sm" class="my-2 my-sm-0 btn-light"
							type="submit">
							Search
						</b-button>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	import {
		mapActions
	} from 'vuex'

	export default {
		data() {
			return {
				searchKey: "",
			}
		},
		methods: {
			...mapActions(['changeSearchKey']),

			submitSearchKey: function () {
				this.changeSearchKey(this.searchKey)
			}
		},
		watch: {
			searchKey: function () {
				if (this.searchKey === "") {
					this.submitSearchKey()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// button {
	// 	background-color: #b45b4b;
	// 	color: #ffffff;
	// }

	.nav-item {
		margin-right: 1.2rem;
	}
</style>