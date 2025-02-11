import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/brave-logo-sans-text.svg";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Help center</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">What's new in iBrowe?</Link>
              </li>
              <li>
                <Link href="#">Release notes</Link>
              </li>
              <li>
                <Link href="#">Status</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Transparency report</Link>
              </li>
              <li>
                <Link href="#">Merch store</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Browser</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Desktop</Link>
              </li>
              <li>
                <Link href="#">Android</Link>
              </li>
              <li>
                <Link href="#">iOS</Link>
              </li>
              <li>
                <Link href="#">Linux</Link>
              </li>
              <li>
                <Link href="#">Beta</Link>
              </li>
              <li>
                <Link href="#">Nightly</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Social media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Reddit</Link>
              </li>
              <li>
                <Link href="#">X (formerly Twitter)</Link>
              </li>
              <li>
                <Link href="#">Mastodon</Link>
              </li>
              <li>
                <Link href="#">Facebook</Link>
              </li>
              <li>
                <Link href="#">Beta</Link>
              </li>
              <li>
                <Link href="#">YouTube</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Support</p>
                <a
                  href="https://community.iBrowe.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  community.iBrowe.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Advertising</p>
                <a
                  href="mailto:adsales@iBrowe.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  adsales@iBrowe.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Business</p>
                <a
                  href="mailto:bizdev@iBrowe.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  bizdev@iBrowe.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Press</p>
                <a
                  href="mailto:press@iBrowe.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  press@iBrowe.com
                </a>
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Offices</h3>
            <p className="text-sm">
              iBrowe San Francisco <br />
              580 Howard St, Unit 402, <br />
              San Francisco, CA 94105
            </p>
            <div className="mt-4">
              <label className="block text-sm">Choose a language</label>
              <select className="mt-1 w-full bg-gray-800 text-white p-2 rounded border-gray-700">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Català</option>
                <option value="ro">Română</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          <div>
            <h3 className="text-white font-bold mb-3">Privacy Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">iBrowe Browser</Link>
              </li>
              <li>
                <Link href="#">iBrowe Search</Link>
              </li>
              <li>
                <Link href="#">iBrowe Search RTBF</Link>
              </li>
              <li>
                <Link href="#">Website & email</Link>
              </li>
              <li>
                <Link href="#">Publishers & creators</Link>
              </li>
              <li>
                <Link href="#">Advertisers</Link>
              </li>
              <li>
                <Link href="#">CCPA</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Brand assets</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Events</Link>
              </li>
              <li>
                <Link href="#">GitHub</Link>
              </li>
              <li>
                <Link href="#">Research</Link>
              </li>
              <li>
                <Link href="#">Reviews</Link>
              </li>
              <li>
                <Link href="#">Tor Onion address</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">iBrowe Premium</Link>
              </li>
              <li>
                <Link href="#">Search</Link>
              </li>
              <li>
                <Link href="#">Rewards</Link>
              </li>
              <li>
                <Link href="#">Wallet</Link>
              </li>
              <li>
                <Link href="#">Firewall + VPN</Link>
              </li>
              <li>
                <Link href="#">Talk</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Playlist</Link>
              </li>
              <li>
                <Link href="#">All features</Link>
              </li>
              <li>
                <Link href="#">Basic Attention Token</Link>
              </li>
              <li>
                <Link href="#">YouTube ad blocker</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Developer Docs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Wallet Docs</Link>
              </li>
            </ul>
            <h3 className="text-white font-bold mb-3 mt-4">Creators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Overview</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Image src={logo} height={32} alt="logo" />
            <span className="text-white font-bold">iBrowe</span>
          </div>
          <div className="mt-2 pt-2 flex flex-col items-end text-sm">
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                Terms of use
              </Link>
              <Link href="#" className="hover:text-white">
                Report a security issue
              </Link>
            </div>
            <p className="mt-2">
              © 2025 - 2025 iBrowe Software, Inc. | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
