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

export const removeZero = (number) => {
  let numberArray = number.split('');
  if (numberArray[0] === '0') {
    return numberArray.splice(1).join('');
  } else {
    return number
  }
}

export const scrollTop = () => {
  window.scrollTo(0, 0);
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
  let parentEl = e.target.parentElement,
      moreText = parentEl.getElementsByClassName('more'),
      btnText = e.target,
      title = parentEl.getElementsByClassName('more-title'),
      description = parentEl.getElementsByClassName('more-desc');

  if(moreText.length === 0) {
    btnText.innerHTML = 'Read more';
    title[0].classList.add('more');
    description[0].classList.add('more');
  } else {
    btnText.innerHTML = 'Read less';
    title[0].classList.remove('more');
    description[0].classList.remove('more');
  }
}

export const isActive = (active) => {
  if (active === null) {
    return '';
  } else if (active) {
    return 'yes';
  };
  return 'no';
}

export const resultsAre = (result) => {
  const res = result.toLowerCase()
  if (res === 'yes' || res === 'passed' || res === 'bill passed' || res === 'nomination confirmed' || res === 'cloture motion agreed to' || res === 'resolution agreed to' || res === 'joint resolution passed') {
    return {
      className: 'yes'
    }
  } else if (res === 'no' || res === 'failed' || res === 'cloture motion rejected' || res === 'amendment rejected' || res === 'resolution rejected') {
    return {
      className: 'no'
    }
  }
  return {
    className: 'absent'
  }
}

export const billPassage = (currentStatus) => {
  if (currentStatus) {
    return {
      isPassed: 'yes'
    }
  }
  return {
    isPassed: 'no'
  }
}

export const getPercentage = (data) => {

  const percentage = {
    'piechart-data-one': data,
    'piechart-data-two': 100 - data
  }

  return percentage;
}

export const showTerm = (e) => {
  const termsButton = e.target;
  const terms = e.target.nextSibling;

  if (terms.className === 'terms-hide') {
    termsButton.innerHTML = '\u25B2';
    terms.classList.remove('terms-hide');
    terms.classList.add('terms-show');
  } else {
    termsButton.innerHTML = '\u25BC';
    terms.classList.remove('terms-show');
    terms.classList.add('terms-hide');
  }
}
