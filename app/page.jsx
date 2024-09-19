import { RulingCard } from 'components/ruling-card';
import data from 'data/magic.json';
import Link from 'next/link';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            {console.log(data)}
            {data.forEach(ruling => {
                    <h1>Yo what the fuck {ruling.from}</h1>
                    // <section className="flex flex-col items-start gap-3 sm:gap-4">
                    //     <RulingCard ruling={ruling} />
                    //     <h1>{ruling.from}</h1>
                    // </section>
                })
            }
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                
                <RulingCard ruling={data[0]} />
                <h1 className="mb-0">Netlify Platform Starter - Next.js</h1>
                <p className="text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </main>
    );
}
