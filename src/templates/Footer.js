
import { BUSINESS_NAME } from "../static/stringConstants";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>
        &copy; {new Date().getFullYear()} | {BUSINESS_NAME}
      </p>
    </footer>
  );
}
