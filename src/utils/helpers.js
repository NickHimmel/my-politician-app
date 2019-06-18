export const getOrdinal = (num) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const val = num%100;
  const ordinal = suffixes[(val-20)%10] || suffixes[val] || suffixes[0];
  if (num === 'At-Large') {
    return num;
  } else {
    return num + ordinal;
  }
}
