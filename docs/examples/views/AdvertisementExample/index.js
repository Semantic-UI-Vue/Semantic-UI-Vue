import StandardAdvertisement from './StandardAd.example';
import CommonUnits from './CommonUnitsAd.example';
import MobileAd from './MobileAd.example';
import ButtonAd from './ButtonAd.example';
import SkyscraperAd from './SkyscraperAd.example';
import BannerAd from './BannerAd.example';
import LeaderboardsAd from './Leaderboards.example';
import PanoramaAd from './PanoramaAd.example';
import NetboardAd from './NetboardAd.example';
import CenteredAd from './CenteredAd.example';
import TestAd from './TestAd.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Ad',
        description: 'A standard ad.',
        component: StandardAdvertisement,
      },
      {
        title: 'Common Units',
        description: 'An advertisement can appear in common ad unit sizes.',
        info: 'These additional examples use the testvariation to appear on the page. The Ad component is best used as a wrapper for third party ad network content.',
        component: CommonUnits,
      },
      {
        title: 'Mobile',
        description: 'An ad can use common mobile ad sizes.',
        info: 'Mobile ads will automatically only appear on mobile browser viewports.',
        component: MobileAd,
      },
      {
        title: 'Button',
        description: 'An ad can use button ad unit size.',
        component: ButtonAd,
      },
      {
        title: 'Skyscraper',
        description: 'An ad can use skyscraper ad unit size.',
        component: SkyscraperAd,
      },
      {
        title: 'Banner',
        description: 'An ad can use banner ad unit size.',
        component: BannerAd,
      },
      {
        title: 'Leaderboards',
        description: 'An ad can use leaderboard ad unit size.',
        component: LeaderboardsAd,
      },
      {
        title: 'Panorama',
        description: 'An ad can use panorama ad unit size.',
        component: PanoramaAd,
      },
      {
        title: 'Netboard',
        description: 'An ad can use netboard ad unit size.',
        component: NetboardAd,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Centered',
        description: 'An advertisement can appear centered.',
        component: CenteredAd,
      },
      {
        title: 'Test',
        description: 'A advertisement can be formatted to help verify placement.',
        info: 'You can adjust the text displayed for your test ad placement by changing the value of the prop <code>test</code>',
        component: TestAd,
      },
    ],
  },
];
