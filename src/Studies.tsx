import { useQuery } from "@tanstack/react-query";
import { getStudiesList } from "./api/studies";

export const Studies = ({ programKey }: { programKey: string }) => {
  const { data, isFetching, isLoading, error } = useQuery({
    queryKey: ["studies", programKey],
    queryFn: ({ signal }) => getStudiesList(programKey, signal),
  });

  if (isFetching || isLoading) return "Loading...";
  if (error) return error.message;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
