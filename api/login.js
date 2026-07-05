export default function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { password } = req.body;
    const actualPassword = process.env.ADMIN_PASSWORD;

    // Check if the provided password matches the Vercel environment variable
    if (password === actualPassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}