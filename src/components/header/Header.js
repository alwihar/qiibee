import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../_redux/_actions";
import {history} from "../../_helpers/history";
import './Header.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Header() {
    const classes = useStyles();
    const loggedIn = useSelector(state => state.login.loggedIn);
    const dispatchLogout = useDispatch();

    const handleLogout = () => {
        dispatchLogout(logOut());
        history.push('/login');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className='Header'>
                {
                    !loggedIn
                    ?
                    <Toolbar className='Header__bar'>
                        <Typography variant="h6" className='Header__title'>
                            <Link to="/register" className='Header__link'>Register</Link>
                        </Typography>
                        <Typography variant="h6" className='Header__title'>
                            <Link to="/login" className='Header__link'>Login</Link>
                        </Typography>
                    </Toolbar>
                    :
                    <Toolbar className='Header__bar'>
                        <Typography variant="h6" className='Header__title'>
                            <Link to="/" className='Header__link'>Home</Link>
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                }
            </AppBar>
        </div>
    );
}