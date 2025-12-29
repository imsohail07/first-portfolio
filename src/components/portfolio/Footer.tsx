const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sohail Shirazi. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion and ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;