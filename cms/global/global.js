{
	footer_copyright_notice: '© 2014 Hindu Temple of Bloomington-Normal Registered • Not-for-profit tax-exempt religious organization',
	$navigation_logo_type: 'image',
	navigation_logo: '',
	$navigation_templatitator: '@@global.routes_types',
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
					link: '/mission'
				},
				{
					title: 'Guidelines',
					link: '/guidelines'
				},
				{
					title: 'Leadership',
					link: '/leadership'
				}
			]
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Donate',
			link: '/donate'
		},
		{
			$route_type_type: 'title',
			route_type: 'Link Menu',
			title: 'Religious',
			$routes_min: 1,
			routes: [
				{
					title: 'Priest Services',
					link: '/priest_services'
				},
				{
					title: 'Deity Services',
					link: '/deity_services'
				},
				{
					title: 'Priest Profiles',
					link: '/priest_profiles'
				},
				{
					title: 'Pooja Samagri',
					link: '/pooja_samagri'
				}
			]
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Classes',
			link: '/classes'
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Calendar',
			link: '/calendar'
		},
		{
			$route_type_type: 'title',
			route_type: 'Single Link',
			title: 'Contact Us',
			link: '/contact_us'
		}
	],
	social_banner: {
		$join_message_type: 'textarea',
		join_message: 'Become a member of the temple and enjoy our benefits',
		join_link: '#',
		join_button: 'Sign Up Now',
		$social_message_type: 'textarea',
		social_message: 'Want to help us spread the word? Share today',
		$social_media_templatitator: '@@global.social_types',
		social_media: [
			{
				url: 'https://www.facebook.com/HinduTempleBloomingtonNormal',
				$btn_facebook_hidden: true,
				btn_facebook: true,
				$fa_facebook_hidden: true,
				fa_facebook: true
			}
		]
	}
}