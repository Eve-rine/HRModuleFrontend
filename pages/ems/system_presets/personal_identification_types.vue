<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Personal Identification Types
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-identity_type">
					<i class="mdi mdi-plus"></i>Add Type
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="identity_types"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'personal_identification_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'personal_identification_type'">
								{{ props.row.personal_identification_type }}
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
			<div id="modal-identity_type" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Type
					</h2>
					<client-only>
						<PersonalIdentificationForm button-text="Add"
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
import  PersonalIdentificationForm from "~/components/serviceComponents/ems/personal-identification-form";
import { VueGoodTable } from 'vue-good-table'
export default {
	components: {
		VueGoodTable,
		PersonalIdentificationForm
	},
	layout: 'employee',
	data: () => ({
		identity_types:[],		
	}),
	head () {
		return {
			'title': 'Employee | Personal Identification types'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'personal_identification_id',
				},
				{
					label: 'Type',
					field: 'personal_identification_type',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},

	mounted () {
		this.getIdentityTypes()
	},
	methods: {
		getIdentityTypes () {
		},
		addType (){
			
		}

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
