import { IonContent } from '@ionic/react'
import AppLayout from '../../components/appLayout'
import styled from 'styled-components'

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);
`

export default function TextComponent({ content, title }: { content: string; title: string }) {
  return (
    <AppLayout title={title}>
      <IonContent>
        <ContentBox>{content}</ContentBox>
      </IonContent>
    </AppLayout>
  )
}
