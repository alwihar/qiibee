import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button'
import {redeemPoints} from "../../_redux/_actions";

const Brand = (props) => {
    let brand = props.location.aboutProps.user;
    const user = useSelector(state => state.login.mainUser);
    const customersData = useSelector(state => state.register.customersData);
    const dispatchPoints = useDispatch();

    let points = customersData.find(customer => customer.email === user.email).customerPoints[brand.brandName];

    const handlePoints = () => {
        dispatchPoints(redeemPoints(user, brand))
    }

    return (
        <>
            <div>Brand name: {brand.brandName}</div>
            <div>Brand Symbol: {brand.brandSymbol}</div>
            Brand Logo: <img width='50px' height='50px' src={brand.brandLogo} alt=""/>
            <div>Brand Points: {brand.brandPoints}</div>
            {
                (points || points===0) &&
                    <>
                        <div>Customer Points: {points}</div>
                        <Button onClick={handlePoints}>Redeem</Button>
                    </>
            }
        </>
    )
}

export default Brand;