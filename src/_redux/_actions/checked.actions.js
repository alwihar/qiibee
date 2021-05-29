export const SWITCH_CHECKED = 'SWITCH_CHECKED';
export const SWITCH_USER = 'SWITCH_USER';

export const switchChecked = (user) => {
    return {
        type: SWITCH_CHECKED,
    };
}

export const switchUser = (user) => {
    return {
        type: SWITCH_USER,
        payload: user
    };
}

