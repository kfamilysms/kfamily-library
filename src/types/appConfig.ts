import { ReactNode } from 'react'

/* eslint-disable no-shadow */
export type IAppConfig = {
  id?: string

  appTitle?: string
  appFavicon?: string

  appLogo?: string
  appRoutes?: IAppConfigRoutes[]
}

export type IAppConfigRoutes = {
  id?: string
  routeName?: string
  routeIcon?: ReactNode
  routePath?: string
  onClick?: () => void
  isActive?: boolean
}

export type IApiResponseModel<T> = {
  error?: boolean
  return?: T
}
