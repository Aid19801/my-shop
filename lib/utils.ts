export const processLongStrings = (str: string) => {
    return str && str.length > 310
      ? str.slice(0, 310) + "..."
      : str;
}