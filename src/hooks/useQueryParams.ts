import { useEffect, useState } from "react";

export const useQueryParams = (
  initialState: string | null,
  key: string
): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    setState(params.get(key));
  }, [setState, key]);

  const setQueryParamState: React.Dispatch<
    React.SetStateAction<string | null>
  > = (s) => {
    let next = null;

    if (typeof s === "string" || s === null) next = s;
    else next = s(state);

    const params = new URLSearchParams(window.location.search);
    if (next !== null) {
      params.set(key, next);
      window.history.pushState(null, "", "?" + params.toString());
    }

    setState(next);
  };

  return [state, setQueryParamState];
};
