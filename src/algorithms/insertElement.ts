export function insertElement(
  array: any[],
  index: number,
  element: any
): any[] {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }

  array[index] = element;

  return array;
}
