import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url("/curs.png") 3 3, auto',
        pointer: 'url("/favicon.ico") 3 3, pointer',
        // text: 'url("/favicon.ico") 3 3, text'
      }
    },
  },
  plugins: [],
});