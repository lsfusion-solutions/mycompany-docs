import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';

function getExternalCompanyUrl(locale: string) {
  const base = 'https://mycompany.lsfusion.org';
  // en -> base, ru/pl -> base/ru or base/pl
  if (locale === 'ru' || locale === 'pl') return `${base}/${locale}`;
  return base;
}

export default function NavbarLogo(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const themeConfig = useThemeConfig();

  const navbar = themeConfig?.navbar ?? {};
  const title: string | undefined = navbar.title;
  const logo: any = navbar.logo ?? {};

  const logoSrc =
    colorMode === 'dark' && logo.srcDark ? logo.srcDark : logo.src;
  const logoUrl = logoSrc ? useBaseUrl(logoSrc) : undefined;

  const href = getExternalCompanyUrl(i18n.currentLocale);

  const img = logoUrl ? (
    <img
      className={clsx('navbar__logo', logo.className)}
      src={logoUrl}
      alt={logo.alt ?? title ?? 'Logo'}
      width={logo.width}
      height={logo.height}
      style={logo.style}
    />
  ) : null;

  return (
    <Link
      className="navbar__brand"
      to={href}
      target="_self"
      rel="noopener noreferrer"
    >
      {img}
      {title ? (
        <b className="navbar__title text--truncate">{title}</b>
      ) : null}
    </Link>
  );
}
