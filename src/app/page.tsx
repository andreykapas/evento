import Link from 'next/link';

export default function Home() {
  return (
    <main className={'flex flex-col items-center px-3 pt-36'}>
      <h1 className={'text-3xl lg:text-6xl font-bold tracking-tight'}>Find events around you</h1>
      <p className={'mb-12 mt-7 text-2xl lg:text-3xl opacity-75'}>
        Browse more than{' '}
        <span className={'font-bold text-accent italic underline'}>10,000 events</span>
        {' '}around you
      </p>

      <form className={'w-full sm:w-[36rem]'}>
        <input className={'w-full h-16 px-6 rounded-lg bg-white/[7%] outline-none ring-accent/50' +
          'transition focus:ring-2 focus:bg-white/10'}
          placeholder="Search for events in any city..."
          spellCheck={false}
        />
      </form>

      <section className={'flex mt-4 gap-x-4 text-sm text-white/50'}>
        <p>Popular:</p>
        <div className={'space-x-2 font-semibold'}>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  )
}
