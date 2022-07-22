import Index from '@/pages'
import Admin from '@/pages/admin'
import Login from '@/components/layout/pages/login'
import Logout from '@/components/layout/pages/logout'
import { RouterConfig } from '@ms7/router'
import i18n from '@/i18n'
import { Role } from '@ms7/auth'
import { LayoutEmpty } from '@ms7/ui'

const config: RouterConfig = {
    routes: [
        { path: '/', component: Index, title: i18n.t('router.home'), breadcrumb: i18n.t('router.home') },
        { path: '/admin', component: Admin, title: i18n.t('router.admin'), breadcrumb: i18n.t('router.admin'), roles: [Role.ADMIN] },
        { path: '/login', component: Login, title: i18n.t('router.login'), breadcrumb: i18n.t('router.login'), layout: LayoutEmpty },
        { path: '/logout', component: Logout, title: i18n.t('router.logout'), breadcrumb: i18n.t('router.logout'), layout: LayoutEmpty },
    ],
}

export default config