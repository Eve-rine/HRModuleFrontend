<template>
	<div>
		<HolidayForm 
			button-text="Update" 
			:submit-form="updateHoliday" 
			title-text="Update Holiday"
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
		updateHoliday (holiday_details) {	
		},
		getHoliday (holiday_details) {
		},
	}
	
}
</script>