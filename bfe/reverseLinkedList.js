const reverseLinkedList = (list) => {
  //   const originalHead = list;
  let prev = null;
  let temp = list;

  while (temp) {
    const next = temp.next;

    temp.next = prev;
    prev = temp;

    temp = next;
  }

  return prev;
};
