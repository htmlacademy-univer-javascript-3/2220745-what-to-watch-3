import MainPage, { MainPageProps } from './pages/MainPage.tsx';

export default function App({ title, genre, date }: MainPageProps) {
  return <MainPage title={title} genre={genre} date={date} />;
}
