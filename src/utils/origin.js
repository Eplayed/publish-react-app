const handleOrigin = name => {
  const origin = window.location.origin
  switch (name) {
    case 'BaseURL':
      if (origin.indexOf('localhost') > -1) {
        return 'http://web.dev-idesk.com'
      }
      if (origin.indexOf('sit') > -1) {
        return 'http://web.dev-idesk.com'
      } else {
        return 'http://web.dev-idesk.com'
      }
    case 'OUTSIDE_IMG_URL':
      // if (origin.indexOf('localhost') > -1) {
      return 'http://web.dev-idesk.com/zuul/api/upload/unlimitedFormat'
    // }

    default:
      break
  }

  return ''
}
export default {
  BaseURL: handleOrigin('BaseURL'),
  OUTSIDE_IMG_URL: handleOrigin('OUTSIDE_IMG_URL')
}
