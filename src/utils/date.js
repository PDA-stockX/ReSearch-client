function dateToSimpleFormat(date) {
  return date.toString().split('T')[0]
}

export {dateToSimpleFormat};