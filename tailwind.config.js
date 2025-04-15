import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url("/curs.png") 3 3, pointer',
        pointer: 'url("/curs.png") 3 3, pointer',
      }
    },
  },
  plugins: [],
});