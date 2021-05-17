<template>
	<div>
		<HolidayListForm button-text="Create"
			:submit-form="addHoliday"
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
		addHoliday (holiday_details) {
		},
	 getHoliday (holidayUpdate) {
		}
	}
}
</script>