import React, { Component } from 'react'


class MapFilter extends Component {
	render(){
		return (
			<div className="map-cont">
				<div id="grid">
				  <div id="row5" className="row">
				    <div id="x1y0" className="box box-top">News</div><div id="x2y0" className="box box-top">Facts / Stats</div><div id="x3y0" className="box box-top">Interview</div>
				  </div>

				  <div id="row4" className="row">
				  	<div id="x1y4" className="box"></div><div id="x2y4" className="box"></div><div id="x3y4" className="box"></div><div id="x4y4" className="box"></div><div id="x5y4" className="box"></div>
				  </div>

				  <div id="row3" className="row">
				  	<div id="x1y3" className="box"></div><div id="x2y3" className="box"></div><div id="x3y3" className="box"></div><div id="x4y3" className="box"></div><div id="x5y3" className="box"></div>
				  </div>

				  <div id="row2" className="row">
				    <div id="x1y2" className="box"></div><div id="x2y2" className="box"></div><div id="x3y2" className="box"></div><div id="x4y2" className="box"></div><div id="x5y2" className="box"></div>
				  </div>

				  <div id="row1" className="row">
				    <div id="x1y1" className="box"><span id="left">Left</span></div><div id="x2y1" className="box"></div><div id="x3y1" className="box"></div><div id="x4y1" className="box"></div><div id="x5y1" className="box"><span id="right">Right</span></div>
			  	  </div>

				  <div id="x0y0" className="row box box-top">FAKE NEWS</div>
				</div>
			</div>

		)
	}
}

export default MapFilter