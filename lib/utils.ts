export const processLongStrings = (str: string) => {
    return str && str.length > 310
      ? str.slice(0, 310) + "..."
      : str;
}

export const removeItemFromArray = (arr: any, id: string | number) => {
  debugger;
  const index = arr.findIndex((each: any) => each.id === id);
  const firstHalf = arr.splice(0, index);
  const secondHalf = arr.splice(index - 1, arr.length);
  return [
    ...firstHalf,
    ...secondHalf,
  ]
}
