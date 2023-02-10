export const useFetch = () => {
  const runAsync = async (url: string) => {
    const res = (await fetch(url)).json();

    return res;
  };

  return { runAsync };
};

export default useFetch;
