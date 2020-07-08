import { Configuration } from 'webpack'

interface IS<T = Partial<Configuration>> {
  stories: string[]
  addons: string[]
}

export default {
  stories: ['../__stories__/*.story.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
  ],
} as IS
