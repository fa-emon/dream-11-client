import icon from '../../../assets/icon.jpg'
import footerImage from '../../../assets/NavBar/navbarImage.jpg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="rounded" style={{
            backgroundImage: `url(${footerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <footer className="footer p-10 text-base-content all-font mt-6">
                <aside>
                    <img className='w-32 h-32 rounded-full object-contain' src={icon} alt="" />
                    <p>Dreams-11<br />Turn Dreams into Reality</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer footer-center p-4 text-base-content all-font">
                <aside>
                    <p>Copyright © {currentYear} , Dream-11</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;