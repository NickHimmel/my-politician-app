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

export const formatDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return (month + '/' + day + '/' + year)
}
