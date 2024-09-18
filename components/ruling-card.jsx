'use client';

export function RulingCard({ ruling }) {
    return (
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {
                    <>
                        <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.ask}&rdquo;</h3>
                        <hr />
                        <h3 className="text-xl text-neutral-900 font-bold">&ldquo;{ruling.answer}&rdquo;</h3>
                        <p>
                            {' '}
                            - {ruling.from} (<a href={ruling.source}>source</a>)
                        </p>
                        {/* <p className="pt-2.5 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
                            <span className="text-sm italic">
                                loaded at {time}. <a href={quote.dataSource}>Original data source.</a>
                            </span>
                        </p> */}
                    </>
                }
            </div>
        </div>
    );
}
