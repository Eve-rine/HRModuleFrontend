<template>
	<div>
		<button v-for="(button,index) in buttonGroup"
			:key="index"
			class="sc-button waves-effect waves-button waves-light"
			style="margin-right: 4px;"
			:class="[
				{'sc-button-success': button.success},
				{'sc-button-danger': button.danger},
				{'sc-button-warning': button.warning},
				{'sc-button-large':button.large},
				{'sc-button-small':button.small},
				{'sc-button-mini':button.mini},
				{'sc-button-disabled':button.disabled},
				{'sc-button-primary':button.primary},
				{'sc-button-secondary':button.secondary},
			]"
			
			@click="triggerClick(button.action)"
		>
			<i v-if="button.icon"
				class="uk-margin-small-right"
				:class="[button.iconName]"
			>
			</i>
			<span>{{ button.text }}</span>
		</button>
	</div>
</template>
<script>
export default {
	props: {
		buttonGroup: {
			type: Array,
			default: () => [{"text":"default", "disabled":true}, ]		
		},
		triggerClick:{
			type: Function,
			default:null
		},
    	}
};
</script>