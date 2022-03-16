import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletError, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Connection, PublicKey, clusterApiUrl, Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useCallback, FC, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Program, Provider, web3 } from '@project-serum/anchor';

import idl from '../../utils/idl.json'

// Get our program's id from the IDL file.
const programID = new PublicKey('5eHD6sbs1auxr22YtJjDTnn9WRfvccfBLS5v8AbwpFNM');


import styles from './GetBalance.module.css';
import { Button } from '@mui/material';

const network = clusterApiUrl('devnet');
const opts = {
    preflightCommitment: "processed"
}

export const CreateChallenge: FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        setOpen(false)
    }

    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new Provider(connection, window.solana, opts.preflightCommitment,);

        return provider;
    }

    const createChallenge = () => {
        try{
            const provider = getProvider()
            const program = new Program(idl, programID, provider)
        }catch(error){
                console.log(error)
        }
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Create Challenge</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Challenge Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the challenge details
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Challenge Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Duration (days)"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Max Amount (SOL)"
                        type="number"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} variant='contained' >Create Challenge</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}