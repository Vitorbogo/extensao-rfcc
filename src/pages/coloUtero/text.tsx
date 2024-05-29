import AppLayout from '../../components/appLayout'

export default function TextComponent({ content, title }: { content: string; title: string }) {
  return <AppLayout title={title}>{content}</AppLayout>
}
