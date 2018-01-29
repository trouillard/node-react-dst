
import React from 'react';
import DstSelectZoneDateHeure from './DstSelectZoneDateHeure';
import DstDetailZone from './DstDetailZone';
import moment from 'moment';
import backend from './config';
import DST from './DST';
import Zones from './Zones';
import data from './data';


export default class DstSynthese extends React.Component {

	constructor (props) {

	    super(props);

	    this.state = {
		  zones: data.zones,
		  dsts: data.dsts,
	      dateReference: null,
	      dateDistante: null,
		  zoneReference: null,
		  zoneDistante: null
	    };

		this.surChangement = this.surChangement.bind(this);
		this.surChangementDateReference = this.surChangementDateReference.bind(this);
		this.surChangementDateDistante = this.surChangementDateDistante.bind(this);
		this.surChangementHoraireReference = this.surChangementHoraireReference.bind(this);
		this.surChangementHoraireDistante = this.surChangementHoraireDistante.bind(this);
	    this.surChoixZoneReference = this.surChoixZoneReference.bind(this);
	    this.surChoixZoneDistante = this.surChoixZoneDistante.bind(this);
	    this.surChangementSaisieZone = this.surChangementSaisieZone.bind(this);

	}

	surChangement(priorite) {

		if (this.state.zoneReference != null && this.state.zoneDistante == null && this.state.zoneReference != null && this.state.zoneDistante == null) {
			var now = new Date();
			var nowArrondi = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), 0, 0);
			this.setState({dateReference: nowArrondi});
		};


		if(this.state.zoneReference != null && this.state.zoneDistante != null) {

			if (this.state.dateDistante == null) {
				var dateDistanteNew = new Date(this.state.zoneDistante.dateDistanteZoneEtDateReferenceChoisies(this.state.zoneReference, this.state.dateReference));
				//console.log("Alors ? : " + dateDistanteNew.toString());
				this.setState({dateDistante: dateDistanteNew});
			}
			else {
				if(this.state.dateReference == null) {
					var dateReferenceNew = new Date(this.state.zoneReference.dateReferenceZoneEtDateDistanteChoisies(this.state.zoneDistante, this.state.dateDistante));
					this.setState({dateReference: dateReferenceNew});
				}
				else {
						if (priorite == "Distant") {
							var dateReferenceNew = new Date(this.state.zoneReference.dateReferenceZoneEtDateDistanteChoisies(this.state.zoneDistante, this.state.dateDistante));
							this.setState({dateReference: dateReferenceNew});
						}
						else {
							var dateDistanteNew = new Date(this.state.zoneDistante.dateDistanteZoneEtDateReferenceChoisies(this.state.zoneReference, this.state.dateReference));
							this.setState({dateDistante: dateDistanteNew});
						}
				}
			}
		}
	}

	surChangementDateReference(date) {
		this.setState({dateReference: date});
		this.surChangement("Reference");
	}

	surChangementDateDistante(date) {
		this.setState({dateDistante: date});
		this.surChangement("Distant");
	}

	surChangementHoraireReference(date) {
		this.setState({dateReference: date});
		this.surChangement("Reference");
	}

	surChangementHoraireDistante(date) {
		this.setState({dateDistante: date});
		this.surChangement("Distant");
	}

	surChangementSaisieZone(saisie, composant) {

		if (this.state.zones.length == 0) {

			fetch("http://" + backend.rest.url +  "zones?nom=" + saisie, {method: 'GET'})
			.then((res) => { return res.json() })
			.then((result) => {
					const solutionZones = [];
					result.forEach((r) => { solutionZones.push({ id: r.id.toString(), nom: r.nom });});
					composant.setState({zones: solutionZones});
		  });
		}
		else {		composant.setState({zones: this.state.zones});
		}
	}

	surChoixZoneReference(value) {

		var zoneRef = null;
		var dstRef = null;

		// APPEL REST - PAS DE DONNEES LOCALES (data.jsx)
		if (this.state.zones.length == 0) {
			fetch("http://" + backend.rest.url +  "zones/" + value.toString(), {method: 'GET'})
			.then((res) => { return res.json() })
			.then((resultatZoneRef) => {

				if (resultatZoneRef[0].dst == 0) {
					dstRef = new DST(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
					zoneRef = new Zones(resultatZoneRef[0].id, resultatZoneRef[0].nom, resultatZoneRef[0].sens, resultatZoneRef[0].heures, resultatZoneRef[0].minutes, dstRef);
					this.setState({zoneReference: zoneRef});
					this.surChangement("Reference");
				}
				else {

					fetch("http://" + backend.rest.url + "dst/" + resultatZoneRef[0].dst.toString(), {method: 'GET'})
					.then((res) => { return res.json() })
					.then((resultatDstRef) => {
						dstRef = new DST(resultatZoneRef[0].dst, resultatDstRef[0].nom, resultatDstRef[0].methode_on, resultatDstRef[0].operateur_on, resultatDstRef[0].mois_on, resultatDstRef[0].decile_on, resultatDstRef[0].jour_on, resultatDstRef[0].heures_on, resultatDstRef[0].methode_off, resultatDstRef[0].operateur_off, resultatDstRef[0].mois_off, resultatDstRef[0].decile_off, resultatDstRef[0].jour_off, resultatDstRef[0].heures_off);
						zoneRef = new Zones(resultatZoneRef[0].id, resultatZoneRef[0].nom, resultatZoneRef[0].sens, resultatZoneRef[0].heures, resultatZoneRef[0].minutes, dstRef);
						this.setState({zoneReference: zoneRef});
						this.surChangement("Reference");
					});
				}
			});
		}
		// PAS D'APPEL REST - DONNEES LOCALES (data.jsx)
		else {

			zoneRef = new Zones(this.state.zones[value - 1].id, this.state.zones[value - 1].nom, this.state.zones[value - 1].sens, this.state.zones[value - 1].heures, this.state.zones[value - 1].minutes, this.state.zones[value - 1].dst);
			if (zoneRef.dst == 0) {
				dstRef = new DST(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
			}
			else {
				dstRef = new DST(this.state.dsts[zoneRef.dst-1].id, this.state.dsts[zoneRef.dst-1].nom, this.state.dsts[zoneRef.dst-1].methode_on, this.state.dsts[zoneRef.dst-1].operateur_on, this.state.dsts[zoneRef.dst-1].mois_on, this.state.dsts[zoneRef.dst-1].decile_on, this.state.dsts[zoneRef.dst-1].jour_on, this.state.dsts[zoneRef.dst-1].heures_on, this.state.dsts[zoneRef.dst-1].methode_off, this.state.dsts[zoneRef.dst-1].operateur_off, this.state.dsts[zoneRef.dst-1].mois_off, this.state.dsts[zoneRef.dst-1].decile_off, this.state.dsts[zoneRef.dst-1].jour_off, this.state.dsts[zoneRef.dst-1].heures_off);
			}
			zoneRef.dst = dstRef;
			this.setState({zoneReference: zoneRef});
			this.surChangement("Reference");

		}
	}

	surChoixZoneDistante(value) {

		var zoneDis = null;
		var dstDis = null;

		// APPEL REST - PAS DE DONNEES LOCALES (data.jsx)
		if (this.state.zones.length == 0) {

			fetch("http://" + backend.rest.url +  "zones/" + value.toString(), {method: 'GET'})
			.then((res) => { return res.json() })
			.then((resultatZoneDis) => {

				if (resultatZoneDis[0].dst == 0) {
					dstDis = new DST(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
					zoneDis = new Zones(resultatZoneDis[0].id, resultatZoneDis[0].nom, resultatZoneDis[0].sens, resultatZoneDis[0].heures, resultatZoneDis[0].minutes, dstDis);
					this.setState({zoneDistante: zoneDis});
					this.surChangement("Reference");			}
				else {

					fetch("http://" + backend.rest.url + "dst/" + resultatZoneDis[0].dst.toString(), {method: 'GET'})
					.then((res) => { return res.json() })
					.then((resultatDstDis) => {

						dstDis = new DST(resultatZoneDis[0].dst, resultatDstDis[0].nom, resultatDstDis[0].methode_on, resultatDstDis[0].operateur_on, resultatDstDis[0].mois_on, resultatDstDis[0].decile_on, resultatDstDis[0].jour_on, resultatDstDis[0].heures_on, resultatDstDis[0].methode_off, resultatDstDis[0].operateur_off, resultatDstDis[0].mois_off, resultatDstDis[0].decile_off, resultatDstDis[0].jour_off, resultatDstDis[0].heures_off);
						zoneDis = new Zones(resultatZoneDis[0].id, resultatZoneDis[0].nom, resultatZoneDis[0].sens, resultatZoneDis[0].heures, resultatZoneDis[0].minutes, dstDis);
						this.setState({zoneDistante: zoneDis});
						this.surChangement("Reference");
					});
				}
			});
		}
		// PAS D'APPEL REST - DONNEES LOCALES (data.jsx)
		else {

			zoneDis = new Zones(this.state.zones[value - 1].id, this.state.zones[value - 1].nom, this.state.zones[value - 1].sens, this.state.zones[value - 1].heures, this.state.zones[value - 1].minutes, this.state.zones[value - 1].dst);

			if (zoneDis.dst == 0) {
				dstDis = new DST(0, '', '', '', 0, 0, 0, 0, '', '', 0, 0, 0, 0);
			}
			else {
				dstDis = new DST(this.state.dsts[zoneDis.dst-1].id, this.state.dsts[zoneDis.dst-1].nom, this.state.dsts[zoneDis.dst-1].methode_on, this.state.dsts[zoneDis.dst-1].operateur_on, this.state.dsts[zoneDis.dst-1].mois_on, this.state.dsts[zoneDis.dst-1].decile_on, this.state.dsts[zoneDis.dst-1].jour_on, this.state.dsts[zoneDis.dst-1].heures_on, this.state.dsts[zoneDis.dst-1].methode_off, this.state.dsts[zoneDis.dst-1].operateur_off, this.state.dsts[zoneDis.dst-1].mois_off, this.state.dsts[zoneDis.dst-1].decile_off, this.state.dsts[zoneDis.dst-1].jour_off, this.state.dsts[zoneDis.dst-1].heures_off);
			};

			zoneDis.dst = dstDis;
			this.setState({zoneDistante: zoneDis});
			this.surChangement("Reference");
		}

	}

 	render() {

		return (


			<div>

				<div className="element-centre">

					<div className="titre"><center><strong>DST CALCULATOR</strong></center></div><br></br><br></br>

					<center>

				  	<DstSelectZoneDateHeure
						date={this.state.dateReference}
						horaire={this.state.dateReference}
						texte="The country where you are ?"
						surChangementSaisieZone={this.surChangementSaisieZone}
						surChoixZone={this.surChoixZoneReference}
						surChangementDate={this.surChangementDateReference}
						surChangementHoraire={this.surChangementHoraireReference}
					/>

					<br></br>

					<DstSelectZoneDateHeure
						date={this.state.dateDistante}
						horaire={this.state.dateDistante}
						texte="The country where you go ?"
						surChangementSaisieZone={this.surChangementSaisieZone}
						surChoixZone={this.surChoixZoneDistante}
						surChangementDate={this.surChangementDateDistante}
						surChangementHoraire={this.surChangementHoraireDistante}
					/>

					<br></br>
					<br></br>
					<br></br>
					Frank Trouillard - 29/01/2018

					</center>

				</div>

			</div>

		);
  }

}
