import {
  RiMovie2Line,
  RiTvLine,
  RiFireLine,
  RiHome3Line,
} from 'react-icons/ri';

export const navLinks = [
  {
    id: 1,
    to: '/',
    text: 'Home',
  },
  {
    id: 2,
    to: '/movie',
    text: 'Movies',
  },
  {
    id: 3,
    to: '/tv',
    text: 'Tv Series',
  },
  {
    id: 4,
    to: '/favorites',
    text: 'Favorites',
  },
];
export const tabBar = [
  {
    id: 1,
    to: '/',
    text: 'Home',
    icon: RiHome3Line,
  },
  {
    id: 2,
    to: '/movie',
    text: 'Movies',
    icon: RiFireLine,
  },
  {
    id: 3,
    to: '/tv',
    text: 'Tv Series',
    icon: RiMovie2Line,
  },
  {
    id: 4,
    to: '/favorites',
    text: 'Favorites',
    icon: RiTvLine,
  },
];
