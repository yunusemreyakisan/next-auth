import React from "react";

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Giriş Başarılı!</h2>
        <p className="text-gray-700 mb-6">
          Tebrikler, giriş işleminiz başarıyla gerçekleşti.
        </p>
        <a
          href="/login"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Login'e dön
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
