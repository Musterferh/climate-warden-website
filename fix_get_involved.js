const fs = require('fs');

const path = 'c:\\Climate Warden\\get-involved.html';
let content = fs.readFileSync(path, 'utf8');

// The multi-replace messed up by deleting content. Let's fix the structure manually if needed, or re-acquire the original if it was backed up.
// Actually, earlier I read the entire file. Let me rewrite the get-involved.html from my context.
