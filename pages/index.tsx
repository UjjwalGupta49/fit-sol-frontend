import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import React, { FC } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import styles from '../styles/App.module.css';

import { Context } from '../components/WalletConnection/WalletConnection';
import {NavAppBar} from '../components/Navbar/Navbar';




export const App: FC = () => {

    return (
        <div>
            <Context>
                <div className={styles.navbarPosition}>        {/* className='navbar-position' */}
                    <NavAppBar  />
                </div>
    
            </Context>
            <div className={styles.baseAppText}>
                <h1><strong>FITsol</strong></h1> 
            </div>
        </div>
    );
};

export default App;
