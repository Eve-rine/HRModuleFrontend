<template>
	<div>
		<HolidayForm 
			button-text="Add" 
			:submit-form="addHoliday" 
			title-text="Create Holiday"
			:get-record="getHoliday"
			:has-submit-button="true"
		/>
	</div>
</template>
<script>
import  HolidayForm from "~/components/serviceComponents/lms/holiday-form";
export default {
	components:{
		HolidayForm
	},
	layout:'lms',
	methods:{
		addHoliday (holiday_details) {
		},
			 getHoliday (leaveUpdate) {
		},

	}
	
}
</script>