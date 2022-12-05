import Alfabet from '../../images/alfabet.png';
import Jedzenie from '../../images/Jedzenie.png';
import Rosliny from '../../images/Rosliny.png';
import Rodzina from '../../images/rodzina.png';


export const data = [
	{
		title: 'Alfabet',
		image: Alfabet,
	},
	{
		title: 'Jedzenie',
		image: Jedzenie,
	},
	{
		title: 'Rośliny',
		image: Rosliny,
	},
	{
		title: 'Rodzina',
		image: Rodzina,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};