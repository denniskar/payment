import React, { Fragment } from 'react'
import { Checkbox, Grid, TextField, Card } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// Destructuring props
const RecepientDetails = ({
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
        lName,
        bank,
        card,
        country1,
        phoneNo,
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

    return (
        <Fragment>
            <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                Recipient Details
            </p>
            <Grid container spacing={1} noValidate>
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
                            label="Second Name"
                            name="lName"
                            variant="outlined"
                            margin="normal"
                            value={lName || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Bank"
                            name="bank"
                            variant="outlined"
                            margin="normal"
                            value={bank || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Card No"
                            name="card"
                            variant="outlined"
                            margin="normal"
                            value={card || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country1"
                            variant="outlined"
                            margin="normal"
                            value={country1 || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={3} sm={6}>
                        <TextField
                            fullWidth
                            label="Phone No"
                            name="phoneNo"
                            variant="outlined"
                            margin="normal"
                            value={phoneNo || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={2}
                    >
                        <div>
                            <div className="ml-3">
                                <small className="text-muted">
                                    Your Card Security is Qsend is a Product of
                                    Ipsum is simply dummy text of the printing
                                    and typesetting . ackages and web page
                                    editors now use Lorem Ipsum as their default
                                    model text, and a search for 'lorem ipsum'
                                    will uncover many web sites still in their
                                    infancy. Various versions have evolved over
                                    the years, sometimes by
                                </small>

                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    ackages and web page editors now use Lorem
                                    Ipsum as their default model text, and a
                                    search for 'lorem ipsum' will uncover many
                                    web sites still in their infancy. Various
                                    versions have evolved over the years,
                                    sometimes by
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

export default RecepientDetails
