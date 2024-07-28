import CardProject from '@/components/Home/CardProject/CardProject';
import Header from '@/components/Home/Header';
import Profile from '@/components/Home/Profile';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-32">
      <Header />
      <Profile />
      <CardProject />
    </div>
  );
}
