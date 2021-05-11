<template>
	<div>
		<form>
			<div data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Department Name
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="	department_details.department_name" name="department_name" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Department Head
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="	department_details.department_head" name="department_head" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Department Abbreviation
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="	department_details.department_abbreviation" name="department_abbreviation" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Department Description
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="	department_details.department_description" name="department_description" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
			</div>
		</form>
		<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
			<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(department_details)">
				{{ buttonText }}
			</button>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
export default {
	name: 'DepartmentsForm',
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
		department_details:{
	         department_name:'',
		    department_head:'',
		    department_description:'',
		    department_abbreviation:''
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