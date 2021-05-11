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
					<VueGoodTable
						:columns="columns"
						:rows="EmploymentTypes"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'employment_type_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'employment_type'">
								{{ props.row.employment_type }}
							</span>
							<span v-if="props.column.field === 'working_hours'">
								{{ props.row.working_hours }}
							</span>
							<span v-if="props.column.field === 'action'">
								<button class="sc-button sc-button-mini md-bg-orange-400" data-uk-tooltip="View">
									<fa :icon="['fas', 'eye']" class="md-color-white" />	
								</button>
								<button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit">
									<fa :icon="['fas', 'edit']" class="md-color-white" />	
								</button>
							</span>
						</template>
					</VueGoodTable>
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

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import  EmploymentTypesForm from "~/components/serviceComponents/ems/employment-types-form";
export default {
	components: {
		VueGoodTable,
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
