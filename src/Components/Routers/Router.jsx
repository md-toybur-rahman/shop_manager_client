import React from 'react';
import {
	createBrowserRouter
} from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Home/Home';
import Staffs from '../Staffs/Staffs';
import NotAuthorized from '../Shared/NotAuthorized/NotAuthorized';
import AdminMain from '../Admin/AdminMain/AdminMain';
import AdminHome from '../Admin/AdminHome/AdminHome';
import NoticePanel from '../Admin/NoticePanel/NoticePanel';
import SetShopCode from '../Admin/SetShopCode/SetShopCode';
import StaffManipulation from '../Admin/StaffManipulation/StaffManipulation';
import UserManipulation from '../Admin/UserManipulation/UserManipulation';
import UserRequest from '../Admin/UserRequest/UserRequest';
import SetShopLocation from '../Admin/SetShopLocation/SetShopLocation';
import LocationDetails from '../Admin/LocationDetails/LocationDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/staff/uid_query/:uid',
				element: <Staffs></Staffs>,
				loader: ({params}) => fetch(`https://shop-manager-server.onrender.com/staff/uid_query/${params.uid}`)
			},
			{
				path: '/not_authorized',
				element: <NotAuthorized></NotAuthorized>
			},
			{
				path: '/admin',
				element: <AdminMain></AdminMain>,
				children: [
					{
						path: '/admin',
						element: <AdminHome></AdminHome>
					},
					{
						path: '/admin/notice_panel',
						element: <NoticePanel></NoticePanel>
					},
					{
						path: '/admin/set_shop_code',
						element: <SetShopCode></SetShopCode>
					},
					{
						path: '/admin/shop_location',
						element: <SetShopLocation></SetShopLocation>
					},
					{
						path: '/admin/staff_manipulation',
						element: <StaffManipulation></StaffManipulation>
					},
					{
						path: '/admin/user_manipulation',
						element: <UserManipulation></UserManipulation>
					},
					{
						path: '/admin/user_request',
						element: <UserRequest></UserRequest>
					},
					{
						path: '/admin/location_details',
						element: <LocationDetails></LocationDetails>
					}
				]
			}
		]
	}
]);

export default router;