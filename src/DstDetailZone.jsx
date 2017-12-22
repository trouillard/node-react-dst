
import React from 'react';


export default class DstDetailZone extends React.Component {

  render() {

		var html = "";

		if (this.props.zone !== undefined && this.props.zone !== null) {

			html =

					<div className="fond-gris">

						 <table>
							<tbody>
								<tr><td>ZONE : </td><td></td></tr>
								<tr><td>- id : </td><td>{this.props.zone.id}</td></tr>
								<tr><td>- nom : </td><td>{this.props.zone.nom}</td></tr>
								<tr><td>- sens : </td><td>{this.props.zone.sens}</td></tr>
								<tr><td>- heures : </td><td>{this.props.zone.heures}</td></tr>
								<tr><td>- minutes : </td><td>{this.props.zone.minutes}</td></tr>
								<tr><td>&nbsp;</td><td>&nbsp;</td></tr>
								<tr><td>DST :</td><td></td></tr>
								<tr><td>- id : </td><td>{this.props.zone.dst.id}</td></tr>
								<tr><td>- nom : </td><td>{this.props.zone.dst.nom}</td></tr>
								<tr><td>- methode_on : </td><td>{this.props.zone.dst.methode_on}</td></tr>
								<tr><td>- operateur_on : </td><td>{this.props.zone.dst.operateur_on}</td></tr>
								<tr><td>- mois_on : </td><td>{this.props.zone.dst.mois_on}</td></tr>
								<tr><td>- decile_on : </td><td>{this.props.zone.dst.decile_on}</td></tr>
								<tr><td>- jour_on : </td><td>{this.props.zone.dst.jour_on}</td></tr>
								<tr><td>- heures_on : </td><td>{this.props.zone.dst.heures_on}</td></tr>
								<tr><td>- methode_off : </td><td>{this.props.zone.dst.methode_off}</td></tr>
								<tr><td>- operateur_off : </td><td>{this.props.zone.dst.operateur_off}</td></tr>
								<tr><td>- mois_off : </td><td>{this.props.zone.dst.mois_off}</td></tr>
								<tr><td>- decile_off : </td><td>{this.props.zone.dst.decile_off}</td></tr>
								<tr><td>- jour_off : </td><td>{this.props.zone.dst.jour_off}</td></tr>
								<tr><td>- heures_off : </td><td>{this.props.zone.dst.heures_off}</td></tr>
							</tbody>
						 </table>

					</div>

		}

	return (

		<div>
				{html}
		</div>

    );
  }
}
