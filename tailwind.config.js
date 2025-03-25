import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});