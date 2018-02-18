export function textAlign(align) {
  return align && (align === 'justify' ? 'justified' : `${align} aligned`);
}
