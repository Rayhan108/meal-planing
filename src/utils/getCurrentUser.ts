'use server'
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers"; // Use next/headers to access cookies

// Define a custom type for the JWT payload, including the 'role' property
interface CustomJwtPayload extends JwtPayload {
  role: string;
}

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  console.log("Access token from cookies:", accessToken);

  let decodedData: CustomJwtPayload | null = null;

  if (accessToken) {
    try {
      // Decode the JWT and cast it to CustomJwtPayload
      decodedData = jwtDecode<CustomJwtPayload>(accessToken);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return decodedData;
};
