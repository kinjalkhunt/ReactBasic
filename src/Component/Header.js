import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
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
                        <button onClick={() => navigate('/about')}>About</button>
                    </div>

                </nav>

            </div>

        </>
    );
}

export default Header;
