const theRangeIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/the-range.png',
    iconSize:     [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor:  [1, -60]
});
const menziesIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/menzies.png',
    iconSize: [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor: [1, -60]
});
const morrisonsIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/morrisons.png',
    iconSize: [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor: [1, -60]
});
const asdaIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/asda.png',
    iconSize: [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor: [1, -60]
});
const tescoIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/tesco.png',
    iconSize: [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor: [1, -60]
});
const sainsburysIcon = L.icon({
    iconUrl: 'https://SamJones04.GitHub.io/LogisticsMap/beta/icons/sainsburys.png',
    iconSize: [37, 47],
    iconAnchor: [18, 47], 
    popupAnchor: [1, -60]
});


function initialisation() {
 
const companies = {
      menzies: {
        hiring: `<a href="https://www.menziesdistribution.com/about/working-for-menzies/">Menzies Careers</a>`,
        banner: 'https://i.imgur.com/yDg0Zd3.png'
      },
      theRange: {
        hiring: `<a href="https://www.therange.co.uk/careers/">The Range Careers</a>`,
        banner: 'https://i.imgur.com/K8Bj2To.png'
      },
      morrisons: {
        hiring: `<a href="https://www.morrisons.jobs/">Morrisons Careers</a>`,
        banner: 'https://i.imgur.com/7f4UZ6E.png'
      },
      tesco: {
        hiring: `<a href="https://www.tesco-careers.com/">Tesco Careers</a>`,
        banner: 'https://i.imgur.com/EwW5WzB.png'
      },
      asda: {
        hiring: `<a href="https://www.asda.jobs/">ASDA Careers</a>`,
        banner: 'https://i.imgur.com/zkwblqZ.png'
      },
      sainsburys: {
        hiring: `<a href="https://sainsburys.jobs/">Sainsbury's Careers</a>`,
        banner: `https://i.imgur.com/UDYui2C.png`
      }
    }
const details = [
    {
      description: '<b>The Range - Distribution Centre (Doncaster)</b>',
      icon: theRangeIcon,
      address: 'Paddock Ln<br>Thorne Doncaster <br>DN8 4HT',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 53.6262694,
      longitude: -0.9659708
    },
    {
      description: '<b>The Range - Distribution Centre (Bristol)</b>',
      icon: theRangeIcon,
      address: 'Almondsbury Severn Beach <br>Bristol <br>BS35 4EL',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 51.5392529,
      longitude: -2.6526772
    },
    {
      description: '<b>The Range - Distribution Centre (Rugby)</b>',
      icon: theRangeIcon,
      address: 'Valley Dr <br>Rugby <br>CV21 1TN',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 52.39969949,
      longitude: -1.2650994
    },
    {
      description: '<b>The Range - Distribution Centre (Stowmarket)</b>',
      icon: theRangeIcon,
      address: 'Near Gateway Blvd<br>Stowmarket <br>IP14 5BP',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 52.1782093,
      longitude: 1.0201366
    },
    {
      description: '<b>The Range - Distribution Centre (Stafford)</b>',
      icon: theRangeIcon,
      address: 'The Range SDC Distribution Centre<br>M6 - Stafford <br>ST18 9AR',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 52.7679168,
      longitude: -2.1100154
    },
    {
      description: '<b>The Range - Distribution Centre (Mitcheldean)</b>',
      icon: theRangeIcon,
      address: '7 Vantage Point Business Village<br>Mitcheldean<br>GL17 0DD',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 51.8686727,
      longitude: -2.4840853
    },
    {
      description: '<b>The Range - Distribution Centre (Wakefield)</b>',
      icon: theRangeIcon,
      address: 'Premier Way N<br>Pontefract <br>WF6 1GY',
      hiring: companies.theRange.hiring,
      banner: companies.theRange.banner,
      latitude: 53.7051214, 
      longitude: -1.3801595
    },
    {
      description: '<b>Menzies Distribution (Biggleswade)</b>',
      icon: menziesIcon,
      address: 'Market Garden Rd<br>Biggleswade<br>SG18 8QB',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 52.0700718, 
      longitude: -0.2333180
    },
    {
      description: '<b>Menzies Distribution (Stockton)</b>',
      icon: menziesIcon,
      address: 'Lockheed Close<br>Preston Farm Industrial Estate<br>Stockton On Tees<br>TS18 3SE',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 54.5405555, 
      longitude: -1.3245348
    },
    {
      description: '<b>Menzies Distribution (York)</b>',
      icon: menziesIcon,
      address: 'James Nicolson Link<br>York<br>YO30 4WG',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.9871214, 
      longitude: -1.0996252
    },
    {
      description: '<b>Menzies Distribution (Kendal)</b>',
      icon: menziesIcon,
      address: 'Unit 2 Westmorland Business Park<br>Gilthwaiterigg Lane<br>Kendal<br>LA9 6NS',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 54.3458577,
      longitude: -2.7403194
    },
    {
      description: '<b>Menzies Distribution (Carlisle)</b>',
      icon: menziesIcon,
      address: '7 Port Rd<br>Carlisle<br>CA2 7AF',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 54.8970390,
      longitude: -2.9529770
    },
    {
      description: '<b>Menzies Distribution (Inverness)</b>',
      icon: menziesIcon,
      address: '33 Harbour Rd<br>Inverness<br>IV1 1UA',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 57.4834776,
      longitude: -4.2169549
    },
    {
      description: '<b>Menzies Distribution (Aberdeen)</b>',
      icon: menziesIcon,
      address: '6 Abbotswell Rd<br>Aberdeen<br>AB12 3AB',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 57.1283623,
      longitude: -2.0934118
    },
    {
      description: '<b>Menzies Distribution (Dundee)</b>',
      icon: menziesIcon,
      address: 'West Gourdie Industrial Estate<br>Dundee<br>DD2 4SN',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 56.4781268,
      longitude: -3.0526352
    },
    {
      description: '<b>Menzies Distribution (Newbridge)</b>',
      icon: menziesIcon,
      address: '1 Claylands Rd<br>Newbridge<br>EH28 8LF',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 55.9276228,
      longitude: -3.4131566
    },
    {
      description: '<b>Menzies Distribution (Hamilton)</b>',
      icon: menziesIcon,
      address: 'Whistleberry Park<br>Hamilton<br>ML3 0ED',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 55.7882454,
      longitude: -4.0686905
    },
    {
      description: '<b>Menzies Distribution (East Kilbride)</b>',
      icon: menziesIcon,
      address: '47 Fairfield Pl<br>East Kilbride, Glasgow<br>G74 5LP',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 55.7676353,
      longitude: -4.2037632
    },
    {
      description: '<b>Menzies Distribution (Linwood)</b>',
      icon: menziesIcon,
      address: 'East Ave<br>Linwood, Paisley<br>PA1 2FD',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 55.8407886,
      longitude: -4.4772958
    },
    {
      description: '<b>Menzies Distribution (Hull)</b>',
      icon: menziesIcon,
      address: 'Burma Dr<br>Hull<br>HU9 5SD',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.7515020,
      longitude: -0.2761435
    },
    {
      description: '<b>Menzies Distribution (Wakefield)</b>',
      icon: menziesIcon,
      address: 'Telford Way<br>Wakefield<br>WF2 0XW',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.7145041,
      longitude: -1.5232972
    },
    {
      description: '<b>Menzies Distribution (Preston)</b>',
      icon: menziesIcon,
      address: '116 Tustin Way<br>Ribbleton, Preston<br>PR2 5LX',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.7824483,
      longitude: -2.6485409
    },
    {
      description: '<b>Menzies Distribution (Sheffield)</b>',
      icon: menziesIcon,
      address: 'Europa Dr<br>Tinsley, Sheffield<br>S9 1XT',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.3999427,
      longitude: -1.4058024
    },
    {
      description: '<b>Menzies Distribution (Chester)</b>',
      icon: menziesIcon,
      address: 'Stanney Mill Rd<br>Chester<br>CH2 4HX',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.2667694,
      longitude: -2.8760130
    },
    {
      description: '<b>Menzies Distribution (Rhyl)</b>',
      icon: menziesIcon,
      address: 'Kinmel Park Industrial Estate<br>Engine Hill, Bodelwyddan, Rhyl<br>LL18 5TY',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 53.2634440,
      longitude: -3.5060975
    },
    {
      description: '<b>Menzies Distribution (Swansea)</b>',
      icon: menziesIcon,
      address: 'Mill Stream Way<br>Central Business Park<br>Llansamlet, Swansea<br>SA7 0AG',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.6737420,
      longitude: -3.9043468
    },
    {
      description: '<b>Menzies Distribution (Coventry)</b>',
      icon: menziesIcon,
      address: 'Imperial Park, Siskin Pkwy W<br>Coventry<br>CV3 4PB',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 52.3663821,
      longitude: -1.4762131
    },
    {
      description: '<b>Menzies Distribution (Norwich)</b>',
      icon: menziesIcon,
      address: 'Norwich<br>NR7 0WH',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 52.6319504,
      longitude: -1.3728300
    },
    {
      description: '<b>Menzies Distribution (Cullompton)</b>',
      icon: menziesIcon,
      address: 'Longbridge Meadow<br>Cullompton<br>EX15 1BT',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 50.8590791,
      longitude: -3.3855794
    },
    {
      description: '<b>Menzies Distribution (Camberley)</b>',
      icon: menziesIcon,
      address: 'Camberley<br>GU16 7PL',
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.3161835,
      longitude: -0.7521866
    },
    {
      description: '<b>Menzies Distribution (SEL)</b>',
      icon: menziesIcon,
      address: `Bugsby's Way<br>London<br>SE10 0GD`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.4912000,
      longitude: 0.0111077
    },
    {
      description: '<b>Menzies Distribution (Bow)</b>',
      icon: menziesIcon,
      address: `Unit E Twelvetrees Industrial Estate<br>London<br>E3 3JG`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.5223103,
      longitude: -0.0030896
    },
    {
      description: '<b>Menzies Distribution (Grays)</b>',
      icon: menziesIcon,
      address: `Unit 4 - Oliver Close<br>Grays<br>RM20 3EE`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.4696362,
      longitude: 0.2713929
    },
    {
      description: '<b>Menzies Distribution (Maidstone)</b>',
      icon: menziesIcon,
      address: `Unit C, Block B Larkfield Trading Estate<br>New Hythe Ln<br>Larkfield, Aylesford<br>ME20 6SW`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.3148776,
      longitude: 0.4513092
    },
    {
      description: '<b>Menzies Distribution (Ipswich)</b>',
      icon: menziesIcon,
      address: `Bluestem Rd, Ransomes Industrial Estate<br>Ipswich IP3 9RR`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 52.0282077,
      longitude: 1.2121466
    },
    {
      description: '<b>Menzies Distribution (Ashford)</b>',
      icon: menziesIcon,
      address: `The Long Barrow, Willesborough<br>Ashford<br>TN24 0GAR`,
     hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.1290859,
      longitude: 0.8933436
    },
    {
      description: '<b>Menzies Distribution (Eastbourne)</b>',
      icon: menziesIcon,
      address: `10/11 Brampton Trade Park<br>Brampton Rd<br>Eastbourne<br>BN22 9AF`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 50.7922351,
      longitude: 0.2834491
    },
    {
      description: '<b>Menzies Distribution (Portsmouth)</b>',
      icon: menziesIcon,
      address: `Unit 1 Solent, 27 Walton Road<br>Portsmouth<br>PO6 1SX`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 50.8367152,
      longitude: -1.0445883
    },
    {
      description: '<b>Menzies Distribution (Ryde)</b>',
      icon: menziesIcon,
      address: `Business Park, 6 Nicholson Rd<br>Ryde<br>PO33 1BG`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 50.7177224,
      longitude: -1.1566671
    },
    {
      description: '<b>Menzies Distribution (Heathrow)</b>',
      icon: menziesIcon,
      address: `14-17 Heathrow International Trading Estate<br>Green Lane<br>Hounslow<br>TW4 6HB`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 51.4689098, 
      longitude: -0.4062997
    },
    {
      description: '<b>Morrisons Distribution Centre (Stockton)</b>',
      icon: morrisonsIcon,
      address: `7003 Crofton Rd<br>Stockton-on-Tees<br>TS18 2SZ`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 54.5678251,
      longitude: -1.2961916
    },
    {
      description: '<b>Morrisons Distribution Centre (Sittingbourne)</b>',
      icon: morrisonsIcon,
      address: `Fleet End<br>Sittingbourne<br>ME10 2FD`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 51.3712529,
      longitude: 0.7451217
    },
    {
      description: '<b>Morrisons Distribution Centre (Wakefield J41)</b>',
      icon: morrisonsIcon,
      address: `41 Kenmore Rd<br>Wakefield Industrial Estate<br>Wakefield<br>WF2 0XF`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 53.7130179,
      longitude: -1.5137985
    },
    {
      description: '<b>Morrisons Distribution Centre (Latimer and Corby)</b>',
      icon: morrisonsIcon,
      address: `Altendiez Way<br>Burton Latimer<br> Kettering<br>NN15 5YT`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 52.3696604,
      longitude: -0.6901384
    },
    {
      description: '<b>Morrisons Distribution Centre (Gadbrook)</b>',
      icon: morrisonsIcon,
      address: `King St<br>Rudheath, Northwich<br>CW9 7WA`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 53.2473480,
      longitude: -2.4751157
    },
    {
      description: '<b>Morrisons Distribution Centre (Swan Valley)</b>',
      icon: morrisonsIcon,
      address: `Swan Valley Way<br>Northampton<br>NN4 9BD`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 52.2124595,
      longitude: -0.9482554
    },
    {
      description: '<b>Morrisons Distribution Centre (Willow Green)</b>',
      icon: morrisonsIcon,
      address: `Kings Dr<br>Bridgwater<br>TA6 4FG`,
      hiring: companies.morrisons.hiring,
      banner: companies.morrisons.banner,
      latitude: 51.1534830,
      longitude: -2.9845741
    },
    {
      description: '<b>TESCO Distribution Centre (Livingston)</b>',
      icon: tescoIcon,
      address: `Carnegie Rd<br>Livingston<br>EH54 8TB`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 55.9022613,
      longitude: -3.5884668
    },
    {
      description: '<b>TESCO Distribution Centre (Middlesbrough)</b>',
      icon: tescoIcon,
      address: `Dabholm Road<br>Tees Docks<br>Middlesbrough<br>TS6 7RU`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 54.6093620,
      longitude: -1.1423123
    },
    {
      description: '<b>TESCO Distribution Centre (Oakwood)</b>',
      icon: tescoIcon,
      address: `Wingates Industrial Park<br>Great Bank Rd<br>Westhoughton, Bolton<br>BL5 3XU`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 53.5575549,
      longitude: -2.5316720
    },
    {
      description: '<b>TESCO Distribution Centre (Doncaster)</b>',
      icon: tescoIcon,
      address: `Middle Bank<br>Doncaster<br>DN4 5JJ`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 53.5109118,
      longitude: -1.1233165
    },
    {
      description: '<b>TESCO Distribution Centre (Widnes)</b>',
      icon: tescoIcon,
      address: `Macdermott Rd<br>Widnes<br>WA8`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 53.3528108,
      longitude: -2.7436266
    },
    {
      description: '<b>TESCO Distribution Centre (Lichfield)</b>',
      icon: tescoIcon,
      address: `Fradley Park<br>Halifax Ave<br>Lichfield <br>WS13 8NF`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 52.7138951,
      longitude: -1.7914430
    },
    {
      description: '<b>TESCO Distribution Centre (Hinckley)</b>',
      icon: tescoIcon,
      address: `7 Jacknell Rd<br>Hinckley<br>LE10 3BS`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 52.5408411,
      longitude: -1.4092417
    },
    {
      description: '<b>TESCO Distribution Centre (Peterborough)</b>',
      icon: tescoIcon,
      address: `Staplee Way<br>Peterborough<br>PE1 4YT`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 52.5944943,
      longitude: -0.1992177
    },
    {
      description: '<b>TESCO Distribution Centre (Kilsby)</b>',
      icon: tescoIcon,
      address: `Saxon Drive Drift<br>Kilsby<br>NN6 7GY`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 52.3543759,
      longitude: -1.1680541
},
    {
      description: '<b>TESCO Distribution Centre (Caldicot)</b>',
      icon: tescoIcon,
      address: `Redwick<br>Caldicot<br>NP26 3TS`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.5720355,
      longitude: -2.8600881
},
    {
      description: '<b>TESCO Distribution Centre (Avonmouth)</b>',
      icon: tescoIcon,
      address: `Severn Beach<br>Bristol<br>BS35 4BR`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.5548997,
      longitude: -2.6410703
},
    {
      description: '<b>TESCO Distribution Centre (Didcot)</b>',
      icon: tescoIcon,
      address: `Collet<br>Didcot<br>OX11 7AW`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.6214740,
      longitude: -1.2493290
},
    {
      description: '<b>TESCO Distribution Centre (Reading)</b>',
      icon: tescoIcon,
      address: `Basingstoke Rd<br>Reading<br>RG2 0PN`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.4194979,
      longitude: -0.9800497
},
    {
      description: '<b>TESCO Distribution Centre (Enfield)</b>',
      icon: tescoIcon,
      address: `965 Hertford Rd<br>Waltham Cross<br>EN8 7RR`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.6810638, 
      longitude: -0.0306593
},
    {
      description: '<b>TESCO Distribution Centre (Dagenham)</b>',
      icon: tescoIcon,
      address: `Consul Ave<br>Rainham, Dagenham<br>RM9 6DE`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.5218879,
      longitude: 0.1671834
},
    {
      description: '<b>TESCO Distribution Centre (Purfleet)</b>',
      icon: tescoIcon,
      address: `Dolphin Park, Dolphin Way<br>Purfleet-on-Thames<br>RM19 1ND`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.4810045, 
      longitude: 0.2582498
},
    {
      description: '<b>TESCO Distribution Centre (Snodland)</b>',
      icon: tescoIcon,
      address: `Hays Rd<br>Snodland<br>ME6 5TQ`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 51.3207652,
      longitude: 0.4313384
},
    {
      description: '<b>TESCO Distribution Centre (Southampton)</b>',
      icon: tescoIcon,
      address: `Nursling Industrial Estate<br>Canberra Rd<br>Nursling, Southampton<br>SO16 0WB`,
      hiring: companies.tesco.hiring,
      banner: companies.tesco.banner,
      latitude: 50.9433019, 
      longitude: -1.4788832
},
    {
      description: '<b>ASDA Distribution Centre (Middlesbrough)</b>',
      icon: asdaIcon,
      address: `Dabholm Rd<br>Middlesbrough<br>TS6 7RU`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 54.6050697,
      longitude: -1.1372801 
},
    {
      description: '<b>ASDA Distribution Centre (Washington)</b>',
      icon: asdaIcon,
      address: `2 Barmston Ln<br>Washington<br>NE38 8LE`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 54.9040318,
      longitude: -1.4840384
},
    {
      description: '<b>ASDA Distribution Centre (Rochdale)</b>',
      icon: asdaIcon,
      address: `Wincanton Asda Chilled Distribution Centre<br>Rochdale<br>OL16 4NZ`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 53.5983958,
      longitude: -2.1303267
},
    {
      description: '<b>ASDA Distribution Centre (Wakefield)</b>',
      icon: asdaIcon,
      address: `Tuscany Park Express Way<br>Castleford<br>WF10 5UA`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 53.7187850, 
      longitude: -1.4223989
},
    {
      description: '<b>ASDA Distribution Centre (Lymedale)</b>',
      icon: asdaIcon,
      address: `Coaldale Rd<br>Newcastle Under Lyme<br>ST5 9QX`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 53.0289178, 
      longitude: -2.2514060
},
    {
      description: '<b>ASDA Home Shopping Centre (Nottingham)</b>',
      icon: asdaIcon,
      address: `Firth Way<br>Nottingham<br>NG6 8GF`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 53.0089715,
      longitude: -1.2046501
},
    {
      description: '<b>ASDA Ambient Distribution Centre (Lutterworth)</b>',
      icon: asdaIcon,
      address: `Magna Park, A5<br>Lutterworth<br>LE17 4XH`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 52.4526940,
      longitude: -1.2531988 
},
    {
      description: '<b>ASDA Distribution Centre (Brackmills)</b>',
      icon: asdaIcon,
      address: `Gowerton Rd<br>Great Houghton, Northampton <br>NN4 7BW`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 52.2142488,
      longitude: -0.8473668 
},
    {
      description: '<b>ASDA Chilled Distribution Centre (Bedford)</b>',
      icon: asdaIcon,
      address: `Woburn Rd<br>Kempston, Bedford<br>MK43 9AB`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 52.1019425,
      longitude: -0.5008667
},
    {
      description: '<b>Menzies Distribution (Valor Park)</b>',
      icon: menziesIcon,
      address: `6 Clarke Rd<br>Bletchley, Milton Keynes <br>MK1 1LJ`,
      hiring: companies.menzies.hiring,
      banner: companies.menzies.banner,
      latitude: 52.0116835,
      longitude: -0.7299233
},
    {
      description: '<b>ASDA Distribution Centre (Chepstow)</b>',
      icon: asdaIcon,
      address: `Newhouse Farm Industrial Estate<br>Mathern, Chepstow<br>NP16 6UD`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 51.6135752, 
      longitude: -2.6776479
},
    {
      description: '<b>ASDA Chilled Distribution Centre (Bristol)</b>',
      icon: asdaIcon,
      address: `Kings Weston Ln<br>Avonmouth, Bristol<br>BS11 9FG`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 51.5131428,
      longitude: -2.6913017
},
    {
      description: '<b>ASDA Distribution Centre (Didcot)</b>',
      icon: asdaIcon,
      address: `Sutton Courtenay Rd<br>Abingdon<br>OX14 4TE`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 51.6266172, 
      longitude: -1.2756033
},
    {
      description: '<b>ASDA Chilled Distribution Centre (Erith)</b>',
      icon: asdaIcon,
      address: `Belvedere<br>DA17 6JY`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 51.5027811, 
      longitude: 0.1582604
},
    {
      description: '<b>ASDA Distribution Centre (XDC)</b>',
      icon: asdaIcon,
      address: `Belvedere<br>DA17 6BG`,
      hiring: companies.asda.hiring,
      banner: companies.asda.banner,
      latitude: 51.4985695, 
      longitude: 0.1569384
},
    {
      description: `<b>Sainsbury's Distribution Centre (Basingstoke)</b>`,
      icon: sainsburysIcon,
      address: `6AB, 11 Houndmills Rd<br>Basingstoke<br>RG21 6AB`,
      hiring: companies.sainsburys.hiring,
      banner: companies.sainsburys.banner,
      latitude: 51.2695976, 
      longitude: -1.1027316
}
];

load(details, companies)
}
initialisation()


function load(details, companies) {
  
  console.log(`%cTotal Locations on Map: ` + `%c${details.length}`, 'color: #bada55', 'color: #1a80e5')
  
    // Map
    var map = L.map('map', {attributionControl: false}).setView([54.543, -1.328], 6);
    
    //LJS - Attribution
    L.control.attribution().addTo(map).setPrefix('<a href="https://leafletjs.com/">LeafletJS</a>');
    
    // Load Markers
    details.forEach(details => {
      
        let mark = L.marker([details.latitude, details.longitude], {icon: details.icon}).addTo(map);
        
        mark.bindPopup(`<img src="${details.banner}" width="100%" alt="Company Logo/Banner" height="100%"><br><br>${details.description}<br>${details.address}<br><br><b>${details.hiring}</b>`)
       
        // Switch for Company Count Goes Here:
        
    } /* Foreach */)
  
    // Load Map Tile
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
  
  
  
}


/* Locations Count:

## TOP OF LOAD function

let menziesCount = []
let asdaCount = []
let tescoCount = []
let morrisonsCount = []
let sainsburysCount = []
let rangeCount = []

## SWITCH INSIDE FOREACH

switch (details.banner) {
  case 'https://i.imgur.com/yDg0Zd3.png': // Menzies
    console.log(details.description)
    menziesCount.push(details.description)
    break;
  case 'https://i.imgur.com/K8Bj2To.png':
    rangeCount.push('a')
    break;
  case 'https://i.imgur.com/7f4UZ6E.png':
    morrisonsCount.push('a')
    break;
  case 'https://i.imgur.com/zkwblqZ.png':
    asdaCount.push('a')
    break;
    case 'https://i.imgur.com/UDYui2C.png':
    sainsburysCount.push('a')
    break;
    case 'https://i.imgur.com/EwW5WzB.png':
    tescoCount.push('a')
    break;
  default:
    console.log(`ERROR:\n\n${details}.`);
}

## RESULT

console.log(`TESCO: ${tescoCount.length}`)
console.log(`ASDA: ${asdaCount.length}`)
console.log(`MENZIES: ${menziesCount.length}`)
console.log(`SAINSBURYS: ${sainsburysCount.length}`)
console.log(`THE RANGE: ${rangeCount.length}`)
console.log(`MORRISONS: ${morrisonsCount.length}`)
*/