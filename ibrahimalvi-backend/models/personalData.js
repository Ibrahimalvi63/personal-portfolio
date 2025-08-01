const mongoose = require('mongoose');
const { biodataDB } = require('../config');

const heroSchema = new mongoose.Schema({
    welcome: { type: String },
    title: { type: String },
    subTitle: { type: String },
    description: { type: String },
    profileImage: { type: String }
});

const skillsSchema = new mongoose.Schema({
    title: { type: String },
    progress: { type: Number }
});

const aboutSchema = new mongoose.Schema({
    title: { type: String },
    bio: { type: String },
    aboutImage: { type: String },
    skills: [skillsSchema],
});

const serviceSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

const projectSchema = new mongoose.Schema({
    title: { type: String },
    link: { type: String },
    projectImage: { type: String }
});

const contactSchema = new mongoose.Schema({
    email: { type: String },
    phone: { type: String },
    gitHub: { type: String },

});
const footerSchema = new mongoose.Schema({
    facebook: { type: String },
    youtube: { type: String },
    linkdin: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    telegram: { type: String },
    whatsapp: { type: String },
    tiktok: { type: String },
    pinterest: { type: String },
    message: { type: String }
});

const portfolioSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    hero: heroSchema,
    about: aboutSchema,
    services: [serviceSchema],
    projects: [projectSchema],
    contacts: contactSchema,
    footer: footerSchema
},
    {
        timestamps: true
    });

const Biodata = biodataDB.model("biodata", portfolioSchema);
module.exports = Biodata;