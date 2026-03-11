export const getTechIcon = (techName: string) => {
  return new URL(`../assets/black/${techName}.svg`, import.meta.url).href;
};
