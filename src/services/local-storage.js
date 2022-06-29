export const getUserPoints = function (name) {
  let usersMap = localStorage.getItem("bbva-users");

  if (!usersMap) {
    const newMap = new Map();
    localStorage.setItem(
      "bbva-users",
      JSON.stringify(Array.from(newMap.entries()))
    );
    return 0;
  }

  usersMap = new Map(JSON.parse(localStorage.getItem("bbva-users")));

  return usersMap.get(name);
};

export const incrementScore = function (name, value) {
  const usersMap = new Map(JSON.parse(localStorage.getItem("bbva-users")));
  const currentPoints = usersMap.get(name) || 0;
  usersMap.set(name, currentPoints + value);
  localStorage.setItem(
    "bbva-users",
    JSON.stringify(Array.from(usersMap.entries()))
  );
};
