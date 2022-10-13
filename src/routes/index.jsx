import { path } from 'constants/path'
import AuthenticatedGuard from 'guards/AuthenticatedGuard'
import UnauthenticatedGuard from 'guards/UnauthenticatedGuard'
import AuthLayout from 'layouts/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import ForgotPassWordForm from 'pages/Auth/ForgotPassword'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import DetailDoctor from 'pages/DetailDoctor'
import HomePage from 'pages/HomePage'
import Profile from 'pages/Profile'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<MainLayout />}>
                    <Route path = {path.home} element = {<HomePage />}/>
                    <Route path = {path.detailDoctor} element = {<DetailDoctor />}/>
                </Route>
                <Route element ={<AuthenticatedGuard />}>
                    <Route element = {<MainLayout />}>
                        <Route path = {path.profile} element = {<Profile />}/>
                    </Route>
                </Route>
                <Route element = {<UnauthenticatedGuard />}>
                    <Route element = {<AuthLayout />}>
                        <Route path = {path.login} element = {<Login />}/>
                        <Route path = {path.register} element = <Register /> />
                        <Route path = {path.forgotPassword} element = {<ForgotPassWordForm />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent
