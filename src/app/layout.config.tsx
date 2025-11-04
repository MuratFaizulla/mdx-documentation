import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { siteConfig } from '../../site.config';

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
     
<img
  src="/logo_zhapirak.png"
  alt={siteConfig.shortName}
  className="w-8 h-8"
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
