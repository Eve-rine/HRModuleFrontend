<template>
	<div id="sc-page-wrapper">
		<client-only>
			<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
				<div class="sc-top-bar-content uk-flex uk-flex-1">
					<h1 class="sc-top-bar-title uk-flex-1">
						{{ titleText }}
					</h1>
				</div>
			</div>
		</client-only>
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/lms/system_presets/leave_types'">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary" data-uk-tooltip="Back">
						<i class="mdi mdi-arrow-left"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardBody>
					<form>
						<div class="uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">Leave Type</label>
								<div class="uk-form-controls">
									<ScInput v-model="leave_details.leave_type" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">Number Of Days</label>
								<ScInput v-model="leave_details.number_of_days" mode="outline"></ScInput>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">Maximum Roll Over</label>
								<div class="uk-form-controls">
									<ScInput v-model="leave_details.maximum_roll_over" mode="outline"></ScInput>
								</div>
							</div>
						</div>
						<div class="uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">Gender</label>
								<Select2
									v-model="leave_details.gender"
									:options="genderArray"
									:settings="{ 'width': '100%', 'minimumResultsForSearch': -1, 'placeholder': 'Select gender...', 'closeOnSelect': false }"									
								></Select2>
							</div>					
						</div>
						<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
							<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(leave_details)">
								{{ buttonText }}
							</button>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
import Select2 from '~/components/Select2'
if(process.client) {
	require('~/plugins/flatpickr');
}

export default {
	components: {
		ScInput,
		Select2
	},
	props: {
		titleText: {
			type: String,
			required: true,
		},
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required:false,
			default:null
		},
		getRecord: {
			type: Function,
			required: false,
			default:null
		},
		hasSubmitButton:{
			type:Boolean,
			default:false
		}

	},
	data: () => ({
		leave_details:{
			message:'',
			leave_type: '',
			number_of_days:'',
			maximum_roll_over:'',
			gender:'',
		},
		gender: [{id: '01', text: 'Male'}, {id: '02', text: 'Female'}, {id: '03', text: 'All'}],
	}),

	head () {
		return {
			'title': 'Leave | Create'
		}
	},
 	computed: {
		genderArray () {
			return this.gender.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.text;
				return obj;
			});
		},
	},
 
 	mounted (){
		this.getRecord(this.leave_details)
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  	@import '~scss/vue/_pretty_checkboxes';
</style>

