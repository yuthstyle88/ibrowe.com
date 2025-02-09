"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function BlogPage() {
  const [openIndexes, setOpenIndexes] = useState(new Set<number>());

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) => {
      const newIndexes = new Set(prev);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  const faqs = [
    {
      question:
        "How exactly does Brave block trackers, scripts, and other resources?",
      answer:
        "To start, Brave applies filter lists from the EasyList and EasyPrivacy projects, the uBlock Origin project, and lists Brave has generated internally. By pulling from many different tracking protection lists, Brave blocks more unwanted trackers and resources than any other popular browser. Brave also funds and supports the maintenance of tracking-protection lists to support the privacy community. And we apply system-wide protections to prevent trackers from tracking you, even in cases where the tracker doesn’t appear on a list.",
    },
    {
      question: "How does fingerprint randomization work?",
      answer:
        "Your digital fingerprint is the unique set of data points (like your graphics hardware, audio hardware, device type, and more) that, when combined, could help identify you online. By default, Brave protects you from tracking based on your browser fingerprint, by randomizing that fingerprint. The Brave browser makes you look different to every site, each time you restart the browser. This prevents sites from using fingerprinting to track you across sites or even from one online session to another.",
    },
    {
      question:
        "What’s different about the way Brave blocks third-party storage?",
      answer:
        "Brave blocks both third-party cookies and third-party storage (e.g. storage in iframes) by default; some other privacy-focused browsers do, too. What’s unique about Brave is the lifetime of the partitioned storage (i.e. that it’s 'ephemeral'). Brave’s approach limits tracking, and provides much stronger protections than any other browser.",
    },
    {
      question:
        "One of the websites I’m visiting isn’t working. Can I turn off Shields?",
      answer:
        "Yes. But know that with Shields down, some of the privacy protections of Brave will be disabled. If you see a site that’s not working, first verify that the site is trusted before putting Shields down.",
    },
  ];
  return (
    <div>
      <Header />
      <section className="relative bg-gradient-to-b from-indigo-600 to-purple-500 min-h-[500px] flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold mt-20">iBrowe Shields</h1>
        <p className="mt-2 text-lg">
          Default protection. On every web page you visit.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100">
          Get iBrowe
        </button>
        <div className="relative w-full max-w-4xl mt-12">
          <img
            src="/images/shields-hero-screenshot.webp"
            alt="iBrowe Shields Preview"
            className="rounded-lg w-full"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 2262 263"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 33.3596C0 33.3596 870 157.138 1318 131.5C1766 105.862 2262 0 2262 0V263H0L0 33.3596Z"
            fill="white"
          ></path>
        </svg>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 mr-4 flex justify-end">
          <img
            src="/images/shields-menu.webp"
            alt="Protection Preview"
            className="w-full md:w-auto max-w-lg rounded-lg bg-white"
          />
        </div>

        <div className="w-full md:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900">
            Protection against online tracking
          </h2>
          <p className="mt-4 text-gray-600">
            iBrowe Shields block the stuff that follows you online, across every
            page you visit. Trackers. Cross-site cookies. Phishing.
            Fingerprinting. And more.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 flex justify-center items-center py-10 gap-10">
        <div className="w-full max-w-3xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-[400px] rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/4 flex flex-col items-start text-left"></div>
        <div className="w-full md:w-1/4 flex flex-col items-start text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Default protection, no setup required
          </h2>
          <p className="mt-4 text-gray-600">
            Shields mean out-of-the-box protection. No extra downloads, no
            settings to configure. Just download iBrowe, and start browsing.
            Privately. Securely.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src="/images/mobile-shields.webp"
            alt="iBrowe Shields Preview"
            className="w-1/2 md:w-1/2 max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 mr-4 flex justify-end">
          <img
            src="/images/shields-video.gif"
            alt="iBrowe Shields"
            className="w-1/2 md:w-1/2 max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900">
            See Shields in action
          </h2>
          <p className="mt-4 text-gray-600">
            With Shields, you can see all the creepy stuff that iBrowe blocked.
            Just click the iBrowe Shields icon in the address bar of any page to
            find out.
          </p>
          <div className="w-full md:w-1/4"></div>
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 py-16 flex flex-col items-start text-left">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            A long list of what Shields can do
          </h1>
          <p className="mb-6 text-gray-600">
            By default, iBrowe has the strongest privacy protections of any
            popular browser. And Shields are a core part of that protection.
            Here’s a long list of what they can do:
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Block third-party ads & trackers
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2 text-gray-600">
              <strong>Third-party ad & tracker blocking</strong>, on every page
              you visit. Available in Standard and Aggressive mode.
            </li>
            <li className="mb-2 text-gray-600">
              <strong>Resource replacement</strong>: iBrowe will
              block-and-replace problematic resource scripts with a
              stripped-down, more private version that still allows the page to
              function.
            </li>
            <li className="mb-2 text-gray-600">
              Learn more about iBrowe “SugarCoat” work with UC San Diego.
            </li>
            <li className="mb-2 text-gray-600">
              <strong>CNAME uncloaking</strong>: Some third-party trackers use
              cloaking tactics to hide where code really comes from, and
              circumvent ad blockers. iBrowe can see through this evasion, and
              stop it from happening.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Cookie partitioning
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2 text-gray-600">
              <strong>Block cross-site cookies</strong>, and thus prevent
              site-to-site tracking.
            </li>
            <li className="mb-2 text-gray-600">
              <strong>Ephemeral storage</strong>: Block third-party application
              storage (e.g. what’s used with cookies), but replace with a
              temporary, auto-deleted storage that still allows sites to
              function.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Fingerprint randomization
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2 text-gray-600">
              <strong>Randomizing browser APIs</strong>: iBrowe prevents sites
              from tracking you based on your browser fingerprint by slightly
              randomizing (or occasionally removing) the browser features
              trackers use to follow you. For example, iBrowe randomizes APIs
              that are vulnerable to fingerprinting to ensure both privacy and
              site functionality. It also blocks highly identifying APIs.
            </li>
            <li className="mb-2 text-gray-600">
              <strong>Block browser-language and font fingerprinting</strong>:
              iBrowe further strengthens its fingerprinting protections by
              preventing users from being identified based on preferred browser
              language.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Phishing protections
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2 text-gray-600">
              iBrowe can alert you if the site you’re trying to visit shows
              evidence of phishing, malware, or other bad intent.
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-16 lg:px-32 py-16 flex flex-col items-start text-left">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3
                className="text-xl font-semibold mb-4 text-gray-900 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </h3>
              {openIndexes.has(index) && (
                <p className="text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
