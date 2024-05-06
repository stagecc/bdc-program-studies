import { useQuery } from "@tanstack/react-query";
import { getStudiesList } from "./api/studies";
import { Table } from "./components/Table/Table";
import { Link } from "./components/Link/Link";

export const Studies = ({ programKey }: { programKey: string }) => {
  const { data, isFetching, isLoading, isPending, error } = useQuery({
    queryKey: ["studies", programKey],
    queryFn: ({ signal }) => getStudiesList(programKey, signal),
  });

  if (isFetching || isLoading || isPending) return "Loading...";
  if (error) return error.message;

  return (
    <Table
      rows={data}
      columns={[
        {
          key: "name",
          headerCell: "Name",
        },
        {
          key: "id",
          headerCell: "ID",
          render: ({ id, url }) => (
            <Link
              href={url}
              style={{ justifyContent: "space-between" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {id}
            </Link>
          ),
        },
      ]}
    />
  );
};
