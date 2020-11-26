export function setImmutable<T>(set: Set<T>): Set<T> {
  const arraySet = Array.from(set);

  if (typeof arraySet[0] === 'object') {
    return new Set<T>(
      arraySet.map((item) => ({
        ...item,
      })),
    );
  }

  return new Set<T>(arraySet);
}
