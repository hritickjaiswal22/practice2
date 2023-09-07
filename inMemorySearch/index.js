class InMemorySearch {
  constructor() {
    this.engine = {};
  }

  addDocuments(namespace, ...objects) {
    if (this.engine[namespace]) this.engine[namespace].push(...objects);
    else this.engine[namespace] = objects;
  }

  search(namespace, filterFn, orderBy) {
    let filteredObjects = this.engine[namespace];

    if (filterFn && filteredObjects) {
      filteredObjects = this.engine[namespace].filter((obj) => filterFn(obj));
    }

    if (orderBy && filteredObjects) {
      if (orderBy.asc) {
        filteredObjects.sort((a, b) => a[orderBy.key] - b[orderBy.key]);
      } else {
        filteredObjects.sort((a, b) => b[orderBy.key] - a[orderBy.key]);
      }
    }

    return filteredObjects;
  }
}
