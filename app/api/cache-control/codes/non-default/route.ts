import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({ message: `Hello from Next.js! ${Math.random()}` }),
    {
      status: Number(request.nextUrl.searchParams.get("code")),
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
