import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Dashborad from '../../DashBoard/Dashborad';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from "../../layouts/Main/Main";
import MyDashboard from '../../layouts/MyDashboard/MyDashboard';
import Login from "../../loginProccess/Login/Login";
import SignUp from "../../loginProccess/SignUp/SignUp";
import About from "../../pages/About/About";
import Article from '../../pages/Article/Article';
import Category from "../../pages/home/Category/Category";
import Home from "../../pages/home/Home/Home";
import UsedMobiles from '../../pages/home/UsedMobiles/UsedMobiles';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/article',
                element: <Article></Article>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/usedMobiles',
                element: <UsedMobiles></UsedMobiles>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashboard></MyDashboard>
            }
        ]
    },
    {
        path: '*',
        element: <div className='text-center mt-20'> <span className='text-6xl text-red-500'>404</span> page not found, please enter valid URL </div>
    }
]);

export default router;