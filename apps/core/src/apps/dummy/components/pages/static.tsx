import React from 'react'
import Layout from '@/layouts/layout'
import BaseLink from '@/components/router/nav/base-link'
import Card from '@/components/ui/card/card'

const Static = () => (
    <Layout>
        <Card fillViewport={true}>
            <h2>{'Static!'}</h2>
            <h5>{'Dashboard:'}</h5>
            <BaseLink
                to='/'
                text='Dashboard' />
            <h5>{'Dummy App:'}</h5>
            <BaseLink
                to='/dummy/about'
                text='Dummy About' />
            <BaseLink
                to='/dummy/counter'
                text='Dummy Counter' />
        </Card>
    </Layout>
)

export default Static