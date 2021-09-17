import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div id="social">
        <ul>
          <li>
            <a href="https://github.com/jaredaritter">
              <Image
                src="/images/GitHub-Mark-32px.png"
                alt="Small Github Icon"
                width="28px"
                height="28px"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jaredaritter">
              <Image
                src="/images/LI-In-Bug-Tiny.png"
                alt="Small LinkedIn Icon"
                width="32px"
                height="32px"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jaredaritter">
              <Image
                src="/images/Twitter-Logo-black.svg"
                alt="Small Twitter Icon"
                width="32px"
                height="32px"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy 2020 Jared A Ritter</p>
      </div>
    </footer>
  );
}
