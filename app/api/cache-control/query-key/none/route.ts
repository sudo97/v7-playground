import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({
      message: `Hello from Next.js! param: ${request.nextUrl.searchParams}`,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
