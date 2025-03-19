import CardCerimony from '../components/CardCerimony'
import CardContainer from '../components/CardContainer'

import '../index.css'

export default {
  title: 'Components/CardCerimony',
  component: CardContainer,
}

export const CardNormal = () => (
  <CardCerimony
    cerimony={{
      name: 'Ceri name',
      age: '88 anos',
      cemetery: {
        placeId: 'Placement',
        description: 'Rua Serafim Paiva Lima, 350, São Pedro da Cova, Gondomar',
      },
      imageCerimony:
        'https://www.bracarense-grupofunerario.pt/wp-content/uploads/2025/02/1-Foto-Falecido-Albino-de-Oliveira.jpg',
    }}
  />
)

CardNormal.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#eaf7f8' }],
  },
}
