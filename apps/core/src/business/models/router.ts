import { ElementType } from 'react'
import { Role } from '@/constants/role'
import { PageTitleComponentType } from '@/lib/page-title'
import { BreadcrumbComponentType } from '@/lib/breadcrumbs'

export interface RouterConfig {
    readonly entrypoint?: RouteEntrypointConfig,
    readonly routes: RouteConfig[],
}

export interface RouteConfig {
    path?: string,
    readonly index?: boolean,
    readonly roles?: Role[],
    readonly component: ElementType,
    readonly title?: PageTitleComponentType | string,
    readonly breadcrumb?: BreadcrumbComponentType | string,
    readonly children?: RouteConfig[],
}

export interface RouteEntrypointConfig {
    readonly baseUrl: string,
    readonly component: ElementType,
}