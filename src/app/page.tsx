import Cta from '@/components/Home/Cta/Cta';
import Header from '@/components/Home/Header/Header';
import ProjectList from '@/components/Home/ProjectList/ProjectList';
import Socials from '@/components/Home/Socials/Socials';
import Tech from '@/components/Home/Tech/Tech';

export default function Home() {
  return (
    <>
      <Header />
      <Tech />
      <ProjectList />
      <Socials />
      {/* <Cta /> */}
    </>
  );
}
