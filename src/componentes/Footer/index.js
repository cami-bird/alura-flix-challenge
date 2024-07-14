import "./Footer.css"

const Footer = () => {
    return <footer className='footer' >
        <div className='redes'>
            <a href='https://www.facebook.com/camila.ossandonmejias?locale=es_LA'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/cami_birding_nature/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img className="logo" src='/img/Logo.png' alt='org' />
        <strong>Cami Bird</strong>
    </footer>
}

export default Footer