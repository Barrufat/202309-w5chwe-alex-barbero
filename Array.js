class CodersArray {
  length;

  constructor(...data) {
    let counter = 0;

    for (const array of data) {
      this[counter] = array;
      counter++;
    }

    this.length = counter;
  }

  push(...elements) {
    let counter = this.length;

    for (const element of elements) {
      this[counter] = element;
      counter++;
    }

    this.length = counter;
    return this.length;
  }

  map(functionName) {
    const mappedArray = new CodersArray();

    for (let position = 0; position < this.array.length; position++) {
      const modifiedNumber = functionName(this.array[position]);

      mappedArray.push(modifiedNumber);
    }

    return mappedArray.array;
  }

  filter(functionName) {
    const filteredArray = new CodersArray();

    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        filteredArray.push(this.array[number]);
      }
    }

    return filteredArray.array;
  }

  find(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        return this.array[number];
      }
    }

    return undefined;
  }

  some(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        return true;
      }
    }

    return false;
  }
}

export default CodersArray;
