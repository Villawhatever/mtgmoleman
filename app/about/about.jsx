import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <p className="text-lg">From <b>Villa</b>, with love and grumpiness that this project needs to exist.</p>
                <p className="text-lg">Am I missing something? Email me at judgevillawhatever@gmail.com</p>
            </section>
        </main>
    );
}
