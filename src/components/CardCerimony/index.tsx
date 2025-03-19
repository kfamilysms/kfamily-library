import React from 'react'

import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

import CardCerimonyStyles from './styles'
import { IFamilyEvents } from '../../types/family'

export default function CardCerimony({
  cerimony,
}: {
  cerimony: IFamilyEvents
}) {
  return (
    <CardCerimonyStyles>
      <img src={cerimony?.imageCerimony} alt={`${cerimony?.name} Perfil`} />
      <div className="card-cerimony-right-side">
        <div className="card-cerimony-right-side-top">
          <h3>{cerimony?.name}</h3>
          <p>{cerimony?.cemetery?.description}</p>
        </div>
        <div className="card-cerimony-right-side-bottom">
          <div className="card-cerimony-right-side-bottom-left">
            {cerimony?.age}
          </div>
          <div className="card-cerimony-right-side-bottom-button">
            <MdKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
    </CardCerimonyStyles>
  )
}
