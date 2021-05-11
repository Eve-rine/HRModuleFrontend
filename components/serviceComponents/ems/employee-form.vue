<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					{{ titleText }}
				</h1>
			</div>
		</div>
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/employee'" data-uk-tooltip="Back">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary">
						<i class="mdi mdi-arrow-left"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Personal Information
									</ScCardTitle>
								</div>
							</div>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									First Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.first_name" mode="outline" :error-state="errors.first_name ? true : false"></ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.first_name">
											{{ errors.first_name[0] }}
										</li>
									</ul>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Middle Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.middle_name" mode="outline"></ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.middle_name">
											{{ errors.middle_name[0] }}
										</li>
									</ul>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Last Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.last_name" mode="outline"></ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Personal Identification type
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.personal_identification_type_id"
										:options="IdentificationTypes"
										:settings="{ 'width': '100%', 'placeholder': 'Select type...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Identification Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.identification_number" mode="outline"></ScInput>
								</div>
							</div>					
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Date Of Birth
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.date_of_birth"
										v-flatpickr
										placeholder="Pick date..."
										:error-state="false"
										mode="outline"
									>
									</ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Gender
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.gender_id"
										:options="Gender"
										:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Relationship Status
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.relationship_status_id"
										:options="relationshipStatus"
										:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Nationality
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="personal_details.nationality"
											:options="nationalities"
											:settings="{ 'width': '100%', 'placeholder': 'Select employee...', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<ScCardTitle>
								Contact Details
							</ScCardTitle>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-6@m">
								<label class="uk-form-label">
									Primary Mobile Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.primary_mobile_number" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-6@m">
								<label class="uk-form-label">
									Alternate Mobile Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.alternate_mobile_number" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Primary Email Adress
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.primary_email" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Work Email Adress
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.work_email" mode="outline"></ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Postal Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.postal_address"
										mode="outline"
										name="postal_address"
										:error-state="false"
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Residential Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.residential_address" mode="outline"></ScInput>
								</div>
							</div>	
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Permanent Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.permanent_address" mode="outline"></ScInput>
								</div>
							</div>
						</div>		
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Academic Qualifications
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addAcademics">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
						<div v-for="(academic, index) in academic_qualifications" :key="academic.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid uk-margin-top" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Instituition Attended
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="academic.instituition_attended" :error-state="false" mode="outline"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="errors.academic">
													</li>
												</ul>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Start Date
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="academic.start_date"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												End Date
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="academic.end_date"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"
												>
												</ScInput>
											</div>
										</div>
									</div>
									<div class="uk-grid" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Qualification
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="academic.qualification"
													mode="outline"
													name="qualification"
													:error-state="false"
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Grade Attained
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="academic.grade_attained" :error-state="false" mode="outline"></ScInput>
											</div>
										</div>					
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Qualification Document
											</label>
											<div class="uk-form-controls">
												<div class="uk-form-controls">
													<input id="academic.qualification_document"
														ref="file"
														:error-state="false"
														type="file"
														mode="none"
														@change="handleFileUpload()"
													>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeAcademics(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Work History
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addOrganization">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
						<div v-for="(organization, index) in work_history" :key="organization.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid uk-margin-top" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Organization
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="organization.organization" :error-state="false" mode="outline"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="errors.organization">
													</li>
												</ul>
											</div>
										</div>
										<div class="uk-width-1-6@m">
											<label class="uk-form-label">
												Start Date
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="organization.start_date"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-6@m">
											<label class="uk-form-label">
												End Date
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="organization.end_date"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Designition
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="organization.designition"
													mode="outline"
													name="designition"
													:error-state="false"
												>
												</ScInput>
											</div>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeOrganization(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>	
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Referees
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addReferee">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
						<div v-for="(referee, index) in referees" :key="referee.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid uk-margin-top" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Referee Name
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="referee.referee_name" :error-state="false" mode="outline"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="errors.referees">
													</li>
												</ul>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Mobile Number
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="referee.mobile_number" :error-state="false" mode="outline"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="errors.referees">
													</li>
												</ul>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Email Address
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="referee.email_address" :error-state="false" mode="outline"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="errors.referees">
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="uk-grid" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Postal Address
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="referee.postal_address"
													mode="outline"
													name="postal_address"
													:error-state="false"
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label class="uk-form-label">
												Physical Address
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="referee.physical_address" :error-state="false" mode="outline"></ScInput>
											</div>
										</div>					
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeAcademics(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<ScCardTitle>
								Work Information
							</ScCardTitle>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Department
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.department_id"
											:options="Departments"
											:settings="{ 'width': '100%', 'placeholder': 'Select a department..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Section
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.section_id"
											:options="Sections"
											:settings="{ 'width': '100%', 'placeholder': 'Select a section..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Type
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.employment_type"
											:options="EmploymentTypes"
											:settings="{ 'width': '100%', 'placeholder': 'Select a type..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Duration
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.employment_duration"
										:error-state="false"
										mode="outline"																					
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Date
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.employment_date"
										v-flatpickr
										placeholder="Pick date..."
										:error-state="false"
										mode="outline"																					
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Exit Date(YY-MM-DD)
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.exit_date"
										v-flatpickr
										:error-state="false"
										mode="outline"	
										disabled																					
									>
									</ScInput>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Dependant Information
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addDependant">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
						<div v-for="(dependant, index) in dependants" :key="dependant.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid-match uk-grid" data-uk-grid>
										<div class="uk-width-1-4@m">
											<label>Full Name</label>
											<ScInput v-model="dependant.dependant_name" name="dependant_name" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-4@m">
											<label class="uk-form-label">
												Date of Birth
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="dependant.date_of_birth"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"																				
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-4@m">
											<label>Gender</label>
											<Select2
												v-model="dependant.gender"
												:options="Gender"
												:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
											></Select2>
										</div>
										<div class="uk-width-1-4@m">
											<label>Relation</label>
											<ScInput v-model="dependant.relation" name="relation" mode="outline" :error-state="false">													
											</ScInput>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeDependant(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>	
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Kin Information
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addKin">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
				
						<div v-for="(kin, index) in kins" :key="kin.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid-match uk-grid" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label>Full Name</label>
											<ScInput v-model="kin.kin_name" name="kin_name" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-3@m">
											<label>
												Relation
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="kin.kin_relation" name="relation" mode="outline" :error-state="false">													
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-3@m">
											<label>Mobile Number</label>
											<ScInput v-model="kin.mobile_number" name="mobile_number" mode="outline" :error-state="false">													
											</ScInput>
										</div>
									</div>
									<div class="uk-grid-match uk-grid" data-uk-grid>
										<div class="uk-width-1-3@m">
											<label>Email Address</label>
											<ScInput v-model="kin.kin_email_address" name="email_address" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-3@m">
											<label>Postal Address</label>
											<ScInput v-model="kin.postal_address" name="postal_address" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-3@m">
											<label>Physical Address</label>
											<ScInput v-model="kin.physical_address" name="physical_address" mode="outline" :error-state="false">													
											</ScInput>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeKin(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
					<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
						<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(dependants,personal_details,work_details,contact_details,kins,work_history,academic_qualifications)">
							{{ buttonText }}
						</button>
					</div>
				</ScCardBody>
			</sccard>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
import Select2 from '~/components/Select2'
import 'vue-good-table/dist/vue-good-table.css'
if(process.client) {
	require('~/plugins/flatpickr');
}
import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export default {
	name: 'EmployeeForm',
	components: {
		ScInput,
		Select2
	},
	  props: {
	  	titleText: {
			type: String,
			required: true,
		},
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required: true
		},
		getRecord: {
			type: Function,
			required: false,
			default:null
		},
		hasSubmitButton:{
			type:Boolean,
			default:false
		}

	},
	data: () => ({
		responseMessage:'',
		personal_details:{
			first_name: '',
			middle_name:'',
			last_name:'',
			personal_identification_type_id:'',
			identification_number:'',
			date_of_birth:'',
			gender_id:'',
			relationship_status_id:'',
			nationality:'',
		},
		work_details:{
			department_id: '',
			section_id:'',
			employment_type:'',
			employment_duration:'',
			employment_date:'',
			exit_date:'',
		},
		contact_details:{
			primary_mobile_number: '',
			alternate_mobile_number:'',
			primary_email:'',
			work_email:'',
			postal_address:'',
			residential_address:'',
			permanent_address:'',
		},
		academic_qualifications:[{
			instituition_attended:'',
			start_date:'',
			end_date:'',
			qualification:'',
			grade_attained:'',
			qualification_document:''
		}],
		work_history:[{
			id: uniqueID(),
			organization:'',
			start_date:'',
			end_date:'',
			designition:''
		}],
		referees:[{
			referee_name:'',
			mobile_number:'',
			email_address:'',
			postal_address:'',
			physical_address:''
		}],
		dependants: [
			{
				id: uniqueID(),
				dependant_name:'',
				date_of_birth:'',
				gender: '',
				relation: '',
			}
		],	
		kins:[
			{
				id: uniqueID(),
				kin_name:'',
				relation:'',
				mobile_number: '',
				postal_address: '',
				physical_address: '',
				email_address:''
			}
		],
		status: [],				
		nationality: [],
		genders: [],	
		identification_types:[],
		EmploymentTypes:[],
		Sections:[],
		Departments:[]
	}),
	head () {
		return {
			'title': 'Employee | Create'
		}
	},
	computed: {
		relationshipStatus () {
			return this.status.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		Gender () {
			return this.genders.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		nationalities () {
			return this.nationality.map(function (obj) {
				obj.id = obj.id || obj.leave_type_id;
				obj.text = obj.text || obj.leave_type;
				return obj;
			});
		},
		IdentificationTypes (){
			return this.identification_types.map(function (obj) {
				obj.id = obj.id || obj.leave_type_id;
				obj.text = obj.text || obj.leave_type;
				return obj;
			});	
		}
		
	},
	mounted (){
		this.getRecord(this.dependants, this.personal_details, this.work_details, this.contact_details, this.kins)
	},
	methods: {
		addDependant () {
			this.dependants.push({
				id: uniqueID(),
				dependant_name:'',
				date_of_birth:'',
				gender: '',
				relation: '',
			})
		},
		addOrganization () {
			this.work_history.push({
				id: uniqueID(),
				organization:'',
				start_date:'',
				end_date:'',
				designition:''
			})
		},
		addKin () {
			this.kins.push({
			    id: uniqueID(),
				kin_name:'',
				relation:'',
				mobile_number: '',
				postal_address: '',
				physical_address: '',
			})
		},
		addAcademics () {
			this.academic_qualifications.push({
				instituition_attended:'',
				start_date:'',
				end_date:'',
				qualification:'',
				grade_attained:'',
				qualification_document:''
			})
		},
		addReferee () {
			this.referees.push({
				referee_name:'',
				mobile_number:'',
				email_address:'',
				postal_address:'',
				physical_address:'',
			})
		},
		removeDependant (index) {
			this.dependants.splice(index, 1);	
		},
		removeOrganization (index) {
			this.work_history.splice(index, 1);	
		},
		removeKin (index) {
			this.kins.splice(index, 1);	
		},
		removeAcademics (index) {
			this.academic_qualifications.splice(index, 1);	
		},
		removeReferee (index) {
			this.referees.splice(index, 1);	
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  
</style>
<style lang="scss" scoped>
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}

</style>