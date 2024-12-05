// pages/api/updateData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { resources } = req.body;

        // Specify the path to your data.json file
        const filePath = path.join(process.cwd(), 'data.json');

        // Write the updated resources to the data.json file
        try {
            await fs.promises.writeFile(filePath, JSON.stringify({ resources }, null, 2));
            res.status(200).json({ message: 'Data updated successfully' });
        } catch (error) {
            console.error('Error writing to file', error);
            res.status(500).json({ message: 'Error updating data' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
