interface projectProps {
    title: string;
    sub: string;
    desc: string | string[];
    stacks: string;
    icon: string;
    github: string;
    live: string;

}
const ProjectCard = (props: projectProps) => {
    return (
        <div className="w-[400px] max-w-[calc(100vw-40px)] h-[500px] bg-transparent-900 rounded-xl p-5 text-white flex flex-col justify-between">

            <div>
                <div className="flex items-center gap-3">
                    <img
                        src={props.icon}
                        className="w-12 h-12 rounded-full"
                    />

                    <div>
                        <h2 className="font-semibold text-lg"> {props.title} </h2>
                        <p className="text-xs text-gray-400">{props.sub} </p>
                    </div>
                </div>




                <div className="flex gap-4 text-xs text-gray-400 mt-3">
                    <p>{props.stacks} </p>
                </div>


                <p className="text-sm text-gray-400 mt-4">
                    {props.desc}
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">
                    <a href={props.live} target="_blank" className="px-3 py-1 text-xs bg-transparent-800 rounded ">
                        Live
                    </a>

                </div>
            </div>


            <div className="flex justify-between text-sm mt-4">
                <a className="text-white-400 hover:underline">
                    View Details
                </a>
                <a href={props.github} target="_blank" className="text-white-400 hover:underline">
                    GitHub
                </a>
            </div>

        </div>
    );
};

export default ProjectCard;