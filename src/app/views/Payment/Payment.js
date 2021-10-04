import React from 'react'
import { useTheme } from '@material-ui/styles'
import { Breadcrumb, SimpleCard, MatxProgressBar } from 'app/components'
import MainForm from './Components/MainForm'
import DoughnutChart from '../dashboard/shared/Doughnut'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import StatCards2 from '../dashboard/shared/StatCards2'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const Payment = () => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className="analytics m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: 'Payment' }]} />
            </div>
            <Grid container spacing={1} noValidate>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Card elevation={2} className="pt-5 mb-2">
                        <MainForm />
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card elevation={2} className="pt-5 mb-2 mb-2">
                        <p className="border-radius-6 bg-primary text-white px-4 py-8px">
                            Payments Across the Globe
                        </p>
                        <DoughnutChart
                            height="400px"
                            color={[
                                theme.palette.primary.dark,
                                theme.palette.primary.main,
                                theme.palette.primary.light,
                                theme.palette.secondary.light,
                                theme.palette.secondary.dark,
                                theme.palette.secondary.main,
                            ]}
                        />
                        <h6 className="m-0 mt-1 text-primary font-medium">
                            QSEND Transers over ......your cash is expected to
                            reach 'KENYA' within two days. you can reverse the
                            cash within 1 day since the payment at a free cost
                        </h6>
                    </Card>
                    <StatCards2 />
                </Grid>
            </Grid>
        </div>
    )
}

export default Payment
