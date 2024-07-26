export function ProjectTile({
  dates,
  title,
  description,
  concepts,
}: {
  dates: string;
  title: string;
  description: string;
  concepts: string[];
}) {
  return (
    <div className="group/projects">
      <div className="group/project1 text-sm text-gray-500 flex p-5 hover:bg-navy-light rounded-lg">
        <div className="basis-1/4 pr-3"> {dates} </div>
        <div className="flex flex-col basis-3/4 gap-y-4">
          <div className="text-base text-violet-100 group-hover/project1:text-violet-500">
            {title}
          </div>
          <div className="">{description}</div>
          <div className="flex gap-x-2 text-xs">
            {concepts.map((concept) => {
              return (
                <button
                  key={concept}
                  className="bg-violet-400/10 text-violet-500 py-2 px-4 rounded-full"
                >
                  {concept}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
