<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Employee Data
				</h1>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<!-- <form class="uk-search uk-search-default uk-width-1- uk-round">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search Employee ..."
							@keypress.enter.prevent="SearchEmployee"
						>
					</form> -->
					<!-- <datatable :columns="columns" :data="employees"></datatable>
					<datatable-pager v-model="page" type="abbreviated" :per-page="per_page"></datatable-pager> -->
					<!-- <data-table v-bind="bindings" /> -->
					<el-table :data="employees"
						:pagination-props="null"
						:paging="false"
						stripe
					>
						<!-- <span slot="pagination" style="color: red">I am slot</span> -->
						<el-table-column prop="flow_no"
							label="#"
							sortable="custom"
							type="expand"
						>
							<template slot-scope="props">
								<p>	Staff No: {{ props.row.employment_data.employee_number }}</p>
								<p>Name: {{ props.row.first_name }}</p>
								<p>Gender: {{ props.row.gender_id }}</p>
								<p>Mobile Number: {{ props.row.primary_mobile_number }}</p>
								<p>Email: {{ props.row.primary_email }}</p>
								<p>Section: {{ props.row.employment_data.section_id }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="employment_data.employee_number" label="Staff No." sortable="custom">
						</el-table-column>
						<el-table-column prop="first_name" label="Name" sortable="custom">
						</el-table-column>
						<el-table-column prop="gender_id" label="Gender" sortable="custom">
						</el-table-column>
						<el-table-column prop="primary_mobile_number" label="Mobile No." sortable="custom">
						</el-table-column>
						<el-table-column prop="primary_email" label="Email" sortable="custom">
						</el-table-column>
						<el-table-column prop="employment_data.section_id" label="Section" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<nuxt-link :to="'/ems/view/'+ scope.row.employee_id">
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
					<div>
						<!-- <el-pagination class="uk-pagination"
							:current-page.sync="currentPage"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next"
							:total="400"
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
						>
						</el-pagination> -->
					</div>
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


import DataTable from "@andresouzaabreu/vue-data-table";
Vue.component("DataTable", DataTable);
// import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import Vuetable from 'vuetable-2'
import 'vue-good-table/dist/vue-good-table.css'

export default {
	components: {
		// VueGoodTable,
		//  DatatableFactory
		// 		VuejsDatatableFactory
		// Datatables

	},
	layout: 'employee',
	data: () => ({
		 edited: false,
		 currentPage:1,
		employees:[
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// 	"edited":false
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },		{
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },
			// {
			// 	"staff_number": "4",
			// 	"first_name": "Cedric Kelly",
			// 	"gender": "Male",
			// 	"mobile_number": "+254708331531",
			// 	"email_address": "cedrickelly@gmail.com",
			// 	"section": "ICT ",	
			// },

		],
		searchTerm:'',
		 page: 1,
		per_page: 10,
		
	}),
	head () {
		return {
			'title': 'Employee | List of Employees'
		}
	},
	    computed: {
		bindings () {
			return {
				columns: [
					{
						key: '#',
						title: 'employee_id',
					},
					{
						key: 'Staff No.',
						title: 'staff_number',
					},
					{
						key: 'Name',
						title: 'first_name',
					},
					{
						key: 'Gender',
						title: 'gender',
					},
					{
						key: 'Mobile',
						title: 'mobile_number',
					},
					{
						key: 'Email',
						title: 'email_address',
					},
	        	{
						key: 'Section',
						title: 'section',
					},
					{
						key: 'Action',
						title: 'action',
					},
					{
						key: "phone",
						sortable: false,
						searchable: false,
						/* this will make this column appear to the right of the table
            since its index is greater than others*/
						index: 100,
					}, 
				],
				data: [/*the data*/]
				/* other props...*/
			}
		}
	},
	mounted () {
		this.getEmployees()
	},

	methods: {
		      handleSizeChange (val) {
			console.log(`${val} items per page`);
		},
		handleCurrentChange (val) {
			console.log(`current page: ${val}`);
		},
		SearchEmployee () {

		},
		async getEmployees () {
			  const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/employees`, { headers })
				.then(response =>{
					this.employees = response.data.data
					console.log(this.employees)
				})
				.catch(error => {
				})
		},
  	handleEditRow (index) {
			this.employees[index].edited = true
			this.edited=true
		},
		handleSaveRow (index) {
			this.employees[index].edited = false
		}
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
<style scoped>
.custom-icon {
   font-size: 2rem;
}
.elbutton{
	font-size: 3;
	border-radius: 3px;
	width: 4px;
	padding: auto;
}

.center{
   margin-left: auto;
   margin-right: auto;
   display: block !important;
   font-size: 3;
 } 

</style>
