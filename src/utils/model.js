import theme from '../utils/theme.js';

const images = [
    theme.avatar1,
    theme.avatar2,
    theme.avatar3,
    theme.avatar4
];

var apps = {
    'webApps': [
        { 'name': 'Repro', 'image': theme.reproChatbot, 'description': 'A chatbot for young adults’ access to reproductive and sexual health. It bridges the gap between youths and their SRH through on-line chat conversation.', 'link': 'https://repro-capstone.onrender.com/', 'github': 'https://github.com/vannirriesarmiento/repro', 'techstack': ['Dialogflow', 'Node JS', 'React JS', 'Firebase', 'Render'], },
        { 'name': 'Repro Admin', 'image': theme.reproAdmin, 'description': 'A comprehensive admin system for Repro. It provides a user-friendly dashboard to track incoming records and generates PDFs for healthcare workers.', 'link': 'https://admin-repro-capstone.web.app/', 'github': 'https://github.com/vannirriesarmiento/repro-admin', 'techstack': ['React JS', 'Firebase'], }
    ],
    'mobileApps': [
        { 'name': 'Bevast', 'image': theme.bevast, 'description': 'Made using Nuxify\'s Flirt Template. A collaborative concept project of a cutting-edge mobile banking application. Available in dark and light modes.', 'link': '', 'techstack': ['Dart', 'Flutter'], },
        { 'name': 'Heremi', 'image': theme.heremi, 'description': 'The ultimate health companion! Another collaboration project that\'s a solution for medicine adherence— a reminder app for your healthcare needs.', 'link': 'https://youtu.be/0xwTPKQp9m0', 'techstack': ['Android Native', 'PostgreSQL'] },
    ],
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
        theme.heremi1,
        theme.heremi2,
        theme.heremi3,
        theme.heremi4,
        theme.heremi5,
        theme.heremi6,
        theme.heremi7,
        theme.ool1,
        theme.ool2,
        theme.ool3
    ]
};

var model = {
    images, apps, designs
}

export default model;