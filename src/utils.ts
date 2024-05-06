const formatter = Intl.NumberFormat("en", {
  notation: "compact",
});
export const compactNum = (n: number) => formatter.format(n);

export const toKebabCase = (s: string) => s.toLowerCase().split(" ").join("-");
