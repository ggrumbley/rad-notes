
export const debounce = (a, b, c) => {
  let d;
  let e;

  return () => {
    const h = () => {
      d = null;
      c || (e = a.apply(f, g));
    }
    const f = this;
    const g = arguments;

    return (clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e);
  }
}

export const removeHTMLTags = (str) => str.replace(/<[^>]*>?/gm, '');
