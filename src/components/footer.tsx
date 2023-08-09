import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="pt-20 pb-5 border-t">
      <Link href="/" className="font-sans text-sm text-[#836FFF]">
        Privacy Policy
      </Link>
      <p className="font-sans text-sm text-[#7D7D7D]">© 2023 | All Rights reserved</p>
    </div>
  );
};

export default Footer;
