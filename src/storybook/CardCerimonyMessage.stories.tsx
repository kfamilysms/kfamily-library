import '../index.css'

import CardCerimonyMessage from '../components/CardCerimonyMessage'

export default {
  title: 'Components/CardCerimonyMessage',
  component: CardCerimonyMessage,
}

export const CardCerimonyMessageSample = () => (
  <CardCerimonyMessage
    message={{
      id: '001',
      message:
        "My dear dad I miss you so much. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profileImage:
        'https://www.bracarense-grupofunerario.pt/wp-content/uploads/2025/01/1-Foto-Falecida-site-Maria-Luisa-Abreu-Fernandes-Gomes.jpg',
      profileName: 'José Manuel Diaz Queiroz de Oliveira',
      profileLocation: 'Braga Norte, Portugal',
    }}
  />
)

CardCerimonyMessageSample.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#eaf7f8' }],
  },
}
