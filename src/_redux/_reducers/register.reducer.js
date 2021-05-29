import {CUSTOMER_DATA} from "../../_constants/CUSTOMER_DATA";
import {BRAND_DATA} from "../../_constants/BRAND_DATA";

const initialState = {
    customersData: CUSTOMER_DATA,
    brandsData: BRAND_DATA,
};

export default function register(state = initialState, action) {
    let shallowBrandIndex;
    let shallowBrand;
    let shallowCustomerIndex;
    let shallowCustomer;
    let shallowBrands = [...state.brandsData]
    let shallowCustomers = [...state.customersData]
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customersData: [...state.customersData, action.payload]
            };
        case 'ADD_BRAND':
            return {
                ...state,
                brandsData: [...state.brandsData, action.payload]
            };
        case 'FOLLOW_BRAND':
            for(let i = 0; i<state.brandsData.length; i++) {
                if(state.brandsData[i].id === action.brand.id) {
                    shallowBrand = {
                        ...state.brandsData[i],
                        followingCustomers: [
                            ...state.brandsData[i].followingCustomers
                        ]
                    }
                    shallowBrandIndex = i;
                }
            }
            if(shallowBrand?.followingCustomers.find(email => email === action.user.email)) {
                shallowBrand.followingCustomers.splice(shallowBrand.followingCustomers.findIndex(email => email === action.user.email), 1)
            } else {
                shallowBrand.followingCustomers.push(action.user.email)
            }
            shallowBrands[shallowBrandIndex] = shallowBrand;

            for(let i = 0; i<state.customersData.length; i++) {
                if(state.customersData[i].email === action.user.email) {
                    shallowCustomer = {
                        ...state.customersData[i],
                        followedBrands: [
                            ...state.customersData[i].followedBrands
                        ]
                    }
                    shallowCustomerIndex = i;
                }
            }
            if(shallowCustomer?.followedBrands.find(name => name === action.brand.brandName)) {
                shallowCustomer.followedBrands.splice(shallowCustomer.followedBrands.findIndex(name => name === action.brand.brandName), 1)
            } else {
                shallowCustomer.followedBrands.push(action.brand.brandName)
                shallowCustomer.customerPoints[action.brand.brandName] = 0
            }
            shallowCustomers[shallowCustomerIndex] = shallowCustomer;

            console.log(shallowBrands)
            console.log(shallowCustomers)

            return {
                ...state,
                brandsData: shallowBrands,
                customersData: shallowCustomers
            };

        case 'ADD_POINTS':
            for(let i = 0; i<state.brandsData.length; i++) {
                if(state.brandsData[i].brandName === action.user.brandName) {
                    shallowBrand = {
                        ...state.brandsData[i],
                    }
                    shallowBrandIndex = i;
                }
            }

            for(let i = 0; i<state.customersData.length; i++) {
                if(state.customersData[i].id === action.customer.id) {
                    shallowCustomer = {
                        ...state.customersData[i],
                        followedBrands: [
                            ...state.customersData[i].followedBrands
                        ]
                    }
                    shallowCustomerIndex = i;
                }
            }

            if(shallowBrand.brandPoints > 0) {
                shallowBrand.brandPoints--;
                shallowCustomer.customerPoints[action.user.brandName]++;
            }
            shallowBrands[shallowBrandIndex] = shallowBrand;
            shallowCustomers[shallowCustomerIndex] = shallowCustomer;

            return {
                ...state,
                customersData: shallowCustomers,
                brandsData: shallowBrands
            };

        case 'REDEEM_POINTS':
            for(let i = 0; i<state.customersData.length; i++) {
                if(state.customersData[i].email === action.user.email) {
                    shallowCustomer = {
                        ...state.customersData[i],
                        followedBrands: [
                            ...state.customersData[i].followedBrands
                        ]
                    }
                    shallowCustomerIndex = i;
                }
            }
            shallowCustomer.customerPoints[action.brand.brandName] = 0;
            shallowCustomers[shallowCustomerIndex] = shallowCustomer;

            return {
                ...state,
                customersData: shallowCustomers
            };
        default:
            return state
    }
}