import React, { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react'

import Imagefuneral from '../../assets/images/funeral.png'
import ImagePallbearer from '../../assets/images/pallbearer.png'
import ImageFence from '../../assets/images/fence.png'
import ImageCorner from '../../assets/images/corcer-cerimony.png'

import CardCerimonyFullStyles from './styles'

export default function CardCerimonyFull() {
  function CardCerimonyDetail({
    image,
    title,
    description,
  }: {
    title: string
    image: ReactNode
    description: string
  }) {
    return (
      <div className="card-cerimony-detail">
        <div className="card-cerimony-detail-image">
          {/* @ts-ignore */}
          <img src={image} alt={`${title} Prof`} />
        </div>
        <div className="card-cerimony-detail-texts">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <CardCerimonyFullStyles>
      <div className="container-float">
        <h1>Cerimônia Fúnebre</h1>
      </div>
      <div className="container-image">&nbsp;</div>
      <div className="container-body">
        <div className="container-body-age">1980 - 2008 (93 anos)</div>
        <div className="container-body-age-cross">✝</div>
        <div className="container-body-age-border" />
        <div className="container-body-name">
          Maria Alice Barbas dos Santos Costa
        </div>
        <div className="container-body-table">
          <table>
            <tr>
              <td>
                <CardCerimonyDetail
                  title="Verlório"
                  image={Imagefuneral}
                  description="Igreja de Jerónimos, Lisboa sábado dia 15 de março a partir das 10h30"
                />
              </td>
              <td>
                <CardCerimonyDetail
                  title="Funeral"
                  image={ImagePallbearer}
                  description="Sábado dia 15 de março às 14h30"
                />
              </td>
              <td>
                <CardCerimonyDetail
                  title="Cermitério"
                  image={ImageFence}
                  description="Cemitério da Braga, Braga"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="container-body-title">Quem era</div>
        <div className="container-body-description">
          Natural de <b>Braga</b>, tinha residência em <b>Barcelos</b>, faleceu
          dia 12 de março de 2025. É com imenso pesar que a Família Costa vem
          informar o seu falecimento.
        </div>
        <div className="container-botton">
          <img src={ImageCorner} alt="ImageCorner message" />
        </div>
      </div>
    </CardCerimonyFullStyles>
  )
}
