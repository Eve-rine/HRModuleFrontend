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
					<div class="uk-flex uk-flex-right">
						<form class="uk-flex">
							<input v-model="searchTerm"
								name="search"
								type="search"
								class=""
								placeholder="Search"
								@keypress.enter.prevent="SearchEmployee"
							>
							<button class="uk-button-primary" @click.prevent="SearchEmployee">
								<i class="mdi mdi-magnify" />
							</button>
						</form>
					</div>
					<div>
						<el-table :data="employees"
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
									<p>	Staff No: {{ props.row.employment_data.employee_number }}</p>
									<p>Name:{{ formatName(props.row.first_name,props.row.last_name) }}</p>
									<p>Gender: {{ props.row.gender_id }}</p>
									<p>Mobile Number: {{ props.row.primary_mobile_number }}</p>
									<p>Email: {{ props.row.primary_email }}</p>
									<p>Section: {{ props.row.employment_data.section_id }}</p>
								</template>
							</el-table-column>
							<el-table-column prop="employment_data.employee_number" label="Staff No." sortable="custom">
							</el-table-column>
							<el-table-column prop="first_name" label="Name" sortable="custom">
								<template slot-scope="props">
									{{ formatName(props.row.first_name,props.row.last_name) }}
								</template>
							</el-table-column>
							<el-table-column prop="gender_id" label="Gender" sortable="custom">
							</el-table-column>
							<el-table-column prop="primary_mobile_number" label="Mobile" sortable="custom">
							</el-table-column>
							<el-table-column prop="primary_email" label="Email" sortable="custom">
								<template slot-scope="props">
									{{ truncateEmail(props.row.primary_email) }}
								</template>
							</el-table-column>
							<el-table-column prop="employment_data.section_id" label="Section" sortable="custom">
							</el-table-column>
							<el-table-column label="Action">
								<template slot-scope="scope">
									<el-button-group>
										<nuxt-link :to="'/ems/view/'+ scope.row.employee_id">
											<el-button type="success"
						
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
					</div>
					<div>
						<Pagination v-if="showPagination"
							:total-pages="pages"
							:current-page="currentPage"
							:per-page="perPage"
							@pagechanged="getEmployees"
							@dropChanged="perPageChanged"
						/>
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
import Pagination from "~/components/pagination";
export default {
	components: {
		Pagination,
	},
	layout: 'employee',
	data: () => ({
		searchTerm:'',
		employees:[],
		pages:0,
		perPage:10,
		currentPage:1,
		showPagination:true
		
	}),
	head () {
		return {
			'title': 'EMS | List of Employees'
		}
	},
	    computed: {
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
		async SearchEmployee () {
			 const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/employees?qpsearch=${this.searchTerm}`, { headers })
				.then(response =>{
					this.employees = response.data.data
				})
				.catch(error => {
				})
		},
		async getEmployees (page) {
			this.currentPage=page
			  const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/employees?page=${page}&per-page=${this.perPage}`, { headers })
				.then(response =>{
					this.employees = response.data.data	
					this.totalRecords=response.data.totalCount
					this.pages=response.data.totalCount
					this.currentPage=page
					this.perPage=JSON.parse(response.data.pageSize)
					if(response.data.pageCount>1){
						this.showPagination=true
					}
				})
				.catch(error => {
				})
		},
		async perPageChanged (page) {
			try {
				this.perPage = page;
				  const headers = {'x-service': 'ems-svc'};
				await this.$axios.get(					
					`api/employees?per-page=${page}`, {headers}
				)
					.then(response =>{
						this.employees = response.data.data	
						this.totalRecords=response.data.totalCount
						this.pages=response.data.totalCount
						this.currentPage=1
					})
					.catch(err => {			        
					})
			} catch (err) {
			}
		},
  	handleEditRow (index) {
			this.employees[index].edited = true
			this.edited=true
		},
		handleSaveRow (index) {
			this.employees[index].edited = false
		},
		truncateEmail (email) {
			if (email.length > 5) {
				return email.substring(0, 5) + '...';
			}
			return email;
		},
		formatName (name1, name2){
			var nam1=name1
			var nam2=name2
			var whitespace=""
			// return nam1.concat(whitespace, nam2)
			return nam1+""+nam2
		},
	}
}
</script>
<style lang="scss">

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
 .index-search-form {
    display: flex;
}

.inputField {
    flex: 1;
}



</style>
