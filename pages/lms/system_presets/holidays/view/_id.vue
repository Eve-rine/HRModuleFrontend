<template>
	<div>
		<HolidayForm 
			button-text="Update" 
			title-text="Holiday Details"
			:get-record="getHoliday"
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
		getHoliday (holiday_details) {
		},
	}
	
}
</script>