export function fibonacciBigInt(n) {
  if (n <= 1n) return BigInt(n);
  let a = 0n;
  let b = 1n;
  for (let i = 2n; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
