import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {addBrand, addCustomer, loginError} from "../../_redux/_actions";
import CustomizedSwitch from "../../components/switch/Switch";
import {history} from "../../_helpers/history";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const classes = useStyles();

    const [customer, setCustomer] = useState({
        id: "id" + Math.random().toString(16).slice(2),
        firstName: '',
        lastName: '',
        email: '',
        customerPassword: '',
        customerPoints: {},
        followedBrands: []
    });
    const {firstName, lastName, email, customerPassword} = customer;
    const customerData = useSelector(state => state.register.customersData);
    const [brand, setBrand] = useState({
        id: "id" + Math.random().toString(16).slice(2),
        brandName: '',
        brandSymbol: '',
        brandLogo: '',
        brandPoints: '',
        brandPassword: '',
        followingCustomers: [],
    })
    const {brandName, brandSymbol, brandLogo, brandPassword, brandPoints} = brand;
    const brandData = useSelector(state => state.register.brandsData);
    const dispatchUser = useDispatch();
    const errorMessage = useSelector(state => state.login.errorMessage)
    const isChecked = useSelector(state => state.checked.isChecked)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isChecked) {
            let person = customerData.find(user => user.email === email);
            if(!person && firstName && lastName && email && customerPassword) {
                dispatchUser(addCustomer(customer));
                history.push('/login')
            } else if(!firstName || !lastName || !email || !customerPassword) {
                dispatchUser(loginError('Please fill in all the fields.'));
            } else {
                dispatchUser(loginError('Customer already exists'))
            }
        } else {
            let person = brandData.find(user => user.brandName === brandName);
            if(!person && brandName && brandSymbol && brandLogo && brandPassword && brandPoints) {
                dispatchUser(addBrand(brand));
                history.push('/login')
            } else if(!brandName || !brandSymbol || !brandLogo || !brandPassword || !brandPoints) {
                dispatchUser(loginError('Please fill in all the fields.'))
            } else {
                dispatchUser(loginError('Brand already exists'))
            }
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        if(!isChecked) {
            setCustomer(user => ({ ...user, [name]: value }));
        } else {
            setBrand(user => ({ ...user, [name]: value }));
        }
    }

    return (
        <>
            {
                !isChecked
                ?
                    <Container component="main" maxWidth="xs">
                        <CustomizedSwitch/>
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register as a customer
                            </Typography>
                            <form
                                onSubmit={handleSubmit}
                                className={classes.form}
                                noValidate
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            value={firstName}
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            value={lastName}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            value={email}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            value={customerPassword}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="customerPassword"
                                            label="Password"
                                            type="password"
                                            id="customerPassword"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Register
                                </Button>
                                <div>
                                    {errorMessage}
                                </div>
                            </form>
                        </div>
                    </Container>
                :
                    <Container component="main" maxWidth="xs">
                        <CustomizedSwitch/>
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register as a brand
                            </Typography>
                            <form
                                onSubmit={handleSubmit}
                                className={classes.form}
                                noValidate
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            value={brandName}
                                            name="brandName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="brandName"
                                            label="Brand Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            value={brandSymbol}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="brandSymbol"
                                            label="Brand Symbol"
                                            name="brandSymbol"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            value={brandLogo}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="brandLogo"
                                            label="Brand Logo"
                                            name="brandLogo"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            value={brandPassword}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="brandPassword"
                                            label="Password"
                                            type="password"
                                            id="brandPassword"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            value={brandPoints}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            type='number'
                                            id="brandPoints"
                                            label="Loyalty points"
                                            name="brandPoints"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Register
                                </Button>
                                <div>
                                    {errorMessage}
                                </div>
                            </form>
                        </div>
                    </Container>
            }
        </>
    );
}