export default function LetterCard({ letter }: { letter: string }) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="px-6 py-8 sm:py- lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            Chữ
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            {letter}
          </h1>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
