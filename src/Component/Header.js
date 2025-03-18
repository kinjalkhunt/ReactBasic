import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check login status when component mounts
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loginStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <>
            <div className='bg-gray-500 p-8 text-white'>
                <nav className='flex justify-between items-center'>
                    <div>
                        <button onClick={() => navigate('/')}>
                            Logo
                        </button>
                    </div>
                    <div>
                        <button onClick={() => navigate('/')} className='mr-4'>Home</button>
                        <button onClick={() => navigate('/about')} className='mr-4'>About</button>
                        
                        {isLoggedIn && (
                            <button onClick={() => navigate('/blog')} className='mr-4'>Blog</button>
                        )}
                        
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className='mr-4'>Logout</button>
                        ) : (
                            <button onClick={() => navigate('/login')} className='mr-4'>Login</button>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
