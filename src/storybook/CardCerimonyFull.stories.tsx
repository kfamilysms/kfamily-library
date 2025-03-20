import CardCerimonyFull from '../components/CardCerimonyFull'
import CardCerimonyMessage from '../components/CardCerimonyMessage'
import '../index.css'

export default {
  title: 'Components/CardCerimonyFull',
  component: CardCerimonyFull,
}

export const CardCerimonyFullNormal = () => {
  return (
    <>
      <CardCerimonyFull />
      <br />
      <br />
      <br />
      <h1>&nbsp;&nbsp;Mensagens de Condolências</h1>
      <br />
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {[
          {
            id: '001',
            message:
              "My dear dad I miss you so much. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            profileImage:
              'https://www.bracarense-grupofunerario.pt/wp-content/uploads/2025/01/1-Foto-Falecida-site-Maria-Luisa-Abreu-Fernandes-Gomes.jpg',
            profileName: 'Patricia Maria dos Santos',
            profileLocation: 'Braga Norte',
          },
          {
            id: '002',
            message: 'It has survived not only five centuries.',
            profileImage:
              'https://www.eurofuneraria.com/wp-content/uploads/2025/03/foto-site-1.png',
            profileName: 'Lucilente Maria dos Santos',
            profileLocation: 'Barcelos',
          },
          {
            id: '003',
            message:
              'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
            profileImage:
              'https://www.eurofuneraria.com/wp-content/uploads/2025/03/Armando-Carvalho-FOTO.jpg',
            profileName: 'Lucilente Maria dos Santos',
            profileLocation: 'Vila do Conde',
          },
          {
            id: '004',
            message:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            profileImage:
              'https://www.eurofuneraria.com/wp-content/uploads/2025/02/Imagem_WhatsApp_2025-02-18_as_16.29.49_4553d8ef-removebg-preview.png',
            profileName: 'Lucilente Maria dos Santos',
            profileLocation: 'Vila do Conde',
          },
        ].map((value) => {
          return <CardCerimonyMessage message={value} />
        })}
      </div>
    </>
  )
}

CardCerimonyFullNormal.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#eaf7f8' }],
  },
}
