<template>
	<div>
		<div v-if="permission=='1'">
			<div v-if="type=='link'">
				<!-- <nuxt-link :to="`${url}`"> -->
				<a :href="url"
					class="sc-button "		
					:class="[
						theme ? 'sc-button-' + theme : '',
						size ? 'sc-button-' + size : '',
						buttonWidth ? 'uk-width-' + buttonWidth : '',
						status? 'sc-button-'+status:''
					]"
				>
					<div v-if="caption == 'iconText'">
						<i
							class="uk-margin-small-right"
							:class="[icon]"
						>
						</i>
						{{ text }}
					</div>
					<div v-else-if="caption=='Text'">
						<span>{{ text }}</span>
					</div>
					<div v-else-if="caption=='Icon'">
						<i
							:class="[icon]"
						>
						</i>
					</div>
				</a>
			<!-- </nuxt-link> -->
			</div>
			<div v-else-if="type=='submit'">
				<button
					class="sc-button"		
					:class="[
						theme ? 'sc-button-' + theme : '',
						size ? 'sc-button-' + size : '',
						buttonWidth ? 'uk-width-' + buttonWidth : '',
						status? 'sc-button-'+status:''
					]"
					@click="handleClick"
				>
					<div v-if="caption == 'iconText'">
						<i
							class="uk-margin-small-right"
							:class="[icon]"
						>
						</i>
						{{ text }}
					</div>
					<div v-else-if="caption=='Text'">
						<span>{{ text }}</span>
					</div>
					<div v-else-if="caption=='Icon'">
						<i
							:class="[icon]"
						>
						</i>
					</div>
				</button>
			</div>
			<div v-else-if="type === 'modal'">
				<a class="sc-button"
					:href="'#'+`${modalId}`"
					uk-toggle						
	
					:class="[
						theme ? 'sc-button-' + theme : '',
						size ? 'sc-button-' + size : '',
						buttonWidth ? 'uk-width-' + buttonWidth : '',
						status? 'sc-button-'+status:''
					]"
				>
					<div v-if="caption == 'iconText'">
						<i
							class="uk-margin-small-right"
							:class="[icon]"
						>
						</i>
						{{ text }}
					</div>
					<div v-else-if="caption=='Text'">
						<span>{{ text }}</span>
					</div>
					<div v-else-if="caption=='Icon'">
						<i
							:class="[icon]"
						>
						</i>
					</div>
				</a>
			</div>
			<div v-else>
				<button
					class="sc-button"
					disabled		
					:class="[
						theme ? 'sc-button-' + theme : '',
						size ? 'sc-button-' + size : '',
						buttonWidth ? 'uk-width-' + buttonWidth : '',
						status? 'sc-button-'+status:''
					]"
					@click="handleClick"
				>
					<div v-if="caption == 'iconText'">
						<i
							class="uk-margin-small-right"
							:class="[icon]"
						>
						</i>
						{{ text }}
					</div>
					<div v-else-if="caption=='Text'">
						<span>{{ text }}</span>
					</div>
					<div v-else-if="caption=='Icon'">
						<i
							:class="[icon]"
						>
						</i>
					</div>
				</button>
			</div>
		</div>
		<div v-else>
			<button
				class="sc-button"
				disabled		
				:class="[
					theme ? 'sc-button-' + theme : '',
					size ? 'sc-button-' + size : '',
					buttonWidth ? 'uk-width-' + buttonWidth : '',
					status? 'sc-button-'+status:''
				]"
				@click="handleClick"
			>
				<div v-if="caption == 'iconText'">
					<i
						class="uk-margin-small-right"
						:class="[icon]"
					>
					</i>
					{{ text }}
				</div>
				<div v-else-if="caption=='Text'">
					<span>{{ text }}</span>
				</div>
				<div v-else-if="caption=='Icon'">
					<i
						:class="[icon]"
					>
					</i>
				</div>
			</button>
		</div>
	</div>
</template>
<script>

export default {
	name: 'UiButton',
	props: {
		text: {
			type: String,
			default: 'Default'
		},
		theme: {
			type: String,
			default: 'primary'
		},
		caption: {
			type: String,
			default: 'Text'
		},
		buttonWidth: {
			type: String,
			default: '1-1'
		},
		size: {
			type: String,
			default: 'small'
		},
		icon: {
			type: String,
			default: ''
		},
		status:{
			type: String,
			default:null
		},
		type: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
		modalId: {
			type: String,
			default: ''
		},
		linkDisable: {
			type: Boolean,
			default: true
		},
		permission: {
			type: String,
			default: '1'
		},
	},

	computed: {
	},

	methods: {
		handleClick (evt) {
			this.$emit('click', evt);
		}
	}
};
</script>
