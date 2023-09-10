import logoF from '../assets/images/Counter-logo-footer.png'
function Footer(){
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={logoF} alt="lgF"/>
            </div> 
            <div className='f-menu'>
                <ul className='menu footer_menu'>
                    <li><a href="#">Партнерам</a></li>
                    <li><a href="#">Разработчикам</a></li>
                    <li><a href="#">Вакансии</a></li>
                </ul>
            </div>
            <div className='f-copy'>
                Все права защищены.
            </div>
        </div>
    );
}

export default Footer;