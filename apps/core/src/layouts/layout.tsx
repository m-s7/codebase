import React from 'react'
import styles from '@/layouts/layout.module.css'
import Sidebar from '@/components/layout/sidebar'
import Navbar from '@/components/layout/navbar'
import Header from '@/components/layout/header'

interface LayoutProps {
    children?: React.ReactNode | React.ReactNode[],
}

const Layout = (props: LayoutProps) => {
    const { children } = props

    return (
        <div className={styles.column}>
            <div className={styles.left}>
                <Sidebar />
            </div>
            <div className={`${styles.right} ${styles.box}`}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <Header />
                <div className={styles.content}>
                    <div className={styles.container}>
                        {children && <div className="h-100">{children}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout