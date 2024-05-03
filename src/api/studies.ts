import { z } from "zod";

const studiesSchema = z.object({
  result: z.array(
    z.object({
      collection_id: z.string(),
      collection_action: z.string().url(),
      collection_name: z.string(),
    })
  ),
});

const studiesTransform = studiesSchema.transform((apiResponse) =>
  apiResponse.result.map((original) => ({
    name: original.collection_name,
    id: original.collection_id,
    url: original.collection_action,
  }))
);

/**
 * @param programName the program name from which to get the studies
 */
export const getStudiesList = async (
  programName: string,
  signal: AbortSignal | null | undefined = undefined
) => {
  const url = new URL(
    "/search-api/search_program",
    import.meta.env.VITE_DUG_SEARCH_API
  );
  url.searchParams.append("program_name", programName);

  const res = await fetch(url.href, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!res.ok) throw new Error(`HTTP ${res.status} Error: ${res.statusText}`);

  return studiesTransform.parse(await res.json());
};
