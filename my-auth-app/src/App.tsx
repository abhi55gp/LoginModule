import React, { useState } from 'react';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    const handleLogin = (user: string) => {
        setUsername(user);
        setLoginModalOpen(false);
    };

    const handleRegister = (user: string) => {
        setUsername(user);
        setRegisterModalOpen(false);
    };

    return (
        <div>
            {username ? (
                <WelcomePage username={username} />
            ) : (
                <div>
                    <button onClick={() => setLoginModalOpen(true)}>Login</button>
                    <button onClick={() => setRegisterModalOpen(true)}>Register</button>
                    {isLoginModalOpen && (
                        <LoginModal onClose={() => setLoginModalOpen(false)} onLogin={handleLogin} />
                    )}
                    {isRegisterModalOpen && (
                        <RegisterModal onClose={() => setRegisterModalOpen(false)} onRegister={handleRegister} />
                    )}
                </div>
            )}
        </div>
    );
};

export default App;