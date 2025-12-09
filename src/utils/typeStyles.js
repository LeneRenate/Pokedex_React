export default function applyTypeStyles(element, types) {
  element.style.backgroundImage = "";

  if (types.length === 2) {
    const [t1, t2] = types;
    element.style.backgroundImage = `
      linear-gradient(
        129.8deg,
        var(--${t1}) 30%,
        var(--${t1}),
        var(--${t2}),
        var(--${t2}) 70%
      )`;
    element.style.borderTopColor = `var(--${t1}-border)`;
    element.style.borderLeftColor = `var(--${t1}-border)`;
    element.style.borderRightColor = `var(--${t2}-border)`;
    element.style.borderBottomColor = `var(--${t2}-border)`;
  } else {
    const t = types[0];
    element.style.backgroundColor = `var(--${t})`;
    element.style.borderColor = `var(--${t}-border)`;
  }
}
