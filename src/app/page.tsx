import Capabilities from '@/components/Home/Capabilities/Capabilities';
import Header from '@/components/Home/Header';
import Profile from '@/components/Home/Profile';
import Project from '@/components/Home/Project/Project';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-32 overflow-x-hidden">
      <Header />
      <Profile />
      <Capabilities />
      <Project />
    </div>
  );
}
