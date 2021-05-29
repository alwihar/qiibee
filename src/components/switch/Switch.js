import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {switchChecked, switchUser} from "../../_redux/_actions";

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
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Customer</Grid>
            <Grid item>
                <AntSwitch checked={checked} onChange={handleChange} name="checked" />
            </Grid>
            <Grid item>Brand</Grid>
        </Grid>
    );
}