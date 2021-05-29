import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess, loginError} from "../../_redux/_actions";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {history} from "../../_helpers/history";
import CustomizedSwitch from "../../components/switch/Switch";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LogIn = () => {
    const classes = useStyles();
    const [customer, setCustomer] = useState({
        email: '',
        customerPassword: ''
    });
    const {email, customerPassword} = customer;
    const customersData = useSelector(state => state.register.customersData);
    const [brand, setBrand] = useState({
        brandName: '',
        brandPassword: ''
    })
    const {brandName, brandPassword} = brand;
    const brandsData = useSelector(state => state.register.brandsData)
    const dispatchUser = useDispatch();
    const errorMessage = useSelector(state => state.login.errorMessage)
    const isChecked = useSelector(state => state.checked.isChecked)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            let person = customersData.find(user => user.email === email);
            if (person && person.customerPassword === customerPassword) {
                dispatchUser(loginSuccess(customer))
                history.push('/')
            } else {
                dispatchUser(loginError('Wrong email or password'))
            }
        } else {
            let person = brandsData.find(user => user.brandName === brandName);
            if (person && person.brandPassword === brandPassword) {
                dispatchUser(loginSuccess(brand))
                history.push('/')
            } else {
                dispatchUser(loginError('Wrong brand name or password'))
            }
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;
        if (!isChecked) {
            setCustomer(user => ({...user, [name]: value}));
        } else {
            setBrand(user => ({...user, [name]: value}));
        }
    }

    return (
        <>
            {
                !isChecked
                    ?
                    <Container component="main" maxWidth="xs">
                        <CustomizedSwitch/>
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in as a customer
                            </Typography>
                            <form
                                onSubmit={handleSubmit}
                                className={classes.form}
                                noValidate
                            >
                                <TextField
                                    onChange={handleChange}
                                    value={email}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={customerPassword}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="customerPassword"
                                    label="Password"
                                    type="password"
                                    id="customerPassword"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
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
                        <CssBaseline/>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in as a brand
                            </Typography>
                            <form
                                onSubmit={handleSubmit}
                                className={classes.form}
                                noValidate
                            >
                                <TextField
                                    onChange={handleChange}
                                    value={brandName}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="brandName"
                                    label="Brand Name"
                                    name="brandName"
                                    autoFocus
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={brandPassword}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="brandPassword"
                                    label="Password"
                                    type="password"
                                    id="brandPassword"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
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

export default LogIn;