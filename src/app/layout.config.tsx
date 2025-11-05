import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { siteConfig } from '../../site.config';


export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">

        <img
          src="/images/logo_zhapirak.png"
          alt={siteConfig.shortName}
          className="w-8 h-8"
        />

        <span className="font-semibold">{siteConfig.shortName}</span>
      </div>
    ),
  },


  links: [
    {
      text: 'Главная',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Документы',
      url: '/projects',
      active: 'nested-url',
    },
   
  ],
};
