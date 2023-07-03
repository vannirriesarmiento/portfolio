import theme from '../utils/theme.js';

const images = [
    theme.avatar1,
    theme.avatar2,
    theme.avatar3,
    theme.avatar4,
    theme.avatar5,
];

var apps = {
    'webApps': [
        {
            'name': 'Repro',
            'image': theme.reproChatbot,
            'description': 'A chatbot for young adults’ access to reproductive and sexual health. It bridges the gap between youths and their SRH through on-line chat conversation.',
            'link': 'https://repro-capstone.onrender.com/',
            'github': 'https://github.com/vannirriesarmiento/repro',
            'techstack': [
                'Dialogflow',
                'Node JS',
                'React JS',
                'Firebase',
                'Render'
            ],
        },
        {
            'name': 'Repro Admin',
            'image': theme.reproAdmin,
            'description': 'A comprehensive admin system for Repro. It provides a user-friendly dashboard to track incoming records and generates PDFs for healthcare workers.',
            'link': 'https://admin-repro-capstone.web.app/',
            'github': 'https://github.com/vannirriesarmiento/repro-admin',
            'techstack': ['React JS', 'Firebase'],
        }
    ],
    'mobileApps': [
        {
            'name': 'Bevast',
            'image': theme.bevast,
            'description': 'Made using Nuxify\'s Flirt Template. A collaborative concept project of a cutting-edge mobile banking application. Available in dark and light modes.',
            'link': '',
            'techstack': ['Dart', 'Flutter'],
        },
        {
            'name': 'Heremi',
            'image': theme.heremi,
            'description': 'The ultimate health companion! Another collaboration project that\'s a solution for medicine adherence— a reminder app for your healthcare needs.',
            'link': 'https://youtu.be/0xwTPKQp9m0',
            'techstack': ['Android Native', 'PostgreSQL']
        },
    ]
};

var designs = {
    'graphic': [
        theme.graphic1,
        theme.graphic2,
        theme.graphic3,
        theme.graphic4,
        theme.graphic5,
        theme.graphic6,
        theme.graphic7,
        theme.graphic8,
        theme.graphic9,
        theme.graphic10,
        theme.graphic11,
        theme.graphic12,
        theme.graphic13,
        theme.graphic14,
        theme.graphic15,
        theme.graphic16,
        theme.graphic17,
        theme.graphic18,
        theme.graphic19,
    ],
    'uiux': [
        {
            'name': 'OOL: Educational Livestreaming Platform',
            'image': 'https://cdn.dribbble.com/userupload/7669521/file/original-1fae8671592935e9cc87889169503745.png?compress=1&resize=1200x900',
            'description': 'An enhanced and streamlined learning solution that revolutionizes the way students engage with educational content.',
            'link': 'https://dribbble.com/shots/21686972-OOL-Educational-Livestreaming-Platform',
        },
        {
            'name': 'Heremi: All in One Solution',
            'image': 'https://cdn.dribbble.com/userupload/7613397/file/original-3e4b53041f92b65b32de6c2b68d72893.png?compress=1&resize=1200x900',
            'description': 'Meet your ultimate health companion! This innovative project brings you different features at once— a reminder, shopping, and consultation app tailored to meet your healthcare needs.',
            'link': 'https://dribbble.com/shots/21665552-Heremi-All-in-One-Solution',
        }
    ]
};

var model = {
    images, apps, designs
}

export default model;