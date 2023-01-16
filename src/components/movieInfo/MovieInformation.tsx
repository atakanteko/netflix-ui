import playIcon from '@/assets/images/playIcon.svg';
import { IMovie } from '@/ts/interfaces/IMovie';
import { motion } from 'framer-motion';



const MovieInformation = (props: IMovie) => {
    const { genres, name, year, director, seasons, desc, image } = props;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 2, ease: "easeOut", }}
            variants ={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 }
            }}
            className='movie-information'
        >
            <img 
            src={image} 
            alt=""
            className="bg-movie"
            />
            <div className="black-layer"></div>
            <div className="info-wrapper">
                <div className="genres">
                    {
                        genres.map((item:string, index:number) => (
                            <>
                                <div className='genre'>
                                    <h1 key={index}>{item}</h1>
                                </div>
                            </>
                        ))
                    }
                </div>
                <h1 className='movie-name'>{name}</h1>
                <div className="general-info">
                    <h3>{year}</h3>
                    <h3>DIRECTOR: <span>{director}</span></h3>
                    <h3>SEASONS: <span>{seasons}</span></h3>
                </div>
                <div className="desc">
                    <p>{desc}</p>
                </div>
                <div className="buttons">
                    <button className='play'>
                        <span>stream now</span>
                        <img 
                            src={playIcon} 
                            alt=""
                        />
                    </button>
                    <button className='all'>
                        <span>all episodes</span>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default MovieInformation