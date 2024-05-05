import { useQuery } from "@tanstack/react-query";
import { getProgramList } from "./api/programs";
import { Tabs, type TabData } from "./components/Tabs/Tabs";

export const Programs = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["programs"],
    queryFn: ({ signal }) => getProgramList(signal),
  });

  if (isPending) return "Loading...";
  if (isError) return error.message;

  const tabData: TabData = data.map(
    ({ name, documentCount, numberOfStudies }) => ({
      key: name,
      title: name,
      subtitle: `Documents: ${documentCount}, Studies: ${numberOfStudies}`,
    })
  );

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <Tabs data={tabData} />;
};
