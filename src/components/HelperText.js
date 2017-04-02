import React, { Component } from 'react'
import styles from './styles.js'


class HelperText extends Component {
	constructor(){
		super()
		this.handleHideClick = this.handleHideClick.bind(this);
	}

	handleHideClick(e){
		e.preventDefault()
		this.props.hideHelperText()
	}

	render(){
		const currentHoveredBox = this.props.mapState.currentHoveredBox;
		const x = currentHoveredBox[0],
					y = currentHoveredBox[1];

		const xHeaders = ['', 'Left', 'Left-Center', 'Center', 'Right-Center', 'Right']
		const yHeaders = ['FAKE NEWS', 'Speculation', 'Opinion', 'Analysis',
				//top row of labels
				['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
		]


		const yDescriptions = [
			'Clearly incorrect, misleading or incomplete information. This is why you have trust issues when consuming news on the internet.',
			'Big "if" statements and minimally supported theories,',
			'Personal or ideological take on a subject,',
			'Thoughtful, informed commentary on a topic',
				[ '',
					'Traditonal reporting and journalism, providing nothing but the facts and context.',
					'Cold, hard information. The best example of this would be Wikipedia, primary sources, timelines, etc.',
					'Numbers, data, studies, graphics, etc. There should a direct connection between the source and the numbers they present.',
					'Q&A meant to better understand the subject.',
					'Absolutely everything else that doesn\'t apply to the other categories.'

				],
		]

		const xDescriptions = ['',

			'a strong left/liberal/Democrat leaning. Little or no consideration for the other side.',
			'a slight left/liberal/Democrat leaning, but mutiple viewpoints are considered.',
			'no particular political bias, or a viewpoint that doesn\'t fit the left/right mold.',
			'a slight right/conservative/Republican leaning, but mutiple viewpoints are considered.',
			'a strong right/conservative/Republican leaning. Little or no consideration for the other side.',

		]

		//set rating label
		let header = 'Thanks for using the alpha version of Media Bias Map',
				description = 	'We want to make it easier to read about politics from a variety sources and perspectives.',
				helperTextStyle = {}

		if(currentHoveredBox.length > 0){
			if(x == 0){
				header = 'FAKE NEWS';
				description = yDescriptions[0]
				helperTextStyle = styles.HelperText.fakeNews
			} else if(y == 4){
				header = yHeaders[4][x];
				description = yDescriptions[4][x];
				helperTextStyle = styles.HelperText.factText
			} else{
				header = xHeaders[x] + ' | ' + yHeaders[y];
				description = yDescriptions[y] + ' with  ' + xDescriptions[x]
				helperTextStyle =  styles.HelperText['x'+x]
			}
		}

		return (
			<div style={Object.assign({},styles.HelperText.container, helperTextStyle)}>
				<span onClick={this.handleHideClick}style={styles.HelperText.close}>hide</span>

				<span style={styles.HelperText.header}><strong>{header}</strong></span>
				<hr/>
				<p style={styles.HelperText.description}>{description}</p>


			</div>
		)
	}
}

export default HelperText