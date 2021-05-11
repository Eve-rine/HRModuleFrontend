<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					LEAVE APPLICATIONS
				</h1>
			</div>
		</div>
		<!-- <div>
				<ScCard>
					<button class="sc-padding sc-padding-small-ends sc-small uk-flex uk-flex-middle" @click.prevent="">
						<ScCardTitle>
							PENDING
						</ScCardTitle>
					</button>
				</ScCard>
			</div>
			<div>
				<ScCard>
					<button class="sc-padding sc-padding-small-ends uk-flex uk-flex-middle" @click.prevent="">
						<ScCardTitle>
							APPROVED
						</ScCardTitle>
					</button>
				</ScCard>
			</div>
			<div>
				<ScCard>
					<button class="sc-padding sc-padding-small-ends uk-flex uk-flex-middle" @click.prevent="">
						<ScCardTitle>
							DECLINED
						</ScCardTitle>
					</button>
				</ScCard>
			</div>
			<div>
				<ScCard>
					<button class="sc-padding sc-padding-small-ends uk-flex uk-flex-middle" @click.prevent="">
						<ScCardTitle>
							ALL
						</ScCardTitle>
					</button>
				</ScCard>
			</div>
		</div> -->

		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/leave/create'" data-uk-tooltip="Apply Leave">
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
					<form class="uk-search uk-search-default uk-width-1-1">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search Leave ..."
							@keypress.enter.prevent="SearchLeave"
						>
					</form>
					<VueGoodTable
						:columns="columns"
						:rows="leave"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'leave_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'employee_id'">
								{{ props.row.leavetype.employee_id }}
							</span>
							<span v-if="props.column.field === 'leave_type_id'">
								{{ props.row.leavetype.leave_type }}
							</span>
							<span v-if="props.column.field === 'days_applied'">
								{{ props.row.days_applied }}
							</span>
							<span v-if="props.column.field === 'new_balance'">
								{{ props.row.new_balance }}
							</span>
							<span v-if="props.column.field === 'start_date'">
								{{ props.row.start_date }}
							</span>
							<span v-if="props.column.field === 'end_date'">
								{{ props.row.end_date }}
							</span>
							<span v-if="props.column.field === 'action'">
								<nuxt-link :to="'/leave/view/'+ props.row.leave_id">
									<button class="sc-button sc-button-mini md-bg-orange-400" data-uk-tooltip="View leave">
										<fa :icon="['fas', 'eye']" class="md-color-white" />	
									</button>
								</nuxt-link>
								<nuxt-link :to="'/leave/update/'+ props.row.leave_id">
									<button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit leave">
										<fa :icon="['fas', 'edit']" class="md-color-white" />	
									</button>
								</nuxt-link>
							</span>
						</template>
					</VueGoodTable>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
export default {
	components: {
		VueGoodTable,
	},
	data: () => ({
		leave:[],
		searchTerm:'',
		titleText:''
		
	}),
	head () {
		return {
			'title': 'Leave | leave'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'leave_id',
				},
				{
					label: 'Employee',
					field: 'employee_id',
				},
				{
					label: 'Leave Type',
					field: 'leave_type_id',
				},
				{
					label: 'No. Of Days',
					field: 'days_applied',
				},
				{
					label: 'Leave Balance',
					field: 'new_balance',
				},
				{
					label: 'Start Date',
					field: 'start_date',
				},
            	{
					label: 'End Date',
					field: 'end_date',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},
	  watch: {

	},
	mounted () {
	},
	methods: {
		SearchLeave () {	
		},

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
