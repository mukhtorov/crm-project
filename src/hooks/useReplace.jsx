export const useReplace = (value, name) => {
  let url = new URL(window.location.href);
  let query = url.searchParams;

  if (!value) query.delete(name);
  else query.set(name, `*${value}*`);

  return url.search;
};

export default useReplace;
