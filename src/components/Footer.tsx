const Footer = () => {
    return (
        <footer
        className="w-full absolute bottom-0 px-6 py-4 flex justify-between items-center"
        style={{
            backgroundColor: "var(--color-foreground)",
            color: "var(--color-background)",
        }}
        >
        <p className="text-sm">
            &copy; {new Date().getFullYear()} Anna Karlsen. All rights reserved.
        </p>
        <p className="text-sm">
            Made with{" "}
            <span role="img" aria-label="heart">
            ❤️
            </span>{" "}
            using{" "}
            <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] w-full mb-0 hover:underline"
            >
            Next.js
            </a>
        </p>
        </footer>
    );
}

export default Footer;