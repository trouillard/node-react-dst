
import React from 'react';
import DstSelectZoneDateHeure from './DstSelectZoneDateHeure';
import DstDetailZone from './DstDetailZone';
import moment from 'moment';
import backend from './config';

require('./bundle.css');

export default class DstSynthese extends React.Component {

	constructor (props) {

	    super(props);

	    this.state = {
	      dateReference: moment(),
		  zoneReference: null,
		  zoneDistance: null
	    };

	    this.surChoixZoneReference = this.surChoixZoneReference.bind(this);
	    this.surChoixZoneDistante = this.surChoixZoneDistante.bind(this);
	}

	surChoixZoneReference(value) {
		fetch("http://" + backend.rest.url +  "zones/" + value.toString(), {method: 'GET'})
		.then((res) => { return res.json() })
		.then((resultat) => { this.setState({zoneReference: resultat[0]}); });
	}

	surChoixZoneDistante(value) {
		fetch("http://" + backend.rest.url +  "zones/" + value.toString(), {method: 'GET'})
		.then((res) => { return res.json() })
		.then((resultat) => { this.setState({zoneDistance: resultat[0]}); });
	}

 	render() {

		return (

				<div>

				 <table className="element-centre">
				  <tbody>
					<tr>
						<td><DstSelectZoneDateHeure date={this.state.dateReference} texte="zone de r&eacute;f&eacute;rence" surChoixZone={this.surChoixZoneReference} /></td>
						<td><DstSelectZoneDateHeure date={this.state.dateReference} texte="zone distante" surChoixZone={this.surChoixZoneDistante} /></td>
					</tr>
					<tr>
						<td><DstDetailZone zone={this.state.zoneReference} /></td>
						<td><DstDetailZone zone={this.state.zoneDistance} /></td>
					</tr>
				  </tbody>
				 </table>

				</div>

			  );
  }

}
