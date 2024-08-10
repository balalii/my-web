import Footer from '@/components/elements/Footer/Footer';
import Transition from '@/components/elements/Transition/Transition';
import ProjectPage from '@/components/Project/ProjectPage';

export default function Page() {
  return (
    <Transition>
      <ProjectPage />
      <Footer />
    </Transition>
  );
}
