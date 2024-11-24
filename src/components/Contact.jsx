import React from 'react';

const Contact = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>
            Have questions? We’d love to hear from you! Reach out to us via any of the
            following channels:
        </p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Email: contact@ourwebsite.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 React Street, JavaScript City, 45678</li>
        </ul>
        <img
    src="https://picsum.photos/450/200"
    alt="About Us"
/>


        <p>Follow us on social media for the latest updates!</p>
    </div>
);

export default Contact;
