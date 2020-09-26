import React from "react";

import Home from './Home';
import About from './About';
import Shop from './Shop';
import Lookbook from './Lookbook';
import Contact from './Contact';
import Press from './Press';
import Faq from './Faq';


export const pageList = [
    {
        title: 'Shop',
        url: '/',
        component: <Shop />
    },
    {
        title: 'Home',
        url: '/Home',
        component: <Home />
    },
    {
        title: 'About',
        url: '/About',
        component: <About />
    },
    {
        title: 'Lookbook',
        url: '/Lookbook',
        component: <Lookbook />
    },
    {
        title: 'Contact',
        url: '/Contact',
        component: <Contact />
    },
    {
        title: 'Press',
        url: '/Press',
        component: <Press />
    },
    {
        title: 'Faq',
        url: '/Faq',
        component: <Faq />
    },
]
