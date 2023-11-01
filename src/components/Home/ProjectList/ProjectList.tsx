import PROJECT_LIST from '../../../data/PROJECT_LIST';
import ProjectCard from './ProjectCard';
import ProjectTitle from './ProjectTitle';

export default function ProjectList() {
  return (
    <section className="container">
      <div className="flex w-full gap-20 items-start ">
        <div className="w-full py-[50vh]">
          <ul>
            {PROJECT_LIST.map((data, idx) => (
              <li key={idx}>
                <ProjectTitle id={data.name}>{data.desc}</ProjectTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky  flex top-0 h-screen items-center justify-end flex-1">
          <div className="relative aspect-square w-[25rem] rounded-2xl bg-gray-800 ">
            <ul>
              {PROJECT_LIST.map((data, idx) => (
                <li key={idx}>
                  <ProjectCard id={data.name}>{data.name}</ProjectCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
