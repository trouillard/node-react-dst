
import React from 'react';
import moment from 'moment';
import fetch from 'node-fetch';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import backend from './config';
import areIntlLocalesSupported from 'intl-locales-supported';


let DateTimeFormat;

if (areIntlLocalesSupported(['fr'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
}

export default class DstSelectZoneDateHeure extends React.Component {

	constructor (props) {

	    super(props);

	    this.state = {
			zones: [ ],
			affichage: { text: 'nom', value: 'id'}
	    };

	    this.changeDate = this.changeDate.bind(this);
	    this.changeSaisieZones = this.changeSaisieZones.bind(this);
	    this.selectZone = this.selectZone.bind(this);
	}

	changeDate(date) {
		this.setState({
			startDate: date
		});
	}

	selectZone(saisie) {
		this.props.surChoixZone(saisie.id);
	}

	changeSaisieZones(saisie) {
		fetch("http://" + backend.rest.url +  "zones?nom=" + saisie, {method: 'GET'})
	  	.then((res) => { return res.json() })
	  	.then((result) => {
		  		const solutionZones = [];
		  		result.forEach((r) => { solutionZones.push({ id: r.id.toString(), nom: r.nom });});
				this.setState({zones: solutionZones});
	  });
	}

   render() {

	return (


		<div>

			<AutoComplete
			  hintText={this.props.texte}
			  dataSource={this.state.zones}
			  onUpdateInput={this.changeSaisieZones}
			  dataSourceConfig = {this.state.affichage}
			  onNewRequest={this.selectZone}
			  filter={AutoComplete.caseInsensitiveFilter}
			/>

			<DatePicker
			  hintText="Date"
			  autoOk={true}
			  DateTimeFormat={DateTimeFormat}
			  locale="fr"
			/>

			<TimePicker
			  hintText="Horaire"
			  minutesStep={5}
			  format="24hr"
			  autoOk={true}
    		/>

		</div>

    );
  }
}
