<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Designitions
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-designition">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="designitions"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'designition_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'department_id'">
								{{ props.row.department_id }}
							</span>
							<span v-if="props.column.field === 'designition'">
								{{ props.row.designition }}
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
			<div id="modal-designition" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-3@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Create Section
					</h2>
					<form>
						<div class="uk-margin-top" data-uk-grid>
							<div class="uk-width-1-1">
								<label class="uk-form-label">
									Department
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="department_id"
										:options="Departments"
										:settings="{ 'width': '100%', 'placeholder': 'Select Department...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-1">
								<label class="uk-form-label">
									Designition
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="designition" name="designition" mode="outline" :error-state="false">													
									</ScInput>
								</div>
							</div>
						</div>
						<div class="uk-modal-footer uk-text-right">
							<button class="sc-button sc-button-primary" data-uk-tooltip="Save">
								<i class="mdi mdi-checkbox-marked-outline"></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ScInput from '~/components/Input'
import Select2 from '~/components/Select2'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
export default {
	components: {
		VueGoodTable,
		ScInput,
		Select2
	},
	layout: 'employee',
	data: () => ({
		designitions:[],
		department_id:'',
		designition:'',
				
	}),
	head () {
		return {
			'title': 'Employee | Designitions'
		}
	},
	mounted () {
		this.getDesignitions()
	},
	methods: {
		getDesignitions () {
		}
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
