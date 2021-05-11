<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Relationship Status
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-status">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="relationshipStatus"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'relationship_status_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'relationship_status'">
								{{ props.row.relationship_status }}
							</span>
							<span v-if="props.column.field === 'action'">
								<button class="sc-button sc-button-mini md-bg-orange-400" data-uk-tooltip="View employee">
									<fa :icon="['fas', 'eye']" class="md-color-white" />	
								</button>
								<button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit employee">
									<fa :icon="['fas', 'edit']" class="md-color-white" />	
								</button>
							</span>
						</template>
					</VueGoodTable>
				</ScCardBody>
			</ScCard>
			<div id="modal-status" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Status
					</h2>
					<client-only>
						<RelationshipStatusForm button-text="Add"
							:submit-form="addStatus"
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
import  RelationshipStatusForm from "~/components/serviceComponents/ems/relationship-status-form";
import { VueGoodTable } from 'vue-good-table'
export default {
	components: {
		VueGoodTable,
		RelationshipStatusForm
	},
	layout: 'employee',
	data: () => ({
		relationshipStatus:[],	
	}),
	head () {
		return {
			'title': 'Employee | Relationship Status'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'relationship_status_id',
				},
				{
					label: 'Relationship Status',
					field: 'relationship_status',
				},
				{
					label: 'Action',
					field: 'action',
				},

			]
		}
	},

	mounted () {
	},
	methods: {
		getStatus () {
		},
		addStatus (){
			
		}

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
