import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
        font-medium text-lg py-8 flex items-center justify-evenly bg-richblue-700 h-full text-brown-5 
        "
    >
      <span>{new Date().getFullYear()}&copy; All Rights Reserved. </span>
      <div className="flex items-center">
        Build With <span className="text-primary text-2xl px-1">&#9825;</span>
        by&nbsp;
        <Link href="/" className="underline underline-offset-2">
          DotDevs
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
