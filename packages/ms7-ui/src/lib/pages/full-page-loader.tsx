import React from 'react'
import { Link } from '../components/link'
import { Spinner } from '../components/spinner'
import { LayoutEmpty } from '../layouts/layout-empty'
import { CardCentered } from '../components/card-centered'
import { useTranslation } from 'react-i18next'
import { env } from '@ms7/common'
import { capitalize } from 'lodash'

interface FullPageLoaderProps {
    header?: string,
    navigateName?: string,
    navigatePath?: string,
    useDefaults?: never,
}

interface FullPageLoaderDefaultProps {
    header?: never,
    navigateName?: never,
    navigatePath?: never,
    useDefaults?: boolean,
}

export const FullPageLoader = (props: FullPageLoaderProps | FullPageLoaderDefaultProps) => {
    const { t } = useTranslation()
    const { useDefaults } = props

    const header = (useDefaults ? env.REACT_APP_NAME : props.header)
    const navigatePath = (useDefaults ? '/' : props.navigatePath)
    const navigateName = (useDefaults ? capitalize(t(env.REACT_APP_HOMEPAGE_NAME)) : props.navigateName)

    return (
        <LayoutEmpty>
            <CardCentered header={header}>
                <Spinner
                    size={150}
                    className="mb-2" />
                <span>{t('common.please-wait')}</span>
                {(navigateName && navigatePath) &&
                    <Link to={navigatePath}>
                        {navigateName}
                    </Link>
                }
            </CardCentered>
        </LayoutEmpty>
    )
}

// import React from 'react'
// import { Link } from '../components/link'
// import { Spinner } from '../components/spinner'
// import { LayoutEmpty } from '../layouts/layout-empty'
// import { CardCentered } from '../components/card-centered'
//
// interface FullPageLoaderProps {
//     header?: string,
//     navigateName?: string,
//     navigatePath?: string,
//     useDefaults?: never,
// }
//
// interface FullPageLoaderDefaultProps {
//     header?: never,
//     navigateName?: never,
//     navigatePath?: never,
//     useDefaults?: boolean,
// }
//
// export const FullPageLoader = (props: FullPageLoaderProps) => {
//     const { header, navigateName, navigatePath } = props
//
//     return (
//         <LayoutEmpty>
//             <CardCentered header={header}>
//                 <Spinner
//                     size={150}
//                     className="mb-2" />
//                 <span>{'Please wait...'}</span>
//                 {(navigateName && navigatePath) &&
//                     <Link to={navigatePath}>
//                         {navigateName}
//                     </Link>
//                 }
//             </CardCentered>
//         </LayoutEmpty>
//     )
// }
