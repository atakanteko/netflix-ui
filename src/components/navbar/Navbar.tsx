import siteLogo from '@/assets/images/siteLogo.svg';
import search from '@/assets/images/search.svg';
import profilePhoto from '@/assets/images/profilePhoto.png';
import useScrolled from '@/hooks/useScrolled';

type Props = {}

const Navbar = (props: Props) => {
  const isScrolled = useScrolled();

  return (
    <nav className={`${isScrolled ? "bg" : ""}`}>
        <div className="nav-wrapper">
          <div className="nav-left">
              <img src={siteLogo} alt="logo" />
          </div>
          <div className="nav-right">
            <ul className="menu">
              <li><a href="#" className="active">Homepage</a></li>
              <li><a href="#">Series</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">New and Popular</a></li>
              <li><a href="#">MyList</a></li>
            </ul>
            <div className="profile">
              <div className="search">
                <img src={search} alt="searchIcon" />
              </div>
              <div className="profile-img">
                <img src={profilePhoto} alt="profilePhoto" />
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar