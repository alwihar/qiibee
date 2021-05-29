import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {addPoints, followBrand} from "../../_redux/_actions";
import {Link} from "react-router-dom";
import './Table.scss'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3f51b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables({header, userData}) {
    const classes = useStyles();
    const customersData = useSelector(state => state.register.customersData);
    const mainUser = useSelector(state => state.checked.user);
    const userCred = useSelector(state => state.login.mainUser);
    const dispatchFollow = useDispatch();
    const dispatchPoints = useDispatch();

    const handleFollow = (brand) => {
        dispatchFollow(followBrand(userCred, brand));
    }

    const handlePoints = (user) => {
        dispatchPoints(addPoints(userCred, user));
    }

    return (
        <div className='Table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                header.map(cell => (
                                    <StyledTableCell>{cell}</StyledTableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            userData.map(user => (
                                <>
                                    {
                                        mainUser === 'brand'
                                            ?   user.followedBrands.includes(userCred.brandName) &&
                                            <StyledTableRow key={user.id}>
                                                <StyledTableCell component="th" scope="row">{user.firstName}</StyledTableCell>
                                                <StyledTableCell>{user.lastName}</StyledTableCell>
                                                <StyledTableCell>{user.customerPoints[userCred.brandName]}</StyledTableCell>
                                                <StyledTableCell><Button onClick={() => handlePoints(user)}>+</Button></StyledTableCell>
                                            </StyledTableRow>
                                            :
                                            <StyledTableRow key={user.id}>
                                                <StyledTableCell component="th" scope="row">
                                                    <Link to={{
                                                        pathname: '/' + user.id,
                                                        aboutProps: {
                                                            user: user
                                                        }
                                                    }}>
                                                        {user.brandName}
                                                    </Link>
                                                </StyledTableCell>
                                                <StyledTableCell>{user.brandSymbol}</StyledTableCell>
                                                <StyledTableCell>{user.brandPoints}</StyledTableCell>
                                                <StyledTableCell><img width='50px' height='50px' src={user.brandLogo}/></StyledTableCell>
                                                <StyledTableCell><Button onClick={() => handleFollow(user)}>{customersData.find(user => user.email === userCred.email).followedBrands.includes(user.brandName) ? <>Unfollow</> : <>Follow</>}</Button></StyledTableCell>
                                            </StyledTableRow>
                                    }
                                </>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}