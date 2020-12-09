module.exports = {
  purge: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  future: {
    purgeLayersByDefault: true,
  },
  // darkMode: 'media', // 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {},
  },
  variants: {
    opacity: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
};
