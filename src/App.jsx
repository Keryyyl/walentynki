import { useState, useEffect } from "react";

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

  const yesButtonSize = noCount * 15 + 16;

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-pink-400 text-center px-4 overflow-hidden relative">
        {/* Pływające serca w tle */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </div>
        ))}

        <h1 className="text-4xl md:text-6xl font-bold mb-10 animate-pulse drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]">
          Jesteś już na zawsze moja! 💖
        </h1>

        <div className="relative group">
          {/* Animowane krążące serca wokół zdjęcia */}
          <div className="absolute -inset-8 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-[spin_4s_linear_infinite] origin-[0_150px] md:origin-[0_220px]">
              <span className="text-3xl">❤️</span>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-[spin_6s_linear_infinite_reverse] origin-[0_150px] md:origin-[0_220px]">
              <span className="text-2xl">💖</span>
            </div>
          </div>

          {/* Ramka ze zdjęciem */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-pink-900/20 border-2 border-pink-500 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)]">
            <img 
              src="/walentynki.jpg" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              alt="Walentynka"
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl font-semibold tracking-wide italic">
            Do zobaczenia 14.02 🌙✨
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="animate-ping">💗</span>
            <span className="animate-ping [animation-delay:0.2s]">💗</span>
            <span className="animate-ping [animation-delay:0.4s]">💗</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4 overflow-hidden">
      <div className="z-10 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Patrycja… <br/>
          <span className="text-pink-500">czy zostaniesz moją walentynką?</span> 💕
        </h1>

        {noCount > 0 && (
          <p className="mb-8 text-pink-300 animate-bounce font-medium">
            {messages[Math.min(noCount - 1, messages.length - 1)]}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => setAccepted(true)}
            style={{ fontSize: `${yesButtonSize}px` }}
            className="px-8 py-4 rounded-full bg-pink-600 text-white font-bold shadow-[0_0_20px_rgba(219,39,119,0.5)] hover:bg-pink-500 transition-all active:scale-95"
          >
            TAK 💖
          </button>

          {noCount < messages.length && (
            <button
              onClick={handleNoClick}
              className="px-6 py-2 rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              Nie 😅
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
