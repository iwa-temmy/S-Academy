import { Box } from '@mui/material';
import { useTheme } from '@mui/styles';
import React from 'react';

const AppOptInput = (props) => {
    const { pinArray, name, onChange } = props;

    const theme = useTheme();

    // functions
    const handleFocus = (e) => {
        e.target.select();

        const previousBox = e.target.previousElementSibling;
        const nextBox = e.target.nextElementSibling;

        // this is to avoid a forward box being filled first and a backward box being filled last
        if (previousBox && !previousBox.value) {
            previousBox.focus();
        } else if (nextBox && nextBox.value) {
            nextBox.focus();
        }
    };
    const handleKeyPress = (e, idx) => {
        const element = e.target;
        // if it is a backspace
        if (e.keyCode === 8 && idx && element.value === '') {
            e.preventDefault();
            element.previousElementSibling.focus();
        }
    };
    const handlePinInput = (e, index) => {
        const element = e.target;

        if (isNaN(element.value) || element.value === ' ') return;

        const newPin = (pinArray || [])?.map((digit, i) => {
            if (index === i) {
                return element.value;
            }
            return digit;
        });
        onChange(newPin);
        // if it was backspace that was pressed
        if (element.value === '') {
            // if it has a previous box
            if (element.previousElementSibling) {
                element.previousElementSibling.focus();
            } else {
                // if it doesn't
                return;
            }
        } else if (element.nextElementSibling) {
            // if it wasn't a backspace and there is a next box
            element.nextElementSibling.focus();
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            {pinArray?.map((digit, idx) => {
                return (
                    <Box
                        component="input"
                        sx={{
                            border: `1px solid #E1E2EC`,
                            color: theme.palette.primary.main,
                            borderRadius: 1,
                            textAlign: 'center',
                            appearance: 'textfield',
                            marginRight: 1,
                            width: '65px',
                            height: '84px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'none',
                            '&::placeholder': {
                                color: theme.palette.primary.main,
                            },
                        }}
                        type="text"
                        value={digit}
                        key={idx}
                        name={name}
                        onChange={(e) => handlePinInput(e, idx)}
                        onFocus={handleFocus}
                        onKeyDown={(e) => handleKeyPress(e, idx)}
                        // placeholder="-"
                        autoFocus={idx === 0}
                        maxLength={1}
                    />
                );
            })}
        </Box>
    );
};

export default AppOptInput;
