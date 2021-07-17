import { Contest } from "../../types";

const centrale: Contest<'m1' | 'm2' | 'p1' | 'p2' | 'sii' | 'info' | 'lv1' | 'fr'> = {
	title: 'CCS',
	banks: {
		default: {
			title: 'Centrale-Supélec',
			factors: {
				m1: 12,
				m2: 12,
				p1: 11,
				p2: 11,
				sii: 20,
				info: 6,
				lv1: 11,
				fr: 17,
			},
			threshold: 1426 / 100,
			schools: [{title: "Centrale-Supélec"}, {title:"ECL"}, {title:"Supoptique"}, {title:"ECLILLE"}, {title:"ECN"}, {title:"ECM"}, {title:"ECC"}, {title:"UTT"}],
		},
		minesponts: {
			title: 'Mines-Ponts',
			factors: {
				m1: 5,
				m2: 3,
				p1: 3,
				p2: 3,
				sii: 6,
				info: 2,
				lv1: 3,
				fr: 5,
			},
			threshold: 1426 / 100,
			schools: [],
		},
		estp: {
			title: "ESTP",
			factors: {
				m1: 11,
				m2: 11,
				p1: 12,
				p2: 12,
				sii: 16,
				lv1: 12,
				fr: 20,
				info: 6,
			},
			threshold: 721 / 45,
			schools: [
				{
					title: "Télecom nancy"
				},
				{
					title: "Mine Saint-Étienne"
				}
			]
		},
		arts: {
			title: 'ARTS',
			factors: {
				m1: 11,
				m2: 11,
				p1: 11,
				p2: 11,
				sii: 25,
				lv1: 13,
				fr: 13,
				info: 5,
			},
			threshold: 1116 / 100,
			schools: [],
		},
		esix: {
			title: 'ESIX',
			factors: {
				m1: 5,
				m2: 5,
				p1: 5,
				p2: 5,
				sii: 10,
				lv1: 5,
				fr: 5,
				info: 5,
			},
			threshold: 1411 / 100,
			schools: [],
		},
		ismans: {
			title: 'ISMANS CESI',
			factors: {
				m1: 15,
				m2: 10,
				p1: 10,
				p2: 15,
				sii: 15,
				lv1: 10,
				fr: 10,
				info: 15,
			},
			threshold: 1264 / 100,
			schools: [],
		},
		mineTelecom: {
			title: 'Mine Telecom',
			factors: {
				m1: 5,
				m2: 3,
				p1: 3,
				p2: 3,
				sii: 6,
				lv1: 3,
				fr: 5,
				info: 2,
			},
			threshold: 319 / 30,
			schools: [],
		}
	},
}

const ccp: Contest<'m' | 'p' | 'mode' | 'fr' | 'info' | 'lv1' | 'sii'> = {
	title: 'CCINP',
	banks: {
		default: {
			title: 'CCINP',
			factors: {
				m: 8,
				p: 10,
				mode: 8,
				fr: 9,
				info: 4,
				lv1: 4,
				sii: 15,
			},
			threshold: 8,
			schools: [],
		},
		iiil: {
			title: '3iL Ingénieurs',
			factors: {
				m: 5,
				p: 5,
				mode: 3,
				fr: 4,
				info: 5,
				lv1: 3,
				sii: 5,
			},
			threshold: 8,
			schools: [],
		},
		ecam: {
			title: 'ECAM Rennes',
			factors: {
				m: 10,
				p: 12,
				mode: 8,
				fr: 9,
				info: 3,
				lv1: 4,
				sii: 12,
			},
			threshold: 8,
			schools: [],
		},
		eil: {
			title: "EIL Côte d'Opale",
			factors: {
				m: 10,
				p: 10,
				mode: 6,
				fr: 9,
				info: 5,
				lv1: 6,
				sii: 12,
			},
			threshold: 8,
			schools: [],
		},
		eivp: {
			title: 'EIVP Paris',
			factors: {
				m: 7,
				p: 9,
				mode: 7,
				fr: 8,
				info: 3,
				lv1: 2,
				sii: 7,
			},
			threshold: 8,
			schools: [],
		},
		ensps: {
			title: 'ENS Paris-Saclay',
			factors: {
				m: 6,
				p: 4,
				mode: 4,
				fr: 4,
				info: 2,
				lv1: 2,
				sii: 8,
			},
			threshold: 8,
			schools: [],
		},
		ensr: {
			title: 'ENS Rennes',
			factors: {
				m: 6,
				p: 4,
				mode: 4,
				fr: 4,
				info: 2,
				lv1: 2,
				sii: 8,
			},
			threshold: 8,
			schools: [],
		},
		ensait: {
			title: 'ENSAIT Roubaix',
			factors: {
				m: 7,
				p: 8,
				mode: 6,
				fr: 5,
				info: 4,
				lv1: 3,
				sii: 7,
			},
			threshold: 8,
			schools: [],
		},
		ensisa: {
			title: 'ENSISA Mulhouse',
			factors: {
				m: 8,
				p: 10,
				mode: 8,
				fr: 9,
				info: 4,
				lv1: 4,
				sii: 15,
			},
			threshold: 8,
			schools: [],
		},
		entpe: {
			title: 'ENTPE Lyon',
			factors: {
				m: 7,
				p: 7,
				mode: 7,
				fr: 8,
				info: 1,
				lv1: 2,
				sii: 7,
			},
			threshold: 8,
			schools: [],
		},
		esb: {
			title: 'ESB Nantes',
			factors: {
				m: 4,
				p: 4,
				mode: 2,
				fr: 5,
				info: 0,
				lv1: 5,
				sii: 5,
			},
			threshold: 8,
			schools: [],
		},
		esigelec: {
			title: 'ESIGELEC Rouen',
			factors: {
				m: 4,
				p: 4,
				mode: 3,
				fr: 4,
				info: 2,
				lv1: 3,
				sii: 5,
			},
			threshold: 8,
			schools: [],
		},
		episen: {
			title: 'ENSAIT',
			factors: {
				m: 2,
				p: 2,
				mode: 1,
				fr: 2,
				info: 3,
				lv1: 2,
				sii: 4,
			},
			threshold: 8,
			schools: [],
		},
		ensirem: {
			title: 'ENSIREM Dijon',
			factors: {
				m: 4,
				p: 4,
				mode: 4,
				fr: 4,
				info: 4,
				lv1: 4,
				sii: 8,
			},
			threshold: 8,
			schools: [],
		},
		estia: {
			title: 'ESTIA Bidart',
			factors: {
				m: 4,
				p: 4,
				mode: 4,
				fr: 4,
				info: 2,
				lv1: 4,
				sii: 4,
			},
			threshold: 8,
			schools: [],
		},
		grenobleinp: {
			title: 'Grenoble INP - Génie Industriel',
			factors: {
				m: 8,
				p: 10,
				mode: 8,
				fr: 9,
				info: 4,
				lv1: 4,
				sii: 15,
			},
			threshold: 8,
			schools: [],
		},
		isat: {
			title: 'ISAT Nevers',
			factors: {
				m: 8,
				p: 6,
				mode: 6,
				fr: 6,
				info: 4,
				lv1: 4,
				sii: 12,
			},
			threshold: 8,
			schools: [],
		},
		isep: {
			title: 'ISEP Paris',
			factors: {
				m: 4,
				p: 2,
				mode: 3,
				fr: 2,
				info: 3,
				lv1: 2,
				sii: 4,
			},
			threshold: 8,
			schools: [],
		},
		lorraineinpensgsi: {
			title: 'Lorraine INP - ENSGSI',
			factors: {
				m: 8,
				p: 10,
				mode: 8,
				fr: 9,
				info: 4,
				lv1: 4,
				sii: 15,
			},
			threshold: 8,
			schools: [],
		},
		lorraineinpenstib: {
			title: 'Lorraine INP - ENSTIB',
			factors: {
				m: 2,
				p: 2,
				mode: 2,
				fr: 2,
				info: 2,
				lv1: 2,
				sii: 2,
			},
			threshold: 8,
			schools: [],
		},
		polytech: {
			title: 'Réseau polytech',
			factors: {
				m: 3,
				p: 3,
				mode: 0,
				fr: 2,
				info: 2,
				lv1: 2,
				sii: 4,
			},
			threshold: 8,
			schools: [],
		},
		toulouseinp: {
			title: 'Toulouse INP - ENIT',
			factors: {
				m: 6,
				p: 6,
				mode: 4,
				fr: 7,
				info: 2,
				lv1: 4,
				sii: 16,
			},
			threshold: 8,
			schools: [],
		},
		ensibs: {
			title: 'ENSIBS',
			factors: {
				m: 3,
				p: 3,
				mode: 0,
				fr: 2,
				info: 2,
				lv1: 2,
				sii: 4,
			},
			threshold: 8,
			schools: [],
		},
	}
}

export const tsiLeague = {
	title: 'TSI',
	contests: {
		centrale,
		ccp
	},
	emoji: "anhttpadress"
}
