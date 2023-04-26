
import '../../styles/globals.css';
import Navigation from './components/Navigation';
import Link from 'next/link';

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Skills',
  route: '/skills'
},
 {
  label: 'Proyect',
  route: '/proyects'
}, {
  label: 'Experience',
  route: '/experience'
}, {
  label: 'Education',
  route: '/education'
}, {
  label: 'Contact',
  route: '/contact'
}
]

export default function Home() {



  return (
    <div className=" container" >
      {links.map(({ label, route }) => (
        <Link href={route} target="_self">
          <div className={label} key={route} ></div>
        </Link>
      ))}
      <div className="muzieknootjes">
        <div className="noot-1">
          &#9835; &#9833;
        </div>
        <div className="noot-2">
          &#9833;
        </div>
        <div className="noot-3">
          &#9835; &#9834;
        </div>
        <div class="noot-4">
          &#9834;
        </div>
      </div>
      <div className='aux_Experience'></div>


    </div>
  )
}