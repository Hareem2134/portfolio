import Link from "next/link";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 text-center">
      <p className="text-lg font-semibold">© 2024 Hareem. All Rights Reserved.</p>
      <p className="text-lg font-medium">Contact: hareemfarooqi2134@gmail.com</p>
      <div className="flex justify-center gap-4 mt-4">

        {[
          { href: "https://github.com", icon: faGithub },
          { href: "https://linkedin.com", icon: faLinkedin },
          { href: "https://instagram.com", icon: faInstagram },

        ].map(({ href, icon }) => (

          <Link key={href} href={href}
            className="text-gray-600 hover:text-gray-800 text-2xl">
            <FontAwesomeIcon icon={icon} />
          </Link>
          
        ))}
      </div>
    </footer>
  );
}
