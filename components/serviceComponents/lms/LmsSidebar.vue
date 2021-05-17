<template>
	<aside id="sc-sidebar-main" class="sc-sidebar-info-fixed">
		<div id="sc-sidebar-main-offcanvas-bar" v-touch:swipe.left="closeSidebar" class="uk-offcanvas-bar">
			<div class="sc-sidebar-main-scrollable" data-sc-scrollbar="visible-y">
				<MenuList :menu-data="menuEntries" :is-parent="true"></MenuList>
			</div>
		</div>
	</aside>
</template>

<script>
import { mapState } from 'vuex'
import MenuList from '~/components/navigation/MenuList';
import { scMq } from '~/assets/js/utils'
import { menuEntries } from '~/components/navigation/lms_menus.js'

require('~/plugins/vue2-touch-events')

export default {
	name: 'ScSidebar',
	components: {
		MenuList
	},
	data: () => ({
		menuEntries
	}),
	computed: mapState('modules/uiModule', [
		'vxSidebarMainExpanded',
	]),
	watch: {
		'vxSidebarMainExpanded' (state) {
			if(scMq.mediumMax() || this.$store.getters['modules/uiModule/sidebarOffcanvasState']) {
				if (state) {
					UIkit.offcanvas('#sc-sidebar-main').show();
					if(this.$store.getters.offcanvasState) {
						this.$store.commit('modules/uiModule/offcanvasToggle', false);
					}
				} else {
					UIkit.offcanvas('#sc-sidebar-main').hide();
				}
			}
		},
		$route () {
			this.$nextTick(() => {
				if(scMq.mediumMax()) {
					this.$store.commit('modules/uiModule/sidebarMainToggle', false);
				}
			})
		}
	},
	mounted () {
		const self = this;
		this.$nextTick(() => {
			if(scMq.mediumMax() || this.$store.getters['modules/uiModule/sidebarOffcanvasState']) {
				// activate UIKit offcanvas
				UIkit.offcanvas(document.getElementById('sc-sidebar-main'), {
					overlay: true,
					container: '#nuxt-wrapper'
				});
				// update drop container
				UIkit.util.on('#sc-sidebar-main', 'hidden', function () {
					self.$store.commit('modules/uiModule/sidebarMainToggle', false);
				});
				self.$store.commit('modules/uiModule/sidebarMainToggle', false);
			}
		})
	},
	methods: {
		closeSidebar (direction, event) {
			if (event.type === 'touchend') {
				this.$store.commit('modules/uiModule/sidebarMainToggle', false);
			}
		}
	}
}
</script>

<style>
</style>
