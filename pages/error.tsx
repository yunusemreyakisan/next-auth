import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Giriş Başarısız</h2>
        <p className="text-gray-700 mb-6">
          Maalesef, giriş işleminiz başarısız oldu. Lütfen bilgilerinizi kontrol
          edin.
        </p>
        <a
          href="/login"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Tekrar Dene
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
