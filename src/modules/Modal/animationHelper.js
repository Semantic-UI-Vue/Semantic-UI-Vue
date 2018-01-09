const getEventAnimationEnd = function () {
  return (window && window.webkitAnimationEnd) ? 'webkitAnimationEnd' : 'animationend';
};

export { getEventAnimationEnd };
