import HeroImg from '../assets/hero.png';
import { CiLinkedin } from "react-icons/ci";
export default function Hero() {
    const config = {
        subtitles: 'Im a Full-stack developer',
        social:{
            linkedin:'https://www.linkedin.com/in/vishnue2002/'
        }
    }



    return <section className=' flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font '>Hi, <br /> Im <spann className='text-black'>VISHNU</spann>
                <p className='text-2xl'>{config.subtitles}</p>
            </h1>

            <div className='flex py-5'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><CiLinkedin size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />

    </section>
}