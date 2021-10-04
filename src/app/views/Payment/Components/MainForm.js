import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import SenderDetails from './SenderDetails'
import NextofKin from './NextofKin'
import SponsoredChild from './SponsoredChild'
import Confirm from './Confirm'

import Success from './Success'
import formValidation from '../Helper/formValidation'
import SendCardDetails from './SendCardDetails'
import { Receipt } from '@material-ui/icons'
import RecepientDetails from './RecepientDetails'

// Step titles
const labels = [
    'Amount',
    'Sender info',
    'card Details',
    'Recipient',
    'Recipient Details',
    'Summary',
    'Payment',
]

const initialValues = {
    Currency: '',
    firstName: '',
    lastName: '',
    email: '',
    Amount: '',
    AmountReceived: '',
    email: '',
    phone: '',
    cardNo: '',
    cvc: '',
    expiry: '',
    country: '',
    address1: '',
    payWith: '',
    lName: '',
    bank: '',
    card: '',
    country1: '',
    phoneNo: '',
}

const fieldsValidation = {
    Amount: {
        error: '',
        validate: 'text',
        minLength: 2,
        maxLength: 20,
    },
    lastName: {
        error: '',
        validate: 'text',
        minLength: 2,
        maxLength: 20,
    },
    email: {
        error: '',
        validate: 'email',
    },
    gender: {},
    date: {},
    city: {
        error: '',
        validate: 'text',
        minLength: 3,
        maxLength: 20,
    },
    phone: {
        error: '',
        validate: 'phone',
        maxLength: 15,
    },
}

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})

    // Proceed to next step
    const handleNext = () => setActiveStep((prev) => prev + 1)
    // Go back to prev step
    const handleBack = () => setActiveStep((prev) => prev - 1)

    // Handle form change
    const handleChange = (e) => {
        const { name, value } = e.target

        // Set values
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))

        // set errors
        const error = formValidation(name, value, fieldsValidation) || ''

        setFormErrors({
            [name]: error,
        })
    }

    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return (
                    <SenderDetails
                        handleNext={handleNext}
                        handleChange={handleChange}
                        values={formValues}
                        formErrors={formErrors}
                    />
                )
            case 1:
                return (
                    <NextofKin
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleChange={handleChange}
                        values={formValues}
                    />
                )
            case 2:
                return (
                    <SendCardDetails
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleChange={handleChange}
                        values={formValues}
                    />
                )
            case 3:
                return (
                    <SponsoredChild
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleChange={handleChange}
                        values={formValues}
                    />
                )

            case 4:
                return (
                    <RecepientDetails
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleChange={handleChange}
                        values={formValues}
                    />
                )
            case 5:
                return (
                    <Confirm
                        handleNext={handleNext}
                        handleBack={handleBack}
                        values={formValues}
                    />
                )
            default:
                break
        }
    }

    return (
        <div className="analytics m-sm-30">
            {activeStep === labels.length ? (
                // Last Component
                <Success values={formValues} />
            ) : (
                <>
                    <Stepper
                        activeStep={activeStep}
                        style={{ margin: '30px 0 15px' }}
                        alternativeLabel
                    >
                        {labels.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {handleSteps(activeStep)}
                </>
            )}
        </div>
    )
}

export default StepForm
