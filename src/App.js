import './App.css'
import { Link } from 'react-scroll'

function App() {
  const menuItems = [
    {
      id: 1,
      title: 'home',
    },
    {
      id: 2,
      title: 'about',
    },
    {
      id: 3,
      title: 'portfolio',
    },
    {
      id: 4,
      title: 'contact',
    },
  ]

  return (
    <div className='App'>
      <header>
        <nav>
          <h2>Coffee Shop</h2>
          <ul>
            {menuItems.map(({ title }) => (
              <li>
                <Link to={title} smooth={true} offset={-430} duration={500}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {menuItems.map(({ title }) => (
          <div className='content'>
            <h1 className='content-header' id={title}>
              {title}
            </h1>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
