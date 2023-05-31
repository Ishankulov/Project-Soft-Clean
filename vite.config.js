import { defineConfig } from 'vite';
import fonts from 'vite-plugin-fonts';

export default defineConfig({
  // ...other configuration options
  plugins: [
    fonts({
      google: {
        families: [
          // Specify the Google Fonts you want to import
          'Poppins:ital,wght@0,400;0,700;1,400;1,700',
        ],
      },
    }),
  ],
});