import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--links">
        <div>
          <h6 className="footer--links__heading">Support</h6>
          <a href="/">
            <p className="footer--links__body">Help Center</p>
          </a>
          <a href="/">
            <p className="footer--links__body">Safety Center</p>
          </a>
        </div>
        <div>
          <h6 className="footer--links__heading">Support</h6>
          <a href="/">
            <p className="footer--links__body">Help Center</p>
          </a>
          <a href="/">
            <p className="footer--links__body">Safety Center</p>
          </a>
        </div>
        <div>
          <h6 className="footer--links__heading">Legal</h6>
          <a href="/">
            <p className="footer--links__body">Cookies Policy</p>
          </a>
          <a href="/">
            <p className="footer--links__body">Privacy Policy</p>
          </a>
          <a href="/">
            <p className="footer--links__body">Terms of Service</p>
          </a>
        </div>

        <div className="ml-8rem">
          <h6 className="footer--links__heading">
            Coming soon on your mobile device
          </h6>
          <div className="footer--downloads">
            <a href="/">
              <img
                src="https://raw.githubusercontent.com/awobekuD/Outlierz/f3c43d7822a638a3ae48604d43840f59b6d6de97/outlierz-app/images/Google%20play%20download.svg"
                alt="google-store-download"
                className="footer--downloads__google-store"
              />
            </a>
            <a href="/">
              <img
                src="https://raw.githubusercontent.com/awobekuD/Outlierz/f3c43d7822a638a3ae48604d43840f59b6d6de97/outlierz-app/images/App%20store%20download.svg"
                alt="apple-store-download"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer--social-icons">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/awobekuD/Outlierz/f3c43d7822a638a3ae48604d43840f59b6d6de97/outlierz-app/images/Instagram.svg"
            alt="instagram-link"
          />
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/awobekuD/Outlierz/f3c43d7822a638a3ae48604d43840f59b6d6de97/outlierz-app/images/Twitter.svg"
            alt="twitter-link"
          />
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/awobekuD/Outlierz/f3c43d7822a638a3ae48604d43840f59b6d6de97/outlierz-app/images/Youtube.svg"
            alt="youtube-link"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
