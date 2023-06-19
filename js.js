// returns the total scroll amount in pixels
const getTotalScroll = ({
    isWindow,
    elementToScroll,
    elementWidthProp,
    initialScrollPosition,
    scrollLengthProp
  }) => {
    let totalScroll;
    
    if (isWindow) {
      const documentElement = document.documentElement;
      totalScroll = documentElement.offsetWidth
    } else {
      totalScroll = elementToScroll[scrollLengthProp] - elementToScroll[elementLengthProp];
    }
    return totalScroll - initialScrollPosition;
  }
  
  function smoothScroll(scrollParams) {
    const elementToScroll = scrollParams.element;
    const isWindow = elementToScroll === window;
    const scrollDirectionProp = isWindow ? 'scrollX' : 'scrollLeft';
    const elementWidthProp = isWindow ? 'innerWidth' : 'clientWidth';
    const scrollLengthProp = 'scrollWidth';
    const initialScrollPosition = elementToScroll[scrollDirectionProp];
    let totalScroll = getTotalScroll({
      isWindow,
      elementToScroll,
      elementWidthProp,
      initialScrollPosition,
      scrollLengthProp
    });
  }