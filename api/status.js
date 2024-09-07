import { promises as fs } from 'fs';
import path from 'path';

// Path to the JSON file
const statusFilePath = path.join(process.cwd(), 'light_status.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Read the status from the JSON file
      let status = JSON.parse(await fs.readFile(statusFilePath, 'utf8'));

      if (req.query.pin && req.query.action) {
        const { pin, action } = req.query;

        // Validate the pin and action
        if ((pin === 'light1' || pin === 'light2') && (action === 'on' || action === 'off')) {
          status[pin] = action; // Update the status
          await fs.writeFile(statusFilePath, JSON.stringify(status, null, 2)); // Save the updated status
        }
      }

      // Return the current status in JSON format
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read or write the status file.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
