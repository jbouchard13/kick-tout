import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

cont UserForm = props => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        Elements,
        passwordErrors,
    } = props;

    function handleSubit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <React.Fragment>
            <ErrorsDisplay errors={errors} passwordErrors={passwordErrors} />
            <Form onSubmit={handleSubmit}>
                {Elements()}
                <Button className="mr-1" varient="primary" type="submit">
                </Button>
                <Button className="mr-1" varient="secondary" onClick={handleCancel}>Cancel
                </Button>
            </Form>
        </React.Fragment>
    );
};

function ErrorsDisplay({ errors, passwordErrors }) {
    let errorsDisplay = null;

    if (errors.length) {
        errorsDisplay = (
            <React.Fragment>
                <ValidationLabel>Errors:</ValidationLabel>
                <ValidationUl>
                    {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ValidationUl>
            </React.Fragment>
        );
    } else if (!passwordErrors) {
        errorsDisplay = (
            <React.Fragment>
                <ValidationLabel>Errors:</ValidationLabel>
                <ValidationUl>{<li>Passwords must match</li>}</ValidationUl>
            </React.Fragment>
        );
    }
    return errorsDisplay;
}

const ValidationUl = styled.div`
color: red;
padding: 15px 0 40px 10px;
`;
const ValidationLabel = styled.h2`
color: #0069c0;
font-size: 28px;
`;