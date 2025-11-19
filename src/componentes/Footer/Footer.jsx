import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <div className='footerConteiner'>
      <div className="footer-left">
        <p className="footer-copy">© 2025 LIBR SOLUTIONS. Todos los derechos reservados.</p>
      </div>

      <div className="footer-center">
        <h4 className='titleFooter'>ENCONTRANOS EN</h4>
        <div className='redesFooter'>
          <a
            href='https://www.instagram.com/librsolutions/'
            target='_blank'
            rel='noopener noreferrer'
            className='iconLink'
          >
            <InstagramIcon fontSize='large' style={{ color: 'black' }} />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p>Diseñado por Libr Solutions.</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </div>

  )
}

export default Footer