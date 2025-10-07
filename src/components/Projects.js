import websiteimg1 from '../assets/Bookie-1024x807.jpg';
import websiteimg2 from '../assets/food-ecommerce.jpg';
export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteimg1,
                description: 'A Book Website.Built with React.js',
                link: '#',
            },
            {
                image: websiteimg2,
                description: 'A Website.Built with React',
                link: '#',
            }
        ]

    }


    return <section id='projects' className="flex flex-col py-5 px-5 justify-center bg-primary text-white ">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5 ">
                <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are my best Projects. I have built these with React.js</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((projects) => (
                    <a href={projects.link}>
                        <div className='relative'>
                            <img className='h-[200px]' src={projects.image} />
                            <div className='project-desc'>
                                <p className='text-center py-5'>{projects.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={projects.link}>View project</a>
                                </div>
                            </div>

                        </div>
                    </a>
                ))}

            </div>
        </div>
    </section>
}