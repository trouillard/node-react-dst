
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
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
			date: null,
			zones: [ ],
			affichage: { text: 'nom', value: 'id'}
	    };

	    this.surChangementDate = this.surChangementDate.bind(this);
	    this.surChangementHoraire = this.surChangementHoraire.bind(this);
	    this.surChoixZone = this.surChoixZone.bind(this);
	    this.surChangementSaisieZone = this.surChangementSaisieZone.bind(this);
	}

	surChangementDate(bidon, date) {
		this.props.surChangementDate(date);
	}

	surChangementHoraire(bidon, date) {
		this.props.surChangementHoraire(date);
	}

	surChoixZone(saisie) {
		this.props.surChoixZone(saisie.id);
	}

	surChangementSaisieZone(saisie) {
		this.props.surChangementSaisieZone(saisie, this);
	}


   render() {

	var htmlDate = '';
	var htmlHoraire = '';

	if (this.props.date != null) {
		htmlDate =		<DatePicker
						  hintText="Date"
						  autoOk={true}
						  value={this.props.date}
						  onChange={this.surChangementDate}
						  style={{
							margin: '0 auto',
							padding: '10px',
						  }}
						/>
	}

	if (this.props.horaire != null) {
		htmlHoraire =	<TimePicker
						  hintText="Horaire"
						  minutesStep={5}
						  format="24hr"
						  autoOk={true}
						  value={this.props.horaire}
						  onChange={this.surChangementHoraire}
						  style={{
							margin: '0 auto',
							padding: '10px',
						  }}
						/>
	}

	return (

		<div>

			<AutoComplete
			  hintText={this.props.texte}
			  dataSource={this.state.zones}
			  onUpdateInput={this.surChangementSaisieZone}
			  dataSourceConfig = {this.state.affichage}
			  onNewRequest={this.surChoixZone}
			  filter={AutoComplete.caseInsensitiveFilter}
			  style={{
				margin: '0 auto',
				padding: '10px',
				backgroundColor: '#E0E0E0',
    		  }}
			/>

			{htmlDate}{htmlHoraire}

		</div>

    );
  }
}
