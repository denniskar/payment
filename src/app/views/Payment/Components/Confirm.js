import React, { Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {
    const {
        Currency,
        firstName,
        lastName,
        email,
        Amount,
        AmountReceived,
        phone,
        country1,
        phoneNo,
        cardNo,
    } = values

    const handleSubmit = () => {
        // Do whatever with the values
        console.log(values)

        // Show last compinent or success message
        //  handleNext();
    }

    return (
        <Fragment>
            <Grid container spacing={1} noValidate>
                <Grid item xs={4} sm={6}>
                    <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                        confirm Receiver Details
                    </p>

                    <List disablePadding>
                        <ListItem></ListItem>
                        <ListItem>
                            <ListItemText primary="First Name" />
                            <ListItemText secondary={firstName} />
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemText primary="Last Name" />
                            <ListItemText secondary={lastName} />
                        </ListItem>

                        <Divider />

                        <ListItem>
                            <ListItemText primary="Email Address" />
                            <ListItemText secondary={email} />
                        </ListItem>

                        <Divider />

                        <Divider />

                        <ListItem>
                            <ListItemText primary="phone" />
                            <ListItemText secondary={phone} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                        confirm Amount details
                    </p>

                    <List disablePadding>
                        <ListItem></ListItem>
                        <ListItem>
                            <ListItemText primary="Amount" />
                            <ListItemText secondary={Amount} />
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemText primary="Card Number" />
                            <ListItemText secondary={cardNo} />
                        </ListItem>

                        <Divider />

                        <ListItem>
                            <ListItemText primary="Currency Pair" />
                            <ListItemText secondary={Currency} />
                        </ListItem>

                        <Divider />

                        <Divider />

                        <ListItem>
                            <ListItemText primary="Country" />
                            <ListItemText secondary={country1} />
                        </ListItem>
                    </List>
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
                >
                    Back
                </Button>
                <Button
                    style={{ marginLeft: 10 }}
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Confirm & Continue
                </Button>
            </div>
        </Fragment>
    )
}

export default Confirm
