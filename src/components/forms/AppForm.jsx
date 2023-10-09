import React from 'react';

const AppForm = (props) => {
    const { onSubmit, children } = props;
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default AppForm;
