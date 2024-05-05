const formatter = Intl.NumberFormat("en", {
  notation: "compact",
});
export const compactNum = (n: number) => formatter.format(n);
