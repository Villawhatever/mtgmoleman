import { RulingCard } from 'components/ruling-card';
import data from 'data/magic.json';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                {data.forEach(ruling => {
                        <RulingCard ruling={ruling} />
                    })
                }
                <RulingCard ruling={data[0]} />
            </section>
        </main>
    );
}
