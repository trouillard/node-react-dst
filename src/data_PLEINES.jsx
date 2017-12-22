

const zones = [{"id":1,"nom":"Afghanistan","dst":0,"sens":1,"heures":4,"minutes":30},{"id":2,"nom":"Albania","dst":0,"sens":1,"heures":1,"minutes":0},{"id":3,"nom":"Algeria","dst":0,"sens":1,"heures":1,"minutes":0},{"id":4,"nom":"America/Danmarkshavn","dst":0,"sens":1,"heures":0,"minutes":0},{"id":5,"nom":"America/Godthab","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":6,"nom":"America/Scoresbysund","dst":13,"sens":-1,"heures":1,"minutes":0},{"id":7,"nom":"America/Thule","dst":29,"sens":-1,"heures":4,"minutes":0},{"id":8,"nom":"Andorra","dst":13,"sens":1,"heures":1,"minutes":0},{"id":9,"nom":"Angola","dst":0,"sens":1,"heures":1,"minutes":0},{"id":10,"nom":"Anguilla","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":11,"nom":"Antigua and Barbuda","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":12,"nom":"Argentina","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":13,"nom":"Armenia","dst":25,"sens":1,"heures":4,"minutes":0},{"id":14,"nom":"Aruba","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":15,"nom":"Australia/Adelaide","dst":2,"sens":1,"heures":9,"minutes":30},{"id":16,"nom":"Australia/Brisbane","dst":0,"sens":1,"heures":10,"minutes":0},{"id":17,"nom":"Australia/Broken_Hill","dst":2,"sens":1,"heures":9,"minutes":30},{"id":18,"nom":"Australia/Currie","dst":3,"sens":1,"heures":10,"minutes":0},{"id":19,"nom":"Australia/Darwin","dst":0,"sens":1,"heures":9,"minutes":30},{"id":20,"nom":"Australia/Hobart","dst":3,"sens":1,"heures":10,"minutes":0},{"id":21,"nom":"Australia/Lindeman","dst":0,"sens":1,"heures":10,"minutes":0},{"id":22,"nom":"Australia/Melbourne","dst":4,"sens":1,"heures":10,"minutes":0},{"id":23,"nom":"Australia/Perth","dst":0,"sens":1,"heures":8,"minutes":0},{"id":24,"nom":"Australia/Sydney","dst":1,"sens":1,"heures":10,"minutes":0},{"id":25,"nom":"Austria","dst":13,"sens":1,"heures":1,"minutes":0},{"id":26,"nom":"Azerbaijan","dst":5,"sens":1,"heures":4,"minutes":0},{"id":27,"nom":"Bahamas","dst":6,"sens":-1,"heures":5,"minutes":0},{"id":28,"nom":"Bahrain","dst":0,"sens":1,"heures":3,"minutes":0},{"id":29,"nom":"Bangladesh","dst":0,"sens":1,"heures":6,"minutes":0},{"id":30,"nom":"Barbados","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":31,"nom":"Belarus","dst":25,"sens":1,"heures":2,"minutes":0},{"id":32,"nom":"Belgium","dst":13,"sens":1,"heures":1,"minutes":0},{"id":33,"nom":"Belize","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":34,"nom":"Benin","dst":0,"sens":1,"heures":1,"minutes":0},{"id":35,"nom":"Bermuda","dst":6,"sens":-1,"heures":4,"minutes":0},{"id":36,"nom":"Bhutan","dst":0,"sens":1,"heures":6,"minutes":0},{"id":37,"nom":"Bolivia","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":38,"nom":"Botswana","dst":0,"sens":1,"heures":2,"minutes":0},{"id":39,"nom":"Brazil/Araguaina","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":40,"nom":"Brazil/Bahia","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":41,"nom":"Brazil/Belem","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":42,"nom":"Brazil/Boa_Vista","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":43,"nom":"Brazil/Campo_Grande","dst":7,"sens":-1,"heures":4,"minutes":0},{"id":44,"nom":"Brazil/Cuiaba","dst":7,"sens":-1,"heures":4,"minutes":0},{"id":45,"nom":"Brazil/Eirunepe","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":46,"nom":"Brazil/Fortaleza","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":47,"nom":"Brazil/Maceio","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":48,"nom":"Brazil/Manaus","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":49,"nom":"Brazil/Noronha","dst":0,"sens":-1,"heures":2,"minutes":0},{"id":50,"nom":"Brazil/Porto_Velho","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":51,"nom":"Brazil/Recife","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":52,"nom":"Brazil/Rio_Branco","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":53,"nom":"Brazil/Sao_Paulo","dst":7,"sens":-1,"heures":3,"minutes":0},{"id":54,"nom":"British Indian Ocean Territory","dst":0,"sens":1,"heures":6,"minutes":0},{"id":55,"nom":"British Virgin Islands","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":56,"nom":"Brunei Darussalam","dst":0,"sens":1,"heures":8,"minutes":0},{"id":57,"nom":"Bulgaria","dst":13,"sens":1,"heures":2,"minutes":0},{"id":58,"nom":"Burkina Faso","dst":0,"sens":1,"heures":0,"minutes":0},{"id":59,"nom":"Burundi","dst":0,"sens":1,"heures":2,"minutes":0},{"id":60,"nom":"Cambodia","dst":0,"sens":1,"heures":7,"minutes":0},{"id":61,"nom":"Cameroon","dst":0,"sens":1,"heures":1,"minutes":0},{"id":62,"nom":"Canada/Cambridge_Bay","dst":8,"sens":-1,"heures":7,"minutes":0},{"id":63,"nom":"Canada/Coral_Harbour","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":64,"nom":"Canada/Dawson","dst":21,"sens":-1,"heures":8,"minutes":0},{"id":65,"nom":"Canada/Dawson_Creek","dst":0,"sens":-1,"heures":7,"minutes":0},{"id":66,"nom":"Canada/Edmonton","dst":11,"sens":-1,"heures":7,"minutes":0},{"id":67,"nom":"Canada/Glace_Bay","dst":8,"sens":-1,"heures":4,"minutes":0},{"id":68,"nom":"Canada/Goose_Bay","dst":26,"sens":-1,"heures":4,"minutes":0},{"id":69,"nom":"Canada/Halifax","dst":8,"sens":-1,"heures":4,"minutes":0},{"id":70,"nom":"Canada/Inuvik","dst":21,"sens":-1,"heures":7,"minutes":0},{"id":71,"nom":"Canada/Iqaluit","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":72,"nom":"Canada/Montreal","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":73,"nom":"Canada/Nipigon","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":74,"nom":"Canada/Pangnirtung","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":75,"nom":"Canada/Rainy_River","dst":8,"sens":-1,"heures":6,"minutes":0},{"id":76,"nom":"Canada/Rankin_Inlet","dst":8,"sens":-1,"heures":6,"minutes":0},{"id":77,"nom":"Canada/Regina","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":78,"nom":"Canada/St_Johns","dst":26,"sens":-1,"heures":3,"minutes":30},{"id":79,"nom":"Canada/Swift_Current","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":80,"nom":"Canada/Thunder_Bay","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":81,"nom":"Canada/Toronto","dst":8,"sens":-1,"heures":5,"minutes":0},{"id":82,"nom":"Canada/Vancouver","dst":30,"sens":-1,"heures":8,"minutes":0},{"id":83,"nom":"Canada/Whitehorse","dst":21,"sens":-1,"heures":8,"minutes":0},{"id":84,"nom":"Canada/Winnipeg","dst":31,"sens":-1,"heures":6,"minutes":0},{"id":85,"nom":"Canada/Yellowknife","dst":21,"sens":-1,"heures":7,"minutes":0},{"id":86,"nom":"Canary Islands","dst":13,"sens":1,"heures":0,"minutes":0},{"id":87,"nom":"Cape Verde","dst":0,"sens":-1,"heures":1,"minutes":0},{"id":88,"nom":"Cayman Islands","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":89,"nom":"Central African Republic","dst":0,"sens":1,"heures":1,"minutes":0},{"id":90,"nom":"Chad","dst":0,"sens":1,"heures":1,"minutes":0},{"id":91,"nom":"Chile/Pacific","dst":9,"sens":-1,"heures":6,"minutes":0},{"id":92,"nom":"Chile/Santiago","dst":9,"sens":-1,"heures":4,"minutes":0},{"id":93,"nom":"China/Chongqing","dst":0,"sens":1,"heures":8,"minutes":0},{"id":94,"nom":"China/Harbin","dst":0,"sens":1,"heures":8,"minutes":0},{"id":95,"nom":"China/Hong_Kong","dst":0,"sens":1,"heures":8,"minutes":0},{"id":96,"nom":"China/Kashgar","dst":0,"sens":1,"heures":8,"minutes":0},{"id":97,"nom":"China/Macau","dst":0,"sens":1,"heures":8,"minutes":0},{"id":98,"nom":"China/Shanghai","dst":0,"sens":1,"heures":8,"minutes":0},{"id":99,"nom":"China/Taipei","dst":0,"sens":1,"heures":8,"minutes":0},{"id":100,"nom":"China/Urumqi","dst":0,"sens":1,"heures":8,"minutes":0},{"id":101,"nom":"Christmas Island","dst":0,"sens":1,"heures":7,"minutes":0},{"id":102,"nom":"Cocos (Keeling) Islands","dst":0,"sens":1,"heures":6,"minutes":30},{"id":103,"nom":"Colombia","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":104,"nom":"Comoros","dst":0,"sens":1,"heures":3,"minutes":0},{"id":105,"nom":"Congo/Kinshasa","dst":0,"sens":1,"heures":1,"minutes":0},{"id":106,"nom":"Congo/Lubumbashi","dst":0,"sens":1,"heures":2,"minutes":0},{"id":107,"nom":"Cook Islands","dst":0,"sens":-1,"heures":10,"minutes":0},{"id":108,"nom":"Costa Rica","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":109,"nom":"Ivory Cost","dst":0,"sens":1,"heures":0,"minutes":0},{"id":110,"nom":"Cuba","dst":10,"sens":-1,"heures":5,"minutes":0},{"id":111,"nom":"Curacao","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":112,"nom":"Czech Republic","dst":13,"sens":1,"heures":1,"minutes":0},{"id":113,"nom":"Denmark/Copenhagen","dst":13,"sens":1,"heures":1,"minutes":0},{"id":114,"nom":"Denmark/Faeroe Islands","dst":13,"sens":1,"heures":0,"minutes":0},{"id":115,"nom":"Djibouti","dst":0,"sens":1,"heures":3,"minutes":0},{"id":116,"nom":"Dominican Republic","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":117,"nom":"East Timor","dst":0,"sens":1,"heures":9,"minutes":0},{"id":118,"nom":"Ecuador","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":119,"nom":"Egypt","dst":12,"sens":1,"heures":2,"minutes":0},{"id":120,"nom":"El Salvador","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":121,"nom":"Equatorial Guinea","dst":0,"sens":1,"heures":1,"minutes":0},{"id":122,"nom":"Eritrea","dst":0,"sens":1,"heures":3,"minutes":0},{"id":123,"nom":"Estonia","dst":13,"sens":1,"heures":2,"minutes":0},{"id":124,"nom":"Ethiopia","dst":0,"sens":1,"heures":3,"minutes":0},{"id":125,"nom":"Falklands","dst":14,"sens":-1,"heures":4,"minutes":0},{"id":126,"nom":"Fiji","dst":0,"sens":1,"heures":12,"minutes":0},{"id":127,"nom":"Finland","dst":13,"sens":1,"heures":2,"minutes":0},{"id":128,"nom":"France/Gambier","dst":0,"sens":-1,"heures":9,"minutes":0},{"id":129,"nom":"France/Marquesas","dst":0,"sens":-1,"heures":9,"minutes":30},{"id":130,"nom":"France/Paris","dst":13,"sens":1,"heures":1,"minutes":0},{"id":131,"nom":"France/Tahiti","dst":0,"sens":-1,"heures":10,"minutes":0},{"id":132,"nom":"French Guiana","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":133,"nom":"Gabon","dst":0,"sens":1,"heures":1,"minutes":0},{"id":134,"nom":"Galapagos Islands","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":135,"nom":"Gambia","dst":0,"sens":1,"heures":0,"minutes":0},{"id":136,"nom":"Georgia","dst":25,"sens":1,"heures":3,"minutes":0},{"id":137,"nom":"Germany","dst":13,"sens":1,"heures":1,"minutes":0},{"id":138,"nom":"Ghana","dst":0,"sens":1,"heures":0,"minutes":0},{"id":139,"nom":"Gibraltar","dst":13,"sens":1,"heures":1,"minutes":0},{"id":140,"nom":"Gilbert Islands","dst":0,"sens":1,"heures":12,"minutes":0},{"id":141,"nom":"Greece","dst":13,"sens":1,"heures":2,"minutes":0},{"id":142,"nom":"Grenada","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":143,"nom":"Guadeloupe","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":144,"nom":"Guam","dst":0,"sens":1,"heures":10,"minutes":0},{"id":145,"nom":"Guatemala","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":146,"nom":"Guinea","dst":0,"sens":1,"heures":0,"minutes":0},{"id":147,"nom":"Guinea-Bissau","dst":0,"sens":1,"heures":0,"minutes":0},{"id":148,"nom":"Guyana","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":149,"nom":"Haiti","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":150,"nom":"Honduras","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":151,"nom":"Hungary","dst":13,"sens":1,"heures":1,"minutes":0},{"id":152,"nom":"Iceland","dst":0,"sens":1,"heures":0,"minutes":0},{"id":153,"nom":"India","dst":0,"sens":1,"heures":5,"minutes":30},{"id":154,"nom":"Indonesia/Jakarta","dst":0,"sens":1,"heures":7,"minutes":0},{"id":155,"nom":"Indonesia/Jayapura","dst":0,"sens":1,"heures":9,"minutes":0},{"id":156,"nom":"Indonesia/Makassar","dst":0,"sens":1,"heures":8,"minutes":0},{"id":157,"nom":"Indonesia/Pontianak","dst":0,"sens":1,"heures":7,"minutes":0},{"id":158,"nom":"Iraq","dst":15,"sens":1,"heures":3,"minutes":0},{"id":159,"nom":"Ireland (Eire)","dst":13,"sens":1,"heures":0,"minutes":0},{"id":160,"nom":"Italy/Vatican/San Marino","dst":13,"sens":1,"heures":1,"minutes":0},{"id":161,"nom":"Jamaica","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":162,"nom":"Japan","dst":0,"sens":1,"heures":9,"minutes":0},{"id":163,"nom":"Jersey","dst":13,"sens":1,"heures":2,"minutes":0},{"id":164,"nom":"Jordan","dst":16,"sens":1,"heures":2,"minutes":0},{"id":165,"nom":"Kazakhstan/Almaty","dst":0,"sens":1,"heures":6,"minutes":0},{"id":166,"nom":"Kazakhstan/Aqtau","dst":0,"sens":1,"heures":5,"minutes":0},{"id":167,"nom":"Kazakhstan/Aqtobe","dst":0,"sens":1,"heures":5,"minutes":0},{"id":168,"nom":"Kazakhstan/Oral","dst":0,"sens":1,"heures":5,"minutes":0},{"id":169,"nom":"Kazakhstan/Qyzylorda","dst":0,"sens":1,"heures":6,"minutes":0},{"id":170,"nom":"Kenya","dst":0,"sens":1,"heures":3,"minutes":0},{"id":171,"nom":"Koea/Pyongyang","dst":0,"sens":1,"heures":9,"minutes":0},{"id":172,"nom":"Korea/Seoul","dst":0,"sens":1,"heures":9,"minutes":0},{"id":173,"nom":"Kuwait","dst":0,"sens":1,"heures":3,"minutes":0},{"id":174,"nom":"Kyrgyzstan","dst":0,"sens":1,"heures":6,"minutes":0},{"id":175,"nom":"Laos","dst":0,"sens":1,"heures":7,"minutes":0},{"id":176,"nom":"Lebanon","dst":17,"sens":1,"heures":2,"minutes":0},{"id":177,"nom":"Lesotho","dst":0,"sens":1,"heures":2,"minutes":0},{"id":178,"nom":"Liberia","dst":0,"sens":1,"heures":0,"minutes":0},{"id":179,"nom":"Libya","dst":0,"sens":1,"heures":2,"minutes":0},{"id":180,"nom":"Liechtenstein","dst":13,"sens":1,"heures":1,"minutes":0},{"id":181,"nom":"Line Islands","dst":0,"sens":1,"heures":14,"minutes":0},{"id":182,"nom":"Lithuania","dst":13,"sens":1,"heures":2,"minutes":0},{"id":183,"nom":"Luxembourg","dst":13,"sens":1,"heures":1,"minutes":0},{"id":184,"nom":"Madagascar","dst":0,"sens":1,"heures":3,"minutes":0},{"id":185,"nom":"Malawi","dst":0,"sens":1,"heures":2,"minutes":0},{"id":186,"nom":"Malaysia/Kuala_Lumpur","dst":0,"sens":1,"heures":8,"minutes":0},{"id":187,"nom":"Malaysia/Kuching","dst":0,"sens":1,"heures":8,"minutes":0},{"id":188,"nom":"Maldives","dst":0,"sens":1,"heures":5,"minutes":0},{"id":189,"nom":"Mali/Bamako","dst":0,"sens":1,"heures":0,"minutes":0},{"id":190,"nom":"Mali/Timbuktu","dst":0,"sens":1,"heures":0,"minutes":0},{"id":191,"nom":"Malta","dst":13,"sens":1,"heures":1,"minutes":0},{"id":192,"nom":"Marshall Islands/Kwajalein","dst":0,"sens":1,"heures":12,"minutes":0},{"id":193,"nom":"Marshall Islands/Majuro","dst":0,"sens":1,"heures":12,"minutes":0},{"id":194,"nom":"Martinique","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":195,"nom":"Mauritania","dst":0,"sens":1,"heures":0,"minutes":0},{"id":196,"nom":"Mauritius","dst":0,"sens":1,"heures":4,"minutes":0},{"id":197,"nom":"Mayotte","dst":0,"sens":1,"heures":3,"minutes":0},{"id":198,"nom":"Mexico/Cancun","dst":18,"sens":-1,"heures":6,"minutes":0},{"id":199,"nom":"Mexico/Chihuahua","dst":18,"sens":-1,"heures":7,"minutes":0},{"id":200,"nom":"Mexico/Hermosillo","dst":0,"sens":-1,"heures":7,"minutes":0},{"id":201,"nom":"Mexico/Mazatlan","dst":18,"sens":-1,"heures":7,"minutes":0},{"id":202,"nom":"Mexico/Merida","dst":18,"sens":-1,"heures":6,"minutes":0},{"id":203,"nom":"Mexico/Mexico_City","dst":18,"sens":-1,"heures":6,"minutes":0},{"id":204,"nom":"Mexico/Monterrey","dst":18,"sens":-1,"heures":6,"minutes":0},{"id":205,"nom":"Mexico/Tijuana","dst":18,"sens":-1,"heures":8,"minutes":0},{"id":206,"nom":"Micronesia/Kosrae","dst":0,"sens":1,"heures":11,"minutes":0},{"id":207,"nom":"Micronesia/Ponape","dst":0,"sens":1,"heures":11,"minutes":0},{"id":208,"nom":"Micronesia/Truk","dst":0,"sens":1,"heures":10,"minutes":0},{"id":209,"nom":"Micronesia/Yap","dst":0,"sens":1,"heures":10,"minutes":0},{"id":210,"nom":"Moldova","dst":13,"sens":1,"heures":2,"minutes":0},{"id":211,"nom":"Monaco","dst":13,"sens":1,"heures":1,"minutes":0},{"id":212,"nom":"Mongolia/Choibalsan","dst":19,"sens":1,"heures":9,"minutes":0},{"id":213,"nom":"Mongolia/Hovd","dst":19,"sens":1,"heures":7,"minutes":0},{"id":214,"nom":"Mongolia/Ulaanbaatar","dst":19,"sens":1,"heures":8,"minutes":0},{"id":215,"nom":"Montserrat","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":216,"nom":"Morocco","dst":0,"sens":1,"heures":0,"minutes":0},{"id":217,"nom":"Mozambique","dst":0,"sens":1,"heures":2,"minutes":0},{"id":218,"nom":"Myanmar (Burma)","dst":0,"sens":1,"heures":6,"minutes":30},{"id":219,"nom":"Namibia","dst":20,"sens":1,"heures":1,"minutes":0},{"id":220,"nom":"Nauru","dst":0,"sens":1,"heures":12,"minutes":0},{"id":221,"nom":"Nepal","dst":0,"sens":1,"heures":5,"minutes":45},{"id":222,"nom":"Netherlands","dst":13,"sens":1,"heures":1,"minutes":0},{"id":223,"nom":"New Caledonia","dst":0,"sens":1,"heures":11,"minutes":0},{"id":224,"nom":"New Zealand/Auckland","dst":22,"sens":1,"heures":12,"minutes":0},{"id":225,"nom":"Nicaragua","dst":0,"sens":-1,"heures":6,"minutes":0},{"id":226,"nom":"Niger","dst":0,"sens":1,"heures":1,"minutes":0},{"id":227,"nom":"Nigeria","dst":0,"sens":1,"heures":1,"minutes":0},{"id":228,"nom":"Niue","dst":0,"sens":-1,"heures":11,"minutes":0},{"id":229,"nom":"Norfolk Island","dst":0,"sens":1,"heures":11,"minutes":30},{"id":230,"nom":"Northern Mariana Islands","dst":0,"sens":1,"heures":10,"minutes":0},{"id":231,"nom":"Norway","dst":13,"sens":1,"heures":1,"minutes":0},{"id":232,"nom":"Oman","dst":0,"sens":1,"heures":4,"minutes":0},{"id":233,"nom":"Pakistan","dst":0,"sens":1,"heures":5,"minutes":0},{"id":234,"nom":"Palau (Belau)","dst":0,"sens":1,"heures":9,"minutes":0},{"id":235,"nom":"Palestine","dst":23,"sens":1,"heures":2,"minutes":0},{"id":236,"nom":"Panama","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":237,"nom":"Papua New Guinea","dst":0,"sens":1,"heures":10,"minutes":0},{"id":238,"nom":"Paraguay","dst":24,"sens":-1,"heures":4,"minutes":0},{"id":239,"nom":"Peru","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":240,"nom":"Philippines","dst":0,"sens":1,"heures":8,"minutes":0},{"id":241,"nom":"Phoenix Islands","dst":0,"sens":1,"heures":13,"minutes":0},{"id":242,"nom":"Pitcairn","dst":0,"sens":-1,"heures":8,"minutes":0},{"id":243,"nom":"Poland","dst":13,"sens":1,"heures":1,"minutes":0},{"id":244,"nom":"Portugal/Azores","dst":13,"sens":-1,"heures":1,"minutes":0},{"id":245,"nom":"Portugal/Lisbon","dst":13,"sens":1,"heures":0,"minutes":0},{"id":246,"nom":"Portugal/Madeira","dst":13,"sens":1,"heures":0,"minutes":0},{"id":247,"nom":"Puerto Rico","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":248,"nom":"Qatar","dst":0,"sens":1,"heures":3,"minutes":0},{"id":249,"nom":"Reunion","dst":0,"sens":1,"heures":4,"minutes":0},{"id":250,"nom":"Romania","dst":13,"sens":1,"heures":2,"minutes":0},{"id":251,"nom":"Russia/Anadyr","dst":25,"sens":1,"heures":12,"minutes":0},{"id":252,"nom":"Russia/Irkutsk","dst":25,"sens":1,"heures":8,"minutes":0},{"id":253,"nom":"Russia/Kaliningrad","dst":25,"sens":1,"heures":2,"minutes":0},{"id":254,"nom":"Russia/Kamchatka","dst":25,"sens":1,"heures":12,"minutes":0},{"id":255,"nom":"Russia/Krasnoyarsk","dst":25,"sens":1,"heures":7,"minutes":0},{"id":256,"nom":"Russia/Magadan","dst":25,"sens":1,"heures":11,"minutes":0},{"id":257,"nom":"Russia/Moscow","dst":25,"sens":1,"heures":3,"minutes":0},{"id":258,"nom":"Russia/Novosibirsk","dst":25,"sens":1,"heures":6,"minutes":0},{"id":259,"nom":"Russia/Omsk","dst":25,"sens":1,"heures":6,"minutes":0},{"id":260,"nom":"Russia/Sakhalin","dst":25,"sens":1,"heures":10,"minutes":0},{"id":261,"nom":"Russia/Samara","dst":25,"sens":1,"heures":4,"minutes":0},{"id":262,"nom":"Russia/Vladivostok","dst":25,"sens":1,"heures":10,"minutes":0},{"id":263,"nom":"Russia/Yakutsk","dst":25,"sens":1,"heures":9,"minutes":0},{"id":264,"nom":"Russia/Yekaterinburg","dst":25,"sens":1,"heures":5,"minutes":0},{"id":265,"nom":"Rwanda","dst":0,"sens":1,"heures":2,"minutes":0},{"id":266,"nom":"Saint Helena","dst":0,"sens":1,"heures":0,"minutes":0},{"id":267,"nom":"Saint Kitts and Nevis","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":268,"nom":"Saint Lucia","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":269,"nom":"Saint Pierre and Miquelon","dst":8,"sens":-1,"heures":3,"minutes":0},{"id":270,"nom":"Saint Vincent and the Grenadines","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":271,"nom":"Samoa","dst":0,"sens":-1,"heures":11,"minutes":0},{"id":272,"nom":"Sao Tome and Principe","dst":0,"sens":1,"heures":0,"minutes":0},{"id":273,"nom":"Saudi Arabia","dst":0,"sens":1,"heures":3,"minutes":0},{"id":274,"nom":"Senegal","dst":0,"sens":1,"heures":0,"minutes":0},{"id":275,"nom":"Seychelles","dst":0,"sens":1,"heures":4,"minutes":0},{"id":276,"nom":"Sierra Leone","dst":0,"sens":1,"heures":0,"minutes":0},{"id":277,"nom":"Singapore","dst":0,"sens":1,"heures":8,"minutes":0},{"id":278,"nom":"Slovakia","dst":13,"sens":1,"heures":1,"minutes":0},{"id":279,"nom":"Solomon Islands","dst":0,"sens":1,"heures":11,"minutes":0},{"id":280,"nom":"Somalia","dst":0,"sens":1,"heures":3,"minutes":0},{"id":281,"nom":"South Africa","dst":0,"sens":1,"heures":2,"minutes":0},{"id":282,"nom":"South Georgia","dst":0,"sens":-1,"heures":2,"minutes":0},{"id":283,"nom":"Spain","dst":13,"sens":1,"heures":1,"minutes":0},{"id":284,"nom":"Spanish Africa","dst":13,"sens":1,"heures":1,"minutes":0},{"id":285,"nom":"Sri Lanka","dst":0,"sens":1,"heures":6,"minutes":0},{"id":286,"nom":"Sudan","dst":0,"sens":1,"heures":3,"minutes":0},{"id":287,"nom":"Suriname","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":288,"nom":"Swaziland","dst":0,"sens":1,"heures":2,"minutes":0},{"id":289,"nom":"Sweden","dst":13,"sens":1,"heures":1,"minutes":0},{"id":290,"nom":"Switzerland","dst":13,"sens":1,"heures":1,"minutes":0},{"id":291,"nom":"Syria","dst":27,"sens":1,"heures":2,"minutes":0},{"id":292,"nom":"Tajikistan","dst":0,"sens":1,"heures":5,"minutes":0},{"id":293,"nom":"Tanzania","dst":0,"sens":1,"heures":3,"minutes":0},{"id":294,"nom":"Thailand","dst":0,"sens":1,"heures":7,"minutes":0},{"id":295,"nom":"Togo","dst":0,"sens":1,"heures":0,"minutes":0},{"id":296,"nom":"Tokelau Islands","dst":0,"sens":-1,"heures":10,"minutes":0},{"id":297,"nom":"Tonga","dst":0,"sens":1,"heures":13,"minutes":0},{"id":298,"nom":"Trinidad and Tobago","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":299,"nom":"Tunisia","dst":0,"sens":1,"heures":1,"minutes":0},{"id":300,"nom":"Turkey","dst":13,"sens":1,"heures":2,"minutes":0},{"id":301,"nom":"Turkmenistan","dst":0,"sens":1,"heures":5,"minutes":0},{"id":302,"nom":"Turks and Caicos Islands","dst":28,"sens":-1,"heures":5,"minutes":0},{"id":303,"nom":"Tuvalu","dst":0,"sens":1,"heures":12,"minutes":0},{"id":304,"nom":"Uganda","dst":0,"sens":1,"heures":3,"minutes":0},{"id":305,"nom":"Ukraine/Kiev","dst":13,"sens":1,"heures":2,"minutes":0},{"id":306,"nom":"Ukraine/Simferopol","dst":13,"sens":1,"heures":2,"minutes":0},{"id":307,"nom":"Ukraine/Uzhgorod","dst":13,"sens":1,"heures":2,"minutes":0},{"id":308,"nom":"Ukraine/Zaporozhye","dst":13,"sens":1,"heures":2,"minutes":0},{"id":309,"nom":"United Arab Emirates","dst":0,"sens":1,"heures":4,"minutes":0},{"id":310,"nom":"United Kingdom and Northern Ireland","dst":13,"sens":1,"heures":0,"minutes":0},{"id":311,"nom":"United States/Adak","dst":32,"sens":-1,"heures":10,"minutes":0},{"id":312,"nom":"United States/Anchorage","dst":32,"sens":-1,"heures":9,"minutes":0},{"id":313,"nom":"United States/Denver","dst":32,"sens":-1,"heures":7,"minutes":0},{"id":314,"nom":"United States/Detroit","dst":32,"sens":-1,"heures":5,"minutes":0},{"id":315,"nom":"United States/Honolulu","dst":0,"sens":-1,"heures":10,"minutes":0},{"id":316,"nom":"United States/Indiana/Knox","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":317,"nom":"United States/Indiana/Marengo","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":318,"nom":"United States/Indiana/Vevay","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":319,"nom":"United States/Indianapolis","dst":0,"sens":-1,"heures":5,"minutes":0},{"id":320,"nom":"United States/Juneau","dst":32,"sens":-1,"heures":9,"minutes":0},{"id":321,"nom":"United States/Kentucky/Monticello","dst":32,"sens":-1,"heures":5,"minutes":0},{"id":322,"nom":"United States/Los_Angeles","dst":32,"sens":-1,"heures":8,"minutes":0},{"id":323,"nom":"United States/Menominee","dst":32,"sens":-1,"heures":6,"minutes":0},{"id":324,"nom":"United States/New_York","dst":32,"sens":-1,"heures":5,"minutes":0},{"id":325,"nom":"United States/Nome","dst":32,"sens":-1,"heures":9,"minutes":0},{"id":326,"nom":"United States/Phoenix","dst":0,"sens":-1,"heures":7,"minutes":0},{"id":327,"nom":"United States/Yakutat","dst":32,"sens":-1,"heures":9,"minutes":0},{"id":328,"nom":"United Statesc/Louisville","dst":32,"sens":-1,"heures":5,"minutes":0},{"id":329,"nom":"United StatesChicago","dst":32,"sens":-1,"heures":6,"minutes":0},{"id":330,"nom":"Uruguay","dst":0,"sens":-1,"heures":3,"minutes":0},{"id":331,"nom":"Uzbekistan/Samarkand","dst":0,"sens":1,"heures":5,"minutes":0},{"id":332,"nom":"Uzbekistan/Tashkent","dst":0,"sens":1,"heures":5,"minutes":0},{"id":333,"nom":"Vanuatu","dst":0,"sens":1,"heures":11,"minutes":0},{"id":334,"nom":"Venezuela","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":335,"nom":"Vietnam","dst":0,"sens":1,"heures":7,"minutes":0},{"id":336,"nom":"United States/Virgin_Islands","dst":0,"sens":-1,"heures":4,"minutes":0},{"id":337,"nom":"Wallis and Futuna Islands","dst":0,"sens":1,"heures":12,"minutes":0},{"id":338,"nom":"Western Sahara","dst":0,"sens":1,"heures":0,"minutes":0},{"id":339,"nom":"Yemen","dst":0,"sens":1,"heures":3,"minutes":0},{"id":340,"nom":"Yugoslavia","dst":13,"sens":1,"heures":1,"minutes":0},{"id":341,"nom":"Zambia","dst":0,"sens":1,"heures":2,"minutes":0},{"id":342,"nom":"Zimbabwe","dst":0,"sens":1,"heures":2,"minutes":0}];

const dsts = [

{"id":1,"nom":"AN","heures_on":2,"methode_on":"Standard","operateur_on":"last","jour_on":2,"decile_on":0,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":3,"debut_off":2007,"fin_off":2037},
{"id":2,"nom":"AS","heures_on":2,"methode_on":"Standard","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":3,"debut_off":2007,"fin_off":2037},
{"id":3,"nom":"AT","heures_on":2,"methode_on":"Standard","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":3,"debut_off":2007,"fin_off":2037},
{"id":4,"nom":"AV","heures_on":2,"methode_on":"Standard","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":3,"debut_off":2007,"fin_off":2037},
{"id":5,"nom":"Azer","heures_on":4,"methode_on":"Wall","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":5,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},
{"id":6,"nom":"Bahamas","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},
{"id":7,"nom":"Brazil","heures_on":0,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":15,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":">","jour_off":7,"decile_off":15,"mois_off":2,"debut_off":2006,"fin_off":2037},
{"id":8,"nom":"Canada","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},
{"id":9,"nom":"Chile","heures_on":4,"methode_on":"UTC","operateur_on":">","jour_on":7,"decile_on":9,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":3,"methode_off":"UTC","operateur_off":">","jour_off":7,"decile_off":9,"mois_off":3,"debut_off":2006,"fin_off":2037},
{"id":10,"nom":"Cuba","heures_on":0,"methode_on":"Standard","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":11,"nom":"Edm","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":12,"nom":"Egypt","heures_on":0,"methode_on":"Standard","operateur_on":"last","jour_on":5,"decile_on":0,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":23,"methode_off":"Standard","operateur_off":"last","jour_off":2,"decile_off":0,"mois_off":9,"debut_off":2006,"fin_off":2037},{"id":13,"nom":"EU","heures_on":1,"methode_on":"UTC","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":1,"methode_off":"UTC","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":14,"nom":"Falk","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":9,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":">","jour_off":7,"decile_off":15,"mois_off":4,"debut_off":2006,"fin_off":2037},{"id":15,"nom":"Iraq","heures_on":3,"methode_on":"Standard","operateur_on":"=","jour_on":0,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":3,"methode_off":"Standard","operateur_off":"=","jour_off":0,"decile_off":1,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":16,"nom":"Jordan","heures_on":0,"methode_on":"Standard","operateur_on":"last","jour_on":2,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Standard","operateur_off":"last","jour_off":2,"decile_off":0,"mois_off":9,"debut_off":2006,"fin_off":2037},{"id":17,"nom":"Lebanon","heures_on":0,"methode_on":"Wall","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":18,"nom":"Mexico","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":19,"nom":"Mongol","heures_on":2,"methode_on":"Wall","operateur_on":"last","jour_on":6,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":6,"decile_off":0,"mois_off":9,"debut_off":2006,"fin_off":2037},{"id":20,"nom":"Namibia","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":9,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":">","jour_off":7,"decile_off":1,"mois_off":4,"debut_off":2006,"fin_off":2037},{"id":21,"nom":"NT_YK","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":22,"nom":"NZ","heures_on":2,"methode_on":"Standard","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":">","jour_off":7,"decile_off":15,"mois_off":3,"debut_off":2006,"fin_off":2037},{"id":23,"nom":"Palestine","heures_on":0,"methode_on":"Wall","operateur_on":">","jour_on":5,"decile_on":15,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":">","jour_off":5,"decile_off":15,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":24,"nom":"Para","heures_on":0,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":15,"mois_on":10,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":">","jour_off":7,"decile_off":8,"mois_off":3,"debut_off":2006,"fin_off":2037},{"id":25,"nom":"Russia","heures_on":2,"methode_on":"Standard","operateur_on":"last","jour_on":7,"decile_on":0,"mois_on":3,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":26,"nom":"StJohns","heures_on":0,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":27,"nom":"Syria","heures_on":0,"methode_on":"Wall","operateur_on":"=","jour_on":0,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":"=","jour_off":0,"decile_off":1,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":28,"nom":"TC","heures_on":0,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":0,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":29,"nom":"Thule","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":30,"nom":"Vanc","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":31,"nom":"Winn","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":1,"mois_on":4,"debut_on":2006,"fin_on":2037,"heures_off":2,"methode_off":"Standard","operateur_off":"last","jour_off":7,"decile_off":0,"mois_off":10,"debut_off":2006,"fin_off":2037},{"id":32,"nom":"US","heures_on":2,"methode_on":"Wall","operateur_on":">","jour_on":7,"decile_on":8,"mois_on":3,"debut_on":2007,"fin_on":2037,"heures_off":2,"methode_off":"Wall","operateur_off":">","jour_off":7,"decile_off":1,"mois_off":11,"debut_off":2007,"fin_off":2037}

];

exports.zones = zones;
exports.dsts = dsts;

