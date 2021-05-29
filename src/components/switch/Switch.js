import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {switchChecked, switchUser} from "../../_redux/_actions";
import './Switch.scss'

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

export default function CustomizedSwitch() {
    const checked = useSelector(state => state.checked.isChecked)
    const dispatchSwitch = useDispatch();

    useEffect(() => {
        if(!checked) {
            dispatchSwitch(switchUser('customer'));
        } else {
            dispatchSwitch(switchUser('brand'));
        }
    })

    const handleChange = () => {
        dispatchSwitch(switchChecked());
    };

    return (
        <div className='Switch'>
            <Grid className='Switch__item' item>Customer</Grid>
            <Grid className='Switch__item' item>
                <AntSwitch checked={checked} onChange={handleChange} name="checked" />
            </Grid>
            <Grid className='Switch__item' item>Brand</Grid>
        </div>
    );
}