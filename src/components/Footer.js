function Footer() {
    return (
        <div>
            <div className="footer">
                <p className="login-with">Login with</p>
                <ul className="icons">
                    <li>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
            <div className="sign-up">
                <a href="#">Don’t have an account? Sign Up here</a>
            </div>

        </div>
    )
};

export default Footer;