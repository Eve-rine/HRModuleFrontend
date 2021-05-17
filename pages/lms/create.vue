<template>
	<div>
		<LeaveForm button-text="Apply"
			:submit-form="applyLeave"
			title-text="Apply Leave"
			:has-submit-button="true"
			:get-record="getLeave"
		/>
	</div>
</template>
<script>
import  LeaveForm from "~/components/serviceComponents/lms/leave-form";
export default {
	components:{
		LeaveForm
	},
	layout:'lms',
	methods:{
		async applyLeave (leave_details) {
			let formData = new FormData();
			formData.append('supporting_document', leave_details.supporting_document);
			formData.append('start_date', leave_details.start_date);
			formData.append('end_date', leave_details.end_date);
			formData.append('return_date', leave_details.return_date);
			formData.append('employee_id', leave_details.employee_id);
			formData.append('days_applied', leave_details.days_applied);
			formData.append('leave_type_id', leave_details.leave_type_id);
			formData.append('weekends', leave_details.weekends);
			formData.append('total_days', leave_details.total_days);
			formData.append('available_balance', leave_details.available_balance);
			formData.append('new_balance', leave_details.new_balance);
			formData.append('application_reason', leave_details.application_reason);
			this.$axios.post( 'leave-svc/v1/leave/apply-leave',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					},
					  onUploadProgress: function (progressEvent) {
						leave_details.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
					}.bind(this)
				},
				leave_details.showProgress=true,
			
			).then(response=>{
				this.$router.push('/leave')			
			
			}) .catch(function (response) {
			})
				
		},
	 getLeave (leaveUpdate) {
		}
	}
	
}
</script>