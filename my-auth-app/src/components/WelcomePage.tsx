import React from 'react';

interface WelcomePageProps {
    username: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ username }) => {
    return (
        <div>
            <h1>Hello {username}, welcome back!</h1>
        </div>
    );
};

export default WelcomePage;