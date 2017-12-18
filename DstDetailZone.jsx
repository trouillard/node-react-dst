
import React from 'react';

export default class DstDetailZone extends React.Component {

  render() {

	var html = "";

	if (this.props.zone !== undefined && this.props.zone !== null) {

		html =	<div className="fond-gris">

					 <table>
						<tbody>
							<tr><td>id : </td><td>{this.props.zone.id}</td></tr>
							<tr><td>nom : </td><td>{this.props.zone.nom}</td></tr>
							<tr><td>dst : </td><td>{this.props.zone.dst}</td></tr>
							<tr><td>sens : </td><td>{this.props.zone.sens}</td></tr>
							<tr><td>heures : </td><td>{this.props.zone.heures}</td></tr>
							<tr><td>minutes : </td><td>{this.props.zone.minutes}</td></tr>
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
