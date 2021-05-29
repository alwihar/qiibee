import React from 'react';
import CustomizedTables from "../../components/table/Table";
import {useSelector} from "react-redux";
import Wrap from "../../components/wrap/Wrap";

const Home = () => {
    const user = useSelector(state => state.checked.user);
    const customers = useSelector(state => state.register.customersData);
    const brands = useSelector(state => state.register.brandsData);

    const customerCells = ['First Name', 'Last Name', 'Loyalty Points', 'Actions'];
    const brandCells = ['Brand Name', 'Brand Symbol', 'Brand points', 'Brand Logo', 'Actions']

    return (
        <>
            {
                user === 'brand'
                ?
                    <CustomizedTables
                        header={customerCells}
                        userData={customers}
                    />
                    :
                    <CustomizedTables
                        header={brandCells}
                        userData={brands}
                    />
            }
        </>
    )
}

export default Home;