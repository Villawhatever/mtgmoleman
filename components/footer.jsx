import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <Link
                    href="https://github.com/Villawhatever/mtgmoleman"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={githubLogo} alt="GitHub" className="w-7" />
                </Link>
            </p>
        </footer>
    );
};
