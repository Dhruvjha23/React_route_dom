import React from 'react';

const Home = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our Website!</h1>
        <p>
            Discover amazing content and learn more about what we offer. Explore the
            About and Contact pages to know more.
        </p>
        <img
            src="https://picsum.photos/600/300"
            alt="Home"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />

    </div>
);

export default Home;
