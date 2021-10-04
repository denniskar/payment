import React from 'react'
import { authRoles } from '../../auth/authRoles'

const PaymentRoutes = [
    {
        path: '/payments',
        component: React.lazy(() => import('./Payment')),
        auth: authRoles.sa,
    },
]

export default PaymentRoutes
