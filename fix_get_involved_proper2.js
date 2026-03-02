const fs = require('fs');

function replaceAllKeys(path) {
    let content = fs.readFileSync(path, 'utf8');

    // Replace all YOUR_STATICFORMS_ACCESS_KEY occurrences
    content = content.replace(/YOUR_STATICFORMS_ACCESS_KEY/g, "sf_dbbhd68hhejncnbc81ch80j9");

    // Fix the URL domain
    content = content.replace(/api\.staticforms\.xyz/g, "api.staticforms.dev");

    fs.writeFileSync(path, content, 'utf8');
    console.log(`Updated everything inside ${path}`);
}

replaceAllKeys('c:\\Climate Warden\\get-involved.html');
replaceAllKeys('c:\\Climate Warden\\contact.html');
