export default {

	MapFilter: {
		display: 'block',
		width: 250,
		margin: 'auto',
		overflow: 'hidden',

		resetButton:{
			textAlign:'right',
			padding:5,
			fontSize: 10,
		}
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

		hover: {
			borderColor:'#848484',
		},

		//opacity based on vertical position in map
		y1: {opacity: .8},
		y2: {opacity: .5},
		y3: {opacity: .2},
		y4: {opacity: 1, backgroundColor: '#fafafa'},

		//set colors based on horizontal position in map
		x1: {backgroundColor: "#A9D0F5"},
		x2: {backgroundColor: "#E0ECF8"},
		x3: {backgroundColor: "#f2f2f2"},
		x4: {backgroundColor: "#F8E0E6"},
		x5: {backgroundColor: "#F5A9BC"},

		//fake news
		x0: {backgroundColor: "#848484"},
		y0: {width:'100%', height: 40},

		label: {
			textAlign:'center',
			verticalAlign: 'middle',
			width:'100%',
			display:'inline-block',
			zIndex: 1000,
			height: '100%',
			lineHeight: '46px',
			fontSize: 6,

			top: {
				lineHeight:'46px',
				fontSize: 9
			},

			fakeNews: {
				fontSize: 12,
				lineHeight: '40px',
				textAlign:'center',
				width:'100%',
				display:'inline-block',
				color:'#f2f2f2',

			},
		},

	},

	post:{
		padding: '14px 20px 5px 20px',
		width:'100%',
		margin:0,

		container:{
			listStyleType: 'none',
			background: '#ffffff',
			margin:'0px 0px 0px 0px',
			borderStyle: 'solid',
			borderWidth:3,
			borderRadius: 3,
			borderColor:'#fff',
		},

		image: {
			width:'100%',
			height:'auto',

		},

		title: {
			color:'#fff',
			paddingTop: 60,
		},

		//set colors based on horizontal position in map
		x1: {color: "#A9D0F5"},
		x2: {color: "#E0ECF8"},
		x3: {color: "#f2f2f2"},
		x4: {color: "#F8E0E6"},
		x5: {color: "#F5A9BC"},

		//special stylings
		fakeNewsText: {
			color: '#000',
			backgroundColor:'rgba(255,255,255,.7)',
			padding:'5px 5px 4px 5px',
			textAlign:'center',

		},

		factText: {
			color: '#fff'
		},

		description:{
			margin:'2px 0px 2px 0px',
			color:'#fff'
		},

		source:{
			fontStyle: 'italic',
			textOverflow: 'ellipsis',
			overflow:'hidden',
			width:'100%',
			height:'1.2em',
			fontSize: 12,
			padding:'0px 10px 0px 0px',
			color:'#fafafa',
			marginTop: 5,
		},

		ratingLabel:{
			textAlign:'right',
			fontSize: 12,
			display: 'inline-block',
			width:'100%',
			fontWeight: '900'
		}
	},

	HelperText: {
		container: {
			width:'100%',
			maxWidth:250,
			margin:'auto',
			height:140,
			padding:'10px 10px 20px 10px',
			marginTop: 10,
			marginBottom:10,
		},

		fakeNewsText:{
			color: '#585858'
		},

		factText: {
			color: '#585858'
		},

		x1: {backgroundColor: "#A9D0F5"},
		x2: {backgroundColor: "#E0ECF8"},
		x3: {backgroundColor: "#f2f2f2"},
		x4: {backgroundColor: "#F8E0E6"},
		x5: {backgroundColor: "#F5A9BC"},



	},



}