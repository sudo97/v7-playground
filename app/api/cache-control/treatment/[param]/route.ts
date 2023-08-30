export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      param:
        | "overwrite"
        | "pass"
        | "if_missing-true"
        | "if_missing-false"
        | "remove";
    };
  }
) {
  return new Response(
    JSON.stringify({ message: `Hello from Next.js! param: ${params.param}` }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        [params.param === "if_missing-false"
          ? "hakuna-matata"
          : "cache-control"]: "public, max-age=420, s-maxage=69",
      },
    }
  );
}
