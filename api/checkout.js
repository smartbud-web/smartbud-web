import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

    const { orderId, customer, cart, totalAmount } = req.body;

    const cartHtml = cart.map(item => `<tr><td>${item.title_zh}</td><td>x${item.qty}</td><td>$${item.price * item.qty}</td></tr>`).join('');

    try {
        await resend.emails.send({
            from: 'Smart Bud Orders <orders@resend.dev>', // Must be your verified domain
            to: customer.email,
            subject: `[Smart Bud] 訂單確認與付款指示 Order Confirmation ${orderId}`,
            html: `
                <h2>感謝您的購買，${customer.firstName}!</h2>
                <p>我們已收到您的訂單 <strong>${orderId}</strong>。</p>
                <table>${cartHtml}</table>
            `
        });

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error("Resend API Error:", error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
}