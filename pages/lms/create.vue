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
		},
	 getLeave (leaveUpdate) {
		}
	}
	
}
</script>