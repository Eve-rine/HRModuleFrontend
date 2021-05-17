<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Employment Types
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-create">
					<i class="mdi mdi-plus"></i>Add Type
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<el-table :data="EmploymentTypes"
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
								<p>Gender: {{ props.row.gender }}</p>
							</template>
						</el-table-column>
						<el-table-column prop="employment_type" label="Employment Type" sortable="custom">
						</el-table-column>
						<el-table-column prop="working_hours" label="Working Hrs" sortable="custom">
						</el-table-column>
						<el-table-column label="Action">
							<template slot-scope="scope">
								<el-button-group>
									<el-button type="success"
										class="elbutton"
										size="mini"
										uk-tooltip="Edit"
										@click="handleEditRow(scope.row.gender_id,null)"
									>
										<i class="el-icon-edit" />
									</el-button>
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
			<div id="modal-create" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Create Employment Type
					</h2>
					<client-only>
						<EmploymentTypesForm button-text="Add"
							:submit-form="addType"
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
import  EmploymentTypesForm from "~/components/serviceComponents/ems/employment-types-form";
export default {
	components: {
		EmploymentTypesForm
	},
	layout: 'employee',
	data: () => ({
		EmploymentTypes:[],	
	}),
	head () {
		return {
			'title': 'Employee | EmploymentTypes'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'employment_type_id',
				},
				{
					label: 'Employment Type',
					field: 'employment_type',
				},
				{
					label: 'Working Hours',
					field: 'working_hours',
				},
				{
					label: 'Action',
					field: 'action',
				},

			]
		}
	},

	mounted () {
		this.getGenders()
	},
	methods: {
		getGenders () {
		},
		addType (){
			
		}
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
