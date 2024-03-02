import React from 'react';

const Validation = () => {
    return (
        <>
            <h1>Form Validation :</h1>
            <div>
                <input type='text' placeholder='first name'></input> <br /><br />
                <input type='text' placeholder='last name'></input> <br /><br />
                <input type='text' placeholder='phone number'></input> <br /><br />
                <input type='email' placeholder='enter e-mail'></input> <br /><br />
                <input type='text' placeholder='enter city'></input> <br /><br />
                <input type="submit" value="Submit" /> &nbsp;
                <input type="reset" />
            </div>
        </>
    )
};

export default Validation;