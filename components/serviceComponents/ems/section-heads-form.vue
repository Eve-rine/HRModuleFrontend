<template>
	<div>
		<form>
			<div data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Section
					</label>
					<div class="uk-form-controls">
						<Select2
							v-model="section_details.section_id"
							:options="Sections"
							:settings="{ 'width': '100%', 'placeholder': 'Select Section...', allowClear: true }"
							:error-state="false"
						></Select2>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Employee 
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="section_details.employee_id" name="employee_id" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Start Date
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="section_details.start_date"
							v-flatpickr
							name="start_date"
							mode="outline"
							:error-state="false"
						>													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						End Date
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="	section_details.end_date"
							v-flatpickr
							name="end_date"
							mode="outline"
							:error-state="false"
						>													
						</ScInput>
					</div>
				</div>
			</div>
		</form>
		<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
			<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(section_details)">
				{{ buttonText }}
			</button>
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
	name: 'SectionHeadsForm',
	components: {
		ScInput,
		Select2
	},
	  props: {
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required: true
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
		section_details:{
	         section_id:'',
		    start_date:'',
		    end_date:'',
		    employee_id:''
		},
		Sections:[]
	}),
	head () {
		return {
			'title': 'Employee | SectionHeads'
		}
	},
	methods: {

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  
</style>
<style lang="scss" scoped>
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}
</style>