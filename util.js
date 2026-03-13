async function fetchQuery(uri, method, body) {
  const myHeaders = new Headers();
  const token = localStorage.getItem("ACCESS-TOKEN");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify(body);

  const requestOptions = {
    method,
    headers: myHeaders,
    // body: raw,
    redirect: "follow",
  };

  if (method == "POST") {
    requestOptions["body"] = raw;
  }

  const res = await fetch(`http://13.62.45.197/api/${uri}`, requestOptions);
  const json = await res.json();
  return json;
}

function getLogsOfHabits(habitsID) {
  return fetchQuery(`habitsLog/${habitsID}`, "GET");
}

function getHabits() {
  return fetchQuery("habits", "GET");
}
