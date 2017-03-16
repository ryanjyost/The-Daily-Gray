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
		zIndex: 1,
		position: 'relative',

		//opacity based on vertical position in map
		y1: {opacity: .81},
		y2: {opacity: .62},
		y3: {opacity: .43},
		y4: {opacity: .26},
		y5: {opacity: 1, backgroundColor: '#fafafa'},

		//set colors based on horizontal position in map
		x1: {backgroundColor: "#A9D0F5"},
		x2: {backgroundColor: "#E0ECF8"},
		x3: {backgroundColor: "#f2f2f2"},
		x4: {backgroundColor: "#F8E0E6"},
		x5: {backgroundColor: "#F5A9BC"},

		//fake news
		x0: {backgroundColor: "#585858"},
		y0: {width:'100%', height: 40},

		label: {
			lineHeight: '48px',
			textAlign:'center',
			width:'100%',
			display:'inline-block',
			fontSize: 8,
			zIndex: 1000,

			fakeNews: {
				fontSize: 14
			}
		},

	},

	post:{
		borderStyle: 'solid',
		borderWidth:3,
		borderRadius: 3,
		padding: '14px 20px 5px 20px',
		width:'100%',
		margin:0,

		container:{
			listStyleType: 'none',
			background: '#ffffff',
			margin:'10px 0px 10px 0px',
			width:'100%',
		},

		//set colors based on horizontal position in map
		x1: {borderColor: "#A9D0F5"},
		x2: {borderColor: "#E0ECF8"},
		x3: {borderColor: "#f2f2f2"},
		x4: {borderColor: "#F8E0E6"},
		x5: {borderColor: "#F5A9BC"},

		//special stylings
		fakeNewsBorder: {
			borderColor: '#585858'
		},

		factBorder: {
			borderColor: '#fff'
		},

		description:{
			margin:'2px 0px 2px 0px',
			color:'#6E6E6E'
		},

		source:{
			fontStyle: 'italic',
			textOverflow: 'ellipsis',
			overflow:'hidden',
			maxWidth: 175,
			height:'1.2em',
			fontSize: 10,
			padding:'0px 10px 0px 0px'
		},

		ratingLabel:{
			float:'right',
			fontSize: 10,
			display: 'inline-block'
		}
	}



}