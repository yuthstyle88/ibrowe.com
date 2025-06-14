'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LinuxInstallation() {
  const t = useTranslations('linux.installation');

  return (
    <section className="pricing-comparison">
      <div className="container-16">
        <h1 className="heading-23">{t('title')}</h1>
        <div className="getibrowe">
          <div className="ibrowe-on-linux">
            <h2 className="pricing-title">
              <code className="code">
                curl -fsS https://dl.ibrowe.com/install.sh | sh
              </code>
            </h2>
          </div>
        </div>
      </div>
      <div className="container-16">
        <p className="paragraph-9">
          <Link href="https://dl.ibrowe.com/install.sh" target="_blank">{t('viewSource')}</Link> {t('verifySignature')}
        </p>
        <p className="paragraph-9">
          <Link href="#release">{t('channels.release')}</Link> <Link href="#beta">{t('channels.beta')}</Link> <Link href="#nightly">{t('channels.nightly')}</Link>
        </p>
        <p className="paragraph-9">
          {t('systemRequirements')}
        </p>
        <p className="paragraph-9">
          {t('signingKeys')}
        </p>

        <h2 id="release" className="paragraph-9-copy">{t('channels.release')}</h2>
        <p className="paragraph-11">
          {t('channels.releaseDescription')}
        </p>

        <h2 id="debian" className="paragraph-9-copy">{t('distributions.debian')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo apt install curl<br /><br />
              sudo curl -fsSLo /usr/share/keyrings/ibrowe-browser-archive-keyring.gpg https://dl.ibrowe.com/apt/ibrowe-browser-archive-keyring.gpg<br /><br />
              echo "deb [signed-by=/usr/share/keyrings/ibrowe-browser-archive-keyring.gpg] https://dl.ibrowe.com/apt/ stable main" | sudo tee /etc/apt/sources.list.d/ibrowe-browser-release.list<br /><br />
              sudo apt update<br /><br />
              sudo apt install ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.fedora')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo dnf install dnf-plugins-core<br /><br />
              sudo dnf config-manager --add-repo https://dl.ibrowe.com/rpm/ibrowe-browser.repo<br /><br />
              sudo dnf install ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.opensuse')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo zypper addrepo https://dl.ibrowe.com/rpm/ibrowe-browser.repo<br /><br />
              sudo zypper install ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.arch')}</h2>
        <p className="paragraph-11">
          {t('aurHelper')}
        </p>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              yay -S ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 id="flatpak" className="paragraph-9-copy">{t('distributions.flatpak')}</h2>
        <p className="paragraph-11">
          {t('flatpakDescription')}
        </p>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              flatpak install flathub com.ibrowe.Browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.snap')}</h2>
        <p className="paragraph-11">
          {t('snapDescription')}
        </p>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo snap install ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 id="beta" className="paragraph-9-copy">{t('channels.beta')}</h2>
        <p className="paragraph-11">
          {t('channels.betaDescription')}
        </p>

        <h2 className="paragraph-9-copy">{t('distributions.debian')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo apt install curl<br /><br />
              sudo curl -fsSLo /usr/share/keyrings/ibrowe-browser-beta-archive-keyring.gpg https://dl.ibrowe.com/apt/ibrowe-browser-beta-archive-keyring.gpg<br /><br />
              echo "deb [signed-by=/usr/share/keyrings/ibrowe-browser-beta-archive-keyring.gpg] https://dl.ibrowe.com/apt/ beta main" | sudo tee /etc/apt/sources.list.d/ibrowe-browser-beta.list<br /><br />
              sudo apt update<br /><br />
              sudo apt install ibrowe-browser-beta
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.fedora')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo dnf install dnf-plugins-core<br /><br />
              sudo dnf config-manager --add-repo https://dl.ibrowe.com/rpm/ibrowe-browser-beta.repo<br /><br />
              sudo dnf install ibrowe-browser-beta
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.opensuse')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo zypper addrepo https://dl.ibrowe.com/rpm/ibrowe-browser-beta.repo<br /><br />
              sudo zypper install ibrowe-browser-beta
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.arch')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              yay -S ibrowe-browser-beta
            </code>
          </h2>
        </div>

        <h2 id="nightly" className="paragraph-9-copy">{t('channels.nightly')}</h2>
        <p className="paragraph-11">
          {t('channels.nightlyDescription')}
        </p>

        <h2 className="paragraph-9-copy">{t('distributions.debian')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo apt install curl<br /><br />
              sudo curl -fsSLo /usr/share/keyrings/ibrowe-browser-nightly-archive-keyring.gpg https://dl.ibrowe.com/apt/ibrowe-browser-nightly-archive-keyring.gpg<br /><br />
              echo "deb [signed-by=/usr/share/keyrings/ibrowe-browser-nightly-archive-keyring.gpg] https://dl.ibrowe.com/apt/ nightly main" | sudo tee /etc/apt/sources.list.d/ibrowe-browser-nightly.list<br /><br />
              sudo apt update<br /><br />
              sudo apt install ibrowe-browser-nightly
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.fedora')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo dnf install dnf-plugins-core<br /><br />
              sudo dnf config-manager --add-repo https://dl.ibrowe.com/rpm/ibrowe-browser-nightly.repo<br /><br />
              sudo dnf install ibrowe-browser-nightly
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.opensuse')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo zypper addrepo https://dl.ibrowe.com/rpm/ibrowe-browser-nightly.repo<br /><br />
              sudo zypper install ibrowe-browser-nightly
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.arch')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              yay -S ibrowe-browser-nightly
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.github')}</h2>
        <p className="paragraph-11">
          {t('githubDescription')}
        </p>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              # Download the latest release from GitHub<br />
              # https://github.com/ibrowe/browser/releases
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.unofficial')}</h2>
        <p className="paragraph-11">
          {t('unofficialDescription')}
        </p>

        <h2 className="paragraph-9-copy">{t('distributions.manjaro')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo pacman -S ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('distributions.solus')}</h2>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              sudo eopkg install ibrowe-browser
            </code>
          </h2>
        </div>

        <h2 className="paragraph-9-copy">{t('troubleshooting.title')}</h2>
        <p className="paragraph-11">
          {t('troubleshooting.description')}
        </p>
        <div className="ibrowe-on-linux">
          <h2 className="pricing-title">
            <code className="code">
              {t('troubleshooting.commands')}
            </code>
          </h2>
        </div>
      </div>
    </section>
  );
} 