import React from 'react'

import ImageQuoteMessage from '../../assets/images/quota-message.png'

import { IFamilyEventsMessage } from '../../types/family'

import CardCerimonyMessageStyles from './styles'

export default function CardCerimonyMessage({
  message,
}: {
  message: IFamilyEventsMessage
}) {
  return (
    <CardCerimonyMessageStyles>
      <img src={ImageQuoteMessage} alt="Quota message" />
      <p>{message?.message}</p>
      <div className="bottom-cerimony-profile-box">
        <div className="bottom-cerimony-profile-box-image">
          <img src={message?.profileImage} alt="Quota message here" />
        </div>
        <div className="bottom-cerimony-profile-box-name">
          <h3>{message?.profileName}</h3>
          <span>{message?.profileLocation}</span>
        </div>
      </div>
    </CardCerimonyMessageStyles>
  )
}
