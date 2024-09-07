import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const statusFilePath = path.join(process.cwd(), 'light_status.json');

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === 'GET') {
    try {
      let status = JSON.parse(readFileSync(statusFilePath, 'utf8'));

      if (query.pin && query.action) {
        const { pin, action } = query;

        if ((pin === 'light1' || pin === 'light2') && (action === 'on' || action === 'off')) {
          status[pin] = action;
          writeFileSync(statusFilePath, JSON.stringify(status));
        }
      }

      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read or write the status file.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
