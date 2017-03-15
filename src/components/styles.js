export default {

	MapFilter: {
			display: 'block',
			width: 250,
			margin: 'auto',
	},

	box: {
		width: 50,
		height: 50,
		display: 'inline-block',
		borderColor: '#e6e6e6 #f2f2f2 #e6e6e6 #f2f2f2',
		borderWidth: 1,
		borderStyle: 'solid',

		//opacity based on vertical position in map
		y1: {opacity: .81},
		y2: {opacity: .62},
		y3: {opacity: .43},
		y4: {opacity: .26},
		y5: {opacity: .05, borderColor:'#000'},

		//set colors based on horizontal position in map
		x1: {backgroundColor: "#A9D0F5"},
		x2: {backgroundColor: "#E0ECF8"},
		x3: {backgroundColor: "#f2f2f2"},
		x4: {backgroundColor: "#F8E0E6"},
		x5: {backgroundColor: "#F5A9BC"},

		//fake news
		x0: {backgroundColor: "#585858"},
		y0: {width:'100%', height: 40},

		span: {

		}

	},

	mapRow:{

	}



}