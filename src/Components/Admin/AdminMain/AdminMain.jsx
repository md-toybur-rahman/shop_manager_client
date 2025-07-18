import React, { useContext } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const AdminMain = () => {
	const {isMenu, setIsMenu} = useContext(AuthContext);
	return (
		<div className='flex lg:gap-10 px-5 pb-14 pt-5 lg:p-10 h-full'>
			<div className='max-h-fit lg:w-[300px] xl:[400px] shadow-lg shadow-pink-200 rounded-2xl overflow-scroll scrollbar-hide'>
				<AdminNavbar></AdminNavbar>
			</div>
			<div onClick={() => {setIsMenu(false)}} className='shadow-lg shadow-pink-200 p-5 rounded-2xl flex-1 min-h-[340px] h-fit mt-4 lg:mt-0 scrollbar-hide mb-20 px-5'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AdminMain;