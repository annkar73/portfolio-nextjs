'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer
            className="w-full px-6 py-4 flex justify-between items-center bg-[var(--color-foreground)] text-[var(--color-background)]"
        >
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Anna Karlsen. All rights reserved.
            </p>

            <div className="flex bg-white p-2 rounded-full">
                <a
                    href="https://www.linkedin.com/in/annakarlsen/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="rounded-full cursor-pointer"
                    />
                </a>

                <a
                    href="https://www.github.com/annkar73/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4"
                >
                    <Image
                        src="/images/github.png"
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="rounded-full cursor-pointer"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
