"use client";
import usePlayVideo from "@/app/hooks/usePlayVideo";
import AccordionItem from "@/components/DivideSection";
import FaqItem from "@/components/FaqItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AssetIcon } from "@/constants/icon";
import Image from "next/image";
import { useRef, useState } from "react";

const faqData = [
  {
    question: "How does Brave Firewall + VPN work?",
    answer: (
      <>
        <p>
          A firewall forms a secure barrier between your device (phone, tablet,
          or computer) and the Internet—it blocks unwanted{" "}
          <a className="text-[#3e37d4] underline" href="/glossary/tracker/">
            trackers
          </a>
          ,{" "}
          <a className="text-[#3e37d4] underline" href="/glossary/malware/">
            malware
          </a>
          , and more from your device. A virtual private network (VPN) encrypts
          your Internet traffic as it passes between your device and the
          websites you access for added privacy and security. Brave Firewall +
          VPN offers the benefits of both a VPN and a firewall to protect you
          online. It protects at the network level, on your entire device, on
          every app you use.
        </p>
      </>
    ),
  },
  {
    question:
      "Can I protect more than one device? Which platforms are supported?",
    answer: (
      <>
        <p className="pb-[30px]">
          Yes, one Brave VPN subscription can protect up to 10 devices. To add a
          new device, simply download the Brave browser on your device, and log
          in with your VPN credentials.{" "}
          <a
            href="https://support.brave.com/hc/en-us/articles/13405790544653-How-do-I-add-a-new-device-to-an-existing-VPN-subscription"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            See more detailed instructions.
          </a>
        </p>
        <p>
          Brave Firewall + VPN is available on Android, Windows, iOS, and macOS
          (support for Linux is coming soon). You must have the Brave browser
          installed to use Brave VPN.
        </p>
      </>
    ),
  },
  {
    question: "How much does Brave VPN cost? How do I buy it?",
    answer: (
      <>
        <p className="pb-[30px]">
          Brave Firewall + VPN is a subscription service. It’s available in the
          Brave Browser on desktop and mobile devices for $9.99/month or
          $99.99/year. Each subscription comes with a 7-day free trial.
        </p>
        <p className="pb-[30px]">
          To start a trial or purchase on desktop, visit{" "}
          <a
            href="https://account.brave.com/?intent=checkout&amp;product=vpn"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            account.brave.com
          </a>
          . To start a trial or purchase on mobile, open the Brave Browser on
          your mobile device, open the <strong>Settings</strong> menu ("…" or
          “⋮”), then toggle on “<strong>Brave VPN</strong>.”
        </p>
        <p>
          <em>
            Note: In the future, it will be possible to pay for Brave VPN with
            BAT.
          </em>
        </p>
      </>
    ),
  },
  {
    question: "What is the cancelation policy for Brave VPN?",
    answer: (
      <>
        <p>
          When you sign up for Brave VPN, you’ll automatically start the 7-day
          free trial process. After 7 days, your payment method will be charged.
          You can cancel your subscription—free of charge—at any point during
          the 7-day free trial period.{" "}
          <a
            href="https://support.brave.com/hc/en-us/articles/22359175652109-How-do-I-cancel-my-Brave-VPN-subscription"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            See detailed cancellation instructions.
          </a>
        </p>
      </>
    ),
  },
  {
    question: "What regions can I connect to using Brave VPN?",
    answer: (
      <>
        <p>
          Brave VPN currently offers 300+ servers in 40+ regions, including:
        </p>
        <ul className="list-disc pl-9 pb-4 pt-[30px]">
          <li>Australia</li>
          <li>Austria</li>
          <li>Belgium</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>Chile</li>
          <li>Colombia</li>
          <li>Croatia</li>
          <li>Czech Republic</li>
          <li>Denmark</li>
          <li>France</li>
          <li>Germany</li>
          <li>Greece</li>
          <li>Ireland</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Portugal</li>
          <li>Romania</li>
          <li>Singapore</li>
          <li>South Africa</li>
          <li>Spain</li>
          <li>Sweden</li>
          <li>Switzerland</li>
          <li>USA (Central)</li>
          <li>USA (East)</li>
          <li>USA (Mountain)</li>
          <li>USA (Northwest)</li>
          <li>USA (West)</li>
          <li>Ukraine</li>
          <li>United Kingdom</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Who makes Brave VPN? What if I have a problem with my VPN connection?",
    answer: (
      <>
        <p>
          The Brave Browser is available in nearly 160 languages in all,
          including four different dialects of Chinese. Brave Search is
          currently available in almost 20 different languages, with support for
          even more languages on the horizon.
        </p>
      </>
    ),
  },
  {
    question: "Is Brave VPN audited?",
    answer: (
      <>
        <p>
          Brave VPN is offered via a partnership with Guardian, which undergoes
          regular third-party audits by trusted security firms. The initial{" "}
          <a
            href="https://www.assured.se/publications/assured-dnsfilter-guardian-app-api-penetration-test-verification-report-20240319.pdf"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            software security audit
          </a>{" "}
          occurred in February 2024 and the initial{" "}
          <a
            href="https://guardianapp.com/blog/2024/07/independent-security-audit-phase-two/"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            infrastructure security audit
          </a>{" "}
          occurred in April 2024. These audits help verify that Brave VPN
          practices and production configurations align with our stringent
          stance on data privacy. Guardian shares these reports in full in order
          to provide as much transparency as possible to end users.
        </p>
      </>
    ),
  },
  {
    question: "Does Brave VPN have a no-logs policy?",
    answer: (
      <>
        <p className="pb-[30px]">
          Brave does not log or otherwise keep any record of user activity—that
          means no logging of traffic, DNS requests, connection data, IP
          addresses, or bandwidth. As an additional precaution, the “journald”
          process on all production VPN nodes is configured to not store any
          form of log data in a persistent manner.
        </p>
        <p className="pb-[30px]">
          By design, it’s impossible for Brave to discover anything about your
          VPN usage other than the fact that a particular email address
          purchased a subscription. In fact, Brave can’t even tell if you’ve
          ever used the VPN.
        </p>
        <p className="pb-[30px]">
          The only information Brave ever sees is the email address you sign up
          with and your payment method (which is processed and protected
          according to{" "}
          <a className="text-[#3e37d4] underline" href="/glossary/ccpa/">
            CCPA
          </a>
          ,{" "}
          <a className="text-[#3e37d4] underline" href="/glossary/gdpr/">
            GDPR
          </a>
          , and other relevant privacy legislation).
        </p>
        <p>
          <a
            href="https://guardianapp.com/policy/service-policies/"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            See Guardian’s full no-logs policy for more information.
          </a>
        </p>
      </>
    ),
  },
  {
    question: "How does Brave VPN’s private subscription process work?",
    answer: (
      <>
        <p className="pb-[30px]">
          Brave VPN uses a unique credentialing method that allows us to see if
          an email address has an active Brave VPN subscription, and nothing
          more. Brave is unable to tell when—or even if—you connect to the VPN.
          That means it’s impossible for us to know who connects, when they
          connect, or what/how much data they transmit.{" "}
          <a
            href="https://guardianapp.com/policy/service-policies/"
            target="_blank"
            className="text-[#3e37d4] underline"
          >
            Check our no-logs policy for more information.
          </a>
        </p>
        <p className="pb-[30px]">
          On desktop (or for subscriptions purchased on a mobile device via our
          desktop account portal), you’ll need an email address, payment method,
          and billing address to start a subscription. However, this information
          is stored on Stripe’s servers, not on Brave’s; the only info Brave
          uses to authenticate you into the VPN is the email address you sign up
          with, and whether or not your subscription is active.
        </p>
        <p>
          For purchases made via the mobile app stores, whatever billing/account
          info is required by the app stores is sufficient to subscribe to Brave
          VPN—and this info (e.g. payment method and billing address) are
          handled by the Apple App Store or the Google Play Store. Your billing
          info may be stored by the merchant you complete your purchase with,
          but never on Brave’s servers. We cannot link the use of Brave VPN to
          any individual.
        </p>
      </>
    ),
  },
  {
    question: "What kinds of servers does Brave VPN use?",
    answer: (
      <>
        <p className="pb-[30px]">
          Brave relies on Guardian’s infrastructure which uses physical servers
          running hypervisor software to support several virtual machine (VM)
          instances on each piece of hardware. For security purposes, Guardian
          does not use VMs in environments where it does not also control the
          bare-metal server running the hypervisor software; Guardian always
          retains exclusive control over the physical servers.
        </p>
        <p>
          In contrast to using diskless servers, we opt for an independent and
          ephemeral credential store on each VPN server, generated based on the
          validation of a cryptographically-signed “proof of purchase” data blob
          from a separate authentication server. No user-attributable
          information is stored on the VPN server or is accessible by the VPN
          server in this process. With a diskless approach, the lack of
          persistent storage often means that each VPN server would need to have
          direct access to common central authentication server(s). We opt to
          instead ensure that any persistent data is not useful for user
          identification in the first place.
        </p>
      </>
    ),
  },
  {
    question: "What speeds can I expect to get while using Brave VPN?",
    answer: (
      <>
        <p>
          Brave VPN is powered by Guardian’s infrastructure of extremely fast,
          state-of-the-art VPN servers. Most servers in the network have an
          uplink speed of 10 Gbps. However, unlike most other VPN providers,
          we’re honest with our users that those speeds aren’t realistic under
          everyday circumstances. Under realistic conditions, when multiple
          users send their Internet traffic through Brave VPN servers at once,
          you can reliably expect to achieve speeds of up to 500 Mbps, depending
          on your default Internet connection speeds.
        </p>
      </>
    ),
  },
];

const accordionItems = [
  {
    title: "Mask your IP address location",
    content: (
      <>
        <p className="pb-4">
          When you use Brave VPN, your Internet traffic will appear like it’s
          coming from any location you choose—potentially bypassing annoying
          geo-restrictions. Choose from hundreds of servers in over 40 regions.
          The Web, <em>without</em> the annoyances
        </p>
      </>
    ),
  },
  {
    title: "Hide your Internet traffic",
    content: (
      <p className="pb-4">
        Most{" "}
        <a className="text-[#c1c4ff] underline" href="/glossary/isp/">
          ISPs
        </a>{" "}
        can see what you do online—even in private/Incognito windows—and can
        collect and sell your data. Brave VPN hides your Internet traffic from
        ISPs so you can browse freely and safely.
      </p>
    ),
  },
  {
    title: "The no-logs VPN you can trust",
    content: (
      <p className="pb-4">
        Brave VPN doesn’t keep any record of user activity—that means no logs of
        any kind. Rest assured that Brave does not store your traffic,
        connection data, usage data, or IP address. And thanks to our unique,
        privacy-preserving login method, Brave can’t even tell if you’ve ever
        used the VPN.
      </p>
    ),
  },
  {
    title: "Built-in firewall for added security",
    content: (
      <p className="pb-4">
        Brave Firewall + VPN can protect against ads and trackers—even outside
        of the Brave browser, covering your whole device.
      </p>
    ),
  },
  {
    title: "Protect all your devices with one subscription",
    content: (
      <p className="pb-4">
        Brave helps you simplify online security. Our VPN is built right into
        the browser, and one subscription protects up to 10 devices, across
        Android, iOS, macOS, and Windows.
      </p>
    ),
  },
];

const checklistItems = [
  "No-logs policy",
  "Unique, privacy-preserving login method",
  "Independent security firm audit",
  "Physical server locations",
  "Lightning-fast connection speeds",
  "Added firewall protection",
  "Built into the browser; no extra downloads",
  "300+ servers across 40+ regions",
  "Support for up to 10 devices across Android and iOS, macOS and Windows",
  "Protect Internet traffic on every app on your device (even outside of Brave)",
];

export default function FirewallVPN() {
  const { iframeRef, isPlaying, playVideo } = usePlayVideo(
    "https://player.vimeo.com/video/1020347710?dnt=1&portrait=0&title=0&byline=0"
  );

  const [open, setOpen] = useState<number | null>(1);
  const [openIndexes, setOpenIndexes] = useState(new Set<number>());

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); 
      } else {
        newSet.add(index); 
      }
      return newSet;
    });
  };

  const toggleAccordion = (index: number) => {
    setOpen((prev) => (prev === index ? prev : index));
  };

  return (
    <div className="min-h-[200vh] text-[#1b1b1f]">
      <Header />
      <div className="grid-cols-layout grid w-full gap-x-8 bg-[#FFDBCF]">
        <div className="relative overflow-x-clip z-0"></div>
        <div className="bg-orange-20">
          <header className="hero_vpn">
            <div className="card_vpn card__contents_vpn mb-5 flex h-[80px] w-[80px] items-center justify-center [--card-padding:14px] [grid-area:1/1/1/1] sm:h-[128px] sm:w-[128px] sm:[--card-padding:21px]">
              <Image
                src={AssetIcon.vpn_firewall}
                alt="Firewall + VPN logo"
                className="sm:w-fit w-[48px]"
              />
            </div>
            <h1 className="z-10 mb-3 text-display-hero lg:mb-5">
              Brave VPN: The secure, fast VPN, right in your browser
            </h1>
            <p className="text-h4 max-w-[700px] mb-4">
              Brave VPN encrypts your Internet traffic for added protection and
              privacy. Hide your IP address, mask your location, and access your
              favorite content on the go.
            </p>

            <button className=" bg-[#FF3A00] font-poppins text-white py-4 pl-6 pr-6 rounded-2xl text-[18px] leading-6 font-[600] hover:bg-[#CA2F0B] min-h-[60px] w-fit duration-300">
              <p>Get Brave + VPN</p>
            </button>
            <p className="text-[15px] leading-5 font-semibold max-w-[400px] mt-4">
              <span className="font-poppins">
                After downloading Brave, open the browser and
                <br />
                click{" "}
                <Image
                  src={AssetIcon.vpn_inactive}
                  alt="VPN label"
                  className="inline-block mx-1 -mt-1 w-[55px]"
                />{" "}
                in the address bar to protect this device (and up to 10 total
                devices across desktop, Android, and iOS).
              </span>
            </p>
            <div className="mt-8 min-[1080px]:-mt-[17rem] xl:-mt-[19rem] -mb-36 mx-auto min-[1080px]:mr-0 xl:mr-28 max-w-[383px]">
              <Image src={AssetIcon.vpn_lock} alt="VPN label" />
            </div>
          </header>
          <section className="-mt-36 z-0 grid gap-10 lg:grid-cols-2">
            <div className="card_modal card__contents_modal shadow-[10px_10px_0px_#ffede8,10px_10px_0px_2px_#1b1b1f] relative grid h-full">
              <h2 className="col-span-2 text-display-desktop-h4 sm:text-display-desktop-h3 mb-4 md:mb-6 font-flecha">
                Protect yourself from online threats
              </h2>
              <p className="col-span-2 text-mobile-h4 sm:text-desktop-h5 font-poppins font-semibold">
                Traveling? On an unprotected or public Wi-Fi network? No
                worries. Brave VPN blocks trackers and encrypts every connection
                to the Web, on every app, even outside of Brave.
              </p>
            </div>
            <div className="card_modal card__contents_modal shadow-[10px_10px_0px_#ffede8,10px_10px_0px_2px_#1b1b1f] relative grid h-full">
              {" "}
              <h2 className="col-span-2 text-display-desktop-h4 sm:text-display-desktop-h3 mb-4 md:mb-6 font-flecha">
                Access your favorite content worldwide
              </h2>
              <p className="col-span-2 text-mobile-h4 sm:text-desktop-h5 font-poppins font-semibold">
                Brave VPN can help you access your favorite content no matter
                where you are in the world. Protected from bandwidth limitations
                and ISP speed throttling.
              </p>
            </div>
          </section>
        </div>
        <div className="col-span-full place-self-center grid-cols-layout grid w-full gap-x-8 relative before:absolute before:bottom-0 before:left-0 before:h-[85%] before:w-full before:bg-[#FF5705] mt-28">
          <div className=""></div>
          <div className="video-embed relative overflow-hidden card_video card__contents_video mb-10 sm:mb-14 lg:mb-20 [--card-padding:0]">
            <div className="h-0" style={{ paddingBottom: "56.2%" }}>
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-[-1px] w-full h-full border-0"
                src="https://player.vimeo.com/video/1020347710?dnt=1&amp;portrait=0&amp;title=0&amp;byline=0"
                title="Brave Leo: The Smart AI Assistant Right In Your Browser"
                allowFullScreen
                allow="autoplay"
              ></iframe>
              {!isPlaying && (
                <div className="video-overlay absolute left-0 top-0 h-full w-full bg-center bg-no-repeat bg-cover cursor-pointer">
                  <div
                    className="group play-video text-white no-underline text-8xl flex justify-center items-center transition-colors ease-in-out duration-300 absolute w-full h-full hover:bg-black/50"
                    title="Play Brave Leo: The Smart AI Assistant Right In Your Browser video"
                    onClick={playVideo}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      fill="none"
                      className="transition-filter duration-150 ease-linear group-hover:invert w-[20%] max-w-[128px]"
                    >
                      <rect
                        width="126"
                        height="126"
                        x="1"
                        y="1"
                        fill="#09090C"
                        stroke="#F5F5F7"
                        strokeWidth="2"
                        rx="15"
                      ></rect>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M64 99c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35Zm0-64.167c-16.083 0-29.167 13.084-29.167 29.167 0 16.082 13.084 29.167 29.167 29.167 16.082 0 29.167-13.085 29.167-29.167 0-16.083-13.085-29.167-29.167-29.167Zm-7.191 45.799 23.46-15.803a1 1 0 0 0 0-1.658l-23.46-15.803a1 1 0 0 0-1.559.83v31.604a1 1 0 0 0 1.559.83Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-full place-self-center grid-cols-layout grid w-full gap-x-8 bg-[#F0F0F4] pt-[2.5rem] sm:pt-[3.5rem] lg:pt-20 pb-20">
          <div></div>
          <div>
            <div className="flex gap-[42px]">
              <div className="min-[1280px]:w-5/12">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    index={index + 1}
                    open={open}
                    title={item.title}
                    toggleAccordion={toggleAccordion}
                    isFirst={index === 0}
                    isLast={index === accordionItems.length - 1}
                  >
                    {item.content}
                  </AccordionItem>
                ))}
              </div>
              <div className="hidden min-[1280px]:grid w-7/12 card_quote card__contents_quote_right p-0 overflow-hidden grid-cols-1 grid-rows-1 animation-container h-fit"></div>
            </div>
            <figure className="card_vpn_2 card_vpn_modal card-wrapper mt-40 bg-white relative">
              <figcaption className="card__contents_vpn_2 absolute top-[-68px] left-[33px]">
                <Image
                  src={AssetIcon.ibrowe}
                  alt="Firewall + VPN logo"
                  width={80}
                  className="[--icon-size:50px] md:[--icon-size:80px] m-[calc(var(--icon-size)/3.33)]"
                />
              </figcaption>
              <div className="pt-16">
                <h3 className="text-display-h3"></h3>
                <ul className="checklist text-mobile-h4 font-poppins font-semibold md:text-[1.75rem] [--checkbox-icon-offset:0.1rem]">
                  {checklistItems.map((item, index) => (
                    <li
                      key={index}
                      className="checked flex items-center gap-x-4"
                    >
                      <Image
                        src={AssetIcon.checkbox}
                        alt="check icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-span-full place-self-center grid-cols-layout grid w-full gap-x-8  bg-orange-20 border-t-2 border-b-2 border-[#1b1b1f]">
          <div className=""></div>
          <div className="flex flex-col gap-5 items-center py-16 px-12">
            <h2 className="text-display-h3 max-sm:!text-[40px] max-sm:!leading-[40px] text-center max-w-[25ch]">
              Try Brave Firewall + VPN now
            </h2>
            <button className=" bg-[#FF3A00] font-poppins text-white py-4 pl-6 pr-6 rounded-2xl text-[18px] leading-6 font-[600] hover:bg-[#CA2F0B] min-h-[60px] w-fit duration-300">
              <p>Get Brave + VPN</p>
            </button>
          </div>
        </div>
        <div className="col-span-full place-self-center grid-cols-layout w-full gap-x-8  bg-[#F0F0F4]">
          <div className=""></div>
          <section className="my-10 mx-4 lg:my-20 md:mx-[90px] lg:mx-[100px] xl:mx-[40px] 2xl:mx-[120px] 4xl:mx-[310px]">
            <h2 className="pb-6 text-3xl font-bold sm:text-4xl">
              FAQs about Brave VPN
            </h2>
            <div>
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  index={index}
                  totalItems={faqData.length}
                  question={item.question}
                  isActive={openIndexes.has(index)}
                  onClick={() => handleToggle(index)}
                >
                  {item.answer}
                </FaqItem>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
