import { useState } from "react";

export default function RootPage() {
    return (
        <div className="grid place-content-center min-h-screen">
            <Cards />
        </div>
    );
}
function Cards() {
    const [isFull, setIsFull] = useState(true);
    return (
        <section className="relative size-32 md:size-52 group p-4">
            <div
                className={`${"size-32 md:size-52 bg-red-300 grid place-content-center text-4xl rounded-3xl absolute top-0 left-0 transition-transform duration-500 delay-200"}
                     ${isFull ? "group-hover:-translate-y-[110%]" : "group-hover:-translate-y-10/12"}`}
            >
                <img src="/angry.png" alt="angry" className="object-contain" />
            </div>
            <div
                className={`${"size-32 md:size-52 bg-yellow-300 grid place-content-center text-4xl rounded-3xl absolute top-0 left-0 transition-transform duration-500 delay-200 origin-bottom-left "}
                      ${
                          isFull
                              ? "group-hover:-translate-x-[110%] group-hover:-translate-y-25"
                              : "group-hover:-translate-x-12 group-hover:-rotate-45"
                      }`}
            >
                <img src="/hat.png" alt="hat" className="object-contain" />
            </div>
            <div
                className={`${"size-32 md:size-52 bg-blue-300 grid place-content-center text-4xl rounded-3xl absolute top-0 left-0 transition-transform duration-500 delay-200 origin-bottom-right "}
                     ${
                         isFull
                             ? "group-hover:translate-x-[110%] group-hover:-translate-y-25"
                             : "group-hover:translate-x-12 group-hover:rotate-45"
                     }`}
            >
                <img src="/face.png" alt="face" className="object-contain" />
            </div>
            <div
                onClick={() => setIsFull((e) => !e)}
                onMouseLeave={() => setIsFull(false)}
                className={`${"size-32 md:size-52 bg-orange-300 grid place-content-center text-4xl rounded-3xl absolute top-0 left-0 transition-transform duration-500 delay-200"}`}
            >
                <img src="/monkey.png" alt="monkey" className="object-contain" />
            </div>
        </section>
    );
}
