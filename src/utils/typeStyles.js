export default function getTypeStyles(types) {
  if (types.length === 2) {
    const [t1, t2] = types;
    return {
      backgroundImage: `linear-gradient(129.8deg, var(--${t1}) 30%, var(--${t1}), var(--${t2}), var(--${t2}) 70%)`,
      borderTopColor: `var(--${t1}-border)`,
      borderLeftColor: `var(--${t1}-border)`,
      borderRightColor: `var(--${t2}-border)`,
      borderBottomColor: `var(--${t2}-border)`,
    };
  } else {
    const t = types[0];
    return {
      backgroundColor: `var(--${t})`,
      borderColor: `var(--${t}-border)`,
    };
  }
}
