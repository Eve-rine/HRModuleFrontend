<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Department Heads
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-department">
					<i class="mdi mdi-plus"></i>Add New
				</a>
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
								@keypress.enter.prevent="Search"
							>
							<button class="uk-button-primary" @click.prevent="Search">
								<i class="mdi mdi-magnify" />
							</button>
						</form>
					</div>
					<el-table :data="department_heads"
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
								<p>Department: {{ props.row.department_id }}</p>
								<p>Employee: {{ props.row.employee_id }}</p>
								<p>Start Date: {{ props.row.start_date }}</p>
								<p>End Date: {{ props.row.end_date }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="department_id" label="Department" sortable="custom">
						</el-table-column>
						<el-table-column prop="employee_id" label="Employee" sortable="custom">
						</el-table-column>
						<el-table-column prop="start_date" label="Start Date" sortable="custom">
						</el-table-column>
						<el-table-column prop="end_date" label="End Date" sortable="custom">
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
				</ScCardBody>
			</ScCard>
			<div id="modal-department" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-3@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Department Head
					</h2>
					<client-only>
						<DepartmentHeadsForm button-text="Add"
							:submit-form="addDepartment"
							:has-submit-button="true"
						/>
					</client-only>
				</div>
			</div>
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
import  DepartmentHeadsForm from "~/components/serviceComponents/ems/department-heads-form";
export default {
	components: {
		DepartmentHeadsForm
	},
	layout: 'employee',
	data: () => ({
		department_heads:[],
		searchTerm:''
	
	}),
	head () {
		return {
			'title': 'EMS | DepartmentHeads'
		}
	},
	computed: {
	},
	methods: {
		addDepartment (){
	
		},
		async Search (){
		 const headers = {'x-service': 'ems-svc'};
			await this.$axios.get(`api/department-heads?qpsearch=${this.searchTerm}`, { headers })
				.then(response =>{
					this.department_heads = response.data.data
				})
				.catch(error => {
				})
		}
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
