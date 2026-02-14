import type { LetterExample } from "../data/alphabet";

export default function LetterExampleCard({ example }: { example: LetterExample }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
      <img
        alt={example.word}
        src={example.image}
        className="h-80 w-full object-contain object-center"
      />
      <div className="p-10 pt-4">
        <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
          Word: {example.word}
        </h3>
        <p className="text-sm/4 font-semibold text-indigo-600">
          Pronunciation: {example.pronunciation}
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
          Meaning: {example.meaning}
        </p>
      </div>
    </div>
  );
}
