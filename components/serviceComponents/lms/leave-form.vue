<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					{{ titleText }}
				</h1>
			</div>
		</div>
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/lms'" data-uk-tooltip="Back to Leave">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary">
						<i class="mdi mdi-arrow-left"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardBody>
					<form>
						<div class="uk-grid-match uk-grid" data-uk-grid>
							<div class="uk-width-expand@m">
								<div class="uk-grid" data-uk-grid>
									<div class="uk-width-1-3@m">
										<label class="uk-form-label">
											Employee Name
										</label>
										<div class="uk-form-controls">
											<client-only>
												<Select2
													v-model="leave_details.employee_id"
													:options="employees"
													:settings="{ 'width': '100%', 'placeholder': 'Select employee...', allowClear: true }"
												></Select2>
											</client-only>
										</div>
									</div>
									<div class="uk-width-1-3@m">
										<label class="uk-form-label">
											Leave Type
										</label>
										<div class="uk-form-controls">
											<client-only>
												<Select2
													v-model="leave_details.leave_type_id"
													:options="leave_types"
													:settings="{ 'width': '100%', 'placeholder': 'Select leave type...', allowClear: true }"
													@change="getAvailableBalance"
												></Select2>
											</client-only> 
										</div>
									</div>
									<div class="uk-width-1-3@m">
										<label class="uk-form-label">
											Total Days
										</label>
										<div class="uk-form-controls">
											<ScInput v-model="leave_details.total_days" disabled mode="outline"></ScInput>
										</div>
									</div>
								</div>
								<div class="uk-grid" data-uk-grid>
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Available Balance
										</label>
										<ScInput v-model="leave_details.available_balance"
											disabled
											mode="outline"
											name="available_balance"
											:error-state="false"
										>
										</ScInput>
									</div>
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Start Date
										</label>
										<ScInput v-model="leave_details.start_date"
											v-flatpickr
											placeholder="Pick date..."
											:error-state="false"
											mode="outline"
											@change="inputChange"										
										>
										</ScInput>
									</div>
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Days
										</label>
										<div class="uk-form-controls">
											<ScInput v-model="leave_details.days_applied" mode="outline" :disabled="leave_details.status==null?false:true" @blur="mouseLeave"></ScInput>
										</div>
									</div>
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											End Date
										</label>
										<ScInput v-model="leave_details.end_date"
											v-flatpickr="dpRange"
											placeholder="End Date..."
											:error-state="false"	
											disabled
											mode="outline"									
										>
										</ScInput>
									</div>
								</div>
								<div class="uk-grid" data-uk-grid>  
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Return Date
										</label>
										<ScInput v-model="leave_details.return_date"
											v-flatpickr="dpRange"
											placeholder="Return Date..."
											:error-state="false"	
											disabled
											mode="outline"									
										>
										</ScInput>
									</div>
								
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											New Balance
										</label>
										<ScInput v-model="leave_details.new_balance"
											mode="outline"
											name="new_balance"
											disabled
											:error-state="false"
										>
										</ScInput>
									</div>                                                            
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Holidays
										</label>
										<ScInput v-model="leave_details.holidays"
											mode="outline"
											disabled
											name="holidays"
											:error-state="false"
										>
										</ScInput>
									</div>
									<div class="uk-width-1-4@m">
										<label class="uk-form-label">
											Off Days
										</label>
										<div class="uk-form-controls">
											<ScInput v-model="leave_details.off_days" disabled mode="outline"></ScInput>
										</div>
									</div>
									<div class="uk-grid" data-uk-grid>
										<div class="uk-width-1-1@m">
											<label class="uk-form-label">
												Supporting Document
											</label>
											<div class="uk-form-controls">
												<input id="leave_details.supporting_document" ref="file" type="file" @change="handleFileUpload()">
											</div><br>
								
											<div v-show="showProgress" class="loading-bar">
												<div class="percentage" :style="{'width' : getPercentage + '%'}">
												</div>
											</div>
											<div v-show="showProgress">
												{{ uploadPercentageWithPercent }}
											</div>
										</div>
									</div>
								</div>
              
	
								<div class="uk-grid" data-uk-grid>
									<ScTextarea
										v-model="leave_details.application_reason"
										:cols="20"
										:rows="6"
										:autosize="true"
										mode="outline"
									>
										<label style="margin-left:30px">
											Please write your reason for leave application
										</label>
									</ScTextarea>
								</div>
							</div>
						</div>
					</form>
					<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
						<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(leave_details)">
							{{ buttonText }}
						</button>
					</div>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import Select2 from '~/components/Select2'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
if(process.client) {
	require('~/plugins/flatpickr');
}

export default {
	components: {
		ScInput,
		ScTextarea,
		Select2,
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
		responseMessage:'',
		leave_details:{
			end_date: '',
			start_date:'',
			return_date:'',
			total_days:'',
			employee_id:'',
			days_applied:'',
			leave_type_id:'',
			application_reason:'',
			supporting_document:'',
			off_days:'',
			holidays:'',
			new_balance:'',
			available_balance:'',
		},		
		employee_details: [],
		leave_details_array: [],				
		uploadPercentage: 0,
		showProgress:false,	
		disable:true,
	}),
	head () {
		return {
			'title': 'Leave | Create'
		}
	},
	computed: {
		dpRange () {
			return {
				minDate:"today",
			}
		},
		hasError (){return this.$store.getters['modules/validation/hasError']},
		employees () {
			return this.employee_details.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		leave_types () {
			return this.leave_details_array.map(function (obj) {
				obj.id = obj.id || obj.leave_type_id;
				obj.text = obj.text || obj.leave_type;
				return obj;
			});
		},
		 uploadPercentageWithPercent () {
			return this.uploadPercentage.toString().concat('%')
		},
		getPercentage () {
			return this.uploadPercentage
		},
		
	},
	watch: {
		    "leave_details.leave_type_id": function (id) {
			console.log(id)
		      			try {
				this.$axios.get(
					`leave-svc/v1/leave-types/leave-type/${id}`
				)
					.then(res =>{
						this.leave_details.total_days = res.data.data.number_of_days
				
					})
					.catch(err => {
						if (err.response.data.statusCode == 401 || err.response.data.statusCode == 403) {

			            }
					})
			} catch (err) {

			}
		},
	},
	mounted (){
		// this.getLeaveTypes()
		// this.getEmployeeDetails()
		// this.getRecord(this.leave_details)
	},
	methods: {
		handleFileUpload (){
			this.leave_details.supporting_document = this.$refs.file.files[0];
		},
		getLeaveTypes (){
			this.$axios.get(`leave-svc/v1/leave-types/leave-types`)
				.then((res) => {
					this.leave_details_array = res.data.data.dataModels
				})			
		},
		inputChange (){
			this.disable=false
		},
		getEmployeeDetails (){
			this.$axios.get(`employee-svc/v1/leave/employee-details`)
				.then((res) => {
					this.employee_details = res.data.employee_details
				})			
		},
		getAvailableBalance () {
			try {
     				this.$axios.post(`leave-svc/v1/leave/apply-leave?action=leaveBalance`, {
					employee_id: this.leave_details.employee_id,
					leave_type_id: this.leave_details.leave_type_id,
				})
					.then(response =>{
						this.leave_details.available_balance = JSON.stringify(response.data.new_balance||response.data.number_of_days)
				
					})
					.catch(error => {
						this.responseMessage =error.response.data.message

					})
			} catch (error) {

			}
		},
		mouseLeave (){
			try {
     				this.$axios.post(`leave-svc/v1/leave/apply-leave?action=leaveDaysCalculation`, {
					start_date: this.leave_details.start_date,
					days_applied: this.leave_details.days_applied,
					available_balance: this.leave_details.available_balance,
				})
					.then(res =>{
						this.leave_details.end_date = res.data.end_date
						this.leave_details.off_days=JSON.stringify(res.data.off_days)
						this.leave_details.new_balance=JSON.stringify(res.data.new_balance)	
						this.leave_details.return_date=res.data.return_date	
						this.leave_details.holidays=res.data.holidays			
					})
					.catch(err => {
						this.responseMessage =err.response.data.errors

						this.leave_details.end_date = ''
						this.leave_details.off_days=''
						this.leave_details.new_balance=''

					})
			} catch (err) {

			}
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  
</style>
<style lang="scss" scoped>
.loading-bar {
  position: relative;
  width: 250px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: .4), 
    0 -1px 1px #fff, 0 1px 0 #fff;
  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #a5df41;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
      transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
      rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
  } 
}
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}
</style>