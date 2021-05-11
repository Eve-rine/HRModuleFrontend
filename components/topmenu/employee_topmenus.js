import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const topMenuData = [
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


// export const topMenuData= [
// 			{
// 				id: uniqueID(),
// 				title: "Mailbox",
// 				url: '/pages/mailbox'
// 			},
// 			{
// 				id: uniqueID(),
// 				title: "Components",
// 				url: null,
// 				isOpen: false,
// 				submenu: [
// 					{
// 						id: uniqueID(),
// 						title: "Accordion",
// 						url: '/components/accordion'
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Alert",
// 						url: '/components/alert'
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Avatars",
// 						url: '/components/avatars'
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Grid",
// 						url: '/components/grid'
// 					}
// 				]
// 			},
// 			{
// 				id: uniqueID(),
// 				title: "Pages",
// 				url: null,
// 				isOpen: false,
// 				submenu: [
// 					{
// 						id: uniqueID(),
// 						title: "Blank",
// 						url: '/pages/blank'
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Gallery",
// 						url: '/pages/gallery'
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Settings",
// 						url: '/pages/settings'
// 					}
// 				]
// 			},
// 			{
// 				id: uniqueID(),
// 				title: "Nested",
// 				url: null,
// 				isOpen: false,
// 				submenu: [
// 					{
// 						id: uniqueID(),
// 						title: "Level 1",
// 						url: null,
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Level 1",
// 						url: null,
// 						isOpen: false,
// 						submenu: [
// 							{
// 								id: uniqueID(),
// 								title: "Sub-level 1.1",
// 								url: null
// 							},
// 							{
// 								id: uniqueID(),
// 								title: "Sub-level 1.1",
// 								url: null
// 							},
// 							{
// 								id: uniqueID(),
// 								title: "Sub-level 1.1",
// 								url: null,
// 								isOpen: false,
// 								submenu: [
// 									{
// 										id: uniqueID(),
// 										title: "Sub-level 1.1.1",
// 										url: null
// 									},
// 									{
// 										id: uniqueID(),
// 										title: "Sub-level 1.1.1",
// 										url: null
// 									},
// 									{
// 										id: uniqueID(),
// 										title: "Sub-level 1.1.1",
// 										url: null
// 									},
// 									{
// 										id: uniqueID(),
// 										title: "Sub-level 1.1.1",
// 										url: null
// 									},
// 									{
// 										id: uniqueID(),
// 										title: "Sub-level 1.1.1",
// 										url: null
// 									}
// 								]
// 							},
// 							{
// 								id: uniqueID(),
// 								title: "Sub-level 1.1",
// 								url: null
// 							},
// 							{
// 								id: uniqueID(),
// 								title: "Sub-level 1.1",
// 								url: null
// 							}
// 						]
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Level 1",
// 						url: null,
// 					},
// 					{
// 						id: uniqueID(),
// 						title: "Level 1",
// 						url: null,
// 					}
// 				]
// 			}
// 		],