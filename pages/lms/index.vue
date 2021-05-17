<template>
	<div id="sc-page-wrapper">
		<p uk-margin class="uk-margin-top uk-flex-center uk-flex uk-flex-center uk-margin-right">
			<button class="sc-button sc-button-large sc-button-primary uk-width-1-5">
				PENDING	LEAVES	<i class="mdi mdi-dna md-color-white"></i>
			</button>
			<button class="sc-button sc-button-large sc-button-primary uk-width-1-5 uk-margin-left">
				APPROVED LEAVES	<i class="mdi mdi-briefcase-check md-color-white"></i>
			</button>
			<button class="sc-button sc-button-large sc-button-primary  uk-width-1-5 uk-margin-left">
				DECLINED LEAVES	<i class="mdi mdi-briefcase-remove md-color-white"></i>
			</button>
			<button class="sc-button sc-button-primary sc-button-large uk-width-1-5 uk-margin-left uk-margin-right">
				ALL	LEAVES<i class="mdi mdi-view-list md-color-white "></i>
			</button>
		</p>
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/lms/create'" data-uk-tooltip="Apply Leave">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary">
						<i class="mdi mdi-plus"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardHeader class="uk-flex uk-flex-middle" separator>
					<ScCardTitle class="uk-flex-1">
						{{ titleText }}
						LEAVE APPLICATIONS
					</ScCardTitle>
				</ScCardHeader>
				<ScCardBody>
					<form class="uk-search uk-search-default uk-width-1-1">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search Leave ..."
							@keypress.enter.prevent="SearchLeave"
						>
					</form>

					<el-table :data="leave"
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
								<p>Staff No.: {{ props.row.staff_number }}</p>
								<p>Employee: {{ props.row.employee_id }}</p>
								<p>Leave Type: {{ props.row.leave_type_id }}</p>
								<p>Days: {{ props.row.days_applied }}</p>
								<p>Start Date: {{ props.row.start_date }}</p>
								<p>Return Date: {{ props.row.return_date }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="staff_number" label="Staff No" sortable="custom">
						</el-table-column>
						<el-table-column prop="employee_id" label="Employee" sortable="custom">
						</el-table-column>
						<el-table-column prop="leave_type_id" label="Leave Type" sortable="custom">
						</el-table-column>
						<el-table-column prop="days_applied" label="Days" sortable="custom">
						</el-table-column>
						<el-table-column prop="start_date" label="Start Date" sortable="custom">
						</el-table-column>
						<el-table-column prop="return_date" label="Return Date" sortable="custom">
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
		leave:[],
		searchTerm:'',
		titleText:''
		
	}),
	head () {
		return {
			'title': 'Leave | leave'
		}
	},
	computed: {

		    page () {
			return this.perPage;
		},
		columns () {
			return [
				{
					label: '#',
					field: 'leave_id',
				},
				{
					label: 'Employee',
					field: 'employee_id',
				},
				{
					label: 'Leave Type',
					field: 'leave_type_id',
				},
				{
					label: 'Number Of Days',
					field: 'days_applied',
				},
				{
					label: 'Leave Balance',
					field: 'new_balance',
				},
				{
					label: 'Start Date',
					field: 'start_date',
				},
            	{
					label: 'End Date',
					field: 'end_date',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},
	  watch: {
		"approvedButton": function () {
			this.determinePageProgressIndicator();
			
		}
	},
	mounted () {
		// this.getLeave()
		// this.determinePageProgressIndicator();
		// this.approvedLeave()
	},
	methods: {
		SearchLeave () {
			this.$axios.get(
				`leave-svc/v1/leave/leaves?LeaveSearch=${this.searchTerm}`					
			)
				.then(res =>{
					this.leave = res.data.data.dataModels
				})
		},
		    determinePageProgressIndicator () {
			this.approvedButton = this.declinedButton;
		},
		async getLeave () {
			let perPage=this.perPage
			try {
				
				await this.$axios.get(
					`leave-svc/v1/leave/leaves?pageSize=${perPage}&page=${this.currentPage}`
				)
					.then(response =>{
						this.leave = response.data.data.dataModels
						this.perPage=JSON.parse(response.data.data.pageSize)
						this.pages=response.data.data.pages
						this.currentPage=1	
						this.titleText="Pending Leaves"
					})
					.catch(error => {
						this.errorMessage = error.response.data.message

					})
			} catch (error) {

			}
		},
		async	perPageChanged (perPage) {
			try {
				await this.$axios.get(
					
					`/leave-svc/v1/leave/leaves?pageSize=${perPage}`
				)
					.then(response =>{
						this.leave = response.data.data.dataModels
						this.perPage=JSON.parse(response.data.data.pageSize)
						this.pages=response.data.data.pages
						this.currentPage=1		
					
					})
					.catch(error => {				
						this.snackText = JSON.stringify(error.response.data.message)
		        
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
