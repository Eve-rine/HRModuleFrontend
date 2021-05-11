import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const menuEntries = [
	{
		id: uniqueID(),
		title: "Dashboard",
		icon: "mdi mdi-home-circle",
		page: "/dashboard"
	},
	{
		id: uniqueID(),
		title: "Employee profiles",
		page: "/ems",
		icon: "mdi mdi-account",
		isOpen: false,
		level: 0,
		submenu:[
			{
				id: uniqueID(),
				title: "Add Employee",
				page: "/ems/create"
			},
			{
				id: uniqueID(),
				title: "Employees List",
				page: "/ems"
			}
		],
	},
	{
		id: uniqueID(),
		title: "System Presets",
		page: "/system_presets",
		icon: "mdi mdi-cogs",
		isOpen: false,
		level: 0,
		submenu: [
			{
				id: uniqueID(),
				title: "Genders",
				page: "/ems/system_presets/genders"
			},
			{
				id: uniqueID(),
				title: "Personal Identification Types",
				page: "/ems/system_presets/personal_identification_types"
			},
			{
				id: uniqueID(),
				title: "Countries",
				page: "/ems/system_presets/countries"
			},
			{
				id: uniqueID(),
				title: "Relationship Status",
				page: "/ems/system_presets/relationship_status"
			},
			{
				id: uniqueID(),
				title: "Departments",
				page: "/ems/system_presets/departments"
			},
			{
				id: uniqueID(),
				title: "Department Heads",
				page: "/ems/system_presets/department_heads"
			},
			{
				id: uniqueID(),
				title: "Sections",
				page: "/ems/system_presets/sections"
			},
			{
				id: uniqueID(),
				title: "Section Heads",
				page: "/ems/system_presets/section_heads"
			},
			{
				id: uniqueID(),
				title: "Employment Types",
				page: "/ems/system_presets/employment_types"
			}
		]
	},
	{
		id: uniqueID(),
		title: "System Settings",
		icon: "mdi mdi-settings",
		page: ""
	},	
];

