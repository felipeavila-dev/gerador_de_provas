import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import {Theme} from './pages/Theme';
import {Question} from './pages/Question';
import { EndTest } from './pages/EndTest';
import {RegisterQuestions} from './pages/RegisterQuestions'
import {Logout} from './pages/Logout';
import {Login} from './pages/Login';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Question />}/>
                <Route path='/end' element={<EndTest />}/>
                <Route path='/register' element={<RegisterQuestions />}/>
                <Route path='/logout' element={<Logout />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}