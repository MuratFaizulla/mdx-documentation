import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { siteConfig } from '../../site.config';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/projects/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src={'/LOGO_ZHAPIRAK.png'}
          alt={siteConfig.shortName}
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <span className="font-semibold">{siteConfig.shortName}</span>
      </div>
    ),
  },


  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
  ],
};
