{
	footer_copyright_notice: '© 2014 Hindu Temple of Bloomington-Normal Registered • Not-for-profit tax-exempt religious organization',
	$routes_types_hidden: true,
	routes_types: {
		route: {
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: '',
			link: ''
		},
		route_menu: {
			$route_type_type: 'title',
			route_type: 'Link Menu',
			title: '',
			$routes_min: 1,
			routes: [
				{
					title: '',
					link: ''
				}
			]
		}
	},
  $navigation_logo_type: 'image',
  navigation_logo: '',
	$navigation_templatitator: '@@routes_types',
	navigation: [
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Home',
			link: '/'
		},
		{
			$route_type_type: 'title',
			route_type: 'Link Menu',
			title: 'Information',
			$routes_min: 1,
			routes: [
				{
					title: 'Mission',
					link: 'mission'
				},
				{
					title: 'Guidelines',
					link: 'guidelines'
				},
				{
					title: 'Leadership',
					link: 'leadership'
				}
			]
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Donate',
			link: 'donate'
		},
		{
			$route_type_type: 'title',
			route_type: 'Link Menu',
			title: 'Religious',
			$routes_min: 1,
			routes: [
				{
					title: 'Priest Services',
					link: 'priest_services'
				},
				{
					title: 'Deity Services',
					link: 'deity'
				},
				{
					title: 'Priest Profiles',
					link: 'priest_profiles'
				},
				{
					title: 'Pooja Samagri',
					link: 'pooja_samagri'
				}
			]
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Classes',
			link: 'classes'
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Calendar',
			link: 'calendar'
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Contact Us',
			link: 'contact_us'
		}
	]
}
