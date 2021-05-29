export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ADD_BRAND = 'ADD_BRAND';
export const FOLLOW_BRAND = 'FOLLOW_BRAND';
export const ADD_POINTS = 'ADD_POINTS';
export const REDEEM_POINTS = 'REDEEM_POINTS';

export const addCustomer = (user) => {
    return {
        type: ADD_CUSTOMER,
        payload: user
    };
}

export const addBrand = (user) => {
    return {
        type: ADD_BRAND,
        payload: user
    };
}

export const followBrand = (userCred, brand) => {
    return {
        type: FOLLOW_BRAND,
        user: userCred,
        brand: brand
    };
}

export const addPoints = (brandCred, customer) => {
    return {
        type: ADD_POINTS,
        user: brandCred,
        customer: customer
    };
}

export const redeemPoints = (userCred, brand) => {
    return {
        type: REDEEM_POINTS,
        user: userCred,
        brand: brand
    };
}
