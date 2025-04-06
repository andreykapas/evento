import Link from 'next/link';
import Logo from '@/components/logo';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Events', path: '/events/all' },
];

const Header = () => {
  return (
    <header className={'flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9'}>
      <Logo />
      <nav>
        <ul className={'flex gap-6 text-sm'}>
          {
            routes.map((route) => (
            <li key={route.path} className={'text-white/50 hover:text-white/100 transition-colors'}>
              <Link
                href={route.path}
                className={'text-white/70 hover:text-white/100 transition-colors'}
              >
                {route.name}
              </Link>
            </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;