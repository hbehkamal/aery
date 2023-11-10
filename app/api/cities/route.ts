import { getData } from "./service";

export const GET = async () => {
  const { data } = getData();

  const result = {
    data,
  };

  return new Response(JSON.stringify(result), { status: 200 });
};
