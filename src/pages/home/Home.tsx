import Navbar from "@/components/navbar/Navbar"
import bg from '@/assets/images/bg.png';
import background from '@/assets/images/background.png';
import { useEffect } from "react";
import useScrolled from "@/hooks/useScrolled";

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="home">
        {/* <Navbar /> */}
        <img 
          src={background} 
          alt=""
          className="bg-movie"
        />
        <Navbar />
        <h1>asf</h1>
        <h1>asf</h1>
        <h1>asf</h1>
        <h1>asf</h1>
        <h1>asf</h1>
    </div>
  )
}

export default Home