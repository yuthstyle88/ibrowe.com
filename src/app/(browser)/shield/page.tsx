"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import mobileshield from "@/assets/images/optimized/shield-assets/images/mobile-shields.webp";
import shieldheroscreenshot from "@/assets/images/optimized/shield-assets/images/shields-hero-screenshot.webp";
import shieldmenu from "@/assets/images/optimized/shield-assets/images/shields-menu.webp";
import shieldsettingcog from "@/assets/images/optimized/shield-assets/images/shields-settings-cog.svg";
import shieldvideo from "@/assets/images/optimized/shield-assets/images/shields-video.gif";

import { useState } from "react";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="bg-white">
      <Header />
      <section className="relative bg-gradient-to-b from-indigo-600 to-purple-500 min-h-[500px] flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold mt-40">iBrowe Shields</h1>
        <p className="mt-2 text-lg">
          Default protection. On every web page you visit.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100">
          Get iBrowe
        </button>
        <div className="relative w-full max-w-4xl mt-12">
          <Image
            src={shieldheroscreenshot}
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

      <section
        className="w-3/5 bg-white mx-auto px-6 md:py-20 grid md:grid-cols-2 gap-5 items-center unicode-bidi-[isolate] max-w-full md:max-w-[980px]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="order-last my-auto">
          <Image
            src={shieldmenu}
            alt="Protection Preview"
            className="max-w-sm w-full my-auto mx-auto max-w-maxcontent "
          />
        </div>

        <div className="order-last my-auto">
          <h2 className="text-[2.25rem] font-semibold leading-[1.6667] text-[rgb(33,37,41)] text-opacity-100">
            Protection against online tracking
          </h2>
          <div className="mt-4 text-[1.125rem] leading-[2rem] text-[rgb(73,80,87)] text-opacity-100">
            iBrowe Shields block the stuff that follows you online, across every
            page you visit. Trackers. Cross-site cookies. Phishing.
            Fingerprinting. And more.
          </div>
        </div>
      </section>

      <section
        className="w-3/5 max-w-[768px] bg-white mx-auto px-6 pt-10 md:py-20 pb-24 border-0 border-solid border-[#dadce8] box-border text-[100%] tab-size-4 font-normal leading-[2] unicode-bidi-[isolate]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="w-full px-6">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-[400px] rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section
        className="w-3/5 bg-white mx-auto px-6 md:py-20 grid md:grid-cols-2 gap-5 items-center unicode-bidi-[isolate] max-w-full"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="order-last md:order-first my-auto">
          <h2 className="text-[2.25rem] font-semibold leading-[1.67] text-[rgb(33_37_41)] pb-1">
            Default protection, no setup required
          </h2>
          <div className="mt-4 text-[1.125rem] leading-[2rem] text-[rgb(73,80,87)] text-opacity-100">
            Shields mean out-of-the-box protection. No extra downloads, no
            settings to configure. Just download iBrowe, and start browsing.
            Privately. Securely.
          </div>
        </div>
        <div className="max-w-maxcontent">
          <Image
            src={mobileshield}
            alt="iBrowe Shields Preview"
            className="max-w-sm w-full my-auto mx-auto"
          />
        </div>
      </section>

      <section
        className="w-3/5 bg-white mx-auto px-6 md:py-20 grid md:grid-cols-2 gap-5 items-center unicode-bidi-[isolate] max-w-full"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <Image
          src={shieldvideo}
          alt="iBrowe Shields"
          className="max-w-sm w-full my-auto mx-auto"
        />
        <div className="order-last my-auto">
          <h2 className="text-[2.25rem] font-semibold leading-[1.67] text-[rgb(33_37_41)] pb-1">
            See Shields in action
          </h2>
          <div className="mt-4 text-[1.125rem] leading-[2rem] text-[rgb(73,80,87)] text-opacity-100">
            With Shields, you can see all the creepy stuff that iBrowe blocked.
            Just click the iBrowe Shields icon in the address bar of any page to
            find out.
          </div>
          <div className="w-full md:w-1/4"></div>
        </div>
      </section>

      <section
        className="w-3/5 bg-white mx-auto px-6 md:py-20 grid md:grid-cols-2 gap-5 items-center unicode-bidi-[isolate] max-w-full"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="order-last md:order-first my-auto">
          <h2 className="text-[2.25rem] font-semibold leading-[1.67] text-[rgb(33_37_41)] pb-1">
            Privacy you can control
          </h2>
          <div className="mt-4 text-[1.125rem] leading-[2rem] text-[rgb(73,80,87)] text-opacity-100">
            By default, Brave Shields are on for every site you visit. See a
            site that looks broken? You can easily turn Shields on / off. No
            more toggling between browsers.
          </div>
        </div>
        <Image
          src={shieldsettingcog}
          alt="iBrowe Shields Privacy"
          className="max-w-sm w-full my-auto mx-auto"
        />
      </section>

      <section
        className="w-3/5 bg-white mx-auto py-10 md:py-20 grid md:grid-cols-1 gap-5 items-center unicode-bidi-[isolate] max-w-full md:max-w-[980px] border-t border-gray-100"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="order-last">
          <h2 className="text-[2.25rem] font-bold mb-4 text-gray-900">
            A long list of what Shields can do
          </h2>
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

      <section
        className="w-3/5 bg-white mx-auto py-10 md:py-20 grid md:grid-cols-1 gap-5 items-center unicode-bidi-[isolate] max-w-full md:max-w-[980px] border-t border-gray-100"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="w-full mx-auto max-w-[980px] border-0 border-solid border-[#dadce8] box-border tab-[4] text-[100%]">
          <h2 className="text-[2.25rem] font-bold mb-4 text-gray-900 text-center">
            FAQs
          </h2>{" "}
          <div className="border-b border-gray-200 last:border-b-0 py-4" />
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0 py-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndexes.has(index) ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronUp className="text-[#CED0DB]" />
                </motion.div>
              </div>
              {openIndexes.has(index) && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
          <div className="border-b border-gray-200 last:border-b-0 py-4" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
