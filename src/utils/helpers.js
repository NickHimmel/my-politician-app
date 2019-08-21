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

export const sliceText = (billTitle, billDescription) => {

  let isLong = false,
      shortDescription = '',
      longDescription = billDescription,
      shortTitle =  billTitle,
      longTitle = '';

  if (longDescription === null) {
    longDescription = '';
  }

  if (billTitle.length < 140 && billTitle.length + longDescription.length >= 140) {
    const cutOff = 140 - billTitle.length;
    shortDescription = billDescription.slice(0, cutOff);
    longDescription = billDescription.slice(cutOff);
    isLong = true;
  } else if (billTitle.length + longDescription.length >= 140) {
    shortTitle =  billTitle.slice(0, 141);
    longTitle = billTitle.slice(141);
    isLong = true;
  }

  return (
    {shortTitle: shortTitle, longTitle: longTitle, shortDescription: shortDescription, longDescription: longDescription, isLong: isLong}
  )
}

export const readMore = (e) => {
  let parentEl = e.target.parentElement;
  let moreText = parentEl.getElementsByClassName('more');
  let btnText = e.target;
  let dots = parentEl.getElementsByClassName('dots');
  let title = parentEl.getElementsByClassName('votes-more-title');
  let description = parentEl.getElementsByClassName('votes-more-desc');

  if(moreText.length === 0) {
    btnText.innerHTML = 'Read more';
    dots[0].classList.remove('dots-none');
    title[0].classList.add('more');
    description[0].classList.add('more');
  } else {
    btnText.innerHTML = 'Read less';
    dots[0].classList.add('dots-none');
    title[0].classList.remove('more');
    description[0].classList.remove('more');
  }
}
