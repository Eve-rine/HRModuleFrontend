<template>
	<header id="sc-header" ref="header">
		<nav class="uk-navbar uk-navbar-container" data-uk-navbar="mode: click; duration: 360">
			<div class="uk-navbar-left nav-overlay-small uk-margin-right uk-navbar-aside">
				<a v-if="!vxSidebarMiniActive" id="sc-sidebar-main-toggle" href="javascript:void(0)" @click.stop="toggleMainSidebar">
					<i v-if="sidebarMainExpanded" class="mdi mdi-backburger" />
					<i v-else class="mdi mdi-menu" />
				</a>
				<div class="sc-brand uk-visible@m">
					<nuxt-link to="/">
						<img :src="logo" alt="">
					</nuxt-link>
				</div>
			</div>
			<div v-if="vxTopMenuActive" id="sc-top-menu" class="uk-navbar-left nav-overlay nav-overlay-small">
				<ScTopMenu :menu-data="topMenuData" />
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
									<nuxt-link to="/login_page">
										Log Out
									</nuxt-link>
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
import ScTopMenu from '~/components/topmenu/TopMenu.vue';
import  menuEntries  from '~/components/topmenu/employee_topmenus'
const { uniqueID } = scHelpers;

export default {
	name: 'ScHeader',
	components: {
		ScTopMenu
	},
	data: () => ({
		me: {
			avatar: require('~/assets/img/avatars/avatar_default_sm.png'),
		},
		sidebarMainExpanded: true,
		offcanvasExpanded: false,
		offcanvasPresent: false,
		logo: require('~/assets/img/logo.png'),
		topMenuData: [
			{
				id: uniqueID(),
				title: "Employee profiles",
				url: "/ems",
				icon: "mdi mdi-account",
				isOpen: false,
				level: 0,
				submenu:[
					{
						id: uniqueID(),
						title: "Add Employee",
						url: "/ems/create"
					},
					{
						id: uniqueID(),
						title: "Employees List",
						url: "/ems"
					}
				],
			},
			{
				id: uniqueID(),
				title: "System Presets",
				url: "/system_presets",
				icon: "mdi mdi-cogs",
				isOpen: false,
				level: 0,
				submenu: [
					{
						id: uniqueID(),
						title: "Genders",
						url: "/ems/system_presets/genders"
					},
					{
						id: uniqueID(),
						title: "Personal Identification Types",
						url: "/ems/system_presets/personal_identification_types"
					},
					{
						id: uniqueID(),
						title: "Countries",
						url: "/ems/system_presets/countries"
					},
					{
						id: uniqueID(),
						title: "Employment Types",
						url: "/ems/system_presets/employment_types"
					},
		    	{
						id: uniqueID(),
						title: "System Settings",
						icon: "mdi mdi-settings",
						url: ""
					},	

					{
						id: uniqueID(),
						title: "Relationship Status",
						url: "/ems/system_presets/relationship_status"
					},
					{
						id: uniqueID(),
						title: "Departments",
						url: "/ems/system_presets/department_heads",
						isOpen: false,
						submenu: [
							{
								id: uniqueID(),
								title: "Departments",
								url: "/ems/system_presets/departments"
							},
							{
								id: uniqueID(),
								title: "Department Heads",
								url: "/ems/system_presets/department_heads"
							},
						]
					},
					{
						id: uniqueID(),
						title: "Sections",
						url: "/ems/system_presets/sections",
						isOpen: false,
						submenu: [
							{
								id: uniqueID(),
								title: "Sections",
								url: "/ems/system_presets/sections"
							},
							{
								id: uniqueID(),
								title: "Sections Heads",
								url: "/ems/system_presets/sections_heads"
							},
						]
					},
				    ]
			},
		],
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