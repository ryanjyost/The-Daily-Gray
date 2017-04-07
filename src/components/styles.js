export default {

	//==============================
	sidebar:{
		hidden: {
			display: 'none'
		}
	},

	//==============================
	postList: {
		container: {
			sidebarHidden: {
				width: '100%',
				marginTop: 0,
				paddingTop: 10,
			},

			sidebarOpen: {
				position: 'fixed',
				top: 0,
				left:  290,
				width: 'auto',
				paddingTop: 10,
			}
		}
	},

	//==============================
	post:{
		default: {

		},
	},

	//==============================
	MapFilter: {
		display: 'block',
		margin: 'auto',
		overflow: 'hidden',

		resetButton:{

		}
	},

	box: {
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
			fontSize: 26,


			top: {
				fontSize:10,
				textAlign:'center',
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

		labelTop: {
				fontSize: 10,
				textAlign:'center',
				verticalAlign: 'middle',
				width:'100%',
				display:'inline-block',
				zIndex: 1000,
				height: '100%',
			},


	},


//==============================
	mainView:{
		container: {
			margin: 'auto',
			width:'100%',
		}
	},



	//==============================
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

		postTitleAndDescContainer: {
			display: 'table-cell',
			verticalAlign: 'bottom',
			height: 250,

		},

		image: {
			width:'100%',
			height:'auto',

		},

		title: {
			color:'#fff',

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

	//==============================
	HelperText: {
		container: {
			margin:'auto',
			height:200,
			marginBottom:10,
			marginTop: 2,
			borderRadius:3,
		},

		close: {
			fontSize: 8,
			textAlign:'center',
			display:'block',
			cursor:'pointer',
			paddingBottom:3,
			color: '#a4a4a4',
			marginTop: 20,
		},

		defaultHeader: {
			fontWeight:'100',
			color:'#585858',
			fontSize:20,
			lineHeight: '1.2em',
			textAlign:'center',
			display:'block',
			backgroundColor: '#fff',
			padding:10,
			margin: '5px 0px 0px 0px',
			borderRadius: 25,
			borderStyle: 'solid',
			borderColor: '#585858',
			borderWidth: 2
		},

		description:{
		},

		blackText: {
			color: '#585858',
			backgroundColor: '#fff',
		},

		x1: {backgroundColor: "#A9D0F5"},
		x2: {backgroundColor: "#B8DDFF"},
		x3: {backgroundColor: "#f2f2f2"},
		x4: {backgroundColor: "#FFBCCD"},
		x5: {backgroundColor: "#F5A9BC"},
	},

	//==============================
	menubar: {
		container:{

		},

			linksContainer:{

			},

				toggleFilterButton: {
					show: {
						backgroundColor: '#F5A9BC',
						color: '#fff',
						padding: '5px 15px',

					},

					hide: {
					backgroundColor: '#fff',
					borderColor: '#F5A9BC',
					borderWidth: 1,
					borderStyle: 'solid',
					color: '#F5A9BC',
					padding: '5px 10px',

					},
				},

				link:{
					display:'inline-block',
					float:'none',
					color:'#585858',
					fontWeight: '900',
					cursor: 'pointer',
					fontSize:16,
				},
	},

	logo: {
		cont: {


		},

			link: {

			},

		image: {

		},

		textContainer:{
			margin:'0px 2px 0px 6px',
			width:200,
		},

		title:{
			margin:'0px 2px 0px 2px',
			color: '#585858',
			fontSize: 14,
		},
		tagline: {
			margin:'0px 2px 2px 2px',
			color: '#a4a4a4',
			fontSize:10
		},
	},

	//==============================

	sourceView:{
		container: {
			margin: 'auto',
			width:'100%'
		}
	},

	sourceMenu:{

		item:{
				listStyleType: 'none',
				display:'inline-block ',
				margin:'0px 5px 0px 5px'
		},

	}



}