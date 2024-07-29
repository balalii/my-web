import Capabilities from '@/components/Home/Capabilities/Capabilities';
import Header from '@/components/Home/Header';
import Profile from '@/components/Home/Profile';
import Project from '@/components/Home/Project/Project';
import Workflow from '@/components/Home/Workflow/Workflow';

export default function Home() {
  return (
    <div className="space-y-28 md:space-y-36 ">
      <Header />
      <Profile />
      <Capabilities />
      <Project />
      <Workflow />
    </div>
  );
}
