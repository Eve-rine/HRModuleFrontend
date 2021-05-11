<template>
	<div>
		<form>
			<div data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Employment Type
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="employment_details.employment_type" name="employment_type" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Working Hours
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="employment_details.working_hours" name="working_hours" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
			</div>
		</form>
		<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
			<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(gender_details)">
				{{ buttonText }}
			</button>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
export default {
	name: 'EmploymentTypesForm',
	components: {
		ScInput,
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
		employment_details:{
			employment_type:'',
			working_hours:''	
		}
	}),
	head () {
		return {
			'title': 'Employee | Departments'
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