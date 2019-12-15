export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Ad',
        description: 'A standard ad.',
        file: 'StandardAd',
      },
      {
        title: 'Common Units',
        description: 'An advertisement can appear in common ad unit sizes.',
        info: 'These additional examples use the testvariation to appear on the page. The Ad component is best used as a wrapper for third party ad network content.',
        file: 'CommonUnitsAd',
      },
      {
        title: 'Mobile',
        description: 'An ad can use common mobile ad sizes.',
        info: 'Mobile ads will automatically only appear on mobile browser viewports.',
        file: 'MobileAd',
      },
      {
        title: 'Button',
        description: 'An ad can use button ad unit size.',
        file: 'ButtonAd',
      },
      {
        title: 'Skyscraper',
        description: 'An ad can use skyscraper ad unit size.',
        file: 'SkyscraperAd',
      },
      {
        title: 'Banner',
        description: 'An ad can use banner ad unit size.',
        file: 'BannerAd',
      },
      {
        title: 'Leaderboards',
        description: 'An ad can use leaderboard ad unit size.',
        file: 'Leaderboards',
      },
      {
        title: 'Panorama',
        description: 'An ad can use panorama ad unit size.',
        file: 'PanoramaAd',
      },
      {
        title: 'Netboard',
        description: 'An ad can use netboard ad unit size.',
        file: 'NetboardAd',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Centered',
        description: 'An advertisement can appear centered.',
        file: 'CenteredAd',
      },
      {
        title: 'Test',
        description: 'A advertisement can be formatted to help verify placement.',
        info: 'You can adjust the text displayed for your test ad placement by changing the value of the prop <code>test</code>',
        file: 'TestAd',
      },
    ],
  },
];
