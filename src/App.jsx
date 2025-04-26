import { useState } from "react";
import "./App.css";
import { getCreditCardBrand as validatorCreditCard } from "./utils/validatorCreditCard.js";

const App = () => {
  const [inputCreditCard, setInputCreditCard] = useState("");
  const [resultVerification, setResultVerification] = useState("");

  const validateCreditCard = (e) => {
    e.preventDefault();
    const numberWithoutWhiteSpaces = inputCreditCard.replace(/ /g, "");

    const result = validatorCreditCard(numberWithoutWhiteSpaces);
    setResultVerification(result);
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-gray-100">
      <form
        action="/"
        className="bg-white flex flex-col gap-2 p-4 shadow-md rounded-md"
        onSubmit={validateCreditCard}
      >
        <label htmlFor="input-number-credit-card">
          Insira o número do cartão de crédito
        </label>
        <input
          type="text"
          name=""
          id="input-number-credit-card"
          onChange={(e) => setInputCreditCard(e.target.value)}
          className="p-2 w-[300px] border-2 border-gray-300 rounded-md"
          onFocus={(e) => e.target.select()}
          placeholder="6062 8298 3018 8367"
        />
        <p
          id="resultVerification"
          className={`bold ${
            resultVerification.success ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="text-center">
            {resultVerification.success ? (
              <div>
                <img
                  src={`/src/assets/${resultVerification.icon}`}
                  alt={resultVerification.title}
                  className="w-6 h-6 inline-block mr-2"
                  height="48px"
                  width="auto"
                />
                <span>Este cartão é {resultVerification.title}</span>
              </div>
            ) : (
              <div>
                <img
                  src="/src/assets/error.png"
                  alt="ERROR ICON"
                  className="w-6 h-6 inline-block mr-2"
                  height="48px"
                  width="auto"
                />

                <span>Este número é inválido.</span>
              </div>
            )}
          </span>
        </p>
        <button className="mt-10" onClick={validateCreditCard}>
          Verificar
        </button>
      </form>

      <section className="absolute bottom-2 text-center">
        <p>Este projeto faz parte dos meus estudos sobre Copilot.</p>
        <p>
          Para gerar números aleatórios e válidos de cartão de crédito, visite{" "}
          <a
            href="https://www.4devs.com.br/gerador_de_numero_cartao_credito"
            target="_blank"
          >
            4dev
          </a>
          .
        </p>
      </section>
    </section>
  );
};
export default App;
