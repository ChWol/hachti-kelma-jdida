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
        german: 'Hallo'
    },
    {
        id: '4',
        tunisian: 'Batata',
        german: 'Kartoffel'
    },
    {
        id: '5',
        tunisian: 'Ya toutou',
        german: 'Irgendwas Süßes oder so'
    },
    {
        id: '6',
        tunisian: 'Theb tokhrej maaya?',
        german: 'Willst du mit mir gehen?'
    },
    {
        id: '7',
        tunisian: 'Ey betbiaa',
        german: 'Ja natürlich'
    },
    {
        id: '8',
        tunisian: 'Kol aam wenti haya bkhir!',
        german: 'Schönes neues Jahr!'
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
        german: 'Mir gehts gut'
    },
    {
        id: '13',
        tunisian: 'Khra',
        german: 'Scheiße'
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
        german: 'das beste'
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
        german: 'Pinguin'
    },
    {
        id: '64',
        tunisian: 'Moufej2a',
        german: 'Überraschung'
    },
]

export default trans;