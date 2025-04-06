export async function generateStaticParams() {
  return [
    { city: 'austin' },
    { city: 'seattle' },
  ]
}

const EventPage = ({ params }: { params: { city: string } }) => {
  return (
    <main>
      Event page for city: {params.city}
    </main>
  );
};

export default EventPage;