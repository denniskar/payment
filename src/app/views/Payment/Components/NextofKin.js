import React, { Fragment } from 'react'
import {
    Checkbox,
    Grid,
    TextField,
    Icon,
    IconButton,
    Tooltip,
    Card,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'

// Destructuring props

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
        alignItems: 'center',
    },
}))

const NextofKin = ({
    handleBack,
    handleNext,
    handleChange,
    values: {
        Currency,
        firstName,
        lastName,
        email,
        Amount,
        AmountReceived,
        phone,
        cardNo,
        cvc,
        expiry,
        country,
        address1,
    },
}) => {
    const schema = yup.object().shape({
        bankShortName: yup.string().required('Field is required'),

        firstName: yup
            .string()
            .required('Field is required')
            .test(
                'len',
                'Must be more than 5 characters',
                (val) => val.length > 1
            )
            .matches(/^([^0-9]*)$/, 'Field cannot contain numbers'),
    })

    const { handleSubmit, errors, reset, control, setValue } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        //defaultValues: values,
    })

    // Check if all values are not empty or if there are some error
    const classes = useStyles()
    return (
        <Fragment>
            <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                Sender Details
            </p>
            <Grid container noValidate>
                <Grid container spacing={1} item xs={6} sm={6}>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            variant="outlined"
                            margin="normal"
                            value={firstName || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="last Name"
                            name="lastName"
                            variant="outlined"
                            margin="normal"
                            value={lastName || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            variant="outlined"
                            margin="normal"
                            value={country || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="State"
                            name="phone"
                            variant="outlined"
                            margin="normal"
                            value={phone || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="address 1"
                            name="email"
                            variant="outlined"
                            margin="normal"
                            value={email || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Address2 "
                            name="address1"
                            variant="outlined"
                            margin="normal"
                            value={address1 || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={0}
                    >
                        <div className="flex items-center">
                            <div className="ml-0">
                                <small className="text-muted">
                                    Qsend is a Product of Ipsum is simply dummy
                                    text of the printing and typesetting . Qsend
                                    is a Product of Ipsum is simply dummy text
                                    of the printing and typesetting .
                                </small>

                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    Copyright © Lanstar Technologies Limited.
                                    All rights reserved.Skrill Limited.
                                    Registered in Kenya. Company Number: 4260907
                                </h6>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <div
                style={{
                    display: 'flex',
                    marginTop: 50,
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    variant="contained"
                    color="default"
                    onClick={handleBack}
                    style={{ marginRight: 10 }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        </Fragment>
    )
}

export default NextofKin
