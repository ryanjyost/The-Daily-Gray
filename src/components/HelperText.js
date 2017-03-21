import React, { Component } from 'react'
import styles from './styles.js'


class HelperText extends Component {
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

			'a strong left/liberal/Democrat leaning or viewpoint. Little or no consideration for the other side.',
			'a slight left/liberal/Democrat leaning or viewpoint, but mutiple viewpoints are considered.',
			'no particular political bias, or a viewpoint that doesn\'t fit the left/right mold.',
			'a slight right/conservative/Republican leaning or viewpoint, but mutiple viewpoints are considered.',
			'a strong right/conservative/Republican leaning or viewpoint. Little or no consideration for the other side.',

		]

		//set rating label
		let header = 'Hey, you\'re using the alpha version of Media Bias Map',
				description = 	<p>Use the grid and search bar to navigate the political media links, curated by users of the <a href="">Media Bias Map Chrome Extension.</a></p>,
			helperTextStyle = {};

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

				<h2 style={styles.HelperText.header}>{header}</h2>
				<hr/>
				<p>{description}</p>

			</div>
		)
	}
}

export default HelperText