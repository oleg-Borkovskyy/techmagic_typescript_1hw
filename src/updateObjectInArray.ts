type ObjectShape = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// interface Arr extends Omit<ObjectShape, "id"> {
//   name: string;
// }

export function updateObjectInArray<ObjectShape>(
  initialArray: any[],
  keyToFind: string,
  keyValueToFind: number,
  patch: Partial<ObjectShape>
) {
  return initialArray.map((item) => {
    if (item[keyToFind] === keyValueToFind) {
      return { ...item, ...patch };
    } else return item;
  });
}
