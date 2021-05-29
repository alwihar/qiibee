import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button'
import {redeemPoints} from "../../_redux/_actions";
import './Brand.scss';

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
        <div className='Brand'>
            <div className='Brand__info'>
                Brand name:
                <div className="Brand__data">{brand.brandName}</div>
            </div>
            <div className='Brand__info'>
                Brand Symbol:
                <div className="Brand__data">{brand.brandSymbol}</div>
            </div>
            <div className='Brand__info'>
                Brand Logo:
                <div className="Brand__data"><img width='50px' height='50px' src={brand.brandLogo} alt=""/></div>
            </div>
            <div className='Brand__info'>
                Brand Points:
                <div className="Brand__data">{brand.brandPoints}</div>
            </div>
            {
                (points || points===0) &&
                    <>
                        <div className='Brand__info'>
                            Customer Points:
                            <div className="Brand__data">{points}</div>
                        </div>
                        <Button className='Brand__button' onClick={handlePoints}>Redeem</Button>
                    </>
            }
        </div>
    )
}

export default Brand;