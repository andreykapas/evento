'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';

const SearchForm = () => {
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className={'w-full sm:w-[36rem]'}>
      <input className={'w-full h-16 px-6 rounded-lg bg-white/[7%] outline-none ring-accent/50' +
        'transition focus:ring-2 focus:bg-white/10'}
             value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
             placeholder="Search for events in any city..."
             spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;