export default class HolbertonCourse {
  construtor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
}
