export async function generateStaticParams() {
  return [
    { slug: 'evento-123' },
    { slug: 'nextjs-conf' },
  ]
}

const EventDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      Event details for: {params.slug}
    </main>
  )
}

export default EventDetailPage