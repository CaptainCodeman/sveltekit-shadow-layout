/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  return {
    body: {
      value: 'root value'
    }
  };
}