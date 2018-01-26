export const prefixIfNotPresent = (prefix = '', text = '') => {
  if (text.startsWith(prefix)) {
    return text;
  }
  return prefix + text;
};

export const suffixIfNotPresent = (text = '', suffix = '') => {
  if (text.endsWith(suffix)) {
    return text;
  }
  return text + suffix;
};
