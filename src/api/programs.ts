import { z } from "zod";

const programListSchema = z.object({
  result: z.array(
    z.object({
      key: z.string(),
      doc_count: z.number(),
      No_of_studies: z.object({
        value: z.number(),
      }),
    })
  ),
});

const programListTransform = programListSchema.transform((apiResponse) =>
  apiResponse.result.map((original) => ({
    name: original.key,
    documentCount: original.doc_count,
    numberOfStudies: original.No_of_studies.value,
  }))
);

export const getProgramList = async (
  signal: AbortSignal | null | undefined = undefined
) => {
  const { href } = new URL(
    "/search-api/program_list",
    import.meta.env.VITE_DUG_SEARCH_API
  );

  const res = await fetch(href, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!res.ok) throw new Error(`HTTP ${res.status} Error: ${res.statusText}`);

  return programListTransform.parse(await res.json());
};
