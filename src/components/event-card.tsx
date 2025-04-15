import {EventoEvent} from '@/lib/types';
import Image from 'next/image';

type EventCardProps = {
  event: EventoEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <section className={'flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden'}>
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={280}
        className={'h-[60%] object-fill'} />
      <div className={'flex flex-col flex-1 items-center justify-center'}>
        <h2 className={'text-xl font-semibold'}>{event.name}</h2>
        <p className={'italic text-white/75'}>{event.organizerName}</p>
        <p className={'text-sm text-white/50 mt-4'}>{event.location}</p>
      </div>
    </section>
  );
};

export default EventCard;