<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Gender
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-gender">
					<i class="mdi mdi-plus"></i>Add Gender
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="genders"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'gender_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'type'">
								{{ props.row.type }}
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
			<div id="modal-gender" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Gender
					</h2>
					<client-only>
						<GenderForm button-text="Add"
							:submit-form="addGender"
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
import  GenderForm from "~/components/serviceComponents/ems/gender-form";
export default {
	components: {
		VueGoodTable,
		GenderForm
	},
	layout: 'employee',
	data: () => ({
		genders:[],	
	}),
	head () {
		return {
			'title': 'Employee | Genders'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'gender_id',
				},
				{
					label: 'Type',
					field: 'type',
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
		async getGenders () {
		},
	async addGender (gender_details){
			const headers={
				headers: {
					'x-service': 'ems-svc'
				},
			}
			try {
			await this.$axios.post( 'api/gender', {
					gender: gender_details.gender,
	
				}, headers).then(response=>{
				// this.$router.push('/ems/system_presets/genders')			
			
				}) .catch(function (response) {
				})
			} catch (err) {  
	          return
			      }	
		},

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
