import LetterCard from "../components/LetterCard";
import LetterExampleCard from "../components/LetterExampleCard";
import { useParams } from "react-router-dom";
import { alphabet } from "../data/alphabet";

export default function LetterPage() {
const { letterId } = useParams<{ letterId: string }>();
const letterData = alphabet[letterId || "A"];

  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto">
        <LetterCard letter={letterData.letter} />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            
            <LetterExampleCard example={letterData.examples[0]} />
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>

          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <LetterExampleCard example={letterData.examples[1]} />
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <LetterExampleCard example={letterData.examples[2]}  />
            
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <LetterExampleCard example={letterData.examples[3]} />
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <LetterExampleCard example={letterData.examples[4]} />
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
