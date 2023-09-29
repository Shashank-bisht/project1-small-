import '../styles/Nav.scss'
const Navigation = () => {
  return (

    <div className="navbar">

      <nav className="container">
        <div className="logo">
          <img src="https://www.freeiconspng.com/thumbs/nike-logo/download-nike-desktop-background-picture-1.png" alt="" />
        </div>

        <div className="wrapper">

          <ul>
            <li href="" className='menu'>Menu</li>
            <li href="">Location</li>
            <li href="">About</li>
            <li href="">Contact</li>
          </ul>

          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation