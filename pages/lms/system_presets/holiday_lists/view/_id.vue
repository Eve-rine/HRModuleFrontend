<template>
	<div>
		<HolidayListForm button-text="Update" :submit-form="UpdateHoliday" title-text="Add Holiday List" :get-record="getHoliday" />
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
		async getHoliday (holiday_details) {
		},
	}
}
</script>