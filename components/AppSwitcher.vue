<template>
	<div id="sc-style-switcher" :class="{'active' : sSwitchActive }">
		<a id="sc-style-switcher-toggle" href="javascript:void(0)" class="sc-sSw-toggle" @click.stop="sSwitchActive = !sSwitchActive">
			<fa :icon="['fas', 'th']" class="md-color-white fa-sm" />
		</a>
		<div class="uk-panel-scrollable">
			<ul class="uk-navbar-nav">
				<li style="width:200px">
					<div>
						<nuxt-link to="/ems" class="uk-flex  uk-flex-middle uk-box-shadow-hover-small sc-round ">
							<span class="md-color-primary-400" data-uk-tooltip="View"><i class="mdi mdi-account-group uk-icon-small md-color-primary"></i></span>&nbsp;&nbsp;
							<span class="uk-text-small sc-color-primary">EMPLOYEE SERVICE</span>
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/lms" class="uk-flex  uk-flex-middle uk-box-shadow-hover-small sc-round">
							<span class="md-color-primary-400" data-uk-tooltip="View"><i class="mdi mdi-briefcase uk-icon-small md-color-primary"></i></span>&nbsp;&nbsp;
							<span class="uk-text-small sc-color-primary">LEAVE SERVICE</span>
						</nuxt-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ScStyleSwitcher',
	data: () => ({
		sSwitchActive: false,

		scrollToActive: false,
		accordionMode: false
	}),

	methods: {

	}
}
</script>
<style lang="scss">
	@import '~pretty-checkbox/src/pretty-checkbox.scss';
	@import "~scss/plugins/style_switcher";
</style>
