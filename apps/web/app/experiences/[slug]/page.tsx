import { resume } from "../../../data/resume";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const experience = resume.find((job) => job.slug === params.slug);
  if (!experience) {
    return {
      title: `Guillemoto.io`,
      description: `Développeur web freelance expérimenté`,
    };
  }
  return {
    title: `Guillemoto.io`,
    description: `${experience.position} chez ${experience.company} - ${experience.dates.start} - ${experience.dates.end}`,
  };
}
export default function Experience({ params }: { params: { slug: string } }) {
  const experience = resume.find((job) => job.slug === params.slug);
  if (!experience) {
    return <div>Experience not found</div>;
  }
  return (
    <main className="container mx-auto px-10">
      <h2 className="mb-2 flex items-center">
        <div className="text-xl text-center">{experience.position}</div>
      </h2>
      <h3 className="">
        {experience.company} - {experience.dates.start} - {experience.dates.end}
      </h3>
      <ul className="">
        {experience.mainSkills.map((skill, index) => {
          return (
            <li
              key={index}
              className={`inline-block  rounded-lg py-1 text-xs mr-2 ${skill.toLowerCase()}`}
            >
              {skill}
            </li>
          );
        })}
      </ul>

      <p className=" text-sm mt-2">{experience.desciption}</p>
    </main>
  );
}
