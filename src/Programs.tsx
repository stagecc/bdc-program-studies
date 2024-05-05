import { useQuery } from "@tanstack/react-query";
import { getProgramList } from "./api/programs";
import { Tabs, type TabData } from "./components/Tabs/Tabs";
import { compactNum } from "./utils";

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
      subtitle: `${compactNum(documentCount)} documents, ${compactNum(numberOfStudies)} studies`,
    })
  );

  return <Tabs data={tabData} />;
};
