<template>
	<div id="sc-page-wrapper">
		<client-only>
			<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
				<div class="sc-top-bar-content uk-flex uk-flex-1">
					<h1 class="sc-top-bar-title uk-flex-1">
						Holidays
					</h1>
				</div>
				<div class="sc-actions uk-margin-right uk-margin-small-top">
					<nuxt-link :to="'/lms/system_presets/holidays/create'" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary">
						<i class="mdi mdi-plus"></i>Add Holiday
					</nuxt-link>
				</div>
			</div>
		</client-only>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<form class="uk-search uk-search-default uk-width-1-1">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search holidays ..."
							@keypress.enter.prevent="SearchHolidays"
						>
					</form>
					<el-table :data="holidays"
						:pagination-props="null"
						:paging="false"
						stripe
					>
						<el-table-column prop="flow_no"
							label="#"
							sortable="custom"
							type="expand"
						>
							<template slot-scope="props">
								<p>Holiday Name: {{ props.row.holiday_name }}</p>
								<p>Holiday Type: {{ props.row.holiday_type }}</p>
								<p>Holiday Date: {{ props.row.holiday_date }}</p>
								<p>Date Type: {{ props.row.holiday_date_type }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="holiday_name" label="Holiday Name" sortable="custom">
						</el-table-column>
						<el-table-column prop="holiday_type" label="Holiday Type" sortable="custom">
						</el-table-column>
						<el-table-column prop="holiday_date" label="Holiday Date" sortable="custom">
						</el-table-column>
						<el-table-column prop="holiday_date_type" label="Date Type" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<nuxt-link :to="'/ems/view/'+ scope.row.leave_id">
										<el-button type="success"
											class="elbutton"
											size="mini"
											uk-tooltip="Edit"
											@click="handleEditRow(scope.$index)"
										>
											<i class="el-icon-edit" />
										</el-button>
									</nuxt-link>
									<el-button type="danger" size="mini" uk-tooltip="Delete" @click="handleSaveRow(scope.$index)">
										<i class="el-icon-delete" />
									</el-button>
									<el-button type="primary" size="mini" uk-tooltip="View" @click="handleSaveRow(scope.$index)">
										<i class="el-icon-view" />
									</el-button>
								</el-button-group>
							</template>
						</el-table-column>
					</el-table>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
export default {
	components: {
	},
	layout:'lms',
	data: () => ({
		errorMessage:'',
		holidays:[],
		searchTerm:''
	}),
	head () {
		return {
			'title': 'Leave | Holidays'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'holidayId',
				},
				{
					label: 'Holiday Name',
					field: 'holiday_name',
				},
				{
					label: 'Holiday Date',
					field: 'holiday_date',
				},
				{
					label: 'Holiday Type',
					field: 'holiday_type',
				},
				{
					label: 'Holiday Date Description',
					field: 'holiday_date_description',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},
	mounted () {
		this.getHolidays()
	},
	methods: {
		SearchHolidays () {
			this.$axios.get(
				`leave-svc/v1/holidays/holidays?HolidaysSearch=${this.searchTerm}`						
			)
				.then(response =>{
					this.holidays = response.data.data.dataModels
				})
		},
		async getHolidays () {
			try {
				await this.$axios.get(
					'leave-svc/v1/holidays/holidays'
				)
					.then(response =>{
						this.holidays = response.data.data.dataModels
					})
					.catch(error => {


					})
			} catch (error) {

			}
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
