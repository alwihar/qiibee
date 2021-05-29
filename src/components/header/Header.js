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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    bar: {
        minHeight: '56px'
    },
    link: {
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none'
    }
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
            <AppBar position="static" className={classes.header}>
                {
                    !loggedIn
                    ?
                    <Toolbar className={classes.bar}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/register" className={classes.link}>Register</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/login" className={classes.link}>Login</Link>
                        </Typography>
                    </Toolbar>
                    :
                    <Toolbar className={classes.bar}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" className={classes.link}>Home</Link>
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                }
            </AppBar>
        </div>
    );
}