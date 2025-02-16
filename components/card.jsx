"use client";
import Link from 'next/link';

function formatSource(source) {
  if (!source.includes("|")) {
    return (<a href={source}>source</a>);
  }
  const split = source.split("|");
  return (<><a href={split[0]}>{split[1]}</a> | <a href={split[2]}>(Invite link)</a></>);
}

export function Card({ ruling }) {
  return (
    <div className="bg-white card text-neutral-600">
      <div className="card-body">
        {
          <>
            {ruling.ask &&
              <>
                <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.ask}&rdquo;</h3>
                <hr />
              </>
            }
            <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.answer}&rdquo;</h3>
            <p>
              {" "}
              - {ruling.from} ({formatSource(ruling.source)})
            </p>
            <p className="pt-2.5 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
              <span className="text-sm italic">
                Tag{ruling.tags.length > 1 ? "s" : ""}:
                {ruling.tags
                  .sort((a, b) => a.localeCompare(b))
                  .map((tag, index) => (
                    [
                      index > 0 && " | ",
                      <Link href={{
                        pathname: "/",
                        query: {
                          tag: tag
                        }
                      }} key={index}>{tag}</Link>
                    ]
                  ))}
              </span>
            </p>
          </>
        }
      </div>
    </div>
  );
}
