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
				<nuxt-link :to="'/lms/system_presets/holidays'">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary" data-uk-tooltip="Back To Holidays">
						<i class="mdi mdi-arrow-left"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardBody>
					<form>
						<div class="uk-margin-top" data-uk-grid>
							<div class="uk-width-1-2@m">
								<label class="uk-form-label">Holiday Name</label>
								<div class="uk-form-controls">
									<ScInput v-model="holiday_details.holiday_name" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-2@m">
								<label class="uk-form-label">Holiday Date Type</label>
								<client-only>
									<Select2
										v-model="holiday_details.holiday_date_type"
										:options="holiday_dates"
										:settings="{ 'width': '100%', 'minimumResultsForSearch': -1, 'closeOnSelect': false }"
									></Select2>
								</client-only>
							</div>
						</div>
						<div class="uk-margin-top" data-uk-grid>
							<div class="uk-width-1-2@m">
								<label class="uk-form-label">Holiday Date</label>
								<ScInput v-model="holiday_details.holiday_date"
									v-input-mask="{ 'alias': 'datetime', 'inputFormat' : 'mm-dd' }" 
									:error-state="false"
									mode="outline"
								>
								</ScInput>
							</div>
							<div class="uk-width-1-2@m">
								<label class="uk-form-label">Holiday Type</label>
								<client-only>
									<Select2
										v-model="holiday_details.holiday_type"
										:options="holiday_types"
										:settings="{ 'width': '100%', 'minimumResultsForSearch': -1,'closeOnSelect': false }"
									></Select2>
								</client-only>
							</div>
						</div>
						<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
							<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(holiday_details)">
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

if(process.client) {
	require('~/plugins/inputmask');
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
		message:'',
		holiday_details:{
			holiday_name: '',
			holiday_date:'',
			holiday_date_type:'',
			holiday_type: '',		
		},
		holiday_type: [],
		holiday_date_type: [],
	}),
 

	head () {
		return {
			'title': 'Leave | Create'
		}
	},
	computed: {
		holiday_types () {
			return this.holiday_type.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.text;
				return obj;
			});
		},
		holiday_dates () {
			return this.holiday_date_type.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.text;
				return obj;
			});
		},
	},
	mounted (){
		this.getRecord(this.holiday_details)
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  	@import '~scss/vue/_pretty_checkboxes';
</style>

