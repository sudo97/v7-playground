export async function GET(
  request: Request,
  { params }: { params: { param: "true" | "false" } }
) {
  return new Response(
    JSON.stringify({ message: `Hello from Next.js! param: ${params.param}` }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, max-age=420, s-maxage=69",
        "my-custom-header": "hello world",
      },
    }
  );
}
