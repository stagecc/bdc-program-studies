import { useQuery } from "@tanstack/react-query";
import { getProgramList } from "../api/programs";
import { Tabs, type TabData } from "./Tabs/Tabs";
import { compactNum } from "../utils";

interface ProgramsProps {
  selectedProgram: string | null;
  setSelectedProgram: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Programs = ({
  selectedProgram,
  setSelectedProgram,
}: ProgramsProps) => {
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

  return (
    <Tabs
      data={tabData}
      selectedTab={selectedProgram}
      setSelectedTab={setSelectedProgram}
      ariaLabeledBy="programs-title"
    />
  );
};
