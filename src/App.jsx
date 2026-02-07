import { useState } from "react";

export default function ValentinesPage() {
  const messages = [
    "Błąd 😅 wybierz jeszcze raz",
    "Serio? Spróbuj ponownie 🖤",
    "Nie tym razem 😏",
    "Hmm… system odrzucił odpowiedź 💔",
    "Okej, teraz już wiesz co kliknąć 😘",
  ];

  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-pink-400 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Jesteś już na zawsze moja mysza💖</h1>

        <div className="w-64 h-64 bg-pink-900/30 border-2 border-dashed border-pink-400 rounded-xl flex items-center justify-center mb-4">
          <span className="text-pink-300">📸 Tu wstaw zdjęcie</span>
        </div>

        <p className="text-xl font-bold">Do zobaczenia w wieczór zakochanych [14.02] 🌙✨</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-pink-400 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Patrycja… czy zostałabyś moją walentynką? 💕
      </h1>

      {noCount > 0 && noCount <= messages.length && (
        <p className="mb-6 text-pink-300 italic">{messages[noCount - 1]}</p>
      )}

      <div className="flex gap-6">
        <button
          onClick={() => setAccepted(true)}
          className="px-8 py-3 rounded-full bg-pink-500 text-black font-semibold hover:bg-pink-400 transition"
        >
          Tak 💖
        </button>

        {noCount < messages.length ? (
          <button
            onClick={handleNoClick}
            className="px-8 py-3 rounded-full border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition"
          >
            Nie 😅
          </button>
        ) : (
          <button
            onClick={() => setAccepted(true)}
            className="px-8 py-3 rounded-full bg-pink-500 text-black font-semibold hover:bg-pink-400 transition"
          >
            Tak 💖
          </button>
        )}
      </div>
    </div>
  );
}
