<template>
	<div id="sc-page-wrapper" class="uk-flex uk-flex-column">
		<div id="sc-page-top-bar" class="sc-top-bar">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					APPROVED LEAVES
				</h1>
				<!-- </div> -->
			</div>
			<div class="sc-top-bar-content uk-flex-1 uk-flex-right">
				<div class="sc-actions">
					<!-- <button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit account"> -->
					<a 
						href="javascript:void(0)"
						class="sc-actions-icon md-primary"
						data-uk-tooltip
						title="Pending Leaves"
					>
						<i class="mdi mdi-dna sc-button-warning"></i>
						<!-- <i class="mdi mdi-dna md-color-indigo-600"></i> -->
					</a>
					<!-- </button> -->
		
					<a 
						href="javascript:void(0)"
						class="sc-actions-icon sc-js-block-wave"
						data-uk-tooltip
						title="Approved Leaves"
					>
						<i class="mdi mdi-check-bold sc-button-success"></i>
					</a>
					<a 
						href="javascript:void(0)"
						class="sc-actions-icon sc-js-block-wave"
						data-uk-tooltip
						title="Declined Leaves"
					>
						<i class="mdi mdi-close-outline sc-button-danger"></i>
					</a>
					<a  
						href="javascript:void(0)"
						class="sc-actions-icon sc-js-block-wave"
						data-uk-tooltip
						title="All Leaves"
					>
						<i class="mdi mdi-view-list sc-button-primary"></i>
					</a>
				</div>
			</div>
		</div>
		<!-- <p uk-margin class="uk-margin-top uk-flex-center uk-flex uk-flex-center uk-margin-right">
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
		</p> -->
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/lms/create'" data-uk-tooltip="Apply Leave">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary">
						<i class="mdi mdi-plus"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<!-- <ScCardHeader class="uk-flex uk-flex-middle" separator>
					<ScCardTitle class="uk-flex-1">
						{{ titleText }}
						LEAVE APPLICATIONS
					</ScCardTitle>
				</ScCardHeader> -->
				<ScCardBody>
					<div class="uk-align-right@m">
						<form class="uk-flex uk-search">
							<input name="search"
								type="search"
								class=""
								placeholder="Search"
								@keypress.enter.prevent="SearchLeave"
							>
							<button class="uk-button-primary" @click="SearchLeave">
								<i class="mdi mdi-magnify" />
							</button>
						</form>
					</div>
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
			'title': 'LMS | Applications'
		}
	},
	computed: {
	},
	  watch: {
	},
	mounted () {
		this.getLeave()
	},
	methods: {
		SearchLeave () {
		},
		async getLeave () {
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
