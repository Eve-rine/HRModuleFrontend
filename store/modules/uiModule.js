import { version } from '~~/package.json';

export const state = () => ({
	vxAppVersion: version,
	vxSidebarMainExpanded: true,
	vxSidebarMainAccordionMode: false,
	vxSidebarMainScrollToActive: false,
	vxSidebarMiniActive: false,
	vxSidebarOffcanvasActive: false,
	vxCardFixed: false,
	vxHeaderExpanded: false,
	vxPageFixed: false,
	vxAppTheme: 'theme-a',
	vxTopMenuActive: false,
	vxOffcanvasPresent: false,
	vxOffcanvasExpanded: false,
	vxCodeMirrorFullscreen: false,
	vxProgressOverlay: false,
	vxPageScrollbars: true,
	vxFullWidthActive: false,
	vxPageOverlay: false
});

const mutations = {
	sidebarMainToggle (state, expanded) {
		state.vxSidebarMainExpanded = expanded
	},
	sidebarMainAccordionModeToggle (state) {
		state.vxSidebarMainAccordionMode = !state.vxSidebarMainAccordionMode
	},
	sidebarMainScrollToActiveToggle (state) {
		state.vxSidebarMainScrollToActive = !state.vxSidebarMainScrollToActive
	},
	setSidebarMiniActive (state, active) {
		state.vxSidebarMiniActive = active;
	},
	setSidebarOffcanvasActive (state, active) {
		state.vxSidebarOffcanvasActive = active;
	},
	setCardFixed (state, fixed) {
		state.vxCardFixed = fixed;
	},
	setHeaderExpanded (state, expanded) {
		state.vxHeaderExpanded = expanded;
	},
	setPageFixed (state, fixed) {
		state.vxPageFixed = fixed
	},
	setAppTheme (state, theme) {
		state.vxAppTheme = theme
	},
	setOffcanvasPresent (state, present) {
		state.vxOffcanvasPresent = present
	},
	offcanvasToggle (state, active) {
		state.vxOffcanvasExpanded = active
	},
	cmFullscreenToggle (state, fullscreen) {
		state.vxCodeMirrorFullscreen = fullscreen
	},
	toggleProgressOverlay (state, active) {
		state.vxProgressOverlay = active
	},
	togglePageScrollbars (state, active) {
		if (active) {
			this.pageScrollbarEnable();
		} else {
			this.pageScrollbarDisable();
		}
	},
	setFullwidthActive (state, active) {
		state.vxFullWidthActive = active
	},
	togglePageOverlay (state, overlay) {
		state.vxPageOverlay = overlay
	},
	setTopMenuActive (state, active) {
		state.vxTopMenuActive = active
	},
};

const getters = {
	pageFixedState: state => state.vxPageFixed,
	cardFixedState: state => state.vxCardFixed,
	headerExpandedState: state => state.vxHeaderExpanded,
	sidebarMainState: state => state.vxSidebarMainExpanded,
	sidebarOffcanvasState: state => state.vxSidebarOffcanvasActive,
	offcanvasState: state => state.vxOffcanvasExpanded
};
export default  {
	namespaced:true,
	state,
	getters,
	mutations
}