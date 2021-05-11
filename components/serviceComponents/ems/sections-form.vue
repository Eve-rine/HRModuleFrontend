<template>
	<div>
		<form>
			<div class="uk-margin-top" data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Department
					</label>
					<div class="uk-form-controls">
						<Select2
							v-model="section_details.department_id"
							:options="Departments"
							:settings="{ 'width': '100%', 'placeholder': 'Select Department...', allowClear: true }"
						></Select2>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Section Name
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="section_details.section_name" name="section_name" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Section Head
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="section_details.section_head" name="section_head" mode="outline" :error-state="false">													
						</ScInput>
					</div>
				</div>
			</div>
			<div class="uk-modal-footer uk-text-right">
				<button class="sc-button sc-button-primary" data-uk-tooltip="Save">
					<i class="mdi mdi-checkbox-marked-outline"></i>
				</button>
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
export default {
	name: 'SectionsForm',
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
	        department_id:'',
		    section_name:'',
		    section_head:'',
		},
        		Departments:[]
	}),
	head () {
		return {
			'title': 'Employee | Sections'
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