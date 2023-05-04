var config = {
    style: 'mapbox://styles/conleyjm/clgwzi9tp00kr01pf6k6v5p8t',
    accessToken: 'pk.eyJ1IjoiY29ubGV5am0iLCJhIjoiY2xnNnlwazFiMGdlazNkcjB1YzFsMTNmNCJ9.UVVlXXP7Au4j4eLInN3HTQ',
    theme: 'light',
    use3dTerrain: true,
    auto: false,
    chapters: [
        {
            id: 'Text0',
            alignment: 'center',
            hidden: false,
            location: {
                center: [-70.39337630957202, 26.21742768905959],
                zoom: 2.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer:'country-label',
                opacity: 0,
            },
        ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'Text1',
            alignment: 'center',
            hidden: false,
            description: "Trillions of dollars move across the globe every day, unreachable by tax authorities.",
            location: {
                center: [-70.39337630957202, 26.21742768905959],
                zoom: 2.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
        ]
        },
        {
            id: 'Text2',
            alignment: 'center',
            hidden: false,
            description: "Much of that money funds some of the world's wealthiest individuals.",
            location: {
                center: [-70.39337630957202, 26.21742768905959],
                zoom: 2.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'country-label',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer:'country-label',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'Text3',
            alignment: 'left',
            hidden: false,
            description: "Every day, approximately $450 billion moves through U.S. stock trading desks. A large portion of that money ends up in offshore bank accounts and networks.",
            location: {
                center: [-74.01107444706159, 40.708323861562796],
                zoom: 15,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
             
            ]
        },
        {
            id: 'Text4',
            alignment: 'left',
            hidden: false,
            description: "An estimated $25 trillion globally sits in these shielded tax havens.",
            location: {
                center: [-74.01107444706159, 40.708323861562796],
                zoom: 15,
                pitch: 45,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
             
            ]
        },
        {
            id: 'Text5',
            alignment: 'left',
            hidden: false,
            description: "This money sits in countries throughout the Caribbean, from Grenada and the Cayman Islands to St. Kitts and the Bahamas.",
            location: {
                center: [-70.4088619747309, 17.025202482712373],
                zoom: 4.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer:'country-label',
                opacity: 0,
            },
            {
                layer:'barbados',
                opacity: 0,
            },
            {
                layer:'aruba',
                opacity: 0,
            },
            {
                layer:'grenada',
                opacity: 0,
            },
            {
                layer:'dominica',
                opacity: 0,
            },
            {
                layer:'anguilla',
                opacity: 0,
            },
            {
                layer:'saintlucia',
                opacity: 0,
            },
            {
                layer:'saintvincent',
                opacity: 0,
            },
            {
                layer:'saintkitts',
                opacity: 0,
            },
            {
                layer:'britishvirginislands',
                opacity: 0,
            },
            {
                layer:'caymanislands',
                opacity: 0,
            },
            {
                layer:'turksandcaicos',
                opacity: 0,
            },
            {
                layer:'antiguaandbarbuda',
                opacity: 0,
            },
            {
                layer:'thebahamas',
                opacity: 0,
            },
        ],
        onChapterExit: []
        },
        {
            id: 'Text7',
            alignment: 'right',
            hidden: false,
            description: "Tax rates at or approaching zero and extreme banking secrecy laws make these countries especially enticing for hiding money.",
            location: {
                center: [-70.4088619747309, 17.025202482712373],
                zoom: 4.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'country-label',
                    opacity: 1,
                },
                {
                    layer:'barbados',
                    opacity: 1,
                },
                {
                    layer:'aruba',
                    opacity: 1,
                },
                {
                    layer:'grenada',
                    opacity: 1,
                },
                {
                    layer:'dominica',
                    opacity: 1,
                },
                {
                    layer:'anguilla',
                    opacity: 1,
                },
                {
                    layer:'saintlucia',
                    opacity: 1,
                },
                {
                    layer:'saintvincent',
                    opacity: 1,
                },
                {
                    layer:'saintkitts',
                    opacity: 1,
                },
                {
                    layer:'britishvirginislands',
                    opacity: 1,
                },
                {
                    layer:'caymanislands',
                    opacity: 1,
                },
                {
                    layer:'turksandcaicos',
                    opacity: 1,
                },
                {
                    layer:'antiguaandbarbuda',
                    opacity: 1,
                },
                {
                    layer:'thebahamas',
                    opacity: 1,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'Text8',
            alignment: 'center',
            hidden: false,
            description: "These networks — and the people who push money through them — are our beat.",
            location: {
                center: [-72.97057580738932, 26.14667672870626],
                zoom: 2.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'country-label',
                    opacity: 0,
                },
                {
                    layer:'barbados',
                    opacity: 1,
                },
                {
                    layer:'aruba',
                    opacity: 1,
                },
                {
                    layer:'grenada',
                    opacity: 1,
                },
                {
                    layer:'dominica',
                    opacity: 1,
                },
                {
                    layer:'anguilla',
                    opacity: 1,
                },
                {
                    layer:'saintlucia',
                    opacity: 1,
                },
                {
                    layer:'saintvincent',
                    opacity: 1,
                },
                {
                    layer:'saintkitts',
                    opacity: 1,
                },
                {
                    layer:'britishvirginislands',
                    opacity: 1,
                },
                {
                    layer:'caymanislands',
                    opacity: 1,
                },
                {
                    layer:'turksandcaicos',
                    opacity: 1,
                },
                {
                    layer:'antiguaandbarbuda',
                    opacity: 1,
                },
                {
                    layer:'thebahamas',
                    opacity: 1,
                },
            ],
            onChapterExit: []
        }
    ]
};
