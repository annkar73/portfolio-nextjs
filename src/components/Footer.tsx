const Footer = () => {
    return (
        <footer
        className="w-full px-6 py-4 flex justify-between items-center"
        style={{
            backgroundColor: "var(--color-foreground)",
            color: "var(--color-background)",
        }}
        >
        <p className="text-sm">
            &copy; {new Date().getFullYear()} Anna Karlsen. All rights reserved.
        </p>
       
        </footer>
    );
}

export default Footer;