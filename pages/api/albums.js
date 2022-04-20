import path from 'path'
import fs from 'fs';

const {promisify} = require('util');
const readFile = promisify(fs.readFile);

export default async function handler(req, res) {
    const jsonFile = path.resolve('./data', 'Albums.json');
    try {
        const readFileData = await readFile(jsonFile, 'utf8');
        const albums = JSON.parse(readFileData).find(element => element.name === 'Albums').data;
        if (albums) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(albums, null, 2));
            console.log('GET /api/albums status: 200');
        }
    } catch (error) {
        res.status(404).send('GET /api/albums  status: 404 file not found on server');
        console.error('GET /api/albums error  status 404', error);
    }
}
