import Navbar from "@/components/navbar/Navbar"
import MovieInformation from "@/components/movieInfo/MovieInformation";
import background from '@/assets/images/background.png';
import bg from '@/assets/images/bg.png';

type Props = {}

const movieModel = {
  genres: ["drama", "thriller", "supernatural"],
  name: "stranger things",
  year: 2019,
  director: "Shawn Levy",
  seasons: 3,
  desc: " In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
  rating: 3,
  image: background
}

const Home = (props: Props) => {
  return (
    <div className="home">
        <Navbar />
        <MovieInformation {...movieModel}/>
    </div>
  )
}

export default Home