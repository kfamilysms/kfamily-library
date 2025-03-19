import { IPlan } from './plan'

export type IPartner = {
  id?: string

  name?: string
  fiscalIdentifier?: string
  fullAddress?: string

  personalPhoneNumber?: string
  personalEmail?: string
  personalName?: string
  logoImage?: string

  hasEmailConfirmed?: boolean

  accessAccount?: IPartnerAccessAccount

  plan?: IPlan

  createdAt?: string
  updatedAt?: string
}

export type IPartnerAccessAccount = {
  email?: string
  password?: string

  lastPassword?: string
  lastPasswrodUpdatedAt?: string
  accountConfirmation?: string
}
