function mutualFriends(person, visited, result, mapping) {
  if (visited[person]) return;

  visited[person] = true;
  result.push(person);

  const friends = mapping[person];

  if (Array.isArray(friends)) {
    for (const friend of friends) {
      mutualFriends(friend, visited, result, mapping);
    }
  }
}

const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const visited = {};
const result = [];
mutualFriends("b", visited, result, mapping);
result.shift();
console.log(result);
