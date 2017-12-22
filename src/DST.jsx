
import fetch from 'node-fetch';

export default class DST {

	constructor(id, nom, methode_on, operateur_on, mois_on, decile_on, jour_on, heures_on, methode_off, operateur_off, mois_off, decile_off, jour_off, heures_off) {
		this.id =			id;
		this.nom = 			nom;
		this.methode_on =	methode_on;
		this.operateur_on =	operateur_on;
		this.mois_on =		parseInt(mois_on);
		this.decile_on =	parseInt(decile_on);
		this.jour_on =		parseInt(jour_on);
		this.heures_on =	parseInt(heures_on);
		this.methode_off =	methode_off;
		this.operateur_off=	operateur_off;
		this.mois_off =		parseInt(mois_off);
		this.decile_off =	parseInt(decile_off);
		this.jour_off =		parseInt(jour_off);
		this.heures_off =	parseInt(heures_off);
	}

	calculHoraires_on(date, sens, gmt) {

		if(this.methode_on == "Wall")		{ return date.setUTCHours(this.heures_on);	};
		if(this.methode_on == "Standard")	{ return date.setUTCHours(this.heures_on + sens * gmt); };
		if(this.methode_on == "UTC")		{ return date.setUTCHours(this.heures_on + 1); };

	}

	calculHoraires_off(date, sens, gmt) {

		if(this.methode_on == "Wall")		{ return date.setUTCHours(this.heures_off);	};
		if(this.methode_on == "Standard")	{ return date.setUTCHours(this.heures_off + sens * gmt); };
		if(this.methode_on == "UTC")		{ return date.setUTCHours(this.heures_off); };

	}

	calculJour_on(annee) {

		var date = null;

		if(this.operateur_on == "=") 			{ return new Date(Date.UTC(annee, this.mois_on, this.decile_on)); };

		if(this.operateur_on == ">")			{ date = new Date(Date.UTC(annee, this.mois_on, this.decile_on));
											  do {
												  date.setUTCDate(date.getUTCDate() + 1);
											  }
											  while( this.jour_on != date.getDay() + 1  );
											  return date;
											};

		if(this.operateur_on == "last")		{ date = new Date(Date.UTC(annee, this.mois_on + 1, 1));
											  do {
											  		date.setUTCDate(date.getUTCDate() - 1);
										  	  }
											  while( this.jour_on != date.getDay() + 1  );
											  return date;
											};
	}

	calculJour_off(annee) {

		var date = null;

		if(this.operateur_off == "=") 		{ return new Date(Date.UTC(annee, this.mois_off, this.decile_off)); };

		if(this.operateur_off == ">")			{ date = new Date(Date.UTC(annee, this.mois_off, this.decile_off));
											  do {
												  date.setUTCDate(date.getUTCDate() + 1);
											  }
											  while( this.jour_off != date.getDay() + 1  );
											  return date;
											};

		if(this.operateur_off == "last")		{ date = new Date(Date.UTC(annee, this.mois_off + 1, 1));
											  do {
											  		date.setUTCDate(date.getUTCDate() - 1);
										  	  }
											  while( this.jour_off != date.getDay() + 1  );
											  return date;
											};
	}

	calculDate_on(annee, sens, gmt) {
		var jour = this.calculJour_on(annee);
		return this.calculHoraires_on(jour, sens, gmt);
	}

	calculDate_off(annee, sens, gmt) {
		var jour = this.calculJour_off(annee);
		return this.calculHoraires_off(jour, sens, gmt);
	}
}