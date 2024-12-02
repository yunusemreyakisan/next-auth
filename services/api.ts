export interface LoginCredentials {
  email: string;
  password: string;
  sessions: {
    unique_id: string;
  };
}

//* Login Method
export const loginUser = async (payload: LoginCredentials) => {
  const response = await fetch("http://localhost:3030/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Giriş başarısız");
  }

  return response.json();
};
