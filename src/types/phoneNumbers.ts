export type IPhoneNumber = {
  _id?: string

  phoneNumber?: IPhoneNumberTwilio

  currentEvent?: string

  info?: {
    archive?: boolean
  }

  currentUsage?: IPhoneNumberHistoryUsage
  historyUsage?: IPhoneNumberHistoryUsage[]

  createdAt?: Date
  updatedAt?: Date
}

export type IPhoneNumberTwilio = {
  sid?: string
  accountSid?: string
  friendlyName?: string
  phoneNumber?: string
}

export type IPhoneNumberHistoryUsage = {
  partnerId?: string
  familyId?: string
  eventid?: string
  createdAt?: string
  updatedAt?: string
}
