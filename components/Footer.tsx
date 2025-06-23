import Link from "next/link";
import { faGithub, faLinkedin, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold mb-2">© {currentYear} Hareem Farooqi. All Rights Reserved.</p>
        <p className="text-md font-medium mb-4">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Next.js</Link> & <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 hover:underline">Tailwind CSS</Link>.
        </p>
        <div className="flex justify-center gap-6 mt-6 mb-6">
          {[
            { href: "https://github.com/Hareem2134", icon: faGithub, label: "GitHub", color: "hover:text-white" },
            { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn", color: "hover:text-blue-400" },
            { href: "https://instagram.com", icon: faInstagram, label: "Instagram", color: "hover:text-pink-400" },
            { href: "https://x.com/hareem_2134", icon: faXTwitter, label: "X (Twitter)" }
          ].map(({ href, icon, label, color }) => (
            <Link 
              key={href} 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-gray-400 ${color} text-3xl transform hover:scale-125 transition-all duration-300`}
            >
              <FontAwesomeIcon icon={icon} />
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Have a project in mind? Let's connect: <a href="mailto:hareemfarooqi2134@gmail.com" className="text-blue-400 hover:underline">hareemfarooqi2134@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}