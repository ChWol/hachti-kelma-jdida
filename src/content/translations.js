const trans = [
    {
        id: '1',
        tunisian: 'Aaslema',
        german: 'Hallo'
    },
    {
        id: '2',
        tunisian: 'Bislema',
        german: 'Tschüss'
    },
    {
        id: '3',
        tunisian: 'Ahla',
        german: 'Hallo',
        info: 'Pronunciation: Ah-l'
    },
    {
        id: '4',
        tunisian: 'Batata',
        german: 'Kartoffel'
    },
    {
        id: '5',
        tunisian: 'Ya toutou',
        german: 'Irgendwas Süßes oder so',
        info: 'No one knows when to use this'
    },
    {
        id: '6',
        tunisian: 'Theb tokhrej maaya?',
        german: 'Willst du mit mir gehen?',
        info: ':)'
    },
    {
        id: '7',
        tunisian: 'Ey betbiaa',
        german: 'Ja natürlich'
    },
    {
        id: '8',
        tunisian: 'Kol aam wenti haya bkhir!',
        german: 'Schönes neues Jahr!',
        info: "Next year we'll celebrate together ;)"
    },
    {
        id: '9',
        tunisian: 'Mahlek',
        german: 'Du bist schön'
    },
    {
        id: '10',
        tunisian: 'Mazinek',
        german: 'Du bist hübsch'
    },
    {
        id: '11',
        tunisian: 'Chnahwelek?',
        german: 'Wie gehts?'
    },
    {
        id: '12',
        tunisian: 'Lebes',
        german: 'Mir gehts gut',
        info: 'Works as question as well'
    },
    {
        id: '13',
        tunisian: 'Khra',
        german: 'Scheiße',
        info: 'Sooo expressive'
    },
    {
        id: '14',
        tunisian: 'Chfama?',
        german: 'Was ist los?'
    },
    {
        id: '15',
        tunisian: 'Sahit',
        german: 'Gut gemacht'
    },
    {
        id: '16',
        tunisian: 'Aalech?',
        german: 'Warum?'
    },
    {
        id: '17',
        tunisian: 'Chnia theb?',
        german: 'Was willst du?'
    },
    {
        id: '18',
        tunisian: '9oli',
        german: 'Sags mir'
    },
    {
        id: '19',
        tunisian: 'N9olek',
        german: 'Ich sage'
    },
    {
        id: '20',
        tunisian: 'Chniya n9olek?',
        german: 'Was soll ich sagen'
    },
    {
        id: '21',
        tunisian: 'Barcha',
        german: 'Sehr'
    },
    {
        id: '22',
        tunisian: 'Behi',
        german: 'Okay'
    },
    {
        id: '23',
        tunisian: 'Hachti',
        german: 'Ich brauche'
    },
    {
        id: '24',
        tunisian: 'Kelma',
        german: 'Wort'
    },
    {
        id: '25',
        tunisian: 'Jdida',
        german: 'Neue'
    },
    {
        id: '26',
        tunisian: 'Hachti kelma jdida',
        german: 'Ich brauch ein neues Wort'
    },
    {
        id: '27',
        tunisian: 'Wakteh?',
        german: 'Wann?'
    },
    {
        id: '28',
        tunisian: 'Ftart?',
        german: 'Hast du gegessen?'
    },
    {
        id: '29',
        tunisian: 'Manaarafech',
        german: 'Ich weiß nicht'
    },
    {
        id: '30',
        tunisian: 'Heka aalech',
        german: 'Das ist warum'
    },
    {
        id: '31',
        tunisian: 'Shab',
        german: 'Freunde'
    },
    {
        id: '32',
        tunisian: 'Maaya ena',
        german: 'Mit mir'
    },
    {
        id: '33',
        tunisian: 'Ey wenti?',
        german: 'Ja, und du?'
    },
    {
        id: '34',
        tunisian: 'Jmal',
        german: 'Kamel'
    },
    {
        id: '35',
        tunisian: 'Kol chay',
        german: 'Alles'
    },
    {
        id: '36',
        tunisian: 'Kho',
        german: 'Nimm'
    },
    {
        id: '37',
        tunisian: 'Bedhabt',
        german: 'Genau'
    },
    {
        id: '38',
        tunisian: '9ahwa',
        german: 'Kaffee'
    },
    {
        id: '39',
        tunisian: 'Ambouba',
        german: 'Lampe'
    },
    {
        id: '40',
        tunisian: 'Farch',
        german: 'Bett'
    },
    {
        id: '41',
        tunisian: 'Na9ra',
        german: 'Ich lerne'
    },
    {
        id: '42',
        tunisian: 'Ta9ra',
        german: 'Du lernst'
    },
    {
        id: '43',
        tunisian: 'Djeja',
        german: 'Huhn'
    },
    {
        id: '44',
        tunisian: 'Falous',
        german: 'Küken'
    },
    {
        id: '45',
        tunisian: 'Blech',
        german: 'Kostenlos'
    },
    {
        id: '46',
        tunisian: 'Nabta',
        german: 'Pflanze'
    },
    {
        id: '47',
        tunisian: 'Me',
        german: 'Wasser'
    },
    {
        id: '48',
        tunisian: 'Ji3an',
        german: 'Ich habe Hunger'
    },
    {
        id: '49',
        tunisian: 'Tawa 9omt',
        german: 'Ich bin gerade aufgewacht'
    },
    {
        id: '50',
        tunisian: 'Bech nemchi nor9ed',
        german: 'Ich geh schlafen'
    },
    {
        id: '51',
        tunisian: 'Tawa',
        german: 'Jetzt'
    },
    {
        id: '52',
        tunisian: 'Ahsen',
        german: 'das beste',
        info: 'Ahsen EI-Techniker'
    },
    {
        id: '53',
        tunisian: 'Ena',
        german: 'Ich'
    },
    {
        id: '54',
        tunisian: 'Oui naaref',
        german: 'Ich weiß'
    },
    {
        id: '55',
        tunisian: 'Hedha men fadhlek',
        german: 'Sehr nett von dir'
    },
    {
        id: '56',
        tunisian: 'Nchoufek Baad',
        german: 'Bis gleich'
    },
    {
        id: '57',
        tunisian: 'Chkoun?',
        german: 'Wer?'
    },
    {
        id: '58',
        tunisian: 'Maadech lezem testana',
        german: 'Du musst nicht mehr warten'
    },
    {
        id: '59',
        tunisian: 'Maadech  lezem nestanew',
        german: 'Wir müssen nicht mehr warten'
    },
    {
        id: '60',
        tunisian: 'Heka aaleh s7ab maak',
        german: 'Deswegen bin ich mit dir befreundet'
    },
    {
        id: '61',
        tunisian: 'Oss',
        german: 'Nervig'
    },
    {
        id: '62',
        tunisian: 'Ossi',
        german: 'Nervige Person'
    },
    {
        id: '63',
        tunisian: 'Batrik',
        german: 'Pinguin',
        info: "Yosr's favourite animal"
    },
    {
        id: '64',
        tunisian: 'Moufej2a',
        german: 'Überraschung'
    },
    {
        id: '65',
        tunisian: 'Lorz',
        german: 'Rätsel',
        info: 'Yosr is one'
    },
    {
        id: '66',
        tunisian: 'Aaychek',
        german: 'Danke'
    },
    {
        id: '67',
        tunisian: 'Le',
        german: 'Nein',
        info: 'Le le le'
    },
    {
        id: '68',
        tunisian: 'Saat 9array',
        german: 'Manchmal Nerd'
    },
    {
        id: '69',
        tunisian: 'Wallah',
        german: 'Ich schwöre'
    },
    {
        id: '70',
        tunisian: 'Tfehemna',
        german: 'Einverstanden'
    },
    {
        id: '71',
        tunisian: 'Mchet maak',
        german: 'Einverstanden',
        info: 'Nur als Antwort'
    },
    {
        id: '72',
        tunisian: 'Martin',
        german: 'Zweimal'
    },
    {
        id: '73',
        tunisian: 'Asli',
        german: 'Eingeborener'
    },
    {
        id: '74',
        tunisian: 'Buss',
        german: 'Kuss',
        info: 'Compare Bavarian "Bussi"'
    },
    {
        id: '75',
        tunisian: 'Selem',
        german: 'Frieden'
    },
    {
        id: '76',
        tunisian: 'Marhbé',
        german: 'Willkommen'
    },
    {
        id: '77',
        tunisian: 'Tesbah aala khir',
        german: 'Gute Nacht'
    },
    {
        id: '78',
        tunisian: 'Sbeh el khir',
        german: 'Guten Morgen'
    },
    {
        id: '79',
        tunisian: 'twahachtek',
        german: 'Ich vermisse dich'
    },
    {
        id: '80',
        tunisian: 'warda',
        german: 'Blume'
    },
    {
        id: '81',
        tunisian: 'Ah d.h na9ra belgde',
        german: 'Ich lerne sehr gut'
    },
    {
        id: '82',
        tunisian: 'sout',
        german: 'Stimme'
    },
    {
        id: '83',
        tunisian: 'kteb',
        german: 'Buch'
    },
    {
        id: '84',
        tunisian: 'Nhebek',
        german: 'Ich liebe dich'
    },
    {
        id: '85',
        tunisian: 'Mabinetnech',
        german: 'Bitte, kein danke zwischen uns',
        info: 'Im Norden ohne ma'
    },
    {
        id: '86',
        tunisian: 'Mabrouk',
        german: 'Gratuliere'
    },
    {
        id: '87',
        tunisian: 'Dima',
        german: 'Immer'
    },
    {
        id: '88',
        tunisian: 'Marhbé bik binetna',
        german: 'Willkommen zurück'
    },
    {
        id: '89',
        tunisian: '',
        german: ''
    },
    {
        id: '90',
        tunisian: '',
        german: ''
    },
    {
        id: '91',
        tunisian: '',
        german: ''
    },
    {
        id: '92',
        tunisian: '',
        german: ''
    },
    {
        id: '93',
        tunisian: '',
        german: ''
    },
    {
        id: '94',
        tunisian: '',
        german: ''
    },
    {
        id: '95',
        tunisian: '',
        german: ''
    },
    {
        id: '96',
        tunisian: '',
        german: ''
    },
    {
        id: '97',
        tunisian: '',
        german: ''
    },
    {
        id: '98',
        tunisian: '',
        german: ''
    },
    {
        id: '99',
        tunisian: '',
        german: ''
    },
    {
        id: '100',
        tunisian: '',
        german: ''
    },
    {
        id: '101',
        tunisian: '',
        german: ''
    },
    {
        id: '102',
        tunisian: '',
        german: ''
    },
    {
        id: '103',
        tunisian: '',
        german: ''
    },
    {
        id: '104',
        tunisian: '',
        german: ''
    },
    {
        id: '105',
        tunisian: '',
        german: ''
    },
    {
        id: '106',
        tunisian: '',
        german: ''
    },
    {
        id: '107',
        tunisian: '',
        german: ''
    },
    {
        id: '108',
        tunisian: '',
        german: ''
    },
    {
        id: '109',
        tunisian: '',
        german: ''
    },
    {
        id: '110',
        tunisian: '',
        german: ''
    },
    {
        id: '111',
        tunisian: '',
        german: ''
    },
    {
        id: '112',
        tunisian: '',
        german: ''
    },
    {
        id: '113',
        tunisian: '',
        german: ''
    },
    {
        id: '114',
        tunisian: '',
        german: ''
    },
    {
        id: '115',
        tunisian: '',
        german: ''
    },
    {
        id: '116',
        tunisian: '',
        german: ''
    },
    {
        id: '117',
        tunisian: '',
        german: ''
    },
    {
        id: '118',
        tunisian: '',
        german: ''
    },
    {
        id: '119',
        tunisian: '',
        german: ''
    },
    {
        id: '120',
        tunisian: '',
        german: ''
    },
    {
        id: '121',
        tunisian: '',
        german: ''
    },
    {
        id: '122',
        tunisian: '',
        german: ''
    },
    {
        id: '',
        tunisian: '',
        german: ''
    },
]

export default trans;