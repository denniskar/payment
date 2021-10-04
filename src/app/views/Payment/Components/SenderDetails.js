import React, { Fragment, useEffect, useState } from 'react'
import {
    Checkbox,
    Grid,
    TextField,
    Icon,
    IconButton,
    Tooltip,
    Card,
    Select,
    MenuItem,
    Autocomplete,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrency, getCountries } from '../../../redux/actions/QsendActions'
import axios from 'axios'
import { SearchableSelect } from 'react-searchable-select-mui'
// Destructuring props

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
        alignItems: 'center',
    },
}))

const SenderDetails = ({
    handleNext,
    handleChange,

    values: {
        Currency,
        firstName,
        lastName,
        Amount,
        AmountReceived,
        email,
        phone,
        payWith,
    },
    formErrors,
}) => {
    const [country, setCountry] = useState([])

    const dispatch = useDispatch()

    const countris = useSelector((state) => state.qsend)
    console.log(countris)
    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const classes = useStyles()

    const handle = (valuess) => {
        console.log(valuess)
    }

    const isValid =
        firstName.length > 0 &&
        !formErrors.firstName &&
        lastName.length > 0 &&
        !formErrors.lastName &&
        email.length > 0 &&
        !formErrors.email &&
        payWith.length > 0

    return (
        <Fragment>
            <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                Amount You Wish To Transer
            </p>

            <Grid container spacing={1} noValidate>
                <Grid item xs={4} sm={4}>
                    <Grid item xs={6} sm={12}>
                        <Select
                            fullWidth
                            label="Enter Amount"
                            //name="Amount"
                            variant="outlined"
                            margin="normal"
                            value={Amount || ''}
                            // error={!!formErrors.Amount}
                            // helperText={formErrors.Amount}
                            onChange={handleChange}
                            required
                        >
                            {countris.map((Currency, index) => (
                                <MenuItem key={index} value={index}>
                                    {Currency.pair}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={4} sm={12}>
                        <TextField
                            fullWidth
                            label="Enter Amount"
                            name="Amount"
                            variant="outlined"
                            margin="normal"
                            value={Amount || ''}
                            error={!!formErrors.Amount}
                            helperText={formErrors.Amount}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={4} sm={12}>
                        <TextField
                            fullWidth
                            label="Amount to receive in "
                            name="AmountReceived"
                            variant="outlined"
                            margin="normal"
                            value={AmountReceived || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={4} sm={12}>
                        <TextField
                            fullWidth
                            label="Pay with "
                            name="lastName"
                            variant="outlined"
                            margin="normal"
                            value={payWith || ''}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={8}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={2}
                    >
                        <div className="flex items-center">
                            <Icon className={classes.icon}></Icon>
                            <div className="ml-3">
                                <small className="text-muted">
                                    Qsend is a Product of Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since
                                    the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a
                                    type specimen book. industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </small>
                                <Grid>
                                    <Icon className={classes.icon}>
                                        monetization_on
                                    </Icon>
                                </Grid>
                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    Copyright © Lanstar Technologies Limited.
                                    All rights reserved.Skrill Limited.
                                    Registered in Kenya. Company Number: 4260907
                                    Headquarters: 1st Floor, Emac
                                    Square,WestLands, Nairobi, Kenya Lanstar is
                                    authorised by the SenderDetails Conduct
                                    Authority under the Electronic Money
                                    Regulations 2011 for the issuing of
                                    electronic money and payment instruments.
                                    Skrill is a registered trademark of Skrill
                                    Limited.
                                </h6>
                            </div>
                        </div>
                        <Tooltip
                            title="Read More about Lanstar"
                            placement="bottom"
                        >
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
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
                    // disabled={!isValid}
                    // color="primary"
                    // onClick={isValid ? handleNext : null}
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        </Fragment>
    )
}
export default SenderDetails

// const mapStateToProps = (state) => ({
//     countries: state,
// })

// const mapActionToProps = {
//     fetch: actions.getAllLabels,
// }

// export default connect(
//     mapStateToProps,
//     mapActionToProps
// )(withStyles(useStyles)(SenderDetails))
