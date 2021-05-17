<template>
	<div>
		<HolidayListForm button-text="Update"
			:submit-form="UpdateHoliday"
			:has-submit-button="true"
			title-text="Add Holiday List"
			:get-record="getHoliday"
		/>
	</div>
</template>
<script>
import  HolidayListForm from "~/components/serviceComponents/lms/holiday-list-form";
export default {
	components:{
		HolidayListForm
	},
	layout:'lms',
	methods:{
		async UpdateHoliday (holiday_details) {
		
		},
		async getHoliday (holiday_details) {

		},
	}
}
</script>