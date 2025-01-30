import { ContextAlert } from "components/context-alert";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <section className="flex flex-col items-start gap-3 sm:gap-4">
        <ContextAlert />
        <h1 className="mb-0">What is this?</h1>
        <p className="text-lg">This is a mostly-manual effort to collect &quot;official&quot; unofficial Magic: the Gathering rules/policy rulings in a single place. You know, the stuff that #WotCStaff post on Twitter. That sort of thing.</p>
        <p className="text-lg">From <b>Villa</b>, with love and grumpiness that this project needs to exist.</p>
        <p className="text-lg">Am I missing something that you think should be here? Email me at judgevillawhatever@gmail.com or <a href="https://github.com/Villawhatever/mtgmoleman/issues">open an issue on Github</a>.</p>
        <h1 className="mb-0">&quot;Moleman&quot;?</h1>
        <p className="text-lg">I asked someone what the opposite of a bird was and they said &quot;mole.&quot;</p>
      </section>
    </main>
  );
}
