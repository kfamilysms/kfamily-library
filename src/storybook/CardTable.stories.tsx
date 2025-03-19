import CardContainer from '../components/CardContainer'

import '../index.css'

export default {
  title: 'Components/CardContainer',
  component: CardContainer,
}

export const CardNormal = () => <CardContainer title="Card Normal Title" />

CardNormal.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#eaf7f8' }],
  },
}

export const CardWithList = () => (
  <CardContainer
    title="Card with List"
    data={[
      {
        image: '',
        label: 'Label Here Space',
        onClick: () => {
          alert('Ok')
        },
      },
    ]}
    isFullScreen
    hideUpdateData
  />
)

CardWithList.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#eaf7f8' }],
  },
}
