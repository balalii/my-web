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
      <div>
        <Header />
        <div className="space-y-20 md:space-y-32 !-mt-10 md:!-mt-16 ">
          <Profile />
          <Capabilities />
          <Project />
          <Workflow />
          <Footer />
        </div>
      </div>
    </Transition>
  );
}
