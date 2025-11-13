const fs = require('fs');
const path = require('path');

// Project data (same as in script.js)
const projects = {
    'project1': {
        title: 'Siddhar Nagar',
        location: 'Salem, Tamil Nadu',
        poster: 'projects/posters/01.jpg',
        layout: 'projects/layouts/01a.jpg',
        description: 'Siddhar Nagar offers a secure gated community with tar roads, parks, a temple, and 24/7 surveillance. It includes drainage systems, water connections for each plot, and fenced boundaries for added safety. With CCTV, children\'s play areas, parking, and 80% bank loan availability, it ensures modern and comfortable living.'
    },
    'project2': {
        title: 'Satellite City',
        location: 'Anupuram, Tamil Nadu',
        poster: 'projects/posters/02.jpg',
        layout: 'projects/layouts/02a.jpg',
        description: 'SATELLITE CITY offers a gated community with parks, walkways, streetlights, and 24/7 security. It features commercial shops, children\'s play areas, and ample parking with cemented roads and stormwater drains. Water, bank loan facilities, and on-road access make it a fully equipped and convenient residential layout.'
    },
    'project3': {
        title: 'MM Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/03.jpg',
        layout: 'projects/layouts/03a.jpg',
        description: 'MM NAGAR offers a gated community with tar roads, parks, a temple, and round-the-clock security in a pollution-free environment. It features walkways, public utility areas, stormwater drains, and streetlights for comfortable living. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it ensures convenience and accessibility.'
    },
    'project4': {
        title: 'Railway Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/04.jpg',
        layout: 'projects/layouts/04a.jpg',
        description: 'RAILWAY NAGAR offers a secure gated community with tar roads, parks, a temple, and 24/7 security. It includes walkways, public utility areas, stormwater drains, and streetlights for a well-planned layout. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it ensures convenient living.'
    },
    'project5': {
        title: 'Sri Ranganathar Avenue',
        location: 'Palur, Tamil Nadu',
        poster: 'projects/posters/05.jpg',
        layout: 'projects/layouts/05a.jpg',
        description: 'SRI RANGANATHAR AVENUE offers a gated community with cement roads, parks, a temple, and 24/7 security. It features walkways, public utility areas, stormwater drains, and streetlights for a well-developed layout. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it ensures modern and convenient living.'
    },
    'project6': {
        title: 'Sri Sai Padmavati Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/06.jpg',
        layout: 'projects/layouts/06a.jpg',
        description: 'Sri Sai Padmavati Nagar offers a safe gated community with tar roads, parks, a temple, and 24/7 security in a pollution-free environment. It includes walkways, stormwater drains, and 24×7 transport access for convenient living. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it ensures comfort and accessibility.'
    },
    'project7': {
        title: 'VSR Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/07.jpg',
        layout: 'projects/layouts/07a.jpg',
        description: 'VSR NAGAR offers a gated community with black tar roads, parks, a temple, and 24/7 security in a pollution-free environment. It features rainwater harvesting, CCTV surveillance, and 24×7 transport facilities in an established residential area. With children\'s play areas, parking, and 90% bank loan availability, it ensures a secure and comfortable lifestyle.'
    },
    'project8': {
        title: 'Collector Farms',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/08.jpg',
        layout: 'projects/layouts/08a.jpg',
        description: 'Collector Farms offers spacious plots starting from 5010 sq. ft. with 24×7 transport, water, and electricity facilities. It provides a pollution-free environment with lush green plantations and 24 ft wide tar roads. With clear documentation, it\'s ideal for organic agriculture and farmland development.'
    },
    'project9': {
        title: 'Kanchi Kanda Kottam',
        location: 'Kanchipuram, Tamil Nadu',
        poster: 'projects/posters/09.jpg',
        layout: 'projects/layouts/09a.jpg',
        description: 'KANCHI KANDA KOTTAM offers a gated community with cement roads, a park, a temple, and 24/7 security. It includes walkways, public utility areas, stormwater drains, and streetlights for a well-planned environment. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it provides comfort and convenience.'
    },
    'project10': {
        title: 'Sri Sakthi Vinayagar Nagar',
        location: 'Tellar, Vandavasi, Tamil Nadu',
        poster: 'projects/posters/10.jpg',
        layout: 'projects/layouts/10a.jpg',
        description: 'SRI SAKTHI VINAYAGAR NAGAR offers a gated community with cement roads, parks, a temple, and 24/7 security. It features walkways, public utility areas, stormwater drains, and streetlights for a well-planned environment. With commercial shops, children\'s play areas, parking, and 90% bank loan availability, it provides comfort and convenience.'
    }
};

// Read the template
const templatePath = path.join(__dirname, 'project-template.html');
let template = fs.readFileSync(templatePath, 'utf8');

// Create a directory for project pages if it doesn't exist
const pagesDir = path.join(__dirname, 'projects');
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir);
}

// Generate a page for each project
Object.entries(projects).forEach(([id, project]) => {
    let pageContent = template
        .replace('Project Title', project.title)
        .replace('Project Details', `${project.title} | Project Details`);
    
    // Write the project page
    const pagePath = path.join(pagesDir, `${id}.html`);
    fs.writeFileSync(pagePath, pageContent);
    
    console.log(`Generated: ${pagePath}`);
});

console.log('All project pages have been generated!');
