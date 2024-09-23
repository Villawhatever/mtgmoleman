"use client";
import Link from 'next/link';

export function Card({ ruling }) {
    return (
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {
                    <>
                        <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.ask}&rdquo;</h3>
                        <hr />
                        <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.answer}&rdquo;</h3>
                        <p>
                            {" "}
                            - {ruling.from} (<a href={ruling.source}>source</a>)
                        </p>
                        <p className="pt-2.5 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
                            <span className="text-sm italic">
                                Tag{ruling.tags.length > 1 ? "s" : ""}: 
                                { ruling.tags.map((tag, index) => (
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
