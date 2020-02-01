export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Ad',
        description: 'A standard ad.',
        file: 'StandardAd',
      },
      {
        name: 'Common Units',
        description: 'An advertisement can appear in common ad unit sizes.',
        info:
          'These additional examples use the testvariation to appear on the page. The Ad component is best used as a wrapper for third party ad network content.',
        file: 'CommonUnitsAd',
      },
      {
        name: 'Mobile',
        description: 'An ad can use common mobile ad sizes.',
        info:
          'Mobile ads will automatically only appear on mobile browser viewports.',
        file: 'MobileAd',
      },
      {
        name: 'Button',
        description: 'An ad can use button ad unit size.',
        file: 'ButtonAd',
      },
      {
        name: 'Skyscraper',
        description: 'An ad can use skyscraper ad unit size.',
        file: 'SkyscraperAd',
      },
      {
        name: 'Banner',
        description: 'An ad can use banner ad unit size.',
        file: 'BannerAd',
      },
      {
        name: 'Leaderboards',
        description: 'An ad can use leaderboard ad unit size.',
        file: 'Leaderboards',
      },
      {
        name: 'Panorama',
        description: 'An ad can use panorama ad unit size.',
        file: 'PanoramaAd',
      },
      {
        name: 'Netboard',
        description: 'An ad can use netboard ad unit size.',
        file: 'NetboardAd',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Centered',
        description: 'An advertisement can appear centered.',
        file: 'CenteredAd',
      },
      {
        name: 'Test',
        description:
          'A advertisement can be formatted to help verify placement.',
        info:
          'You can adjust the text displayed for your test ad placement by changing the value of the prop <code>test</code>',
        file: 'TestAd',
      },
    ],
  },
];
