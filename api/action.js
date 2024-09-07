const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
    const { state } = req.query;
    const statusPath = path.resolve('./status.json');
    let status = JSON.parse(fs.readFileSync(statusPath, 'utf-8'));

    for (let light in status) {
        status[light] = (state === 'on');
    }

    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
    res.writeHead(302, { Location: '/' });
    res.end();
}
