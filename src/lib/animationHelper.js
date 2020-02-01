const getEventAnimationEnd = function getEventAnimationEnd() {
  return window && window.webkitAnimationEnd
    ? 'webkitAnimationEnd'
    : 'animationend';
};

export { getEventAnimationEnd };
