import Transition from '@/components/elements/Transition/Transition';
import Capabilities from '@/components/Home/Capabilities/Capabilities';
import Header from '@/components/Home/Header';
import Profile from '@/components/Home/Profile';
import Project from '@/components/Home/Project/Project';
import Workflow from '@/components/Home/Workflow/Workflow';
import Footer from '@/components/elements/Footer/Footer';

export default function Home() {
  return (
    <Transition>
      <div className="space-y-28 md:space-y-36 ">
        <Header />
        <Profile />
        <Capabilities />
        <Project />
        <Workflow />
        <Footer />
      </div>
    </Transition>
  );
}
