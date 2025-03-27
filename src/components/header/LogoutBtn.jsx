import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../configs/authSlice'
import authencationService from '../../appwrite_services/auth'

function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await authencationService.logout(); 
            dispatch(logout()); 
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <button onClick={handleLogout}className='inline-block px-6  py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    );
}

export default LogoutBtn;