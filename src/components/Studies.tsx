import { useQuery } from "@tanstack/react-query";
import { getStudiesList } from "../api/studies";
import { Table } from "./Table/Table";
import { Link } from "./Link/Link";
import { LoadingPanel } from "./LoadingPanel/LoadingPanel";

export const Studies = ({ programKey }: { programKey: string }) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["studies", programKey],
    queryFn: ({ signal }) => getStudiesList(programKey, signal),
  });

  if (isPending) return <LoadingPanel />;
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
          width: "25%",
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
