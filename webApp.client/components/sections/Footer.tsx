import { Wrench } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Wrench className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Auto Care</span>
      </div>
      <div className="text-sm">© 2023 Auto Care. All rights reserved.</div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-primary">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-primary">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
