import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestMoment, setBestMoment] = useState("");
  const [improvement, setImprovement] = useState("");
  const [report, setReport] = useState("");
  const [showResult, setShowResult] = useState(false); // controla se mostra a tela do resultado

  const bestMomentOptions = [
    "A conversa",
    "As compras de livros",
    "As risadas",
    "A vibe do rolê",
    "O abraço final",
    "Os olhares",
  ];

  const improvementOptions = [
    "Chegar mais cedo",
    "Falar menos do ex",
    "Escolher melhor o lugar",
    "Não mexer no celular",
    "Dar mais risada",
    "Nada, foi perfeito!",
  ];

  const stars = [1, 2, 3, 4, 5];

  function gerarRelatorio() {
    let vibe =
      score >= 4
        ? "TOP!"
        : score >= 2
        ? "Ok, mas bora melhorar 😂"
        : "Fail cômico kkk";
    let resumo = `⭐ Nota: ${score}/5\n\nMelhor momento: ${bestMoment}\n\nPonto a melhorar: ${improvement}\n\nResumo: ${vibe}`;
    setReport(resumo);
    setShowResult(true); // troca pra tela de resultado
  }

  function resetarAvaliacao() {
    setScore(0);
    setBestMoment("");
    setImprovement("");
    setReport("");
    setShowResult(false);
  }

  if (showResult) {
    // Tela do resultado
    return (
      <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4">
        {/* Aviso de não salvamento */}
        <div className="mb-6 w-full max-w-md">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg shadow">
            <span className="font-bold">Atenção:</span> Essas respostas não são
            salvas em lugar nenhum, é só pra brincar por enquanto!
          </div>
        </div>
        {/* Relatório destacado */}
        <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md flex flex-col items-center border-4 border-purple-300">
          <h2 className="font-bold mb-4 text-2xl text-purple-700">
            Seu Relatório
          </h2>
          <pre className="whitespace-pre-wrap mb-6 text-gray-900 text-lg font-bold text-center leading-relaxed">
            {report}
          </pre>
          <button
            className="bg-purple-600 text-white rounded px-4 py-2 font-semibold hover:bg-purple-800 transition"
            onClick={resetarAvaliacao}
          >
            Avaliar Novamente
          </button>
        </div>
      </div>
    );
  }

  // Tela da avaliação
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-3">
        <h1 className="text-2xl font-bold mb-2">Avaliação do Encontro</h1>
        {/* Estrelas */}
        <div className="flex items-center gap-1 mb-2">
          {stars.map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setScore(star)}
              className="focus:outline-none"
            >
              <svg
                className={`w-8 h-8 ${
                  star <= score ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.383 2.457a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.383-2.457a1 1 0 00-1.175 0l-3.383 2.457c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-600 mb-2">Nota: {score} / 5</span>
        {/* Melhor momento - Opções */}
        <div>
          <label className="font-semibold">Melhor momento:</label>
          <div className="flex flex-col gap-1 mt-1">
            {bestMomentOptions.map((option) => (
              <label
                key={option}
                className={`p-2 rounded cursor-pointer border ${
                  bestMoment === option
                    ? "bg-purple-200 border-purple-500 font-semibold"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  className="mr-2 accent-purple-600"
                  name="bestMoment"
                  value={option}
                  checked={bestMoment === option}
                  onChange={() => setBestMoment(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        {/* O que pode melhorar - Opções */}
        <div>
          <label className="font-semibold">O que pode melhorar?</label>
          <div className="flex flex-col gap-1 mt-1">
            {improvementOptions.map((option) => (
              <label
                key={option}
                className={`p-2 rounded cursor-pointer border ${
                  improvement === option
                    ? "bg-yellow-100 border-yellow-500 font-semibold"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  className="mr-2 accent-yellow-600"
                  name="improvement"
                  value={option}
                  checked={improvement === option}
                  onChange={() => setImprovement(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button
          className="bg-purple-600 text-white rounded p-2 font-semibold hover:bg-purple-800 mt-2"
          onClick={gerarRelatorio}
        >
          Gerar Relatório
        </button>
      </div>
    </div>
  );
}
