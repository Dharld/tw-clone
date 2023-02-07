export function range(r: { from: number; to: number }) {
  const rge = [];
  for (let i = r.from; i <= r.to; i++) rge.push(i + '');
  return rge;
}
