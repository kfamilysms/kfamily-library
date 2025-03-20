/* eslint-disable no-shadow */

import { IPhoneNumber } from './phoneNumbers'

export enum IFamilyEventsReceiptEnum {
  SMS,
  MULTIBANCO,
  MBWAY,
}

export type IFamily = {
  id?: string

  name?: string
  fullAddress?: string

  accessAccount?: IFamilyHeader

  partnerId?: string

  createdAt?: string
  updatedAt?: string
}

export type IFamilyHeader = {
  fullName?: string
  emailAddress?: string
  phoneNumber?: string

  isEmailVerified?: boolean
  verifyEmailCode?: string
}

export type IFamilyEvents = {
  id?: string

  name?: string
  receipt?: IFamilyEventsReceipt

  isActive?: boolean
  startAt?: string
  endAt?: string

  hasPrinted?: boolean

  age?: string
  momentOnChurch?: string
  dateOnChurch?: string
  locationOfChurch?: IFamilyEventsPlaces
  cemetery?: IFamilyEventsPlaces
  imageCerimony?: string

  phoneNumberId?: string
  partnerId?: string
  familyId?: string

  messages?: IFamilyEventsMessage[]

  createdAt?: string
  updatedAt?: string
}

export type IFamilyEventsPlaces = {
  placeId?: string
  description?: string
}

export type IFamilyEventsReceipt = {
  type?: IFamilyEventsReceiptEnum
  smsNumber?: IPhoneNumber
  mbEntityId?: string
  mbNumber?: string
}

export type IFamilyEventsMessage = {
  id?: string
  name?: string
  message?: string
  profileImage?: string
  profileName?: string
  profileLocation?: string
  device?: string
}
