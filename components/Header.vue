<template>
	<header id="sc-header" ref="header">
		<nav class="uk-navbar uk-navbar-container" data-uk-navbar="mode: click; duration: 360">
			<div class="uk-navbar-left nav-overlay-small uk-margin-right uk-navbar-aside">
				<a v-if="!vxSidebarMiniActive" id="sc-sidebar-main-toggle" href="javascript:void(0)" @click.stop="toggleMainSidebar">
					<i v-if="sidebarMainExpanded" class="mdi mdi-backburger" />
					<i v-else class="mdi mdi-menu" />
				</a>
				<div class="sc-brand ">
					<nuxt-link to="/">
						<!-- <img v-rjs="require('~/assets/img/duka.png')" :src="logo" alt=""> -->
					</nuxt-link>
				</div>
			</div>
			<div class="nav-overlay nav-overlay-small uk-navbar-right">
				<ul class="uk-navbar-nav">
					<li>
						<a href="javascript:void(0)">
							<img :src="me.avatar" alt="">
						</a>
						<div class="uk-navbar-dropdown uk-dropdown-small">
							<ul class="uk-nav uk-nav-navbar">
								<li>
									<nuxt-link to="/pages/user_profile">
										Profile
									</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/settings">
										Settings
									</nuxt-link>
								</li>
								<li>
									<a @click="$auth.logout()">
										Log Out
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<a v-if="vxOffcanvasPresent" href="javascript:void(0)" class="md-color-white uk-margin-left uk-hidden@l" @click="toggleOffcanvas">
					<i v-show="!vxOffcanvasExpanded" class="mdi mdi-menu"></i><i v-show="vxOffcanvasExpanded" class="mdi mdi-arrow-right"></i>
				</a>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapState } from 'vuex'
import { scMq } from '~/assets/js/utils'
import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export default {
	name: 'ScHeader',
	data: () => ({
		me: {
			avatar: require('~/assets/img/avatars/khadija.png'),
		},
		sidebarMainExpanded: true,
		offcanvasExpanded: false,
		offcanvasPresent: false,
		logo: require('~/assets/img/duka.png'),
	}),
	computed: {
		 ...mapState('modules/uiModule', ['vxSidebarMainExpanded', 'vxOffcanvasPresent',
		 				'vxSidebarMiniActive', 'vxOffcanvasExpanded', 'vxTopMenuActive']),
	},
	watch: {
		'vxSidebarMainExpanded' (state) {
			this.sidebarMainExpanded = state;
		},
		'vxOffcanvasExpanded' (state) {
			this.offcanvasExpanded = state;
		},
		'vxOffcanvasPresent' (state) {
			this.offcanvasPresent = state;
		}
	},
	mounted () {
		const self = this;
		self.$nextTick(() => {
			if(scMq.mediumMin() || this.$store.getters['modules/uiModule/sidebarOffcanvasState']) {
				self.sidebarMainExpanded = this.vxSidebarMainExpanded;
			} else {
				self.sidebarMainExpanded = false;
			}
		});
		// sticky header
		var options = scMq.mediumMax() ? { showOnUp: true, animation: "uk-animation-slide-top" } : {};
		UIkit.sticky(this.$refs.header, options);
	},
	methods: {
		toggleMainSidebar () {
			let state = !this.sidebarMainExpanded;
			this.$store.commit('modules/uiModule/sidebarMainToggle', state);
		},
		toggleOffcanvas () {
			let state = !this.offcanvasExpanded;
			this.$store.commit('modules/uiModule/offcanvasToggle', state);
		},
	}
}
</script>