import { useQuery } from "@tanstack/react-query";
import { getProgramList } from "./api/programs";

export const Programs = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["programs"],
    queryFn: ({ signal }) => getProgramList(signal),
  });

  if (isPending) return "Loading...";
  if (isError) return error.message;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
