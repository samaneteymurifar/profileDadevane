import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><App/></Link>
          </li>
          <li>
            <Link to="/Gender"><button>Blogs</button></Link>
          </li>
          <li>
            <Link to="/contact"><button>Contact</button></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;