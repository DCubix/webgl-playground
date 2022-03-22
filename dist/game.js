/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MathArray)
/* harmony export */ });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");
function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}



class MathArray extends _extendableBuiltin(Array) {
  get ELEMENTS() {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
    return 0;
  }

  clone() {
    return new this.constructor().copy(this);
  }

  from(arrayOrObject) {
    return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
  }

  fromArray(array, offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i + offset];
    }

    return this.check();
  }

  to(arrayOrObject) {
    if (arrayOrObject === this) {
      return this;
    }

    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(arrayOrObject) ? this.toArray(arrayOrObject) : this.toObject(arrayOrObject);
  }

  toTarget(target) {
    return target ? this.to(target) : this;
  }

  toArray(array = [], offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      array[offset + i] = this[i];
    }

    return array;
  }

  toFloat32Array() {
    return new Float32Array(this);
  }

  toString() {
    return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_1__.config);
  }

  formatString(opts) {
    let string = '';

    for (let i = 0; i < this.ELEMENTS; ++i) {
      string += (i > 0 ? ', ' : '') + (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.formatValue)(this[i], opts);
    }

    return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
  }

  equals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (!(0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.equals)(this[i], array[i])) {
        return false;
      }
    }

    return true;
  }

  exactEquals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (this[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  negate() {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = -this[i];
    }

    return this.check();
  }

  lerp(a, b, t) {
    if (t === undefined) {
      t = b;
      b = a;
      a = this;
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      const ai = a[i];
      this[i] = ai + t * (b[i] - ai);
    }

    return this.check();
  }

  min(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(vector[i], this[i]);
    }

    return this.check();
  }

  max(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.max(vector[i], this[i]);
    }

    return this.check();
  }

  clamp(minVector, maxVector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
    }

    return this.check();
  }

  add(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] += vector[i];
      }
    }

    return this.check();
  }

  subtract(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] -= vector[i];
      }
    }

    return this.check();
  }

  scale(scale) {
    if (Array.isArray(scale)) {
      return this.multiply(scale);
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scale;
    }

    return this.check();
  }

  sub(a) {
    return this.subtract(a);
  }

  setScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = a;
    }

    return this.check();
  }

  addScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] += a;
    }

    return this.check();
  }

  subScalar(a) {
    return this.addScalar(-a);
  }

  multiplyScalar(scalar) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }

    return this.check();
  }

  divideScalar(a) {
    return this.scale(1 / a);
  }

  clampScalar(min, max) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], min), max);
    }

    return this.check();
  }

  multiplyByScalar(scalar) {
    return this.scale(scalar);
  }

  get elements() {
    return this;
  }

  check() {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug && !this.validate()) {
      throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
    }

    return this;
  }

  validate() {
    let valid = this.length === this.ELEMENTS;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      valid = valid && Number.isFinite(this[i]);
    }

    return valid;
  }

}
//# sourceMappingURL=math-array.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js":
/*!********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");




class Matrix extends _math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get ELEMENTS() {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    return 0;
  }

  get RANK() {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    return 0;
  }

  toString() {
    let string = '[';

    if (_lib_common__WEBPACK_IMPORTED_MODULE_2__.config.printRowMajor) {
      string += 'row-major:';

      for (let row = 0; row < this.RANK; ++row) {
        for (let col = 0; col < this.RANK; ++col) {
          string += " ".concat(this[col * this.RANK + row]);
        }
      }
    } else {
      string += 'column-major:';

      for (let i = 0; i < this.ELEMENTS; ++i) {
        string += " ".concat(this[i]);
      }
    }

    string += ']';
    return string;
  }

  getElementIndex(row, col) {
    return col * this.RANK + row;
  }

  getElement(row, col) {
    return this[col * this.RANK + row];
  }

  setElement(row, col, value) {
    this[col * this.RANK + row] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkNumber)(value);
    return this;
  }

  getColumn(columnIndex, result = new Array(this.RANK).fill(-0)) {
    const firstIndex = columnIndex * this.RANK;

    for (let i = 0; i < this.RANK; ++i) {
      result[i] = this[firstIndex + i];
    }

    return result;
  }

  setColumn(columnIndex, columnVector) {
    const firstIndex = columnIndex * this.RANK;

    for (let i = 0; i < this.RANK; ++i) {
      this[firstIndex + i] = columnVector[i];
    }

    return this;
  }

}
//# sourceMappingURL=matrix.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js":
/*!********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/vector.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector)
/* harmony export */ });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");



class Vector extends _math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get ELEMENTS() {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    return 0;
  }

  copy(vector) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    return this;
  }

  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  len() {
    return Math.sqrt(this.lengthSquared());
  }

  magnitude() {
    return this.len();
  }

  lengthSquared() {
    let length = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      length += this[i] * this[i];
    }

    return length;
  }

  magnitudeSquared() {
    return this.lengthSquared();
  }

  distance(mathArray) {
    return Math.sqrt(this.distanceSquared(mathArray));
  }

  distanceSquared(mathArray) {
    let length = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      const dist = this[i] - mathArray[i];
      length += dist * dist;
    }

    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(length);
  }

  dot(mathArray) {
    let product = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      product += this[i] * mathArray[i];
    }

    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(product);
  }

  normalize() {
    const length = this.magnitude();

    if (length !== 0) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= length;
      }
    }

    return this.check();
  }

  multiply(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= vector[i];
      }
    }

    return this.check();
  }

  divide(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= vector[i];
      }
    }

    return this.check();
  }

  lengthSq() {
    return this.lengthSquared();
  }

  distanceTo(vector) {
    return this.distance(vector);
  }

  distanceToSquared(vector) {
    return this.distanceSquared(vector);
  }

  getComponent(i) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(this[i]);
  }

  setComponent(i, value) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    this[i] = value;
    return this.check();
  }

  addVectors(a, b) {
    return this.copy(a).add(b);
  }

  subVectors(a, b) {
    return this.copy(a).subtract(b);
  }

  multiplyVectors(a, b) {
    return this.copy(a).multiply(b);
  }

  addScaledVector(a, b) {
    return this.add(new this.constructor(a).multiplyScalar(b));
  }

}
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/euler.js":
/*!**************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/euler.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _base_math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quaternion */ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js");




const ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
const ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}

class Euler extends _base_math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZYX() {
    return 0;
  }

  static get YXZ() {
    return 1;
  }

  static get XZY() {
    return 2;
  }

  static get ZXY() {
    return 3;
  }

  static get YZX() {
    return 4;
  }

  static get XYZ() {
    return 5;
  }

  static get RollPitchYaw() {
    return 0;
  }

  static get DefaultOrder() {
    return Euler.ZYX;
  }

  static get RotationOrders() {
    return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
  }

  static rotationOrder(order) {
    return Euler.RotationOrders[order];
  }

  get ELEMENTS() {
    return 4;
  }

  constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
    super(-0, -0, -0, -0);

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      this.fromVector3(...arguments);
    } else {
      this.set(x, y, z, order);
    }
  }

  fromQuaternion(quaternion) {
    const [x, y, z, w] = quaternion;
    const ysqr = y * y;
    const t0 = -2.0 * (ysqr + z * z) + 1.0;
    const t1 = +2.0 * (x * y + w * z);
    let t2 = -2.0 * (x * z - w * y);
    const t3 = +2.0 * (y * z + w * x);
    const t4 = -2.0 * (x * x + ysqr) + 1.0;
    t2 = t2 > 1.0 ? 1.0 : t2;
    t2 = t2 < -1.0 ? -1.0 : t2;
    const roll = Math.atan2(t3, t4);
    const pitch = Math.asin(t2);
    const yaw = Math.atan2(t1, t0);
    return new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = Number.isFinite(array[3]) || this.order;
    return this.check();
  }

  set(x = 0, y = 0, z = 0, order) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = Number.isFinite(order) ? order : this[3];
    return this.check();
  }

  validate() {
    return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
  }

  toArray(array = [], offset = 0) {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    return array;
  }

  toArray4(array = [], offset = 0) {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    array[offset + 3] = this[3];
    return array;
  }

  toVector3(result = [-0, -0, -0]) {
    result[0] = this[0];
    result[1] = this[1];
    result[2] = this[2];
    return result;
  }

  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get alpha() {
    return this[0];
  }

  set alpha(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get beta() {
    return this[1];
  }

  set beta(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get gamma() {
    return this[2];
  }

  set gamma(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get phi() {
    return this[0];
  }

  set phi(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get theta() {
    return this[1];
  }

  set theta(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get psi() {
    return this[2];
  }

  set psi(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get roll() {
    return this[0];
  }

  set roll(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get pitch() {
    return this[1];
  }

  set pitch(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get yaw() {
    return this[2];
  }

  set yaw(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get order() {
    return this[3];
  }

  set order(value) {
    this[3] = checkOrder(value);
  }

  fromVector3(v, order) {
    return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
  }

  fromArray(array, offset = 0) {
    this[0] = array[0 + offset];
    this[1] = array[1 + offset];
    this[2] = array[2 + offset];

    if (array[3] !== undefined) {
      this[3] = array[3];
    }

    return this.check();
  }

  fromRollPitchYaw(roll, pitch, yaw) {
    return this.set(roll, pitch, yaw, Euler.ZYX);
  }

  fromRotationMatrix(m, order = Euler.DefaultOrder) {
    this._fromRotationMatrix(m, order);

    return this.check();
  }

  getRotationMatrix(m) {
    return this._getRotationMatrix(m);
  }

  getQuaternion() {
    const q = new _quaternion__WEBPACK_IMPORTED_MODULE_2__["default"]();

    switch (this[3]) {
      case Euler.XYZ:
        return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

      case Euler.YXZ:
        return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

      case Euler.ZXY:
        return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

      case Euler.ZYX:
        return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

      case Euler.YZX:
        return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

      case Euler.XZY:
        return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }
  }

  _fromRotationMatrix(m, order = Euler.DefaultOrder) {
    const te = m.elements;
    const m11 = te[0],
          m12 = te[4],
          m13 = te[8];
    const m21 = te[1],
          m22 = te[5],
          m23 = te[9];
    const m31 = te[2],
          m32 = te[6],
          m33 = te[10];
    order = order || this[3];

    switch (order) {
      case Euler.XYZ:
        this[1] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m13, -1, 1));

        if (Math.abs(m13) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m33);
          this[2] = Math.atan2(-m12, m11);
        } else {
          this[0] = Math.atan2(m32, m22);
          this[2] = 0;
        }

        break;

      case Euler.YXZ:
        this[0] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m23, -1, 1));

        if (Math.abs(m23) < ALMOST_ONE) {
          this[1] = Math.atan2(m13, m33);
          this[2] = Math.atan2(m21, m22);
        } else {
          this[1] = Math.atan2(-m31, m11);
          this[2] = 0;
        }

        break;

      case Euler.ZXY:
        this[0] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m32, -1, 1));

        if (Math.abs(m32) < ALMOST_ONE) {
          this[1] = Math.atan2(-m31, m33);
          this[2] = Math.atan2(-m12, m22);
        } else {
          this[1] = 0;
          this[2] = Math.atan2(m21, m11);
        }

        break;

      case Euler.ZYX:
        this[1] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m31, -1, 1));

        if (Math.abs(m31) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m33);
          this[2] = Math.atan2(m21, m11);
        } else {
          this[0] = 0;
          this[2] = Math.atan2(-m12, m22);
        }

        break;

      case Euler.YZX:
        this[2] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m21, -1, 1));

        if (Math.abs(m21) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m22);
          this[1] = Math.atan2(-m31, m11);
        } else {
          this[0] = 0;
          this[1] = Math.atan2(m13, m33);
        }

        break;

      case Euler.XZY:
        this[2] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m12, -1, 1));

        if (Math.abs(m12) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m22);
          this[1] = Math.atan2(m13, m11);
        } else {
          this[0] = Math.atan2(-m23, m33);
          this[1] = 0;
        }

        break;

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }

    this[3] = order;
    return this;
  }

  _getRotationMatrix(result) {
    const te = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
    const x = this.x,
          y = this.y,
          z = this.z;
    const a = Math.cos(x);
    const c = Math.cos(y);
    const e = Math.cos(z);
    const b = Math.sin(x);
    const d = Math.sin(y);
    const f = Math.sin(z);

    switch (this[3]) {
      case Euler.XYZ:
        {
          const ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
          te[0] = c * e;
          te[4] = -c * f;
          te[8] = d;
          te[1] = af + be * d;
          te[5] = ae - bf * d;
          te[9] = -b * c;
          te[2] = bf - ae * d;
          te[6] = be + af * d;
          te[10] = a * c;
          break;
        }

      case Euler.YXZ:
        {
          const ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
          te[0] = ce + df * b;
          te[4] = de * b - cf;
          te[8] = a * d;
          te[1] = a * f;
          te[5] = a * e;
          te[9] = -b;
          te[2] = cf * b - de;
          te[6] = df + ce * b;
          te[10] = a * c;
          break;
        }

      case Euler.ZXY:
        {
          const ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
          te[0] = ce - df * b;
          te[4] = -a * f;
          te[8] = de + cf * b;
          te[1] = cf + de * b;
          te[5] = a * e;
          te[9] = df - ce * b;
          te[2] = -a * d;
          te[6] = b;
          te[10] = a * c;
          break;
        }

      case Euler.ZYX:
        {
          const ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
          te[0] = c * e;
          te[4] = be * d - af;
          te[8] = ae * d + bf;
          te[1] = c * f;
          te[5] = bf * d + ae;
          te[9] = af * d - be;
          te[2] = -d;
          te[6] = b * c;
          te[10] = a * c;
          break;
        }

      case Euler.YZX:
        {
          const ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
          te[0] = c * e;
          te[4] = bd - ac * f;
          te[8] = bc * f + ad;
          te[1] = f;
          te[5] = a * e;
          te[9] = -b * e;
          te[2] = -d * e;
          te[6] = ad * f + bc;
          te[10] = ac - bd * f;
          break;
        }

      case Euler.XZY:
        {
          const ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
          te[0] = c * e;
          te[4] = -f;
          te[8] = d * e;
          te[1] = ac * f + bd;
          te[5] = a * e;
          te[9] = ad * f - bc;
          te[2] = bc * f - ad;
          te[6] = b * e;
          te[10] = bd * f + ac;
          break;
        }

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }

    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return te;
  }

  toQuaternion() {
    const cy = Math.cos(this.yaw * 0.5);
    const sy = Math.sin(this.yaw * 0.5);
    const cr = Math.cos(this.roll * 0.5);
    const sr = Math.sin(this.roll * 0.5);
    const cp = Math.cos(this.pitch * 0.5);
    const sp = Math.sin(this.pitch * 0.5);
    const w = cy * cr * cp + sy * sr * sp;
    const x = cy * sr * cp - sy * cr * sp;
    const y = cy * cr * sp + sy * sr * cp;
    const z = sy * cr * cp - cy * sr * sp;
    return new _quaternion__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z, w);
  }

}
//# sourceMappingURL=euler.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/matrix3.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/matrix3.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix3)
/* harmony export */ });
/* harmony import */ var _base_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/matrix */ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");
/* harmony import */ var gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/mat3 */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");






const IDENTITY = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
const ZERO = Object.freeze([0, 0, 0, 0, 0, 0, 0, 0, 0]);
const INDICES = Object.freeze({
  COL0ROW0: 0,
  COL0ROW1: 1,
  COL0ROW2: 2,
  COL1ROW0: 3,
  COL1ROW1: 4,
  COL1ROW2: 5,
  COL2ROW0: 6,
  COL2ROW1: 7,
  COL2ROW2: 8
});
const constants = {};
class Matrix3 extends _base_matrix__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get IDENTITY() {
    constants.IDENTITY = constants.IDENTITY || Object.freeze(new Matrix3(IDENTITY));
    return constants.IDENTITY;
  }

  static get ZERO() {
    constants.ZERO = constants.ZERO || Object.freeze(new Matrix3(ZERO));
    return constants.ZERO;
  }

  get ELEMENTS() {
    return 9;
  }

  get RANK() {
    return 3;
  }

  get INDICES() {
    return INDICES;
  }

  constructor(array) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0);

    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    return this.check();
  }

  set(m00, m10, m20, m01, m11, m21, m02, m12, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  setRowMajor(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  determinant() {
    return gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.determinant(this);
  }

  identity() {
    return this.copy(IDENTITY);
  }

  fromQuaternion(q) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.fromQuat(this, q);
    return this.check();
  }

  transpose() {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.transpose(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  multiplyLeft(a) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  rotate(radians) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.rotate(this, this, radians);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, factor);
    } else {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.translate(this, this, vec);
    return this.check();
  }

  transform(vector, result) {
    switch (vector.length) {
      case 2:
        result = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__.transformMat3(result || [-0, -0], vector, this);
        break;

      case 3:
        result = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat3(result || [-0, -0, -0], vector, this);
        break;

      case 4:
        result = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat3)(result || [-0, -0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_5__.checkVector)(result, vector.length);
    return result;
  }

  transformVector(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_5__.deprecated)('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector2(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_5__.deprecated)('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector3(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_5__.deprecated)('Matrix3.transformVector');
    return this.transform(vector, result);
  }

}
//# sourceMappingURL=matrix3.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/matrix4.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix4)
/* harmony export */ });
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _base_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/matrix */ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/mat4 */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec4 */ "./node_modules/gl-matrix/esm/vec4.js");







const IDENTITY = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const ZERO = Object.freeze([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
const INDICES = Object.freeze({
  COL0ROW0: 0,
  COL0ROW1: 1,
  COL0ROW2: 2,
  COL0ROW3: 3,
  COL1ROW0: 4,
  COL1ROW1: 5,
  COL1ROW2: 6,
  COL1ROW3: 7,
  COL2ROW0: 8,
  COL2ROW1: 9,
  COL2ROW2: 10,
  COL2ROW3: 11,
  COL3ROW0: 12,
  COL3ROW1: 13,
  COL3ROW2: 14,
  COL3ROW3: 15
});
const constants = {};
class Matrix4 extends _base_matrix__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get IDENTITY() {
    constants.IDENTITY = constants.IDENTITY || Object.freeze(new Matrix4(IDENTITY));
    return constants.IDENTITY;
  }

  static get ZERO() {
    constants.ZERO = constants.ZERO || Object.freeze(new Matrix4(ZERO));
    return constants.ZERO;
  }

  get INDICES() {
    return INDICES;
  }

  get ELEMENTS() {
    return 16;
  }

  get RANK() {
    return 4;
  }

  constructor(array) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);

    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    this[9] = array[9];
    this[10] = array[10];
    this[11] = array[11];
    this[12] = array[12];
    this[13] = array[13];
    this[14] = array[14];
    this[15] = array[15];
    return this.check();
  }

  set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  setRowMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  toRowMajor(result) {
    result[0] = this[0];
    result[1] = this[4];
    result[2] = this[8];
    result[3] = this[12];
    result[4] = this[1];
    result[5] = this[5];
    result[6] = this[9];
    result[7] = this[13];
    result[8] = this[2];
    result[9] = this[6];
    result[10] = this[10];
    result[11] = this[14];
    result[12] = this[3];
    result[13] = this[7];
    result[14] = this[11];
    result[15] = this[15];
    return result;
  }

  identity() {
    return this.copy(IDENTITY);
  }

  fromQuaternion(q) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.fromQuat(this, q);
    return this.check();
  }

  frustum({
    left,
    right,
    bottom,
    top,
    near,
    far
  }) {
    if (far === Infinity) {
      Matrix4._computeInfinitePerspectiveOffCenter(this, left, right, bottom, top, near);
    } else {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.frustum(this, left, right, bottom, top, near, far);
    }

    return this.check();
  }

  static _computeInfinitePerspectiveOffCenter(result, left, right, bottom, top, near) {
    const column0Row0 = 2.0 * near / (right - left);
    const column1Row1 = 2.0 * near / (top - bottom);
    const column2Row0 = (right + left) / (right - left);
    const column2Row1 = (top + bottom) / (top - bottom);
    const column2Row2 = -1.0;
    const column2Row3 = -1.0;
    const column3Row2 = -2.0 * near;
    result[0] = column0Row0;
    result[1] = 0.0;
    result[2] = 0.0;
    result[3] = 0.0;
    result[4] = 0.0;
    result[5] = column1Row1;
    result[6] = 0.0;
    result[7] = 0.0;
    result[8] = column2Row0;
    result[9] = column2Row1;
    result[10] = column2Row2;
    result[11] = column2Row3;
    result[12] = 0.0;
    result[13] = 0.0;
    result[14] = column3Row2;
    result[15] = 0.0;
    return result;
  }

  lookAt(eye, center, up) {
    if (arguments.length === 1) {
      ({
        eye,
        center,
        up
      } = eye);
    }

    center = center || [0, 0, 0];
    up = up || [0, 1, 0];
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.lookAt(this, eye, center, up);
    return this.check();
  }

  ortho({
    left,
    right,
    bottom,
    top,
    near = 0.1,
    far = 500
  }) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.ortho(this, left, right, bottom, top, near, far);
    return this.check();
  }

  orthographic({
    fovy = 45 * Math.PI / 180,
    aspect = 1,
    focalDistance = 1,
    near = 0.1,
    far = 500
  }) {
    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }

    const halfY = fovy / 2;
    const top = focalDistance * Math.tan(halfY);
    const right = top * aspect;
    return new Matrix4().ortho({
      left: -right,
      right,
      bottom: -top,
      top,
      near,
      far
    });
  }

  perspective({
    fovy = undefined,
    fov = 45 * Math.PI / 180,
    aspect = 1,
    near = 0.1,
    far = 500
  } = {}) {
    fovy = fovy || fov;

    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }

    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.perspective(this, fovy, aspect, near, far);
    return this.check();
  }

  determinant() {
    return gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.determinant(this);
  }

  getScale(result = [-0, -0, -0]) {
    result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
    result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
    return result;
  }

  getTranslation(result = [-0, -0, -0]) {
    result[0] = this[12];
    result[1] = this[13];
    result[2] = this[14];
    return result;
  }

  getRotation(result = [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0], scaleResult = null) {
    const scale = this.getScale(scaleResult || [-0, -0, -0]);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = 0;
    result[4] = this[4] * inverseScale0;
    result[5] = this[5] * inverseScale1;
    result[6] = this[6] * inverseScale2;
    result[7] = 0;
    result[8] = this[8] * inverseScale0;
    result[9] = this[9] * inverseScale1;
    result[10] = this[10] * inverseScale2;
    result[11] = 0;
    result[12] = 0;
    result[13] = 0;
    result[14] = 0;
    result[15] = 1;
    return result;
  }

  getRotationMatrix3(result = [-0, -0, -0, -0, -0, -0, -0, -0, -0], scaleResult = null) {
    const scale = this.getScale(scaleResult || [-0, -0, -0]);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = this[4] * inverseScale0;
    result[4] = this[5] * inverseScale1;
    result[5] = this[6] * inverseScale2;
    result[6] = this[8] * inverseScale0;
    result[7] = this[9] * inverseScale1;
    result[8] = this[10] * inverseScale2;
    return result;
  }

  transpose() {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.transpose(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  multiplyLeft(a) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  rotateX(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateX(this, this, radians);
    return this.check();
  }

  rotateY(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateY(this, this, radians);
    return this.check();
  }

  rotateZ(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateZ(this, this, radians);
    return this.check();
  }

  rotateXYZ([rx, ry, rz]) {
    return this.rotateX(rx).rotateY(ry).rotateZ(rz);
  }

  rotateAxis(radians, axis) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotate(this, this, radians, axis);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, factor);
    } else {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.translate(this, this, vec);
    return this.check();
  }

  transform(vector, result) {
    if (vector.length === 4) {
      result = gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_2__.transformMat4(result || [-0, -0, -0, -0], vector, this);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(result, 4);
      return result;
    }

    return this.transformAsPoint(vector, result);
  }

  transformAsPoint(vector, result) {
    const {
      length
    } = vector;

    switch (length) {
      case 2:
        result = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_4__.transformMat4(result || [-0, -0], vector, this);
        break;

      case 3:
        result = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__.transformMat4(result || [-0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(result, vector.length);
    return result;
  }

  transformAsVector(vector, result) {
    switch (vector.length) {
      case 2:
        result = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__.vec2_transformMat4AsVector)(result || [-0, -0], vector, this);
        break;

      case 3:
        result = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__.vec3_transformMat4AsVector)(result || [-0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(result, vector.length);
    return result;
  }

  makeRotationX(radians) {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x, y, z) {
    return this.identity().translate([x, y, z]);
  }

  transformPoint(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.deprecated)('Matrix4.transformPoint', '3.0');
    return this.transformAsPoint(vector, result);
  }

  transformVector(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.deprecated)('Matrix4.transformVector', '3.0');
    return this.transformAsPoint(vector, result);
  }

  transformDirection(vector, result) {
    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.deprecated)('Matrix4.transformDirection', '3.0');
    return this.transformAsVector(vector, result);
  }

}
//# sourceMappingURL=matrix4.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/pose.js":
/*!*************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/pose.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pose)
/* harmony export */ });
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix4 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./euler */ "./node_modules/@math.gl/core/dist/esm/classes/euler.js");



class Pose {
  constructor({
    x = 0,
    y = 0,
    z = 0,
    roll = 0,
    pitch = 0,
    yaw = 0,
    position = undefined,
    orientation = undefined
  } = {}) {
    if (Array.isArray(position) && position.length === 3) {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_0__["default"](position);
    } else {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_1__["default"](orientation, orientation[3]);
    } else {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_1__["default"](roll, pitch, yaw, _euler__WEBPACK_IMPORTED_MODULE_1__["default"].RollPitchYaw);
    }
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
  }

  get z() {
    return this.position.z;
  }

  set z(value) {
    this.position.z = value;
  }

  get roll() {
    return this.orientation.roll;
  }

  set roll(value) {
    this.orientation.roll = value;
  }

  get pitch() {
    return this.orientation.pitch;
  }

  set pitch(value) {
    this.orientation.pitch = value;
  }

  get yaw() {
    return this.orientation.yaw;
  }

  set yaw(value) {
    this.orientation.yaw = value;
  }

  getPosition() {
    return this.position;
  }

  getOrientation() {
    return this.orientation;
  }

  equals(pose) {
    if (!pose) {
      return false;
    }

    return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
  }

  exactEquals(pose) {
    if (!pose) {
      return false;
    }

    return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
  }

  getTransformationMatrix() {
    const sr = Math.sin(this.roll);
    const sp = Math.sin(this.pitch);
    const sw = Math.sin(this.yaw);
    const cr = Math.cos(this.roll);
    const cp = Math.cos(this.pitch);
    const cw = Math.cos(this.yaw);
    const matrix = new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
    return matrix;
  }

  getTransformationMatrixFromPose(pose) {
    return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
  }

  getTransformationMatrixToPose(pose) {
    return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
  }

}
//# sourceMappingURL=pose.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/quaternion.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quaternion)
/* harmony export */ });
/* harmony import */ var _base_math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");
/* harmony import */ var gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/quat */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec4 */ "./node_modules/gl-matrix/esm/vec4.js");





const IDENTITY_QUATERNION = [0, 0, 0, 1];
class Quaternion extends _base_math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(-0, -0, -0, -0);

    if (Array.isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      this.set(x, y, z, w);
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  fromMatrix3(m) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.fromMat3(this, m);
    return this.check();
  }

  identity() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.identity(this);
    return this.check();
  }

  fromAxisRotation(axis, rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.setAxisAngle(this, axis, rad);
    return this.check();
  }

  setAxisAngle(axis, rad) {
    return this.fromAxisRotation(axis, rad);
  }

  get ELEMENTS() {
    return 4;
  }

  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get w() {
    return this[3];
  }

  set w(value) {
    this[3] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  len() {
    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.length(this);
  }

  lengthSquared() {
    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.squaredLength(this);
  }

  dot(a, b) {
    if (b !== undefined) {
      throw new Error('Quaternion.dot only takes one argument');
    }

    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.dot(this, a);
  }

  rotationTo(vectorA, vectorB) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotationTo(this, vectorA, vectorB);
    return this.check();
  }

  add(a, b) {
    if (b !== undefined) {
      throw new Error('Quaternion.add only takes one argument');
    }

    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.add(this, this, a);
    return this.check();
  }

  calculateW() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.calculateW(this, this);
    return this.check();
  }

  conjugate() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.conjugate(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  lerp(a, b, t) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.lerp(this, a, b, t);
    return this.check();
  }

  multiplyRight(a, b) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_3__["default"])(!b);
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  multiplyLeft(a, b) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_3__["default"])(!b);
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  normalize() {
    const length = this.len();
    const l = length > 0 ? 1 / length : 0;
    this[0] = this[0] * l;
    this[1] = this[1] * l;
    this[2] = this[2] * l;
    this[3] = this[3] * l;

    if (length === 0) {
      this[3] = 1;
    }

    return this.check();
  }

  rotateX(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateX(this, this, rad);
    return this.check();
  }

  rotateY(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateY(this, this, rad);
    return this.check();
  }

  rotateZ(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateZ(this, this, rad);
    return this.check();
  }

  scale(b) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, b);
    return this.check();
  }

  slerp(start, target, ratio) {
    switch (arguments.length) {
      case 1:
        ({
          start = IDENTITY_QUATERNION,
          target,
          ratio
        } = arguments[0]);
        break;

      case 2:
        [target, ratio] = arguments;
        start = this;
        break;

      default:
    }

    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.slerp(this, start, target, ratio);
    return this.check();
  }

  transformVector4(vector, result = vector) {
    gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_4__.transformQuat(result, vector, this);
    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkVector)(result, 4);
  }

  lengthSq() {
    return this.lengthSquared();
  }

  setFromAxisAngle(axis, rad) {
    return this.setAxisAngle(axis, rad);
  }

  premultiply(a, b) {
    return this.multiplyLeft(a, b);
  }

  multiply(a, b) {
    return this.multiplyRight(a, b);
  }

}
//# sourceMappingURL=quaternion.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SphericalCoordinates)
/* harmony export */ });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");




const EPSILON = 0.000001;
const EARTH_RADIUS_METERS = 6.371e6;
class SphericalCoordinates {
  constructor({
    phi = 0,
    theta = 0,
    radius = 1,
    bearing = undefined,
    pitch = undefined,
    altitude = undefined,
    radiusScale = EARTH_RADIUS_METERS
  } = {}) {
    this.phi = phi;
    this.theta = theta;
    this.radius = radius || altitude || 1;
    this.radiusScale = radiusScale || 1;

    if (bearing !== undefined) {
      this.bearing = bearing;
    }

    if (pitch !== undefined) {
      this.pitch = pitch;
    }

    this.check();
  }

  toString() {
    return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_0__.config);
  }

  formatString({
    printTypes = false
  }) {
    const f = _lib_common__WEBPACK_IMPORTED_MODULE_0__.formatValue;
    return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
  }

  equals(other) {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.equals)(this.radius, other.radius) && (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.equals)(this.theta, other.theta) && (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.equals)(this.phi, other.phi);
  }

  exactEquals(other) {
    return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
  }

  get bearing() {
    return 180 - (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.phi);
  }

  set bearing(v) {
    this.phi = Math.PI - (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.radians)(v);
  }

  get pitch() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.theta);
  }

  set pitch(v) {
    this.theta = (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.radians)(v);
  }

  get longitude() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.phi);
  }

  get latitude() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.theta);
  }

  get lng() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.phi);
  }

  get lat() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.degrees)(this.theta);
  }

  get z() {
    return (this.radius - 1) * this.radiusScale;
  }

  set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this.check();
  }

  clone() {
    return new SphericalCoordinates().copy(this);
  }

  copy(other) {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;
    return this.check();
  }

  fromLngLatZ([lng, lat, z]) {
    this.radius = 1 + z / this.radiusScale;
    this.phi = (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.radians)(lat);
    this.theta = (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.radians)(lng);
  }

  fromVector3(v) {
    this.radius = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_1__.length(v);

    if (this.radius > 0) {
      this.theta = Math.atan2(v[0], v[1]);
      this.phi = Math.acos((0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.clamp)(v[2] / this.radius, -1, 1));
    }

    return this.check();
  }

  toVector3() {
    return new _vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, this.radius).rotateX({
      radians: this.theta
    }).rotateZ({
      radians: this.phi
    });
  }

  makeSafe() {
    this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    return this;
  }

  check() {
    if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
      throw new Error('SphericalCoordinates: some fields set to invalid numbers');
    }

    return this;
  }

}
//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector2.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





class Vector2 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x = 0, y = 0) {
    super(2);

    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
      }

      this[0] = x;
      this[1] = y;
    }
  }

  set(x, y) {
    this[0] = x;
    this[1] = y;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
    }

    this[0] = object.x;
    this[1] = object.y;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    return object;
  }

  get ELEMENTS() {
    return 2;
  }

  horizontalAngle() {
    return Math.atan2(this.y, this.x);
  }

  verticalAngle() {
    return Math.atan2(this.x, this.y);
  }

  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  transformAsPoint(matrix4) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformAsVector(matrix4) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec2_transformMat4AsVector)(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2x3(matrix2x3) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat2d(this, this, matrix2x3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat2(this, this, matrix2);
    return this.check();
  }

}
//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector3.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





const ORIGIN = [0, 0, 0];
const constants = {};
class Vector3 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZERO() {
    return constants.ZERO = constants.ZERO || Object.freeze(new Vector3(0, 0, 0, 0));
  }

  constructor(x = 0, y = 0, z = 0) {
    super(-0, -0, -0);

    if (arguments.length === 1 && (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x)) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(z);
      }

      this[0] = x;
      this[1] = y;
      this[2] = z;
    }
  }

  set(x, y, z) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.z);
    }

    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    return object;
  }

  get ELEMENTS() {
    return 3;
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  angle(vector) {
    return gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.angle(this, vector);
  }

  cross(vector) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.cross(this, this, vector);
    return this.check();
  }

  rotateX({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateX(this, this, origin, radians);
    return this.check();
  }

  rotateY({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateY(this, this, origin, radians);
    return this.check();
  }

  rotateZ({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateZ(this, this, origin, radians);
    return this.check();
  }

  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  transformAsPoint(matrix4) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformAsVector(matrix4) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec3_transformMat4AsVector)(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec3_transformMat2)(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformQuat(this, this, quaternion);
    return this.check();
  }

}
//# sourceMappingURL=vector3.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector4.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector4.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector4)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





const constants = {};
class Vector4 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZERO() {
    return constants.ZERO = constants.ZERO || Object.freeze(new Vector4(0, 0, 0, 0));
  }

  constructor(x = 0, y = 0, z = 0, w = 0) {
    super(-0, -0, -0, -0);

    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(z);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(w);
      }

      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = w;
    }
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.z);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.w);
    }

    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this;
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    object.w = this[3];
    return object;
  }

  get ELEMENTS() {
    return 4;
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get w() {
    return this[3];
  }

  set w(value) {
    this[3] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  transform(matrix4) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat3)(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat2)(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformQuat(this, this, quaternion);
    return this.check();
  }

  applyMatrix4(m) {
    m.transform(this, this);
    return this;
  }

}
//# sourceMappingURL=vector4.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Euler": () => (/* reexport safe */ _classes_euler__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Matrix3": () => (/* reexport safe */ _classes_matrix3__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Matrix4": () => (/* reexport safe */ _classes_matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Pose": () => (/* reexport safe */ _classes_pose__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _classes_quaternion__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SphericalCoordinates": () => (/* reexport safe */ _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Vector2": () => (/* reexport safe */ _classes_vector2__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Vector3": () => (/* reexport safe */ _classes_vector3__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Vector4": () => (/* reexport safe */ _classes_vector4__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "_Euler": () => (/* reexport safe */ _classes_euler__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "_MathUtils": () => (/* reexport safe */ _lib_math_utils__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "_Pose": () => (/* reexport safe */ _classes_pose__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "_SphericalCoordinates": () => (/* reexport safe */ _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "acos": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.acos),
/* harmony export */   "asin": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.asin),
/* harmony export */   "assert": () => (/* reexport safe */ _lib_assert__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "atan": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.atan),
/* harmony export */   "checkNumber": () => (/* reexport safe */ _lib_validators__WEBPACK_IMPORTED_MODULE_7__.checkNumber),
/* harmony export */   "clamp": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.clamp),
/* harmony export */   "clone": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.clone),
/* harmony export */   "config": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.config),
/* harmony export */   "configure": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.configure),
/* harmony export */   "cos": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.cos),
/* harmony export */   "degrees": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.degrees),
/* harmony export */   "equals": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.equals),
/* harmony export */   "exactEquals": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.exactEquals),
/* harmony export */   "formatValue": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.formatValue),
/* harmony export */   "isArray": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.isArray),
/* harmony export */   "lerp": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.lerp),
/* harmony export */   "radians": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.radians),
/* harmony export */   "sin": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.sin),
/* harmony export */   "tan": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.tan),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.toRadians),
/* harmony export */   "withEpsilon": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_6__.withEpsilon)
/* harmony export */ });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _classes_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/vector2 */ "./node_modules/@math.gl/core/dist/esm/classes/vector2.js");
/* harmony import */ var _classes_vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var _classes_vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/vector4 */ "./node_modules/@math.gl/core/dist/esm/classes/vector4.js");
/* harmony import */ var _classes_matrix3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/matrix3 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix3.js");
/* harmony import */ var _classes_matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/matrix4 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js");
/* harmony import */ var _classes_quaternion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/quaternion */ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_math_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/math-utils */ "./node_modules/@math.gl/core/dist/esm/lib/math-utils.js");
/* harmony import */ var _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/spherical-coordinates */ "./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js");
/* harmony import */ var _classes_pose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/pose */ "./node_modules/@math.gl/core/dist/esm/classes/pose.js");
/* harmony import */ var _classes_euler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/euler */ "./node_modules/@math.gl/core/dist/esm/classes/euler.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");














const globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g
};
const global_ = globals.global || globals.self || globals.window;
global_.mathgl = {
  config: _lib_common__WEBPACK_IMPORTED_MODULE_6__.config
};



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/assert.js":
/*!***********************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/assert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assert)
/* harmony export */ });
function assert(condition, message) {
  if (!condition) {
    throw new Error("math.gl assertion ".concat(message));
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/common.js":
/*!***********************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/common.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acos": () => (/* binding */ acos),
/* harmony export */   "asin": () => (/* binding */ asin),
/* harmony export */   "atan": () => (/* binding */ atan),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "formatValue": () => (/* binding */ formatValue),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "radians": () => (/* binding */ radians),
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "tan": () => (/* binding */ tan),
/* harmony export */   "toDegrees": () => (/* binding */ toDegrees),
/* harmony export */   "toRadians": () => (/* binding */ toRadians),
/* harmony export */   "withEpsilon": () => (/* binding */ withEpsilon)
/* harmony export */ });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");

const RADIANS_TO_DEGREES = 1 / Math.PI * 180;
const DEGREES_TO_RADIANS = 1 / 180 * Math.PI;
const config = {};
config.EPSILON = 1e-12;
config.debug = false;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;

function configure(options = {}) {
  for (const key in options) {
    (0,_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(key in config);
    config[key] = options[key];
  }

  return config;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value, {
  precision = config.precision || 4
} = {}) {
  value = round(value);
  return "".concat(parseFloat(value.toPrecision(precision)));
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && !(value instanceof DataView);
}

function duplicateArray(array) {
  return array.clone ? array.clone() : new Array(array.length);
}

function clone(array) {
  return array.clone ? array.clone() : new Array(...array);
}

function map(value, func, result) {
  if (isArray(value)) {
    result = result || duplicateArray(value);

    for (let i = 0; i < result.length && i < value.length; ++i) {
      result[i] = func(value[i], i, result);
    }

    return result;
  }

  return func(value);
}

function toRadians(degrees) {
  return radians(degrees);
}
function toDegrees(radians) {
  return degrees(radians);
}
function radians(degrees, result) {
  return map(degrees, degrees => degrees * DEGREES_TO_RADIANS, result);
}
function degrees(radians, result) {
  return map(radians, radians => radians * RADIANS_TO_DEGREES, result);
}
function sin(radians) {
  return map(radians, angle => Math.sin(angle));
}
function cos(radians) {
  return map(radians, angle => Math.cos(angle));
}
function tan(radians) {
  return map(radians, angle => Math.tan(angle));
}
function asin(radians) {
  return map(radians, angle => Math.asin(angle));
}
function acos(radians) {
  return map(radians, angle => Math.acos(angle));
}
function atan(radians) {
  return map(radians, angle => Math.atan(angle));
}
function clamp(value, min, max) {
  return map(value, value => Math.max(min, Math.min(max, value)));
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map((ai, i) => lerp(ai, b[i], t));
  }

  return t * b + (1 - t) * a;
}
function equals(a, b, epsilon) {
  const oldEpsilon = config.EPSILON;

  if (epsilon) {
    config.EPSILON = epsilon;
  }

  try {
    if (a === b) {
      return true;
    }

    if (isArray(a) && isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }

      for (let i = 0; i < a.length; ++i) {
        if (!equals(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    if (a && a.equals) {
      return a.equals(b);
    }

    if (b && b.equals) {
      return b.equals(a);
    }

    if (Number.isFinite(a) && Number.isFinite(b)) {
      return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
    }

    return false;
  } finally {
    config.EPSILON = oldEpsilon;
  }
}
function exactEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }

    if (a.exactEquals) {
      return a.exactEquals(b);
    }
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; ++i) {
      if (!exactEquals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return false;
}
function withEpsilon(EPSILON, func) {
  const oldPrecision = config.EPSILON;
  config.EPSILON = EPSILON;
  let value;

  try {
    value = func();
  } finally {
    config.EPSILON = oldPrecision;
  }

  return value;
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vec2_transformMat4AsVector": () => (/* binding */ vec2_transformMat4AsVector),
/* harmony export */   "vec3_transformMat2": () => (/* binding */ vec3_transformMat2),
/* harmony export */   "vec3_transformMat4AsVector": () => (/* binding */ vec3_transformMat4AsVector),
/* harmony export */   "vec4_transformMat2": () => (/* binding */ vec4_transformMat2),
/* harmony export */   "vec4_transformMat3": () => (/* binding */ vec4_transformMat3)
/* harmony export */ });
function vec2_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const w = m[3] * x + m[7] * y || 1.0;
  out[0] = (m[0] * x + m[4] * y) / w;
  out[1] = (m[1] * x + m[5] * y) / w;
  return out;
}
function vec3_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = m[3] * x + m[7] * y + m[11] * z || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}
function vec3_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  return out;
}
function vec4_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function vec4_transformMat3(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  out[0] = m[0] * x + m[3] * y + m[6] * z;
  out[1] = m[1] * x + m[4] * y + m[7] * z;
  out[2] = m[2] * x + m[5] * y + m[8] * z;
  out[3] = a[3];
  return out;
}
//# sourceMappingURL=gl-matrix-extras.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/math-utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/math-utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  EPSILON1: 1e-1,
  EPSILON2: 1e-2,
  EPSILON3: 1e-3,
  EPSILON4: 1e-4,
  EPSILON5: 1e-5,
  EPSILON6: 1e-6,
  EPSILON7: 1e-7,
  EPSILON8: 1e-8,
  EPSILON9: 1e-9,
  EPSILON10: 1e-10,
  EPSILON11: 1e-11,
  EPSILON12: 1e-12,
  EPSILON13: 1e-13,
  EPSILON14: 1e-14,
  EPSILON15: 1e-15,
  EPSILON16: 1e-16,
  EPSILON17: 1e-17,
  EPSILON18: 1e-18,
  EPSILON19: 1e-19,
  EPSILON20: 1e-20,
  PI_OVER_TWO: Math.PI / 2,
  PI_OVER_FOUR: Math.PI / 4,
  PI_OVER_SIX: Math.PI / 6,
  TWO_PI: Math.PI * 2
});
//# sourceMappingURL=math-utils.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/validators.js":
/*!***************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/validators.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNumber": () => (/* binding */ checkNumber),
/* harmony export */   "checkVector": () => (/* binding */ checkVector),
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "validateVector": () => (/* binding */ validateVector)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");

function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  for (let i = 0; i < v.length; ++i) {
    if (!Number.isFinite(v[i])) {
      return false;
    }
  }

  return true;
}
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}
function checkVector(v, length, callerName = '') {
  if (_common__WEBPACK_IMPORTED_MODULE_0__.config.debug && !validateVector(v, length)) {
    throw new Error("math.gl: ".concat(callerName, " some fields set to invalid numbers'"));
  }

  return v;
}
const map = {};
function deprecated(method, version) {
  if (!map[method]) {
    map[method] = true;
    console.warn("".concat(method, " has been removed in version ").concat(version, ", see upgrade guide for more information"));
  }
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "fromMat2d": () => (/* binding */ fromMat2d),
/* harmony export */   "fromMat4": () => (/* binding */ fromMat4),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "normalFromMat4": () => (/* binding */ normalFromMat4),
/* harmony export */   "projection": () => (/* binding */ projection),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "calculateW": () => (/* binding */ calculateW),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "conjugate": () => (/* binding */ conjugate),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "exp": () => (/* binding */ exp),
/* harmony export */   "fromEuler": () => (/* binding */ fromEuler),
/* harmony export */   "fromMat3": () => (/* binding */ fromMat3),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "getAngle": () => (/* binding */ getAngle),
/* harmony export */   "getAxisAngle": () => (/* binding */ getAxisAngle),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "ln": () => (/* binding */ ln),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "rotationTo": () => (/* binding */ rotationTo),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "setAxes": () => (/* binding */ setAxes),
/* harmony export */   "setAxisAngle": () => (/* binding */ setAxisAngle),
/* harmony export */   "slerp": () => (/* binding */ slerp),
/* harmony export */   "sqlerp": () => (/* binding */ sqlerp),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_3__.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat2": () => (/* binding */ transformMat2),
/* harmony export */   "transformMat2d": () => (/* binding */ transformMat2d),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/libnoise-ts/interpolation.js":
/*!***************************************************!*\
  !*** ./node_modules/libnoise-ts/interpolation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Interpolation = /** @class */ (function () {
    function Interpolation() {
    }
    /**
     * Performs cubic interpolation between two values bound between two other
     * values.
     *
     * The alpha value should range from 0.0 to 1.0.  If the alpha value is
     * 0.0, this function returns n1.  If the alpha value is 1.0, this
     * function returns n2.
     *
     * @param n0 The value before the first value.
     * @param n1 The first value.
     * @param n2 The second value.
     * @param n3 The value after the second value.
     * @param a The alpha value.
     *
     * @returns The interpolated value.
     *
     */
    Interpolation.cubic = function (n0, n1, n2, n3, a) {
        var p = ((n3 - n2) - (n0 - n1));
        var q = ((n0 - n1) - p);
        var r = (n2 - n0);
        var s = (n1);
        return (p * a * a * a + q * a * a + r * a + s);
    };
    /**
     * Performs linear interpolation between two values.
     *
     * The alpha value should range from 0.0 to 1.0.  If the alpha value is
     * 0.0, this function returns n0.  If the alpha value is 1.0, this
     * function returns n1.
     *
     * @param n0 The first value.
     * @param n1 The second value.
     * @param a The alpha value.
     *
     * @returns The interpolated value.
     */
    Interpolation.linear = function (n0, n1, a) {
        return ((1.0 - a) * (n0)) + (a * (n1));
    };
    /**
     * Maps a value onto a cubic S-curve.
     * The derivative of a cubic S-curve is zero at `a = 0.0` and `a = 1.0`
     *
     * @param a The value to map onto a cubic S-curve. Should range from 0.0 to 1.0.
     *
     * @returns The mapped value.
     */
    Interpolation.cubicSCurve = function (a) {
        return (a * a * (3.0 - 2.0 * a));
    };
    /**
     * Maps a value onto a quintic S-curve.
     * The first derivative of a quintic S-curve is zero at `a = 0.0` and `a = 1.0`
     *
     * The second derivative of a quintic S-curve is zero at `a = 0.0` and `a = 1.0`
     *
     * @param a The value to map onto a quintic S-curve. Should range from 0.0 to 1.0.
     *
     * @returns The mapped value.
     */
    Interpolation.quinticSCurve = function (a) {
        var a3 = (a * a * a);
        var a4 = (a3 * a);
        var a5 = (a4 * a);
        return ((6.0 * a5) - (15.0 * a4) + (10.0 * a3));
    };
    return Interpolation;
}());
exports["default"] = Interpolation;


/***/ }),

/***/ "./node_modules/libnoise-ts/mathconsts.js":
/*!************************************************!*\
  !*** ./node_modules/libnoise-ts/mathconsts.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MathConsts = /** @class */ (function () {
    function MathConsts() {
    }
    /**
     * Pi. This is the ratio of the circumference of a circle to its diameter.
     */
    MathConsts.PI = Math.PI;
    /**
     * The square root of 2.
     */
    MathConsts.SQRT_2 = Math.SQRT2;
    /**
     * The square root of 3.
     */
    MathConsts.SQRT_3 = 1.7320508075688772935;
    /**
     * Convert degrees to radians by multiplying by this constant.
     */
    MathConsts.DEG_TO_RAD = Math.PI / 180.0;
    /**
     * Convert radians to degrees by multiplying by this constant.
     */
    MathConsts.RAD_TO_DEG = 1.0 / (Math.PI / 180.0);
    return MathConsts;
}());
exports["default"] = MathConsts;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/Module.js":
/*!***************************************************!*\
  !*** ./node_modules/libnoise-ts/module/Module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Module = /** @class */ (function () {
    function Module() {
    }
    return Module;
}());
exports["default"] = Module;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js":
/*!**********************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/GeneratorModule.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Module_1 = __importDefault(__webpack_require__(/*! ./../Module */ "./node_modules/libnoise-ts/module/Module.js"));
/**
 * Base class for generate modules.
 * Generator modules output a value generated by a coherent-noise
 * function or some other mathematical function.
 */
var GeneratorModule = /** @class */ (function (_super) {
    __extends(GeneratorModule, _super);
    function GeneratorModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GeneratorModule;
}(Module_1.default));
exports["default"] = GeneratorModule;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/billow.js":
/*!*************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/billow.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var noisegen_1 = __importStar(__webpack_require__(/*! ./../../noisegen */ "./node_modules/libnoise-ts/noisegen.js"));
var util_1 = __webpack_require__(/*! ./../../util */ "./node_modules/libnoise-ts/util/index.js");
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs three-dimensional "billowy" noise.
 *
 * This noise module generates "billowy" noise suitable for clouds and
 * rocks.
 *
 * This noise module is nearly identical to Perlin except this noise module
 * modifies each octave with an absolute-value function.  See the
 * documentation of Perlin for more information.
 */
var Billow = /** @class */ (function (_super) {
    __extends(Billow, _super);
    /**
     * @param frequency Frequency of the first octave.
     * @param lacunarity Frequency multiplier between successive octaves.
     * @param octaves Total number of octaves that generate the billowy noise.
     * @param persistence Persistence value of the billowy noise.
     * @param seed Seed value used by the billowy-noise function.
     * @param quality Quality of the billowy noise.
     */
    function Billow(frequency, lacunarity, octaves, persistence, seed, quality) {
        var _this = _super.call(this) || this;
        _this._octaves = Billow.DEFAULT_BILLOW_OCTAVE_COUNT;
        _this.frequency = frequency || Billow.DEFAULT_BILLOW_FREQUENCY;
        _this.lacunarity = lacunarity || Billow.DEFAULT_BILLOW_LACUNARITY;
        _this.octaves = octaves || Billow.DEFAULT_BILLOW_OCTAVE_COUNT;
        _this.persistence = persistence || Billow.DEFAULT_BILLOW_PERSISTENCE;
        _this.seed = seed || Billow.DEFAULT_BILLOW_SEED;
        _this.quality = quality || Billow.DEFAULT_BILLOW_QUALITY;
        return _this;
    }
    Object.defineProperty(Billow.prototype, "octaves", {
        /**
         * Total number of octaves that generate the billowy noise.
         */
        get: function () {
            return this._octaves;
        },
        set: function (value) {
            if (value > Billow.BILLOW_MAX_OCTAVE) {
                throw new Error("Cannot set octaves greater than maximum of " + Billow.BILLOW_MAX_OCTAVE);
            }
            this._octaves = value;
        },
        enumerable: true,
        configurable: true
    });
    Billow.prototype.getValue = function (x, y, z) {
        var nx;
        var ny;
        var nz;
        var value = 0.0;
        var signal = 0.0;
        var persist = 1.0;
        x = (x * this.frequency);
        y = (y * this.frequency);
        z = (z * this.frequency);
        for (var octave = 0; octave < this.octaves; octave++) {
            // Make sure that these floating-point values have the same range as a 32-
            // bit integer so that we can pass them to the coherent-noise functions.
            nx = util_1.makeInt32Range(x);
            ny = util_1.makeInt32Range(y);
            nz = util_1.makeInt32Range(z);
            // Get the coherent-noise value from the input value and add it to the final result.
            signal = 2.0 * Math.abs(noisegen_1.default.gradientCoherentNoise3D(nx, ny, nz, ((this.seed + octave) & 0xffffffff), this.quality)) - 1.0;
            value += signal * persist;
            // Prepare the next octave.
            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
            persist *= this.persistence;
        }
        return value + 0.5;
    };
    Billow.DEFAULT_BILLOW_FREQUENCY = 1.0;
    Billow.DEFAULT_BILLOW_LACUNARITY = 2.0;
    Billow.DEFAULT_BILLOW_OCTAVE_COUNT = 6;
    Billow.DEFAULT_BILLOW_PERSISTENCE = 0.5;
    Billow.DEFAULT_BILLOW_QUALITY = noisegen_1.Quality.Standard;
    Billow.DEFAULT_BILLOW_SEED = 0;
    Billow.BILLOW_MAX_OCTAVE = 30;
    return Billow;
}(GeneratorModule_1.default));
exports["default"] = Billow;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/checkerboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/checkerboard.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(/*! ./../../util */ "./node_modules/libnoise-ts/util/index.js");
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs a checkerboard pattern.
 *
 * This noise module outputs unit-sized blocks of alternating values.
 * The values of these blocks alternate between -1.0 and +1.0.
 *
 * This noise module is not really useful by itself, but it is often used
 * for debugging purposes.
 *
 * This noise module does not require any source modules.
 */
var Checkerboard = /** @class */ (function (_super) {
    __extends(Checkerboard, _super);
    function Checkerboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkerboard.prototype.getValue = function (x, y, z) {
        var ix = Math.floor(util_1.makeInt32Range(x));
        var iy = Math.floor(util_1.makeInt32Range(y));
        var iz = Math.floor(util_1.makeInt32Range(z));
        return (ix & 1 ^ iy & 1 ^ iz & 1) ? -1.0 : 1.0;
    };
    return Checkerboard;
}(GeneratorModule_1.default));
exports["default"] = Checkerboard;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/const.js":
/*!************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/const.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs a constant value.
 *
 * This noise module is not useful by itself, but it is often used as a
 * source module for other noise modules.
 *
 * This noise module does not require any source modules.
 */
var Const = /** @class */ (function (_super) {
    __extends(Const, _super);
    /**
     * @param value The constant output value for this noise module.
     */
    function Const(value) {
        var _this = _super.call(this) || this;
        _this.value = value || Const.DEFAULT_CONST_VALUE;
        return _this;
    }
    Const.prototype.getValue = function () {
        return this.value;
    };
    Const.DEFAULT_CONST_VALUE = 0.0;
    return Const;
}(GeneratorModule_1.default));
exports["default"] = Const;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/cylinders.js":
/*!****************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/cylinders.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs concentric cylinders.
 *
 * This noise module outputs concentric cylinders centered on the origin.
 * These cylinders are oriented along the y axis similar to the
 * concentric rings of a tree.  Each cylinder extends infinitely along
 * the y axis.
 *
 * The first cylinder has a radius of 1.0.  Each subsequent cylinder has
 * a radius that is 1.0 unit larger than the previous cylinder.
 *
 * The output value from this noise module is determined by the distance
 * between the input value and the the nearest cylinder surface.  The
 * input values that are located on a cylinder surface are given the
 * output value 1.0 and the input values that are equidistant from two
 * cylinder surfaces are given the output value -1.0.
 *
 * An application can change the frequency of the concentric cylinders.
 * Increasing the frequency reduces the distances between cylinders.
 *
 * This noise module, modified with some low-frequency, low-power
 * turbulence, is useful for generating wood-like textures.
 *
 * This noise module does not require any source modules.
 */
var Cylinders = /** @class */ (function (_super) {
    __extends(Cylinders, _super);
    /**
     * @param frequency The frequency of the concentric cylinders.
     */
    function Cylinders(frequency) {
        var _this = _super.call(this) || this;
        _this.frequency = frequency || Cylinders.DEFAULT_CYLINDERS_FREQUENCY;
        return _this;
    }
    Cylinders.prototype.getValue = function (x, y, z) {
        x = (x * this.frequency);
        y = (y * this.frequency);
        var distFromCenter = Math.sqrt(x * x + z * z);
        var distFromSmallerSphere = distFromCenter - Math.floor(distFromCenter);
        var distFromLargerSphere = 1.0 - distFromSmallerSphere;
        var nearestDist = Math.min(distFromSmallerSphere, distFromLargerSphere);
        return 1.0 - (nearestDist * 4.0); // Puts it in the -1.0 to +1.0 range.
    };
    Cylinders.DEFAULT_CYLINDERS_FREQUENCY = 1.0;
    return Cylinders;
}(GeneratorModule_1.default));
exports["default"] = Cylinders;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/index.js":
/*!************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var billow_1 = __importDefault(__webpack_require__(/*! ./billow */ "./node_modules/libnoise-ts/module/generator/billow.js"));
exports.Billow = billow_1.default;
var checkerboard_1 = __importDefault(__webpack_require__(/*! ./checkerboard */ "./node_modules/libnoise-ts/module/generator/checkerboard.js"));
exports.Checkerboard = checkerboard_1.default;
var const_1 = __importDefault(__webpack_require__(/*! ./const */ "./node_modules/libnoise-ts/module/generator/const.js"));
exports.Const = const_1.default;
var cylinders_1 = __importDefault(__webpack_require__(/*! ./cylinders */ "./node_modules/libnoise-ts/module/generator/cylinders.js"));
exports.Cylinders = cylinders_1.default;
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
exports["default"] = GeneratorModule_1.default;
var perlin_1 = __importDefault(__webpack_require__(/*! ./perlin */ "./node_modules/libnoise-ts/module/generator/perlin.js"));
exports.Perlin = perlin_1.default;
var ridgedmulti_1 = __importDefault(__webpack_require__(/*! ./ridgedmulti */ "./node_modules/libnoise-ts/module/generator/ridgedmulti.js"));
exports.RidgedMulti = ridgedmulti_1.default;
var spheres_1 = __importDefault(__webpack_require__(/*! ./spheres */ "./node_modules/libnoise-ts/module/generator/spheres.js"));
exports.Spheres = spheres_1.default;
var voronoi_1 = __importDefault(__webpack_require__(/*! ./voronoi */ "./node_modules/libnoise-ts/module/generator/voronoi.js"));
exports.Voronoi = voronoi_1.default;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/perlin.js":
/*!*************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/perlin.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var noisegen_1 = __importStar(__webpack_require__(/*! ./../../noisegen */ "./node_modules/libnoise-ts/noisegen.js"));
var util_1 = __webpack_require__(/*! ./../../util */ "./node_modules/libnoise-ts/util/index.js");
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs 3-dimensional Perlin noise.
 *
 * Perlin noise is the sum of several coherent-noise functions of
 * ever-increasing frequencies and ever-decreasing amplitudes.
 *
 * An important property of Perlin noise is that a small change in the
 * input value will produce a small change in the output value, while a
 * large change in the input value will produce a random change in the
 * output value.
 *
 * This noise module outputs Perlin-noise values that usually range from
 * -1.0 to +1.0, but there are no guarantees that all output values will
 * exist within that range.
 *
 * This noise module does not require any source modules.
 *
 * ## Octaves
 *
 * The number of octaves control the amount of detail of the
 * Perlin noise.  Adding more octaves increases the detail of the Perlin
 * noise, but with the drawback of increasing the calculation time.
 *
 * An octave is one of the coherent-noise functions in a series of
 * coherent-noise functions that are added together to form Perlin
 * noise.
 *
 * These coherent-noise functions are called octaves because each octave
 * has, by default, double the frequency of the previous octave.  Musical
 * tones have this property as well; a musical C tone that is one octave
 * higher than the previous C tone has double its frequency.
 *
 * ## Persistence
 *
 * The persistence value controls the roughness of the Perlin
 * noise.  Larger values produce rougher noise.
 *
 * The persistence value determines how quickly the amplitudes diminish
 * for successive octaves.  The amplitude of the first octave is 1.0.
 * The amplitude of each subsequent octave is equal to the product of the
 * previous octave's amplitude and the persistence value.  So a
 * persistence value of 0.5 sets the amplitude of the first octave to
 * 1.0; the second, 0.5; the third, 0.25; etc.
 *
 * ## Lacunarity
 *
 * The lacunarity specifies the frequency multiplier between successive
 * octaves.
 *
 * The effect of modifying the lacunarity is subtle; you may need to play
 * with the lacunarity value to determine the effects.  For best results,
 * set the lacunarity to a number between 1.5 and 3.5.
 *
 * ## References & acknowledgements
 *
 * [The Noise Machine](http://www.noisemachine.com/talk1) -
 * From the master, Ken Perlin himself.  This page contains a
 * presentation that describes Perlin noise and some of its variants.
 * He won an Oscar for creating the Perlin noise algorithm!
 *
 * [Perlin Noise](http://freespace.virgin.net/hugo.elias/models/m_perlin.htm) -
 * Hugo Elias's webpage contains a very good
 * description of Perlin noise and describes its many applications.  This
 * page gave me the inspiration to create libnoise in the first place.
 * Now that I know how to generate Perlin noise, I will never again use
 * cheesy subdivision algorithms to create terrain (unless I absolutely
 * need the speed.)
 *
 * [The Perlin noise math FAQ](http://www.robo-murito.net/code/perlin-noise-math-faq.html) -
 * A good page that describes Perlin noise in
 * plain English with only a minor amount of math.  During development of
 * libnoise, I noticed that my coherent-noise function generated terrain
 * with some "regularity" to the terrain features.  This page describes a
 * better coherent-noise function called gradient noise.  This
 * version of noise::module::Perlin uses gradient coherent noise to
 * generate Perlin noise.
 */
var Perlin = /** @class */ (function (_super) {
    __extends(Perlin, _super);
    /**
     * @param frequency Frequency of the first octave.
     * @param lacunarity Frequency multiplier between successive octaves.
     * @param octaves Total number of octaves that generate the perlin noise.
     * @param persistence Persistence value of the perlin noise.
     * @param seed Seed value used by the perlin-noise function.
     * @param quality Quality of the perlin noise.
     */
    function Perlin(frequency, lacunarity, octaves, persistence, seed, quality) {
        var _this = _super.call(this) || this;
        _this._octaves = Perlin.DEFAULT_PERLIN_OCTAVE_COUNT;
        _this.frequency = frequency || Perlin.DEFAULT_PERLIN_FREQUENCY;
        _this.lacunarity = lacunarity || Perlin.DEFAULT_PERLIN_LACUNARITY;
        _this.octaves = octaves || Perlin.DEFAULT_PERLIN_OCTAVE_COUNT;
        _this.persistence = persistence || Perlin.DEFAULT_PERLIN_PERSISTENCE;
        _this.seed = seed || Perlin.DEFAULT_PERLIN_SEED;
        _this.quality = quality || Perlin.DEFAULT_PERLIN_QUALITY;
        return _this;
    }
    Object.defineProperty(Perlin.prototype, "octaves", {
        /**
         * Total number of octaves that generate the perlin noise.
         */
        get: function () {
            return this._octaves;
        },
        set: function (value) {
            if (value > Perlin.PERLIN_MAX_OCTAVE) {
                throw new Error("Cannot set octaves greater than maximum of " + Perlin.PERLIN_MAX_OCTAVE);
            }
            this._octaves = value;
        },
        enumerable: true,
        configurable: true
    });
    Perlin.prototype.getValue = function (x, y, z) {
        var nx, ny, nz;
        var value = 0.0;
        var signal = 0.0;
        var persist = 1.0;
        x = (x * this.frequency);
        y = (y * this.frequency);
        z = (z * this.frequency);
        for (var octave = 0; octave < this.octaves; octave++) {
            // Make sure that these floating-point values have the same range as a 32-
            // bit integer so that we can pass them to the coherent-noise functions.
            nx = util_1.makeInt32Range(x);
            ny = util_1.makeInt32Range(y);
            nz = util_1.makeInt32Range(z);
            // Get the coherent-noise value from the input value and add it to the final result.
            signal = noisegen_1.default.gradientCoherentNoise3D(nx, ny, nz, ((this.seed + octave) & 0xffffffff), this.quality);
            value += signal * persist;
            // Prepare the next octave.
            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
            persist *= this.persistence;
        }
        return value;
    };
    Perlin.DEFAULT_PERLIN_FREQUENCY = 1.0;
    Perlin.DEFAULT_PERLIN_LACUNARITY = 2.0;
    Perlin.DEFAULT_PERLIN_OCTAVE_COUNT = 6;
    Perlin.DEFAULT_PERLIN_PERSISTENCE = 0.5;
    Perlin.DEFAULT_PERLIN_QUALITY = noisegen_1.Quality.Standard;
    Perlin.DEFAULT_PERLIN_SEED = 0;
    Perlin.PERLIN_MAX_OCTAVE = 30;
    return Perlin;
}(GeneratorModule_1.default));
exports["default"] = Perlin;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/ridgedmulti.js":
/*!******************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/ridgedmulti.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var noisegen_1 = __importStar(__webpack_require__(/*! ./../../noisegen */ "./node_modules/libnoise-ts/noisegen.js"));
var util_1 = __webpack_require__(/*! ./../../util */ "./node_modules/libnoise-ts/util/index.js");
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs 3-dimensional ridged-multifractal noise.
 *
 * This noise module, heavily based on the Perlin-noise module, generates
 * ridged-multifractal noise.  Ridged-multifractal noise is generated in
 * much of the same way as Perlin noise, except the output of each octave
 * is modified by an absolute-value function.  Modifying the octave
 * values in this way produces ridge-like formations.
 *
 * Ridged-multifractal noise does not use a persistence value.  This is
 * because the persistence values of the octaves are based on the values
 * generated from from previous octaves, creating a feedback loop (or
 * that's what it looks like after reading the code.)
 *
 * This noise module outputs ridged-multifractal-noise values that
 * usually range from -1.0 to +1.0, but there are no guarantees that all
 * output values will exist within that range.
 *
 * @note For ridged-multifractal noise generated with only one octave,
 * the output value ranges from -1.0 to 0.0.
 *
 * Ridged-multifractal noise is often used to generate craggy mountainous
 * terrain or marble-like textures.
 *
 * This noise module does not require any source modules.
 *
 * ## Octaves
 *
 * The number of octaves control the *amount of detail* of the
 * ridged-multifractal noise.  Adding more octaves increases the detail
 * of the ridged-multifractal noise, but with the drawback of increasing
 * the calculation time.
 *
 * ## Lacunarity
 *
 * The lacunarity specifies the frequency multiplier between successive
 * octaves.
 *
 * The effect of modifying the lacunarity is subtle; you may need to play
 * with the lacunarity value to determine the effects.  For best results,
 * set the lacunarity to a number between 1.5 and 3.5.
 *
 * ## References & Acknowledgments
 *
 * [F. Kenton "Doc Mojo" Musgrave's texturing page](http://www.texturingandmodeling.com/Musgrave.html) -
 * This page contains links to source code that generates ridged-multifractal noise, among
 * other types of noise.  The source file [fractal.c](http://www.texturingandmodeling.com/CODE/MUSGRAVE/CLOUD/fractal.c)
 * contains the code I used in my ridged-multifractal class (see the RidgedMultifractal() function.)
 * This code was written by F. Kenton Musgrave, the person who created [MojoWorld](http://www.pandromeda.com).
 * He is also one of the authors in *Texturing and Modeling: A Procedural Approach*
 * (Morgan Kaufmann, 2002. ISBN 1-55860-848-6.)
 */
var RidgedMulti = /** @class */ (function (_super) {
    __extends(RidgedMulti, _super);
    /**
     * @param frequency Frequency of the first octave.
     * @param lacunarity Frequency multiplier between successive octaves.
     * @param octaves Total number of octaves that generate the ridged-multifractal noise.
     * @param seed Seed value used by the ridged-multifractal-noise function.
     * @param quality Quality of the ridged-multifractal noise.
     * @param offset Offset used when generating ridged-multifractal noise.
     * @param gain Gain used when generating ridged-multifractal noise.
     */
    function RidgedMulti(frequency, lacunarity, octaves, seed, quality, offset, gain) {
        var _this = _super.call(this) || this;
        _this._octaves = RidgedMulti.DEFAULT_RIDGED_OCTAVE_COUNT;
        _this._lacunarity = RidgedMulti.DEFAULT_RIDGED_LACUNARITY;
        /**
         * Contains the spectral weights for each octave.
         */
        _this.weights = [];
        _this.frequency = frequency || RidgedMulti.DEFAULT_RIDGED_FREQUENCY;
        _this.lacunarity = lacunarity || RidgedMulti.DEFAULT_RIDGED_LACUNARITY;
        _this.octaves = octaves || RidgedMulti.DEFAULT_RIDGED_OCTAVE_COUNT;
        _this.seed = seed || RidgedMulti.DEFAULT_RIDGED_SEED;
        _this.quality = quality || RidgedMulti.DEFAULT_RIDGED_QUALITY;
        _this.offset = offset || RidgedMulti.DEFAULT_RIDGED_OFFSET;
        _this.gain = gain || RidgedMulti.DEFAULT_RIDGED_GAIN;
        return _this;
    }
    Object.defineProperty(RidgedMulti.prototype, "lacunarity", {
        /**
         * Frequency multiplier between successive octaves.
         */
        get: function () {
            return this._lacunarity;
        },
        set: function (v) {
            this._lacunarity = v;
            var h = 1.0;
            var frequency = 1.0;
            this.weights = [];
            for (var i = 0; i < RidgedMulti.RIDGED_MAX_OCTAVE; i++) {
                // Compute weight for each frequency.
                this.weights[i] = Math.pow(frequency, -h);
                frequency *= this.lacunarity;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RidgedMulti.prototype, "octaves", {
        /**
         * Total number of octaves that generate the ridged-multifractal noise.
         */
        get: function () {
            return this._octaves;
        },
        set: function (value) {
            if (value > RidgedMulti.RIDGED_MAX_OCTAVE) {
                throw new Error("Cannot set octaves greater than maximum of " + RidgedMulti.RIDGED_MAX_OCTAVE);
            }
            this._octaves = value;
        },
        enumerable: true,
        configurable: true
    });
    RidgedMulti.prototype.getValue = function (x, y, z) {
        var nx;
        var ny;
        var nz;
        var seed;
        var value = 0.0;
        var signal = 0.0;
        var weight = 1.0;
        x = (x * this.frequency);
        y = (y * this.frequency);
        z = (z * this.frequency);
        for (var octave = 0; octave < this.octaves; octave++) {
            // Make sure that these floating-point values have the same range as a 32-
            // bit integer so that we can pass them to the coherent-noise functions.
            nx = util_1.makeInt32Range(x);
            ny = util_1.makeInt32Range(y);
            nz = util_1.makeInt32Range(z);
            // Get the coherent-noise value.
            seed = (this.seed + octave) & 0x7fffffff;
            signal = noisegen_1.default.gradientCoherentNoise3D(nx, ny, nz, seed, this.quality);
            // Make the ridges.
            signal = Math.abs(signal);
            signal = this.offset - signal;
            // Square the signal to increase the sharpness of the ridges.
            signal *= signal;
            // The weighting from the previous octave is applied to the signal.
            // Larger values have higher weights, producing sharp points along the
            // ridges.
            signal *= weight;
            // Weight successive contributions by the previous signal.
            weight = signal * this.gain;
            // Clamp value to within 0 and 1
            weight = util_1.clamp(weight, 0.0, 1.0);
            // Add the signal to the output value.
            value += (signal * this.weights[octave]);
            // Go to the next octave.
            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
        }
        return (value * 1.25) - 1.0;
    };
    RidgedMulti.DEFAULT_RIDGED_FREQUENCY = 1.0;
    RidgedMulti.DEFAULT_RIDGED_LACUNARITY = 2.0;
    RidgedMulti.DEFAULT_RIDGED_OCTAVE_COUNT = 6;
    RidgedMulti.DEFAULT_RIDGED_QUALITY = noisegen_1.Quality.Standard;
    RidgedMulti.DEFAULT_RIDGED_SEED = 0;
    RidgedMulti.DEFAULT_RIDGED_OFFSET = 1.0;
    RidgedMulti.DEFAULT_RIDGED_GAIN = 2.0;
    RidgedMulti.RIDGED_MAX_OCTAVE = 30;
    return RidgedMulti;
}(GeneratorModule_1.default));
exports["default"] = RidgedMulti;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/spheres.js":
/*!**************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/spheres.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs concentric spheres.
 *
 * This noise module outputs concentric spheres centered on the origin
 * like the concentric rings of an onion.
 *
 * The first sphere has a radius of 1.0.  Each subsequent sphere has a
 * radius that is 1.0 unit larger than the previous sphere.
 *
 * The output value from this noise module is determined by the distance
 * between the input value and the the nearest spherical surface.  The
 * input values that are located on a spherical surface are given the
 * output value 1.0 and the input values that are equidistant from two
 * spherical surfaces are given the output value -1.0.
 *
 * An application can change the frequency of the concentric spheres.
 * Increasing the frequency reduces the distances between spheres.
 *
 * This noise module, modified with some low-frequency, low-power
 * turbulence, is useful for generating agate-like textures.
 *
 * This noise module does not require any source modules.
 */
var Spheres = /** @class */ (function (_super) {
    __extends(Spheres, _super);
    /**
     * @param frequency Frequency of the concentric spheres.
     */
    function Spheres(frequency) {
        var _this = _super.call(this) || this;
        _this.frequency = frequency || Spheres.DEFAULT_SPHERES_FREQUENCY;
        return _this;
    }
    Spheres.prototype.getValue = function (x, y, z) {
        x = (x * this.frequency);
        y = (y * this.frequency);
        z = (z * this.frequency);
        var distFromCenter = Math.sqrt(x * x + y * y + z * z);
        var distFromSmallerSphere = distFromCenter - Math.floor(distFromCenter);
        var distFromLargerSphere = 1.0 - distFromSmallerSphere;
        var nearestDist = Math.min(distFromSmallerSphere, distFromLargerSphere);
        return 1.0 - (nearestDist * 4.0); // Puts it in the -1.0 to +1.0 range.
    };
    Spheres.DEFAULT_SPHERES_FREQUENCY = 4.0;
    return Spheres;
}(GeneratorModule_1.default));
exports["default"] = Spheres;


/***/ }),

/***/ "./node_modules/libnoise-ts/module/generator/voronoi.js":
/*!**************************************************************!*\
  !*** ./node_modules/libnoise-ts/module/generator/voronoi.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mathconsts_1 = __importDefault(__webpack_require__(/*! ./../../mathconsts */ "./node_modules/libnoise-ts/mathconsts.js"));
var noisegen_1 = __importDefault(__webpack_require__(/*! ./../../noisegen */ "./node_modules/libnoise-ts/noisegen.js"));
var GeneratorModule_1 = __importDefault(__webpack_require__(/*! ./GeneratorModule */ "./node_modules/libnoise-ts/module/generator/GeneratorModule.js"));
/**
 * Noise module that outputs Voronoi cells.
 *
 * In mathematics, a *Voronoi cell* is a region containing all the
 * points that are closer to a specific *seed point* than to any
 * other seed point.  These cells mesh with one another, producing
 * polygon-like formations.
 *
 * By default, this noise module randomly places a seed point within
 * each unit cube.  By modifying the *frequency* of the seed points,
 * an application can change the distance between seed points.  The
 * higher the frequency, the closer together this noise module places
 * the seed points, which reduces the size of the cells.
 *
 * This noise module assigns each Voronoi cell with a random constant
 * value from a coherent-noise function.  The *displacement value*
 * controls the range of random values to assign to each cell.  The
 * range of random values is +/- the displacement value.
 *
 * To modify the random positions of the seed points, update the seed value.
 *
 * This noise module can optionally add the distance from the nearest
 * seed to the output value.  To enable this feature, set the `distance` flag
 * to true.  This causes the points in the Voronoi cells
 * to increase in value the further away that point is from the nearest
 * seed point.
 *
 * Voronoi cells are often used to generate cracked-mud terrain
 * formations or crystal-like textures.
 *
 * This noise module requires no source modules.
 */
var Voronoi = /** @class */ (function (_super) {
    __extends(Voronoi, _super);
    /**
     *
     * @param frequency Frequency of the seed points.
     * @param displacement Scale of the random displacement to apply to each Voronoi cell.
     * @param distance Determines if the distance from the nearest seed point is applied to the output value.
     * @param seed Seed value used by the coherent-noise function to determine the positions of the seed points.
     */
    function Voronoi(frequency, displacement, distance, seed) {
        var _this = _super.call(this) || this;
        _this.frequency = frequency || Voronoi.DEFAULT_VORONOI_FREQUENCY;
        _this.displacement = displacement || Voronoi.DEFAULT_VORONOI_DISPLACEMENT;
        _this.distance = distance || false;
        _this.seed = seed || Voronoi.DEFAULT_VORONOI_SEED;
        return _this;
    }
    Voronoi.prototype.getValue = function (x, y, z) {
        // This method could be more efficient by caching the seed values.
        x = (x * this.frequency);
        y = (y * this.frequency);
        z = (z * this.frequency);
        var xPos, yPos, zPos, xDist, yDist, zDist, dist;
        var xi = Math.floor(x);
        var yi = Math.floor(y);
        var zi = Math.floor(z);
        var xInt = (x > 0.0 ? xi : xi - 1);
        var yInt = (y > 0.0 ? yi : yi - 1);
        var zInt = (z > 0.0 ? zi : zi - 1);
        var minDist = 2147483647.0;
        var xCandidate = 0;
        var yCandidate = 0;
        var zCandidate = 0;
        var value = 0.0;
        // Inside each unit cube, there is a seed point at a random position.  Go
        // through each of the nearby cubes until we find a cube with a seed point
        // that is closest to the specified position.
        for (var zCur = zInt - 2; zCur <= zInt + 2; zCur++) {
            for (var yCur = yInt - 2; yCur <= yInt + 2; yCur++) {
                for (var xCur = xInt - 2; xCur <= xInt + 2; xCur++) {
                    // Calculate the position and distance to the seed point inside of
                    // this unit cube.
                    xPos = (xCur + noisegen_1.default.valueNoise3D(xCur, yCur, zCur, this.seed));
                    yPos = (yCur + noisegen_1.default.valueNoise3D(xCur, yCur, zCur, this.seed + 1));
                    zPos = (zCur + noisegen_1.default.valueNoise3D(xCur, yCur, zCur, this.seed + 2));
                    xDist = (xPos - x);
                    yDist = (yPos - y);
                    zDist = (zPos - z);
                    dist = (xDist * xDist + yDist * yDist + zDist * zDist);
                    if (dist < minDist) {
                        // This seed point is closer to any others found so far, so record
                        // this seed point.
                        minDist = dist;
                        xCandidate = xPos;
                        yCandidate = yPos;
                        zCandidate = zPos;
                    }
                }
            }
        }
        if (this.distance) {
            // Determine the distance to the nearest seed point.
            xDist = xCandidate - x;
            yDist = yCandidate - y;
            zDist = zCandidate - z;
            value = (Math.sqrt(xDist * xDist + yDist * yDist + zDist * zDist)) * mathconsts_1.default.SQRT_3 - 1.0;
        }
        // Return the calculated distance with the displacement value applied.
        return value + (this.displacement * noisegen_1.default.valueNoise3D((Math.floor(xCandidate)), (Math.floor(yCandidate)), (Math.floor(zCandidate))));
    };
    Voronoi.DEFAULT_VORONOI_DISPLACEMENT = 1.0;
    Voronoi.DEFAULT_VORONOI_FREQUENCY = 1.0;
    Voronoi.DEFAULT_VORONOI_SEED = 0;
    return Voronoi;
}(GeneratorModule_1.default));
exports["default"] = Voronoi;


/***/ }),

/***/ "./node_modules/libnoise-ts/noisegen.js":
/*!**********************************************!*\
  !*** ./node_modules/libnoise-ts/noisegen.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var interpolation_1 = __importDefault(__webpack_require__(/*! ./interpolation */ "./node_modules/libnoise-ts/interpolation.js"));
var vectortable_1 = __importDefault(__webpack_require__(/*! ./vectortable */ "./node_modules/libnoise-ts/vectortable.js"));
var Quality;
(function (Quality) {
    /**
     * Generates coherent noise quickly.  When a coherent-noise function with
     * NoiseGen.prototype quality setting is used to generate a bump-map image, there are
     * noticeable "creasing" artifacts in the resulting image.  This is
     * because the derivative of that function is discontinuous at integer
     * boundaries.
     */
    Quality[Quality["Fast"] = 0] = "Fast";
    /**
     * Generates standard-quality coherent noise.  When a coherent-noise
     * function with NoiseGen.prototype quality setting is used to generate a bump-map
     * image, there are some minor "creasing" artifacts in the resulting
     * image.  This is because the second derivative of that function is
     * discontinuous at integer boundaries.
     */
    Quality[Quality["Standard"] = 1] = "Standard";
    /**
     * Generates the best-quality coherent noise.  When a coherent-noise
     * function with NoiseGen.prototype quality setting is used to generate a bump-map
     * image, there are no "creasing" artifacts in the resulting image.  This
     * is because the first and second derivatives of that function are
     * continuous at integer boundaries.
     */
    Quality[Quality["Best"] = 2] = "Best";
})(Quality = exports.Quality || (exports.Quality = {}));
var NoiseGen = /** @class */ (function () {
    function NoiseGen() {
    }
    /**
     * Generates an integer-noise value from the coordinates of a
     * three-dimensional input value.
     *
     * @param x The integer x coordinate of the input value.
     * @param y The integer y coordinate of the input value.
     * @param z The integer z coordinate of the input value.
     * @param seed A random number seed.
     *
     * @returns The generated integer-noise value.
     *
     * The return value ranges from 0 to 2147483647.
     *
     * A noise function differs from a random-number generator because it
     * always returns the same output value if the same input value is passed
     * to it.
     */
    NoiseGen.intValueNoise3D = function (x, y, z, seed) {
        x = Math.floor(x);
        y = Math.floor(y);
        z = Math.floor(z);
        seed = Math.floor(seed);
        // All constants are primes and must remain prime in order for this noise
        // function to work correctly.
        var n = Math.floor((NoiseGen.X_NOISE_GEN * x
            + NoiseGen.Y_NOISE_GEN * y
            + NoiseGen.Z_NOISE_GEN * z
            + NoiseGen.SEED_NOISE_GEN * seed)
            & 0x7fffffff);
        n = (n >> 13) ^ n;
        return ((n * (n * n * 60493 + 19990303) + 1376312589) & 0x7fffffff);
    };
    /**
     * Generates a value-noise value from the coordinates of a
     * three-dimensional input value.
     *
     * @param x The x coordinate of the input value.
     * @param y The y coordinate of the input value.
     * @param z The z coordinate of the input value.
     * @param seed A random number seed.
     *
     * @returns The generated value-noise value.
     *
     * The return value ranges from -1.0 to +1.0.
     *
     * A noise function differs from a random-number generator because it
     * always returns the same output value if the same input value is passed
     * to it.
     */
    NoiseGen.valueNoise3D = function (x, y, z, seed) {
        if (seed === void 0) { seed = 0; }
        return 1.0 - (NoiseGen.intValueNoise3D(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(seed)) / 1073741824.0);
    };
    /**
     * Generates a gradient-noise value from the coordinates of a
     * three-dimensional input value and the integer coordinates of a
     * nearby three-dimensional value.
     *
     * @param fx The floating-point x coordinate of the input value.
     * @param fy The floating-point y coordinate of the input value.
     * @param fz The floating-point z coordinate of the input value.
     * @param ix The integer x coordinate of a nearby value.
     * @param iy The integer y coordinate of a nearby value.
     * @param iz The integer z coordinate of a nearby value.
     * @param seed The random number seed.
     *
     * @returns The generated gradient-noise value.
     *
     * The difference between fx and ix must be less than or equal
     * to one.
     *
     * The difference between fy and iy must be less than or equal
     * to one.
     *
     * The difference between fz and iz must be less than or equal
     * to one.
     *
     * A *gradient*-noise function generates better-quality noise than a
     * *value*-noise function.  Most noise modules use gradient noise for
     * this reason, although it takes much longer to calculate.
     *
     * The return value ranges from -1.0 to +1.0.
     *
     * This function generates a gradient-noise value by performing the
     * following steps:
     * - It first calculates a random normalized vector based on the
     *   nearby integer value passed to this function.
     * - It then calculates a new value by adding this vector to the
     *   nearby integer value passed to this function.
     * - It then calculates the dot product of the above-generated value
     *   and the floating-point input value passed to this function.
     *
     * A noise function differs from a random-number generator because it
     * always returns the same output value if the same input value is passed
     * to it.
     */
    NoiseGen.gradientNoise3D = function (fx, fy, fz, ix, iy, iz, seed) {
        if (seed === void 0) { seed = 1; }
        // Randomly generate a gradient vector given the integer coordinates of the
        // input value.  This implementation generates a random number and uses it
        // as an index into a normalized-vector lookup table.
        var vectorIndex = Math.floor(NoiseGen.X_NOISE_GEN * ix +
            NoiseGen.Y_NOISE_GEN * iy +
            NoiseGen.Z_NOISE_GEN * iz +
            NoiseGen.SEED_NOISE_GEN * seed) & 0xffffffff;
        vectorIndex ^= (vectorIndex >> NoiseGen.SHIFT_NOISE_GEN);
        vectorIndex &= 0xff;
        var xvGradient = vectortable_1.default[(vectorIndex << 2)];
        var yvGradient = vectortable_1.default[(vectorIndex << 2) + 1];
        var zvGradient = vectortable_1.default[(vectorIndex << 2) + 2];
        // Set up us another vector equal to the distance between the two vectors
        // passed to this function.
        var xvPoint = (fx - ix);
        var yvPoint = (fy - iy);
        var zvPoint = (fz - iz);
        // Now compute the dot product of the gradient vector with the distance
        // vector.  The resulting value is gradient noise.  Apply a scaling value
        // so that this noise value ranges from -1.0 to 1.0.
        return ((xvGradient * xvPoint) +
            (yvGradient * yvPoint) +
            (zvGradient * zvPoint)) * 2.12;
    };
    // @TODO remove `seed` param, it is not used. Or maybe it should be?
    NoiseGen.coherentNoise3D = function (x, y, z, seed, quality, func) {
        if (!func) {
            throw new Error('Must provide proper interpolation function!');
        }
        if (!seed) {
            seed = 1;
        }
        else {
            seed = Math.floor(seed);
        }
        if (!quality) {
            quality = Quality.Standard;
        }
        else {
            quality = Math.floor(quality);
        }
        var xi = Math.floor(x);
        var yi = Math.floor(y);
        var zi = Math.floor(z);
        // Create a unit-length cube aligned along an integer boundary.  This cube
        // surrounds the input point.
        var x0 = (x > 0.0 ? xi : x - 1);
        var x1 = x0 + 1;
        var y0 = (y > 0.0 ? yi : y - 1);
        var y1 = y0 + 1;
        var z0 = (z > 0.0 ? zi : z - 1);
        var z1 = z0 + 1;
        // Map the difference between the coordinates of the input value and the
        // coordinates of the cube's outer-lower-left vertex onto an S-curve.
        var xs = 0, ys = 0, zs = 0;
        switch (quality) {
            case Quality.Best:
                xs = interpolation_1.default.quinticSCurve(x - x0);
                ys = interpolation_1.default.quinticSCurve(y - y0);
                zs = interpolation_1.default.quinticSCurve(z - z0);
                break;
            case Quality.Standard:
                xs = interpolation_1.default.cubicSCurve(x - x0);
                ys = interpolation_1.default.cubicSCurve(y - y0);
                zs = interpolation_1.default.cubicSCurve(z - z0);
                break;
            default:
            case Quality.Fast:
                xs = x - x0;
                ys = y - y0;
                zs = z - z0;
                break;
        }
        // use provided function to interpolate
        return func(x0, y0, z0, x1, y1, z1, xs, ys, zs);
    };
    /**
     * Generates a value-coherent-noise value from the coordinates of a
     * three-dimensional input value.
     *
     * @param x The x coordinate of the input value.
     * @param y The y coordinate of the input value.
     * @param z The z coordinate of the input value.
     * @param seed The random number seed.
     * @param quality The quality of the coherent-noise.
     *
     * @returns The generated value-coherent-noise value.
     *
     * The return value ranges from -1.0 to +1.0.
     *
     * For an explanation of the difference between *gradient* noise and
     * *value* noise, see the comments for the gradientNoise3D() function.
     */
    NoiseGen.valueCoherentNoise3D = function (x, y, z, seed, quality) {
        return NoiseGen.coherentNoise3D(x, y, z, seed, quality, function (x0, y0, z0, x1, y1, z1, xs, ys, zs) {
            // Now calculate the noise values at each vertex of the cube.  To generate
            // the coherent-noise value at the input point, interpolate these eight
            // noise values using the S-curve value as the interpolant (trilinear
            // interpolation.)
            var n0, n1, ix0, ix1, iy0, iy1;
            n0 = NoiseGen.valueNoise3D(x0, y0, z0, seed);
            n1 = NoiseGen.valueNoise3D(x1, y0, z0, seed);
            ix0 = interpolation_1.default.linear(n0, n1, xs);
            n0 = NoiseGen.valueNoise3D(x0, y1, z0, seed);
            n1 = NoiseGen.valueNoise3D(x1, y1, z0, seed);
            ix1 = interpolation_1.default.linear(n0, n1, xs);
            iy0 = interpolation_1.default.linear(ix0, ix1, ys);
            n0 = NoiseGen.valueNoise3D(x0, y0, z1, seed);
            n1 = NoiseGen.valueNoise3D(x1, y0, z1, seed);
            ix0 = interpolation_1.default.linear(n0, n1, xs);
            n0 = NoiseGen.valueNoise3D(x0, y1, z1, seed);
            n1 = NoiseGen.valueNoise3D(x1, y1, z1, seed);
            ix1 = interpolation_1.default.linear(n0, n1, xs);
            iy1 = interpolation_1.default.linear(ix0, ix1, ys);
            return interpolation_1.default.linear(iy0, iy1, zs);
        });
    };
    /**
     * Generates a gradient-coherent-noise value from the coordinates of a
     * three-dimensional input value.
     *
     * @param x The x coordinate of the input value.
     * @param y The y coordinate of the input value.
     * @param z The z coordinate of the input value.
     * @param seed The random number seed.
     * @param quality The quality of the coherent-noise.
     *
     * @returns The generated gradient-coherent-noise value.
     *
     * The return value ranges from -1.0 to +1.0.
     *
     * For an explanation of the difference between *gradient* noise and
     * *value* noise, see the comments for the gradientNoise3D() function.
     */
    NoiseGen.gradientCoherentNoise3D = function (x, y, z, seed, quality) {
        return NoiseGen.coherentNoise3D(x, y, z, seed, quality, function (x0, y0, z0, x1, y1, z1, xs, ys, zs) {
            // Now calculate the noise values at each vertex of the cube.  To generate
            // the coherent-noise value at the input point, interpolate these eight
            // noise values using the S-curve value as the interpolant (trilinear
            // interpolation.)
            var n0, n1, ix0, ix1, iy0, iy1;
            n0 = NoiseGen.gradientNoise3D(x, y, z, x0, y0, z0, seed);
            n1 = NoiseGen.gradientNoise3D(x, y, z, x1, y0, z0, seed);
            ix0 = interpolation_1.default.linear(n0, n1, xs);
            n0 = NoiseGen.gradientNoise3D(x, y, z, x0, y1, z0, seed);
            n1 = NoiseGen.gradientNoise3D(x, y, z, x1, y1, z0, seed);
            ix1 = interpolation_1.default.linear(n0, n1, xs);
            iy0 = interpolation_1.default.linear(ix0, ix1, ys);
            n0 = NoiseGen.gradientNoise3D(x, y, z, x0, y0, z1, seed);
            n1 = NoiseGen.gradientNoise3D(x, y, z, x1, y0, z1, seed);
            ix0 = interpolation_1.default.linear(n0, n1, xs);
            n0 = NoiseGen.gradientNoise3D(x, y, z, x0, y1, z1, seed);
            n1 = NoiseGen.gradientNoise3D(x, y, z, x1, y1, z1, seed);
            ix1 = interpolation_1.default.linear(n0, n1, xs);
            iy1 = interpolation_1.default.linear(ix0, ix1, ys);
            return interpolation_1.default.linear(iy0, iy1, zs);
        });
    };
    // Constants
    NoiseGen.X_NOISE_GEN = 1619;
    NoiseGen.Y_NOISE_GEN = 31337;
    NoiseGen.Z_NOISE_GEN = 6971;
    NoiseGen.SEED_NOISE_GEN = 1013;
    NoiseGen.SHIFT_NOISE_GEN = 8;
    return NoiseGen;
}());
exports["default"] = NoiseGen;


/***/ }),

/***/ "./node_modules/libnoise-ts/util/Tuple.js":
/*!************************************************!*\
  !*** ./node_modules/libnoise-ts/util/Tuple.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tuple class. For storing a pair of values.
 */
var Tuple = /** @class */ (function () {
    /**
     * @param item1 First item in pair.
     * @param item2 Second item in pair.
     */
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    /**
     * Render the tuple in a pretty format.
     * @example "[1, 2]"
     */
    Tuple.prototype.toString = function () {
        return "[" + this.item1 + ", " + this.item2 + "]";
    };
    return Tuple;
}());
exports["default"] = Tuple;


/***/ }),

/***/ "./node_modules/libnoise-ts/util/clamp.js":
/*!************************************************!*\
  !*** ./node_modules/libnoise-ts/util/clamp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Clamp a value to within a lower and upper bound.
 * If the value is lower than the lower bound, the lower bound is returned.
 * If the value is above the upper bound, the upper bound is returned.
 *
 * @param value The value to be clamped.
 * @param lowerBound The lower bound to restrict the value to.
 * @param upperBound The upper bound to restrict the value to.
 */
function clamp(value, lowerBound, upperBound) {
    if (value < lowerBound) {
        return lowerBound;
    }
    else if (value > upperBound) {
        return upperBound;
    }
    else {
        return value;
    }
}
exports["default"] = clamp;


/***/ }),

/***/ "./node_modules/libnoise-ts/util/index.js":
/*!************************************************!*\
  !*** ./node_modules/libnoise-ts/util/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var clamp_1 = __importDefault(__webpack_require__(/*! ./clamp */ "./node_modules/libnoise-ts/util/clamp.js"));
exports.clamp = clamp_1.default;
var makeInt32Range_1 = __importDefault(__webpack_require__(/*! ./makeInt32Range */ "./node_modules/libnoise-ts/util/makeInt32Range.js"));
exports.makeInt32Range = makeInt32Range_1.default;
var Tuple_1 = __importDefault(__webpack_require__(/*! ./Tuple */ "./node_modules/libnoise-ts/util/Tuple.js"));
exports.Tuple = Tuple_1.default;


/***/ }),

/***/ "./node_modules/libnoise-ts/util/makeInt32Range.js":
/*!*********************************************************!*\
  !*** ./node_modules/libnoise-ts/util/makeInt32Range.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Modifies a floating-point value so that it can be stored in a
 * int32 variable.
 *
 * @param n A floating-point number.
 *
 * @returns The modified floating-point number.
 *
 * In libnoise, the noise-generating algorithms are all integer-based;
 * they use variables of type int32.  Before calling a noise
 * function, pass the x, y, and z coordinates to this function to
 * ensure that these coordinates can be cast to a int32 value.
 *
 * Although you could do a straight cast from double to int32, the
 * resulting value may differ between platforms.  By using this function,
 * you ensure that the resulting value is identical between platforms.
 *
 * @TODO I'm not sure this is necessary in JavaScript.
 *  How can we test that removing this is safe?
 */
function makeInt32Range(n) {
    if (n >= 1073741824.0) {
        return (2.0 * (n % 1073741824.0)) - 1073741824.0;
    }
    else if (n <= -1073741824.0) {
        return (2.0 * (n % 1073741824.0)) + 1073741824.0;
    }
    return n;
}
exports["default"] = makeInt32Range;


/***/ }),

/***/ "./node_modules/libnoise-ts/vectortable.js":
/*!*************************************************!*\
  !*** ./node_modules/libnoise-ts/vectortable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VectorTable = [
    -0.763874, -0.596439, -0.246489, 0.0,
    0.396055, 0.904518, -0.158073, 0.0,
    -0.499004, -0.8665, -0.0131631, 0.0,
    0.468724, -0.824756, 0.316346, 0.0,
    0.829598, 0.43195, 0.353816, 0.0,
    -0.454473, 0.629497, -0.630228, 0.0,
    -0.162349, -0.869962, -0.465628, 0.0,
    0.932805, 0.253451, 0.256198, 0.0,
    -0.345419, 0.927299, -0.144227, 0.0,
    -0.715026, -0.293698, -0.634413, 0.0,
    -0.245997, 0.717467, -0.651711, 0.0,
    -0.967409, -0.250435, -0.037451, 0.0,
    0.901729, 0.397108, -0.170852, 0.0,
    0.892657, -0.0720622, -0.444938, 0.0,
    0.0260084, -0.0361701, 0.999007, 0.0,
    0.949107, -0.19486, 0.247439, 0.0,
    0.471803, -0.807064, -0.355036, 0.0,
    0.879737, 0.141845, 0.453809, 0.0,
    0.570747, 0.696415, 0.435033, 0.0,
    -0.141751, -0.988233, -0.0574584, 0.0,
    -0.58219, -0.0303005, 0.812488, 0.0,
    -0.60922, 0.239482, -0.755975, 0.0,
    0.299394, -0.197066, -0.933557, 0.0,
    -0.851615, -0.220702, -0.47544, 0.0,
    0.848886, 0.341829, -0.403169, 0.0,
    -0.156129, -0.687241, 0.709453, 0.0,
    -0.665651, 0.626724, 0.405124, 0.0,
    0.595914, -0.674582, 0.43569, 0.0,
    0.171025, -0.509292, 0.843428, 0.0,
    0.78605, 0.536414, -0.307222, 0.0,
    0.18905, -0.791613, 0.581042, 0.0,
    -0.294916, 0.844994, 0.446105, 0.0,
    0.342031, -0.58736, -0.7335, 0.0,
    0.57155, 0.7869, 0.232635, 0.0,
    0.885026, -0.408223, 0.223791, 0.0,
    -0.789518, 0.571645, 0.223347, 0.0,
    0.774571, 0.31566, 0.548087, 0.0,
    -0.79695, -0.0433603, -0.602487, 0.0,
    -0.142425, -0.473249, -0.869339, 0.0,
    -0.0698838, 0.170442, 0.982886, 0.0,
    0.687815, -0.484748, 0.540306, 0.0,
    0.543703, -0.534446, -0.647112, 0.0,
    0.97186, 0.184391, -0.146588, 0.0,
    0.707084, 0.485713, -0.513921, 0.0,
    0.942302, 0.331945, 0.043348, 0.0,
    0.499084, 0.599922, 0.625307, 0.0,
    -0.289203, 0.211107, 0.9337, 0.0,
    0.412433, -0.71667, -0.56239, 0.0,
    0.87721, -0.082816, 0.47291, 0.0,
    -0.420685, -0.214278, 0.881538, 0.0,
    0.752558, -0.0391579, 0.657361, 0.0,
    0.0765725, -0.996789, 0.0234082, 0.0,
    -0.544312, -0.309435, -0.779727, 0.0,
    -0.455358, -0.415572, 0.787368, 0.0,
    -0.874586, 0.483746, 0.0330131, 0.0,
    0.245172, -0.0838623, 0.965846, 0.0,
    0.382293, -0.432813, 0.81641, 0.0,
    -0.287735, -0.905514, 0.311853, 0.0,
    -0.667704, 0.704955, -0.239186, 0.0,
    0.717885, -0.464002, -0.518983, 0.0,
    0.976342, -0.214895, 0.0240053, 0.0,
    -0.0733096, -0.921136, 0.382276, 0.0,
    -0.986284, 0.151224, -0.0661379, 0.0,
    -0.899319, -0.429671, 0.0812908, 0.0,
    0.652102, -0.724625, 0.222893, 0.0,
    0.203761, 0.458023, -0.865272, 0.0,
    -0.030396, 0.698724, -0.714745, 0.0,
    -0.460232, 0.839138, 0.289887, 0.0,
    -0.0898602, 0.837894, 0.538386, 0.0,
    -0.731595, 0.0793784, 0.677102, 0.0,
    -0.447236, -0.788397, 0.422386, 0.0,
    0.186481, 0.645855, -0.740335, 0.0,
    -0.259006, 0.935463, 0.240467, 0.0,
    0.445839, 0.819655, -0.359712, 0.0,
    0.349962, 0.755022, -0.554499, 0.0,
    -0.997078, -0.0359577, 0.0673977, 0.0,
    -0.431163, -0.147516, -0.890133, 0.0,
    0.299648, -0.63914, 0.708316, 0.0,
    0.397043, 0.566526, -0.722084, 0.0,
    -0.502489, 0.438308, -0.745246, 0.0,
    0.0687235, 0.354097, 0.93268, 0.0,
    -0.0476651, -0.462597, 0.885286, 0.0,
    -0.221934, 0.900739, -0.373383, 0.0,
    -0.956107, -0.225676, 0.186893, 0.0,
    -0.187627, 0.391487, -0.900852, 0.0,
    -0.224209, -0.315405, 0.92209, 0.0,
    -0.730807, -0.537068, 0.421283, 0.0,
    -0.0353135, -0.816748, 0.575913, 0.0,
    -0.941391, 0.176991, -0.287153, 0.0,
    -0.154174, 0.390458, 0.90762, 0.0,
    -0.283847, 0.533842, 0.796519, 0.0,
    -0.482737, -0.850448, 0.209052, 0.0,
    -0.649175, 0.477748, 0.591886, 0.0,
    0.885373, -0.405387, -0.227543, 0.0,
    -0.147261, 0.181623, -0.972279, 0.0,
    0.0959236, -0.115847, -0.988624, 0.0,
    -0.89724, -0.191348, 0.397928, 0.0,
    0.903553, -0.428461, -0.00350461, 0.0,
    0.849072, -0.295807, -0.437693, 0.0,
    0.65551, 0.741754, -0.141804, 0.0,
    0.61598, -0.178669, 0.767232, 0.0,
    0.0112967, 0.932256, -0.361623, 0.0,
    -0.793031, 0.258012, 0.551845, 0.0,
    0.421933, 0.454311, 0.784585, 0.0,
    -0.319993, 0.0401618, -0.946568, 0.0,
    -0.81571, 0.551307, -0.175151, 0.0,
    -0.377644, 0.00322313, 0.925945, 0.0,
    0.129759, -0.666581, -0.734052, 0.0,
    0.601901, -0.654237, -0.457919, 0.0,
    -0.927463, -0.0343576, -0.372334, 0.0,
    -0.438663, -0.868301, -0.231578, 0.0,
    -0.648845, -0.749138, -0.133387, 0.0,
    0.507393, -0.588294, 0.629653, 0.0,
    0.726958, 0.623665, 0.287358, 0.0,
    0.411159, 0.367614, -0.834151, 0.0,
    0.806333, 0.585117, -0.0864016, 0.0,
    0.263935, -0.880876, 0.392932, 0.0,
    0.421546, -0.201336, 0.884174, 0.0,
    -0.683198, -0.569557, -0.456996, 0.0,
    -0.117116, -0.0406654, -0.992285, 0.0,
    -0.643679, -0.109196, -0.757465, 0.0,
    -0.561559, -0.62989, 0.536554, 0.0,
    0.0628422, 0.104677, -0.992519, 0.0,
    0.480759, -0.2867, -0.828658, 0.0,
    -0.228559, -0.228965, -0.946222, 0.0,
    -0.10194, -0.65706, -0.746914, 0.0,
    0.0689193, -0.678236, 0.731605, 0.0,
    0.401019, -0.754026, 0.52022, 0.0,
    -0.742141, 0.547083, -0.387203, 0.0,
    -0.00210603, -0.796417, -0.604745, 0.0,
    0.296725, -0.409909, -0.862513, 0.0,
    -0.260932, -0.798201, 0.542945, 0.0,
    -0.641628, 0.742379, 0.192838, 0.0,
    -0.186009, -0.101514, 0.97729, 0.0,
    0.106711, -0.962067, 0.251079, 0.0,
    -0.743499, 0.30988, -0.592607, 0.0,
    -0.795853, -0.605066, -0.0226607, 0.0,
    -0.828661, -0.419471, -0.370628, 0.0,
    0.0847218, -0.489815, -0.8677, 0.0,
    -0.381405, 0.788019, -0.483276, 0.0,
    0.282042, -0.953394, 0.107205, 0.0,
    0.530774, 0.847413, 0.0130696, 0.0,
    0.0515397, 0.922524, 0.382484, 0.0,
    -0.631467, -0.709046, 0.313852, 0.0,
    0.688248, 0.517273, 0.508668, 0.0,
    0.646689, -0.333782, -0.685845, 0.0,
    -0.932528, -0.247532, -0.262906, 0.0,
    0.630609, 0.68757, -0.359973, 0.0,
    0.577805, -0.394189, 0.714673, 0.0,
    -0.887833, -0.437301, -0.14325, 0.0,
    0.690982, 0.174003, 0.701617, 0.0,
    -0.866701, 0.0118182, 0.498689, 0.0,
    -0.482876, 0.727143, 0.487949, 0.0,
    -0.577567, 0.682593, -0.447752, 0.0,
    0.373768, 0.0982991, 0.922299, 0.0,
    0.170744, 0.964243, -0.202687, 0.0,
    0.993654, -0.035791, -0.106632, 0.0,
    0.587065, 0.4143, -0.695493, 0.0,
    -0.396509, 0.26509, -0.878924, 0.0,
    -0.0866853, 0.83553, -0.542563, 0.0,
    0.923193, 0.133398, -0.360443, 0.0,
    0.00379108, -0.258618, 0.965972, 0.0,
    0.239144, 0.245154, -0.939526, 0.0,
    0.758731, -0.555871, 0.33961, 0.0,
    0.295355, 0.309513, 0.903862, 0.0,
    0.0531222, -0.91003, -0.411124, 0.0,
    0.270452, 0.0229439, -0.96246, 0.0,
    0.563634, 0.0324352, 0.825387, 0.0,
    0.156326, 0.147392, 0.976646, 0.0,
    -0.0410141, 0.981824, 0.185309, 0.0,
    -0.385562, -0.576343, -0.720535, 0.0,
    0.388281, 0.904441, 0.176702, 0.0,
    0.945561, -0.192859, -0.262146, 0.0,
    0.844504, 0.520193, 0.127325, 0.0,
    0.0330893, 0.999121, -0.0257505, 0.0,
    -0.592616, -0.482475, -0.644999, 0.0,
    0.539471, 0.631024, -0.557476, 0.0,
    0.655851, -0.027319, -0.754396, 0.0,
    0.274465, 0.887659, 0.369772, 0.0,
    -0.123419, 0.975177, -0.183842, 0.0,
    -0.223429, 0.708045, 0.66989, 0.0,
    -0.908654, 0.196302, 0.368528, 0.0,
    -0.95759, -0.00863708, 0.288005, 0.0,
    0.960535, 0.030592, 0.276472, 0.0,
    -0.413146, 0.907537, 0.0754161, 0.0,
    -0.847992, 0.350849, -0.397259, 0.0,
    0.614736, 0.395841, 0.68221, 0.0,
    -0.503504, -0.666128, -0.550234, 0.0,
    -0.268833, -0.738524, -0.618314, 0.0,
    0.792737, -0.60001, -0.107502, 0.0,
    -0.637582, 0.508144, -0.579032, 0.0,
    0.750105, 0.282165, -0.598101, 0.0,
    -0.351199, -0.392294, -0.850155, 0.0,
    0.250126, -0.960993, -0.118025, 0.0,
    -0.732341, 0.680909, -0.0063274, 0.0,
    -0.760674, -0.141009, 0.633634, 0.0,
    0.222823, -0.304012, 0.926243, 0.0,
    0.209178, 0.505671, 0.836984, 0.0,
    0.757914, -0.56629, -0.323857, 0.0,
    -0.782926, -0.339196, 0.52151, 0.0,
    -0.462952, 0.585565, 0.665424, 0.0,
    0.61879, 0.194119, -0.761194, 0.0,
    0.741388, -0.276743, 0.611357, 0.0,
    0.707571, 0.702621, 0.0752872, 0.0,
    0.156562, 0.819977, 0.550569, 0.0,
    -0.793606, 0.440216, 0.42, 0.0,
    0.234547, 0.885309, -0.401517, 0.0,
    0.132598, 0.80115, -0.58359, 0.0,
    -0.377899, -0.639179, 0.669808, 0.0,
    -0.865993, -0.396465, 0.304748, 0.0,
    -0.624815, -0.44283, 0.643046, 0.0,
    -0.485705, 0.825614, -0.287146, 0.0,
    -0.971788, 0.175535, 0.157529, 0.0,
    -0.456027, 0.392629, 0.798675, 0.0,
    -0.0104443, 0.521623, -0.853112, 0.0,
    -0.660575, -0.74519, 0.091282, 0.0,
    -0.0157698, -0.307475, -0.951425, 0.0,
    -0.603467, -0.250192, 0.757121, 0.0,
    0.506876, 0.25006, 0.824952, 0.0,
    0.255404, 0.966794, 0.00884498, 0.0,
    0.466764, -0.874228, -0.133625, 0.0,
    0.475077, -0.0682351, -0.877295, 0.0,
    -0.224967, -0.938972, -0.260233, 0.0,
    -0.377929, -0.814757, -0.439705, 0.0,
    -0.305847, 0.542333, -0.782517, 0.0,
    0.26658, -0.902905, -0.337191, 0.0,
    0.0275773, 0.322158, -0.946284, 0.0,
    0.0185422, 0.716349, 0.697496, 0.0,
    -0.20483, 0.978416, 0.0273371, 0.0,
    -0.898276, 0.373969, 0.230752, 0.0,
    -0.00909378, 0.546594, 0.837349, 0.0,
    0.6602, -0.751089, 0.000959236, 0.0,
    0.855301, -0.303056, 0.420259, 0.0,
    0.797138, 0.0623013, -0.600574, 0.0,
    0.48947, -0.866813, 0.0951509, 0.0,
    0.251142, 0.674531, 0.694216, 0.0,
    -0.578422, -0.737373, -0.348867, 0.0,
    -0.254689, -0.514807, 0.818601, 0.0,
    0.374972, 0.761612, 0.528529, 0.0,
    0.640303, -0.734271, -0.225517, 0.0,
    -0.638076, 0.285527, 0.715075, 0.0,
    0.772956, -0.15984, -0.613995, 0.0,
    0.798217, -0.590628, 0.118356, 0.0,
    -0.986276, -0.0578337, -0.154644, 0.0,
    -0.312988, -0.94549, 0.0899272, 0.0,
    -0.497338, 0.178325, 0.849032, 0.0,
    -0.101136, -0.981014, 0.165477, 0.0,
    -0.521688, 0.0553434, -0.851339, 0.0,
    -0.786182, -0.583814, 0.202678, 0.0,
    -0.565191, 0.821858, -0.0714658, 0.0,
    0.437895, 0.152598, -0.885981, 0.0,
    -0.92394, 0.353436, -0.14635, 0.0,
    0.212189, -0.815162, -0.538969, 0.0,
    -0.859262, 0.143405, -0.491024, 0.0,
    0.991353, 0.112814, 0.0670273, 0.0,
    0.0337884, -0.979891, -0.196654, 0.0,
];
exports["default"] = VectorTable;


/***/ }),

/***/ "./src/completer.ts":
/*!**************************!*\
  !*** ./src/completer.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Completer = void 0;
class Completer {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.complete = resolve;
            this.reject = reject;
        });
    }
}
exports.Completer = Completer;


/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Display = void 0;
/**
 * An OpenGL-capable display based on HTML5 Canvas
 */
class Display {
    constructor(canvas) {
        if (canvas == null) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 1280;
            this.canvas.height = 720;
            document.body.appendChild(this.canvas);
        }
        else {
            if (typeof canvas === "string") {
                this.canvas = document.getElementById(canvas);
            }
            else {
                this.canvas = canvas;
            }
        }
        // WebGL 2.0
        this.gl = this.canvas.getContext('webgl2');
        if (!this.gl) {
            throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.');
        }
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.frontFace(this.gl.CCW);
        // this.gl.enable(this.gl.CULL_FACE);
        // this.gl.cullFace(this.gl.BACK);
    }
    clear(r, g, b, a = 1.0) {
        var _a, _b;
        (_a = this.gl) === null || _a === void 0 ? void 0 : _a.clearColor(r, g, b, a);
        (_b = this.gl) === null || _b === void 0 ? void 0 : _b.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
    resize(width, height) {
        var _a;
        this.canvas.width = width;
        this.canvas.height = height;
        (_a = this.gl) === null || _a === void 0 ? void 0 : _a.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    get width() { return this.canvas.width; }
    get height() { return this.canvas.height; }
    get aspectRatio() { return this.width / this.height; }
}
exports.Display = Display;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const display_1 = __webpack_require__(/*! ./display */ "./src/display.ts");
const shader_1 = __webpack_require__(/*! ./shader */ "./src/shader.ts");
const mesh_1 = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");
const texture_1 = __webpack_require__(/*! ./texture */ "./src/texture.ts");
const procedural_texture_1 = __webpack_require__(/*! ./procedural_texture */ "./src/procedural_texture.ts");
let display = new display_1.Display(null);
let basicVS = `#version 300 es
in vec3 a_position;
in vec3 a_normal;
in vec3 a_tangent;
in vec2 a_uv;
in vec4 a_color;

uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;

out vec3 v_normal;
out vec2 v_uv;

void main() {
    mat4 modelView = u_view * u_model;
    gl_Position = u_projection * modelView * vec4(a_position, 1.0);

    mat3 normalMatrix = mat3(transpose(inverse(modelView)));
    v_normal = normalMatrix * a_normal;

    v_uv = a_uv;
}`;
let basicFS = `#version 300 es
precision highp float;

out vec4 fragColor;
in vec3 v_normal;
in vec2 v_uv;

uniform sampler2D u_texture;

void main() {
    float lambert = max(dot(normalize(v_normal), normalize(vec3(0, 0, -1))), 0.0);
    vec4 texColor = texture(u_texture, v_uv);
    fragColor = vec4(vec3(lambert), 1.0) * texColor;
}`;
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let shader = new shader_1.Shader(display.gl)
            .bindAttributeLocation("a_position", 0)
            .bindAttributeLocation("a_normal", 1)
            .bindAttributeLocation("a_tangent", 2)
            .bindAttributeLocation("a_uv", 3)
            .bindAttributeLocation("a_color", 4)
            .enableVertex(basicVS)
            .enableFragment(basicFS)
            .link();
        // let tex = await Texture2D.fromImage(display.gl!, "me.jpg");
        let redDonut = (0, procedural_texture_1.mix)((0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#ffff00")), (0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#ff0000")), (0, procedural_texture_1.deform)((0, procedural_texture_1.smoothStep)(0.3, 0.31, (0, procedural_texture_1.blend)((0, procedural_texture_1.circle)(0.5), (0, procedural_texture_1.circle)(0.28), procedural_texture_1.BlendMode.Subtract)), (0, procedural_texture_1.perlin)(2, 2), 0.04));
        let texGen = (0, procedural_texture_1.mix)((0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#363b45")), (0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#94544d")), (0, procedural_texture_1.bricks)(4.0, 8.0));
        let tex = texture_1.Texture2D.procedural(display.gl, 256, 256, (0, procedural_texture_1.blend)(texGen, redDonut, procedural_texture_1.BlendMode.Multiply));
        tex.setFiltering(display.gl.LINEAR_MIPMAP_LINEAR, display.gl.LINEAR);
        let mesh = new mesh_1.MeshBuilder().addCube().recalculateNormals().build(display.gl);
        let rot = 0;
        function loop() {
            display.clear(0.1, 0.4, 0.7, 1.0);
            tex.bind(0);
            shader.enable();
            shader.setTexture("u_texture", 0);
            let model = new shader_1.Matrix4().rotateY(rot).rotateX(rot * 0.5).rotateZ(rot * 0.25);
            let view = new shader_1.Matrix4().translate([0, 0, -5]);
            let proj = new shader_1.Matrix4().perspective({ fov: Math.PI / 4, aspect: display.aspectRatio, near: 0.1, far: 1000 });
            shader.setUniform("u_model", model);
            shader.setUniform("u_view", view);
            shader.setUniform("u_projection", proj);
            mesh.draw(display.gl);
            rot += 0.02;
            window.requestAnimationFrame(loop);
        }
        loop();
    });
}
init();


/***/ }),

/***/ "./src/mesh.ts":
/*!*********************!*\
  !*** ./src/mesh.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeshBuilder = exports.Mesh = exports.Vertex = exports.IBaseVertex = void 0;
const core_1 = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");
class IBaseVertex {
}
exports.IBaseVertex = IBaseVertex;
class Vertex extends IBaseVertex {
    constructor(position, normal = new core_1.Vector3(), tangent = new core_1.Vector3(), uv = new core_1.Vector2(), color = new core_1.Vector4(1, 1, 1, 1)) {
        super();
        this.position = position;
        this.normal = normal;
        this.tangent = tangent;
        this.uv = uv;
        this.color = color;
    }
    layoutSetup(gl) {
        gl.enableVertexAttribArray(0);
        gl.enableVertexAttribArray(1);
        gl.enableVertexAttribArray(2);
        gl.enableVertexAttribArray(3);
        gl.enableVertexAttribArray(4);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 60, 0);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 60, 12);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 60, 24);
        gl.vertexAttribPointer(3, 2, gl.FLOAT, false, 60, 36);
        gl.vertexAttribPointer(4, 4, gl.FLOAT, false, 60, 44);
    }
    interleave() {
        return [
            ...this.position.toArray(new Array(3)),
            ...this.normal.toArray(new Array(3)),
            ...this.tangent.toArray(new Array(3)),
            ...this.uv.toArray(new Array(2)),
            ...this.color.toArray(new Array(4))
        ];
    }
    clone() {
        return new Vertex(this.position.clone(), this.normal.clone(), this.tangent.clone(), this.uv.clone(), this.color.clone());
    }
    add(other) {
        this.position.add(other.position);
        this.normal.add(other.normal);
        this.tangent.add(other.tangent);
        this.uv.add(other.uv);
        this.color.add(other.color);
        return this;
    }
    sub(other) {
        this.position.sub(other.position);
        this.normal.sub(other.normal);
        this.tangent.sub(other.tangent);
        this.uv.sub(other.uv);
        this.color.sub(other.color);
        return this;
    }
    divideScalar(scalar) {
        this.position.divideScalar(scalar);
        this.normal.divideScalar(scalar);
        this.tangent.divideScalar(scalar);
        this.uv.divideScalar(scalar);
        this.color.divideScalar(scalar);
        return this;
    }
    lerp(other, alpha) {
        return new Vertex(this.position.clone().lerp(this.position, other.position, alpha), this.normal.clone().lerp(this.normal, other.normal, alpha), this.tangent.clone().lerp(this.tangent, other.tangent, alpha), this.uv.clone().lerp(this.uv, other.uv, alpha), this.color.clone().lerp(this.color, other.color, alpha));
    }
}
exports.Vertex = Vertex;
/**
 * WebGL Mesh (does not store data)
 */
class Mesh {
    constructor(gl, vertices, indices) {
        if (vertices.length == 0) {
            throw new Error("Mesh must have at least one vertex");
        }
        this.vao = gl.createVertexArray();
        this.vbo = gl.createBuffer();
        this.ibo = gl.createBuffer();
        this.vboSize = this.iboSize = 0;
        gl.bindVertexArray(this.vao);
        this.update(gl, vertices, indices);
    }
    update(gl, vertices, indices) {
        let verts = vertices.map((e) => e.interleave()).flat();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        if (vertices.length > this.vboSize) {
            vertices[0].layoutSetup(gl);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.DYNAMIC_DRAW);
        }
        else {
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(verts));
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
        if (indices.length > this.iboSize) {
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.DYNAMIC_DRAW);
        }
        else {
            gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(indices));
        }
        gl.bindVertexArray(null);
        this.iboSize = indices.length;
        this.vboSize = vertices.length;
    }
    draw(gl, mode = gl.TRIANGLES) {
        gl.bindVertexArray(this.vao);
        gl.drawElements(mode, this.iboSize, gl.UNSIGNED_SHORT, 0);
    }
}
exports.Mesh = Mesh;
/**
 * Basic mesh primitives generator
 */
class MeshBuilder {
    constructor() {
        this.vertices = [];
        this.indices = [];
    }
    get offset() {
        return this.vertices.length;
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        return this.vertices[this.vertices.length - 1];
    }
    addIndex(index, withOffset = true) {
        this.indices.push(index + (withOffset ? this.offset : 0));
    }
    addTriangle(a, b, c) {
        this.addVertex(a);
        this.addVertex(b);
        this.addVertex(c);
        return this;
    }
    addQuad(a, b, c, d) {
        this.addIndex(0);
        this.addIndex(1);
        this.addIndex(2);
        this.addIndex(2);
        this.addIndex(3);
        this.addIndex(0);
        let v1 = this.addVertex(a.clone());
        let v2 = this.addVertex(b.clone());
        let v3 = this.addVertex(c.clone());
        let v4 = this.addVertex(d.clone());
        v1.uv = new core_1.Vector2(0, 0);
        v2.uv = new core_1.Vector2(1, 0);
        v3.uv = new core_1.Vector2(1, 1);
        v4.uv = new core_1.Vector2(0, 1);
        return this;
    }
    addCube(size = 1) {
        const a = new Vertex(new core_1.Vector3(-size, -size, -size));
        const b = new Vertex(new core_1.Vector3(size, -size, -size));
        const c = new Vertex(new core_1.Vector3(size, size, -size));
        const d = new Vertex(new core_1.Vector3(-size, size, -size));
        const e = new Vertex(new core_1.Vector3(-size, -size, size));
        const f = new Vertex(new core_1.Vector3(size, -size, size));
        const g = new Vertex(new core_1.Vector3(size, size, size));
        const h = new Vertex(new core_1.Vector3(-size, size, size));
        this.addQuad(a, b, c, d);
        this.addQuad(h, g, f, e);
        this.addQuad(d, h, e, a);
        this.addQuad(b, f, g, c);
        this.addQuad(c, g, h, d);
        this.addQuad(a, e, f, b);
        return this;
    }
    addIcosahedron(size = 1) {
        const t = ((1 + Math.sqrt(5)) / 2) * size;
        const vertices = [
            new Vertex(new core_1.Vector3(-size, t, 0)),
            new Vertex(new core_1.Vector3(size, t, 0)),
            new Vertex(new core_1.Vector3(-size, -t, 0)),
            new Vertex(new core_1.Vector3(size, -t, 0)),
            new Vertex(new core_1.Vector3(0, -size, t)),
            new Vertex(new core_1.Vector3(0, size, t)),
            new Vertex(new core_1.Vector3(0, -size, -t)),
            new Vertex(new core_1.Vector3(0, size, -t)),
            new Vertex(new core_1.Vector3(t, 0, -size)),
            new Vertex(new core_1.Vector3(t, 0, size)),
            new Vertex(new core_1.Vector3(-t, 0, -size)),
            new Vertex(new core_1.Vector3(-t, 0, size))
        ];
        const indices = [
            0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11,
            1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
            3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
            4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 8, 1, 9
        ].reverse();
        for (let i = 0; i < indices.length; i++) {
            this.addIndex(indices[i]);
        }
        for (let i = 0; i < vertices.length; i++) {
            let v = this.addVertex(vertices[i]);
            v.uv = new core_1.Vector2(vertices[i].position.x / size, vertices[i].position.y / size);
        }
        return this;
    }
    addCylinder(radius = 0.5, height = 1, segments = 24) {
        if (segments < 3) {
            throw new Error('MeshBuilder.addCylinder: segments must be greater than 2');
        }
        const step = Math.PI * 2 / segments;
        function buildRing(mb, center, uv_v, buildTriangles) {
            for (let i = 0; i < segments; i++) {
                const angle = i * step;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                let v = mb.addVertex(new Vertex(new core_1.Vector3(x, 0, z).add(center)));
                v.uv = new core_1.Vector2((i / segments) * 2.0, uv_v);
                if (i > 0 && buildTriangles) {
                    const baseIndex = mb.vertices.length - 1;
                    const vertsPerRow = segments;
                    const indices = [
                        baseIndex, baseIndex - 1, baseIndex - vertsPerRow, baseIndex - vertsPerRow - 1
                    ];
                    mb.addIndex(indices[1], false);
                    mb.addIndex(indices[2], false);
                    mb.addIndex(indices[0], false);
                    mb.addIndex(indices[1], false);
                    mb.addIndex(indices[3], false);
                    mb.addIndex(indices[2], false);
                }
            }
            // connect last segment with first vertex
            if (buildTriangles) {
                const baseIndex = mb.vertices.length - 1;
                const vertsPerRow = segments + 1;
                const indices = [
                    baseIndex - vertsPerRow + 1,
                    0,
                    baseIndex,
                    vertsPerRow - 1,
                ];
                mb.addIndex(indices[1], false);
                mb.addIndex(indices[2], false);
                mb.addIndex(indices[0], false);
                mb.addIndex(indices[1], false);
                mb.addIndex(indices[3], false);
                mb.addIndex(indices[2], false);
            }
        }
        function buildCap(mb, center, reverse) {
            let cv = mb.addVertex(new Vertex(center));
            cv.uv = new core_1.Vector2(0.5, 0.5);
            const centerIndex = mb.vertices.length - 1;
            for (let i = 0; i <= segments; i++) {
                const angle = i * step;
                const x = Math.cos(angle);
                const z = Math.sin(angle);
                let v = mb.addVertex(new Vertex(new core_1.Vector3(x * radius, 0, z * radius).add(center)));
                v.uv = new core_1.Vector2(x * 0.5 + 0.5, z * 0.5 + 0.5);
                if (i > 0) {
                    const baseIndex = mb.vertices.length - 1;
                    const indices = reverse ? [
                        centerIndex, baseIndex - 1, baseIndex
                    ] : [
                        centerIndex, baseIndex, baseIndex - 1
                    ];
                    mb.addIndex(indices[0], false);
                    mb.addIndex(indices[1], false);
                    mb.addIndex(indices[2], false);
                }
            }
        }
        buildRing(this, new core_1.Vector3(0, -height / 2, 0), 1.0, false);
        buildRing(this, new core_1.Vector3(0, height / 2, 0), 0.0, true);
        buildCap(this, new core_1.Vector3(0, -height / 2, 0), false);
        buildCap(this, new core_1.Vector3(0, height / 2, 0), true);
        return this;
    }
    recalculateNormals() {
        const vertices = this.vertices;
        const indices = this.indices;
        for (let i = 0; i < indices.length; i += 3) {
            const a = vertices[indices[i]];
            const b = vertices[indices[i + 1]];
            const c = vertices[indices[i + 2]];
            const ab = b.position.clone().sub(a.position.clone());
            const ac = c.position.clone().sub(a.position.clone());
            const normal = ab.cross(ac).normalize();
            a.normal.add(normal);
            b.normal.add(normal);
            c.normal.add(normal);
        }
        // normalize all
        for (let i = 0; i < vertices.length; i++) {
            vertices[i].normal.normalize();
        }
        return this;
    }
    build(gl) {
        return new Mesh(gl, this.vertices, this.indices);
    }
}
exports.MeshBuilder = MeshBuilder;


/***/ }),

/***/ "./src/procedural_texture.ts":
/*!***********************************!*\
  !*** ./src/procedural_texture.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blend = exports.BlendMode = exports.transform = exports.polygon = exports.circle = exports.smoothStep = exports.threshold = exports.deform = exports.checker = exports.bricks = exports.voronoi = exports.perlin = exports.mix = exports.scalar = exports.solid = exports.Color = void 0;
const core_1 = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");
const generator_1 = __webpack_require__(/*! libnoise-ts/module/generator */ "./node_modules/libnoise-ts/module/generator/index.js");
function lerpScalar(a, b, t) {
    return a * (1 - t) + b * t;
}
function saturate(x) {
    return Math.max(0, Math.min(1, x));
}
function sstep(edge0, edge1, x) {
    let t = saturate((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}
function lstep(a, b, t) {
    if (t <= a)
        return 0.0;
    if (t >= b)
        return 1.0;
    return (t - a) / (b - a);
}
function rand(x, y) {
    x += 0.2127 + x * 0.3713 * y;
    y += 0.2127 + x * 0.3713 * y;
    const rx = 4.789 * Math.sin(489.123 * x);
    const ry = 4.789 * Math.sin(489.123 * y);
    const v = rx * ry;
    return v - Math.floor(v);
}
class Color {
    constructor(r, g, b, a = 1) {
        this.r = saturate(r);
        this.g = saturate(g);
        this.b = saturate(b);
        this.a = saturate(a);
    }
    static fromHex(hex) {
        if (hex.startsWith("#"))
            hex = hex.slice(1);
        if (hex.length === 3)
            hex = hex.split("").map(x => x + x).join("");
        const r = parseInt(hex.slice(0, 2), 16) / 255;
        const g = parseInt(hex.slice(2, 4), 16) / 255;
        const b = parseInt(hex.slice(4, 6), 16) / 255;
        return new Color(r, g, b);
    }
    lerp(b, t) {
        return new Color(lerpScalar(this.r, b.r, t), lerpScalar(this.g, b.g, t), lerpScalar(this.b, b.b, t), lerpScalar(this.a, b.a, t));
    }
    add(b) {
        return new Color(this.r + b.r, this.g + b.g, this.b + b.b, this.a + b.a);
    }
    sub(b) {
        return new Color(this.r - b.r, this.g - b.g, this.b - b.b, this.a - b.a);
    }
    mul(b) {
        return new Color(this.r * b.r, this.g * b.g, this.b * b.b, this.a * b.a);
    }
    div(b) {
        return new Color(this.r / (b.r + 0.0001), this.g / (b.g + 0.0001), this.b / (b.b + 0.0001), 1.0);
    }
    mulScalar(s) {
        return new Color(this.r * s, this.g * s, this.b * s, this.a * s);
    }
    get luma() {
        return 0.2126 * this.r + 0.7152 * this.g + 0.0722 * this.b;
    }
}
exports.Color = Color;
const pgen = new generator_1.Perlin();
const vgen = new generator_1.Voronoi();
function solid(c) {
    return (p) => c;
}
exports.solid = solid;
function scalar(s) {
    return (p) => new Color(s, s, s);
}
exports.scalar = scalar;
function mix(a, b, amt) {
    return (p) => a(p).lerp(b(p), amt(p).luma);
}
exports.mix = mix;
function perlin(sizeX, sizeY) {
    return function (p) {
        const v = Math.abs(pgen.getValue(p.x * sizeX, p.y * sizeY, 0));
        return new Color(v, v, v, 1);
    };
}
exports.perlin = perlin;
function voronoi(sizeX, sizeY) {
    return function (p) {
        const v = vgen.getValue(p.x * sizeX, p.y * sizeY, 0);
        return new Color(v, v, v, 1);
    };
}
exports.voronoi = voronoi;
function bricks(sizeX, sizeY, xoffset = 0.5, gap = 0.01, smooth = 0.03, lightness = 0.5) {
    return function (p) {
        let uu = p.x * sizeX;
        let vv = p.y * sizeY;
        if ((vv * 0.5 - Math.floor(vv * 0.5)) >= 0.5)
            uu += xoffset;
        if (uu >= sizeX)
            uu -= sizeX;
        if (vv >= sizeY)
            vv -= sizeY;
        let x = uu - Math.floor(uu);
        let y = vv - Math.floor(vv);
        let inside = true;
        if (gap > 0.0) {
            inside && (inside = x > gap * sizeX);
            inside && (inside = y > gap * sizeY);
        }
        let v = 1.0;
        if (inside) {
            let dist = Math.min(Math.min(x - gap * sizeX, 1.0 - x) / sizeX, Math.min(y - gap * sizeY, 1.0 - y) / sizeY);
            dist *= Math.min(sizeX, sizeY);
            if (dist < smooth) {
                v *= dist / smooth;
            }
            let brickIdX = Math.floor(uu);
            const brickIdY = Math.floor(vv);
            if (brickIdX > sizeX)
                brickIdX = 0;
            v *= rand(brickIdX * 0.01, brickIdY * 0.01);
        }
        else
            v = 0.0;
        return new Color(v, v, v, 1);
    };
}
exports.bricks = bricks;
function checker(sizeX, sizeY) {
    return function (p) {
        const sx = 0.5 / Math.max(sizeX, 1);
        const sy = 0.5 / Math.max(sizeY, 1);
        const nx = Math.floor(p.x / sx);
        const ny = Math.floor(p.y / sy);
        const v = (nx + ny) % 2 === 0 ? 1.0 : 0.0;
        return new Color(v, v, v);
    };
}
exports.checker = checker;
function deform(input, heightMap, intensity) {
    return function (p) {
        const h = heightMap(p).luma - 0.5;
        const c = new core_1.Vector2(p.x + h * intensity, p.y + h * -intensity);
        return input(c);
    };
}
exports.deform = deform;
function threshold(input, threshold) {
    return function (p) {
        const v = input(p).luma;
        return new Color(v > threshold ? 1 : 0, v > threshold ? 1 : 0, v > threshold ? 1 : 0);
    };
}
exports.threshold = threshold;
function smoothStep(edge0, edge1, amt) {
    return function (p) {
        const x = amt(p).luma;
        const v = sstep(edge0, edge1, x);
        return new Color(v, v, v);
    };
}
exports.smoothStep = smoothStep;
function circle(radius) {
    return function (p) {
        const center = new core_1.Vector2(0.5, 0.5);
        const rad = radius + 0.0001;
        const dist = p.distanceTo(center);
        const v = dist <= rad ? 1.0 - dist / rad : 0.0;
        return new Color(v, v, v);
    };
}
exports.circle = circle;
function polygon(radius, angle, sides, gradient) {
    return function (p) {
        const c = new core_1.Vector2(p.x * 2.0 - 1.0, p.y * 2.0 - 1.0);
        const a = Math.atan2(c.x, c.y) + angle;
        const b = (Math.PI * 2.0) / sides;
        const d = Math.cos(Math.floor(0.5 + a / b) * b - a) * c.len() / radius;
        const v = 1.0 - lstep(0.8 - gradient, 0.8, d);
        return new Color(v, v, v);
    };
}
exports.polygon = polygon;
function transform(input, x, y, scaleX = 1, scaleY = 1, rotation = 0) {
    return function (p) {
        const c = new core_1.Vector2(p.x * 2.0 - 1.0, p.y * 2.0 - 1.0);
        // rotate
        const r = new core_1.Vector2(c.x * Math.cos(rotation) - c.y * Math.sin(rotation), c.x * Math.sin(rotation) + c.y * Math.cos(rotation));
        // scale + translate
        const s = new core_1.Vector2(r.x * scaleX + x, r.y * scaleY + y);
        return input(s);
    };
}
exports.transform = transform;
var BlendMode;
(function (BlendMode) {
    BlendMode[BlendMode["Add"] = 0] = "Add";
    BlendMode[BlendMode["Subtract"] = 1] = "Subtract";
    BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
    BlendMode[BlendMode["Screen"] = 3] = "Screen";
    BlendMode[BlendMode["Overlay"] = 4] = "Overlay";
    BlendMode[BlendMode["Divide"] = 5] = "Divide";
    BlendMode[BlendMode["Min"] = 6] = "Min";
    BlendMode[BlendMode["Max"] = 7] = "Max";
    BlendMode[BlendMode["Color"] = 8] = "Color";
})(BlendMode = exports.BlendMode || (exports.BlendMode = {}));
function blend(a, b, mode) {
    return function (p) {
        const va = a(p);
        const vb = b(p);
        switch (mode) {
            case BlendMode.Add:
                return va.add(vb);
            case BlendMode.Subtract:
                return va.sub(vb);
            case BlendMode.Multiply:
                return va.mul(vb);
            case BlendMode.Screen:
                return va.mul(vb).add(va.mul(vb).sub(va).mulScalar(2.0));
            case BlendMode.Overlay:
                return va.mul(vb).add(va.mul(vb).mulScalar(2.0).sub(va).mul(vb).mulScalar(2.0));
            case BlendMode.Divide:
                return va.mul(vb).div(va.add(vb).mulScalar(2.0));
            case BlendMode.Min:
                return new Color(Math.min(va.r, vb.r), Math.min(va.g, vb.g), Math.min(va.b, vb.b));
            case BlendMode.Max:
                return new Color(Math.max(va.r, vb.r), Math.max(va.g, vb.g), Math.max(va.b, vb.b));
        }
        return va;
    };
}
exports.blend = blend;


/***/ }),

/***/ "./src/shader.ts":
/*!***********************!*\
  !*** ./src/shader.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shader = exports.Quaternion = exports.Matrix4 = exports.Matrix3 = exports.Vector4 = exports.Vector3 = exports.Vector2 = void 0;
const core_1 = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");
var core_2 = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return core_2.Vector2; } }));
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return core_2.Vector3; } }));
Object.defineProperty(exports, "Vector4", ({ enumerable: true, get: function () { return core_2.Vector4; } }));
Object.defineProperty(exports, "Matrix3", ({ enumerable: true, get: function () { return core_2.Matrix3; } }));
Object.defineProperty(exports, "Matrix4", ({ enumerable: true, get: function () { return core_2.Matrix4; } }));
Object.defineProperty(exports, "Quaternion", ({ enumerable: true, get: function () { return core_2.Quaternion; } }));
class Shader {
    constructor(gl) {
        this.gl = gl;
        this.program = gl.createProgram();
        this.uniforms = {};
        this.attributes = {};
    }
    enableVertex(src) {
        const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, src);
        if (vertexShader === null) {
            throw new Error("Failed to compile vertex shader");
        }
        this.gl.attachShader(this.program, vertexShader);
        return this;
    }
    enableFragment(src) {
        const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, src);
        if (fragmentShader === null) {
            throw new Error("Failed to compile fragment shader");
        }
        this.gl.attachShader(this.program, fragmentShader);
        return this;
    }
    link() {
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            throw new Error(this.gl.getProgramInfoLog(this.program));
        }
        // now we can detach and delete the shaders
        let shaders = this.gl.getAttachedShaders(this.program);
        if (shaders !== null) {
            for (const shader of shaders) {
                this.gl.detachShader(this.program, shader);
                this.gl.deleteShader(shader);
            }
        }
        return this;
    }
    getAttribute(name) {
        if (this.attributes[name] === undefined) {
            const loc = this.gl.getAttribLocation(this.program, name);
            if (loc === -1) {
                throw new Error(`Attribute "${name}" not found`);
            }
            this.attributes[name] = loc;
        }
        return this.attributes[name];
    }
    bindAttributeLocation(name, index) {
        this.gl.bindAttribLocation(this.program, index, name);
        return this;
    }
    setTexture(name, value) {
        let location = this.uniforms[name];
        if (location === undefined) {
            const loc = this.gl.getUniformLocation(this.program, name);
            if (loc === null) {
                throw new Error(`Uniform "${name}" not found`);
            }
            this.uniforms[name] = loc;
            location = loc;
        }
        this.gl.uniform1i(location, value);
    }
    setUniform(name, value) {
        let location = this.uniforms[name];
        if (location === undefined) {
            const loc = this.gl.getUniformLocation(this.program, name);
            if (loc === null) {
                throw new Error(`Uniform "${name}" not found`);
            }
            this.uniforms[name] = loc;
            location = loc;
        }
        if (value instanceof core_1.Vector2) {
            this.gl.uniform2fv(location, value.toArray());
        }
        else if (value instanceof core_1.Vector3) {
            this.gl.uniform3fv(location, value.toArray());
        }
        else if (value instanceof core_1.Vector4) {
            this.gl.uniform4fv(location, value.toArray());
        }
        else if (value instanceof core_1.Matrix3) {
            this.gl.uniformMatrix3fv(location, false, value.toArray());
        }
        else if (value instanceof core_1.Matrix4) {
            this.gl.uniformMatrix4fv(location, false, value.toArray());
        }
        else {
            this.gl.uniform1f(location, value);
        }
    }
    enable() {
        this.gl.useProgram(this.program);
    }
    compileShader(type, src) {
        const shader = this.gl.createShader(type);
        if (shader === null) {
            throw new Error("Failed to create shader");
        }
        this.gl.shaderSource(shader, src);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }
}
exports.Shader = Shader;


/***/ }),

/***/ "./src/texture.ts":
/*!************************!*\
  !*** ./src/texture.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Texture2D = exports.ITexture = void 0;
const core_1 = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");
const completer_1 = __webpack_require__(/*! ./completer */ "./src/completer.ts");
class ITexture {
    constructor(gl, target) {
        this.gl = gl;
        this.target = target;
    }
    bind(unit) {
        this.gl.activeTexture(this.gl.TEXTURE0 + unit);
        this.gl.bindTexture(this.target, this.texture);
    }
    unbind() {
        this.gl.bindTexture(this.target, null);
    }
}
exports.ITexture = ITexture;
class Texture2D extends ITexture {
    constructor(gl, width, height, format, internalFormat, type) {
        super(gl, gl.TEXTURE_2D);
        this._width = width;
        this._height = height;
        this.format = format;
        this.internalFormat = internalFormat;
        this.type = type;
        this.texture = gl.createTexture();
    }
    setFiltering(min, mag) {
        this.bind(0);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, min);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, mag);
        this.unbind();
    }
    static fromImage(gl, url, format = gl.RGBA, internalFormat = gl.RGBA, type = gl.UNSIGNED_BYTE) {
        return __awaiter(this, void 0, void 0, function* () {
            const compl = new completer_1.Completer();
            const image = new Image();
            image.onload = () => {
                let tex = new Texture2D(gl, image.width, image.height, format, internalFormat, type);
                tex.bind(0);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, format, type, image);
                gl.generateMipmap(gl.TEXTURE_2D);
                tex.unbind();
                compl.complete(tex);
            };
            image.onerror = (e) => {
                console.error(e);
                compl.reject(e);
            };
            image.src = url;
            return compl.promise;
        });
    }
    static procedural(gl, width, height, func) {
        let tex = new Texture2D(gl, width, height, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE);
        tex.bind(0);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        let data = new Uint8Array(width * height * 4);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let v = func(new core_1.Vector2(x / width, y / height));
                data[(y * width + x) * 4 + 0] = ~~(v.r * 255);
                data[(y * width + x) * 4 + 1] = ~~(v.g * 255);
                data[(y * width + x) * 4 + 2] = ~~(v.b * 255);
                data[(y * width + x) * 4 + 3] = ~~(v.a * 255);
            }
        }
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
        gl.generateMipmap(gl.TEXTURE_2D);
        tex.unbind();
        return tex;
    }
    get width() { return this._width; }
    get height() { return this._height; }
}
exports.Texture2D = Texture2D;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixrREFBSzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixrREFBSzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDLGVBQWUsS0FBSztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7Ozs7O0FDN1NGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7Ozs7O0FDdkJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUN0QkY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyx5REFBUztBQUMvQyxhQUFhO0FBQ2IsdUNBQXVDLG1CQUFPLENBQUMsMkVBQWtCO0FBQ2pFLHNCQUFzQjtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx5REFBUztBQUMvQyxhQUFhOzs7Ozs7Ozs7OztBQ1ZBO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUMvQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDcFFGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlC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Q1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FB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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS9tYXRoLWFycmF5LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9iYXNlL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL2V1bGVyLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9tYXRyaXgzLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9tYXRyaXg0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9wb3NlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9xdWF0ZXJuaW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9zcGhlcmljYWwtY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjIuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2xpYi9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9saWIvY29tbW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vbGliL2dsLW1hdHJpeC1leHRyYXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9saWIvbWF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2xpYi92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vY29tbW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0My5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9xdWF0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjMi5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS92ZWM0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL2ludGVycG9sYXRpb24uanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbWF0aGNvbnN0cy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvTW9kdWxlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvR2VuZXJhdG9yTW9kdWxlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvYmlsbG93LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvY2hlY2tlcmJvYXJkLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvY29uc3QuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvci9jeWxpbmRlcnMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3Blcmxpbi5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3JpZGdlZG11bHRpLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3Ivc3BoZXJlcy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3Zvcm9ub2kuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbm9pc2VnZW4uanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvdXRpbC9UdXBsZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy91dGlsL2NsYW1wLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvdXRpbC9tYWtlSW50MzJSYW5nZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy92ZWN0b3J0YWJsZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9jb21wbGV0ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zcmMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9tZXNoLnRzIiwid2VicGFjazovL3NuYWtlLy4vc3JjL3Byb2NlZHVyYWxfdGV4dHVyZS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zcmMvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc25ha2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc25ha2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IGNscyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gIH0gZWxzZSB7XG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICB9XG5cbiAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG5pbXBvcnQgeyBjb25maWcsIGZvcm1hdFZhbHVlLCBlcXVhbHMsIGlzQXJyYXkgfSBmcm9tICcuLi8uLi9saWIvY29tbW9uJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnLi4vLi4vbGliL2Fzc2VydCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoQXJyYXkgZXh0ZW5kcyBfZXh0ZW5kYWJsZUJ1aWx0aW4oQXJyYXkpIHtcbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIGFzc2VydChmYWxzZSk7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgZnJvbShhcnJheU9yT2JqZWN0KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXlPck9iamVjdCkgPyB0aGlzLmNvcHkoYXJyYXlPck9iamVjdCkgOiB0aGlzLmZyb21PYmplY3QoYXJyYXlPck9iamVjdCk7XG4gIH1cblxuICBmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IGFycmF5W2kgKyBvZmZzZXRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0byhhcnJheU9yT2JqZWN0KSB7XG4gICAgaWYgKGFycmF5T3JPYmplY3QgPT09IHRoaXMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FycmF5KGFycmF5T3JPYmplY3QpID8gdGhpcy50b0FycmF5KGFycmF5T3JPYmplY3QpIDogdGhpcy50b09iamVjdChhcnJheU9yT2JqZWN0KTtcbiAgfVxuXG4gIHRvVGFyZ2V0KHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQgPyB0aGlzLnRvKHRhcmdldCkgOiB0aGlzO1xuICB9XG5cbiAgdG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGFycmF5W29mZnNldCArIGldID0gdGhpc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyhjb25maWcpO1xuICB9XG5cbiAgZm9ybWF0U3RyaW5nKG9wdHMpIHtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgc3RyaW5nICs9IChpID4gMCA/ICcsICcgOiAnJykgKyBmb3JtYXRWYWx1ZSh0aGlzW2ldLCBvcHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIi5jb25jYXQob3B0cy5wcmludFR5cGVzID8gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lIDogJycsIFwiW1wiKS5jb25jYXQoc3RyaW5nLCBcIl1cIik7XG4gIH1cblxuICBlcXVhbHMoYXJyYXkpIHtcbiAgICBpZiAoIWFycmF5IHx8IHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgaWYgKCFlcXVhbHModGhpc1tpXSwgYXJyYXlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4YWN0RXF1YWxzKGFycmF5KSB7XG4gICAgaWYgKCFhcnJheSB8fCB0aGlzLmxlbmd0aCAhPT0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGlmICh0aGlzW2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZWdhdGUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSAtdGhpc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbGVycChhLCBiLCB0KSB7XG4gICAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdCA9IGI7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSB0aGlzO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBjb25zdCBhaSA9IGFbaV07XG4gICAgICB0aGlzW2ldID0gYWkgKyB0ICogKGJbaV0gLSBhaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG1pbih2ZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWluKHZlY3RvcltpXSwgdGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG1heCh2ZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWF4KHZlY3RvcltpXSwgdGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNsYW1wKG1pblZlY3RvciwgbWF4VmVjdG9yKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzW2ldLCBtaW5WZWN0b3JbaV0pLCBtYXhWZWN0b3JbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGQoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gKz0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzdWJ0cmFjdCguLi52ZWN0b3JzKSB7XG4gICAgZm9yIChjb25zdCB2ZWN0b3Igb2YgdmVjdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSAtPSB2ZWN0b3JbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKHNjYWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2NhbGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShzY2FsZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gKj0gc2NhbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHN1YihhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VidHJhY3QoYSk7XG4gIH1cblxuICBzZXRTY2FsYXIoYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gYTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgYWRkU2NhbGFyKGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSArPSBhO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzdWJTY2FsYXIoYSkge1xuICAgIHJldHVybiB0aGlzLmFkZFNjYWxhcigtYSk7XG4gIH1cblxuICBtdWx0aXBseVNjYWxhcihzY2FsYXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSAqPSBzY2FsYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGRpdmlkZVNjYWxhcihhKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIGEpO1xuICB9XG5cbiAgY2xhbXBTY2FsYXIobWluLCBtYXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXNbaV0sIG1pbiksIG1heCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5QnlTY2FsYXIoc2NhbGFyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoc2NhbGFyKTtcbiAgfVxuXG4gIGdldCBlbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmIChjb25maWcuZGVidWcgJiYgIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWF0aC5nbDogXCIuY29uY2F0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgXCIgc29tZSBmaWVsZHMgc2V0IHRvIGludmFsaWQgbnVtYmVycydcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgbGV0IHZhbGlkID0gdGhpcy5sZW5ndGggPT09IHRoaXMuRUxFTUVOVFM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdmFsaWQgPSB2YWxpZCAmJiBOdW1iZXIuaXNGaW5pdGUodGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGgtYXJyYXkuanMubWFwIiwiaW1wb3J0IE1hdGhBcnJheSBmcm9tICcuL21hdGgtYXJyYXknO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuLi8uLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9saWIvY29tbW9uJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnLi4vLi4vbGliL2Fzc2VydCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXggZXh0ZW5kcyBNYXRoQXJyYXkge1xuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgYXNzZXJ0KGZhbHNlKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCBSQU5LKCkge1xuICAgIGFzc2VydChmYWxzZSk7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nID0gJ1snO1xuXG4gICAgaWYgKGNvbmZpZy5wcmludFJvd01ham9yKSB7XG4gICAgICBzdHJpbmcgKz0gJ3Jvdy1tYWpvcjonO1xuXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLlJBTks7ICsrcm93KSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuUkFOSzsgKytjb2wpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gXCIgXCIuY29uY2F0KHRoaXNbY29sICogdGhpcy5SQU5LICsgcm93XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nICs9ICdjb2x1bW4tbWFqb3I6JztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgICAgc3RyaW5nICs9IFwiIFwiLmNvbmNhdCh0aGlzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJpbmcgKz0gJ10nO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBnZXRFbGVtZW50SW5kZXgocm93LCBjb2wpIHtcbiAgICByZXR1cm4gY29sICogdGhpcy5SQU5LICsgcm93O1xuICB9XG5cbiAgZ2V0RWxlbWVudChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzW2NvbCAqIHRoaXMuUkFOSyArIHJvd107XG4gIH1cblxuICBzZXRFbGVtZW50KHJvdywgY29sLCB2YWx1ZSkge1xuICAgIHRoaXNbY29sICogdGhpcy5SQU5LICsgcm93XSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldENvbHVtbihjb2x1bW5JbmRleCwgcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMuUkFOSykuZmlsbCgtMCkpIHtcbiAgICBjb25zdCBmaXJzdEluZGV4ID0gY29sdW1uSW5kZXggKiB0aGlzLlJBTks7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUkFOSzsgKytpKSB7XG4gICAgICByZXN1bHRbaV0gPSB0aGlzW2ZpcnN0SW5kZXggKyBpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0Q29sdW1uKGNvbHVtbkluZGV4LCBjb2x1bW5WZWN0b3IpIHtcbiAgICBjb25zdCBmaXJzdEluZGV4ID0gY29sdW1uSW5kZXggKiB0aGlzLlJBTks7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUkFOSzsgKytpKSB7XG4gICAgICB0aGlzW2ZpcnN0SW5kZXggKyBpXSA9IGNvbHVtblZlY3RvcltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRyaXguanMubWFwIiwiaW1wb3J0IE1hdGhBcnJheSBmcm9tICcuL21hdGgtYXJyYXknO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuLi8uLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJy4uLy4uL2xpYi9hc3NlcnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIGV4dGVuZHMgTWF0aEFycmF5IHtcbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIGFzc2VydChmYWxzZSk7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb3B5KHZlY3Rvcikge1xuICAgIGFzc2VydChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzWzFdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgbGVuKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcXVhcmVkKCkpO1xuICB9XG5cbiAgbWFnbml0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmxlbigpO1xuICB9XG5cbiAgbGVuZ3RoU3F1YXJlZCgpIHtcbiAgICBsZXQgbGVuZ3RoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gdGhpc1tpXSAqIHRoaXNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIG1hZ25pdHVkZVNxdWFyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoU3F1YXJlZCgpO1xuICB9XG5cbiAgZGlzdGFuY2UobWF0aEFycmF5KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3F1YXJlZChtYXRoQXJyYXkpKTtcbiAgfVxuXG4gIGRpc3RhbmNlU3F1YXJlZChtYXRoQXJyYXkpIHtcbiAgICBsZXQgbGVuZ3RoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBjb25zdCBkaXN0ID0gdGhpc1tpXSAtIG1hdGhBcnJheVtpXTtcbiAgICAgIGxlbmd0aCArPSBkaXN0ICogZGlzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tOdW1iZXIobGVuZ3RoKTtcbiAgfVxuXG4gIGRvdChtYXRoQXJyYXkpIHtcbiAgICBsZXQgcHJvZHVjdCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgcHJvZHVjdCArPSB0aGlzW2ldICogbWF0aEFycmF5W2ldO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja051bWJlcihwcm9kdWN0KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSAvPSBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5KC4uLnZlY3RvcnMpIHtcbiAgICBmb3IgKGNvbnN0IHZlY3RvciBvZiB2ZWN0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICB0aGlzW2ldICo9IHZlY3RvcltpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZGl2aWRlKC4uLnZlY3RvcnMpIHtcbiAgICBmb3IgKGNvbnN0IHZlY3RvciBvZiB2ZWN0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICB0aGlzW2ldIC89IHZlY3RvcltpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbGVuZ3RoU3EoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoU3F1YXJlZCgpO1xuICB9XG5cbiAgZGlzdGFuY2VUbyh2ZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZSh2ZWN0b3IpO1xuICB9XG5cbiAgZGlzdGFuY2VUb1NxdWFyZWQodmVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2VTcXVhcmVkKHZlY3Rvcik7XG4gIH1cblxuICBnZXRDb21wb25lbnQoaSkge1xuICAgIGFzc2VydChpID49IDAgJiYgaSA8IHRoaXMuRUxFTUVOVFMsICdpbmRleCBpcyBvdXQgb2YgcmFuZ2UnKTtcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIodGhpc1tpXSk7XG4gIH1cblxuICBzZXRDb21wb25lbnQoaSwgdmFsdWUpIHtcbiAgICBhc3NlcnQoaSA+PSAwICYmIGkgPCB0aGlzLkVMRU1FTlRTLCAnaW5kZXggaXMgb3V0IG9mIHJhbmdlJyk7XG4gICAgdGhpc1tpXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGRWZWN0b3JzKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KGEpLmFkZChiKTtcbiAgfVxuXG4gIHN1YlZlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiB0aGlzLmNvcHkoYSkuc3VidHJhY3QoYik7XG4gIH1cblxuICBtdWx0aXBseVZlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiB0aGlzLmNvcHkoYSkubXVsdGlwbHkoYik7XG4gIH1cblxuICBhZGRTY2FsZWRWZWN0b3IoYSwgYikge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgdGhpcy5jb25zdHJ1Y3RvcihhKS5tdWx0aXBseVNjYWxhcihiKSk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yLmpzLm1hcCIsImltcG9ydCBNYXRoQXJyYXkgZnJvbSAnLi9iYXNlL21hdGgtYXJyYXknO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAnLi9xdWF0ZXJuaW9uJztcbmNvbnN0IEVSUl9VTktOT1dOX09SREVSID0gJ1Vua25vd24gRXVsZXIgYW5nbGUgb3JkZXInO1xuY29uc3QgQUxNT1NUX09ORSA9IDAuOTk5OTk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3JkZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPCA2O1xufVxuXG5mdW5jdGlvbiBjaGVja09yZGVyKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA8IDAgJiYgdmFsdWUgPj0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV1bGVyIGV4dGVuZHMgTWF0aEFycmF5IHtcbiAgc3RhdGljIGdldCBaWVgoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFlYWigpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWFpZKCkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgc3RhdGljIGdldCBaWFkoKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFlaWCgpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWFlaKCkge1xuICAgIHJldHVybiA1O1xuICB9XG5cbiAgc3RhdGljIGdldCBSb2xsUGl0Y2hZYXcoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRPcmRlcigpIHtcbiAgICByZXR1cm4gRXVsZXIuWllYO1xuICB9XG5cbiAgc3RhdGljIGdldCBSb3RhdGlvbk9yZGVycygpIHtcbiAgICByZXR1cm4gWydaWVgnLCAnWVhaJywgJ1haWScsICdaWFknLCAnWVpYJywgJ1hZWiddO1xuICB9XG5cbiAgc3RhdGljIHJvdGF0aW9uT3JkZXIob3JkZXIpIHtcbiAgICByZXR1cm4gRXVsZXIuUm90YXRpb25PcmRlcnNbb3JkZXJdO1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiA0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgb3JkZXIgPSBFdWxlci5EZWZhdWx0T3JkZXIpIHtcbiAgICBzdXBlcigtMCwgLTAsIC0wLCAtMCk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICB0aGlzLmZyb21WZWN0b3IzKC4uLmFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KHgsIHksIHosIG9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBmcm9tUXVhdGVybmlvbihxdWF0ZXJuaW9uKSB7XG4gICAgY29uc3QgW3gsIHksIHosIHddID0gcXVhdGVybmlvbjtcbiAgICBjb25zdCB5c3FyID0geSAqIHk7XG4gICAgY29uc3QgdDAgPSAtMi4wICogKHlzcXIgKyB6ICogeikgKyAxLjA7XG4gICAgY29uc3QgdDEgPSArMi4wICogKHggKiB5ICsgdyAqIHopO1xuICAgIGxldCB0MiA9IC0yLjAgKiAoeCAqIHogLSB3ICogeSk7XG4gICAgY29uc3QgdDMgPSArMi4wICogKHkgKiB6ICsgdyAqIHgpO1xuICAgIGNvbnN0IHQ0ID0gLTIuMCAqICh4ICogeCArIHlzcXIpICsgMS4wO1xuICAgIHQyID0gdDIgPiAxLjAgPyAxLjAgOiB0MjtcbiAgICB0MiA9IHQyIDwgLTEuMCA/IC0xLjAgOiB0MjtcbiAgICBjb25zdCByb2xsID0gTWF0aC5hdGFuMih0MywgdDQpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5hc2luKHQyKTtcbiAgICBjb25zdCB5YXcgPSBNYXRoLmF0YW4yKHQxLCB0MCk7XG4gICAgcmV0dXJuIG5ldyBFdWxlcihyb2xsLCBwaXRjaCwgeWF3LCBFdWxlci5Sb2xsUGl0Y2hZYXcpO1xuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHRoaXNbM10gPSBOdW1iZXIuaXNGaW5pdGUoYXJyYXlbM10pIHx8IHRoaXMub3JkZXI7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldCh4ID0gMCwgeSA9IDAsIHogPSAwLCBvcmRlcikge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHRoaXNbMl0gPSB6O1xuICAgIHRoaXNbM10gPSBOdW1iZXIuaXNGaW5pdGUob3JkZXIpID8gb3JkZXIgOiB0aGlzWzNdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVPcmRlcih0aGlzWzNdKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpc1swXSkgJiYgTnVtYmVyLmlzRmluaXRlKHRoaXNbMV0pICYmIE51bWJlci5pc0Zpbml0ZSh0aGlzWzJdKTtcbiAgfVxuXG4gIHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuICAgIGFycmF5W29mZnNldF0gPSB0aGlzWzBdO1xuICAgIGFycmF5W29mZnNldCArIDFdID0gdGhpc1sxXTtcbiAgICBhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXNbMl07XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgdG9BcnJheTQoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuICAgIGFycmF5W29mZnNldF0gPSB0aGlzWzBdO1xuICAgIGFycmF5W29mZnNldCArIDFdID0gdGhpc1sxXTtcbiAgICBhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXNbMl07XG4gICAgYXJyYXlbb2Zmc2V0ICsgM10gPSB0aGlzWzNdO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHRvVmVjdG9yMyhyZXN1bHQgPSBbLTAsIC0wLCAtMF0pIHtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzBdO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbMV07XG4gICAgcmVzdWx0WzJdID0gdGhpc1syXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXNbMF0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpc1sxXTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGFscGhhKCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IGFscGhhKHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBiZXRhKCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IGJldGEodmFsdWUpIHtcbiAgICB0aGlzWzFdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGdhbW1hKCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IGdhbW1hKHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwaGkoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICBzZXQgcGhpKHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB0aGV0YSgpIHtcbiAgICByZXR1cm4gdGhpc1sxXTtcbiAgfVxuXG4gIHNldCB0aGV0YSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgcHNpKCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHBzaSh2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgcm9sbCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCByb2xsKHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwaXRjaCgpIHtcbiAgICByZXR1cm4gdGhpc1sxXTtcbiAgfVxuXG4gIHNldCBwaXRjaCh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgeWF3KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHlhdyh2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgb3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXNbM107XG4gIH1cblxuICBzZXQgb3JkZXIodmFsdWUpIHtcbiAgICB0aGlzWzNdID0gY2hlY2tPcmRlcih2YWx1ZSk7XG4gIH1cblxuICBmcm9tVmVjdG9yMyh2LCBvcmRlcikge1xuICAgIHJldHVybiB0aGlzLnNldCh2WzBdLCB2WzFdLCB2WzJdLCBOdW1iZXIuaXNGaW5pdGUob3JkZXIpID8gb3JkZXIgOiB0aGlzWzNdKTtcbiAgfVxuXG4gIGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswICsgb2Zmc2V0XTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMSArIG9mZnNldF07XG4gICAgdGhpc1syXSA9IGFycmF5WzIgKyBvZmZzZXRdO1xuXG4gICAgaWYgKGFycmF5WzNdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXNbM10gPSBhcnJheVszXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbVJvbGxQaXRjaFlhdyhyb2xsLCBwaXRjaCwgeWF3KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHJvbGwsIHBpdGNoLCB5YXcsIEV1bGVyLlpZWCk7XG4gIH1cblxuICBmcm9tUm90YXRpb25NYXRyaXgobSwgb3JkZXIgPSBFdWxlci5EZWZhdWx0T3JkZXIpIHtcbiAgICB0aGlzLl9mcm9tUm90YXRpb25NYXRyaXgobSwgb3JkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4KG0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Um90YXRpb25NYXRyaXgobSk7XG4gIH1cblxuICBnZXRRdWF0ZXJuaW9uKCkge1xuICAgIGNvbnN0IHEgPSBuZXcgUXVhdGVybmlvbigpO1xuXG4gICAgc3dpdGNoICh0aGlzWzNdKSB7XG4gICAgICBjYXNlIEV1bGVyLlhZWjpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWCh0aGlzWzBdKS5yb3RhdGVZKHRoaXNbMV0pLnJvdGF0ZVoodGhpc1syXSk7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVhaOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVZKHRoaXNbMF0pLnJvdGF0ZVgodGhpc1sxXSkucm90YXRlWih0aGlzWzJdKTtcblxuICAgICAgY2FzZSBFdWxlci5aWFk6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVoodGhpc1swXSkucm90YXRlWCh0aGlzWzFdKS5yb3RhdGVZKHRoaXNbMl0pO1xuXG4gICAgICBjYXNlIEV1bGVyLlpZWDpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWih0aGlzWzBdKS5yb3RhdGVZKHRoaXNbMV0pLnJvdGF0ZVgodGhpc1syXSk7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVpYOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVZKHRoaXNbMF0pLnJvdGF0ZVoodGhpc1sxXSkucm90YXRlWCh0aGlzWzJdKTtcblxuICAgICAgY2FzZSBFdWxlci5YWlk6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVgodGhpc1swXSkucm90YXRlWih0aGlzWzFdKS5yb3RhdGVZKHRoaXNbMl0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJSX1VOS05PV05fT1JERVIpO1xuICAgIH1cbiAgfVxuXG4gIF9mcm9tUm90YXRpb25NYXRyaXgobSwgb3JkZXIgPSBFdWxlci5EZWZhdWx0T3JkZXIpIHtcbiAgICBjb25zdCB0ZSA9IG0uZWxlbWVudHM7XG4gICAgY29uc3QgbTExID0gdGVbMF0sXG4gICAgICAgICAgbTEyID0gdGVbNF0sXG4gICAgICAgICAgbTEzID0gdGVbOF07XG4gICAgY29uc3QgbTIxID0gdGVbMV0sXG4gICAgICAgICAgbTIyID0gdGVbNV0sXG4gICAgICAgICAgbTIzID0gdGVbOV07XG4gICAgY29uc3QgbTMxID0gdGVbMl0sXG4gICAgICAgICAgbTMyID0gdGVbNl0sXG4gICAgICAgICAgbTMzID0gdGVbMTBdO1xuICAgIG9yZGVyID0gb3JkZXIgfHwgdGhpc1szXTtcblxuICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICAgIGNhc2UgRXVsZXIuWFlaOlxuICAgICAgICB0aGlzWzFdID0gTWF0aC5hc2luKGNsYW1wKG0xMywgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTEzKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKC1tMTIsIG0xMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVhaOlxuICAgICAgICB0aGlzWzBdID0gTWF0aC5hc2luKC1jbGFtcChtMjMsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0yMykgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKG0yMSwgbTIyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMigtbTMxLCBtMTEpO1xuICAgICAgICAgIHRoaXNbMl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWlhZOlxuICAgICAgICB0aGlzWzBdID0gTWF0aC5hc2luKGNsYW1wKG0zMiwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTMyKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMigtbTMxLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKC1tMTIsIG0yMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1sxXSA9IDA7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIobTIxLCBtMTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWllYOlxuICAgICAgICB0aGlzWzFdID0gTWF0aC5hc2luKC1jbGFtcChtMzEsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0zMSkgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKG0yMSwgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gMDtcbiAgICAgICAgICB0aGlzWzJdID0gTWF0aC5hdGFuMigtbTEyLCBtMjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVpYOlxuICAgICAgICB0aGlzWzJdID0gTWF0aC5hc2luKGNsYW1wKG0yMSwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTIxKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKC1tMzEsIG0xMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1swXSA9IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWFpZOlxuICAgICAgICB0aGlzWzJdID0gTWF0aC5hc2luKC1jbGFtcChtMTIsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0xMikgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKG0xMywgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gICAgfVxuXG4gICAgdGhpc1szXSA9IG9yZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2dldFJvdGF0aW9uTWF0cml4KHJlc3VsdCkge1xuICAgIGNvbnN0IHRlID0gcmVzdWx0IHx8IFstMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMF07XG4gICAgY29uc3QgeCA9IHRoaXMueCxcbiAgICAgICAgICB5ID0gdGhpcy55LFxuICAgICAgICAgIHogPSB0aGlzLno7XG4gICAgY29uc3QgYSA9IE1hdGguY29zKHgpO1xuICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh5KTtcbiAgICBjb25zdCBlID0gTWF0aC5jb3Moeik7XG4gICAgY29uc3QgYiA9IE1hdGguc2luKHgpO1xuICAgIGNvbnN0IGQgPSBNYXRoLnNpbih5KTtcbiAgICBjb25zdCBmID0gTWF0aC5zaW4oeik7XG5cbiAgICBzd2l0Y2ggKHRoaXNbM10pIHtcbiAgICAgIGNhc2UgRXVsZXIuWFlaOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYWUgPSBhICogZSxcbiAgICAgICAgICAgICAgICBhZiA9IGEgKiBmLFxuICAgICAgICAgICAgICAgIGJlID0gYiAqIGUsXG4gICAgICAgICAgICAgICAgYmYgPSBiICogZjtcbiAgICAgICAgICB0ZVswXSA9IGMgKiBlO1xuICAgICAgICAgIHRlWzRdID0gLWMgKiBmO1xuICAgICAgICAgIHRlWzhdID0gZDtcbiAgICAgICAgICB0ZVsxXSA9IGFmICsgYmUgKiBkO1xuICAgICAgICAgIHRlWzVdID0gYWUgLSBiZiAqIGQ7XG4gICAgICAgICAgdGVbOV0gPSAtYiAqIGM7XG4gICAgICAgICAgdGVbMl0gPSBiZiAtIGFlICogZDtcbiAgICAgICAgICB0ZVs2XSA9IGJlICsgYWYgKiBkO1xuICAgICAgICAgIHRlWzEwXSA9IGEgKiBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgRXVsZXIuWVhaOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgY2UgPSBjICogZSxcbiAgICAgICAgICAgICAgICBjZiA9IGMgKiBmLFxuICAgICAgICAgICAgICAgIGRlID0gZCAqIGUsXG4gICAgICAgICAgICAgICAgZGYgPSBkICogZjtcbiAgICAgICAgICB0ZVswXSA9IGNlICsgZGYgKiBiO1xuICAgICAgICAgIHRlWzRdID0gZGUgKiBiIC0gY2Y7XG4gICAgICAgICAgdGVbOF0gPSBhICogZDtcbiAgICAgICAgICB0ZVsxXSA9IGEgKiBmO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSAtYjtcbiAgICAgICAgICB0ZVsyXSA9IGNmICogYiAtIGRlO1xuICAgICAgICAgIHRlWzZdID0gZGYgKyBjZSAqIGI7XG4gICAgICAgICAgdGVbMTBdID0gYSAqIGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBFdWxlci5aWFk6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjZSA9IGMgKiBlLFxuICAgICAgICAgICAgICAgIGNmID0gYyAqIGYsXG4gICAgICAgICAgICAgICAgZGUgPSBkICogZSxcbiAgICAgICAgICAgICAgICBkZiA9IGQgKiBmO1xuICAgICAgICAgIHRlWzBdID0gY2UgLSBkZiAqIGI7XG4gICAgICAgICAgdGVbNF0gPSAtYSAqIGY7XG4gICAgICAgICAgdGVbOF0gPSBkZSArIGNmICogYjtcbiAgICAgICAgICB0ZVsxXSA9IGNmICsgZGUgKiBiO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSBkZiAtIGNlICogYjtcbiAgICAgICAgICB0ZVsyXSA9IC1hICogZDtcbiAgICAgICAgICB0ZVs2XSA9IGI7XG4gICAgICAgICAgdGVbMTBdID0gYSAqIGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBFdWxlci5aWVg6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBhZSA9IGEgKiBlLFxuICAgICAgICAgICAgICAgIGFmID0gYSAqIGYsXG4gICAgICAgICAgICAgICAgYmUgPSBiICogZSxcbiAgICAgICAgICAgICAgICBiZiA9IGIgKiBmO1xuICAgICAgICAgIHRlWzBdID0gYyAqIGU7XG4gICAgICAgICAgdGVbNF0gPSBiZSAqIGQgLSBhZjtcbiAgICAgICAgICB0ZVs4XSA9IGFlICogZCArIGJmO1xuICAgICAgICAgIHRlWzFdID0gYyAqIGY7XG4gICAgICAgICAgdGVbNV0gPSBiZiAqIGQgKyBhZTtcbiAgICAgICAgICB0ZVs5XSA9IGFmICogZCAtIGJlO1xuICAgICAgICAgIHRlWzJdID0gLWQ7XG4gICAgICAgICAgdGVbNl0gPSBiICogYztcbiAgICAgICAgICB0ZVsxMF0gPSBhICogYztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLllaWDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFjID0gYSAqIGMsXG4gICAgICAgICAgICAgICAgYWQgPSBhICogZCxcbiAgICAgICAgICAgICAgICBiYyA9IGIgKiBjLFxuICAgICAgICAgICAgICAgIGJkID0gYiAqIGQ7XG4gICAgICAgICAgdGVbMF0gPSBjICogZTtcbiAgICAgICAgICB0ZVs0XSA9IGJkIC0gYWMgKiBmO1xuICAgICAgICAgIHRlWzhdID0gYmMgKiBmICsgYWQ7XG4gICAgICAgICAgdGVbMV0gPSBmO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSAtYiAqIGU7XG4gICAgICAgICAgdGVbMl0gPSAtZCAqIGU7XG4gICAgICAgICAgdGVbNl0gPSBhZCAqIGYgKyBiYztcbiAgICAgICAgICB0ZVsxMF0gPSBhYyAtIGJkICogZjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLlhaWTpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFjID0gYSAqIGMsXG4gICAgICAgICAgICAgICAgYWQgPSBhICogZCxcbiAgICAgICAgICAgICAgICBiYyA9IGIgKiBjLFxuICAgICAgICAgICAgICAgIGJkID0gYiAqIGQ7XG4gICAgICAgICAgdGVbMF0gPSBjICogZTtcbiAgICAgICAgICB0ZVs0XSA9IC1mO1xuICAgICAgICAgIHRlWzhdID0gZCAqIGU7XG4gICAgICAgICAgdGVbMV0gPSBhYyAqIGYgKyBiZDtcbiAgICAgICAgICB0ZVs1XSA9IGEgKiBlO1xuICAgICAgICAgIHRlWzldID0gYWQgKiBmIC0gYmM7XG4gICAgICAgICAgdGVbMl0gPSBiYyAqIGYgLSBhZDtcbiAgICAgICAgICB0ZVs2XSA9IGIgKiBlO1xuICAgICAgICAgIHRlWzEwXSA9IGJkICogZiArIGFjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gICAgfVxuXG4gICAgdGVbM10gPSAwO1xuICAgIHRlWzddID0gMDtcbiAgICB0ZVsxMV0gPSAwO1xuICAgIHRlWzEyXSA9IDA7XG4gICAgdGVbMTNdID0gMDtcbiAgICB0ZVsxNF0gPSAwO1xuICAgIHRlWzE1XSA9IDE7XG4gICAgcmV0dXJuIHRlO1xuICB9XG5cbiAgdG9RdWF0ZXJuaW9uKCkge1xuICAgIGNvbnN0IGN5ID0gTWF0aC5jb3ModGhpcy55YXcgKiAwLjUpO1xuICAgIGNvbnN0IHN5ID0gTWF0aC5zaW4odGhpcy55YXcgKiAwLjUpO1xuICAgIGNvbnN0IGNyID0gTWF0aC5jb3ModGhpcy5yb2xsICogMC41KTtcbiAgICBjb25zdCBzciA9IE1hdGguc2luKHRoaXMucm9sbCAqIDAuNSk7XG4gICAgY29uc3QgY3AgPSBNYXRoLmNvcyh0aGlzLnBpdGNoICogMC41KTtcbiAgICBjb25zdCBzcCA9IE1hdGguc2luKHRoaXMucGl0Y2ggKiAwLjUpO1xuICAgIGNvbnN0IHcgPSBjeSAqIGNyICogY3AgKyBzeSAqIHNyICogc3A7XG4gICAgY29uc3QgeCA9IGN5ICogc3IgKiBjcCAtIHN5ICogY3IgKiBzcDtcbiAgICBjb25zdCB5ID0gY3kgKiBjciAqIHNwICsgc3kgKiBzciAqIGNwO1xuICAgIGNvbnN0IHogPSBzeSAqIGNyICogY3AgLSBjeSAqIHNyICogc3A7XG4gICAgcmV0dXJuIG5ldyBRdWF0ZXJuaW9uKHgsIHksIHosIHcpO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV1bGVyLmpzLm1hcCIsImltcG9ydCBNYXRyaXggZnJvbSAnLi9iYXNlL21hdHJpeCc7XG5pbXBvcnQgeyBjaGVja1ZlY3RvciwgZGVwcmVjYXRlZCB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCB7IHZlYzRfdHJhbnNmb3JtTWF0MyB9IGZyb20gJy4uL2xpYi9nbC1tYXRyaXgtZXh0cmFzJztcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSAnZ2wtbWF0cml4L21hdDMnO1xuaW1wb3J0ICogYXMgdmVjMiBmcm9tICdnbC1tYXRyaXgvdmVjMic7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gJ2dsLW1hdHJpeC92ZWMzJztcbmNvbnN0IElERU5USVRZID0gT2JqZWN0LmZyZWV6ZShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pO1xuY29uc3QgWkVSTyA9IE9iamVjdC5mcmVlemUoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcbmNvbnN0IElORElDRVMgPSBPYmplY3QuZnJlZXplKHtcbiAgQ09MMFJPVzA6IDAsXG4gIENPTDBST1cxOiAxLFxuICBDT0wwUk9XMjogMixcbiAgQ09MMVJPVzA6IDMsXG4gIENPTDFST1cxOiA0LFxuICBDT0wxUk9XMjogNSxcbiAgQ09MMlJPVzA6IDYsXG4gIENPTDJST1cxOiA3LFxuICBDT0wyUk9XMjogOFxufSk7XG5jb25zdCBjb25zdGFudHMgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeDMgZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZ2V0IElERU5USVRZKCkge1xuICAgIGNvbnN0YW50cy5JREVOVElUWSA9IGNvbnN0YW50cy5JREVOVElUWSB8fCBPYmplY3QuZnJlZXplKG5ldyBNYXRyaXgzKElERU5USVRZKSk7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5JREVOVElUWTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWkVSTygpIHtcbiAgICBjb25zdGFudHMuWkVSTyA9IGNvbnN0YW50cy5aRVJPIHx8IE9iamVjdC5mcmVlemUobmV3IE1hdHJpeDMoWkVSTykpO1xuICAgIHJldHVybiBjb25zdGFudHMuWkVSTztcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gOTtcbiAgfVxuXG4gIGdldCBSQU5LKCkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgZ2V0IElORElDRVMoKSB7XG4gICAgcmV0dXJuIElORElDRVM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHN1cGVyKC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHRoaXMuY29weShhcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWRlbnRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHRoaXNbNF0gPSBhcnJheVs0XTtcbiAgICB0aGlzWzVdID0gYXJyYXlbNV07XG4gICAgdGhpc1s2XSA9IGFycmF5WzZdO1xuICAgIHRoaXNbN10gPSBhcnJheVs3XTtcbiAgICB0aGlzWzhdID0gYXJyYXlbOF07XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldChtMDAsIG0xMCwgbTIwLCBtMDEsIG0xMSwgbTIxLCBtMDIsIG0xMiwgbTIyKSB7XG4gICAgdGhpc1swXSA9IG0wMDtcbiAgICB0aGlzWzFdID0gbTEwO1xuICAgIHRoaXNbMl0gPSBtMjA7XG4gICAgdGhpc1szXSA9IG0wMTtcbiAgICB0aGlzWzRdID0gbTExO1xuICAgIHRoaXNbNV0gPSBtMjE7XG4gICAgdGhpc1s2XSA9IG0wMjtcbiAgICB0aGlzWzddID0gbTEyO1xuICAgIHRoaXNbOF0gPSBtMjI7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldFJvd01ham9yKG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgICB0aGlzWzBdID0gbTAwO1xuICAgIHRoaXNbMV0gPSBtMTA7XG4gICAgdGhpc1syXSA9IG0yMDtcbiAgICB0aGlzWzNdID0gbTAxO1xuICAgIHRoaXNbNF0gPSBtMTE7XG4gICAgdGhpc1s1XSA9IG0yMTtcbiAgICB0aGlzWzZdID0gbTAyO1xuICAgIHRoaXNbN10gPSBtMTI7XG4gICAgdGhpc1s4XSA9IG0yMjtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZGV0ZXJtaW5hbnQoKSB7XG4gICAgcmV0dXJuIG1hdDMuZGV0ZXJtaW5hbnQodGhpcyk7XG4gIH1cblxuICBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KElERU5USVRZKTtcbiAgfVxuXG4gIGZyb21RdWF0ZXJuaW9uKHEpIHtcbiAgICBtYXQzLmZyb21RdWF0KHRoaXMsIHEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc3Bvc2UoKSB7XG4gICAgbWF0My50cmFuc3Bvc2UodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGludmVydCgpIHtcbiAgICBtYXQzLmludmVydCh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlMZWZ0KGEpIHtcbiAgICBtYXQzLm11bHRpcGx5KHRoaXMsIGEsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseVJpZ2h0KGEpIHtcbiAgICBtYXQzLm11bHRpcGx5KHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGUocmFkaWFucykge1xuICAgIG1hdDMucm90YXRlKHRoaXMsIHRoaXMsIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzY2FsZShmYWN0b3IpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWN0b3IpKSB7XG4gICAgICBtYXQzLnNjYWxlKHRoaXMsIHRoaXMsIGZhY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdDMuc2NhbGUodGhpcywgdGhpcywgW2ZhY3RvciwgZmFjdG9yLCBmYWN0b3JdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNsYXRlKHZlYykge1xuICAgIG1hdDMudHJhbnNsYXRlKHRoaXMsIHRoaXMsIHZlYyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2ZWN0b3IsIHJlc3VsdCkge1xuICAgIHN3aXRjaCAodmVjdG9yLmxlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXN1bHQgPSB2ZWMyLnRyYW5zZm9ybU1hdDMocmVzdWx0IHx8IFstMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXN1bHQgPSB2ZWMzLnRyYW5zZm9ybU1hdDMocmVzdWx0IHx8IFstMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmVzdWx0ID0gdmVjNF90cmFuc2Zvcm1NYXQzKHJlc3VsdCB8fCBbLTAsIC0wLCAtMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIHZlY3RvcicpO1xuICAgIH1cblxuICAgIGNoZWNrVmVjdG9yKHJlc3VsdCwgdmVjdG9yLmxlbmd0aCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRyYW5zZm9ybVZlY3Rvcih2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGRlcHJlY2F0ZWQoJ01hdHJpeDMudHJhbnNmb3JtVmVjdG9yJyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZlY3RvciwgcmVzdWx0KTtcbiAgfVxuXG4gIHRyYW5zZm9ybVZlY3RvcjIodmVjdG9yLCByZXN1bHQpIHtcbiAgICBkZXByZWNhdGVkKCdNYXRyaXgzLnRyYW5zZm9ybVZlY3RvcicpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1WZWN0b3IzKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgZGVwcmVjYXRlZCgnTWF0cml4My50cmFuc2Zvcm1WZWN0b3InKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0odmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdHJpeDMuanMubWFwIiwiaW1wb3J0IHsgY2hlY2tWZWN0b3IsIGRlcHJlY2F0ZWQgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4vYmFzZS9tYXRyaXgnO1xuaW1wb3J0IHsgdmVjMl90cmFuc2Zvcm1NYXQ0QXNWZWN0b3IsIHZlYzNfdHJhbnNmb3JtTWF0NEFzVmVjdG9yIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuaW1wb3J0ICogYXMgbWF0NCBmcm9tICdnbC1tYXRyaXgvbWF0NCc7XG5pbXBvcnQgKiBhcyB2ZWMyIGZyb20gJ2dsLW1hdHJpeC92ZWMyJztcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSAnZ2wtbWF0cml4L3ZlYzMnO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tICdnbC1tYXRyaXgvdmVjNCc7XG5jb25zdCBJREVOVElUWSA9IE9iamVjdC5mcmVlemUoWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdKTtcbmNvbnN0IFpFUk8gPSBPYmplY3QuZnJlZXplKFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XG5jb25zdCBJTkRJQ0VTID0gT2JqZWN0LmZyZWV6ZSh7XG4gIENPTDBST1cwOiAwLFxuICBDT0wwUk9XMTogMSxcbiAgQ09MMFJPVzI6IDIsXG4gIENPTDBST1czOiAzLFxuICBDT0wxUk9XMDogNCxcbiAgQ09MMVJPVzE6IDUsXG4gIENPTDFST1cyOiA2LFxuICBDT0wxUk9XMzogNyxcbiAgQ09MMlJPVzA6IDgsXG4gIENPTDJST1cxOiA5LFxuICBDT0wyUk9XMjogMTAsXG4gIENPTDJST1czOiAxMSxcbiAgQ09MM1JPVzA6IDEyLFxuICBDT0wzUk9XMTogMTMsXG4gIENPTDNST1cyOiAxNCxcbiAgQ09MM1JPVzM6IDE1XG59KTtcbmNvbnN0IGNvbnN0YW50cyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4NCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBnZXQgSURFTlRJVFkoKSB7XG4gICAgY29uc3RhbnRzLklERU5USVRZID0gY29uc3RhbnRzLklERU5USVRZIHx8IE9iamVjdC5mcmVlemUobmV3IE1hdHJpeDQoSURFTlRJVFkpKTtcbiAgICByZXR1cm4gY29uc3RhbnRzLklERU5USVRZO1xuICB9XG5cbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIGNvbnN0YW50cy5aRVJPID0gY29uc3RhbnRzLlpFUk8gfHwgT2JqZWN0LmZyZWV6ZShuZXcgTWF0cml4NChaRVJPKSk7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5aRVJPO1xuICB9XG5cbiAgZ2V0IElORElDRVMoKSB7XG4gICAgcmV0dXJuIElORElDRVM7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDE2O1xuICB9XG5cbiAgZ2V0IFJBTksoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHN1cGVyKC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICB0aGlzLmNvcHkoYXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlkZW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHRoaXNbM10gPSBhcnJheVszXTtcbiAgICB0aGlzWzRdID0gYXJyYXlbNF07XG4gICAgdGhpc1s1XSA9IGFycmF5WzVdO1xuICAgIHRoaXNbNl0gPSBhcnJheVs2XTtcbiAgICB0aGlzWzddID0gYXJyYXlbN107XG4gICAgdGhpc1s4XSA9IGFycmF5WzhdO1xuICAgIHRoaXNbOV0gPSBhcnJheVs5XTtcbiAgICB0aGlzWzEwXSA9IGFycmF5WzEwXTtcbiAgICB0aGlzWzExXSA9IGFycmF5WzExXTtcbiAgICB0aGlzWzEyXSA9IGFycmF5WzEyXTtcbiAgICB0aGlzWzEzXSA9IGFycmF5WzEzXTtcbiAgICB0aGlzWzE0XSA9IGFycmF5WzE0XTtcbiAgICB0aGlzWzE1XSA9IGFycmF5WzE1XTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0KG0wMCwgbTEwLCBtMjAsIG0zMCwgbTAxLCBtMTEsIG0yMSwgbTMxLCBtMDIsIG0xMiwgbTIyLCBtMzIsIG0wMywgbTEzLCBtMjMsIG0zMykge1xuICAgIHRoaXNbMF0gPSBtMDA7XG4gICAgdGhpc1sxXSA9IG0xMDtcbiAgICB0aGlzWzJdID0gbTIwO1xuICAgIHRoaXNbM10gPSBtMzA7XG4gICAgdGhpc1s0XSA9IG0wMTtcbiAgICB0aGlzWzVdID0gbTExO1xuICAgIHRoaXNbNl0gPSBtMjE7XG4gICAgdGhpc1s3XSA9IG0zMTtcbiAgICB0aGlzWzhdID0gbTAyO1xuICAgIHRoaXNbOV0gPSBtMTI7XG4gICAgdGhpc1sxMF0gPSBtMjI7XG4gICAgdGhpc1sxMV0gPSBtMzI7XG4gICAgdGhpc1sxMl0gPSBtMDM7XG4gICAgdGhpc1sxM10gPSBtMTM7XG4gICAgdGhpc1sxNF0gPSBtMjM7XG4gICAgdGhpc1sxNV0gPSBtMzM7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldFJvd01ham9yKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgIHRoaXNbMF0gPSBtMDA7XG4gICAgdGhpc1sxXSA9IG0xMDtcbiAgICB0aGlzWzJdID0gbTIwO1xuICAgIHRoaXNbM10gPSBtMzA7XG4gICAgdGhpc1s0XSA9IG0wMTtcbiAgICB0aGlzWzVdID0gbTExO1xuICAgIHRoaXNbNl0gPSBtMjE7XG4gICAgdGhpc1s3XSA9IG0zMTtcbiAgICB0aGlzWzhdID0gbTAyO1xuICAgIHRoaXNbOV0gPSBtMTI7XG4gICAgdGhpc1sxMF0gPSBtMjI7XG4gICAgdGhpc1sxMV0gPSBtMzI7XG4gICAgdGhpc1sxMl0gPSBtMDM7XG4gICAgdGhpc1sxM10gPSBtMTM7XG4gICAgdGhpc1sxNF0gPSBtMjM7XG4gICAgdGhpc1sxNV0gPSBtMzM7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRvUm93TWFqb3IocmVzdWx0KSB7XG4gICAgcmVzdWx0WzBdID0gdGhpc1swXTtcbiAgICByZXN1bHRbMV0gPSB0aGlzWzRdO1xuICAgIHJlc3VsdFsyXSA9IHRoaXNbOF07XG4gICAgcmVzdWx0WzNdID0gdGhpc1sxMl07XG4gICAgcmVzdWx0WzRdID0gdGhpc1sxXTtcbiAgICByZXN1bHRbNV0gPSB0aGlzWzVdO1xuICAgIHJlc3VsdFs2XSA9IHRoaXNbOV07XG4gICAgcmVzdWx0WzddID0gdGhpc1sxM107XG4gICAgcmVzdWx0WzhdID0gdGhpc1syXTtcbiAgICByZXN1bHRbOV0gPSB0aGlzWzZdO1xuICAgIHJlc3VsdFsxMF0gPSB0aGlzWzEwXTtcbiAgICByZXN1bHRbMTFdID0gdGhpc1sxNF07XG4gICAgcmVzdWx0WzEyXSA9IHRoaXNbM107XG4gICAgcmVzdWx0WzEzXSA9IHRoaXNbN107XG4gICAgcmVzdWx0WzE0XSA9IHRoaXNbMTFdO1xuICAgIHJlc3VsdFsxNV0gPSB0aGlzWzE1XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWRlbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weShJREVOVElUWSk7XG4gIH1cblxuICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgbWF0NC5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJ1c3R1bSh7XG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgdG9wLFxuICAgIG5lYXIsXG4gICAgZmFyXG4gIH0pIHtcbiAgICBpZiAoZmFyID09PSBJbmZpbml0eSkge1xuICAgICAgTWF0cml4NC5fY29tcHV0ZUluZmluaXRlUGVyc3BlY3RpdmVPZmZDZW50ZXIodGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0NC5mcnVzdHVtKHRoaXMsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc3RhdGljIF9jb21wdXRlSW5maW5pdGVQZXJzcGVjdGl2ZU9mZkNlbnRlcihyZXN1bHQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhcikge1xuICAgIGNvbnN0IGNvbHVtbjBSb3cwID0gMi4wICogbmVhciAvIChyaWdodCAtIGxlZnQpO1xuICAgIGNvbnN0IGNvbHVtbjFSb3cxID0gMi4wICogbmVhciAvICh0b3AgLSBib3R0b20pO1xuICAgIGNvbnN0IGNvbHVtbjJSb3cwID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcbiAgICBjb25zdCBjb2x1bW4yUm93MSA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XG4gICAgY29uc3QgY29sdW1uMlJvdzIgPSAtMS4wO1xuICAgIGNvbnN0IGNvbHVtbjJSb3czID0gLTEuMDtcbiAgICBjb25zdCBjb2x1bW4zUm93MiA9IC0yLjAgKiBuZWFyO1xuICAgIHJlc3VsdFswXSA9IGNvbHVtbjBSb3cwO1xuICAgIHJlc3VsdFsxXSA9IDAuMDtcbiAgICByZXN1bHRbMl0gPSAwLjA7XG4gICAgcmVzdWx0WzNdID0gMC4wO1xuICAgIHJlc3VsdFs0XSA9IDAuMDtcbiAgICByZXN1bHRbNV0gPSBjb2x1bW4xUm93MTtcbiAgICByZXN1bHRbNl0gPSAwLjA7XG4gICAgcmVzdWx0WzddID0gMC4wO1xuICAgIHJlc3VsdFs4XSA9IGNvbHVtbjJSb3cwO1xuICAgIHJlc3VsdFs5XSA9IGNvbHVtbjJSb3cxO1xuICAgIHJlc3VsdFsxMF0gPSBjb2x1bW4yUm93MjtcbiAgICByZXN1bHRbMTFdID0gY29sdW1uMlJvdzM7XG4gICAgcmVzdWx0WzEyXSA9IDAuMDtcbiAgICByZXN1bHRbMTNdID0gMC4wO1xuICAgIHJlc3VsdFsxNF0gPSBjb2x1bW4zUm93MjtcbiAgICByZXN1bHRbMTVdID0gMC4wO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBsb29rQXQoZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICh7XG4gICAgICAgIGV5ZSxcbiAgICAgICAgY2VudGVyLFxuICAgICAgICB1cFxuICAgICAgfSA9IGV5ZSk7XG4gICAgfVxuXG4gICAgY2VudGVyID0gY2VudGVyIHx8IFswLCAwLCAwXTtcbiAgICB1cCA9IHVwIHx8IFswLCAxLCAwXTtcbiAgICBtYXQ0Lmxvb2tBdCh0aGlzLCBleWUsIGNlbnRlciwgdXApO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBvcnRobyh7XG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgdG9wLFxuICAgIG5lYXIgPSAwLjEsXG4gICAgZmFyID0gNTAwXG4gIH0pIHtcbiAgICBtYXQ0Lm9ydGhvKHRoaXMsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgb3J0aG9ncmFwaGljKHtcbiAgICBmb3Z5ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgIGFzcGVjdCA9IDEsXG4gICAgZm9jYWxEaXN0YW5jZSA9IDEsXG4gICAgbmVhciA9IDAuMSxcbiAgICBmYXIgPSA1MDBcbiAgfSkge1xuICAgIGlmIChmb3Z5ID4gTWF0aC5QSSAqIDIpIHtcbiAgICAgIHRocm93IEVycm9yKCdyYWRpYW5zJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFsZlkgPSBmb3Z5IC8gMjtcbiAgICBjb25zdCB0b3AgPSBmb2NhbERpc3RhbmNlICogTWF0aC50YW4oaGFsZlkpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdG9wICogYXNwZWN0O1xuICAgIHJldHVybiBuZXcgTWF0cml4NCgpLm9ydGhvKHtcbiAgICAgIGxlZnQ6IC1yaWdodCxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tOiAtdG9wLFxuICAgICAgdG9wLFxuICAgICAgbmVhcixcbiAgICAgIGZhclxuICAgIH0pO1xuICB9XG5cbiAgcGVyc3BlY3RpdmUoe1xuICAgIGZvdnkgPSB1bmRlZmluZWQsXG4gICAgZm92ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgIGFzcGVjdCA9IDEsXG4gICAgbmVhciA9IDAuMSxcbiAgICBmYXIgPSA1MDBcbiAgfSA9IHt9KSB7XG4gICAgZm92eSA9IGZvdnkgfHwgZm92O1xuXG4gICAgaWYgKGZvdnkgPiBNYXRoLlBJICogMikge1xuICAgICAgdGhyb3cgRXJyb3IoJ3JhZGlhbnMnKTtcbiAgICB9XG5cbiAgICBtYXQ0LnBlcnNwZWN0aXZlKHRoaXMsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZGV0ZXJtaW5hbnQoKSB7XG4gICAgcmV0dXJuIG1hdDQuZGV0ZXJtaW5hbnQodGhpcyk7XG4gIH1cblxuICBnZXRTY2FsZShyZXN1bHQgPSBbLTAsIC0wLCAtMF0pIHtcbiAgICByZXN1bHRbMF0gPSBNYXRoLnNxcnQodGhpc1swXSAqIHRoaXNbMF0gKyB0aGlzWzFdICogdGhpc1sxXSArIHRoaXNbMl0gKiB0aGlzWzJdKTtcbiAgICByZXN1bHRbMV0gPSBNYXRoLnNxcnQodGhpc1s0XSAqIHRoaXNbNF0gKyB0aGlzWzVdICogdGhpc1s1XSArIHRoaXNbNl0gKiB0aGlzWzZdKTtcbiAgICByZXN1bHRbMl0gPSBNYXRoLnNxcnQodGhpc1s4XSAqIHRoaXNbOF0gKyB0aGlzWzldICogdGhpc1s5XSArIHRoaXNbMTBdICogdGhpc1sxMF0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRUcmFuc2xhdGlvbihyZXN1bHQgPSBbLTAsIC0wLCAtMF0pIHtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzEyXTtcbiAgICByZXN1bHRbMV0gPSB0aGlzWzEzXTtcbiAgICByZXN1bHRbMl0gPSB0aGlzWzE0XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Um90YXRpb24ocmVzdWx0ID0gWy0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wXSwgc2NhbGVSZXN1bHQgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKHNjYWxlUmVzdWx0IHx8IFstMCwgLTAsIC0wXSk7XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMCA9IDEgLyBzY2FsZVswXTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUxID0gMSAvIHNjYWxlWzFdO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTIgPSAxIC8gc2NhbGVbMl07XG4gICAgcmVzdWx0WzBdID0gdGhpc1swXSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzFdID0gdGhpc1sxXSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzJdID0gdGhpc1syXSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzNdID0gMDtcbiAgICByZXN1bHRbNF0gPSB0aGlzWzRdICogaW52ZXJzZVNjYWxlMDtcbiAgICByZXN1bHRbNV0gPSB0aGlzWzVdICogaW52ZXJzZVNjYWxlMTtcbiAgICByZXN1bHRbNl0gPSB0aGlzWzZdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXN1bHRbN10gPSAwO1xuICAgIHJlc3VsdFs4XSA9IHRoaXNbOF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFs5XSA9IHRoaXNbOV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFsxMF0gPSB0aGlzWzEwXSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzExXSA9IDA7XG4gICAgcmVzdWx0WzEyXSA9IDA7XG4gICAgcmVzdWx0WzEzXSA9IDA7XG4gICAgcmVzdWx0WzE0XSA9IDA7XG4gICAgcmVzdWx0WzE1XSA9IDE7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4MyhyZXN1bHQgPSBbLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMF0sIHNjYWxlUmVzdWx0ID0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5nZXRTY2FsZShzY2FsZVJlc3VsdCB8fCBbLTAsIC0wLCAtMF0pO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTAgPSAxIC8gc2NhbGVbMF07XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMSA9IDEgLyBzY2FsZVsxXTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUyID0gMSAvIHNjYWxlWzJdO1xuICAgIHJlc3VsdFswXSA9IHRoaXNbMF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbMV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFsyXSA9IHRoaXNbMl0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJlc3VsdFszXSA9IHRoaXNbNF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFs0XSA9IHRoaXNbNV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFs1XSA9IHRoaXNbNl0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJlc3VsdFs2XSA9IHRoaXNbOF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFs3XSA9IHRoaXNbOV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFs4XSA9IHRoaXNbMTBdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdHJhbnNwb3NlKCkge1xuICAgIG1hdDQudHJhbnNwb3NlKHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBpbnZlcnQoKSB7XG4gICAgbWF0NC5pbnZlcnQodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5TGVmdChhKSB7XG4gICAgbWF0NC5tdWx0aXBseSh0aGlzLCBhLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlSaWdodChhKSB7XG4gICAgbWF0NC5tdWx0aXBseSh0aGlzLCB0aGlzLCBhKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWChyYWRpYW5zKSB7XG4gICAgbWF0NC5yb3RhdGVYKHRoaXMsIHRoaXMsIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVZKHJhZGlhbnMpIHtcbiAgICBtYXQ0LnJvdGF0ZVkodGhpcywgdGhpcywgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVoocmFkaWFucykge1xuICAgIG1hdDQucm90YXRlWih0aGlzLCB0aGlzLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWFlaKFtyeCwgcnksIHJ6XSkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0ZVgocngpLnJvdGF0ZVkocnkpLnJvdGF0ZVoocnopO1xuICB9XG5cbiAgcm90YXRlQXhpcyhyYWRpYW5zLCBheGlzKSB7XG4gICAgbWF0NC5yb3RhdGUodGhpcywgdGhpcywgcmFkaWFucywgYXhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKGZhY3Rvcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZhY3RvcikpIHtcbiAgICAgIG1hdDQuc2NhbGUodGhpcywgdGhpcywgZmFjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0NC5zY2FsZSh0aGlzLCB0aGlzLCBbZmFjdG9yLCBmYWN0b3IsIGZhY3Rvcl0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2xhdGUodmVjKSB7XG4gICAgbWF0NC50cmFuc2xhdGUodGhpcywgdGhpcywgdmVjKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgaWYgKHZlY3Rvci5sZW5ndGggPT09IDQpIHtcbiAgICAgIHJlc3VsdCA9IHZlYzQudHJhbnNmb3JtTWF0NChyZXN1bHQgfHwgWy0wLCAtMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgIGNoZWNrVmVjdG9yKHJlc3VsdCwgNCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQodmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbiAgdHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxlbmd0aFxuICAgIH0gPSB2ZWN0b3I7XG5cbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXN1bHQgPSB2ZWMyLnRyYW5zZm9ybU1hdDQocmVzdWx0IHx8IFstMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXN1bHQgPSB2ZWMzLnRyYW5zZm9ybU1hdDQocmVzdWx0IHx8IFstMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCB2ZWN0b3InKTtcbiAgICB9XG5cbiAgICBjaGVja1ZlY3RvcihyZXN1bHQsIHZlY3Rvci5sZW5ndGgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1ZlY3Rvcih2ZWN0b3IsIHJlc3VsdCkge1xuICAgIHN3aXRjaCAodmVjdG9yLmxlbmd0aCkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXN1bHQgPSB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3RvcihyZXN1bHQgfHwgWy0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJlc3VsdCA9IHZlYzNfdHJhbnNmb3JtTWF0NEFzVmVjdG9yKHJlc3VsdCB8fCBbLTAsIC0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgdmVjdG9yJyk7XG4gICAgfVxuXG4gICAgY2hlY2tWZWN0b3IocmVzdWx0LCB2ZWN0b3IubGVuZ3RoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWFrZVJvdGF0aW9uWChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS5yb3RhdGVYKHJhZGlhbnMpO1xuICB9XG5cbiAgbWFrZVRyYW5zbGF0aW9uKHgsIHksIHopIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eSgpLnRyYW5zbGF0ZShbeCwgeSwgel0pO1xuICB9XG5cbiAgdHJhbnNmb3JtUG9pbnQodmVjdG9yLCByZXN1bHQpIHtcbiAgICBkZXByZWNhdGVkKCdNYXRyaXg0LnRyYW5zZm9ybVBvaW50JywgJzMuMCcpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQodmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgZGVwcmVjYXRlZCgnTWF0cml4NC50cmFuc2Zvcm1WZWN0b3InLCAnMy4wJyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EaXJlY3Rpb24odmVjdG9yLCByZXN1bHQpIHtcbiAgICBkZXByZWNhdGVkKCdNYXRyaXg0LnRyYW5zZm9ybURpcmVjdGlvbicsICczLjAnKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1ZlY3Rvcih2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0cml4NC5qcy5tYXAiLCJpbXBvcnQgTWF0cml4NCBmcm9tICcuL21hdHJpeDQnO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi92ZWN0b3IzJztcbmltcG9ydCBFdWxlciBmcm9tICcuL2V1bGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgeCA9IDAsXG4gICAgeSA9IDAsXG4gICAgeiA9IDAsXG4gICAgcm9sbCA9IDAsXG4gICAgcGl0Y2ggPSAwLFxuICAgIHlhdyA9IDAsXG4gICAgcG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgb3JpZW50YXRpb24gPSB1bmRlZmluZWRcbiAgfSA9IHt9KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pICYmIHBvc2l0aW9uLmxlbmd0aCA9PT0gMykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKHBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKHgsIHksIHopO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9yaWVudGF0aW9uKSAmJiBvcmllbnRhdGlvbi5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPSBuZXcgRXVsZXIob3JpZW50YXRpb24sIG9yaWVudGF0aW9uWzNdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG5ldyBFdWxlcihyb2xsLCBwaXRjaCwgeWF3LCBFdWxlci5Sb2xsUGl0Y2hZYXcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMucG9zaXRpb24ueCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgeigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi56O1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCByb2xsKCkge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uLnJvbGw7XG4gIH1cblxuICBzZXQgcm9sbCh2YWx1ZSkge1xuICAgIHRoaXMub3JpZW50YXRpb24ucm9sbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBpdGNoKCkge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uLnBpdGNoO1xuICB9XG5cbiAgc2V0IHBpdGNoKHZhbHVlKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbi5waXRjaCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHlhdygpIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbi55YXc7XG4gIH1cblxuICBzZXQgeWF3KHZhbHVlKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbi55YXcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0T3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb247XG4gIH1cblxuICBlcXVhbHMocG9zZSkge1xuICAgIGlmICghcG9zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmVxdWFscyhwb3NlLnBvc2l0aW9uKSAmJiB0aGlzLm9yaWVudGF0aW9uLmVxdWFscyhwb3NlLm9yaWVudGF0aW9uKTtcbiAgfVxuXG4gIGV4YWN0RXF1YWxzKHBvc2UpIHtcbiAgICBpZiAoIXBvc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5leGFjdEVxdWFscyhwb3NlLnBvc2l0aW9uKSAmJiB0aGlzLm9yaWVudGF0aW9uLmV4YWN0RXF1YWxzKHBvc2Uub3JpZW50YXRpb24pO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKSB7XG4gICAgY29uc3Qgc3IgPSBNYXRoLnNpbih0aGlzLnJvbGwpO1xuICAgIGNvbnN0IHNwID0gTWF0aC5zaW4odGhpcy5waXRjaCk7XG4gICAgY29uc3Qgc3cgPSBNYXRoLnNpbih0aGlzLnlhdyk7XG4gICAgY29uc3QgY3IgPSBNYXRoLmNvcyh0aGlzLnJvbGwpO1xuICAgIGNvbnN0IGNwID0gTWF0aC5jb3ModGhpcy5waXRjaCk7XG4gICAgY29uc3QgY3cgPSBNYXRoLmNvcyh0aGlzLnlhdyk7XG4gICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeDQoKS5zZXRSb3dNYWpvcihjdyAqIGNwLCAtc3cgKiBjciArIGN3ICogc3AgKiBzciwgc3cgKiBzciArIGN3ICogc3AgKiBjciwgdGhpcy54LCBzdyAqIGNwLCBjdyAqIGNyICsgc3cgKiBzcCAqIHNyLCAtY3cgKiBzciArIHN3ICogc3AgKiBjciwgdGhpcy55LCAtc3AsIGNwICogc3IsIGNwICogY3IsIHRoaXMueiwgMCwgMCwgMCwgMSk7XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4RnJvbVBvc2UocG9zZSkge1xuICAgIHJldHVybiBuZXcgTWF0cml4NCgpLm11bHRpcGx5UmlnaHQodGhpcy5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpKS5tdWx0aXBseVJpZ2h0KHBvc2UuZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKS5pbnZlcnQoKSk7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeFRvUG9zZShwb3NlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0KCkubXVsdGlwbHlSaWdodChwb3NlLmdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCkpLm11bHRpcGx5UmlnaHQodGhpcy5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpLmludmVydCgpKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3NlLmpzLm1hcCIsImltcG9ydCBNYXRoQXJyYXkgZnJvbSAnLi9iYXNlL21hdGgtYXJyYXknO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIsIGNoZWNrVmVjdG9yIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IGFzc2VydCBmcm9tICcuLi9saWIvYXNzZXJ0JztcbmltcG9ydCAqIGFzIHF1YXQgZnJvbSAnZ2wtbWF0cml4L3F1YXQnO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tICdnbC1tYXRyaXgvdmVjNCc7XG5jb25zdCBJREVOVElUWV9RVUFURVJOSU9OID0gWzAsIDAsIDAsIDFdO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVhdGVybmlvbiBleHRlbmRzIE1hdGhBcnJheSB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jb3B5KHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCh4LCB5LCB6LCB3KTtcbiAgICB9XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzZXQoeCwgeSwgeiwgdykge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHRoaXNbMl0gPSB6O1xuICAgIHRoaXNbM10gPSB3O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tTWF0cml4MyhtKSB7XG4gICAgcXVhdC5mcm9tTWF0Myh0aGlzLCBtKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgaWRlbnRpdHkoKSB7XG4gICAgcXVhdC5pZGVudGl0eSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbUF4aXNSb3RhdGlvbihheGlzLCByYWQpIHtcbiAgICBxdWF0LnNldEF4aXNBbmdsZSh0aGlzLCBheGlzLCByYWQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzZXRBeGlzQW5nbGUoYXhpcywgcmFkKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbUF4aXNSb3RhdGlvbihheGlzLCByYWQpO1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiA0O1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXNbMF0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpc1sxXTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHcoKSB7XG4gICAgcmV0dXJuIHRoaXNbM107XG4gIH1cblxuICBzZXQgdyh2YWx1ZSkge1xuICAgIHRoaXNbM10gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBsZW4oKSB7XG4gICAgcmV0dXJuIHF1YXQubGVuZ3RoKHRoaXMpO1xuICB9XG5cbiAgbGVuZ3RoU3F1YXJlZCgpIHtcbiAgICByZXR1cm4gcXVhdC5zcXVhcmVkTGVuZ3RoKHRoaXMpO1xuICB9XG5cbiAgZG90KGEsIGIpIHtcbiAgICBpZiAoYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1YXRlcm5pb24uZG90IG9ubHkgdGFrZXMgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YXQuZG90KHRoaXMsIGEpO1xuICB9XG5cbiAgcm90YXRpb25Ubyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgcXVhdC5yb3RhdGlvblRvKHRoaXMsIHZlY3RvckEsIHZlY3RvckIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGQoYSwgYikge1xuICAgIGlmIChiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVhdGVybmlvbi5hZGQgb25seSB0YWtlcyBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBxdWF0LmFkZCh0aGlzLCB0aGlzLCBhKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2FsY3VsYXRlVygpIHtcbiAgICBxdWF0LmNhbGN1bGF0ZVcodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNvbmp1Z2F0ZSgpIHtcbiAgICBxdWF0LmNvbmp1Z2F0ZSh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgaW52ZXJ0KCkge1xuICAgIHF1YXQuaW52ZXJ0KHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBsZXJwKGEsIGIsIHQpIHtcbiAgICBxdWF0LmxlcnAodGhpcywgYSwgYiwgdCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5UmlnaHQoYSwgYikge1xuICAgIGFzc2VydCghYik7XG4gICAgcXVhdC5tdWx0aXBseSh0aGlzLCB0aGlzLCBhKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlMZWZ0KGEsIGIpIHtcbiAgICBhc3NlcnQoIWIpO1xuICAgIHF1YXQubXVsdGlwbHkodGhpcywgYSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbigpO1xuICAgIGNvbnN0IGwgPSBsZW5ndGggPiAwID8gMSAvIGxlbmd0aCA6IDA7XG4gICAgdGhpc1swXSA9IHRoaXNbMF0gKiBsO1xuICAgIHRoaXNbMV0gPSB0aGlzWzFdICogbDtcbiAgICB0aGlzWzJdID0gdGhpc1syXSAqIGw7XG4gICAgdGhpc1szXSA9IHRoaXNbM10gKiBsO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpc1szXSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVgocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVYKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVkocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVZKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVoocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVaKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKGIpIHtcbiAgICBxdWF0LnNjYWxlKHRoaXMsIHRoaXMsIGIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzbGVycChzdGFydCwgdGFyZ2V0LCByYXRpbykge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAoe1xuICAgICAgICAgIHN0YXJ0ID0gSURFTlRJVFlfUVVBVEVSTklPTixcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgcmF0aW9cbiAgICAgICAgfSA9IGFyZ3VtZW50c1swXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIFt0YXJnZXQsIHJhdGlvXSA9IGFyZ3VtZW50cztcbiAgICAgICAgc3RhcnQgPSB0aGlzO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBxdWF0LnNsZXJwKHRoaXMsIHN0YXJ0LCB0YXJnZXQsIHJhdGlvKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yNCh2ZWN0b3IsIHJlc3VsdCA9IHZlY3Rvcikge1xuICAgIHZlYzQudHJhbnNmb3JtUXVhdChyZXN1bHQsIHZlY3RvciwgdGhpcyk7XG4gICAgcmV0dXJuIGNoZWNrVmVjdG9yKHJlc3VsdCwgNCk7XG4gIH1cblxuICBsZW5ndGhTcSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhTcXVhcmVkKCk7XG4gIH1cblxuICBzZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIHJhZCkge1xuICAgIHJldHVybiB0aGlzLnNldEF4aXNBbmdsZShheGlzLCByYWQpO1xuICB9XG5cbiAgcHJlbXVsdGlwbHkoYSwgYikge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5TGVmdChhLCBiKTtcbiAgfVxuXG4gIG11bHRpcGx5KGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseVJpZ2h0KGEsIGIpO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1YXRlcm5pb24uanMubWFwIiwiaW1wb3J0IHsgZm9ybWF0VmFsdWUsIGVxdWFscywgY29uZmlnIH0gZnJvbSAnLi4vbGliL2NvbW1vbic7XG5pbXBvcnQgeyBkZWdyZWVzLCByYWRpYW5zLCBjbGFtcCB9IGZyb20gJy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi92ZWN0b3IzJztcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSAnZ2wtbWF0cml4L3ZlYzMnO1xuY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuY29uc3QgRUFSVEhfUkFESVVTX01FVEVSUyA9IDYuMzcxZTY7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGhlcmljYWxDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwaGkgPSAwLFxuICAgIHRoZXRhID0gMCxcbiAgICByYWRpdXMgPSAxLFxuICAgIGJlYXJpbmcgPSB1bmRlZmluZWQsXG4gICAgcGl0Y2ggPSB1bmRlZmluZWQsXG4gICAgYWx0aXR1ZGUgPSB1bmRlZmluZWQsXG4gICAgcmFkaXVzU2NhbGUgPSBFQVJUSF9SQURJVVNfTUVURVJTXG4gIH0gPSB7fSkge1xuICAgIHRoaXMucGhpID0gcGhpO1xuICAgIHRoaXMudGhldGEgPSB0aGV0YTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCBhbHRpdHVkZSB8fCAxO1xuICAgIHRoaXMucmFkaXVzU2NhbGUgPSByYWRpdXNTY2FsZSB8fCAxO1xuXG4gICAgaWYgKGJlYXJpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iZWFyaW5nID0gYmVhcmluZztcbiAgICB9XG5cbiAgICBpZiAocGl0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5waXRjaCA9IHBpdGNoO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyhjb25maWcpO1xuICB9XG5cbiAgZm9ybWF0U3RyaW5nKHtcbiAgICBwcmludFR5cGVzID0gZmFsc2VcbiAgfSkge1xuICAgIGNvbnN0IGYgPSBmb3JtYXRWYWx1ZTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJpbnRUeXBlcyA/ICdTcGhlcmljYWwnIDogJycsIFwiW3JobzpcIikuY29uY2F0KGYodGhpcy5yYWRpdXMpLCBcIix0aGV0YTpcIikuY29uY2F0KGYodGhpcy50aGV0YSksIFwiLHBoaTpcIikuY29uY2F0KGYodGhpcy5waGkpLCBcIl1cIik7XG4gIH1cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gZXF1YWxzKHRoaXMucmFkaXVzLCBvdGhlci5yYWRpdXMpICYmIGVxdWFscyh0aGlzLnRoZXRhLCBvdGhlci50aGV0YSkgJiYgZXF1YWxzKHRoaXMucGhpLCBvdGhlci5waGkpO1xuICB9XG5cbiAgZXhhY3RFcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgPT09IG90aGVyLnJhZGl1cyAmJiB0aGlzLnRoZXRhID09PSBvdGhlci50aGV0YSAmJiB0aGlzLnBoaSA9PT0gb3RoZXIucGhpO1xuICB9XG5cbiAgZ2V0IGJlYXJpbmcoKSB7XG4gICAgcmV0dXJuIDE4MCAtIGRlZ3JlZXModGhpcy5waGkpO1xuICB9XG5cbiAgc2V0IGJlYXJpbmcodikge1xuICAgIHRoaXMucGhpID0gTWF0aC5QSSAtIHJhZGlhbnModik7XG4gIH1cblxuICBnZXQgcGl0Y2goKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBzZXQgcGl0Y2godikge1xuICAgIHRoaXMudGhldGEgPSByYWRpYW5zKHYpO1xuICB9XG5cbiAgZ2V0IGxvbmdpdHVkZSgpIHtcbiAgICByZXR1cm4gZGVncmVlcyh0aGlzLnBoaSk7XG4gIH1cblxuICBnZXQgbGF0aXR1ZGUoKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBnZXQgbG5nKCkge1xuICAgIHJldHVybiBkZWdyZWVzKHRoaXMucGhpKTtcbiAgfVxuXG4gIGdldCBsYXQoKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBnZXQgeigpIHtcbiAgICByZXR1cm4gKHRoaXMucmFkaXVzIC0gMSkgKiB0aGlzLnJhZGl1c1NjYWxlO1xuICB9XG5cbiAgc2V0KHJhZGl1cywgcGhpLCB0aGV0YSkge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMucGhpID0gcGhpO1xuICAgIHRoaXMudGhldGEgPSB0aGV0YTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZGluYXRlcygpLmNvcHkodGhpcyk7XG4gIH1cblxuICBjb3B5KG90aGVyKSB7XG4gICAgdGhpcy5yYWRpdXMgPSBvdGhlci5yYWRpdXM7XG4gICAgdGhpcy5waGkgPSBvdGhlci5waGk7XG4gICAgdGhpcy50aGV0YSA9IG90aGVyLnRoZXRhO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tTG5nTGF0WihbbG5nLCBsYXQsIHpdKSB7XG4gICAgdGhpcy5yYWRpdXMgPSAxICsgeiAvIHRoaXMucmFkaXVzU2NhbGU7XG4gICAgdGhpcy5waGkgPSByYWRpYW5zKGxhdCk7XG4gICAgdGhpcy50aGV0YSA9IHJhZGlhbnMobG5nKTtcbiAgfVxuXG4gIGZyb21WZWN0b3IzKHYpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHZlYzMubGVuZ3RoKHYpO1xuXG4gICAgaWYgKHRoaXMucmFkaXVzID4gMCkge1xuICAgICAgdGhpcy50aGV0YSA9IE1hdGguYXRhbjIodlswXSwgdlsxXSk7XG4gICAgICB0aGlzLnBoaSA9IE1hdGguYWNvcyhjbGFtcCh2WzJdIC8gdGhpcy5yYWRpdXMsIC0xLCAxKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRvVmVjdG9yMygpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMCwgdGhpcy5yYWRpdXMpLnJvdGF0ZVgoe1xuICAgICAgcmFkaWFuczogdGhpcy50aGV0YVxuICAgIH0pLnJvdGF0ZVooe1xuICAgICAgcmFkaWFuczogdGhpcy5waGlcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VTYWZlKCkge1xuICAgIHRoaXMucGhpID0gTWF0aC5tYXgoRVBTSUxPTiwgTWF0aC5taW4oTWF0aC5QSSAtIEVQU0lMT04sIHRoaXMucGhpKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLnBoaSkgfHwgIU51bWJlci5pc0Zpbml0ZSh0aGlzLnRoZXRhKSB8fCAhKHRoaXMucmFkaXVzID4gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3BoZXJpY2FsQ29vcmRpbmF0ZXM6IHNvbWUgZmllbGRzIHNldCB0byBpbnZhbGlkIG51bWJlcnMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGhlcmljYWwtY29vcmRpbmF0ZXMuanMubWFwIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL2Jhc2UvdmVjdG9yJztcbmltcG9ydCB7IGNvbmZpZywgaXNBcnJheSB9IGZyb20gJy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgKiBhcyB2ZWMyIGZyb20gJ2dsLW1hdHJpeC92ZWMyJztcbmltcG9ydCB7IHZlYzJfdHJhbnNmb3JtTWF0NEFzVmVjdG9yIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMiBleHRlbmRzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHN1cGVyKDIpO1xuXG4gICAgaWYgKGlzQXJyYXkoeCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jb3B5KHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgIGNoZWNrTnVtYmVyKHgpO1xuICAgICAgICBjaGVja051bWJlcih5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1swXSA9IHg7XG4gICAgICB0aGlzWzFdID0geTtcbiAgICB9XG4gIH1cblxuICBzZXQoeCwgeSkge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICBjaGVja051bWJlcihvYmplY3QueCk7XG4gICAgICBjaGVja051bWJlcihvYmplY3QueSk7XG4gICAgfVxuXG4gICAgdGhpc1swXSA9IG9iamVjdC54O1xuICAgIHRoaXNbMV0gPSBvYmplY3QueTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9PYmplY3Qob2JqZWN0KSB7XG4gICAgb2JqZWN0LnggPSB0aGlzWzBdO1xuICAgIG9iamVjdC55ID0gdGhpc1sxXTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaG9yaXpvbnRhbEFuZ2xlKCkge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgfVxuXG4gIHZlcnRpY2FsQW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgdHJhbnNmb3JtKG1hdHJpeDQpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpO1xuICB9XG5cbiAgdHJhbnNmb3JtQXNQb2ludChtYXRyaXg0KSB7XG4gICAgdmVjMi50cmFuc2Zvcm1NYXQ0KHRoaXMsIHRoaXMsIG1hdHJpeDQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1ZlY3RvcihtYXRyaXg0KSB7XG4gICAgdmVjMl90cmFuc2Zvcm1NYXQ0QXNWZWN0b3IodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MyhtYXRyaXgzKSB7XG4gICAgdmVjMi50cmFuc2Zvcm1NYXQzKHRoaXMsIHRoaXMsIG1hdHJpeDMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeU1hdHJpeDJ4MyhtYXRyaXgyeDMpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDJkKHRoaXMsIHRoaXMsIG1hdHJpeDJ4Myk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MihtYXRyaXgyKSB7XG4gICAgdmVjMi50cmFuc2Zvcm1NYXQyKHRoaXMsIHRoaXMsIG1hdHJpeDIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yMi5qcy5tYXAiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4vYmFzZS92ZWN0b3InO1xuaW1wb3J0IHsgY29uZmlnLCBpc0FycmF5IH0gZnJvbSAnLi4vbGliL2NvbW1vbic7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSAnZ2wtbWF0cml4L3ZlYzMnO1xuaW1wb3J0IHsgdmVjM190cmFuc2Zvcm1NYXQyLCB2ZWMzX3RyYW5zZm9ybU1hdDRBc1ZlY3RvciB9IGZyb20gJy4uL2xpYi9nbC1tYXRyaXgtZXh0cmFzJztcbmNvbnN0IE9SSUdJTiA9IFswLCAwLCAwXTtcbmNvbnN0IGNvbnN0YW50cyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMyBleHRlbmRzIFZlY3RvciB7XG4gIHN0YXRpYyBnZXQgWkVSTygpIHtcbiAgICByZXR1cm4gY29uc3RhbnRzLlpFUk8gPSBjb25zdGFudHMuWkVSTyB8fCBPYmplY3QuZnJlZXplKG5ldyBWZWN0b3IzKDAsIDAsIDAsIDApKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDApIHtcbiAgICBzdXBlcigtMCwgLTAsIC0wKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoeCkpIHtcbiAgICAgIHRoaXMuY29weSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICBjaGVja051bWJlcih4KTtcbiAgICAgICAgY2hlY2tOdW1iZXIoeSk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHopO1xuICAgICAgfVxuXG4gICAgICB0aGlzWzBdID0geDtcbiAgICAgIHRoaXNbMV0gPSB5O1xuICAgICAgdGhpc1syXSA9IHo7XG4gICAgfVxuICB9XG5cbiAgc2V0KHgsIHksIHopIHtcbiAgICB0aGlzWzBdID0geDtcbiAgICB0aGlzWzFdID0geTtcbiAgICB0aGlzWzJdID0gejtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC54KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC55KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC56KTtcbiAgICB9XG5cbiAgICB0aGlzWzBdID0gb2JqZWN0Lng7XG4gICAgdGhpc1sxXSA9IG9iamVjdC55O1xuICAgIHRoaXNbMl0gPSBvYmplY3QuejtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9PYmplY3Qob2JqZWN0KSB7XG4gICAgb2JqZWN0LnggPSB0aGlzWzBdO1xuICAgIG9iamVjdC55ID0gdGhpc1sxXTtcbiAgICBvYmplY3QueiA9IHRoaXNbMl07XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgYW5nbGUodmVjdG9yKSB7XG4gICAgcmV0dXJuIHZlYzMuYW5nbGUodGhpcywgdmVjdG9yKTtcbiAgfVxuXG4gIGNyb3NzKHZlY3Rvcikge1xuICAgIHZlYzMuY3Jvc3ModGhpcywgdGhpcywgdmVjdG9yKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWCh7XG4gICAgcmFkaWFucyxcbiAgICBvcmlnaW4gPSBPUklHSU5cbiAgfSkge1xuICAgIHZlYzMucm90YXRlWCh0aGlzLCB0aGlzLCBvcmlnaW4sIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVZKHtcbiAgICByYWRpYW5zLFxuICAgIG9yaWdpbiA9IE9SSUdJTlxuICB9KSB7XG4gICAgdmVjMy5yb3RhdGVZKHRoaXMsIHRoaXMsIG9yaWdpbiwgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVooe1xuICAgIHJhZGlhbnMsXG4gICAgb3JpZ2luID0gT1JJR0lOXG4gIH0pIHtcbiAgICB2ZWMzLnJvdGF0ZVoodGhpcywgdGhpcywgb3JpZ2luLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtKG1hdHJpeDQpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpO1xuICB9XG5cbiAgdHJhbnNmb3JtQXNQb2ludChtYXRyaXg0KSB7XG4gICAgdmVjMy50cmFuc2Zvcm1NYXQ0KHRoaXMsIHRoaXMsIG1hdHJpeDQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1ZlY3RvcihtYXRyaXg0KSB7XG4gICAgdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MyhtYXRyaXgzKSB7XG4gICAgdmVjMy50cmFuc2Zvcm1NYXQzKHRoaXMsIHRoaXMsIG1hdHJpeDMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeU1hdHJpeDIobWF0cml4Mikge1xuICAgIHZlYzNfdHJhbnNmb3JtTWF0Mih0aGlzLCB0aGlzLCBtYXRyaXgyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlRdWF0ZXJuaW9uKHF1YXRlcm5pb24pIHtcbiAgICB2ZWMzLnRyYW5zZm9ybVF1YXQodGhpcywgdGhpcywgcXVhdGVybmlvbik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IzLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9iYXNlL3ZlY3Rvcic7XG5pbXBvcnQgeyBjb25maWcsIGlzQXJyYXkgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgeyB2ZWM0X3RyYW5zZm9ybU1hdDIsIHZlYzRfdHJhbnNmb3JtTWF0MyB9IGZyb20gJy4uL2xpYi9nbC1tYXRyaXgtZXh0cmFzJztcbmNvbnN0IGNvbnN0YW50cyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yNCBleHRlbmRzIFZlY3RvciB7XG4gIHN0YXRpYyBnZXQgWkVSTygpIHtcbiAgICByZXR1cm4gY29uc3RhbnRzLlpFUk8gPSBjb25zdGFudHMuWkVSTyB8fCBPYmplY3QuZnJlZXplKG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAwKSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGlzQXJyYXkoeCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jb3B5KHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgIGNoZWNrTnVtYmVyKHgpO1xuICAgICAgICBjaGVja051bWJlcih5KTtcbiAgICAgICAgY2hlY2tOdW1iZXIoeik7XG4gICAgICAgIGNoZWNrTnVtYmVyKHcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzWzBdID0geDtcbiAgICAgIHRoaXNbMV0gPSB5O1xuICAgICAgdGhpc1syXSA9IHo7XG4gICAgICB0aGlzWzNdID0gdztcbiAgICB9XG4gIH1cblxuICBzZXQoeCwgeSwgeiwgdykge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHRoaXNbMl0gPSB6O1xuICAgIHRoaXNbM10gPSB3O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC54KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC55KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC56KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC53KTtcbiAgICB9XG5cbiAgICB0aGlzWzBdID0gb2JqZWN0Lng7XG4gICAgdGhpc1sxXSA9IG9iamVjdC55O1xuICAgIHRoaXNbMl0gPSBvYmplY3QuejtcbiAgICB0aGlzWzNdID0gb2JqZWN0Lnc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b09iamVjdChvYmplY3QpIHtcbiAgICBvYmplY3QueCA9IHRoaXNbMF07XG4gICAgb2JqZWN0LnkgPSB0aGlzWzFdO1xuICAgIG9iamVjdC56ID0gdGhpc1syXTtcbiAgICBvYmplY3QudyA9IHRoaXNbM107XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHcoKSB7XG4gICAgcmV0dXJuIHRoaXNbM107XG4gIH1cblxuICBzZXQgdyh2YWx1ZSkge1xuICAgIHRoaXNbM10gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICB0cmFuc2Zvcm0obWF0cml4NCkge1xuICAgIHZlYzQudHJhbnNmb3JtTWF0NCh0aGlzLCB0aGlzLCBtYXRyaXg0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgzKG1hdHJpeDMpIHtcbiAgICB2ZWM0X3RyYW5zZm9ybU1hdDModGhpcywgdGhpcywgbWF0cml4Myk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MihtYXRyaXgyKSB7XG4gICAgdmVjNF90cmFuc2Zvcm1NYXQyKHRoaXMsIHRoaXMsIG1hdHJpeDIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeVF1YXRlcm5pb24ocXVhdGVybmlvbikge1xuICAgIHZlYzQudHJhbnNmb3JtUXVhdCh0aGlzLCB0aGlzLCBxdWF0ZXJuaW9uKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgYXBwbHlNYXRyaXg0KG0pIHtcbiAgICBtLnRyYW5zZm9ybSh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3I0LmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vbGliL2NvbW1vbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjIgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yMic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjMgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yMyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjQgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yNCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeDMgfSBmcm9tICcuL2NsYXNzZXMvbWF0cml4Myc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeDQgfSBmcm9tICcuL2NsYXNzZXMvbWF0cml4NCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFF1YXRlcm5pb24gfSBmcm9tICcuL2NsYXNzZXMvcXVhdGVybmlvbic7XG5leHBvcnQgeyBjb25maWcsIGNvbmZpZ3VyZSwgZm9ybWF0VmFsdWUsIGlzQXJyYXksIGNsb25lLCBlcXVhbHMsIGV4YWN0RXF1YWxzLCB0b1JhZGlhbnMsIHRvRGVncmVlcywgcmFkaWFucywgZGVncmVlcywgc2luLCBjb3MsIHRhbiwgYXNpbiwgYWNvcywgYXRhbiwgY2xhbXAsIGxlcnAsIHdpdGhFcHNpbG9uIH0gZnJvbSAnLi9saWIvY29tbW9uJztcbmV4cG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi9saWIvdmFsaWRhdG9ycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIF9NYXRoVXRpbHMgfSBmcm9tICcuL2xpYi9tYXRoLXV0aWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3BoZXJpY2FsQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2NsYXNzZXMvc3BoZXJpY2FsLWNvb3JkaW5hdGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9zZSB9IGZyb20gJy4vY2xhc3Nlcy9wb3NlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXVsZXIgfSBmcm9tICcuL2NsYXNzZXMvZXVsZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NlcnQgfSBmcm9tICcuL2xpYi9hc3NlcnQnO1xuY29uc3QgZ2xvYmFscyA9IHtcbiAgc2VsZjogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYsXG4gIHdpbmRvdzogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LFxuICBnbG9iYWw6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFxufTtcbmNvbnN0IGdsb2JhbF8gPSBnbG9iYWxzLmdsb2JhbCB8fCBnbG9iYWxzLnNlbGYgfHwgZ2xvYmFscy53aW5kb3c7XG5nbG9iYWxfLm1hdGhnbCA9IHtcbiAgY29uZmlnXG59O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBfU3BoZXJpY2FsQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2NsYXNzZXMvc3BoZXJpY2FsLWNvb3JkaW5hdGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX1Bvc2UgfSBmcm9tICcuL2NsYXNzZXMvcG9zZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIF9FdWxlciB9IGZyb20gJy4vY2xhc3Nlcy9ldWxlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWF0aC5nbCBhc3NlcnRpb24gXCIuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXNzZXJ0LmpzLm1hcCIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi9hc3NlcnQnO1xuY29uc3QgUkFESUFOU19UT19ERUdSRUVTID0gMSAvIE1hdGguUEkgKiAxODA7XG5jb25zdCBERUdSRUVTX1RPX1JBRElBTlMgPSAxIC8gMTgwICogTWF0aC5QSTtcbmNvbnN0IGNvbmZpZyA9IHt9O1xuY29uZmlnLkVQU0lMT04gPSAxZS0xMjtcbmNvbmZpZy5kZWJ1ZyA9IGZhbHNlO1xuY29uZmlnLnByZWNpc2lvbiA9IDQ7XG5jb25maWcucHJpbnRUeXBlcyA9IGZhbHNlO1xuY29uZmlnLnByaW50RGVncmVlcyA9IGZhbHNlO1xuY29uZmlnLnByaW50Um93TWFqb3IgPSB0cnVlO1xuZXhwb3J0IHsgY29uZmlnIH07XG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMgPSB7fSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgYXNzZXJ0KGtleSBpbiBjb25maWcpO1xuICAgIGNvbmZpZ1trZXldID0gb3B0aW9uc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyBjb25maWcuRVBTSUxPTikgKiBjb25maWcuRVBTSUxPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbHVlLCB7XG4gIHByZWNpc2lvbiA9IGNvbmZpZy5wcmVjaXNpb24gfHwgNFxufSA9IHt9KSB7XG4gIHZhbHVlID0gcm91bmQodmFsdWUpO1xuICByZXR1cm4gXCJcIi5jb25jYXQocGFyc2VGbG9hdCh2YWx1ZS50b1ByZWNpc2lvbihwcmVjaXNpb24pKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0YVZpZXcpO1xufVxuXG5mdW5jdGlvbiBkdXBsaWNhdGVBcnJheShhcnJheSkge1xuICByZXR1cm4gYXJyYXkuY2xvbmUgPyBhcnJheS5jbG9uZSgpIDogbmV3IEFycmF5KGFycmF5Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcnJheSkge1xuICByZXR1cm4gYXJyYXkuY2xvbmUgPyBhcnJheS5jbG9uZSgpIDogbmV3IEFycmF5KC4uLmFycmF5KTtcbn1cblxuZnVuY3Rpb24gbWFwKHZhbHVlLCBmdW5jLCByZXN1bHQpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IGR1cGxpY2F0ZUFycmF5KHZhbHVlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aCAmJiBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgIHJlc3VsdFtpXSA9IGZ1bmModmFsdWVbaV0sIGksIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFucyhkZWdyZWVzKSB7XG4gIHJldHVybiByYWRpYW5zKGRlZ3JlZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyhyYWRpYW5zKSB7XG4gIHJldHVybiBkZWdyZWVzKHJhZGlhbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnMoZGVncmVlcywgcmVzdWx0KSB7XG4gIHJldHVybiBtYXAoZGVncmVlcywgZGVncmVlcyA9PiBkZWdyZWVzICogREVHUkVFU19UT19SQURJQU5TLCByZXN1bHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZXMocmFkaWFucywgcmVzdWx0KSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgcmFkaWFucyA9PiByYWRpYW5zICogUkFESUFOU19UT19ERUdSRUVTLCByZXN1bHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNpbihyYWRpYW5zKSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5zaW4oYW5nbGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb3MocmFkaWFucykge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGguY29zKGFuZ2xlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGFuKHJhZGlhbnMpIHtcbiAgcmV0dXJuIG1hcChyYWRpYW5zLCBhbmdsZSA9PiBNYXRoLnRhbihhbmdsZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFzaW4ocmFkaWFucykge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGguYXNpbihhbmdsZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MocmFkaWFucykge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGguYWNvcyhhbmdsZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGF0YW4ocmFkaWFucykge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGguYXRhbihhbmdsZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWFwKHZhbHVlLCB2YWx1ZSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gIGlmIChpc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIGEubWFwKChhaSwgaSkgPT4gbGVycChhaSwgYltpXSwgdCkpO1xuICB9XG5cbiAgcmV0dXJuIHQgKiBiICsgKDEgLSB0KSAqIGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIsIGVwc2lsb24pIHtcbiAgY29uc3Qgb2xkRXBzaWxvbiA9IGNvbmZpZy5FUFNJTE9OO1xuXG4gIGlmIChlcHNpbG9uKSB7XG4gICAgY29uZmlnLkVQU0lMT04gPSBlcHNpbG9uO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoYSkgJiYgaXNBcnJheShiKSkge1xuICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoIWVxdWFscyhhW2ldLCBiW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYSAmJiBhLmVxdWFscykge1xuICAgICAgcmV0dXJuIGEuZXF1YWxzKGIpO1xuICAgIH1cblxuICAgIGlmIChiICYmIGIuZXF1YWxzKSB7XG4gICAgICByZXR1cm4gYi5lcXVhbHMoYSk7XG4gICAgfVxuXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYikpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gY29uZmlnLkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEpLCBNYXRoLmFicyhiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGZpbmFsbHkge1xuICAgIGNvbmZpZy5FUFNJTE9OID0gb2xkRXBzaWxvbjtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiBiICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGEuZXhhY3RFcXVhbHMpIHtcbiAgICAgIHJldHVybiBhLmV4YWN0RXF1YWxzKGIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc0FycmF5KGEpICYmIGlzQXJyYXkoYikpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoIWV4YWN0RXF1YWxzKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoRXBzaWxvbihFUFNJTE9OLCBmdW5jKSB7XG4gIGNvbnN0IG9sZFByZWNpc2lvbiA9IGNvbmZpZy5FUFNJTE9OO1xuICBjb25maWcuRVBTSUxPTiA9IEVQU0lMT047XG4gIGxldCB2YWx1ZTtcblxuICB0cnkge1xuICAgIHZhbHVlID0gZnVuYygpO1xuICB9IGZpbmFsbHkge1xuICAgIGNvbmZpZy5FUFNJTE9OID0gb2xkUHJlY2lzaW9uO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3RvcihvdXQsIGEsIG0pIHtcbiAgY29uc3QgeCA9IGFbMF07XG4gIGNvbnN0IHkgPSBhWzFdO1xuICBjb25zdCB3ID0gbVszXSAqIHggKyBtWzddICogeSB8fCAxLjA7XG4gIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5KSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5KSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3Iob3V0LCBhLCBtKSB7XG4gIGNvbnN0IHggPSBhWzBdO1xuICBjb25zdCB5ID0gYVsxXTtcbiAgY29uc3QgeiA9IGFbMl07XG4gIGNvbnN0IHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeikgLyB3O1xuICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6KSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6KSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjM190cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjNF90cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjNF90cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIGNvbnN0IHogPSBhWzJdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XSAqIHo7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddICogejtcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzVdICogeSArIG1bOF0gKiB6O1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2wtbWF0cml4LWV4dHJhcy5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIEVQU0lMT04xOiAxZS0xLFxuICBFUFNJTE9OMjogMWUtMixcbiAgRVBTSUxPTjM6IDFlLTMsXG4gIEVQU0lMT040OiAxZS00LFxuICBFUFNJTE9ONTogMWUtNSxcbiAgRVBTSUxPTjY6IDFlLTYsXG4gIEVQU0lMT043OiAxZS03LFxuICBFUFNJTE9OODogMWUtOCxcbiAgRVBTSUxPTjk6IDFlLTksXG4gIEVQU0lMT04xMDogMWUtMTAsXG4gIEVQU0lMT04xMTogMWUtMTEsXG4gIEVQU0lMT04xMjogMWUtMTIsXG4gIEVQU0lMT04xMzogMWUtMTMsXG4gIEVQU0lMT04xNDogMWUtMTQsXG4gIEVQU0lMT04xNTogMWUtMTUsXG4gIEVQU0lMT04xNjogMWUtMTYsXG4gIEVQU0lMT04xNzogMWUtMTcsXG4gIEVQU0lMT04xODogMWUtMTgsXG4gIEVQU0lMT04xOTogMWUtMTksXG4gIEVQU0lMT04yMDogMWUtMjAsXG4gIFBJX09WRVJfVFdPOiBNYXRoLlBJIC8gMixcbiAgUElfT1ZFUl9GT1VSOiBNYXRoLlBJIC8gNCxcbiAgUElfT1ZFUl9TSVg6IE1hdGguUEkgLyA2LFxuICBUV09fUEk6IE1hdGguUEkgKiAyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVWZWN0b3IodiwgbGVuZ3RoKSB7XG4gIGlmICh2Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcih2YWx1ZSkge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG51bWJlciBcIi5jb25jYXQodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZlY3Rvcih2LCBsZW5ndGgsIGNhbGxlck5hbWUgPSAnJykge1xuICBpZiAoY29uZmlnLmRlYnVnICYmICF2YWxpZGF0ZVZlY3Rvcih2LCBsZW5ndGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWF0aC5nbDogXCIuY29uY2F0KGNhbGxlck5hbWUsIFwiIHNvbWUgZmllbGRzIHNldCB0byBpbnZhbGlkIG51bWJlcnMnXCIpKTtcbiAgfVxuXG4gIHJldHVybiB2O1xufVxuY29uc3QgbWFwID0ge307XG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZChtZXRob2QsIHZlcnNpb24pIHtcbiAgaWYgKCFtYXBbbWV0aG9kXSkge1xuICAgIG1hcFttZXRob2RdID0gdHJ1ZTtcbiAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQobWV0aG9kLCBcIiBoYXMgYmVlbiByZW1vdmVkIGluIHZlcnNpb24gXCIpLmNvbmNhdCh2ZXJzaW9uLCBcIiwgc2VlIHVwZ3JhZGUgZ3VpZGUgZm9yIG1vcmUgaW5mb3JtYXRpb25cIikpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0b3JzLmpzLm1hcCIsIi8qKlxyXG4gKiBDb21tb24gdXRpbGl0aWVzXHJcbiAqIEBtb2R1bGUgZ2xNYXRyaXhcclxuICovXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IHZhciBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IHZhciBSQU5ET00gPSBNYXRoLnJhbmRvbTtcbi8qKlxyXG4gKiBTZXRzIHRoZSB0eXBlIG9mIGFycmF5IHVzZWQgd2hlbiBjcmVhdGluZyBuZXcgdmVjdG9ycyBhbmQgbWF0cmljZXNcclxuICpcclxuICogQHBhcmFtIHtGbG9hdDMyQXJyYXlDb25zdHJ1Y3RvciB8IEFycmF5Q29uc3RydWN0b3J9IHR5cGUgQXJyYXkgdHlwZSwgc3VjaCBhcyBGbG9hdDMyQXJyYXkgb3IgQXJyYXlcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXRyaXhBcnJheVR5cGUodHlwZSkge1xuICBBUlJBWV9UWVBFID0gdHlwZTtcbn1cbnZhciBkZWdyZWUgPSBNYXRoLlBJIC8gMTgwO1xuLyoqXHJcbiAqIENvbnZlcnQgRGVncmVlIFRvIFJhZGlhblxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBEZWdyZWVzXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYSkge1xuICByZXR1cm4gYSAqIGRlZ3JlZTtcbn1cbi8qKlxyXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXHJcbiAqIG9yIHJlbGF0aXZlIHRvbGVyYW5jZSBvZiBnbE1hdHJpeC5FUFNJTE9OIChhbiBhYnNvbHV0ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgdmFsdWVzIGxlc3NcclxuICogdGhhbiBvciBlcXVhbCB0byAxLjAsIGFuZCBhIHJlbGF0aXZlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciBsYXJnZXIgdmFsdWVzKVxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgbnVtYmVyIHRvIHRlc3QuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8PSBFUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhKSwgTWF0aC5hYnMoYikpO1xufVxuaWYgKCFNYXRoLmh5cG90KSBNYXRoLmh5cG90ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgeSA9IDAsXG4gICAgICBpID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgeSArPSBhcmd1bWVudHNbaV0gKiBhcmd1bWVudHNbaV07XG4gIH1cblxuICByZXR1cm4gTWF0aC5zcXJ0KHkpO1xufTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzeDMgTWF0cml4XHJcbiAqIEBtb2R1bGUgbWF0M1xyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICB9XG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIDN4MyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzRdO1xuICBvdXRbNF0gPSBhWzVdO1xuICBvdXRbNV0gPSBhWzZdO1xuICBvdXRbNl0gPSBhWzhdO1xuICBvdXRbN10gPSBhWzldO1xuICBvdXRbOF0gPSBhWzEwXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgbWF0cml4IHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcclxuICogQHJldHVybnMge21hdDN9IEEgbmV3IG1hdDNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIG1hdDMgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhMDE7XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhMDI7XG4gICAgb3V0WzddID0gYTEyO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGFbMV07XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGFbMl07XG4gICAgb3V0WzddID0gYVs1XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBJbnZlcnRzIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAxID0gYTIyICogYTExIC0gYTEyICogYTIxO1xuICB2YXIgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgdmFyIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMDsgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuXG4gIHZhciBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gYjAxICogZGV0O1xuICBvdXRbMV0gPSAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gIG91dFs0XSA9IChhMjIgKiBhMDAgLSBhMDIgKiBhMjApICogZGV0O1xuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgb3V0WzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogZGV0O1xuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIG91dFswXSA9IGExMSAqIGEyMiAtIGExMiAqIGEyMTtcbiAgb3V0WzFdID0gYTAyICogYTIxIC0gYTAxICogYTIyO1xuICBvdXRbMl0gPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIG91dFszXSA9IGExMiAqIGEyMCAtIGExMCAqIGEyMjtcbiAgb3V0WzRdID0gYTAwICogYTIyIC0gYTAyICogYTIwO1xuICBvdXRbNV0gPSBhMDIgKiBhMTAgLSBhMDAgKiBhMTI7XG4gIG91dFs2XSA9IGExMCAqIGEyMSAtIGExMSAqIGEyMDtcbiAgb3V0WzddID0gYTAxICogYTIwIC0gYTAwICogYTIxO1xuICBvdXRbOF0gPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAwID0gYlswXSxcbiAgICAgIGIwMSA9IGJbMV0sXG4gICAgICBiMDIgPSBiWzJdO1xuICB2YXIgYjEwID0gYlszXSxcbiAgICAgIGIxMSA9IGJbNF0sXG4gICAgICBiMTIgPSBiWzVdO1xuICB2YXIgYjIwID0gYls2XSxcbiAgICAgIGIyMSA9IGJbN10sXG4gICAgICBiMjIgPSBiWzhdO1xuICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zbGF0ZSBhIG1hdDMgYnkgdGhlIGdpdmVuIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV0sXG4gICAgICBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF0sXG4gICAgICB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdO1xuICBvdXRbMF0gPSBhMDA7XG4gIG91dFsxXSA9IGEwMTtcbiAgb3V0WzJdID0gYTAyO1xuICBvdXRbM10gPSBhMTA7XG4gIG91dFs0XSA9IGExMTtcbiAgb3V0WzVdID0gYTEyO1xuICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMDtcbiAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXQzIGJ5IHRoZSBnaXZlbiBhbmdsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV0sXG4gICAgICBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF0sXG4gICAgICBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjICogYTAwICsgcyAqIGExMDtcbiAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTE7XG4gIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMDtcbiAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gIG91dFs1XSA9IGMgKiBhMTIgLSBzICogYTAyO1xuICBvdXRbNl0gPSBhMjA7XG4gIG91dFs3XSA9IGEyMTtcbiAgb3V0WzhdID0gYTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdO1xuICBvdXRbMF0gPSB4ICogYVswXTtcbiAgb3V0WzFdID0geCAqIGFbMV07XG4gIG91dFsyXSA9IHggKiBhWzJdO1xuICBvdXRbM10gPSB5ICogYVszXTtcbiAgb3V0WzRdID0geSAqIGFbNF07XG4gIG91dFs1XSA9IHkgKiBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQzLnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdikge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSB2WzBdO1xuICBvdXRbN10gPSB2WzFdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDMucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gLXM7XG4gIG91dFs0XSA9IGM7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IFNjYWxpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gdlsxXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBmcm9tIGEgbWF0MmQgaW50byBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDJkfSBhIHRoZSBtYXRyaXggdG8gY29weVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gYVsyXTtcbiAgb3V0WzRdID0gYVszXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gYVs0XTtcbiAgb3V0WzddID0gYVs1XTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cclxuICpcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHl4ID0geSAqIHgyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB6eCA9IHogKiB4MjtcbiAgdmFyIHp5ID0geiAqIHkyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICBvdXRbM10gPSB5eCAtIHd6O1xuICBvdXRbNl0gPSB6eCArIHd5O1xuICBvdXRbMV0gPSB5eCArIHd6O1xuICBvdXRbNF0gPSAxIC0geHggLSB6ejtcbiAgb3V0WzddID0genkgLSB3eDtcbiAgb3V0WzJdID0genggLSB3eTtcbiAgb3V0WzVdID0genkgKyB3eDtcbiAgb3V0WzhdID0gMSAtIHh4IC0geXk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyBhIDN4MyBub3JtYWwgbWF0cml4ICh0cmFuc3Bvc2UgaW52ZXJzZSkgZnJvbSB0aGUgNHg0IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIE1hdDQgdG8gZGVyaXZlIHRoZSBub3JtYWwgbWF0cml4IGZyb21cclxuICpcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgICBhMTEgPSBhWzVdLFxuICAgICAgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgICAgYTIxID0gYVs5XSxcbiAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgYTMyID0gYVsxNF0sXG4gICAgICBhMzMgPSBhWzE1XTtcbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjsgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuXG4gIHZhciBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbMl0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgb3V0WzNdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFs0XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSAyRCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgeW91ciBnbCBjb250ZXh0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIG91dFswXSA9IDIgLyB3aWR0aDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gLTIgLyBoZWlnaHQ7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IC0xO1xuICBvdXRbN10gPSAxO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJtYXQzKFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiLCBcIiArIGFbNF0gKyBcIiwgXCIgKyBhWzVdICsgXCIsIFwiICsgYVs2XSArIFwiLCBcIiArIGFbN10gKyBcIiwgXCIgKyBhWzhdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcclxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSwgYVs2XSwgYVs3XSwgYVs4XSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0MydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIG91dFs2XSA9IGFbNl0gKiBiO1xuICBvdXRbN10gPSBhWzddICogYjtcbiAgb3V0WzhdID0gYVs4XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0MydzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXSxcbiAgICAgIGE0ID0gYVs0XSxcbiAgICAgIGE1ID0gYVs1XSxcbiAgICAgIGE2ID0gYVs2XSxcbiAgICAgIGE3ID0gYVs3XSxcbiAgICAgIGE4ID0gYVs4XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXSxcbiAgICAgIGI0ID0gYls0XSxcbiAgICAgIGI1ID0gYls1XSxcbiAgICAgIGI2ID0gYls2XSxcbiAgICAgIGI3ID0gYls3XSxcbiAgICAgIGI4ID0gYls4XTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJiBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiYgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmIE1hdGguYWJzKGE2IC0gYjYpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJiBNYXRoLmFicyhhNyAtIGI3KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiYgTWF0aC5hYnMoYTggLSBiOCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDR4NCBNYXRyaXg8YnI+Rm9ybWF0OiBjb2x1bW4tbWFqb3IsIHdoZW4gdHlwZWQgb3V0IGl0IGxvb2tzIGxpa2Ugcm93LW1ham9yPGJyPlRoZSBtYXRyaWNlcyBhcmUgYmVpbmcgcG9zdCBtdWx0aXBsaWVkLlxyXG4gKiBAbW9kdWxlIG1hdDRcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcclxuICpcclxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICB9XG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcclxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWF0NCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggOClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIzIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDMgcG9zaXRpb24gKGluZGV4IDExKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMyIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDIgcG9zaXRpb24gKGluZGV4IDE0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gQSBuZXcgbWF0NFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggOClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIzIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDMgcG9zaXRpb24gKGluZGV4IDExKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMyIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDIgcG9zaXRpb24gKGluZGV4IDE0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICB2YXIgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICB2YXIgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICB2YXIgYTIzID0gYVsxMV07XG4gICAgb3V0WzFdID0gYVs0XTtcbiAgICBvdXRbMl0gPSBhWzhdO1xuICAgIG91dFszXSA9IGFbMTJdO1xuICAgIG91dFs0XSA9IGEwMTtcbiAgICBvdXRbNl0gPSBhWzldO1xuICAgIG91dFs3XSA9IGFbMTNdO1xuICAgIG91dFs4XSA9IGEwMjtcbiAgICBvdXRbOV0gPSBhMTI7XG4gICAgb3V0WzExXSA9IGFbMTRdO1xuICAgIG91dFsxMl0gPSBhMDM7XG4gICAgb3V0WzEzXSA9IGExMztcbiAgICBvdXRbMTRdID0gYTIzO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVs0XTtcbiAgICBvdXRbMl0gPSBhWzhdO1xuICAgIG91dFszXSA9IGFbMTJdO1xuICAgIG91dFs0XSA9IGFbMV07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzldO1xuICAgIG91dFs3XSA9IGFbMTNdO1xuICAgIG91dFs4XSA9IGFbMl07XG4gICAgb3V0WzldID0gYVs2XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTRdO1xuICAgIG91dFsxMl0gPSBhWzNdO1xuICAgIG91dFsxM10gPSBhWzddO1xuICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEludmVydHMgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICBvdXRbMF0gPSBhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMik7XG4gIG91dFsxXSA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgb3V0WzJdID0gYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpO1xuICBvdXRbM10gPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFs0XSA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgb3V0WzVdID0gYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpO1xuICBvdXRbNl0gPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFs3XSA9IGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKTtcbiAgb3V0WzhdID0gYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpO1xuICBvdXRbOV0gPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gIG91dFsxMF0gPSBhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSk7XG4gIG91dFsxMV0gPSAtKGEwMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gIG91dFsxM10gPSBhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSk7XG4gIG91dFsxNF0gPSAtKGEwMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gIG91dFsxNV0gPSBhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgICBhMTEgPSBhWzVdLFxuICAgICAgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgICAgYTIxID0gYVs5XSxcbiAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgYTMyID0gYVsxNF0sXG4gICAgICBhMzMgPSBhWzE1XTsgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG5cbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXTtcbiAgb3V0WzBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFsxXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzNdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYls0XTtcbiAgYjEgPSBiWzVdO1xuICBiMiA9IGJbNl07XG4gIGIzID0gYls3XTtcbiAgb3V0WzRdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFs1XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbNl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzddID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYls4XTtcbiAgYjEgPSBiWzldO1xuICBiMiA9IGJbMTBdO1xuICBiMyA9IGJbMTFdO1xuICBvdXRbOF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzldID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsxMF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzExXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbMTJdO1xuICBiMSA9IGJbMTNdO1xuICBiMiA9IGJbMTRdO1xuICBiMyA9IGJbMTVdO1xuICBvdXRbMTJdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFsxM10gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzE0XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTVdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNsYXRlIGEgbWF0NCBieSB0aGUgZ2l2ZW4gdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV0sXG4gICAgICB6ID0gdlsyXTtcbiAgdmFyIGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgdmFyIGExMCwgYTExLCBhMTIsIGExMztcbiAgdmFyIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gIH0gZWxzZSB7XG4gICAgYTAwID0gYVswXTtcbiAgICBhMDEgPSBhWzFdO1xuICAgIGEwMiA9IGFbMl07XG4gICAgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdO1xuICAgIGExMSA9IGFbNV07XG4gICAgYTEyID0gYVs2XTtcbiAgICBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07XG4gICAgYTIxID0gYVs5XTtcbiAgICBhMjIgPSBhWzEwXTtcbiAgICBhMjMgPSBhWzExXTtcbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcbiAgICBvdXRbM10gPSBhMDM7XG4gICAgb3V0WzRdID0gYTEwO1xuICAgIG91dFs1XSA9IGExMTtcbiAgICBvdXRbNl0gPSBhMTI7XG4gICAgb3V0WzddID0gYTEzO1xuICAgIG91dFs4XSA9IGEyMDtcbiAgICBvdXRbOV0gPSBhMjE7XG4gICAgb3V0WzEwXSA9IGEyMjtcbiAgICBvdXRbMTFdID0gYTIzO1xuICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzIG5vdCB1c2luZyB2ZWN0b3JpemF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICBvdXRbMF0gPSBhWzBdICogeDtcbiAgb3V0WzFdID0gYVsxXSAqIHg7XG4gIG91dFsyXSA9IGFbMl0gKiB4O1xuICBvdXRbM10gPSBhWzNdICogeDtcbiAgb3V0WzRdID0gYVs0XSAqIHk7XG4gIG91dFs1XSA9IGFbNV0gKiB5O1xuICBvdXRbNl0gPSBhWzZdICogeTtcbiAgb3V0WzddID0gYVs3XSAqIHk7XG4gIG91dFs4XSA9IGFbOF0gKiB6O1xuICBvdXRbOV0gPSBhWzldICogejtcbiAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIGdpdmVuIGF4aXNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkLCBheGlzKSB7XG4gIHZhciB4ID0gYXhpc1swXSxcbiAgICAgIHkgPSBheGlzWzFdLFxuICAgICAgeiA9IGF4aXNbMl07XG4gIHZhciBsZW4gPSBNYXRoLmh5cG90KHgsIHksIHopO1xuICB2YXIgcywgYywgdDtcbiAgdmFyIGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgdmFyIGExMCwgYTExLCBhMTIsIGExMztcbiAgdmFyIGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgdmFyIGIwMCwgYjAxLCBiMDI7XG4gIHZhciBiMTAsIGIxMSwgYjEyO1xuICB2YXIgYjIwLCBiMjEsIGIyMjtcblxuICBpZiAobGVuIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcbiAgcyA9IE1hdGguc2luKHJhZCk7XG4gIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB0ID0gMSAtIGM7XG4gIGEwMCA9IGFbMF07XG4gIGEwMSA9IGFbMV07XG4gIGEwMiA9IGFbMl07XG4gIGEwMyA9IGFbM107XG4gIGExMCA9IGFbNF07XG4gIGExMSA9IGFbNV07XG4gIGExMiA9IGFbNl07XG4gIGExMyA9IGFbN107XG4gIGEyMCA9IGFbOF07XG4gIGEyMSA9IGFbOV07XG4gIGEyMiA9IGFbMTBdO1xuICBhMjMgPSBhWzExXTsgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG5cbiAgYjAwID0geCAqIHggKiB0ICsgYztcbiAgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7XG4gIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcztcbiAgYjExID0geSAqIHkgKiB0ICsgYztcbiAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIGIyMCA9IHggKiB6ICogdCArIHkgKiBzO1xuICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcztcbiAgYjIyID0geiAqIHogKiB0ICsgYzsgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfSAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cblxuICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGEwMCA9IGFbMF07XG4gIHZhciBhMDEgPSBhWzFdO1xuICB2YXIgYTAyID0gYVsyXTtcbiAgdmFyIGEwMyA9IGFbM107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfSAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cblxuICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgb3V0WzFdID0gYTAxICogYyAtIGEyMSAqIHM7XG4gIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgb3V0WzhdID0gYTAwICogcyArIGEyMCAqIGM7XG4gIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gIG91dFsxMV0gPSBhMDMgKiBzICsgYTIzICogYztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGEwMCA9IGFbMF07XG4gIHZhciBhMDEgPSBhWzFdO1xuICB2YXIgYTAyID0gYVsyXTtcbiAgdmFyIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdO1xuICB2YXIgYTExID0gYVs1XTtcbiAgdmFyIGExMiA9IGFbNl07XG4gIHZhciBhMTMgPSBhWzddO1xuXG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfSAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cblxuICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFNjYWxpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gdlsxXTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IHZbMl07XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZSBhcm91bmQgYSBnaXZlbiBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlKGRlc3QsIGRlc3QsIHJhZCwgYXhpcyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkLCBheGlzKSB7XG4gIHZhciB4ID0gYXhpc1swXSxcbiAgICAgIHkgPSBheGlzWzFdLFxuICAgICAgeiA9IGF4aXNbMl07XG4gIHZhciBsZW4gPSBNYXRoLmh5cG90KHgsIHksIHopO1xuICB2YXIgcywgYywgdDtcblxuICBpZiAobGVuIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcbiAgcyA9IE1hdGguc2luKHJhZCk7XG4gIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB0ID0gMSAtIGM7IC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0geCAqIHggKiB0ICsgYztcbiAgb3V0WzFdID0geSAqIHggKiB0ICsgeiAqIHM7XG4gIG91dFsyXSA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4ICogeSAqIHQgLSB6ICogcztcbiAgb3V0WzVdID0geSAqIHkgKiB0ICsgYztcbiAgb3V0WzZdID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHggKiB6ICogdCArIHkgKiBzO1xuICBvdXRbOV0gPSB5ICogeiAqIHQgLSB4ICogcztcbiAgb3V0WzEwXSA9IHogKiB6ICogdCArIGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gLXM7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBzO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGVaKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtcztcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcclxuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBxLCB2KSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gIG91dFsxXSA9IHh5ICsgd3o7XG4gIG91dFsyXSA9IHh6IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHh5IC0gd3o7XG4gIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gIG91dFs2XSA9IHl6ICsgd3g7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHh6ICsgd3k7XG4gIG91dFs5XSA9IHl6IC0gd3g7XG4gIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGZyb20gYSBkdWFsIHF1YXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IE1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdDJ9IGEgRHVhbCBRdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQyKG91dCwgYSkge1xuICB2YXIgdHJhbnNsYXRpb24gPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgdmFyIGJ4ID0gLWFbMF0sXG4gICAgICBieSA9IC1hWzFdLFxuICAgICAgYnogPSAtYVsyXSxcbiAgICAgIGJ3ID0gYVszXSxcbiAgICAgIGF4ID0gYVs0XSxcbiAgICAgIGF5ID0gYVs1XSxcbiAgICAgIGF6ID0gYVs2XSxcbiAgICAgIGF3ID0gYVs3XTtcbiAgdmFyIG1hZ25pdHVkZSA9IGJ4ICogYnggKyBieSAqIGJ5ICsgYnogKiBieiArIGJ3ICogYnc7IC8vT25seSBzY2FsZSBpZiBpdCBtYWtlcyBzZW5zZVxuXG4gIGlmIChtYWduaXR1ZGUgPiAwKSB7XG4gICAgdHJhbnNsYXRpb25bMF0gPSAoYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSkgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gKGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYnopICogMiAvIG1hZ25pdHVkZTtcbiAgICB0cmFuc2xhdGlvblsyXSA9IChheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4KSAqIDIgLyBtYWduaXR1ZGU7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNsYXRpb25bMF0gPSAoYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSkgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gKGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYnopICogMjtcbiAgICB0cmFuc2xhdGlvblsyXSA9IChheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4KSAqIDI7XG4gIH1cblxuICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIGEsIHRyYW5zbGF0aW9uKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cclxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbixcclxuICogIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgdHJhbnNsYXRpb24gY29tcG9uZW50XHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcclxuICogQHJldHVybiB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgb3V0WzBdID0gbWF0WzEyXTtcbiAgb3V0WzFdID0gbWF0WzEzXTtcbiAgb3V0WzJdID0gbWF0WzE0XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcclxuICogIHdpdGggYSBub3JtYWxpemVkIFF1YXRlcm5pb24gcGFyYW10ZXIsIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZVxyXG4gKiAgdGhlIHNhbWUgYXMgdGhlIHNjYWxpbmcgdmVjdG9yXHJcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50XHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcclxuICogQHJldHVybiB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICB2YXIgbTExID0gbWF0WzBdO1xuICB2YXIgbTEyID0gbWF0WzFdO1xuICB2YXIgbTEzID0gbWF0WzJdO1xuICB2YXIgbTIxID0gbWF0WzRdO1xuICB2YXIgbTIyID0gbWF0WzVdO1xuICB2YXIgbTIzID0gbWF0WzZdO1xuICB2YXIgbTMxID0gbWF0WzhdO1xuICB2YXIgbTMyID0gbWF0WzldO1xuICB2YXIgbTMzID0gbWF0WzEwXTtcbiAgb3V0WzBdID0gTWF0aC5oeXBvdChtMTEsIG0xMiwgbTEzKTtcbiAgb3V0WzFdID0gTWF0aC5oeXBvdChtMjEsIG0yMiwgbTIzKTtcbiAgb3V0WzJdID0gTWF0aC5oeXBvdChtMzEsIG0zMiwgbTMzKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgcXVhdGVybmlvbiByZXByZXNlbnRpbmcgdGhlIHJvdGF0aW9uYWwgY29tcG9uZW50XHJcbiAqICBvZiBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aFxyXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXHJcbiAqICBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IFF1YXRlcm5pb24gdG8gcmVjZWl2ZSB0aGUgcm90YXRpb24gY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbihvdXQsIG1hdCkge1xuICB2YXIgc2NhbGluZyA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBnZXRTY2FsaW5nKHNjYWxpbmcsIG1hdCk7XG4gIHZhciBpczEgPSAxIC8gc2NhbGluZ1swXTtcbiAgdmFyIGlzMiA9IDEgLyBzY2FsaW5nWzFdO1xuICB2YXIgaXMzID0gMSAvIHNjYWxpbmdbMl07XG4gIHZhciBzbTExID0gbWF0WzBdICogaXMxO1xuICB2YXIgc20xMiA9IG1hdFsxXSAqIGlzMjtcbiAgdmFyIHNtMTMgPSBtYXRbMl0gKiBpczM7XG4gIHZhciBzbTIxID0gbWF0WzRdICogaXMxO1xuICB2YXIgc20yMiA9IG1hdFs1XSAqIGlzMjtcbiAgdmFyIHNtMjMgPSBtYXRbNl0gKiBpczM7XG4gIHZhciBzbTMxID0gbWF0WzhdICogaXMxO1xuICB2YXIgc20zMiA9IG1hdFs5XSAqIGlzMjtcbiAgdmFyIHNtMzMgPSBtYXRbMTBdICogaXMzO1xuICB2YXIgdHJhY2UgPSBzbTExICsgc20yMiArIHNtMzM7XG4gIHZhciBTID0gMDtcblxuICBpZiAodHJhY2UgPiAwKSB7XG4gICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgIG91dFszXSA9IDAuMjUgKiBTO1xuICAgIG91dFswXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgIG91dFsyXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICB9IGVsc2UgaWYgKHNtMTEgPiBzbTIyICYmIHNtMTEgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTExIC0gc20yMiAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRbMF0gPSAwLjI1ICogUztcbiAgICBvdXRbMV0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20yMiAtIHNtMTEgLSBzbTMzKSAqIDI7XG4gICAgb3V0WzNdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzBdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gIH0gZWxzZSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICBvdXRbM10gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgICBvdXRbMF0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICBvdXRbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICBvdXRbMl0gPSAwLjI1ICogUztcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiwgdmVjdG9yIHRyYW5zbGF0aW9uIGFuZCB2ZWN0b3Igc2NhbGVcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcclxuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XHJcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHMgU2NhbGluZyB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGUob3V0LCBxLCB2LCBzKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIHZhciBzeCA9IHNbMF07XG4gIHZhciBzeSA9IHNbMV07XG4gIHZhciBzeiA9IHNbMl07XG4gIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICBvdXRbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgb3V0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiwgdmVjdG9yIHRyYW5zbGF0aW9uIGFuZCB2ZWN0b3Igc2NhbGUsIHJvdGF0aW5nIGFuZCBzY2FsaW5nIGFyb3VuZCB0aGUgZ2l2ZW4gb3JpZ2luXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBvcmlnaW4pO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBuZWdhdGl2ZU9yaWdpbik7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gbyBUaGUgb3JpZ2luIHZlY3RvciBhcm91bmQgd2hpY2ggdG8gc2NhbGUgYW5kIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZU9yaWdpbihvdXQsIHEsIHYsIHMsIG8pIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgdmFyIG94ID0gb1swXTtcbiAgdmFyIG95ID0gb1sxXTtcbiAgdmFyIG96ID0gb1syXTtcbiAgdmFyIG91dDAgPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgdmFyIG91dDEgPSAoeHkgKyB3eikgKiBzeDtcbiAgdmFyIG91dDIgPSAoeHogLSB3eSkgKiBzeDtcbiAgdmFyIG91dDQgPSAoeHkgLSB3eikgKiBzeTtcbiAgdmFyIG91dDUgPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgdmFyIG91dDYgPSAoeXogKyB3eCkgKiBzeTtcbiAgdmFyIG91dDggPSAoeHogKyB3eSkgKiBzejtcbiAgdmFyIG91dDkgPSAoeXogLSB3eCkgKiBzejtcbiAgdmFyIG91dDEwID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFswXSA9IG91dDA7XG4gIG91dFsxXSA9IG91dDE7XG4gIG91dFsyXSA9IG91dDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IG91dDQ7XG4gIG91dFs1XSA9IG91dDU7XG4gIG91dFs2XSA9IG91dDY7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IG91dDg7XG4gIG91dFs5XSA9IG91dDk7XG4gIG91dFsxMF0gPSBvdXQxMDtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdICsgb3ggLSAob3V0MCAqIG94ICsgb3V0NCAqIG95ICsgb3V0OCAqIG96KTtcbiAgb3V0WzEzXSA9IHZbMV0gKyBveSAtIChvdXQxICogb3ggKyBvdXQ1ICogb3kgKyBvdXQ5ICogb3opO1xuICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dDIgKiBveCArIG91dDYgKiBveSArIG91dDEwICogb3opO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGEgNHg0IG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cclxuICpcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHl4ID0geSAqIHgyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB6eCA9IHogKiB4MjtcbiAgdmFyIHp5ID0geiAqIHkyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICBvdXRbMV0gPSB5eCArIHd6O1xuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB5eCAtIHd6O1xuICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgb3V0WzZdID0genkgKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0genggKyB3eTtcbiAgb3V0WzldID0genkgLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KTtcbiAgdmFyIHRiID0gMSAvICh0b3AgLSBib3R0b20pO1xuICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSBuZWFyICogMiAqIHJsO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBuZWFyICogMiAqIHRiO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gZmFyICogbmVhciAqIDIgKiBuZjtcbiAgb3V0WzE1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzLlxyXG4gKiBQYXNzaW5nIG51bGwvdW5kZWZpbmVkL25vIHZhbHVlIGZvciBmYXIgd2lsbCBnZW5lcmF0ZSBpbmZpbml0ZSBwcm9qZWN0aW9uIG1hdHJpeC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcclxuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bSwgY2FuIGJlIG51bGwgb3IgSW5maW5pdHlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICBuZjtcbiAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gZjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNV0gPSAwO1xuXG4gIGlmIChmYXIgIT0gbnVsbCAmJiBmYXIgIT09IEluZmluaXR5KSB7XG4gICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTRdID0gMiAqIGZhciAqIG5lYXIgKiBuZjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMTBdID0gLTE7XG4gICAgb3V0WzE0XSA9IC0yICogbmVhcjtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cclxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxyXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge09iamVjdH0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pO1xuICB2YXIgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG4gIG91dFswXSA9IHhTY2FsZTtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgb3V0WzRdID0gMC4wO1xuICBvdXRbNV0gPSB5U2NhbGU7XG4gIG91dFs2XSA9IDAuMDtcbiAgb3V0WzddID0gMC4wO1xuICBvdXRbOF0gPSAtKChsZWZ0VGFuIC0gcmlnaHRUYW4pICogeFNjYWxlICogMC41KTtcbiAgb3V0WzldID0gKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjU7XG4gIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gIG91dFsxMV0gPSAtMS4wO1xuICBvdXRbMTJdID0gMC4wO1xuICBvdXRbMTNdID0gMC4wO1xuICBvdXRbMTRdID0gZmFyICogbmVhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzE1XSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpO1xuICB2YXIgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IC0yICogbHI7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IC0yICogYnQ7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAyICogbmY7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXMuXHJcbiAqIElmIHlvdSB3YW50IGEgbWF0cml4IHRoYXQgYWN0dWFsbHkgbWFrZXMgYW4gb2JqZWN0IGxvb2sgYXQgYW5vdGhlciBvYmplY3QsIHlvdSBzaG91bGQgdXNlIHRhcmdldFRvIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbjtcbiAgdmFyIGV5ZXggPSBleWVbMF07XG4gIHZhciBleWV5ID0gZXllWzFdO1xuICB2YXIgZXlleiA9IGV5ZVsyXTtcbiAgdmFyIHVweCA9IHVwWzBdO1xuICB2YXIgdXB5ID0gdXBbMV07XG4gIHZhciB1cHogPSB1cFsyXTtcbiAgdmFyIGNlbnRlcnggPSBjZW50ZXJbMF07XG4gIHZhciBjZW50ZXJ5ID0gY2VudGVyWzFdO1xuICB2YXIgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJiBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgfVxuXG4gIHowID0gZXlleCAtIGNlbnRlcng7XG4gIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gIHoyID0gZXlleiAtIGNlbnRlcno7XG4gIGxlbiA9IDEgLyBNYXRoLmh5cG90KHowLCB6MSwgejIpO1xuICB6MCAqPSBsZW47XG4gIHoxICo9IGxlbjtcbiAgejIgKj0gbGVuO1xuICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSBNYXRoLmh5cG90KHgwLCB4MSwgeDIpO1xuXG4gIGlmICghbGVuKSB7XG4gICAgeDAgPSAwO1xuICAgIHgxID0gMDtcbiAgICB4MiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuXG4gIHkwID0gejEgKiB4MiAtIHoyICogeDE7XG4gIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG4gIGxlbiA9IE1hdGguaHlwb3QoeTAsIHkxLCB5Mik7XG5cbiAgaWYgKCFsZW4pIHtcbiAgICB5MCA9IDA7XG4gICAgeTEgPSAwO1xuICAgIHkyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHkwICo9IGxlbjtcbiAgICB5MSAqPSBsZW47XG4gICAgeTIgKj0gbGVuO1xuICB9XG5cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHkwO1xuICBvdXRbMl0gPSB6MDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geDE7XG4gIG91dFs1XSA9IHkxO1xuICBvdXRbNl0gPSB6MTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geDI7XG4gIG91dFs5XSA9IHkyO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBtYXRyaXggdGhhdCBtYWtlcyBzb21ldGhpbmcgbG9vayBhdCBzb21ldGhpbmcgZWxzZS5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRvKG91dCwgZXllLCB0YXJnZXQsIHVwKSB7XG4gIHZhciBleWV4ID0gZXllWzBdLFxuICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICB1cHggPSB1cFswXSxcbiAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgdXB6ID0gdXBbMl07XG4gIHZhciB6MCA9IGV5ZXggLSB0YXJnZXRbMF0sXG4gICAgICB6MSA9IGV5ZXkgLSB0YXJnZXRbMV0sXG4gICAgICB6MiA9IGV5ZXogLSB0YXJnZXRbMl07XG4gIHZhciBsZW4gPSB6MCAqIHowICsgejEgKiB6MSArIHoyICogejI7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG4gIH1cblxuICB2YXIgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxLFxuICAgICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyLFxuICAgICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSB4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDI7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgeDAgKj0gbGVuO1xuICAgIHgxICo9IGxlbjtcbiAgICB4MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geDE7XG4gIG91dFsyXSA9IHgyO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgb3V0WzVdID0gejIgKiB4MCAtIHowICogeDI7XG4gIG91dFs2XSA9IHowICogeDEgLSB6MSAqIHgwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6MDtcbiAgb3V0WzldID0gejE7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSBleWV4O1xuICBvdXRbMTNdID0gZXlleTtcbiAgb3V0WzE0XSA9IGV5ZXo7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJtYXQ0KFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiLCBcIiArIGFbNF0gKyBcIiwgXCIgKyBhWzVdICsgXCIsIFwiICsgYVs2XSArIFwiLCBcIiArIGFbN10gKyBcIiwgXCIgKyBhWzhdICsgXCIsIFwiICsgYVs5XSArIFwiLCBcIiArIGFbMTBdICsgXCIsIFwiICsgYVsxMV0gKyBcIiwgXCIgKyBhWzEyXSArIFwiLCBcIiArIGFbMTNdICsgXCIsIFwiICsgYVsxNF0gKyBcIiwgXCIgKyBhWzE1XSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLmh5cG90KGFbMF0sIGFbMV0sIGFbMl0sIGFbM10sIGFbNF0sIGFbNV0sIGFbNl0sIGFbN10sIGFbOF0sIGFbOV0sIGFbMTBdLCBhWzExXSwgYVsxMl0sIGFbMTNdLCBhWzE0XSwgYVsxNV0pO1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gLSBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gLSBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIG91dFs2XSA9IGFbNl0gKiBiO1xuICBvdXRbN10gPSBhWzddICogYjtcbiAgb3V0WzhdID0gYVs4XSAqIGI7XG4gIG91dFs5XSA9IGFbOV0gKiBiO1xuICBvdXRbMTBdID0gYVsxMF0gKiBiO1xuICBvdXRbMTFdID0gYVsxMV0gKiBiO1xuICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICBvdXRbMTNdID0gYVsxM10gKiBiO1xuICBvdXRbMTRdID0gYVsxNF0gKiBiO1xuICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDQncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF0gKiBzY2FsZTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV0gKiBzY2FsZTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl0gKiBzY2FsZTtcbiAgb3V0WzddID0gYVs3XSArIGJbN10gKiBzY2FsZTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF0gKiBzY2FsZTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV0gKiBzY2FsZTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF0gKiBzY2FsZTtcbiAgb3V0WzExXSA9IGFbMTFdICsgYlsxMV0gKiBzY2FsZTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl0gKiBzY2FsZTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM10gKiBzY2FsZTtcbiAgb3V0WzE0XSA9IGFbMTRdICsgYlsxNF0gKiBzY2FsZTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF0gJiYgYVs5XSA9PT0gYls5XSAmJiBhWzEwXSA9PT0gYlsxMF0gJiYgYVsxMV0gPT09IGJbMTFdICYmIGFbMTJdID09PSBiWzEyXSAmJiBhWzEzXSA9PT0gYlsxM10gJiYgYVsxNF0gPT09IGJbMTRdICYmIGFbMTVdID09PSBiWzE1XTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTtcbiAgdmFyIGE0ID0gYVs0XSxcbiAgICAgIGE1ID0gYVs1XSxcbiAgICAgIGE2ID0gYVs2XSxcbiAgICAgIGE3ID0gYVs3XTtcbiAgdmFyIGE4ID0gYVs4XSxcbiAgICAgIGE5ID0gYVs5XSxcbiAgICAgIGExMCA9IGFbMTBdLFxuICAgICAgYTExID0gYVsxMV07XG4gIHZhciBhMTIgPSBhWzEyXSxcbiAgICAgIGExMyA9IGFbMTNdLFxuICAgICAgYTE0ID0gYVsxNF0sXG4gICAgICBhMTUgPSBhWzE1XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXTtcbiAgdmFyIGI0ID0gYls0XSxcbiAgICAgIGI1ID0gYls1XSxcbiAgICAgIGI2ID0gYls2XSxcbiAgICAgIGI3ID0gYls3XTtcbiAgdmFyIGI4ID0gYls4XSxcbiAgICAgIGI5ID0gYls5XSxcbiAgICAgIGIxMCA9IGJbMTBdLFxuICAgICAgYjExID0gYlsxMV07XG4gIHZhciBiMTIgPSBiWzEyXSxcbiAgICAgIGIxMyA9IGJbMTNdLFxuICAgICAgYjE0ID0gYlsxNF0sXG4gICAgICBiMTUgPSBiWzE1XTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJiBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiYgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmIE1hdGguYWJzKGE2IC0gYjYpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJiBNYXRoLmFicyhhNyAtIGI3KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiYgTWF0aC5hYnMoYTggLSBiOCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpICYmIE1hdGguYWJzKGE5IC0gYjkpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE5KSwgTWF0aC5hYnMoYjkpKSAmJiBNYXRoLmFicyhhMTAgLSBiMTApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMCksIE1hdGguYWJzKGIxMCkpICYmIE1hdGguYWJzKGExMSAtIGIxMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTExKSwgTWF0aC5hYnMoYjExKSkgJiYgTWF0aC5hYnMoYTEyIC0gYjEyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTIpLCBNYXRoLmFicyhiMTIpKSAmJiBNYXRoLmFicyhhMTMgLSBiMTMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMyksIE1hdGguYWJzKGIxMykpICYmIE1hdGguYWJzKGExNCAtIGIxNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTE0KSwgTWF0aC5hYnMoYjE0KSkgJiYgTWF0aC5hYnMoYTE1IC0gYjE1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTUpLCBNYXRoLmFicyhiMTUpKTtcbn1cbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0My5qc1wiO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tIFwiLi92ZWMzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gXCIuL3ZlYzQuanNcIjtcbi8qKlxyXG4gKiBRdWF0ZXJuaW9uXHJcbiAqIEBtb2R1bGUgcXVhdFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG5cbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDA7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0cyBhIHF1YXQgZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYW5kIHJvdGF0aW9uIGF4aXMsXHJcbiAqIHRoZW4gcmV0dXJucyBpdC5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF4aXNBbmdsZShvdXQsIGF4aXMsIHJhZCkge1xuICByYWQgPSByYWQgKiAwLjU7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgb3V0WzBdID0gcyAqIGF4aXNbMF07XG4gIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgb3V0WzNdID0gTWF0aC5jb3MocmFkKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZSBmb3IgYSBnaXZlblxyXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxyXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxyXG4gKiAgdmFsdWVzIGFzIHByb3ZpZGllZCBpbiB0aGUgb3JpZ2luYWwgcGFyYW1ldGVyIGxpc3RcclxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cclxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxyXG4gKiAgYW5nbGUgLTkwIGlzIHRoZSBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieVxyXG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxyXG4gKiBAcGFyYW0gIHtSZWFkb25seVF1YXR9IHEgICAgIFF1YXRlcm5pb24gdG8gYmUgZGVjb21wb3NlZFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXhpc0FuZ2xlKG91dF9heGlzLCBxKSB7XG4gIHZhciByYWQgPSBNYXRoLmFjb3MocVszXSkgKiAyLjA7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkIC8gMi4wKTtcblxuICBpZiAocyA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICBvdXRfYXhpc1swXSA9IHFbMF0gLyBzO1xuICAgIG91dF9heGlzWzFdID0gcVsxXSAvIHM7XG4gICAgb3V0X2F4aXNbMl0gPSBxWzJdIC8gcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBzIGlzIHplcm8sIHJldHVybiBhbnkgYXhpcyAobm8gcm90YXRpb24gLSBheGlzIGRvZXMgbm90IG1hdHRlcilcbiAgICBvdXRfYXhpc1swXSA9IDE7XG4gICAgb3V0X2F4aXNbMV0gPSAwO1xuICAgIG91dF9heGlzWzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiByYWQ7XG59XG4vKipcclxuICogR2V0cyB0aGUgYW5ndWxhciBkaXN0YW5jZSBiZXR3ZWVuIHR3byB1bml0IHF1YXRlcm5pb25zXHJcbiAqXHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gYSAgICAgT3JpZ2luIHVuaXQgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0gIHtSZWFkb25seVF1YXR9IGIgICAgIERlc3RpbmF0aW9uIHVuaXQgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgYmV0d2VlbiB0aGUgdHdvIHF1YXRlcm5pb25zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICB2YXIgZG90cHJvZHVjdCA9IGRvdChhLCBiKTtcbiAgcmV0dXJuIE1hdGguYWNvcygyICogZG90cHJvZHVjdCAqIGRvdHByb2R1Y3QgLSAxKTtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBYIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYng7XG4gIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ5ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ6ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF5ICogYno7XG4gIG91dFsxXSA9IGF5ICogYncgLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBiejtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgVyBjb21wb25lbnQgb2YgYSBxdWF0IGZyb20gdGhlIFgsIFksIGFuZCBaIGNvbXBvbmVudHMuXHJcbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXHJcbiAqIEFueSBleGlzdGluZyBXIGNvbXBvbmVudCB3aWxsIGJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBXIGNvbXBvbmVudCBvZlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gTWF0aC5zcXJ0KE1hdGguYWJzKDEuMCAtIHggKiB4IC0geSAqIHkgLSB6ICogeikpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2YgYSB1bml0IHF1YXRlcm5pb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cChvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgZXQgPSBNYXRoLmV4cCh3KTtcbiAgdmFyIHMgPSByID4gMCA/IGV0ICogTWF0aC5zaW4ocikgLyByIDogMDtcbiAgb3V0WzBdID0geCAqIHM7XG4gIG91dFsxXSA9IHkgKiBzO1xuICBvdXRbMl0gPSB6ICogcztcbiAgb3V0WzNdID0gZXQgKiBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGUgdGhlIG5hdHVyYWwgbG9nYXJpdGhtIG9mIGEgdW5pdCBxdWF0ZXJuaW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsbihvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgdCA9IHIgPiAwID8gTWF0aC5hdGFuMihyLCB3KSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogdDtcbiAgb3V0WzFdID0geSAqIHQ7XG4gIG91dFsyXSA9IHogKiB0O1xuICBvdXRbM10gPSAwLjUgKiBNYXRoLmxvZyh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlIHRoZSBzY2FsYXIgcG93ZXIgb2YgYSB1bml0IHF1YXRlcm5pb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBxdWF0ZXJuaW9uIGJ5XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3cob3V0LCBhLCBiKSB7XG4gIGxuKG91dCwgYSk7XG4gIHNjYWxlKG91dCwgb3V0LCBiKTtcbiAgZXhwKG91dCwgb3V0KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIC8vIGJlbmNobWFya3M6XG4gIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIHZhciBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTsgLy8gY2FsYyBjb3NpbmVcblxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7IC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuXG4gIGlmIChjb3NvbSA8IDAuMCkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLWJ4O1xuICAgIGJ5ID0gLWJ5O1xuICAgIGJ6ID0gLWJ6O1xuICAgIGJ3ID0gLWJ3O1xuICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcblxuXG4gIGlmICgxLjAgLSBjb3NvbSA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICBzY2FsZTEgPSB0O1xuICB9IC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXNcblxuXG4gIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gIG91dFsxXSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7XG4gIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHVuaXQgcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQpIHtcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgaHR0cDovL3BsYW5uaW5nLmNzLnVpdWMuZWR1L25vZGUxOTguaHRtbFxuICAvLyBUT0RPOiBDYWxsaW5nIHJhbmRvbSAzIHRpbWVzIGlzIHByb2JhYmx5IG5vdCB0aGUgZmFzdGVzdCBzb2x1dGlvblxuICB2YXIgdTEgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHUyID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciB1MyA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgc3FydDFNaW51c1UxID0gTWF0aC5zcXJ0KDEgLSB1MSk7XG4gIHZhciBzcXJ0VTEgPSBNYXRoLnNxcnQodTEpO1xuICBvdXRbMF0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMV0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMl0gPSBzcXJ0VTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTMpO1xuICBvdXRbM10gPSBzcXJ0VTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTMpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM107XG4gIHZhciBkb3QgPSBhMCAqIGEwICsgYTEgKiBhMSArIGEyICogYTIgKyBhMyAqIGEzO1xuICB2YXIgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDsgLy8gVE9ETzogV291bGQgYmUgZmFzdGVyIHRvIHJldHVybiBbMCwwLDAsMF0gaW1tZWRpYXRlbHkgaWYgZG90ID09IDBcblxuICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gIG91dFsxXSA9IC1hMSAqIGludkRvdDtcbiAgb3V0WzJdID0gLWEyICogaW52RG90O1xuICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XHJcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBjb25qdWdhdGUgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxyXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSByb3RhdGlvbiBtYXRyaXhcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gIHZhciBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gIHZhciBmUm9vdDtcblxuICBpZiAoZlRyYWNlID4gMC4wKSB7XG4gICAgLy8gfHd8ID4gMS8yLCBtYXkgYXMgd2VsbCBjaG9vc2UgdyA+IDEvMlxuICAgIGZSb290ID0gTWF0aC5zcXJ0KGZUcmFjZSArIDEuMCk7IC8vIDJ3XG5cbiAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290OyAvLyAxLyg0dylcblxuICAgIG91dFswXSA9IChtWzVdIC0gbVs3XSkgKiBmUm9vdDtcbiAgICBvdXRbMV0gPSAobVs2XSAtIG1bMl0pICogZlJvb3Q7XG4gICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICB9IGVsc2Uge1xuICAgIC8vIHx3fCA8PSAxLzJcbiAgICB2YXIgaSA9IDA7XG4gICAgaWYgKG1bNF0gPiBtWzBdKSBpID0gMTtcbiAgICBpZiAobVs4XSA+IG1baSAqIDMgKyBpXSkgaSA9IDI7XG4gICAgdmFyIGogPSAoaSArIDEpICUgMztcbiAgICB2YXIgayA9IChpICsgMikgJSAzO1xuICAgIGZSb290ID0gTWF0aC5zcXJ0KG1baSAqIDMgKyBpXSAtIG1baiAqIDMgKyBqXSAtIG1bayAqIDMgKyBrXSArIDEuMCk7XG4gICAgb3V0W2ldID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUgLyBmUm9vdDtcbiAgICBvdXRbM10gPSAobVtqICogMyArIGtdIC0gbVtrICogMyArIGpdKSAqIGZSb290O1xuICAgIG91dFtqXSA9IChtW2ogKiAzICsgaV0gKyBtW2kgKiAzICsgal0pICogZlJvb3Q7XG4gICAgb3V0W2tdID0gKG1bayAqIDMgKyBpXSArIG1baSAqIDMgKyBrXSkgKiBmUm9vdDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gZXVsZXIgYW5nbGUgeCwgeSwgei5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7eH0gQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBYIGF4aXMgaW4gZGVncmVlcy5cclxuICogQHBhcmFtIHt5fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxyXG4gKiBAcGFyYW0ge3p9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWiBheGlzIGluIGRlZ3JlZXMuXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV1bGVyKG91dCwgeCwgeSwgeikge1xuICB2YXIgaGFsZlRvUmFkID0gMC41ICogTWF0aC5QSSAvIDE4MC4wO1xuICB4ICo9IGhhbGZUb1JhZDtcbiAgeSAqPSBoYWxmVG9SYWQ7XG4gIHogKj0gaGFsZlRvUmFkO1xuICB2YXIgc3ggPSBNYXRoLnNpbih4KTtcbiAgdmFyIGN4ID0gTWF0aC5jb3MoeCk7XG4gIHZhciBzeSA9IE1hdGguc2luKHkpO1xuICB2YXIgY3kgPSBNYXRoLmNvcyh5KTtcbiAgdmFyIHN6ID0gTWF0aC5zaW4oeik7XG4gIHZhciBjeiA9IE1hdGguY29zKHopO1xuICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgb3V0WzJdID0gY3ggKiBjeSAqIHN6IC0gc3ggKiBzeSAqIGN6O1xuICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHF1YXRlbmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwicXVhdChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gY2xvbmVcclxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGNsb25lID0gdmVjNC5jbG9uZTtcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBzb3VyY2UgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBjb3B5ID0gdmVjNC5jb3B5O1xuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG4vKipcclxuICogQWRkcyB0d28gcXVhdCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgYWRkID0gdmVjNC5hZGQ7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZG90ID0gdmVjNC5kb3Q7XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlcnAgPSB2ZWM0LmxlcnA7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG5vcm1hbGl6ZSA9IHZlYzQubm9ybWFsaXplO1xuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgVGhlIGZpcnN0IHF1YXRlcm5pb24uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgcXVhdGVybmlvbi5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgdmFyIGV4YWN0RXF1YWxzID0gdmVjNC5leGFjdEVxdWFscztcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCB2YXIgZXF1YWxzID0gdmVjNC5lcXVhbHM7XG4vKipcclxuICogU2V0cyBhIHF1YXRlcm5pb24gdG8gcmVwcmVzZW50IHRoZSBzaG9ydGVzdCByb3RhdGlvbiBmcm9tIG9uZVxyXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cclxuICpcclxuICogQm90aCB2ZWN0b3JzIGFyZSBhc3N1bWVkIHRvIGJlIHVuaXQgbGVuZ3RoLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgZGVzdGluYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgcm90YXRpb25UbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcHZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICB2YXIgeFVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDEsIDAsIDApO1xuICB2YXIgeVVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYikge1xuICAgIHZhciBkb3QgPSB2ZWMzLmRvdChhLCBiKTtcblxuICAgIGlmIChkb3QgPCAtMC45OTk5OTkpIHtcbiAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgeFVuaXRWZWMzLCBhKTtcbiAgICAgIGlmICh2ZWMzLmxlbih0bXB2ZWMzKSA8IDAuMDAwMDAxKSB2ZWMzLmNyb3NzKHRtcHZlYzMsIHlVbml0VmVjMywgYSk7XG4gICAgICB2ZWMzLm5vcm1hbGl6ZSh0bXB2ZWMzLCB0bXB2ZWMzKTtcbiAgICAgIHNldEF4aXNBbmdsZShvdXQsIHRtcHZlYzMsIE1hdGguUEkpO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9IGVsc2UgaWYgKGRvdCA+IDAuOTk5OTk5KSB7XG4gICAgICBvdXRbMF0gPSAwO1xuICAgICAgb3V0WzFdID0gMDtcbiAgICAgIG91dFsyXSA9IDA7XG4gICAgICBvdXRbM10gPSAxO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCBhLCBiKTtcbiAgICAgIG91dFswXSA9IHRtcHZlYzNbMF07XG4gICAgICBvdXRbMV0gPSB0bXB2ZWMzWzFdO1xuICAgICAgb3V0WzJdID0gdG1wdmVjM1syXTtcbiAgICAgIG91dFszXSA9IDEgKyBkb3Q7XG4gICAgICByZXR1cm4gbm9ybWFsaXplKG91dCwgb3V0KTtcbiAgICB9XG4gIH07XG59KCk7XG4vKipcclxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxbGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlbXAxID0gY3JlYXRlKCk7XG4gIHZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICAgIHNsZXJwKHRlbXAxLCBhLCBkLCB0KTtcbiAgICBzbGVycCh0ZW1wMiwgYiwgYywgdCk7XG4gICAgc2xlcnAob3V0LCB0ZW1wMSwgdGVtcDIsIDIgKiB0ICogKDEgLSB0KSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn0oKTtcbi8qKlxyXG4gKiBTZXRzIHRoZSBzcGVjaWZpZWQgcXVhdGVybmlvbiB3aXRoIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlblxyXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcclxuICogcGVycGVuZGljdWxhciB0byBhbGwgb3RoZXIgc3BlY2lmaWVkIGF4ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2aWV3ICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgdmlld2luZyBkaXJlY3Rpb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCAgICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgXCJ1cFwiIGRpcmVjdGlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgdmFyIHNldEF4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXRyID0gbWF0My5jcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIHZpZXcsIHJpZ2h0LCB1cCkge1xuICAgIG1hdHJbMF0gPSByaWdodFswXTtcbiAgICBtYXRyWzNdID0gcmlnaHRbMV07XG4gICAgbWF0cls2XSA9IHJpZ2h0WzJdO1xuICAgIG1hdHJbMV0gPSB1cFswXTtcbiAgICBtYXRyWzRdID0gdXBbMV07XG4gICAgbWF0cls3XSA9IHVwWzJdO1xuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuICAgIHJldHVybiBub3JtYWxpemUob3V0LCBmcm9tTWF0MyhvdXQsIG1hdHIpKTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAyIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzJcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMyXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzIgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjZWlsXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjMiBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMyJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICB5ID0gYlsxXSAtIGFbMV07XG4gIHJldHVybiB4ICogeCArIHkgKiB5O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG59XG4vKipcclxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5O1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXHJcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gIG91dFswXSA9IG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7XG4gIHZhciByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyZChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQzXHJcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNF0gKiB5ICsgbVs3XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQ0XHJcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXHJcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZSBhIDJEIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgVGhlIHZlYzIgcG9pbnQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIGIsIHJhZCkge1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHZhciBwMCA9IGFbMF0gLSBiWzBdLFxuICAgICAgcDEgPSBhWzFdIC0gYlsxXSxcbiAgICAgIHNpbkMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgY29zQyA9IE1hdGguY29zKHJhZCk7IC8vcGVyZm9ybSByb3RhdGlvbiBhbmQgdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSBwMCAqIGNvc0MgLSBwMSAqIHNpbkMgKyBiWzBdO1xuICBvdXRbMV0gPSBwMCAqIHNpbkMgKyBwMSAqIGNvc0MgKyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gMkQgdmVjdG9yc1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciB4MSA9IGFbMF0sXG4gICAgICB5MSA9IGFbMV0sXG4gICAgICB4MiA9IGJbMF0sXG4gICAgICB5MiA9IGJbMV0sXG4gICAgICAvLyBtYWcgaXMgdGhlIHByb2R1Y3Qgb2YgdGhlIG1hZ25pdHVkZXMgb2YgYSBhbmQgYlxuICBtYWcgPSBNYXRoLnNxcnQoeDEgKiB4MSArIHkxICogeTEpICogTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKSxcbiAgICAgIC8vIG1hZyAmJi4uIHNob3J0IGNpcmN1aXRzIGlmIG1hZyA9PSAwXG4gIGNvc2luZSA9IG1hZyAmJiAoeDEgKiB4MiArIHkxICogeTIpIC8gbWFnOyAvLyBNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkgY2xhbXBzIHRoZSBjb3NpbmUgYmV0d2VlbiAtMSBhbmQgMVxuXG4gIHJldHVybiBNYXRoLmFjb3MoTWF0aC5taW4oTWF0aC5tYXgoY29zaW5lLCAtMSksIDEpKTtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHplcm9cclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzIoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGl2aWRlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzIuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzNcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeik7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuLyoqXHJcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICBvdXRbMl0gPSBhWzJdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXTtcbiAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIHZhciBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIHZhciBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICB2YXIgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICB2YXIgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgdmFyIHogPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAtIDEuMDtcbiAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAgLSB6ICogeikgKiBzY2FsZTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICB2YXIgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XHJcbiAqIENhbiBhbHNvIGJlIHVzZWQgZm9yIGR1YWwgcXVhdGVybmlvbnMuIChNdWx0aXBseSBpdCB3aXRoIHRoZSByZWFsIHBhcnQpXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuICB2YXIgcXggPSBxWzBdLFxuICAgICAgcXkgPSBxWzFdLFxuICAgICAgcXogPSBxWzJdLFxuICAgICAgcXcgPSBxWzNdO1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdOyAvLyB2YXIgcXZlYyA9IFtxeCwgcXksIHF6XTtcbiAgLy8gdmFyIHV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgYSk7XG5cbiAgdmFyIHV2eCA9IHF5ICogeiAtIHF6ICogeSxcbiAgICAgIHV2eSA9IHF6ICogeCAtIHF4ICogeixcbiAgICAgIHV2eiA9IHF4ICogeSAtIHF5ICogeDsgLy8gdmFyIHV1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIHV2KTtcblxuICB2YXIgdXV2eCA9IHF5ICogdXZ6IC0gcXogKiB1dnksXG4gICAgICB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2eixcbiAgICAgIHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4OyAvLyB2ZWMzLnNjYWxlKHV2LCB1diwgMiAqIHcpO1xuXG4gIHZhciB3MiA9IHF3ICogMjtcbiAgdXZ4ICo9IHcyO1xuICB1dnkgKj0gdzI7XG4gIHV2eiAqPSB3MjsgLy8gdmVjMy5zY2FsZSh1dXYsIHV1diwgMik7XG5cbiAgdXV2eCAqPSAyO1xuICB1dXZ5ICo9IDI7XG4gIHV1dnogKj0gMjsgLy8gcmV0dXJuIHZlYzMuYWRkKG91dCwgYSwgdmVjMy5hZGQob3V0LCB1diwgdXV2KSk7XG5cbiAgb3V0WzBdID0geCArIHV2eCArIHV1dng7XG4gIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXTtcbiAgclsxXSA9IHBbMV0gKiBNYXRoLmNvcyhyYWQpIC0gcFsyXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMl0gPSBwWzFdICogTWF0aC5zaW4ocmFkKSArIHBbMl0gKiBNYXRoLmNvcyhyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFsyXSAqIE1hdGguc2luKHJhZCkgKyBwWzBdICogTWF0aC5jb3MocmFkKTtcbiAgclsxXSA9IHBbMV07XG4gIHJbMl0gPSBwWzJdICogTWF0aC5jb3MocmFkKSAtIHBbMF0gKiBNYXRoLnNpbihyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMl0gPSBwWzJdOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdLFxuICAgICAgbWFnMSA9IE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSArIGF6ICogYXopLFxuICAgICAgbWFnMiA9IE1hdGguc3FydChieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnopLFxuICAgICAgbWFnID0gbWFnMSAqIG1hZzIsXG4gICAgICBjb3NpbmUgPSBtYWcgJiYgZG90KGEsIGIpIC8gbWFnO1xuICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSk7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjNFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcclxuICpcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeiwgdykge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHosIHcpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICBvdXRbM10gPSBhWzNdICogYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIG91dFszXSA9IGFbM10gLyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguY2VpbChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcm91bmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLnJvdW5kKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLnJvdW5kKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgdmFyIHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeiwgdyk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6LCB3KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciB3ID0gYVszXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuLyoqXHJcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gLWFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgb3V0WzNdID0gMS4wIC8gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSB4ICogbGVuO1xuICBvdXRbMV0gPSB5ICogbGVuO1xuICBvdXRbMl0gPSB6ICogbGVuO1xuICBvdXRbM10gPSB3ICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdICsgYVszXSAqIGJbM107XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0aHJlZSB2ZWN0b3JzIGluIGEgNC1kaW1lbnNpb25hbCBzcGFjZVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gcmVzdWx0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBVIHRoZSBmaXJzdCB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IFYgdGhlIHNlY29uZCB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IFcgdGhlIHRoaXJkIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjNH0gcmVzdWx0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCB1LCB2LCB3KSB7XG4gIHZhciBBID0gdlswXSAqIHdbMV0gLSB2WzFdICogd1swXSxcbiAgICAgIEIgPSB2WzBdICogd1syXSAtIHZbMl0gKiB3WzBdLFxuICAgICAgQyA9IHZbMF0gKiB3WzNdIC0gdlszXSAqIHdbMF0sXG4gICAgICBEID0gdlsxXSAqIHdbMl0gLSB2WzJdICogd1sxXSxcbiAgICAgIEUgPSB2WzFdICogd1szXSAtIHZbM10gKiB3WzFdLFxuICAgICAgRiA9IHZbMl0gKiB3WzNdIC0gdlszXSAqIHdbMl07XG4gIHZhciBHID0gdVswXTtcbiAgdmFyIEggPSB1WzFdO1xuICB2YXIgSSA9IHVbMl07XG4gIHZhciBKID0gdVszXTtcbiAgb3V0WzBdID0gSCAqIEYgLSBJICogRSArIEogKiBEO1xuICBvdXRbMV0gPSAtKEcgKiBGKSArIEkgKiBDIC0gSiAqIEI7XG4gIG91dFsyXSA9IEcgKiBFIC0gSCAqIEMgKyBKICogQTtcbiAgb3V0WzNdID0gLShHICogRCkgKyBIICogQiAtIEkgKiBBO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdO1xuICB2YXIgYXkgPSBhWzFdO1xuICB2YXIgYXogPSBhWzJdO1xuICB2YXIgYXcgPSBhWzNdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICBvdXRbM10gPSBhdyArIHQgKiAoYlszXSAtIGF3KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7IC8vIE1hcnNhZ2xpYSwgR2VvcmdlLiBDaG9vc2luZyBhIFBvaW50IGZyb20gdGhlIFN1cmZhY2Ugb2YgYVxuICAvLyBTcGhlcmUuIEFubi4gTWF0aC4gU3RhdGlzdC4gNDMgKDE5NzIpLCBuby4gMiwgNjQ1LS02NDYuXG4gIC8vIGh0dHA6Ly9wcm9qZWN0ZXVjbGlkLm9yZy9ldWNsaWQuYW9tcy8xMTc3NjkyNjQ0O1xuXG4gIHZhciB2MSwgdjIsIHYzLCB2NDtcbiAgdmFyIHMxLCBzMjtcblxuICBkbyB7XG4gICAgdjEgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHYyID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMSA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzMSA+PSAxKTtcblxuICBkbyB7XG4gICAgdjMgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHY0ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMiA9IHYzICogdjMgKyB2NCAqIHY0O1xuICB9IHdoaWxlIChzMiA+PSAxKTtcblxuICB2YXIgZCA9IE1hdGguc3FydCgoMSAtIHMxKSAvIHMyKTtcbiAgb3V0WzBdID0gc2NhbGUgKiB2MTtcbiAgb3V0WzFdID0gc2NhbGUgKiB2MjtcbiAgb3V0WzJdID0gc2NhbGUgKiB2MyAqIGQ7XG4gIG91dFszXSA9IHNjYWxlICogdjQgKiBkO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIHZhciBxeCA9IHFbMF0sXG4gICAgICBxeSA9IHFbMV0sXG4gICAgICBxeiA9IHFbMl0sXG4gICAgICBxdyA9IHFbM107IC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG5cbiAgdmFyIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICB2YXIgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XG4gIHZhciBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcbiAgdmFyIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejsgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuXG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXo7XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICBvdXRbM10gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjNChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSA0O1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgICBhW2kgKyAzXSA9IHZlY1szXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBJbnRlcnBvbGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEludGVycG9sYXRpb24oKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGN1YmljIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmFsdWVzIGJvdW5kIGJldHdlZW4gdHdvIG90aGVyXG4gICAgICogdmFsdWVzLlxuICAgICAqXG4gICAgICogVGhlIGFscGhhIHZhbHVlIHNob3VsZCByYW5nZSBmcm9tIDAuMCB0byAxLjAuICBJZiB0aGUgYWxwaGEgdmFsdWUgaXNcbiAgICAgKiAwLjAsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBuMS4gIElmIHRoZSBhbHBoYSB2YWx1ZSBpcyAxLjAsIHRoaXNcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIG4yLlxuICAgICAqXG4gICAgICogQHBhcmFtIG4wIFRoZSB2YWx1ZSBiZWZvcmUgdGhlIGZpcnN0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBuMSBUaGUgZmlyc3QgdmFsdWUuXG4gICAgICogQHBhcmFtIG4yIFRoZSBzZWNvbmQgdmFsdWUuXG4gICAgICogQHBhcmFtIG4zIFRoZSB2YWx1ZSBhZnRlciB0aGUgc2Vjb25kIHZhbHVlLlxuICAgICAqIEBwYXJhbSBhIFRoZSBhbHBoYSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUuXG4gICAgICpcbiAgICAgKi9cbiAgICBJbnRlcnBvbGF0aW9uLmN1YmljID0gZnVuY3Rpb24gKG4wLCBuMSwgbjIsIG4zLCBhKSB7XG4gICAgICAgIHZhciBwID0gKChuMyAtIG4yKSAtIChuMCAtIG4xKSk7XG4gICAgICAgIHZhciBxID0gKChuMCAtIG4xKSAtIHApO1xuICAgICAgICB2YXIgciA9IChuMiAtIG4wKTtcbiAgICAgICAgdmFyIHMgPSAobjEpO1xuICAgICAgICByZXR1cm4gKHAgKiBhICogYSAqIGEgKyBxICogYSAqIGEgKyByICogYSArIHMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmFsdWVzLlxuICAgICAqXG4gICAgICogVGhlIGFscGhhIHZhbHVlIHNob3VsZCByYW5nZSBmcm9tIDAuMCB0byAxLjAuICBJZiB0aGUgYWxwaGEgdmFsdWUgaXNcbiAgICAgKiAwLjAsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBuMC4gIElmIHRoZSBhbHBoYSB2YWx1ZSBpcyAxLjAsIHRoaXNcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIG4xLlxuICAgICAqXG4gICAgICogQHBhcmFtIG4wIFRoZSBmaXJzdCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gbjEgVGhlIHNlY29uZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gYSBUaGUgYWxwaGEgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlLlxuICAgICAqL1xuICAgIEludGVycG9sYXRpb24ubGluZWFyID0gZnVuY3Rpb24gKG4wLCBuMSwgYSkge1xuICAgICAgICByZXR1cm4gKCgxLjAgLSBhKSAqIChuMCkpICsgKGEgKiAobjEpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1hcHMgYSB2YWx1ZSBvbnRvIGEgY3ViaWMgUy1jdXJ2ZS5cbiAgICAgKiBUaGUgZGVyaXZhdGl2ZSBvZiBhIGN1YmljIFMtY3VydmUgaXMgemVybyBhdCBgYSA9IDAuMGAgYW5kIGBhID0gMS4wYFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZhbHVlIHRvIG1hcCBvbnRvIGEgY3ViaWMgUy1jdXJ2ZS4gU2hvdWxkIHJhbmdlIGZyb20gMC4wIHRvIDEuMC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXBwZWQgdmFsdWUuXG4gICAgICovXG4gICAgSW50ZXJwb2xhdGlvbi5jdWJpY1NDdXJ2ZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiAoYSAqIGEgKiAoMy4wIC0gMi4wICogYSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFwcyBhIHZhbHVlIG9udG8gYSBxdWludGljIFMtY3VydmUuXG4gICAgICogVGhlIGZpcnN0IGRlcml2YXRpdmUgb2YgYSBxdWludGljIFMtY3VydmUgaXMgemVybyBhdCBgYSA9IDAuMGAgYW5kIGBhID0gMS4wYFxuICAgICAqXG4gICAgICogVGhlIHNlY29uZCBkZXJpdmF0aXZlIG9mIGEgcXVpbnRpYyBTLWN1cnZlIGlzIHplcm8gYXQgYGEgPSAwLjBgIGFuZCBgYSA9IDEuMGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIFRoZSB2YWx1ZSB0byBtYXAgb250byBhIHF1aW50aWMgUy1jdXJ2ZS4gU2hvdWxkIHJhbmdlIGZyb20gMC4wIHRvIDEuMC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXBwZWQgdmFsdWUuXG4gICAgICovXG4gICAgSW50ZXJwb2xhdGlvbi5xdWludGljU0N1cnZlID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGEzID0gKGEgKiBhICogYSk7XG4gICAgICAgIHZhciBhNCA9IChhMyAqIGEpO1xuICAgICAgICB2YXIgYTUgPSAoYTQgKiBhKTtcbiAgICAgICAgcmV0dXJuICgoNi4wICogYTUpIC0gKDE1LjAgKiBhNCkgKyAoMTAuMCAqIGEzKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJwb2xhdGlvbjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbnRlcnBvbGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTWF0aENvbnN0cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXRoQ29uc3RzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQaS4gVGhpcyBpcyB0aGUgcmF0aW8gb2YgdGhlIGNpcmN1bWZlcmVuY2Ugb2YgYSBjaXJjbGUgdG8gaXRzIGRpYW1ldGVyLlxuICAgICAqL1xuICAgIE1hdGhDb25zdHMuUEkgPSBNYXRoLlBJO1xuICAgIC8qKlxuICAgICAqIFRoZSBzcXVhcmUgcm9vdCBvZiAyLlxuICAgICAqL1xuICAgIE1hdGhDb25zdHMuU1FSVF8yID0gTWF0aC5TUVJUMjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3F1YXJlIHJvb3Qgb2YgMy5cbiAgICAgKi9cbiAgICBNYXRoQ29uc3RzLlNRUlRfMyA9IDEuNzMyMDUwODA3NTY4ODc3MjkzNTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFucyBieSBtdWx0aXBseWluZyBieSB0aGlzIGNvbnN0YW50LlxuICAgICAqL1xuICAgIE1hdGhDb25zdHMuREVHX1RPX1JBRCA9IE1hdGguUEkgLyAxODAuMDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlcyBieSBtdWx0aXBseWluZyBieSB0aGlzIGNvbnN0YW50LlxuICAgICAqL1xuICAgIE1hdGhDb25zdHMuUkFEX1RPX0RFRyA9IDEuMCAvIChNYXRoLlBJIC8gMTgwLjApO1xuICAgIHJldHVybiBNYXRoQ29uc3RzO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdGhDb25zdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTW9kdWxlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZHVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vTW9kdWxlXCIpKTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgZ2VuZXJhdGUgbW9kdWxlcy5cbiAqIEdlbmVyYXRvciBtb2R1bGVzIG91dHB1dCBhIHZhbHVlIGdlbmVyYXRlZCBieSBhIGNvaGVyZW50LW5vaXNlXG4gKiBmdW5jdGlvbiBvciBzb21lIG90aGVyIG1hdGhlbWF0aWNhbCBmdW5jdGlvbi5cbiAqL1xudmFyIEdlbmVyYXRvck1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2VuZXJhdG9yTW9kdWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdlbmVyYXRvck1vZHVsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gR2VuZXJhdG9yTW9kdWxlO1xufShNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHZW5lcmF0b3JNb2R1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5vaXNlZ2VuXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vLi4vLi4vbm9pc2VnZW5cIikpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuLy4uLy4uL3V0aWxcIik7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyB0aHJlZS1kaW1lbnNpb25hbCBcImJpbGxvd3lcIiBub2lzZS5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBnZW5lcmF0ZXMgXCJiaWxsb3d5XCIgbm9pc2Ugc3VpdGFibGUgZm9yIGNsb3VkcyBhbmRcbiAqIHJvY2tzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGlzIG5lYXJseSBpZGVudGljYWwgdG8gUGVybGluIGV4Y2VwdCB0aGlzIG5vaXNlIG1vZHVsZVxuICogbW9kaWZpZXMgZWFjaCBvY3RhdmUgd2l0aCBhbiBhYnNvbHV0ZS12YWx1ZSBmdW5jdGlvbi4gIFNlZSB0aGVcbiAqIGRvY3VtZW50YXRpb24gb2YgUGVybGluIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgQmlsbG93ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCaWxsb3csIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZyZXF1ZW5jeSBGcmVxdWVuY3kgb2YgdGhlIGZpcnN0IG9jdGF2ZS5cbiAgICAgKiBAcGFyYW0gbGFjdW5hcml0eSBGcmVxdWVuY3kgbXVsdGlwbGllciBiZXR3ZWVuIHN1Y2Nlc3NpdmUgb2N0YXZlcy5cbiAgICAgKiBAcGFyYW0gb2N0YXZlcyBUb3RhbCBudW1iZXIgb2Ygb2N0YXZlcyB0aGF0IGdlbmVyYXRlIHRoZSBiaWxsb3d5IG5vaXNlLlxuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZSBQZXJzaXN0ZW5jZSB2YWx1ZSBvZiB0aGUgYmlsbG93eSBub2lzZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBTZWVkIHZhbHVlIHVzZWQgYnkgdGhlIGJpbGxvd3ktbm9pc2UgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHF1YWxpdHkgUXVhbGl0eSBvZiB0aGUgYmlsbG93eSBub2lzZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCaWxsb3coZnJlcXVlbmN5LCBsYWN1bmFyaXR5LCBvY3RhdmVzLCBwZXJzaXN0ZW5jZSwgc2VlZCwgcXVhbGl0eSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fb2N0YXZlcyA9IEJpbGxvdy5ERUZBVUxUX0JJTExPV19PQ1RBVkVfQ09VTlQ7XG4gICAgICAgIF90aGlzLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeSB8fCBCaWxsb3cuREVGQVVMVF9CSUxMT1dfRlJFUVVFTkNZO1xuICAgICAgICBfdGhpcy5sYWN1bmFyaXR5ID0gbGFjdW5hcml0eSB8fCBCaWxsb3cuREVGQVVMVF9CSUxMT1dfTEFDVU5BUklUWTtcbiAgICAgICAgX3RoaXMub2N0YXZlcyA9IG9jdGF2ZXMgfHwgQmlsbG93LkRFRkFVTFRfQklMTE9XX09DVEFWRV9DT1VOVDtcbiAgICAgICAgX3RoaXMucGVyc2lzdGVuY2UgPSBwZXJzaXN0ZW5jZSB8fCBCaWxsb3cuREVGQVVMVF9CSUxMT1dfUEVSU0lTVEVOQ0U7XG4gICAgICAgIF90aGlzLnNlZWQgPSBzZWVkIHx8IEJpbGxvdy5ERUZBVUxUX0JJTExPV19TRUVEO1xuICAgICAgICBfdGhpcy5xdWFsaXR5ID0gcXVhbGl0eSB8fCBCaWxsb3cuREVGQVVMVF9CSUxMT1dfUVVBTElUWTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmlsbG93LnByb3RvdHlwZSwgXCJvY3RhdmVzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvdGFsIG51bWJlciBvZiBvY3RhdmVzIHRoYXQgZ2VuZXJhdGUgdGhlIGJpbGxvd3kgbm9pc2UuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vY3RhdmVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gQmlsbG93LkJJTExPV19NQVhfT0NUQVZFKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBvY3RhdmVzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIG9mIFwiICsgQmlsbG93LkJJTExPV19NQVhfT0NUQVZFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29jdGF2ZXMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmlsbG93LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHZhciBueDtcbiAgICAgICAgdmFyIG55O1xuICAgICAgICB2YXIgbno7XG4gICAgICAgIHZhciB2YWx1ZSA9IDAuMDtcbiAgICAgICAgdmFyIHNpZ25hbCA9IDAuMDtcbiAgICAgICAgdmFyIHBlcnNpc3QgPSAxLjA7XG4gICAgICAgIHggPSAoeCAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeSA9ICh5ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB6ID0gKHogKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIGZvciAodmFyIG9jdGF2ZSA9IDA7IG9jdGF2ZSA8IHRoaXMub2N0YXZlczsgb2N0YXZlKyspIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZXNlIGZsb2F0aW5nLXBvaW50IHZhbHVlcyBoYXZlIHRoZSBzYW1lIHJhbmdlIGFzIGEgMzItXG4gICAgICAgICAgICAvLyBiaXQgaW50ZWdlciBzbyB0aGF0IHdlIGNhbiBwYXNzIHRoZW0gdG8gdGhlIGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9ucy5cbiAgICAgICAgICAgIG54ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHgpO1xuICAgICAgICAgICAgbnkgPSB1dGlsXzEubWFrZUludDMyUmFuZ2UoeSk7XG4gICAgICAgICAgICBueiA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh6KTtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29oZXJlbnQtbm9pc2UgdmFsdWUgZnJvbSB0aGUgaW5wdXQgdmFsdWUgYW5kIGFkZCBpdCB0byB0aGUgZmluYWwgcmVzdWx0LlxuICAgICAgICAgICAgc2lnbmFsID0gMi4wICogTWF0aC5hYnMobm9pc2VnZW5fMS5kZWZhdWx0LmdyYWRpZW50Q29oZXJlbnROb2lzZTNEKG54LCBueSwgbnosICgodGhpcy5zZWVkICsgb2N0YXZlKSAmIDB4ZmZmZmZmZmYpLCB0aGlzLnF1YWxpdHkpKSAtIDEuMDtcbiAgICAgICAgICAgIHZhbHVlICs9IHNpZ25hbCAqIHBlcnNpc3Q7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBuZXh0IG9jdGF2ZS5cbiAgICAgICAgICAgIHggKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgeSAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICB6ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHBlcnNpc3QgKj0gdGhpcy5wZXJzaXN0ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgKyAwLjU7XG4gICAgfTtcbiAgICBCaWxsb3cuREVGQVVMVF9CSUxMT1dfRlJFUVVFTkNZID0gMS4wO1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19MQUNVTkFSSVRZID0gMi4wO1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19PQ1RBVkVfQ09VTlQgPSA2O1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19QRVJTSVNURU5DRSA9IDAuNTtcbiAgICBCaWxsb3cuREVGQVVMVF9CSUxMT1dfUVVBTElUWSA9IG5vaXNlZ2VuXzEuUXVhbGl0eS5TdGFuZGFyZDtcbiAgICBCaWxsb3cuREVGQVVMVF9CSUxMT1dfU0VFRCA9IDA7XG4gICAgQmlsbG93LkJJTExPV19NQVhfT0NUQVZFID0gMzA7XG4gICAgcmV0dXJuIEJpbGxvdztcbn0oR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQmlsbG93O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi8uLi8uLi91dGlsXCIpO1xudmFyIEdlbmVyYXRvck1vZHVsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dlbmVyYXRvck1vZHVsZVwiKSk7XG4vKipcbiAqIE5vaXNlIG1vZHVsZSB0aGF0IG91dHB1dHMgYSBjaGVja2VyYm9hcmQgcGF0dGVybi5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBvdXRwdXRzIHVuaXQtc2l6ZWQgYmxvY2tzIG9mIGFsdGVybmF0aW5nIHZhbHVlcy5cbiAqIFRoZSB2YWx1ZXMgb2YgdGhlc2UgYmxvY2tzIGFsdGVybmF0ZSBiZXR3ZWVuIC0xLjAgYW5kICsxLjAuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgaXMgbm90IHJlYWxseSB1c2VmdWwgYnkgaXRzZWxmLCBidXQgaXQgaXMgb2Z0ZW4gdXNlZFxuICogZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBkb2VzIG5vdCByZXF1aXJlIGFueSBzb3VyY2UgbW9kdWxlcy5cbiAqL1xudmFyIENoZWNrZXJib2FyZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hlY2tlcmJvYXJkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoZWNrZXJib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDaGVja2VyYm9hcmQucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgdmFyIGl4ID0gTWF0aC5mbG9vcih1dGlsXzEubWFrZUludDMyUmFuZ2UoeCkpO1xuICAgICAgICB2YXIgaXkgPSBNYXRoLmZsb29yKHV0aWxfMS5tYWtlSW50MzJSYW5nZSh5KSk7XG4gICAgICAgIHZhciBpeiA9IE1hdGguZmxvb3IodXRpbF8xLm1ha2VJbnQzMlJhbmdlKHopKTtcbiAgICAgICAgcmV0dXJuIChpeCAmIDEgXiBpeSAmIDEgXiBpeiAmIDEpID8gLTEuMCA6IDEuMDtcbiAgICB9O1xuICAgIHJldHVybiBDaGVja2VyYm9hcmQ7XG59KEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrZXJib2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyBhIGNvbnN0YW50IHZhbHVlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGlzIG5vdCB1c2VmdWwgYnkgaXRzZWxmLCBidXQgaXQgaXMgb2Z0ZW4gdXNlZCBhcyBhXG4gKiBzb3VyY2UgbW9kdWxlIGZvciBvdGhlciBub2lzZSBtb2R1bGVzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGRvZXMgbm90IHJlcXVpcmUgYW55IHNvdXJjZSBtb2R1bGVzLlxuICovXG52YXIgQ29uc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnN0LCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29uc3RhbnQgb3V0cHV0IHZhbHVlIGZvciB0aGlzIG5vaXNlIG1vZHVsZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb25zdCh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlIHx8IENvbnN0LkRFRkFVTFRfQ09OU1RfVkFMVUU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29uc3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIENvbnN0LkRFRkFVTFRfQ09OU1RfVkFMVUUgPSAwLjA7XG4gICAgcmV0dXJuIENvbnN0O1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDb25zdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyBjb25jZW50cmljIGN5bGluZGVycy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBvdXRwdXRzIGNvbmNlbnRyaWMgY3lsaW5kZXJzIGNlbnRlcmVkIG9uIHRoZSBvcmlnaW4uXG4gKiBUaGVzZSBjeWxpbmRlcnMgYXJlIG9yaWVudGVkIGFsb25nIHRoZSB5IGF4aXMgc2ltaWxhciB0byB0aGVcbiAqIGNvbmNlbnRyaWMgcmluZ3Mgb2YgYSB0cmVlLiAgRWFjaCBjeWxpbmRlciBleHRlbmRzIGluZmluaXRlbHkgYWxvbmdcbiAqIHRoZSB5IGF4aXMuXG4gKlxuICogVGhlIGZpcnN0IGN5bGluZGVyIGhhcyBhIHJhZGl1cyBvZiAxLjAuICBFYWNoIHN1YnNlcXVlbnQgY3lsaW5kZXIgaGFzXG4gKiBhIHJhZGl1cyB0aGF0IGlzIDEuMCB1bml0IGxhcmdlciB0aGFuIHRoZSBwcmV2aW91cyBjeWxpbmRlci5cbiAqXG4gKiBUaGUgb3V0cHV0IHZhbHVlIGZyb20gdGhpcyBub2lzZSBtb2R1bGUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgZGlzdGFuY2VcbiAqIGJldHdlZW4gdGhlIGlucHV0IHZhbHVlIGFuZCB0aGUgdGhlIG5lYXJlc3QgY3lsaW5kZXIgc3VyZmFjZS4gIFRoZVxuICogaW5wdXQgdmFsdWVzIHRoYXQgYXJlIGxvY2F0ZWQgb24gYSBjeWxpbmRlciBzdXJmYWNlIGFyZSBnaXZlbiB0aGVcbiAqIG91dHB1dCB2YWx1ZSAxLjAgYW5kIHRoZSBpbnB1dCB2YWx1ZXMgdGhhdCBhcmUgZXF1aWRpc3RhbnQgZnJvbSB0d29cbiAqIGN5bGluZGVyIHN1cmZhY2VzIGFyZSBnaXZlbiB0aGUgb3V0cHV0IHZhbHVlIC0xLjAuXG4gKlxuICogQW4gYXBwbGljYXRpb24gY2FuIGNoYW5nZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBjb25jZW50cmljIGN5bGluZGVycy5cbiAqIEluY3JlYXNpbmcgdGhlIGZyZXF1ZW5jeSByZWR1Y2VzIHRoZSBkaXN0YW5jZXMgYmV0d2VlbiBjeWxpbmRlcnMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUsIG1vZGlmaWVkIHdpdGggc29tZSBsb3ctZnJlcXVlbmN5LCBsb3ctcG93ZXJcbiAqIHR1cmJ1bGVuY2UsIGlzIHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyB3b29kLWxpa2UgdGV4dHVyZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgZG9lcyBub3QgcmVxdWlyZSBhbnkgc291cmNlIG1vZHVsZXMuXG4gKi9cbnZhciBDeWxpbmRlcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEN5bGluZGVycywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnJlcXVlbmN5IFRoZSBmcmVxdWVuY3kgb2YgdGhlIGNvbmNlbnRyaWMgY3lsaW5kZXJzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEN5bGluZGVycyhmcmVxdWVuY3kpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5IHx8IEN5bGluZGVycy5ERUZBVUxUX0NZTElOREVSU19GUkVRVUVOQ1k7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ3lsaW5kZXJzLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHggPSAoeCAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeSA9ICh5ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB2YXIgZGlzdEZyb21DZW50ZXIgPSBNYXRoLnNxcnQoeCAqIHggKyB6ICogeik7XG4gICAgICAgIHZhciBkaXN0RnJvbVNtYWxsZXJTcGhlcmUgPSBkaXN0RnJvbUNlbnRlciAtIE1hdGguZmxvb3IoZGlzdEZyb21DZW50ZXIpO1xuICAgICAgICB2YXIgZGlzdEZyb21MYXJnZXJTcGhlcmUgPSAxLjAgLSBkaXN0RnJvbVNtYWxsZXJTcGhlcmU7XG4gICAgICAgIHZhciBuZWFyZXN0RGlzdCA9IE1hdGgubWluKGRpc3RGcm9tU21hbGxlclNwaGVyZSwgZGlzdEZyb21MYXJnZXJTcGhlcmUpO1xuICAgICAgICByZXR1cm4gMS4wIC0gKG5lYXJlc3REaXN0ICogNC4wKTsgLy8gUHV0cyBpdCBpbiB0aGUgLTEuMCB0byArMS4wIHJhbmdlLlxuICAgIH07XG4gICAgQ3lsaW5kZXJzLkRFRkFVTFRfQ1lMSU5ERVJTX0ZSRVFVRU5DWSA9IDEuMDtcbiAgICByZXR1cm4gQ3lsaW5kZXJzO1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDeWxpbmRlcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBiaWxsb3dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9iaWxsb3dcIikpO1xuZXhwb3J0cy5CaWxsb3cgPSBiaWxsb3dfMS5kZWZhdWx0O1xudmFyIGNoZWNrZXJib2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NoZWNrZXJib2FyZFwiKSk7XG5leHBvcnRzLkNoZWNrZXJib2FyZCA9IGNoZWNrZXJib2FyZF8xLmRlZmF1bHQ7XG52YXIgY29uc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdFwiKSk7XG5leHBvcnRzLkNvbnN0ID0gY29uc3RfMS5kZWZhdWx0O1xudmFyIGN5bGluZGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2N5bGluZGVyc1wiKSk7XG5leHBvcnRzLkN5bGluZGVycyA9IGN5bGluZGVyc18xLmRlZmF1bHQ7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQ7XG52YXIgcGVybGluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGVybGluXCIpKTtcbmV4cG9ydHMuUGVybGluID0gcGVybGluXzEuZGVmYXVsdDtcbnZhciByaWRnZWRtdWx0aV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JpZGdlZG11bHRpXCIpKTtcbmV4cG9ydHMuUmlkZ2VkTXVsdGkgPSByaWRnZWRtdWx0aV8xLmRlZmF1bHQ7XG52YXIgc3BoZXJlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NwaGVyZXNcIikpO1xuZXhwb3J0cy5TcGhlcmVzID0gc3BoZXJlc18xLmRlZmF1bHQ7XG52YXIgdm9yb25vaV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Zvcm9ub2lcIikpO1xuZXhwb3J0cy5Wb3Jvbm9pID0gdm9yb25vaV8xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5vaXNlZ2VuXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vLi4vLi4vbm9pc2VnZW5cIikpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuLy4uLy4uL3V0aWxcIik7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyAzLWRpbWVuc2lvbmFsIFBlcmxpbiBub2lzZS5cbiAqXG4gKiBQZXJsaW4gbm9pc2UgaXMgdGhlIHN1bSBvZiBzZXZlcmFsIGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9ucyBvZlxuICogZXZlci1pbmNyZWFzaW5nIGZyZXF1ZW5jaWVzIGFuZCBldmVyLWRlY3JlYXNpbmcgYW1wbGl0dWRlcy5cbiAqXG4gKiBBbiBpbXBvcnRhbnQgcHJvcGVydHkgb2YgUGVybGluIG5vaXNlIGlzIHRoYXQgYSBzbWFsbCBjaGFuZ2UgaW4gdGhlXG4gKiBpbnB1dCB2YWx1ZSB3aWxsIHByb2R1Y2UgYSBzbWFsbCBjaGFuZ2UgaW4gdGhlIG91dHB1dCB2YWx1ZSwgd2hpbGUgYVxuICogbGFyZ2UgY2hhbmdlIGluIHRoZSBpbnB1dCB2YWx1ZSB3aWxsIHByb2R1Y2UgYSByYW5kb20gY2hhbmdlIGluIHRoZVxuICogb3V0cHV0IHZhbHVlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIG91dHB1dHMgUGVybGluLW5vaXNlIHZhbHVlcyB0aGF0IHVzdWFsbHkgcmFuZ2UgZnJvbVxuICogLTEuMCB0byArMS4wLCBidXQgdGhlcmUgYXJlIG5vIGd1YXJhbnRlZXMgdGhhdCBhbGwgb3V0cHV0IHZhbHVlcyB3aWxsXG4gKiBleGlzdCB3aXRoaW4gdGhhdCByYW5nZS5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBkb2VzIG5vdCByZXF1aXJlIGFueSBzb3VyY2UgbW9kdWxlcy5cbiAqXG4gKiAjIyBPY3RhdmVzXG4gKlxuICogVGhlIG51bWJlciBvZiBvY3RhdmVzIGNvbnRyb2wgdGhlIGFtb3VudCBvZiBkZXRhaWwgb2YgdGhlXG4gKiBQZXJsaW4gbm9pc2UuICBBZGRpbmcgbW9yZSBvY3RhdmVzIGluY3JlYXNlcyB0aGUgZGV0YWlsIG9mIHRoZSBQZXJsaW5cbiAqIG5vaXNlLCBidXQgd2l0aCB0aGUgZHJhd2JhY2sgb2YgaW5jcmVhc2luZyB0aGUgY2FsY3VsYXRpb24gdGltZS5cbiAqXG4gKiBBbiBvY3RhdmUgaXMgb25lIG9mIHRoZSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbnMgaW4gYSBzZXJpZXMgb2ZcbiAqIGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9ucyB0aGF0IGFyZSBhZGRlZCB0b2dldGhlciB0byBmb3JtIFBlcmxpblxuICogbm9pc2UuXG4gKlxuICogVGhlc2UgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWQgb2N0YXZlcyBiZWNhdXNlIGVhY2ggb2N0YXZlXG4gKiBoYXMsIGJ5IGRlZmF1bHQsIGRvdWJsZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBwcmV2aW91cyBvY3RhdmUuICBNdXNpY2FsXG4gKiB0b25lcyBoYXZlIHRoaXMgcHJvcGVydHkgYXMgd2VsbDsgYSBtdXNpY2FsIEMgdG9uZSB0aGF0IGlzIG9uZSBvY3RhdmVcbiAqIGhpZ2hlciB0aGFuIHRoZSBwcmV2aW91cyBDIHRvbmUgaGFzIGRvdWJsZSBpdHMgZnJlcXVlbmN5LlxuICpcbiAqICMjIFBlcnNpc3RlbmNlXG4gKlxuICogVGhlIHBlcnNpc3RlbmNlIHZhbHVlIGNvbnRyb2xzIHRoZSByb3VnaG5lc3Mgb2YgdGhlIFBlcmxpblxuICogbm9pc2UuICBMYXJnZXIgdmFsdWVzIHByb2R1Y2Ugcm91Z2hlciBub2lzZS5cbiAqXG4gKiBUaGUgcGVyc2lzdGVuY2UgdmFsdWUgZGV0ZXJtaW5lcyBob3cgcXVpY2tseSB0aGUgYW1wbGl0dWRlcyBkaW1pbmlzaFxuICogZm9yIHN1Y2Nlc3NpdmUgb2N0YXZlcy4gIFRoZSBhbXBsaXR1ZGUgb2YgdGhlIGZpcnN0IG9jdGF2ZSBpcyAxLjAuXG4gKiBUaGUgYW1wbGl0dWRlIG9mIGVhY2ggc3Vic2VxdWVudCBvY3RhdmUgaXMgZXF1YWwgdG8gdGhlIHByb2R1Y3Qgb2YgdGhlXG4gKiBwcmV2aW91cyBvY3RhdmUncyBhbXBsaXR1ZGUgYW5kIHRoZSBwZXJzaXN0ZW5jZSB2YWx1ZS4gIFNvIGFcbiAqIHBlcnNpc3RlbmNlIHZhbHVlIG9mIDAuNSBzZXRzIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGZpcnN0IG9jdGF2ZSB0b1xuICogMS4wOyB0aGUgc2Vjb25kLCAwLjU7IHRoZSB0aGlyZCwgMC4yNTsgZXRjLlxuICpcbiAqICMjIExhY3VuYXJpdHlcbiAqXG4gKiBUaGUgbGFjdW5hcml0eSBzcGVjaWZpZXMgdGhlIGZyZXF1ZW5jeSBtdWx0aXBsaWVyIGJldHdlZW4gc3VjY2Vzc2l2ZVxuICogb2N0YXZlcy5cbiAqXG4gKiBUaGUgZWZmZWN0IG9mIG1vZGlmeWluZyB0aGUgbGFjdW5hcml0eSBpcyBzdWJ0bGU7IHlvdSBtYXkgbmVlZCB0byBwbGF5XG4gKiB3aXRoIHRoZSBsYWN1bmFyaXR5IHZhbHVlIHRvIGRldGVybWluZSB0aGUgZWZmZWN0cy4gIEZvciBiZXN0IHJlc3VsdHMsXG4gKiBzZXQgdGhlIGxhY3VuYXJpdHkgdG8gYSBudW1iZXIgYmV0d2VlbiAxLjUgYW5kIDMuNS5cbiAqXG4gKiAjIyBSZWZlcmVuY2VzICYgYWNrbm93bGVkZ2VtZW50c1xuICpcbiAqIFtUaGUgTm9pc2UgTWFjaGluZV0oaHR0cDovL3d3dy5ub2lzZW1hY2hpbmUuY29tL3RhbGsxKSAtXG4gKiBGcm9tIHRoZSBtYXN0ZXIsIEtlbiBQZXJsaW4gaGltc2VsZi4gIFRoaXMgcGFnZSBjb250YWlucyBhXG4gKiBwcmVzZW50YXRpb24gdGhhdCBkZXNjcmliZXMgUGVybGluIG5vaXNlIGFuZCBzb21lIG9mIGl0cyB2YXJpYW50cy5cbiAqIEhlIHdvbiBhbiBPc2NhciBmb3IgY3JlYXRpbmcgdGhlIFBlcmxpbiBub2lzZSBhbGdvcml0aG0hXG4gKlxuICogW1BlcmxpbiBOb2lzZV0oaHR0cDovL2ZyZWVzcGFjZS52aXJnaW4ubmV0L2h1Z28uZWxpYXMvbW9kZWxzL21fcGVybGluLmh0bSkgLVxuICogSHVnbyBFbGlhcydzIHdlYnBhZ2UgY29udGFpbnMgYSB2ZXJ5IGdvb2RcbiAqIGRlc2NyaXB0aW9uIG9mIFBlcmxpbiBub2lzZSBhbmQgZGVzY3JpYmVzIGl0cyBtYW55IGFwcGxpY2F0aW9ucy4gIFRoaXNcbiAqIHBhZ2UgZ2F2ZSBtZSB0aGUgaW5zcGlyYXRpb24gdG8gY3JlYXRlIGxpYm5vaXNlIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAqIE5vdyB0aGF0IEkga25vdyBob3cgdG8gZ2VuZXJhdGUgUGVybGluIG5vaXNlLCBJIHdpbGwgbmV2ZXIgYWdhaW4gdXNlXG4gKiBjaGVlc3kgc3ViZGl2aXNpb24gYWxnb3JpdGhtcyB0byBjcmVhdGUgdGVycmFpbiAodW5sZXNzIEkgYWJzb2x1dGVseVxuICogbmVlZCB0aGUgc3BlZWQuKVxuICpcbiAqIFtUaGUgUGVybGluIG5vaXNlIG1hdGggRkFRXShodHRwOi8vd3d3LnJvYm8tbXVyaXRvLm5ldC9jb2RlL3Blcmxpbi1ub2lzZS1tYXRoLWZhcS5odG1sKSAtXG4gKiBBIGdvb2QgcGFnZSB0aGF0IGRlc2NyaWJlcyBQZXJsaW4gbm9pc2UgaW5cbiAqIHBsYWluIEVuZ2xpc2ggd2l0aCBvbmx5IGEgbWlub3IgYW1vdW50IG9mIG1hdGguICBEdXJpbmcgZGV2ZWxvcG1lbnQgb2ZcbiAqIGxpYm5vaXNlLCBJIG5vdGljZWQgdGhhdCBteSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbiBnZW5lcmF0ZWQgdGVycmFpblxuICogd2l0aCBzb21lIFwicmVndWxhcml0eVwiIHRvIHRoZSB0ZXJyYWluIGZlYXR1cmVzLiAgVGhpcyBwYWdlIGRlc2NyaWJlcyBhXG4gKiBiZXR0ZXIgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb24gY2FsbGVkIGdyYWRpZW50IG5vaXNlLiAgVGhpc1xuICogdmVyc2lvbiBvZiBub2lzZTo6bW9kdWxlOjpQZXJsaW4gdXNlcyBncmFkaWVudCBjb2hlcmVudCBub2lzZSB0b1xuICogZ2VuZXJhdGUgUGVybGluIG5vaXNlLlxuICovXG52YXIgUGVybGluID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQZXJsaW4sIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZyZXF1ZW5jeSBGcmVxdWVuY3kgb2YgdGhlIGZpcnN0IG9jdGF2ZS5cbiAgICAgKiBAcGFyYW0gbGFjdW5hcml0eSBGcmVxdWVuY3kgbXVsdGlwbGllciBiZXR3ZWVuIHN1Y2Nlc3NpdmUgb2N0YXZlcy5cbiAgICAgKiBAcGFyYW0gb2N0YXZlcyBUb3RhbCBudW1iZXIgb2Ygb2N0YXZlcyB0aGF0IGdlbmVyYXRlIHRoZSBwZXJsaW4gbm9pc2UuXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlIFBlcnNpc3RlbmNlIHZhbHVlIG9mIHRoZSBwZXJsaW4gbm9pc2UuXG4gICAgICogQHBhcmFtIHNlZWQgU2VlZCB2YWx1ZSB1c2VkIGJ5IHRoZSBwZXJsaW4tbm9pc2UgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHF1YWxpdHkgUXVhbGl0eSBvZiB0aGUgcGVybGluIG5vaXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFBlcmxpbihmcmVxdWVuY3ksIGxhY3VuYXJpdHksIG9jdGF2ZXMsIHBlcnNpc3RlbmNlLCBzZWVkLCBxdWFsaXR5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9vY3RhdmVzID0gUGVybGluLkRFRkFVTFRfUEVSTElOX09DVEFWRV9DT1VOVDtcbiAgICAgICAgX3RoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5IHx8IFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9GUkVRVUVOQ1k7XG4gICAgICAgIF90aGlzLmxhY3VuYXJpdHkgPSBsYWN1bmFyaXR5IHx8IFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9MQUNVTkFSSVRZO1xuICAgICAgICBfdGhpcy5vY3RhdmVzID0gb2N0YXZlcyB8fCBQZXJsaW4uREVGQVVMVF9QRVJMSU5fT0NUQVZFX0NPVU5UO1xuICAgICAgICBfdGhpcy5wZXJzaXN0ZW5jZSA9IHBlcnNpc3RlbmNlIHx8IFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9QRVJTSVNURU5DRTtcbiAgICAgICAgX3RoaXMuc2VlZCA9IHNlZWQgfHwgUGVybGluLkRFRkFVTFRfUEVSTElOX1NFRUQ7XG4gICAgICAgIF90aGlzLnF1YWxpdHkgPSBxdWFsaXR5IHx8IFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9RVUFMSVRZO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQZXJsaW4ucHJvdG90eXBlLCBcIm9jdGF2ZXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG90YWwgbnVtYmVyIG9mIG9jdGF2ZXMgdGhhdCBnZW5lcmF0ZSB0aGUgcGVybGluIG5vaXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb2N0YXZlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IFBlcmxpbi5QRVJMSU5fTUFYX09DVEFWRSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgb2N0YXZlcyBncmVhdGVyIHRoYW4gbWF4aW11bSBvZiBcIiArIFBlcmxpbi5QRVJMSU5fTUFYX09DVEFWRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vY3RhdmVzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFBlcmxpbi5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB2YXIgbngsIG55LCBuejtcbiAgICAgICAgdmFyIHZhbHVlID0gMC4wO1xuICAgICAgICB2YXIgc2lnbmFsID0gMC4wO1xuICAgICAgICB2YXIgcGVyc2lzdCA9IDEuMDtcbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHogPSAoeiAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgZm9yICh2YXIgb2N0YXZlID0gMDsgb2N0YXZlIDwgdGhpcy5vY3RhdmVzOyBvY3RhdmUrKykge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlc2UgZmxvYXRpbmctcG9pbnQgdmFsdWVzIGhhdmUgdGhlIHNhbWUgcmFuZ2UgYXMgYSAzMi1cbiAgICAgICAgICAgIC8vIGJpdCBpbnRlZ2VyIHNvIHRoYXQgd2UgY2FuIHBhc3MgdGhlbSB0byB0aGUgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zLlxuICAgICAgICAgICAgbnggPSB1dGlsXzEubWFrZUludDMyUmFuZ2UoeCk7XG4gICAgICAgICAgICBueSA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh5KTtcbiAgICAgICAgICAgIG56ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHopO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb2hlcmVudC1ub2lzZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCB2YWx1ZSBhbmQgYWRkIGl0IHRvIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICAgICBzaWduYWwgPSBub2lzZWdlbl8xLmRlZmF1bHQuZ3JhZGllbnRDb2hlcmVudE5vaXNlM0QobngsIG55LCBueiwgKCh0aGlzLnNlZWQgKyBvY3RhdmUpICYgMHhmZmZmZmZmZiksIHRoaXMucXVhbGl0eSk7XG4gICAgICAgICAgICB2YWx1ZSArPSBzaWduYWwgKiBwZXJzaXN0O1xuICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgbmV4dCBvY3RhdmUuXG4gICAgICAgICAgICB4ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHkgKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgeiAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICBwZXJzaXN0ICo9IHRoaXMucGVyc2lzdGVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgUGVybGluLkRFRkFVTFRfUEVSTElOX0ZSRVFVRU5DWSA9IDEuMDtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fTEFDVU5BUklUWSA9IDIuMDtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fT0NUQVZFX0NPVU5UID0gNjtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fUEVSU0lTVEVOQ0UgPSAwLjU7XG4gICAgUGVybGluLkRFRkFVTFRfUEVSTElOX1FVQUxJVFkgPSBub2lzZWdlbl8xLlF1YWxpdHkuU3RhbmRhcmQ7XG4gICAgUGVybGluLkRFRkFVTFRfUEVSTElOX1NFRUQgPSAwO1xuICAgIFBlcmxpbi5QRVJMSU5fTUFYX09DVEFWRSA9IDMwO1xuICAgIHJldHVybiBQZXJsaW47XG59KEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBlcmxpbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbm9pc2VnZW5fMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi8uLi8uLi9ub2lzZWdlblwiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vdXRpbFwiKTtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuLyoqXG4gKiBOb2lzZSBtb2R1bGUgdGhhdCBvdXRwdXRzIDMtZGltZW5zaW9uYWwgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSwgaGVhdmlseSBiYXNlZCBvbiB0aGUgUGVybGluLW5vaXNlIG1vZHVsZSwgZ2VuZXJhdGVzXG4gKiByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLiAgUmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZSBpcyBnZW5lcmF0ZWQgaW5cbiAqIG11Y2ggb2YgdGhlIHNhbWUgd2F5IGFzIFBlcmxpbiBub2lzZSwgZXhjZXB0IHRoZSBvdXRwdXQgb2YgZWFjaCBvY3RhdmVcbiAqIGlzIG1vZGlmaWVkIGJ5IGFuIGFic29sdXRlLXZhbHVlIGZ1bmN0aW9uLiAgTW9kaWZ5aW5nIHRoZSBvY3RhdmVcbiAqIHZhbHVlcyBpbiB0aGlzIHdheSBwcm9kdWNlcyByaWRnZS1saWtlIGZvcm1hdGlvbnMuXG4gKlxuICogUmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZSBkb2VzIG5vdCB1c2UgYSBwZXJzaXN0ZW5jZSB2YWx1ZS4gIFRoaXMgaXNcbiAqIGJlY2F1c2UgdGhlIHBlcnNpc3RlbmNlIHZhbHVlcyBvZiB0aGUgb2N0YXZlcyBhcmUgYmFzZWQgb24gdGhlIHZhbHVlc1xuICogZ2VuZXJhdGVkIGZyb20gZnJvbSBwcmV2aW91cyBvY3RhdmVzLCBjcmVhdGluZyBhIGZlZWRiYWNrIGxvb3AgKG9yXG4gKiB0aGF0J3Mgd2hhdCBpdCBsb29rcyBsaWtlIGFmdGVyIHJlYWRpbmcgdGhlIGNvZGUuKVxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIG91dHB1dHMgcmlkZ2VkLW11bHRpZnJhY3RhbC1ub2lzZSB2YWx1ZXMgdGhhdFxuICogdXN1YWxseSByYW5nZSBmcm9tIC0xLjAgdG8gKzEuMCwgYnV0IHRoZXJlIGFyZSBubyBndWFyYW50ZWVzIHRoYXQgYWxsXG4gKiBvdXRwdXQgdmFsdWVzIHdpbGwgZXhpc3Qgd2l0aGluIHRoYXQgcmFuZ2UuXG4gKlxuICogQG5vdGUgRm9yIHJpZGdlZC1tdWx0aWZyYWN0YWwgbm9pc2UgZ2VuZXJhdGVkIHdpdGggb25seSBvbmUgb2N0YXZlLFxuICogdGhlIG91dHB1dCB2YWx1ZSByYW5nZXMgZnJvbSAtMS4wIHRvIDAuMC5cbiAqXG4gKiBSaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlIGlzIG9mdGVuIHVzZWQgdG8gZ2VuZXJhdGUgY3JhZ2d5IG1vdW50YWlub3VzXG4gKiB0ZXJyYWluIG9yIG1hcmJsZS1saWtlIHRleHR1cmVzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGRvZXMgbm90IHJlcXVpcmUgYW55IHNvdXJjZSBtb2R1bGVzLlxuICpcbiAqICMjIE9jdGF2ZXNcbiAqXG4gKiBUaGUgbnVtYmVyIG9mIG9jdGF2ZXMgY29udHJvbCB0aGUgKmFtb3VudCBvZiBkZXRhaWwqIG9mIHRoZVxuICogcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS4gIEFkZGluZyBtb3JlIG9jdGF2ZXMgaW5jcmVhc2VzIHRoZSBkZXRhaWxcbiAqIG9mIHRoZSByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLCBidXQgd2l0aCB0aGUgZHJhd2JhY2sgb2YgaW5jcmVhc2luZ1xuICogdGhlIGNhbGN1bGF0aW9uIHRpbWUuXG4gKlxuICogIyMgTGFjdW5hcml0eVxuICpcbiAqIFRoZSBsYWN1bmFyaXR5IHNwZWNpZmllcyB0aGUgZnJlcXVlbmN5IG11bHRpcGxpZXIgYmV0d2VlbiBzdWNjZXNzaXZlXG4gKiBvY3RhdmVzLlxuICpcbiAqIFRoZSBlZmZlY3Qgb2YgbW9kaWZ5aW5nIHRoZSBsYWN1bmFyaXR5IGlzIHN1YnRsZTsgeW91IG1heSBuZWVkIHRvIHBsYXlcbiAqIHdpdGggdGhlIGxhY3VuYXJpdHkgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBlZmZlY3RzLiAgRm9yIGJlc3QgcmVzdWx0cyxcbiAqIHNldCB0aGUgbGFjdW5hcml0eSB0byBhIG51bWJlciBiZXR3ZWVuIDEuNSBhbmQgMy41LlxuICpcbiAqICMjIFJlZmVyZW5jZXMgJiBBY2tub3dsZWRnbWVudHNcbiAqXG4gKiBbRi4gS2VudG9uIFwiRG9jIE1vam9cIiBNdXNncmF2ZSdzIHRleHR1cmluZyBwYWdlXShodHRwOi8vd3d3LnRleHR1cmluZ2FuZG1vZGVsaW5nLmNvbS9NdXNncmF2ZS5odG1sKSAtXG4gKiBUaGlzIHBhZ2UgY29udGFpbnMgbGlua3MgdG8gc291cmNlIGNvZGUgdGhhdCBnZW5lcmF0ZXMgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZSwgYW1vbmdcbiAqIG90aGVyIHR5cGVzIG9mIG5vaXNlLiAgVGhlIHNvdXJjZSBmaWxlIFtmcmFjdGFsLmNdKGh0dHA6Ly93d3cudGV4dHVyaW5nYW5kbW9kZWxpbmcuY29tL0NPREUvTVVTR1JBVkUvQ0xPVUQvZnJhY3RhbC5jKVxuICogY29udGFpbnMgdGhlIGNvZGUgSSB1c2VkIGluIG15IHJpZGdlZC1tdWx0aWZyYWN0YWwgY2xhc3MgKHNlZSB0aGUgUmlkZ2VkTXVsdGlmcmFjdGFsKCkgZnVuY3Rpb24uKVxuICogVGhpcyBjb2RlIHdhcyB3cml0dGVuIGJ5IEYuIEtlbnRvbiBNdXNncmF2ZSwgdGhlIHBlcnNvbiB3aG8gY3JlYXRlZCBbTW9qb1dvcmxkXShodHRwOi8vd3d3LnBhbmRyb21lZGEuY29tKS5cbiAqIEhlIGlzIGFsc28gb25lIG9mIHRoZSBhdXRob3JzIGluICpUZXh0dXJpbmcgYW5kIE1vZGVsaW5nOiBBIFByb2NlZHVyYWwgQXBwcm9hY2gqXG4gKiAoTW9yZ2FuIEthdWZtYW5uLCAyMDAyLiBJU0JOIDEtNTU4NjAtODQ4LTYuKVxuICovXG52YXIgUmlkZ2VkTXVsdGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJpZGdlZE11bHRpLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmcmVxdWVuY3kgRnJlcXVlbmN5IG9mIHRoZSBmaXJzdCBvY3RhdmUuXG4gICAgICogQHBhcmFtIGxhY3VuYXJpdHkgRnJlcXVlbmN5IG11bHRpcGxpZXIgYmV0d2VlbiBzdWNjZXNzaXZlIG9jdGF2ZXMuXG4gICAgICogQHBhcmFtIG9jdGF2ZXMgVG90YWwgbnVtYmVyIG9mIG9jdGF2ZXMgdGhhdCBnZW5lcmF0ZSB0aGUgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBTZWVkIHZhbHVlIHVzZWQgYnkgdGhlIHJpZGdlZC1tdWx0aWZyYWN0YWwtbm9pc2UgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHF1YWxpdHkgUXVhbGl0eSBvZiB0aGUgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCB1c2VkIHdoZW4gZ2VuZXJhdGluZyByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICAgICAqIEBwYXJhbSBnYWluIEdhaW4gdXNlZCB3aGVuIGdlbmVyYXRpbmcgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSaWRnZWRNdWx0aShmcmVxdWVuY3ksIGxhY3VuYXJpdHksIG9jdGF2ZXMsIHNlZWQsIHF1YWxpdHksIG9mZnNldCwgZ2Fpbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fb2N0YXZlcyA9IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX09DVEFWRV9DT1VOVDtcbiAgICAgICAgX3RoaXMuX2xhY3VuYXJpdHkgPSBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9MQUNVTkFSSVRZO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbnMgdGhlIHNwZWN0cmFsIHdlaWdodHMgZm9yIGVhY2ggb2N0YXZlLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMud2VpZ2h0cyA9IFtdO1xuICAgICAgICBfdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3kgfHwgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfRlJFUVVFTkNZO1xuICAgICAgICBfdGhpcy5sYWN1bmFyaXR5ID0gbGFjdW5hcml0eSB8fCBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9MQUNVTkFSSVRZO1xuICAgICAgICBfdGhpcy5vY3RhdmVzID0gb2N0YXZlcyB8fCBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9PQ1RBVkVfQ09VTlQ7XG4gICAgICAgIF90aGlzLnNlZWQgPSBzZWVkIHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX1NFRUQ7XG4gICAgICAgIF90aGlzLnF1YWxpdHkgPSBxdWFsaXR5IHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX1FVQUxJVFk7XG4gICAgICAgIF90aGlzLm9mZnNldCA9IG9mZnNldCB8fCBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9PRkZTRVQ7XG4gICAgICAgIF90aGlzLmdhaW4gPSBnYWluIHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX0dBSU47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJpZGdlZE11bHRpLnByb3RvdHlwZSwgXCJsYWN1bmFyaXR5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZyZXF1ZW5jeSBtdWx0aXBsaWVyIGJldHdlZW4gc3VjY2Vzc2l2ZSBvY3RhdmVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFjdW5hcml0eTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5fbGFjdW5hcml0eSA9IHY7XG4gICAgICAgICAgICB2YXIgaCA9IDEuMDtcbiAgICAgICAgICAgIHZhciBmcmVxdWVuY3kgPSAxLjA7XG4gICAgICAgICAgICB0aGlzLndlaWdodHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgUmlkZ2VkTXVsdGkuUklER0VEX01BWF9PQ1RBVkU7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgd2VpZ2h0IGZvciBlYWNoIGZyZXF1ZW5jeS5cbiAgICAgICAgICAgICAgICB0aGlzLndlaWdodHNbaV0gPSBNYXRoLnBvdyhmcmVxdWVuY3ksIC1oKTtcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3kgKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmlkZ2VkTXVsdGkucHJvdG90eXBlLCBcIm9jdGF2ZXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG90YWwgbnVtYmVyIG9mIG9jdGF2ZXMgdGhhdCBnZW5lcmF0ZSB0aGUgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29jdGF2ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBSaWRnZWRNdWx0aS5SSURHRURfTUFYX09DVEFWRSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgb2N0YXZlcyBncmVhdGVyIHRoYW4gbWF4aW11bSBvZiBcIiArIFJpZGdlZE11bHRpLlJJREdFRF9NQVhfT0NUQVZFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29jdGF2ZXMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgUmlkZ2VkTXVsdGkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgdmFyIG54O1xuICAgICAgICB2YXIgbnk7XG4gICAgICAgIHZhciBuejtcbiAgICAgICAgdmFyIHNlZWQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IDAuMDtcbiAgICAgICAgdmFyIHNpZ25hbCA9IDAuMDtcbiAgICAgICAgdmFyIHdlaWdodCA9IDEuMDtcbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHogPSAoeiAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgZm9yICh2YXIgb2N0YXZlID0gMDsgb2N0YXZlIDwgdGhpcy5vY3RhdmVzOyBvY3RhdmUrKykge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlc2UgZmxvYXRpbmctcG9pbnQgdmFsdWVzIGhhdmUgdGhlIHNhbWUgcmFuZ2UgYXMgYSAzMi1cbiAgICAgICAgICAgIC8vIGJpdCBpbnRlZ2VyIHNvIHRoYXQgd2UgY2FuIHBhc3MgdGhlbSB0byB0aGUgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zLlxuICAgICAgICAgICAgbnggPSB1dGlsXzEubWFrZUludDMyUmFuZ2UoeCk7XG4gICAgICAgICAgICBueSA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh5KTtcbiAgICAgICAgICAgIG56ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHopO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb2hlcmVudC1ub2lzZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlZWQgPSAodGhpcy5zZWVkICsgb2N0YXZlKSAmIDB4N2ZmZmZmZmY7XG4gICAgICAgICAgICBzaWduYWwgPSBub2lzZWdlbl8xLmRlZmF1bHQuZ3JhZGllbnRDb2hlcmVudE5vaXNlM0QobngsIG55LCBueiwgc2VlZCwgdGhpcy5xdWFsaXR5KTtcbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJpZGdlcy5cbiAgICAgICAgICAgIHNpZ25hbCA9IE1hdGguYWJzKHNpZ25hbCk7XG4gICAgICAgICAgICBzaWduYWwgPSB0aGlzLm9mZnNldCAtIHNpZ25hbDtcbiAgICAgICAgICAgIC8vIFNxdWFyZSB0aGUgc2lnbmFsIHRvIGluY3JlYXNlIHRoZSBzaGFycG5lc3Mgb2YgdGhlIHJpZGdlcy5cbiAgICAgICAgICAgIHNpZ25hbCAqPSBzaWduYWw7XG4gICAgICAgICAgICAvLyBUaGUgd2VpZ2h0aW5nIGZyb20gdGhlIHByZXZpb3VzIG9jdGF2ZSBpcyBhcHBsaWVkIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAgICAvLyBMYXJnZXIgdmFsdWVzIGhhdmUgaGlnaGVyIHdlaWdodHMsIHByb2R1Y2luZyBzaGFycCBwb2ludHMgYWxvbmcgdGhlXG4gICAgICAgICAgICAvLyByaWRnZXMuXG4gICAgICAgICAgICBzaWduYWwgKj0gd2VpZ2h0O1xuICAgICAgICAgICAgLy8gV2VpZ2h0IHN1Y2Nlc3NpdmUgY29udHJpYnV0aW9ucyBieSB0aGUgcHJldmlvdXMgc2lnbmFsLlxuICAgICAgICAgICAgd2VpZ2h0ID0gc2lnbmFsICogdGhpcy5nYWluO1xuICAgICAgICAgICAgLy8gQ2xhbXAgdmFsdWUgdG8gd2l0aGluIDAgYW5kIDFcbiAgICAgICAgICAgIHdlaWdodCA9IHV0aWxfMS5jbGFtcCh3ZWlnaHQsIDAuMCwgMS4wKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgc2lnbmFsIHRvIHRoZSBvdXRwdXQgdmFsdWUuXG4gICAgICAgICAgICB2YWx1ZSArPSAoc2lnbmFsICogdGhpcy53ZWlnaHRzW29jdGF2ZV0pO1xuICAgICAgICAgICAgLy8gR28gdG8gdGhlIG5leHQgb2N0YXZlLlxuICAgICAgICAgICAgeCAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICB5ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHogKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxLjI1KSAtIDEuMDtcbiAgICB9O1xuICAgIFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX0ZSRVFVRU5DWSA9IDEuMDtcbiAgICBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9MQUNVTkFSSVRZID0gMi4wO1xuICAgIFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX09DVEFWRV9DT1VOVCA9IDY7XG4gICAgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfUVVBTElUWSA9IG5vaXNlZ2VuXzEuUXVhbGl0eS5TdGFuZGFyZDtcbiAgICBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9TRUVEID0gMDtcbiAgICBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9PRkZTRVQgPSAxLjA7XG4gICAgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfR0FJTiA9IDIuMDtcbiAgICBSaWRnZWRNdWx0aS5SSURHRURfTUFYX09DVEFWRSA9IDMwO1xuICAgIHJldHVybiBSaWRnZWRNdWx0aTtcbn0oR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmlkZ2VkTXVsdGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdlbmVyYXRvck1vZHVsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dlbmVyYXRvck1vZHVsZVwiKSk7XG4vKipcbiAqIE5vaXNlIG1vZHVsZSB0aGF0IG91dHB1dHMgY29uY2VudHJpYyBzcGhlcmVzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIG91dHB1dHMgY29uY2VudHJpYyBzcGhlcmVzIGNlbnRlcmVkIG9uIHRoZSBvcmlnaW5cbiAqIGxpa2UgdGhlIGNvbmNlbnRyaWMgcmluZ3Mgb2YgYW4gb25pb24uXG4gKlxuICogVGhlIGZpcnN0IHNwaGVyZSBoYXMgYSByYWRpdXMgb2YgMS4wLiAgRWFjaCBzdWJzZXF1ZW50IHNwaGVyZSBoYXMgYVxuICogcmFkaXVzIHRoYXQgaXMgMS4wIHVuaXQgbGFyZ2VyIHRoYW4gdGhlIHByZXZpb3VzIHNwaGVyZS5cbiAqXG4gKiBUaGUgb3V0cHV0IHZhbHVlIGZyb20gdGhpcyBub2lzZSBtb2R1bGUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgZGlzdGFuY2VcbiAqIGJldHdlZW4gdGhlIGlucHV0IHZhbHVlIGFuZCB0aGUgdGhlIG5lYXJlc3Qgc3BoZXJpY2FsIHN1cmZhY2UuICBUaGVcbiAqIGlucHV0IHZhbHVlcyB0aGF0IGFyZSBsb2NhdGVkIG9uIGEgc3BoZXJpY2FsIHN1cmZhY2UgYXJlIGdpdmVuIHRoZVxuICogb3V0cHV0IHZhbHVlIDEuMCBhbmQgdGhlIGlucHV0IHZhbHVlcyB0aGF0IGFyZSBlcXVpZGlzdGFudCBmcm9tIHR3b1xuICogc3BoZXJpY2FsIHN1cmZhY2VzIGFyZSBnaXZlbiB0aGUgb3V0cHV0IHZhbHVlIC0xLjAuXG4gKlxuICogQW4gYXBwbGljYXRpb24gY2FuIGNoYW5nZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBjb25jZW50cmljIHNwaGVyZXMuXG4gKiBJbmNyZWFzaW5nIHRoZSBmcmVxdWVuY3kgcmVkdWNlcyB0aGUgZGlzdGFuY2VzIGJldHdlZW4gc3BoZXJlcy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSwgbW9kaWZpZWQgd2l0aCBzb21lIGxvdy1mcmVxdWVuY3ksIGxvdy1wb3dlclxuICogdHVyYnVsZW5jZSwgaXMgdXNlZnVsIGZvciBnZW5lcmF0aW5nIGFnYXRlLWxpa2UgdGV4dHVyZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgZG9lcyBub3QgcmVxdWlyZSBhbnkgc291cmNlIG1vZHVsZXMuXG4gKi9cbnZhciBTcGhlcmVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTcGhlcmVzLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmcmVxdWVuY3kgRnJlcXVlbmN5IG9mIHRoZSBjb25jZW50cmljIHNwaGVyZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU3BoZXJlcyhmcmVxdWVuY3kpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5IHx8IFNwaGVyZXMuREVGQVVMVF9TUEhFUkVTX0ZSRVFVRU5DWTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTcGhlcmVzLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHggPSAoeCAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeSA9ICh5ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB6ID0gKHogKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHZhciBkaXN0RnJvbUNlbnRlciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICAgICAgICB2YXIgZGlzdEZyb21TbWFsbGVyU3BoZXJlID0gZGlzdEZyb21DZW50ZXIgLSBNYXRoLmZsb29yKGRpc3RGcm9tQ2VudGVyKTtcbiAgICAgICAgdmFyIGRpc3RGcm9tTGFyZ2VyU3BoZXJlID0gMS4wIC0gZGlzdEZyb21TbWFsbGVyU3BoZXJlO1xuICAgICAgICB2YXIgbmVhcmVzdERpc3QgPSBNYXRoLm1pbihkaXN0RnJvbVNtYWxsZXJTcGhlcmUsIGRpc3RGcm9tTGFyZ2VyU3BoZXJlKTtcbiAgICAgICAgcmV0dXJuIDEuMCAtIChuZWFyZXN0RGlzdCAqIDQuMCk7IC8vIFB1dHMgaXQgaW4gdGhlIC0xLjAgdG8gKzEuMCByYW5nZS5cbiAgICB9O1xuICAgIFNwaGVyZXMuREVGQVVMVF9TUEhFUkVTX0ZSRVFVRU5DWSA9IDQuMDtcbiAgICByZXR1cm4gU3BoZXJlcztcbn0oR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BoZXJlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWF0aGNvbnN0c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLy4uLy4uL21hdGhjb25zdHNcIikpO1xudmFyIG5vaXNlZ2VuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vLi4vbm9pc2VnZW5cIikpO1xudmFyIEdlbmVyYXRvck1vZHVsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dlbmVyYXRvck1vZHVsZVwiKSk7XG4vKipcbiAqIE5vaXNlIG1vZHVsZSB0aGF0IG91dHB1dHMgVm9yb25vaSBjZWxscy5cbiAqXG4gKiBJbiBtYXRoZW1hdGljcywgYSAqVm9yb25vaSBjZWxsKiBpcyBhIHJlZ2lvbiBjb250YWluaW5nIGFsbCB0aGVcbiAqIHBvaW50cyB0aGF0IGFyZSBjbG9zZXIgdG8gYSBzcGVjaWZpYyAqc2VlZCBwb2ludCogdGhhbiB0byBhbnlcbiAqIG90aGVyIHNlZWQgcG9pbnQuICBUaGVzZSBjZWxscyBtZXNoIHdpdGggb25lIGFub3RoZXIsIHByb2R1Y2luZ1xuICogcG9seWdvbi1saWtlIGZvcm1hdGlvbnMuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBub2lzZSBtb2R1bGUgcmFuZG9tbHkgcGxhY2VzIGEgc2VlZCBwb2ludCB3aXRoaW5cbiAqIGVhY2ggdW5pdCBjdWJlLiAgQnkgbW9kaWZ5aW5nIHRoZSAqZnJlcXVlbmN5KiBvZiB0aGUgc2VlZCBwb2ludHMsXG4gKiBhbiBhcHBsaWNhdGlvbiBjYW4gY2hhbmdlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHNlZWQgcG9pbnRzLiAgVGhlXG4gKiBoaWdoZXIgdGhlIGZyZXF1ZW5jeSwgdGhlIGNsb3NlciB0b2dldGhlciB0aGlzIG5vaXNlIG1vZHVsZSBwbGFjZXNcbiAqIHRoZSBzZWVkIHBvaW50cywgd2hpY2ggcmVkdWNlcyB0aGUgc2l6ZSBvZiB0aGUgY2VsbHMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgYXNzaWducyBlYWNoIFZvcm9ub2kgY2VsbCB3aXRoIGEgcmFuZG9tIGNvbnN0YW50XG4gKiB2YWx1ZSBmcm9tIGEgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb24uICBUaGUgKmRpc3BsYWNlbWVudCB2YWx1ZSpcbiAqIGNvbnRyb2xzIHRoZSByYW5nZSBvZiByYW5kb20gdmFsdWVzIHRvIGFzc2lnbiB0byBlYWNoIGNlbGwuICBUaGVcbiAqIHJhbmdlIG9mIHJhbmRvbSB2YWx1ZXMgaXMgKy8tIHRoZSBkaXNwbGFjZW1lbnQgdmFsdWUuXG4gKlxuICogVG8gbW9kaWZ5IHRoZSByYW5kb20gcG9zaXRpb25zIG9mIHRoZSBzZWVkIHBvaW50cywgdXBkYXRlIHRoZSBzZWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGNhbiBvcHRpb25hbGx5IGFkZCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgbmVhcmVzdFxuICogc2VlZCB0byB0aGUgb3V0cHV0IHZhbHVlLiAgVG8gZW5hYmxlIHRoaXMgZmVhdHVyZSwgc2V0IHRoZSBgZGlzdGFuY2VgIGZsYWdcbiAqIHRvIHRydWUuICBUaGlzIGNhdXNlcyB0aGUgcG9pbnRzIGluIHRoZSBWb3Jvbm9pIGNlbGxzXG4gKiB0byBpbmNyZWFzZSBpbiB2YWx1ZSB0aGUgZnVydGhlciBhd2F5IHRoYXQgcG9pbnQgaXMgZnJvbSB0aGUgbmVhcmVzdFxuICogc2VlZCBwb2ludC5cbiAqXG4gKiBWb3Jvbm9pIGNlbGxzIGFyZSBvZnRlbiB1c2VkIHRvIGdlbmVyYXRlIGNyYWNrZWQtbXVkIHRlcnJhaW5cbiAqIGZvcm1hdGlvbnMgb3IgY3J5c3RhbC1saWtlIHRleHR1cmVzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIHJlcXVpcmVzIG5vIHNvdXJjZSBtb2R1bGVzLlxuICovXG52YXIgVm9yb25vaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVm9yb25vaSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmcmVxdWVuY3kgRnJlcXVlbmN5IG9mIHRoZSBzZWVkIHBvaW50cy5cbiAgICAgKiBAcGFyYW0gZGlzcGxhY2VtZW50IFNjYWxlIG9mIHRoZSByYW5kb20gZGlzcGxhY2VtZW50IHRvIGFwcGx5IHRvIGVhY2ggVm9yb25vaSBjZWxsLlxuICAgICAqIEBwYXJhbSBkaXN0YW5jZSBEZXRlcm1pbmVzIGlmIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBuZWFyZXN0IHNlZWQgcG9pbnQgaXMgYXBwbGllZCB0byB0aGUgb3V0cHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBzZWVkIFNlZWQgdmFsdWUgdXNlZCBieSB0aGUgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHNlZWQgcG9pbnRzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFZvcm9ub2koZnJlcXVlbmN5LCBkaXNwbGFjZW1lbnQsIGRpc3RhbmNlLCBzZWVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeSB8fCBWb3Jvbm9pLkRFRkFVTFRfVk9ST05PSV9GUkVRVUVOQ1k7XG4gICAgICAgIF90aGlzLmRpc3BsYWNlbWVudCA9IGRpc3BsYWNlbWVudCB8fCBWb3Jvbm9pLkRFRkFVTFRfVk9ST05PSV9ESVNQTEFDRU1FTlQ7XG4gICAgICAgIF90aGlzLmRpc3RhbmNlID0gZGlzdGFuY2UgfHwgZmFsc2U7XG4gICAgICAgIF90aGlzLnNlZWQgPSBzZWVkIHx8IFZvcm9ub2kuREVGQVVMVF9WT1JPTk9JX1NFRUQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBjb3VsZCBiZSBtb3JlIGVmZmljaWVudCBieSBjYWNoaW5nIHRoZSBzZWVkIHZhbHVlcy5cbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHogPSAoeiAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgdmFyIHhQb3MsIHlQb3MsIHpQb3MsIHhEaXN0LCB5RGlzdCwgekRpc3QsIGRpc3Q7XG4gICAgICAgIHZhciB4aSA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHZhciB5aSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIHZhciB6aSA9IE1hdGguZmxvb3Ioeik7XG4gICAgICAgIHZhciB4SW50ID0gKHggPiAwLjAgPyB4aSA6IHhpIC0gMSk7XG4gICAgICAgIHZhciB5SW50ID0gKHkgPiAwLjAgPyB5aSA6IHlpIC0gMSk7XG4gICAgICAgIHZhciB6SW50ID0gKHogPiAwLjAgPyB6aSA6IHppIC0gMSk7XG4gICAgICAgIHZhciBtaW5EaXN0ID0gMjE0NzQ4MzY0Ny4wO1xuICAgICAgICB2YXIgeENhbmRpZGF0ZSA9IDA7XG4gICAgICAgIHZhciB5Q2FuZGlkYXRlID0gMDtcbiAgICAgICAgdmFyIHpDYW5kaWRhdGUgPSAwO1xuICAgICAgICB2YXIgdmFsdWUgPSAwLjA7XG4gICAgICAgIC8vIEluc2lkZSBlYWNoIHVuaXQgY3ViZSwgdGhlcmUgaXMgYSBzZWVkIHBvaW50IGF0IGEgcmFuZG9tIHBvc2l0aW9uLiAgR29cbiAgICAgICAgLy8gdGhyb3VnaCBlYWNoIG9mIHRoZSBuZWFyYnkgY3ViZXMgdW50aWwgd2UgZmluZCBhIGN1YmUgd2l0aCBhIHNlZWQgcG9pbnRcbiAgICAgICAgLy8gdGhhdCBpcyBjbG9zZXN0IHRvIHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXG4gICAgICAgIGZvciAodmFyIHpDdXIgPSB6SW50IC0gMjsgekN1ciA8PSB6SW50ICsgMjsgekN1cisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB5Q3VyID0geUludCAtIDI7IHlDdXIgPD0geUludCArIDI7IHlDdXIrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHhDdXIgPSB4SW50IC0gMjsgeEN1ciA8PSB4SW50ICsgMjsgeEN1cisrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYW5kIGRpc3RhbmNlIHRvIHRoZSBzZWVkIHBvaW50IGluc2lkZSBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHVuaXQgY3ViZS5cbiAgICAgICAgICAgICAgICAgICAgeFBvcyA9ICh4Q3VyICsgbm9pc2VnZW5fMS5kZWZhdWx0LnZhbHVlTm9pc2UzRCh4Q3VyLCB5Q3VyLCB6Q3VyLCB0aGlzLnNlZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgeVBvcyA9ICh5Q3VyICsgbm9pc2VnZW5fMS5kZWZhdWx0LnZhbHVlTm9pc2UzRCh4Q3VyLCB5Q3VyLCB6Q3VyLCB0aGlzLnNlZWQgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIHpQb3MgPSAoekN1ciArIG5vaXNlZ2VuXzEuZGVmYXVsdC52YWx1ZU5vaXNlM0QoeEN1ciwgeUN1ciwgekN1ciwgdGhpcy5zZWVkICsgMikpO1xuICAgICAgICAgICAgICAgICAgICB4RGlzdCA9ICh4UG9zIC0geCk7XG4gICAgICAgICAgICAgICAgICAgIHlEaXN0ID0gKHlQb3MgLSB5KTtcbiAgICAgICAgICAgICAgICAgICAgekRpc3QgPSAoelBvcyAtIHopO1xuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gKHhEaXN0ICogeERpc3QgKyB5RGlzdCAqIHlEaXN0ICsgekRpc3QgKiB6RGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluRGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBzZWVkIHBvaW50IGlzIGNsb3NlciB0byBhbnkgb3RoZXJzIGZvdW5kIHNvIGZhciwgc28gcmVjb3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHNlZWQgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5EaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhDYW5kaWRhdGUgPSB4UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgeUNhbmRpZGF0ZSA9IHlQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB6Q2FuZGlkYXRlID0gelBvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZSkge1xuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkaXN0YW5jZSB0byB0aGUgbmVhcmVzdCBzZWVkIHBvaW50LlxuICAgICAgICAgICAgeERpc3QgPSB4Q2FuZGlkYXRlIC0geDtcbiAgICAgICAgICAgIHlEaXN0ID0geUNhbmRpZGF0ZSAtIHk7XG4gICAgICAgICAgICB6RGlzdCA9IHpDYW5kaWRhdGUgLSB6O1xuICAgICAgICAgICAgdmFsdWUgPSAoTWF0aC5zcXJ0KHhEaXN0ICogeERpc3QgKyB5RGlzdCAqIHlEaXN0ICsgekRpc3QgKiB6RGlzdCkpICogbWF0aGNvbnN0c18xLmRlZmF1bHQuU1FSVF8zIC0gMS4wO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBkaXN0YW5jZSB3aXRoIHRoZSBkaXNwbGFjZW1lbnQgdmFsdWUgYXBwbGllZC5cbiAgICAgICAgcmV0dXJuIHZhbHVlICsgKHRoaXMuZGlzcGxhY2VtZW50ICogbm9pc2VnZW5fMS5kZWZhdWx0LnZhbHVlTm9pc2UzRCgoTWF0aC5mbG9vcih4Q2FuZGlkYXRlKSksIChNYXRoLmZsb29yKHlDYW5kaWRhdGUpKSwgKE1hdGguZmxvb3IoekNhbmRpZGF0ZSkpKSk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLkRFRkFVTFRfVk9ST05PSV9ESVNQTEFDRU1FTlQgPSAxLjA7XG4gICAgVm9yb25vaS5ERUZBVUxUX1ZPUk9OT0lfRlJFUVVFTkNZID0gMS4wO1xuICAgIFZvcm9ub2kuREVGQVVMVF9WT1JPTk9JX1NFRUQgPSAwO1xuICAgIHJldHVybiBWb3Jvbm9pO1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWb3Jvbm9pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW50ZXJwb2xhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVycG9sYXRpb25cIikpO1xudmFyIHZlY3RvcnRhYmxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmVjdG9ydGFibGVcIikpO1xudmFyIFF1YWxpdHk7XG4oZnVuY3Rpb24gKFF1YWxpdHkpIHtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgY29oZXJlbnQgbm9pc2UgcXVpY2tseS4gIFdoZW4gYSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbiB3aXRoXG4gICAgICogTm9pc2VHZW4ucHJvdG90eXBlIHF1YWxpdHkgc2V0dGluZyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgYnVtcC1tYXAgaW1hZ2UsIHRoZXJlIGFyZVxuICAgICAqIG5vdGljZWFibGUgXCJjcmVhc2luZ1wiIGFydGlmYWN0cyBpbiB0aGUgcmVzdWx0aW5nIGltYWdlLiAgVGhpcyBpc1xuICAgICAqIGJlY2F1c2UgdGhlIGRlcml2YXRpdmUgb2YgdGhhdCBmdW5jdGlvbiBpcyBkaXNjb250aW51b3VzIGF0IGludGVnZXJcbiAgICAgKiBib3VuZGFyaWVzLlxuICAgICAqL1xuICAgIFF1YWxpdHlbUXVhbGl0eVtcIkZhc3RcIl0gPSAwXSA9IFwiRmFzdFwiO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBzdGFuZGFyZC1xdWFsaXR5IGNvaGVyZW50IG5vaXNlLiAgV2hlbiBhIGNvaGVyZW50LW5vaXNlXG4gICAgICogZnVuY3Rpb24gd2l0aCBOb2lzZUdlbi5wcm90b3R5cGUgcXVhbGl0eSBzZXR0aW5nIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBidW1wLW1hcFxuICAgICAqIGltYWdlLCB0aGVyZSBhcmUgc29tZSBtaW5vciBcImNyZWFzaW5nXCIgYXJ0aWZhY3RzIGluIHRoZSByZXN1bHRpbmdcbiAgICAgKiBpbWFnZS4gIFRoaXMgaXMgYmVjYXVzZSB0aGUgc2Vjb25kIGRlcml2YXRpdmUgb2YgdGhhdCBmdW5jdGlvbiBpc1xuICAgICAqIGRpc2NvbnRpbnVvdXMgYXQgaW50ZWdlciBib3VuZGFyaWVzLlxuICAgICAqL1xuICAgIFF1YWxpdHlbUXVhbGl0eVtcIlN0YW5kYXJkXCJdID0gMV0gPSBcIlN0YW5kYXJkXCI7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIHRoZSBiZXN0LXF1YWxpdHkgY29oZXJlbnQgbm9pc2UuICBXaGVuIGEgY29oZXJlbnQtbm9pc2VcbiAgICAgKiBmdW5jdGlvbiB3aXRoIE5vaXNlR2VuLnByb3RvdHlwZSBxdWFsaXR5IHNldHRpbmcgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIGJ1bXAtbWFwXG4gICAgICogaW1hZ2UsIHRoZXJlIGFyZSBubyBcImNyZWFzaW5nXCIgYXJ0aWZhY3RzIGluIHRoZSByZXN1bHRpbmcgaW1hZ2UuICBUaGlzXG4gICAgICogaXMgYmVjYXVzZSB0aGUgZmlyc3QgYW5kIHNlY29uZCBkZXJpdmF0aXZlcyBvZiB0aGF0IGZ1bmN0aW9uIGFyZVxuICAgICAqIGNvbnRpbnVvdXMgYXQgaW50ZWdlciBib3VuZGFyaWVzLlxuICAgICAqL1xuICAgIFF1YWxpdHlbUXVhbGl0eVtcIkJlc3RcIl0gPSAyXSA9IFwiQmVzdFwiO1xufSkoUXVhbGl0eSA9IGV4cG9ydHMuUXVhbGl0eSB8fCAoZXhwb3J0cy5RdWFsaXR5ID0ge30pKTtcbnZhciBOb2lzZUdlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2lzZUdlbigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGludGVnZXItbm9pc2UgdmFsdWUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgb2YgYVxuICAgICAqIHRocmVlLWRpbWVuc2lvbmFsIGlucHV0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIGludGVnZXIgeCBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSBUaGUgaW50ZWdlciB5IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IFRoZSBpbnRlZ2VyIHogY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgQSByYW5kb20gbnVtYmVyIHNlZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGludGVnZXItbm9pc2UgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHJhbmdlcyBmcm9tIDAgdG8gMjE0NzQ4MzY0Ny5cbiAgICAgKlxuICAgICAqIEEgbm9pc2UgZnVuY3Rpb24gZGlmZmVycyBmcm9tIGEgcmFuZG9tLW51bWJlciBnZW5lcmF0b3IgYmVjYXVzZSBpdFxuICAgICAqIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIG91dHB1dCB2YWx1ZSBpZiB0aGUgc2FtZSBpbnB1dCB2YWx1ZSBpcyBwYXNzZWRcbiAgICAgKiB0byBpdC5cbiAgICAgKi9cbiAgICBOb2lzZUdlbi5pbnRWYWx1ZU5vaXNlM0QgPSBmdW5jdGlvbiAoeCwgeSwgeiwgc2VlZCkge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIHogPSBNYXRoLmZsb29yKHopO1xuICAgICAgICBzZWVkID0gTWF0aC5mbG9vcihzZWVkKTtcbiAgICAgICAgLy8gQWxsIGNvbnN0YW50cyBhcmUgcHJpbWVzIGFuZCBtdXN0IHJlbWFpbiBwcmltZSBpbiBvcmRlciBmb3IgdGhpcyBub2lzZVxuICAgICAgICAvLyBmdW5jdGlvbiB0byB3b3JrIGNvcnJlY3RseS5cbiAgICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKChOb2lzZUdlbi5YX05PSVNFX0dFTiAqIHhcbiAgICAgICAgICAgICsgTm9pc2VHZW4uWV9OT0lTRV9HRU4gKiB5XG4gICAgICAgICAgICArIE5vaXNlR2VuLlpfTk9JU0VfR0VOICogelxuICAgICAgICAgICAgKyBOb2lzZUdlbi5TRUVEX05PSVNFX0dFTiAqIHNlZWQpXG4gICAgICAgICAgICAmIDB4N2ZmZmZmZmYpO1xuICAgICAgICBuID0gKG4gPj4gMTMpIF4gbjtcbiAgICAgICAgcmV0dXJuICgobiAqIChuICogbiAqIDYwNDkzICsgMTk5OTAzMDMpICsgMTM3NjMxMjU4OSkgJiAweDdmZmZmZmZmKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHZhbHVlLW5vaXNlIHZhbHVlIGZyb20gdGhlIGNvb3JkaW5hdGVzIG9mIGFcbiAgICAgKiB0aHJlZS1kaW1lbnNpb25hbCBpbnB1dCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IFRoZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBzZWVkIEEgcmFuZG9tIG51bWJlciBzZWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCB2YWx1ZS1ub2lzZSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgcmFuZ2VzIGZyb20gLTEuMCB0byArMS4wLlxuICAgICAqXG4gICAgICogQSBub2lzZSBmdW5jdGlvbiBkaWZmZXJzIGZyb20gYSByYW5kb20tbnVtYmVyIGdlbmVyYXRvciBiZWNhdXNlIGl0XG4gICAgICogYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgb3V0cHV0IHZhbHVlIGlmIHRoZSBzYW1lIGlucHV0IHZhbHVlIGlzIHBhc3NlZFxuICAgICAqIHRvIGl0LlxuICAgICAqL1xuICAgIE5vaXNlR2VuLnZhbHVlTm9pc2UzRCA9IGZ1bmN0aW9uICh4LCB5LCB6LCBzZWVkKSB7XG4gICAgICAgIGlmIChzZWVkID09PSB2b2lkIDApIHsgc2VlZCA9IDA7IH1cbiAgICAgICAgcmV0dXJuIDEuMCAtIChOb2lzZUdlbi5pbnRWYWx1ZU5vaXNlM0QoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSwgTWF0aC5mbG9vcih6KSwgTWF0aC5mbG9vcihzZWVkKSkgLyAxMDczNzQxODI0LjApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZ3JhZGllbnQtbm9pc2UgdmFsdWUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgb2YgYVxuICAgICAqIHRocmVlLWRpbWVuc2lvbmFsIGlucHV0IHZhbHVlIGFuZCB0aGUgaW50ZWdlciBjb29yZGluYXRlcyBvZiBhXG4gICAgICogbmVhcmJ5IHRocmVlLWRpbWVuc2lvbmFsIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZ4IFRoZSBmbG9hdGluZy1wb2ludCB4IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBmeSBUaGUgZmxvYXRpbmctcG9pbnQgeSBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gZnogVGhlIGZsb2F0aW5nLXBvaW50IHogY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIGl4IFRoZSBpbnRlZ2VyIHggY29vcmRpbmF0ZSBvZiBhIG5lYXJieSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gaXkgVGhlIGludGVnZXIgeSBjb29yZGluYXRlIG9mIGEgbmVhcmJ5IHZhbHVlLlxuICAgICAqIEBwYXJhbSBpeiBUaGUgaW50ZWdlciB6IGNvb3JkaW5hdGUgb2YgYSBuZWFyYnkgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHJhbmRvbSBudW1iZXIgc2VlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JhZGllbnQtbm9pc2UgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGZ4IGFuZCBpeCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbFxuICAgICAqIHRvIG9uZS5cbiAgICAgKlxuICAgICAqIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gZnkgYW5kIGl5IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsXG4gICAgICogdG8gb25lLlxuICAgICAqXG4gICAgICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBmeiBhbmQgaXogbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWxcbiAgICAgKiB0byBvbmUuXG4gICAgICpcbiAgICAgKiBBICpncmFkaWVudCotbm9pc2UgZnVuY3Rpb24gZ2VuZXJhdGVzIGJldHRlci1xdWFsaXR5IG5vaXNlIHRoYW4gYVxuICAgICAqICp2YWx1ZSotbm9pc2UgZnVuY3Rpb24uICBNb3N0IG5vaXNlIG1vZHVsZXMgdXNlIGdyYWRpZW50IG5vaXNlIGZvclxuICAgICAqIHRoaXMgcmVhc29uLCBhbHRob3VnaCBpdCB0YWtlcyBtdWNoIGxvbmdlciB0byBjYWxjdWxhdGUuXG4gICAgICpcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHJhbmdlcyBmcm9tIC0xLjAgdG8gKzEuMC5cbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGEgZ3JhZGllbnQtbm9pc2UgdmFsdWUgYnkgcGVyZm9ybWluZyB0aGVcbiAgICAgKiBmb2xsb3dpbmcgc3RlcHM6XG4gICAgICogLSBJdCBmaXJzdCBjYWxjdWxhdGVzIGEgcmFuZG9tIG5vcm1hbGl6ZWQgdmVjdG9yIGJhc2VkIG9uIHRoZVxuICAgICAqICAgbmVhcmJ5IGludGVnZXIgdmFsdWUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAgICogLSBJdCB0aGVuIGNhbGN1bGF0ZXMgYSBuZXcgdmFsdWUgYnkgYWRkaW5nIHRoaXMgdmVjdG9yIHRvIHRoZVxuICAgICAqICAgbmVhcmJ5IGludGVnZXIgdmFsdWUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAgICogLSBJdCB0aGVuIGNhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoZSBhYm92ZS1nZW5lcmF0ZWQgdmFsdWVcbiAgICAgKiAgIGFuZCB0aGUgZmxvYXRpbmctcG9pbnQgaW5wdXQgdmFsdWUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBBIG5vaXNlIGZ1bmN0aW9uIGRpZmZlcnMgZnJvbSBhIHJhbmRvbS1udW1iZXIgZ2VuZXJhdG9yIGJlY2F1c2UgaXRcbiAgICAgKiBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBvdXRwdXQgdmFsdWUgaWYgdGhlIHNhbWUgaW5wdXQgdmFsdWUgaXMgcGFzc2VkXG4gICAgICogdG8gaXQuXG4gICAgICovXG4gICAgTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEID0gZnVuY3Rpb24gKGZ4LCBmeSwgZnosIGl4LCBpeSwgaXosIHNlZWQpIHtcbiAgICAgICAgaWYgKHNlZWQgPT09IHZvaWQgMCkgeyBzZWVkID0gMTsgfVxuICAgICAgICAvLyBSYW5kb21seSBnZW5lcmF0ZSBhIGdyYWRpZW50IHZlY3RvciBnaXZlbiB0aGUgaW50ZWdlciBjb29yZGluYXRlcyBvZiB0aGVcbiAgICAgICAgLy8gaW5wdXQgdmFsdWUuICBUaGlzIGltcGxlbWVudGF0aW9uIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgYW5kIHVzZXMgaXRcbiAgICAgICAgLy8gYXMgYW4gaW5kZXggaW50byBhIG5vcm1hbGl6ZWQtdmVjdG9yIGxvb2t1cCB0YWJsZS5cbiAgICAgICAgdmFyIHZlY3RvckluZGV4ID0gTWF0aC5mbG9vcihOb2lzZUdlbi5YX05PSVNFX0dFTiAqIGl4ICtcbiAgICAgICAgICAgIE5vaXNlR2VuLllfTk9JU0VfR0VOICogaXkgK1xuICAgICAgICAgICAgTm9pc2VHZW4uWl9OT0lTRV9HRU4gKiBpeiArXG4gICAgICAgICAgICBOb2lzZUdlbi5TRUVEX05PSVNFX0dFTiAqIHNlZWQpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgdmVjdG9ySW5kZXggXj0gKHZlY3RvckluZGV4ID4+IE5vaXNlR2VuLlNISUZUX05PSVNFX0dFTik7XG4gICAgICAgIHZlY3RvckluZGV4ICY9IDB4ZmY7XG4gICAgICAgIHZhciB4dkdyYWRpZW50ID0gdmVjdG9ydGFibGVfMS5kZWZhdWx0Wyh2ZWN0b3JJbmRleCA8PCAyKV07XG4gICAgICAgIHZhciB5dkdyYWRpZW50ID0gdmVjdG9ydGFibGVfMS5kZWZhdWx0Wyh2ZWN0b3JJbmRleCA8PCAyKSArIDFdO1xuICAgICAgICB2YXIgenZHcmFkaWVudCA9IHZlY3RvcnRhYmxlXzEuZGVmYXVsdFsodmVjdG9ySW5kZXggPDwgMikgKyAyXTtcbiAgICAgICAgLy8gU2V0IHVwIHVzIGFub3RoZXIgdmVjdG9yIGVxdWFsIHRvIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gdmVjdG9yc1xuICAgICAgICAvLyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICAgICAgdmFyIHh2UG9pbnQgPSAoZnggLSBpeCk7XG4gICAgICAgIHZhciB5dlBvaW50ID0gKGZ5IC0gaXkpO1xuICAgICAgICB2YXIgenZQb2ludCA9IChmeiAtIGl6KTtcbiAgICAgICAgLy8gTm93IGNvbXB1dGUgdGhlIGRvdCBwcm9kdWN0IG9mIHRoZSBncmFkaWVudCB2ZWN0b3Igd2l0aCB0aGUgZGlzdGFuY2VcbiAgICAgICAgLy8gdmVjdG9yLiAgVGhlIHJlc3VsdGluZyB2YWx1ZSBpcyBncmFkaWVudCBub2lzZS4gIEFwcGx5IGEgc2NhbGluZyB2YWx1ZVxuICAgICAgICAvLyBzbyB0aGF0IHRoaXMgbm9pc2UgdmFsdWUgcmFuZ2VzIGZyb20gLTEuMCB0byAxLjAuXG4gICAgICAgIHJldHVybiAoKHh2R3JhZGllbnQgKiB4dlBvaW50KSArXG4gICAgICAgICAgICAoeXZHcmFkaWVudCAqIHl2UG9pbnQpICtcbiAgICAgICAgICAgICh6dkdyYWRpZW50ICogenZQb2ludCkpICogMi4xMjtcbiAgICB9O1xuICAgIC8vIEBUT0RPIHJlbW92ZSBgc2VlZGAgcGFyYW0sIGl0IGlzIG5vdCB1c2VkLiBPciBtYXliZSBpdCBzaG91bGQgYmU/XG4gICAgTm9pc2VHZW4uY29oZXJlbnROb2lzZTNEID0gZnVuY3Rpb24gKHgsIHksIHosIHNlZWQsIHF1YWxpdHksIGZ1bmMpIHtcbiAgICAgICAgaWYgKCFmdW5jKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBwcm9wZXIgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlZWQpIHtcbiAgICAgICAgICAgIHNlZWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VlZCA9IE1hdGguZmxvb3Ioc2VlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFxdWFsaXR5KSB7XG4gICAgICAgICAgICBxdWFsaXR5ID0gUXVhbGl0eS5TdGFuZGFyZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1YWxpdHkgPSBNYXRoLmZsb29yKHF1YWxpdHkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4aSA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHZhciB5aSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIHZhciB6aSA9IE1hdGguZmxvb3Ioeik7XG4gICAgICAgIC8vIENyZWF0ZSBhIHVuaXQtbGVuZ3RoIGN1YmUgYWxpZ25lZCBhbG9uZyBhbiBpbnRlZ2VyIGJvdW5kYXJ5LiAgVGhpcyBjdWJlXG4gICAgICAgIC8vIHN1cnJvdW5kcyB0aGUgaW5wdXQgcG9pbnQuXG4gICAgICAgIHZhciB4MCA9ICh4ID4gMC4wID8geGkgOiB4IC0gMSk7XG4gICAgICAgIHZhciB4MSA9IHgwICsgMTtcbiAgICAgICAgdmFyIHkwID0gKHkgPiAwLjAgPyB5aSA6IHkgLSAxKTtcbiAgICAgICAgdmFyIHkxID0geTAgKyAxO1xuICAgICAgICB2YXIgejAgPSAoeiA+IDAuMCA/IHppIDogeiAtIDEpO1xuICAgICAgICB2YXIgejEgPSB6MCArIDE7XG4gICAgICAgIC8vIE1hcCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaW5wdXQgdmFsdWUgYW5kIHRoZVxuICAgICAgICAvLyBjb29yZGluYXRlcyBvZiB0aGUgY3ViZSdzIG91dGVyLWxvd2VyLWxlZnQgdmVydGV4IG9udG8gYW4gUy1jdXJ2ZS5cbiAgICAgICAgdmFyIHhzID0gMCwgeXMgPSAwLCB6cyA9IDA7XG4gICAgICAgIHN3aXRjaCAocXVhbGl0eSkge1xuICAgICAgICAgICAgY2FzZSBRdWFsaXR5LkJlc3Q6XG4gICAgICAgICAgICAgICAgeHMgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5xdWludGljU0N1cnZlKHggLSB4MCk7XG4gICAgICAgICAgICAgICAgeXMgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5xdWludGljU0N1cnZlKHkgLSB5MCk7XG4gICAgICAgICAgICAgICAgenMgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5xdWludGljU0N1cnZlKHogLSB6MCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFF1YWxpdHkuU3RhbmRhcmQ6XG4gICAgICAgICAgICAgICAgeHMgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5jdWJpY1NDdXJ2ZSh4IC0geDApO1xuICAgICAgICAgICAgICAgIHlzID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQuY3ViaWNTQ3VydmUoeSAtIHkwKTtcbiAgICAgICAgICAgICAgICB6cyA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmN1YmljU0N1cnZlKHogLSB6MCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSBRdWFsaXR5LkZhc3Q6XG4gICAgICAgICAgICAgICAgeHMgPSB4IC0geDA7XG4gICAgICAgICAgICAgICAgeXMgPSB5IC0geTA7XG4gICAgICAgICAgICAgICAgenMgPSB6IC0gejA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlIHByb3ZpZGVkIGZ1bmN0aW9uIHRvIGludGVycG9sYXRlXG4gICAgICAgIHJldHVybiBmdW5jKHgwLCB5MCwgejAsIHgxLCB5MSwgejEsIHhzLCB5cywgenMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdmFsdWUtY29oZXJlbnQtbm9pc2UgdmFsdWUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgb2YgYVxuICAgICAqIHRocmVlLWRpbWVuc2lvbmFsIGlucHV0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHogVGhlIHogY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHJhbmRvbSBudW1iZXIgc2VlZC5cbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBUaGUgcXVhbGl0eSBvZiB0aGUgY29oZXJlbnQtbm9pc2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHZhbHVlLWNvaGVyZW50LW5vaXNlIHZhbHVlLlxuICAgICAqXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSByYW5nZXMgZnJvbSAtMS4wIHRvICsxLjAuXG4gICAgICpcbiAgICAgKiBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAqZ3JhZGllbnQqIG5vaXNlIGFuZFxuICAgICAqICp2YWx1ZSogbm9pc2UsIHNlZSB0aGUgY29tbWVudHMgZm9yIHRoZSBncmFkaWVudE5vaXNlM0QoKSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBOb2lzZUdlbi52YWx1ZUNvaGVyZW50Tm9pc2UzRCA9IGZ1bmN0aW9uICh4LCB5LCB6LCBzZWVkLCBxdWFsaXR5KSB7XG4gICAgICAgIHJldHVybiBOb2lzZUdlbi5jb2hlcmVudE5vaXNlM0QoeCwgeSwgeiwgc2VlZCwgcXVhbGl0eSwgZnVuY3Rpb24gKHgwLCB5MCwgejAsIHgxLCB5MSwgejEsIHhzLCB5cywgenMpIHtcbiAgICAgICAgICAgIC8vIE5vdyBjYWxjdWxhdGUgdGhlIG5vaXNlIHZhbHVlcyBhdCBlYWNoIHZlcnRleCBvZiB0aGUgY3ViZS4gIFRvIGdlbmVyYXRlXG4gICAgICAgICAgICAvLyB0aGUgY29oZXJlbnQtbm9pc2UgdmFsdWUgYXQgdGhlIGlucHV0IHBvaW50LCBpbnRlcnBvbGF0ZSB0aGVzZSBlaWdodFxuICAgICAgICAgICAgLy8gbm9pc2UgdmFsdWVzIHVzaW5nIHRoZSBTLWN1cnZlIHZhbHVlIGFzIHRoZSBpbnRlcnBvbGFudCAodHJpbGluZWFyXG4gICAgICAgICAgICAvLyBpbnRlcnBvbGF0aW9uLilcbiAgICAgICAgICAgIHZhciBuMCwgbjEsIGl4MCwgaXgxLCBpeTAsIGl5MTtcbiAgICAgICAgICAgIG4wID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgwLCB5MCwgejAsIHNlZWQpO1xuICAgICAgICAgICAgbjEgPSBOb2lzZUdlbi52YWx1ZU5vaXNlM0QoeDEsIHkwLCB6MCwgc2VlZCk7XG4gICAgICAgICAgICBpeDAgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIobjAsIG4xLCB4cyk7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLnZhbHVlTm9pc2UzRCh4MCwgeTEsIHowLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgxLCB5MSwgejAsIHNlZWQpO1xuICAgICAgICAgICAgaXgxID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgaXkwID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKGl4MCwgaXgxLCB5cyk7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLnZhbHVlTm9pc2UzRCh4MCwgeTAsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgxLCB5MCwgejEsIHNlZWQpO1xuICAgICAgICAgICAgaXgwID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgbjAgPSBOb2lzZUdlbi52YWx1ZU5vaXNlM0QoeDAsIHkxLCB6MSwgc2VlZCk7XG4gICAgICAgICAgICBuMSA9IE5vaXNlR2VuLnZhbHVlTm9pc2UzRCh4MSwgeTEsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIGl4MSA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihuMCwgbjEsIHhzKTtcbiAgICAgICAgICAgIGl5MSA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihpeDAsIGl4MSwgeXMpO1xuICAgICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihpeTAsIGl5MSwgenMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGdyYWRpZW50LWNvaGVyZW50LW5vaXNlIHZhbHVlIGZyb20gdGhlIGNvb3JkaW5hdGVzIG9mIGFcbiAgICAgKiB0aHJlZS1kaW1lbnNpb25hbCBpbnB1dCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IFRoZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSByYW5kb20gbnVtYmVyIHNlZWQuXG4gICAgICogQHBhcmFtIHF1YWxpdHkgVGhlIHF1YWxpdHkgb2YgdGhlIGNvaGVyZW50LW5vaXNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncmFkaWVudC1jb2hlcmVudC1ub2lzZSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgcmFuZ2VzIGZyb20gLTEuMCB0byArMS4wLlxuICAgICAqXG4gICAgICogRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gKmdyYWRpZW50KiBub2lzZSBhbmRcbiAgICAgKiAqdmFsdWUqIG5vaXNlLCBzZWUgdGhlIGNvbW1lbnRzIGZvciB0aGUgZ3JhZGllbnROb2lzZTNEKCkgZnVuY3Rpb24uXG4gICAgICovXG4gICAgTm9pc2VHZW4uZ3JhZGllbnRDb2hlcmVudE5vaXNlM0QgPSBmdW5jdGlvbiAoeCwgeSwgeiwgc2VlZCwgcXVhbGl0eSkge1xuICAgICAgICByZXR1cm4gTm9pc2VHZW4uY29oZXJlbnROb2lzZTNEKHgsIHksIHosIHNlZWQsIHF1YWxpdHksIGZ1bmN0aW9uICh4MCwgeTAsIHowLCB4MSwgeTEsIHoxLCB4cywgeXMsIHpzKSB7XG4gICAgICAgICAgICAvLyBOb3cgY2FsY3VsYXRlIHRoZSBub2lzZSB2YWx1ZXMgYXQgZWFjaCB2ZXJ0ZXggb2YgdGhlIGN1YmUuICBUbyBnZW5lcmF0ZVxuICAgICAgICAgICAgLy8gdGhlIGNvaGVyZW50LW5vaXNlIHZhbHVlIGF0IHRoZSBpbnB1dCBwb2ludCwgaW50ZXJwb2xhdGUgdGhlc2UgZWlnaHRcbiAgICAgICAgICAgIC8vIG5vaXNlIHZhbHVlcyB1c2luZyB0aGUgUy1jdXJ2ZSB2YWx1ZSBhcyB0aGUgaW50ZXJwb2xhbnQgKHRyaWxpbmVhclxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvbi4pXG4gICAgICAgICAgICB2YXIgbjAsIG4xLCBpeDAsIGl4MSwgaXkwLCBpeTE7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MCwgeTAsIHowLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEKHgsIHksIHosIHgxLCB5MCwgejAsIHNlZWQpO1xuICAgICAgICAgICAgaXgwID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgbjAgPSBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QoeCwgeSwgeiwgeDAsIHkxLCB6MCwgc2VlZCk7XG4gICAgICAgICAgICBuMSA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MSwgeTEsIHowLCBzZWVkKTtcbiAgICAgICAgICAgIGl4MSA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihuMCwgbjEsIHhzKTtcbiAgICAgICAgICAgIGl5MCA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihpeDAsIGl4MSwgeXMpO1xuICAgICAgICAgICAgbjAgPSBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QoeCwgeSwgeiwgeDAsIHkwLCB6MSwgc2VlZCk7XG4gICAgICAgICAgICBuMSA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MSwgeTAsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIGl4MCA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihuMCwgbjEsIHhzKTtcbiAgICAgICAgICAgIG4wID0gTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEKHgsIHksIHosIHgwLCB5MSwgejEsIHNlZWQpO1xuICAgICAgICAgICAgbjEgPSBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QoeCwgeSwgeiwgeDEsIHkxLCB6MSwgc2VlZCk7XG4gICAgICAgICAgICBpeDEgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIobjAsIG4xLCB4cyk7XG4gICAgICAgICAgICBpeTEgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIoaXgwLCBpeDEsIHlzKTtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIoaXkwLCBpeTEsIHpzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBDb25zdGFudHNcbiAgICBOb2lzZUdlbi5YX05PSVNFX0dFTiA9IDE2MTk7XG4gICAgTm9pc2VHZW4uWV9OT0lTRV9HRU4gPSAzMTMzNztcbiAgICBOb2lzZUdlbi5aX05PSVNFX0dFTiA9IDY5NzE7XG4gICAgTm9pc2VHZW4uU0VFRF9OT0lTRV9HRU4gPSAxMDEzO1xuICAgIE5vaXNlR2VuLlNISUZUX05PSVNFX0dFTiA9IDg7XG4gICAgcmV0dXJuIE5vaXNlR2VuO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5vaXNlR2VuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFR1cGxlIGNsYXNzLiBGb3Igc3RvcmluZyBhIHBhaXIgb2YgdmFsdWVzLlxuICovXG52YXIgVHVwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGl0ZW0xIEZpcnN0IGl0ZW0gaW4gcGFpci5cbiAgICAgKiBAcGFyYW0gaXRlbTIgU2Vjb25kIGl0ZW0gaW4gcGFpci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUdXBsZShpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgdGhpcy5pdGVtMSA9IGl0ZW0xO1xuICAgICAgICB0aGlzLml0ZW0yID0gaXRlbTI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgdHVwbGUgaW4gYSBwcmV0dHkgZm9ybWF0LlxuICAgICAqIEBleGFtcGxlIFwiWzEsIDJdXCJcbiAgICAgKi9cbiAgICBUdXBsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIHRoaXMuaXRlbTEgKyBcIiwgXCIgKyB0aGlzLml0ZW0yICsgXCJdXCI7XG4gICAgfTtcbiAgICByZXR1cm4gVHVwbGU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHVwbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQ2xhbXAgYSB2YWx1ZSB0byB3aXRoaW4gYSBsb3dlciBhbmQgdXBwZXIgYm91bmQuXG4gKiBJZiB0aGUgdmFsdWUgaXMgbG93ZXIgdGhhbiB0aGUgbG93ZXIgYm91bmQsIHRoZSBsb3dlciBib3VuZCBpcyByZXR1cm5lZC5cbiAqIElmIHRoZSB2YWx1ZSBpcyBhYm92ZSB0aGUgdXBwZXIgYm91bmQsIHRoZSB1cHBlciBib3VuZCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNsYW1wZWQuXG4gKiBAcGFyYW0gbG93ZXJCb3VuZCBUaGUgbG93ZXIgYm91bmQgdG8gcmVzdHJpY3QgdGhlIHZhbHVlIHRvLlxuICogQHBhcmFtIHVwcGVyQm91bmQgVGhlIHVwcGVyIGJvdW5kIHRvIHJlc3RyaWN0IHRoZSB2YWx1ZSB0by5cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgICBpZiAodmFsdWUgPCBsb3dlckJvdW5kKSB7XG4gICAgICAgIHJldHVybiBsb3dlckJvdW5kO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSA+IHVwcGVyQm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHVwcGVyQm91bmQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gY2xhbXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjbGFtcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NsYW1wXCIpKTtcbmV4cG9ydHMuY2xhbXAgPSBjbGFtcF8xLmRlZmF1bHQ7XG52YXIgbWFrZUludDMyUmFuZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlSW50MzJSYW5nZVwiKSk7XG5leHBvcnRzLm1ha2VJbnQzMlJhbmdlID0gbWFrZUludDMyUmFuZ2VfMS5kZWZhdWx0O1xudmFyIFR1cGxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHVwbGVcIikpO1xuZXhwb3J0cy5UdXBsZSA9IFR1cGxlXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBNb2RpZmllcyBhIGZsb2F0aW5nLXBvaW50IHZhbHVlIHNvIHRoYXQgaXQgY2FuIGJlIHN0b3JlZCBpbiBhXG4gKiBpbnQzMiB2YXJpYWJsZS5cbiAqXG4gKiBAcGFyYW0gbiBBIGZsb2F0aW5nLXBvaW50IG51bWJlci5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyLlxuICpcbiAqIEluIGxpYm5vaXNlLCB0aGUgbm9pc2UtZ2VuZXJhdGluZyBhbGdvcml0aG1zIGFyZSBhbGwgaW50ZWdlci1iYXNlZDtcbiAqIHRoZXkgdXNlIHZhcmlhYmxlcyBvZiB0eXBlIGludDMyLiAgQmVmb3JlIGNhbGxpbmcgYSBub2lzZVxuICogZnVuY3Rpb24sIHBhc3MgdGhlIHgsIHksIGFuZCB6IGNvb3JkaW5hdGVzIHRvIHRoaXMgZnVuY3Rpb24gdG9cbiAqIGVuc3VyZSB0aGF0IHRoZXNlIGNvb3JkaW5hdGVzIGNhbiBiZSBjYXN0IHRvIGEgaW50MzIgdmFsdWUuXG4gKlxuICogQWx0aG91Z2ggeW91IGNvdWxkIGRvIGEgc3RyYWlnaHQgY2FzdCBmcm9tIGRvdWJsZSB0byBpbnQzMiwgdGhlXG4gKiByZXN1bHRpbmcgdmFsdWUgbWF5IGRpZmZlciBiZXR3ZWVuIHBsYXRmb3Jtcy4gIEJ5IHVzaW5nIHRoaXMgZnVuY3Rpb24sXG4gKiB5b3UgZW5zdXJlIHRoYXQgdGhlIHJlc3VsdGluZyB2YWx1ZSBpcyBpZGVudGljYWwgYmV0d2VlbiBwbGF0Zm9ybXMuXG4gKlxuICogQFRPRE8gSSdtIG5vdCBzdXJlIHRoaXMgaXMgbmVjZXNzYXJ5IGluIEphdmFTY3JpcHQuXG4gKiAgSG93IGNhbiB3ZSB0ZXN0IHRoYXQgcmVtb3ZpbmcgdGhpcyBpcyBzYWZlP1xuICovXG5mdW5jdGlvbiBtYWtlSW50MzJSYW5nZShuKSB7XG4gICAgaWYgKG4gPj0gMTA3Mzc0MTgyNC4wKSB7XG4gICAgICAgIHJldHVybiAoMi4wICogKG4gJSAxMDczNzQxODI0LjApKSAtIDEwNzM3NDE4MjQuMDtcbiAgICB9XG4gICAgZWxzZSBpZiAobiA8PSAtMTA3Mzc0MTgyNC4wKSB7XG4gICAgICAgIHJldHVybiAoMi4wICogKG4gJSAxMDczNzQxODI0LjApKSArIDEwNzM3NDE4MjQuMDtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtYWtlSW50MzJSYW5nZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFZlY3RvclRhYmxlID0gW1xuICAgIC0wLjc2Mzg3NCwgLTAuNTk2NDM5LCAtMC4yNDY0ODksIDAuMCxcbiAgICAwLjM5NjA1NSwgMC45MDQ1MTgsIC0wLjE1ODA3MywgMC4wLFxuICAgIC0wLjQ5OTAwNCwgLTAuODY2NSwgLTAuMDEzMTYzMSwgMC4wLFxuICAgIDAuNDY4NzI0LCAtMC44MjQ3NTYsIDAuMzE2MzQ2LCAwLjAsXG4gICAgMC44Mjk1OTgsIDAuNDMxOTUsIDAuMzUzODE2LCAwLjAsXG4gICAgLTAuNDU0NDczLCAwLjYyOTQ5NywgLTAuNjMwMjI4LCAwLjAsXG4gICAgLTAuMTYyMzQ5LCAtMC44Njk5NjIsIC0wLjQ2NTYyOCwgMC4wLFxuICAgIDAuOTMyODA1LCAwLjI1MzQ1MSwgMC4yNTYxOTgsIDAuMCxcbiAgICAtMC4zNDU0MTksIDAuOTI3Mjk5LCAtMC4xNDQyMjcsIDAuMCxcbiAgICAtMC43MTUwMjYsIC0wLjI5MzY5OCwgLTAuNjM0NDEzLCAwLjAsXG4gICAgLTAuMjQ1OTk3LCAwLjcxNzQ2NywgLTAuNjUxNzExLCAwLjAsXG4gICAgLTAuOTY3NDA5LCAtMC4yNTA0MzUsIC0wLjAzNzQ1MSwgMC4wLFxuICAgIDAuOTAxNzI5LCAwLjM5NzEwOCwgLTAuMTcwODUyLCAwLjAsXG4gICAgMC44OTI2NTcsIC0wLjA3MjA2MjIsIC0wLjQ0NDkzOCwgMC4wLFxuICAgIDAuMDI2MDA4NCwgLTAuMDM2MTcwMSwgMC45OTkwMDcsIDAuMCxcbiAgICAwLjk0OTEwNywgLTAuMTk0ODYsIDAuMjQ3NDM5LCAwLjAsXG4gICAgMC40NzE4MDMsIC0wLjgwNzA2NCwgLTAuMzU1MDM2LCAwLjAsXG4gICAgMC44Nzk3MzcsIDAuMTQxODQ1LCAwLjQ1MzgwOSwgMC4wLFxuICAgIDAuNTcwNzQ3LCAwLjY5NjQxNSwgMC40MzUwMzMsIDAuMCxcbiAgICAtMC4xNDE3NTEsIC0wLjk4ODIzMywgLTAuMDU3NDU4NCwgMC4wLFxuICAgIC0wLjU4MjE5LCAtMC4wMzAzMDA1LCAwLjgxMjQ4OCwgMC4wLFxuICAgIC0wLjYwOTIyLCAwLjIzOTQ4MiwgLTAuNzU1OTc1LCAwLjAsXG4gICAgMC4yOTkzOTQsIC0wLjE5NzA2NiwgLTAuOTMzNTU3LCAwLjAsXG4gICAgLTAuODUxNjE1LCAtMC4yMjA3MDIsIC0wLjQ3NTQ0LCAwLjAsXG4gICAgMC44NDg4ODYsIDAuMzQxODI5LCAtMC40MDMxNjksIDAuMCxcbiAgICAtMC4xNTYxMjksIC0wLjY4NzI0MSwgMC43MDk0NTMsIDAuMCxcbiAgICAtMC42NjU2NTEsIDAuNjI2NzI0LCAwLjQwNTEyNCwgMC4wLFxuICAgIDAuNTk1OTE0LCAtMC42NzQ1ODIsIDAuNDM1NjksIDAuMCxcbiAgICAwLjE3MTAyNSwgLTAuNTA5MjkyLCAwLjg0MzQyOCwgMC4wLFxuICAgIDAuNzg2MDUsIDAuNTM2NDE0LCAtMC4zMDcyMjIsIDAuMCxcbiAgICAwLjE4OTA1LCAtMC43OTE2MTMsIDAuNTgxMDQyLCAwLjAsXG4gICAgLTAuMjk0OTE2LCAwLjg0NDk5NCwgMC40NDYxMDUsIDAuMCxcbiAgICAwLjM0MjAzMSwgLTAuNTg3MzYsIC0wLjczMzUsIDAuMCxcbiAgICAwLjU3MTU1LCAwLjc4NjksIDAuMjMyNjM1LCAwLjAsXG4gICAgMC44ODUwMjYsIC0wLjQwODIyMywgMC4yMjM3OTEsIDAuMCxcbiAgICAtMC43ODk1MTgsIDAuNTcxNjQ1LCAwLjIyMzM0NywgMC4wLFxuICAgIDAuNzc0NTcxLCAwLjMxNTY2LCAwLjU0ODA4NywgMC4wLFxuICAgIC0wLjc5Njk1LCAtMC4wNDMzNjAzLCAtMC42MDI0ODcsIDAuMCxcbiAgICAtMC4xNDI0MjUsIC0wLjQ3MzI0OSwgLTAuODY5MzM5LCAwLjAsXG4gICAgLTAuMDY5ODgzOCwgMC4xNzA0NDIsIDAuOTgyODg2LCAwLjAsXG4gICAgMC42ODc4MTUsIC0wLjQ4NDc0OCwgMC41NDAzMDYsIDAuMCxcbiAgICAwLjU0MzcwMywgLTAuNTM0NDQ2LCAtMC42NDcxMTIsIDAuMCxcbiAgICAwLjk3MTg2LCAwLjE4NDM5MSwgLTAuMTQ2NTg4LCAwLjAsXG4gICAgMC43MDcwODQsIDAuNDg1NzEzLCAtMC41MTM5MjEsIDAuMCxcbiAgICAwLjk0MjMwMiwgMC4zMzE5NDUsIDAuMDQzMzQ4LCAwLjAsXG4gICAgMC40OTkwODQsIDAuNTk5OTIyLCAwLjYyNTMwNywgMC4wLFxuICAgIC0wLjI4OTIwMywgMC4yMTExMDcsIDAuOTMzNywgMC4wLFxuICAgIDAuNDEyNDMzLCAtMC43MTY2NywgLTAuNTYyMzksIDAuMCxcbiAgICAwLjg3NzIxLCAtMC4wODI4MTYsIDAuNDcyOTEsIDAuMCxcbiAgICAtMC40MjA2ODUsIC0wLjIxNDI3OCwgMC44ODE1MzgsIDAuMCxcbiAgICAwLjc1MjU1OCwgLTAuMDM5MTU3OSwgMC42NTczNjEsIDAuMCxcbiAgICAwLjA3NjU3MjUsIC0wLjk5Njc4OSwgMC4wMjM0MDgyLCAwLjAsXG4gICAgLTAuNTQ0MzEyLCAtMC4zMDk0MzUsIC0wLjc3OTcyNywgMC4wLFxuICAgIC0wLjQ1NTM1OCwgLTAuNDE1NTcyLCAwLjc4NzM2OCwgMC4wLFxuICAgIC0wLjg3NDU4NiwgMC40ODM3NDYsIDAuMDMzMDEzMSwgMC4wLFxuICAgIDAuMjQ1MTcyLCAtMC4wODM4NjIzLCAwLjk2NTg0NiwgMC4wLFxuICAgIDAuMzgyMjkzLCAtMC40MzI4MTMsIDAuODE2NDEsIDAuMCxcbiAgICAtMC4yODc3MzUsIC0wLjkwNTUxNCwgMC4zMTE4NTMsIDAuMCxcbiAgICAtMC42Njc3MDQsIDAuNzA0OTU1LCAtMC4yMzkxODYsIDAuMCxcbiAgICAwLjcxNzg4NSwgLTAuNDY0MDAyLCAtMC41MTg5ODMsIDAuMCxcbiAgICAwLjk3NjM0MiwgLTAuMjE0ODk1LCAwLjAyNDAwNTMsIDAuMCxcbiAgICAtMC4wNzMzMDk2LCAtMC45MjExMzYsIDAuMzgyMjc2LCAwLjAsXG4gICAgLTAuOTg2Mjg0LCAwLjE1MTIyNCwgLTAuMDY2MTM3OSwgMC4wLFxuICAgIC0wLjg5OTMxOSwgLTAuNDI5NjcxLCAwLjA4MTI5MDgsIDAuMCxcbiAgICAwLjY1MjEwMiwgLTAuNzI0NjI1LCAwLjIyMjg5MywgMC4wLFxuICAgIDAuMjAzNzYxLCAwLjQ1ODAyMywgLTAuODY1MjcyLCAwLjAsXG4gICAgLTAuMDMwMzk2LCAwLjY5ODcyNCwgLTAuNzE0NzQ1LCAwLjAsXG4gICAgLTAuNDYwMjMyLCAwLjgzOTEzOCwgMC4yODk4ODcsIDAuMCxcbiAgICAtMC4wODk4NjAyLCAwLjgzNzg5NCwgMC41MzgzODYsIDAuMCxcbiAgICAtMC43MzE1OTUsIDAuMDc5Mzc4NCwgMC42NzcxMDIsIDAuMCxcbiAgICAtMC40NDcyMzYsIC0wLjc4ODM5NywgMC40MjIzODYsIDAuMCxcbiAgICAwLjE4NjQ4MSwgMC42NDU4NTUsIC0wLjc0MDMzNSwgMC4wLFxuICAgIC0wLjI1OTAwNiwgMC45MzU0NjMsIDAuMjQwNDY3LCAwLjAsXG4gICAgMC40NDU4MzksIDAuODE5NjU1LCAtMC4zNTk3MTIsIDAuMCxcbiAgICAwLjM0OTk2MiwgMC43NTUwMjIsIC0wLjU1NDQ5OSwgMC4wLFxuICAgIC0wLjk5NzA3OCwgLTAuMDM1OTU3NywgMC4wNjczOTc3LCAwLjAsXG4gICAgLTAuNDMxMTYzLCAtMC4xNDc1MTYsIC0wLjg5MDEzMywgMC4wLFxuICAgIDAuMjk5NjQ4LCAtMC42MzkxNCwgMC43MDgzMTYsIDAuMCxcbiAgICAwLjM5NzA0MywgMC41NjY1MjYsIC0wLjcyMjA4NCwgMC4wLFxuICAgIC0wLjUwMjQ4OSwgMC40MzgzMDgsIC0wLjc0NTI0NiwgMC4wLFxuICAgIDAuMDY4NzIzNSwgMC4zNTQwOTcsIDAuOTMyNjgsIDAuMCxcbiAgICAtMC4wNDc2NjUxLCAtMC40NjI1OTcsIDAuODg1Mjg2LCAwLjAsXG4gICAgLTAuMjIxOTM0LCAwLjkwMDczOSwgLTAuMzczMzgzLCAwLjAsXG4gICAgLTAuOTU2MTA3LCAtMC4yMjU2NzYsIDAuMTg2ODkzLCAwLjAsXG4gICAgLTAuMTg3NjI3LCAwLjM5MTQ4NywgLTAuOTAwODUyLCAwLjAsXG4gICAgLTAuMjI0MjA5LCAtMC4zMTU0MDUsIDAuOTIyMDksIDAuMCxcbiAgICAtMC43MzA4MDcsIC0wLjUzNzA2OCwgMC40MjEyODMsIDAuMCxcbiAgICAtMC4wMzUzMTM1LCAtMC44MTY3NDgsIDAuNTc1OTEzLCAwLjAsXG4gICAgLTAuOTQxMzkxLCAwLjE3Njk5MSwgLTAuMjg3MTUzLCAwLjAsXG4gICAgLTAuMTU0MTc0LCAwLjM5MDQ1OCwgMC45MDc2MiwgMC4wLFxuICAgIC0wLjI4Mzg0NywgMC41MzM4NDIsIDAuNzk2NTE5LCAwLjAsXG4gICAgLTAuNDgyNzM3LCAtMC44NTA0NDgsIDAuMjA5MDUyLCAwLjAsXG4gICAgLTAuNjQ5MTc1LCAwLjQ3Nzc0OCwgMC41OTE4ODYsIDAuMCxcbiAgICAwLjg4NTM3MywgLTAuNDA1Mzg3LCAtMC4yMjc1NDMsIDAuMCxcbiAgICAtMC4xNDcyNjEsIDAuMTgxNjIzLCAtMC45NzIyNzksIDAuMCxcbiAgICAwLjA5NTkyMzYsIC0wLjExNTg0NywgLTAuOTg4NjI0LCAwLjAsXG4gICAgLTAuODk3MjQsIC0wLjE5MTM0OCwgMC4zOTc5MjgsIDAuMCxcbiAgICAwLjkwMzU1MywgLTAuNDI4NDYxLCAtMC4wMDM1MDQ2MSwgMC4wLFxuICAgIDAuODQ5MDcyLCAtMC4yOTU4MDcsIC0wLjQzNzY5MywgMC4wLFxuICAgIDAuNjU1NTEsIDAuNzQxNzU0LCAtMC4xNDE4MDQsIDAuMCxcbiAgICAwLjYxNTk4LCAtMC4xNzg2NjksIDAuNzY3MjMyLCAwLjAsXG4gICAgMC4wMTEyOTY3LCAwLjkzMjI1NiwgLTAuMzYxNjIzLCAwLjAsXG4gICAgLTAuNzkzMDMxLCAwLjI1ODAxMiwgMC41NTE4NDUsIDAuMCxcbiAgICAwLjQyMTkzMywgMC40NTQzMTEsIDAuNzg0NTg1LCAwLjAsXG4gICAgLTAuMzE5OTkzLCAwLjA0MDE2MTgsIC0wLjk0NjU2OCwgMC4wLFxuICAgIC0wLjgxNTcxLCAwLjU1MTMwNywgLTAuMTc1MTUxLCAwLjAsXG4gICAgLTAuMzc3NjQ0LCAwLjAwMzIyMzEzLCAwLjkyNTk0NSwgMC4wLFxuICAgIDAuMTI5NzU5LCAtMC42NjY1ODEsIC0wLjczNDA1MiwgMC4wLFxuICAgIDAuNjAxOTAxLCAtMC42NTQyMzcsIC0wLjQ1NzkxOSwgMC4wLFxuICAgIC0wLjkyNzQ2MywgLTAuMDM0MzU3NiwgLTAuMzcyMzM0LCAwLjAsXG4gICAgLTAuNDM4NjYzLCAtMC44NjgzMDEsIC0wLjIzMTU3OCwgMC4wLFxuICAgIC0wLjY0ODg0NSwgLTAuNzQ5MTM4LCAtMC4xMzMzODcsIDAuMCxcbiAgICAwLjUwNzM5MywgLTAuNTg4Mjk0LCAwLjYyOTY1MywgMC4wLFxuICAgIDAuNzI2OTU4LCAwLjYyMzY2NSwgMC4yODczNTgsIDAuMCxcbiAgICAwLjQxMTE1OSwgMC4zNjc2MTQsIC0wLjgzNDE1MSwgMC4wLFxuICAgIDAuODA2MzMzLCAwLjU4NTExNywgLTAuMDg2NDAxNiwgMC4wLFxuICAgIDAuMjYzOTM1LCAtMC44ODA4NzYsIDAuMzkyOTMyLCAwLjAsXG4gICAgMC40MjE1NDYsIC0wLjIwMTMzNiwgMC44ODQxNzQsIDAuMCxcbiAgICAtMC42ODMxOTgsIC0wLjU2OTU1NywgLTAuNDU2OTk2LCAwLjAsXG4gICAgLTAuMTE3MTE2LCAtMC4wNDA2NjU0LCAtMC45OTIyODUsIDAuMCxcbiAgICAtMC42NDM2NzksIC0wLjEwOTE5NiwgLTAuNzU3NDY1LCAwLjAsXG4gICAgLTAuNTYxNTU5LCAtMC42Mjk4OSwgMC41MzY1NTQsIDAuMCxcbiAgICAwLjA2Mjg0MjIsIDAuMTA0Njc3LCAtMC45OTI1MTksIDAuMCxcbiAgICAwLjQ4MDc1OSwgLTAuMjg2NywgLTAuODI4NjU4LCAwLjAsXG4gICAgLTAuMjI4NTU5LCAtMC4yMjg5NjUsIC0wLjk0NjIyMiwgMC4wLFxuICAgIC0wLjEwMTk0LCAtMC42NTcwNiwgLTAuNzQ2OTE0LCAwLjAsXG4gICAgMC4wNjg5MTkzLCAtMC42NzgyMzYsIDAuNzMxNjA1LCAwLjAsXG4gICAgMC40MDEwMTksIC0wLjc1NDAyNiwgMC41MjAyMiwgMC4wLFxuICAgIC0wLjc0MjE0MSwgMC41NDcwODMsIC0wLjM4NzIwMywgMC4wLFxuICAgIC0wLjAwMjEwNjAzLCAtMC43OTY0MTcsIC0wLjYwNDc0NSwgMC4wLFxuICAgIDAuMjk2NzI1LCAtMC40MDk5MDksIC0wLjg2MjUxMywgMC4wLFxuICAgIC0wLjI2MDkzMiwgLTAuNzk4MjAxLCAwLjU0Mjk0NSwgMC4wLFxuICAgIC0wLjY0MTYyOCwgMC43NDIzNzksIDAuMTkyODM4LCAwLjAsXG4gICAgLTAuMTg2MDA5LCAtMC4xMDE1MTQsIDAuOTc3MjksIDAuMCxcbiAgICAwLjEwNjcxMSwgLTAuOTYyMDY3LCAwLjI1MTA3OSwgMC4wLFxuICAgIC0wLjc0MzQ5OSwgMC4zMDk4OCwgLTAuNTkyNjA3LCAwLjAsXG4gICAgLTAuNzk1ODUzLCAtMC42MDUwNjYsIC0wLjAyMjY2MDcsIDAuMCxcbiAgICAtMC44Mjg2NjEsIC0wLjQxOTQ3MSwgLTAuMzcwNjI4LCAwLjAsXG4gICAgMC4wODQ3MjE4LCAtMC40ODk4MTUsIC0wLjg2NzcsIDAuMCxcbiAgICAtMC4zODE0MDUsIDAuNzg4MDE5LCAtMC40ODMyNzYsIDAuMCxcbiAgICAwLjI4MjA0MiwgLTAuOTUzMzk0LCAwLjEwNzIwNSwgMC4wLFxuICAgIDAuNTMwNzc0LCAwLjg0NzQxMywgMC4wMTMwNjk2LCAwLjAsXG4gICAgMC4wNTE1Mzk3LCAwLjkyMjUyNCwgMC4zODI0ODQsIDAuMCxcbiAgICAtMC42MzE0NjcsIC0wLjcwOTA0NiwgMC4zMTM4NTIsIDAuMCxcbiAgICAwLjY4ODI0OCwgMC41MTcyNzMsIDAuNTA4NjY4LCAwLjAsXG4gICAgMC42NDY2ODksIC0wLjMzMzc4MiwgLTAuNjg1ODQ1LCAwLjAsXG4gICAgLTAuOTMyNTI4LCAtMC4yNDc1MzIsIC0wLjI2MjkwNiwgMC4wLFxuICAgIDAuNjMwNjA5LCAwLjY4NzU3LCAtMC4zNTk5NzMsIDAuMCxcbiAgICAwLjU3NzgwNSwgLTAuMzk0MTg5LCAwLjcxNDY3MywgMC4wLFxuICAgIC0wLjg4NzgzMywgLTAuNDM3MzAxLCAtMC4xNDMyNSwgMC4wLFxuICAgIDAuNjkwOTgyLCAwLjE3NDAwMywgMC43MDE2MTcsIDAuMCxcbiAgICAtMC44NjY3MDEsIDAuMDExODE4MiwgMC40OTg2ODksIDAuMCxcbiAgICAtMC40ODI4NzYsIDAuNzI3MTQzLCAwLjQ4Nzk0OSwgMC4wLFxuICAgIC0wLjU3NzU2NywgMC42ODI1OTMsIC0wLjQ0Nzc1MiwgMC4wLFxuICAgIDAuMzczNzY4LCAwLjA5ODI5OTEsIDAuOTIyMjk5LCAwLjAsXG4gICAgMC4xNzA3NDQsIDAuOTY0MjQzLCAtMC4yMDI2ODcsIDAuMCxcbiAgICAwLjk5MzY1NCwgLTAuMDM1NzkxLCAtMC4xMDY2MzIsIDAuMCxcbiAgICAwLjU4NzA2NSwgMC40MTQzLCAtMC42OTU0OTMsIDAuMCxcbiAgICAtMC4zOTY1MDksIDAuMjY1MDksIC0wLjg3ODkyNCwgMC4wLFxuICAgIC0wLjA4NjY4NTMsIDAuODM1NTMsIC0wLjU0MjU2MywgMC4wLFxuICAgIDAuOTIzMTkzLCAwLjEzMzM5OCwgLTAuMzYwNDQzLCAwLjAsXG4gICAgMC4wMDM3OTEwOCwgLTAuMjU4NjE4LCAwLjk2NTk3MiwgMC4wLFxuICAgIDAuMjM5MTQ0LCAwLjI0NTE1NCwgLTAuOTM5NTI2LCAwLjAsXG4gICAgMC43NTg3MzEsIC0wLjU1NTg3MSwgMC4zMzk2MSwgMC4wLFxuICAgIDAuMjk1MzU1LCAwLjMwOTUxMywgMC45MDM4NjIsIDAuMCxcbiAgICAwLjA1MzEyMjIsIC0wLjkxMDAzLCAtMC40MTExMjQsIDAuMCxcbiAgICAwLjI3MDQ1MiwgMC4wMjI5NDM5LCAtMC45NjI0NiwgMC4wLFxuICAgIDAuNTYzNjM0LCAwLjAzMjQzNTIsIDAuODI1Mzg3LCAwLjAsXG4gICAgMC4xNTYzMjYsIDAuMTQ3MzkyLCAwLjk3NjY0NiwgMC4wLFxuICAgIC0wLjA0MTAxNDEsIDAuOTgxODI0LCAwLjE4NTMwOSwgMC4wLFxuICAgIC0wLjM4NTU2MiwgLTAuNTc2MzQzLCAtMC43MjA1MzUsIDAuMCxcbiAgICAwLjM4ODI4MSwgMC45MDQ0NDEsIDAuMTc2NzAyLCAwLjAsXG4gICAgMC45NDU1NjEsIC0wLjE5Mjg1OSwgLTAuMjYyMTQ2LCAwLjAsXG4gICAgMC44NDQ1MDQsIDAuNTIwMTkzLCAwLjEyNzMyNSwgMC4wLFxuICAgIDAuMDMzMDg5MywgMC45OTkxMjEsIC0wLjAyNTc1MDUsIDAuMCxcbiAgICAtMC41OTI2MTYsIC0wLjQ4MjQ3NSwgLTAuNjQ0OTk5LCAwLjAsXG4gICAgMC41Mzk0NzEsIDAuNjMxMDI0LCAtMC41NTc0NzYsIDAuMCxcbiAgICAwLjY1NTg1MSwgLTAuMDI3MzE5LCAtMC43NTQzOTYsIDAuMCxcbiAgICAwLjI3NDQ2NSwgMC44ODc2NTksIDAuMzY5NzcyLCAwLjAsXG4gICAgLTAuMTIzNDE5LCAwLjk3NTE3NywgLTAuMTgzODQyLCAwLjAsXG4gICAgLTAuMjIzNDI5LCAwLjcwODA0NSwgMC42Njk4OSwgMC4wLFxuICAgIC0wLjkwODY1NCwgMC4xOTYzMDIsIDAuMzY4NTI4LCAwLjAsXG4gICAgLTAuOTU3NTksIC0wLjAwODYzNzA4LCAwLjI4ODAwNSwgMC4wLFxuICAgIDAuOTYwNTM1LCAwLjAzMDU5MiwgMC4yNzY0NzIsIDAuMCxcbiAgICAtMC40MTMxNDYsIDAuOTA3NTM3LCAwLjA3NTQxNjEsIDAuMCxcbiAgICAtMC44NDc5OTIsIDAuMzUwODQ5LCAtMC4zOTcyNTksIDAuMCxcbiAgICAwLjYxNDczNiwgMC4zOTU4NDEsIDAuNjgyMjEsIDAuMCxcbiAgICAtMC41MDM1MDQsIC0wLjY2NjEyOCwgLTAuNTUwMjM0LCAwLjAsXG4gICAgLTAuMjY4ODMzLCAtMC43Mzg1MjQsIC0wLjYxODMxNCwgMC4wLFxuICAgIDAuNzkyNzM3LCAtMC42MDAwMSwgLTAuMTA3NTAyLCAwLjAsXG4gICAgLTAuNjM3NTgyLCAwLjUwODE0NCwgLTAuNTc5MDMyLCAwLjAsXG4gICAgMC43NTAxMDUsIDAuMjgyMTY1LCAtMC41OTgxMDEsIDAuMCxcbiAgICAtMC4zNTExOTksIC0wLjM5MjI5NCwgLTAuODUwMTU1LCAwLjAsXG4gICAgMC4yNTAxMjYsIC0wLjk2MDk5MywgLTAuMTE4MDI1LCAwLjAsXG4gICAgLTAuNzMyMzQxLCAwLjY4MDkwOSwgLTAuMDA2MzI3NCwgMC4wLFxuICAgIC0wLjc2MDY3NCwgLTAuMTQxMDA5LCAwLjYzMzYzNCwgMC4wLFxuICAgIDAuMjIyODIzLCAtMC4zMDQwMTIsIDAuOTI2MjQzLCAwLjAsXG4gICAgMC4yMDkxNzgsIDAuNTA1NjcxLCAwLjgzNjk4NCwgMC4wLFxuICAgIDAuNzU3OTE0LCAtMC41NjYyOSwgLTAuMzIzODU3LCAwLjAsXG4gICAgLTAuNzgyOTI2LCAtMC4zMzkxOTYsIDAuNTIxNTEsIDAuMCxcbiAgICAtMC40NjI5NTIsIDAuNTg1NTY1LCAwLjY2NTQyNCwgMC4wLFxuICAgIDAuNjE4NzksIDAuMTk0MTE5LCAtMC43NjExOTQsIDAuMCxcbiAgICAwLjc0MTM4OCwgLTAuMjc2NzQzLCAwLjYxMTM1NywgMC4wLFxuICAgIDAuNzA3NTcxLCAwLjcwMjYyMSwgMC4wNzUyODcyLCAwLjAsXG4gICAgMC4xNTY1NjIsIDAuODE5OTc3LCAwLjU1MDU2OSwgMC4wLFxuICAgIC0wLjc5MzYwNiwgMC40NDAyMTYsIDAuNDIsIDAuMCxcbiAgICAwLjIzNDU0NywgMC44ODUzMDksIC0wLjQwMTUxNywgMC4wLFxuICAgIDAuMTMyNTk4LCAwLjgwMTE1LCAtMC41ODM1OSwgMC4wLFxuICAgIC0wLjM3Nzg5OSwgLTAuNjM5MTc5LCAwLjY2OTgwOCwgMC4wLFxuICAgIC0wLjg2NTk5MywgLTAuMzk2NDY1LCAwLjMwNDc0OCwgMC4wLFxuICAgIC0wLjYyNDgxNSwgLTAuNDQyODMsIDAuNjQzMDQ2LCAwLjAsXG4gICAgLTAuNDg1NzA1LCAwLjgyNTYxNCwgLTAuMjg3MTQ2LCAwLjAsXG4gICAgLTAuOTcxNzg4LCAwLjE3NTUzNSwgMC4xNTc1MjksIDAuMCxcbiAgICAtMC40NTYwMjcsIDAuMzkyNjI5LCAwLjc5ODY3NSwgMC4wLFxuICAgIC0wLjAxMDQ0NDMsIDAuNTIxNjIzLCAtMC44NTMxMTIsIDAuMCxcbiAgICAtMC42NjA1NzUsIC0wLjc0NTE5LCAwLjA5MTI4MiwgMC4wLFxuICAgIC0wLjAxNTc2OTgsIC0wLjMwNzQ3NSwgLTAuOTUxNDI1LCAwLjAsXG4gICAgLTAuNjAzNDY3LCAtMC4yNTAxOTIsIDAuNzU3MTIxLCAwLjAsXG4gICAgMC41MDY4NzYsIDAuMjUwMDYsIDAuODI0OTUyLCAwLjAsXG4gICAgMC4yNTU0MDQsIDAuOTY2Nzk0LCAwLjAwODg0NDk4LCAwLjAsXG4gICAgMC40NjY3NjQsIC0wLjg3NDIyOCwgLTAuMTMzNjI1LCAwLjAsXG4gICAgMC40NzUwNzcsIC0wLjA2ODIzNTEsIC0wLjg3NzI5NSwgMC4wLFxuICAgIC0wLjIyNDk2NywgLTAuOTM4OTcyLCAtMC4yNjAyMzMsIDAuMCxcbiAgICAtMC4zNzc5MjksIC0wLjgxNDc1NywgLTAuNDM5NzA1LCAwLjAsXG4gICAgLTAuMzA1ODQ3LCAwLjU0MjMzMywgLTAuNzgyNTE3LCAwLjAsXG4gICAgMC4yNjY1OCwgLTAuOTAyOTA1LCAtMC4zMzcxOTEsIDAuMCxcbiAgICAwLjAyNzU3NzMsIDAuMzIyMTU4LCAtMC45NDYyODQsIDAuMCxcbiAgICAwLjAxODU0MjIsIDAuNzE2MzQ5LCAwLjY5NzQ5NiwgMC4wLFxuICAgIC0wLjIwNDgzLCAwLjk3ODQxNiwgMC4wMjczMzcxLCAwLjAsXG4gICAgLTAuODk4Mjc2LCAwLjM3Mzk2OSwgMC4yMzA3NTIsIDAuMCxcbiAgICAtMC4wMDkwOTM3OCwgMC41NDY1OTQsIDAuODM3MzQ5LCAwLjAsXG4gICAgMC42NjAyLCAtMC43NTEwODksIDAuMDAwOTU5MjM2LCAwLjAsXG4gICAgMC44NTUzMDEsIC0wLjMwMzA1NiwgMC40MjAyNTksIDAuMCxcbiAgICAwLjc5NzEzOCwgMC4wNjIzMDEzLCAtMC42MDA1NzQsIDAuMCxcbiAgICAwLjQ4OTQ3LCAtMC44NjY4MTMsIDAuMDk1MTUwOSwgMC4wLFxuICAgIDAuMjUxMTQyLCAwLjY3NDUzMSwgMC42OTQyMTYsIDAuMCxcbiAgICAtMC41Nzg0MjIsIC0wLjczNzM3MywgLTAuMzQ4ODY3LCAwLjAsXG4gICAgLTAuMjU0Njg5LCAtMC41MTQ4MDcsIDAuODE4NjAxLCAwLjAsXG4gICAgMC4zNzQ5NzIsIDAuNzYxNjEyLCAwLjUyODUyOSwgMC4wLFxuICAgIDAuNjQwMzAzLCAtMC43MzQyNzEsIC0wLjIyNTUxNywgMC4wLFxuICAgIC0wLjYzODA3NiwgMC4yODU1MjcsIDAuNzE1MDc1LCAwLjAsXG4gICAgMC43NzI5NTYsIC0wLjE1OTg0LCAtMC42MTM5OTUsIDAuMCxcbiAgICAwLjc5ODIxNywgLTAuNTkwNjI4LCAwLjExODM1NiwgMC4wLFxuICAgIC0wLjk4NjI3NiwgLTAuMDU3ODMzNywgLTAuMTU0NjQ0LCAwLjAsXG4gICAgLTAuMzEyOTg4LCAtMC45NDU0OSwgMC4wODk5MjcyLCAwLjAsXG4gICAgLTAuNDk3MzM4LCAwLjE3ODMyNSwgMC44NDkwMzIsIDAuMCxcbiAgICAtMC4xMDExMzYsIC0wLjk4MTAxNCwgMC4xNjU0NzcsIDAuMCxcbiAgICAtMC41MjE2ODgsIDAuMDU1MzQzNCwgLTAuODUxMzM5LCAwLjAsXG4gICAgLTAuNzg2MTgyLCAtMC41ODM4MTQsIDAuMjAyNjc4LCAwLjAsXG4gICAgLTAuNTY1MTkxLCAwLjgyMTg1OCwgLTAuMDcxNDY1OCwgMC4wLFxuICAgIDAuNDM3ODk1LCAwLjE1MjU5OCwgLTAuODg1OTgxLCAwLjAsXG4gICAgLTAuOTIzOTQsIDAuMzUzNDM2LCAtMC4xNDYzNSwgMC4wLFxuICAgIDAuMjEyMTg5LCAtMC44MTUxNjIsIC0wLjUzODk2OSwgMC4wLFxuICAgIC0wLjg1OTI2MiwgMC4xNDM0MDUsIC0wLjQ5MTAyNCwgMC4wLFxuICAgIDAuOTkxMzUzLCAwLjExMjgxNCwgMC4wNjcwMjczLCAwLjAsXG4gICAgMC4wMzM3ODg0LCAtMC45Nzk4OTEsIC0wLjE5NjY1NCwgMC4wLFxuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvclRhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db21wbGV0ZXIgPSB2b2lkIDA7XHJcbmNsYXNzIENvbXBsZXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBsZXRlciA9IENvbXBsZXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5EaXNwbGF5ID0gdm9pZCAwO1xyXG4vKipcclxuICogQW4gT3BlbkdMLWNhcGFibGUgZGlzcGxheSBiYXNlZCBvbiBIVE1MNSBDYW52YXNcclxuICovXHJcbmNsYXNzIERpc3BsYXkge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgaWYgKGNhbnZhcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTI4MDtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNzIwO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FudmFzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZWJHTCAyLjBcclxuICAgICAgICB0aGlzLmdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wuIFlvdXIgYnJvd3NlciBvciBtYWNoaW5lIG1heSBub3Qgc3VwcG9ydCBpdC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckRlcHRoKDEuMCk7XHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcclxuICAgICAgICB0aGlzLmdsLmRlcHRoRnVuYyh0aGlzLmdsLkxFUVVBTCk7XHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5CTEVORCk7XHJcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmdsLmZyb250RmFjZSh0aGlzLmdsLkNDVyk7XHJcbiAgICAgICAgLy8gdGhpcy5nbC5lbmFibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2wuY3VsbEZhY2UodGhpcy5nbC5CQUNLKTtcclxuICAgIH1cclxuICAgIGNsZWFyKHIsIGcsIGIsIGEgPSAxLjApIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIChfYSA9IHRoaXMuZ2wpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGVhckNvbG9yKHIsIGcsIGIsIGEpO1xyXG4gICAgICAgIChfYiA9IHRoaXMuZ2wpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gICAgfVxyXG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgKF9hID0gdGhpcy5nbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7IH1cclxuICAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7IH1cclxuICAgIGdldCBhc3BlY3RSYXRpbygpIHsgcmV0dXJuIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDsgfVxyXG59XHJcbmV4cG9ydHMuRGlzcGxheSA9IERpc3BsYXk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGlzcGxheV8xID0gcmVxdWlyZShcIi4vZGlzcGxheVwiKTtcclxuY29uc3Qgc2hhZGVyXzEgPSByZXF1aXJlKFwiLi9zaGFkZXJcIik7XHJcbmNvbnN0IG1lc2hfMSA9IHJlcXVpcmUoXCIuL21lc2hcIik7XHJcbmNvbnN0IHRleHR1cmVfMSA9IHJlcXVpcmUoXCIuL3RleHR1cmVcIik7XHJcbmNvbnN0IHByb2NlZHVyYWxfdGV4dHVyZV8xID0gcmVxdWlyZShcIi4vcHJvY2VkdXJhbF90ZXh0dXJlXCIpO1xyXG5sZXQgZGlzcGxheSA9IG5ldyBkaXNwbGF5XzEuRGlzcGxheShudWxsKTtcclxubGV0IGJhc2ljVlMgPSBgI3ZlcnNpb24gMzAwIGVzXHJcbmluIHZlYzMgYV9wb3NpdGlvbjtcclxuaW4gdmVjMyBhX25vcm1hbDtcclxuaW4gdmVjMyBhX3RhbmdlbnQ7XHJcbmluIHZlYzIgYV91djtcclxuaW4gdmVjNCBhX2NvbG9yO1xyXG5cclxudW5pZm9ybSBtYXQ0IHVfbW9kZWw7XHJcbnVuaWZvcm0gbWF0NCB1X3ZpZXc7XHJcbnVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcblxyXG5vdXQgdmVjMyB2X25vcm1hbDtcclxub3V0IHZlYzIgdl91djtcclxuXHJcbnZvaWQgbWFpbigpIHtcclxuICAgIG1hdDQgbW9kZWxWaWV3ID0gdV92aWV3ICogdV9tb2RlbDtcclxuICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogbW9kZWxWaWV3ICogdmVjNChhX3Bvc2l0aW9uLCAxLjApO1xyXG5cclxuICAgIG1hdDMgbm9ybWFsTWF0cml4ID0gbWF0Myh0cmFuc3Bvc2UoaW52ZXJzZShtb2RlbFZpZXcpKSk7XHJcbiAgICB2X25vcm1hbCA9IG5vcm1hbE1hdHJpeCAqIGFfbm9ybWFsO1xyXG5cclxuICAgIHZfdXYgPSBhX3V2O1xyXG59YDtcclxubGV0IGJhc2ljRlMgPSBgI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuXHJcbm91dCB2ZWM0IGZyYWdDb2xvcjtcclxuaW4gdmVjMyB2X25vcm1hbDtcclxuaW4gdmVjMiB2X3V2O1xyXG5cclxudW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlO1xyXG5cclxudm9pZCBtYWluKCkge1xyXG4gICAgZmxvYXQgbGFtYmVydCA9IG1heChkb3Qobm9ybWFsaXplKHZfbm9ybWFsKSwgbm9ybWFsaXplKHZlYzMoMCwgMCwgLTEpKSksIDAuMCk7XHJcbiAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZSh1X3RleHR1cmUsIHZfdXYpO1xyXG4gICAgZnJhZ0NvbG9yID0gdmVjNCh2ZWMzKGxhbWJlcnQpLCAxLjApICogdGV4Q29sb3I7XHJcbn1gO1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBsZXQgc2hhZGVyID0gbmV3IHNoYWRlcl8xLlNoYWRlcihkaXNwbGF5LmdsKVxyXG4gICAgICAgICAgICAuYmluZEF0dHJpYnV0ZUxvY2F0aW9uKFwiYV9wb3NpdGlvblwiLCAwKVxyXG4gICAgICAgICAgICAuYmluZEF0dHJpYnV0ZUxvY2F0aW9uKFwiYV9ub3JtYWxcIiwgMSlcclxuICAgICAgICAgICAgLmJpbmRBdHRyaWJ1dGVMb2NhdGlvbihcImFfdGFuZ2VudFwiLCAyKVxyXG4gICAgICAgICAgICAuYmluZEF0dHJpYnV0ZUxvY2F0aW9uKFwiYV91dlwiLCAzKVxyXG4gICAgICAgICAgICAuYmluZEF0dHJpYnV0ZUxvY2F0aW9uKFwiYV9jb2xvclwiLCA0KVxyXG4gICAgICAgICAgICAuZW5hYmxlVmVydGV4KGJhc2ljVlMpXHJcbiAgICAgICAgICAgIC5lbmFibGVGcmFnbWVudChiYXNpY0ZTKVxyXG4gICAgICAgICAgICAubGluaygpO1xyXG4gICAgICAgIC8vIGxldCB0ZXggPSBhd2FpdCBUZXh0dXJlMkQuZnJvbUltYWdlKGRpc3BsYXkuZ2whLCBcIm1lLmpwZ1wiKTtcclxuICAgICAgICBsZXQgcmVkRG9udXQgPSAoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEubWl4KSgoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEuc29saWQpKHByb2NlZHVyYWxfdGV4dHVyZV8xLkNvbG9yLmZyb21IZXgoXCIjZmZmZjAwXCIpKSwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLnNvbGlkKShwcm9jZWR1cmFsX3RleHR1cmVfMS5Db2xvci5mcm9tSGV4KFwiI2ZmMDAwMFwiKSksICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5kZWZvcm0pKCgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5zbW9vdGhTdGVwKSgwLjMsIDAuMzEsICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5ibGVuZCkoKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLmNpcmNsZSkoMC41KSwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLmNpcmNsZSkoMC4yOCksIHByb2NlZHVyYWxfdGV4dHVyZV8xLkJsZW5kTW9kZS5TdWJ0cmFjdCkpLCAoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEucGVybGluKSgyLCAyKSwgMC4wNCkpO1xyXG4gICAgICAgIGxldCB0ZXhHZW4gPSAoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEubWl4KSgoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEuc29saWQpKHByb2NlZHVyYWxfdGV4dHVyZV8xLkNvbG9yLmZyb21IZXgoXCIjMzYzYjQ1XCIpKSwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLnNvbGlkKShwcm9jZWR1cmFsX3RleHR1cmVfMS5Db2xvci5mcm9tSGV4KFwiIzk0NTQ0ZFwiKSksICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5icmlja3MpKDQuMCwgOC4wKSk7XHJcbiAgICAgICAgbGV0IHRleCA9IHRleHR1cmVfMS5UZXh0dXJlMkQucHJvY2VkdXJhbChkaXNwbGF5LmdsLCAyNTYsIDI1NiwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLmJsZW5kKSh0ZXhHZW4sIHJlZERvbnV0LCBwcm9jZWR1cmFsX3RleHR1cmVfMS5CbGVuZE1vZGUuTXVsdGlwbHkpKTtcclxuICAgICAgICB0ZXguc2V0RmlsdGVyaW5nKGRpc3BsYXkuZ2wuTElORUFSX01JUE1BUF9MSU5FQVIsIGRpc3BsYXkuZ2wuTElORUFSKTtcclxuICAgICAgICBsZXQgbWVzaCA9IG5ldyBtZXNoXzEuTWVzaEJ1aWxkZXIoKS5hZGRDdWJlKCkucmVjYWxjdWxhdGVOb3JtYWxzKCkuYnVpbGQoZGlzcGxheS5nbCk7XHJcbiAgICAgICAgbGV0IHJvdCA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgICAgICAgZGlzcGxheS5jbGVhcigwLjEsIDAuNCwgMC43LCAxLjApO1xyXG4gICAgICAgICAgICB0ZXguYmluZCgwKTtcclxuICAgICAgICAgICAgc2hhZGVyLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICBzaGFkZXIuc2V0VGV4dHVyZShcInVfdGV4dHVyZVwiLCAwKTtcclxuICAgICAgICAgICAgbGV0IG1vZGVsID0gbmV3IHNoYWRlcl8xLk1hdHJpeDQoKS5yb3RhdGVZKHJvdCkucm90YXRlWChyb3QgKiAwLjUpLnJvdGF0ZVoocm90ICogMC4yNSk7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ID0gbmV3IHNoYWRlcl8xLk1hdHJpeDQoKS50cmFuc2xhdGUoWzAsIDAsIC01XSk7XHJcbiAgICAgICAgICAgIGxldCBwcm9qID0gbmV3IHNoYWRlcl8xLk1hdHJpeDQoKS5wZXJzcGVjdGl2ZSh7IGZvdjogTWF0aC5QSSAvIDQsIGFzcGVjdDogZGlzcGxheS5hc3BlY3RSYXRpbywgbmVhcjogMC4xLCBmYXI6IDEwMDAgfSk7XHJcbiAgICAgICAgICAgIHNoYWRlci5zZXRVbmlmb3JtKFwidV9tb2RlbFwiLCBtb2RlbCk7XHJcbiAgICAgICAgICAgIHNoYWRlci5zZXRVbmlmb3JtKFwidV92aWV3XCIsIHZpZXcpO1xyXG4gICAgICAgICAgICBzaGFkZXIuc2V0VW5pZm9ybShcInVfcHJvamVjdGlvblwiLCBwcm9qKTtcclxuICAgICAgICAgICAgbWVzaC5kcmF3KGRpc3BsYXkuZ2wpO1xyXG4gICAgICAgICAgICByb3QgKz0gMC4wMjtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9vcCgpO1xyXG4gICAgfSk7XHJcbn1cclxuaW5pdCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1lc2hCdWlsZGVyID0gZXhwb3J0cy5NZXNoID0gZXhwb3J0cy5WZXJ0ZXggPSBleHBvcnRzLklCYXNlVmVydGV4ID0gdm9pZCAwO1xyXG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuY2xhc3MgSUJhc2VWZXJ0ZXgge1xyXG59XHJcbmV4cG9ydHMuSUJhc2VWZXJ0ZXggPSBJQmFzZVZlcnRleDtcclxuY2xhc3MgVmVydGV4IGV4dGVuZHMgSUJhc2VWZXJ0ZXgge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIG5vcm1hbCA9IG5ldyBjb3JlXzEuVmVjdG9yMygpLCB0YW5nZW50ID0gbmV3IGNvcmVfMS5WZWN0b3IzKCksIHV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKCksIGNvbG9yID0gbmV3IGNvcmVfMS5WZWN0b3I0KDEsIDEsIDEsIDEpKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XHJcbiAgICAgICAgdGhpcy50YW5nZW50ID0gdGFuZ2VudDtcclxuICAgICAgICB0aGlzLnV2ID0gdXY7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0U2V0dXAoZ2wpIHtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgzKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSg0KTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgNjAsIDApO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMSwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMTIpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMiwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMjQpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMywgMiwgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMzYpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoNCwgNCwgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgNDQpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJsZWF2ZSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnBvc2l0aW9uLnRvQXJyYXkobmV3IEFycmF5KDMpKSxcclxuICAgICAgICAgICAgLi4udGhpcy5ub3JtYWwudG9BcnJheShuZXcgQXJyYXkoMykpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnRhbmdlbnQudG9BcnJheShuZXcgQXJyYXkoMykpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnV2LnRvQXJyYXkobmV3IEFycmF5KDIpKSxcclxuICAgICAgICAgICAgLi4udGhpcy5jb2xvci50b0FycmF5KG5ldyBBcnJheSg0KSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXgodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLm5vcm1hbC5jbG9uZSgpLCB0aGlzLnRhbmdlbnQuY2xvbmUoKSwgdGhpcy51di5jbG9uZSgpLCB0aGlzLmNvbG9yLmNsb25lKCkpO1xyXG4gICAgfVxyXG4gICAgYWRkKG90aGVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQob3RoZXIucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9ybWFsLmFkZChvdGhlci5ub3JtYWwpO1xyXG4gICAgICAgIHRoaXMudGFuZ2VudC5hZGQob3RoZXIudGFuZ2VudCk7XHJcbiAgICAgICAgdGhpcy51di5hZGQob3RoZXIudXYpO1xyXG4gICAgICAgIHRoaXMuY29sb3IuYWRkKG90aGVyLmNvbG9yKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN1YihvdGhlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc3ViKG90aGVyLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLm5vcm1hbC5zdWIob3RoZXIubm9ybWFsKTtcclxuICAgICAgICB0aGlzLnRhbmdlbnQuc3ViKG90aGVyLnRhbmdlbnQpO1xyXG4gICAgICAgIHRoaXMudXYuc3ViKG90aGVyLnV2KTtcclxuICAgICAgICB0aGlzLmNvbG9yLnN1YihvdGhlci5jb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLm5vcm1hbC5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLnRhbmdlbnQuZGl2aWRlU2NhbGFyKHNjYWxhcik7XHJcbiAgICAgICAgdGhpcy51di5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLmNvbG9yLmRpdmlkZVNjYWxhcihzY2FsYXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbGVycChvdGhlciwgYWxwaGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlcnRleCh0aGlzLnBvc2l0aW9uLmNsb25lKCkubGVycCh0aGlzLnBvc2l0aW9uLCBvdGhlci5wb3NpdGlvbiwgYWxwaGEpLCB0aGlzLm5vcm1hbC5jbG9uZSgpLmxlcnAodGhpcy5ub3JtYWwsIG90aGVyLm5vcm1hbCwgYWxwaGEpLCB0aGlzLnRhbmdlbnQuY2xvbmUoKS5sZXJwKHRoaXMudGFuZ2VudCwgb3RoZXIudGFuZ2VudCwgYWxwaGEpLCB0aGlzLnV2LmNsb25lKCkubGVycCh0aGlzLnV2LCBvdGhlci51diwgYWxwaGEpLCB0aGlzLmNvbG9yLmNsb25lKCkubGVycCh0aGlzLmNvbG9yLCBvdGhlci5jb2xvciwgYWxwaGEpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlZlcnRleCA9IFZlcnRleDtcclxuLyoqXHJcbiAqIFdlYkdMIE1lc2ggKGRvZXMgbm90IHN0b3JlIGRhdGEpXHJcbiAqL1xyXG5jbGFzcyBNZXNoIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCB2ZXJ0aWNlcywgaW5kaWNlcykge1xyXG4gICAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNoIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgdmVydGV4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52Ym8gPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICB0aGlzLmlibyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMudmJvU2l6ZSA9IHRoaXMuaWJvU2l6ZSA9IDA7XHJcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShnbCwgdmVydGljZXMsIGluZGljZXMpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGdsLCB2ZXJ0aWNlcywgaW5kaWNlcykge1xyXG4gICAgICAgIGxldCB2ZXJ0cyA9IHZlcnRpY2VzLm1hcCgoZSkgPT4gZS5pbnRlcmxlYXZlKCkpLmZsYXQoKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8pO1xyXG4gICAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPiB0aGlzLnZib1NpemUpIHtcclxuICAgICAgICAgICAgdmVydGljZXNbMF0ubGF5b3V0U2V0dXAoZ2wpO1xyXG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cyksIGdsLkRZTkFNSUNfRFJBVyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmlibyk7XHJcbiAgICAgICAgaWYgKGluZGljZXMubGVuZ3RoID4gdGhpcy5pYm9TaXplKSB7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuRFlOQU1JQ19EUkFXKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIDAsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcclxuICAgICAgICB0aGlzLmlib1NpemUgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnZib1NpemUgPSB2ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBkcmF3KGdsLCBtb2RlID0gZ2wuVFJJQU5HTEVTKSB7XHJcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcclxuICAgICAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgdGhpcy5pYm9TaXplLCBnbC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZXNoID0gTWVzaDtcclxuLyoqXHJcbiAqIEJhc2ljIG1lc2ggcHJpbWl0aXZlcyBnZW5lcmF0b3JcclxuICovXHJcbmNsYXNzIE1lc2hCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGdldCBvZmZzZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgYWRkVmVydGV4KHZlcnRleCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMudmVydGljZXMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICBhZGRJbmRleChpbmRleCwgd2l0aE9mZnNldCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmluZGljZXMucHVzaChpbmRleCArICh3aXRoT2Zmc2V0ID8gdGhpcy5vZmZzZXQgOiAwKSk7XHJcbiAgICB9XHJcbiAgICBhZGRUcmlhbmdsZShhLCBiLCBjKSB7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYSk7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYik7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRRdWFkKGEsIGIsIGMsIGQpIHtcclxuICAgICAgICB0aGlzLmFkZEluZGV4KDApO1xyXG4gICAgICAgIHRoaXMuYWRkSW5kZXgoMSk7XHJcbiAgICAgICAgdGhpcy5hZGRJbmRleCgyKTtcclxuICAgICAgICB0aGlzLmFkZEluZGV4KDIpO1xyXG4gICAgICAgIHRoaXMuYWRkSW5kZXgoMyk7XHJcbiAgICAgICAgdGhpcy5hZGRJbmRleCgwKTtcclxuICAgICAgICBsZXQgdjEgPSB0aGlzLmFkZFZlcnRleChhLmNsb25lKCkpO1xyXG4gICAgICAgIGxldCB2MiA9IHRoaXMuYWRkVmVydGV4KGIuY2xvbmUoKSk7XHJcbiAgICAgICAgbGV0IHYzID0gdGhpcy5hZGRWZXJ0ZXgoYy5jbG9uZSgpKTtcclxuICAgICAgICBsZXQgdjQgPSB0aGlzLmFkZFZlcnRleChkLmNsb25lKCkpO1xyXG4gICAgICAgIHYxLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHYyLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDEsIDApO1xyXG4gICAgICAgIHYzLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDEsIDEpO1xyXG4gICAgICAgIHY0LnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkQ3ViZShzaXplID0gMSkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMygtc2l6ZSwgLXNpemUsIC1zaXplKSk7XHJcbiAgICAgICAgY29uc3QgYiA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC1zaXplLCAtc2l6ZSkpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMyhzaXplLCBzaXplLCAtc2l6ZSkpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMygtc2l6ZSwgc2l6ZSwgLXNpemUpKTtcclxuICAgICAgICBjb25zdCBlID0gbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIC1zaXplLCBzaXplKSk7XHJcbiAgICAgICAgY29uc3QgZiA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC1zaXplLCBzaXplKSk7XHJcbiAgICAgICAgY29uc3QgZyA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIHNpemUsIHNpemUpKTtcclxuICAgICAgICBjb25zdCBoID0gbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIHNpemUsIHNpemUpKTtcclxuICAgICAgICB0aGlzLmFkZFF1YWQoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgdGhpcy5hZGRRdWFkKGgsIGcsIGYsIGUpO1xyXG4gICAgICAgIHRoaXMuYWRkUXVhZChkLCBoLCBlLCBhKTtcclxuICAgICAgICB0aGlzLmFkZFF1YWQoYiwgZiwgZywgYyk7XHJcbiAgICAgICAgdGhpcy5hZGRRdWFkKGMsIGcsIGgsIGQpO1xyXG4gICAgICAgIHRoaXMuYWRkUXVhZChhLCBlLCBmLCBiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZEljb3NhaGVkcm9uKHNpemUgPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdCA9ICgoMSArIE1hdGguc3FydCg1KSkgLyAyKSAqIHNpemU7XHJcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKC1zaXplLCB0LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIHQsIDApKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIC10LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC10LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIC1zaXplLCB0KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIHNpemUsIHQpKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoMCwgLXNpemUsIC10KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIHNpemUsIC10KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHQsIDAsIC1zaXplKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHQsIDAsIHNpemUpKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXQsIDAsIC1zaXplKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKC10LCAwLCBzaXplKSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbXHJcbiAgICAgICAgICAgIDAsIDExLCA1LCAwLCA1LCAxLCAwLCAxLCA3LCAwLCA3LCAxMCwgMCwgMTAsIDExLFxyXG4gICAgICAgICAgICAxLCA1LCA5LCA1LCAxMSwgNCwgMTEsIDEwLCAyLCAxMCwgNywgNiwgNywgMSwgOCxcclxuICAgICAgICAgICAgMywgOSwgNCwgMywgNCwgMiwgMywgMiwgNiwgMywgNiwgOCwgMywgOCwgOSxcclxuICAgICAgICAgICAgNCwgOSwgNSwgMiwgNCwgMTEsIDYsIDIsIDEwLCA4LCA2LCA3LCA4LCAxLCA5XHJcbiAgICAgICAgXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW5kZXgoaW5kaWNlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmFkZFZlcnRleCh2ZXJ0aWNlc1tpXSk7XHJcbiAgICAgICAgICAgIHYudXYgPSBuZXcgY29yZV8xLlZlY3RvcjIodmVydGljZXNbaV0ucG9zaXRpb24ueCAvIHNpemUsIHZlcnRpY2VzW2ldLnBvc2l0aW9uLnkgLyBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRDeWxpbmRlcihyYWRpdXMgPSAwLjUsIGhlaWdodCA9IDEsIHNlZ21lbnRzID0gMjQpIHtcclxuICAgICAgICBpZiAoc2VnbWVudHMgPCAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzaEJ1aWxkZXIuYWRkQ3lsaW5kZXI6IHNlZ21lbnRzIG11c3QgYmUgZ3JlYXRlciB0aGFuIDInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IE1hdGguUEkgKiAyIC8gc2VnbWVudHM7XHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGRSaW5nKG1iLCBjZW50ZXIsIHV2X3YsIGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogc3RlcDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBtYi5hZGRWZXJ0ZXgobmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoeCwgMCwgeikuYWRkKGNlbnRlcikpKTtcclxuICAgICAgICAgICAgICAgIHYudXYgPSBuZXcgY29yZV8xLlZlY3RvcjIoKGkgLyBzZWdtZW50cykgKiAyLjAsIHV2X3YpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUluZGV4ID0gbWIudmVydGljZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0c1BlclJvdyA9IHNlZ21lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCwgYmFzZUluZGV4IC0gMSwgYmFzZUluZGV4IC0gdmVydHNQZXJSb3csIGJhc2VJbmRleCAtIHZlcnRzUGVyUm93IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbM10sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29ubmVjdCBsYXN0IHNlZ21lbnQgd2l0aCBmaXJzdCB2ZXJ0ZXhcclxuICAgICAgICAgICAgaWYgKGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlSW5kZXggPSBtYi52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydHNQZXJSb3cgPSBzZWdtZW50cyArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCAtIHZlcnRzUGVyUm93ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0c1BlclJvdyAtIDEsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1swXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1szXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkQ2FwKG1iLCBjZW50ZXIsIHJldmVyc2UpIHtcclxuICAgICAgICAgICAgbGV0IGN2ID0gbWIuYWRkVmVydGV4KG5ldyBWZXJ0ZXgoY2VudGVyKSk7XHJcbiAgICAgICAgICAgIGN2LnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAuNSwgMC41KTtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVySW5kZXggPSBtYi52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzZWdtZW50czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBzdGVwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IG1iLmFkZFZlcnRleChuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMyh4ICogcmFkaXVzLCAwLCB6ICogcmFkaXVzKS5hZGQoY2VudGVyKSkpO1xyXG4gICAgICAgICAgICAgICAgdi51diA9IG5ldyBjb3JlXzEuVmVjdG9yMih4ICogMC41ICsgMC41LCB6ICogMC41ICsgMC41KTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VJbmRleCA9IG1iLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IHJldmVyc2UgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlckluZGV4LCBiYXNlSW5kZXggLSAxLCBiYXNlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICBdIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJJbmRleCwgYmFzZUluZGV4LCBiYXNlSW5kZXggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZFJpbmcodGhpcywgbmV3IGNvcmVfMS5WZWN0b3IzKDAsIC1oZWlnaHQgLyAyLCAwKSwgMS4wLCBmYWxzZSk7XHJcbiAgICAgICAgYnVpbGRSaW5nKHRoaXMsIG5ldyBjb3JlXzEuVmVjdG9yMygwLCBoZWlnaHQgLyAyLCAwKSwgMC4wLCB0cnVlKTtcclxuICAgICAgICBidWlsZENhcCh0aGlzLCBuZXcgY29yZV8xLlZlY3RvcjMoMCwgLWhlaWdodCAvIDIsIDApLCBmYWxzZSk7XHJcbiAgICAgICAgYnVpbGRDYXAodGhpcywgbmV3IGNvcmVfMS5WZWN0b3IzKDAsIGhlaWdodCAvIDIsIDApLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlY2FsY3VsYXRlTm9ybWFscygpIHtcclxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IHRoaXMuaW5kaWNlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHZlcnRpY2VzW2luZGljZXNbaV1dO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdmVydGljZXNbaW5kaWNlc1tpICsgMV1dO1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdmVydGljZXNbaW5kaWNlc1tpICsgMl1dO1xyXG4gICAgICAgICAgICBjb25zdCBhYiA9IGIucG9zaXRpb24uY2xvbmUoKS5zdWIoYS5wb3NpdGlvbi5jbG9uZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgYWMgPSBjLnBvc2l0aW9uLmNsb25lKCkuc3ViKGEucG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGFiLmNyb3NzKGFjKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgYS5ub3JtYWwuYWRkKG5vcm1hbCk7XHJcbiAgICAgICAgICAgIGIubm9ybWFsLmFkZChub3JtYWwpO1xyXG4gICAgICAgICAgICBjLm5vcm1hbC5hZGQobm9ybWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGFsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmVydGljZXNbaV0ubm9ybWFsLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJ1aWxkKGdsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNZXNoKGdsLCB0aGlzLnZlcnRpY2VzLCB0aGlzLmluZGljZXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVzaEJ1aWxkZXIgPSBNZXNoQnVpbGRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ibGVuZCA9IGV4cG9ydHMuQmxlbmRNb2RlID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLnBvbHlnb24gPSBleHBvcnRzLmNpcmNsZSA9IGV4cG9ydHMuc21vb3RoU3RlcCA9IGV4cG9ydHMudGhyZXNob2xkID0gZXhwb3J0cy5kZWZvcm0gPSBleHBvcnRzLmNoZWNrZXIgPSBleHBvcnRzLmJyaWNrcyA9IGV4cG9ydHMudm9yb25vaSA9IGV4cG9ydHMucGVybGluID0gZXhwb3J0cy5taXggPSBleHBvcnRzLnNjYWxhciA9IGV4cG9ydHMuc29saWQgPSBleHBvcnRzLkNvbG9yID0gdm9pZCAwO1xyXG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuY29uc3QgZ2VuZXJhdG9yXzEgPSByZXF1aXJlKFwibGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gbGVycFNjYWxhcihhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gYSAqICgxIC0gdCkgKyBiICogdDtcclxufVxyXG5mdW5jdGlvbiBzYXR1cmF0ZSh4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgeCkpO1xyXG59XHJcbmZ1bmN0aW9uIHNzdGVwKGVkZ2UwLCBlZGdlMSwgeCkge1xyXG4gICAgbGV0IHQgPSBzYXR1cmF0ZSgoeCAtIGVkZ2UwKSAvIChlZGdlMSAtIGVkZ2UwKSk7XHJcbiAgICByZXR1cm4gdCAqIHQgKiAoMyAtIDIgKiB0KTtcclxufVxyXG5mdW5jdGlvbiBsc3RlcChhLCBiLCB0KSB7XHJcbiAgICBpZiAodCA8PSBhKVxyXG4gICAgICAgIHJldHVybiAwLjA7XHJcbiAgICBpZiAodCA+PSBiKVxyXG4gICAgICAgIHJldHVybiAxLjA7XHJcbiAgICByZXR1cm4gKHQgLSBhKSAvIChiIC0gYSk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZCh4LCB5KSB7XHJcbiAgICB4ICs9IDAuMjEyNyArIHggKiAwLjM3MTMgKiB5O1xyXG4gICAgeSArPSAwLjIxMjcgKyB4ICogMC4zNzEzICogeTtcclxuICAgIGNvbnN0IHJ4ID0gNC43ODkgKiBNYXRoLnNpbig0ODkuMTIzICogeCk7XHJcbiAgICBjb25zdCByeSA9IDQuNzg5ICogTWF0aC5zaW4oNDg5LjEyMyAqIHkpO1xyXG4gICAgY29uc3QgdiA9IHJ4ICogcnk7XHJcbiAgICByZXR1cm4gdiAtIE1hdGguZmxvb3Iodik7XHJcbn1cclxuY2xhc3MgQ29sb3Ige1xyXG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLnIgPSBzYXR1cmF0ZShyKTtcclxuICAgICAgICB0aGlzLmcgPSBzYXR1cmF0ZShnKTtcclxuICAgICAgICB0aGlzLmIgPSBzYXR1cmF0ZShiKTtcclxuICAgICAgICB0aGlzLmEgPSBzYXR1cmF0ZShhKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tSGV4KGhleCkge1xyXG4gICAgICAgIGlmIChoZXguc3RhcnRzV2l0aChcIiNcIikpXHJcbiAgICAgICAgICAgIGhleCA9IGhleC5zbGljZSgxKTtcclxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMylcclxuICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KFwiXCIpLm1hcCh4ID0+IHggKyB4KS5qb2luKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMCwgMiksIDE2KSAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDIsIDQpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg0LCA2KSwgMTYpIC8gMjU1O1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgICB9XHJcbiAgICBsZXJwKGIsIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKGxlcnBTY2FsYXIodGhpcy5yLCBiLnIsIHQpLCBsZXJwU2NhbGFyKHRoaXMuZywgYi5nLCB0KSwgbGVycFNjYWxhcih0aGlzLmIsIGIuYiwgdCksIGxlcnBTY2FsYXIodGhpcy5hLCBiLmEsIHQpKTtcclxuICAgIH1cclxuICAgIGFkZChiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgKyBiLnIsIHRoaXMuZyArIGIuZywgdGhpcy5iICsgYi5iLCB0aGlzLmEgKyBiLmEpO1xyXG4gICAgfVxyXG4gICAgc3ViKGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMuciAtIGIuciwgdGhpcy5nIC0gYi5nLCB0aGlzLmIgLSBiLmIsIHRoaXMuYSAtIGIuYSk7XHJcbiAgICB9XHJcbiAgICBtdWwoYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yICogYi5yLCB0aGlzLmcgKiBiLmcsIHRoaXMuYiAqIGIuYiwgdGhpcy5hICogYi5hKTtcclxuICAgIH1cclxuICAgIGRpdihiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgLyAoYi5yICsgMC4wMDAxKSwgdGhpcy5nIC8gKGIuZyArIDAuMDAwMSksIHRoaXMuYiAvIChiLmIgKyAwLjAwMDEpLCAxLjApO1xyXG4gICAgfVxyXG4gICAgbXVsU2NhbGFyKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMuciAqIHMsIHRoaXMuZyAqIHMsIHRoaXMuYiAqIHMsIHRoaXMuYSAqIHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGx1bWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIHRoaXMuciArIDAuNzE1MiAqIHRoaXMuZyArIDAuMDcyMiAqIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbmNvbnN0IHBnZW4gPSBuZXcgZ2VuZXJhdG9yXzEuUGVybGluKCk7XHJcbmNvbnN0IHZnZW4gPSBuZXcgZ2VuZXJhdG9yXzEuVm9yb25vaSgpO1xyXG5mdW5jdGlvbiBzb2xpZChjKSB7XHJcbiAgICByZXR1cm4gKHApID0+IGM7XHJcbn1cclxuZXhwb3J0cy5zb2xpZCA9IHNvbGlkO1xyXG5mdW5jdGlvbiBzY2FsYXIocykge1xyXG4gICAgcmV0dXJuIChwKSA9PiBuZXcgQ29sb3Iocywgcywgcyk7XHJcbn1cclxuZXhwb3J0cy5zY2FsYXIgPSBzY2FsYXI7XHJcbmZ1bmN0aW9uIG1peChhLCBiLCBhbXQpIHtcclxuICAgIHJldHVybiAocCkgPT4gYShwKS5sZXJwKGIocCksIGFtdChwKS5sdW1hKTtcclxufVxyXG5leHBvcnRzLm1peCA9IG1peDtcclxuZnVuY3Rpb24gcGVybGluKHNpemVYLCBzaXplWSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IE1hdGguYWJzKHBnZW4uZ2V0VmFsdWUocC54ICogc2l6ZVgsIHAueSAqIHNpemVZLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih2LCB2LCB2LCAxKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wZXJsaW4gPSBwZXJsaW47XHJcbmZ1bmN0aW9uIHZvcm9ub2koc2l6ZVgsIHNpemVZKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICBjb25zdCB2ID0gdmdlbi5nZXRWYWx1ZShwLnggKiBzaXplWCwgcC55ICogc2l6ZVksIDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodiwgdiwgdiwgMSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudm9yb25vaSA9IHZvcm9ub2k7XHJcbmZ1bmN0aW9uIGJyaWNrcyhzaXplWCwgc2l6ZVksIHhvZmZzZXQgPSAwLjUsIGdhcCA9IDAuMDEsIHNtb290aCA9IDAuMDMsIGxpZ2h0bmVzcyA9IDAuNSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgbGV0IHV1ID0gcC54ICogc2l6ZVg7XHJcbiAgICAgICAgbGV0IHZ2ID0gcC55ICogc2l6ZVk7XHJcbiAgICAgICAgaWYgKCh2diAqIDAuNSAtIE1hdGguZmxvb3IodnYgKiAwLjUpKSA+PSAwLjUpXHJcbiAgICAgICAgICAgIHV1ICs9IHhvZmZzZXQ7XHJcbiAgICAgICAgaWYgKHV1ID49IHNpemVYKVxyXG4gICAgICAgICAgICB1dSAtPSBzaXplWDtcclxuICAgICAgICBpZiAodnYgPj0gc2l6ZVkpXHJcbiAgICAgICAgICAgIHZ2IC09IHNpemVZO1xyXG4gICAgICAgIGxldCB4ID0gdXUgLSBNYXRoLmZsb29yKHV1KTtcclxuICAgICAgICBsZXQgeSA9IHZ2IC0gTWF0aC5mbG9vcih2dik7XHJcbiAgICAgICAgbGV0IGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGdhcCA+IDAuMCkge1xyXG4gICAgICAgICAgICBpbnNpZGUgJiYgKGluc2lkZSA9IHggPiBnYXAgKiBzaXplWCk7XHJcbiAgICAgICAgICAgIGluc2lkZSAmJiAoaW5zaWRlID0geSA+IGdhcCAqIHNpemVZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHYgPSAxLjA7XHJcbiAgICAgICAgaWYgKGluc2lkZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGgubWluKE1hdGgubWluKHggLSBnYXAgKiBzaXplWCwgMS4wIC0geCkgLyBzaXplWCwgTWF0aC5taW4oeSAtIGdhcCAqIHNpemVZLCAxLjAgLSB5KSAvIHNpemVZKTtcclxuICAgICAgICAgICAgZGlzdCAqPSBNYXRoLm1pbihzaXplWCwgc2l6ZVkpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IHNtb290aCkge1xyXG4gICAgICAgICAgICAgICAgdiAqPSBkaXN0IC8gc21vb3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBicmlja0lkWCA9IE1hdGguZmxvb3IodXUpO1xyXG4gICAgICAgICAgICBjb25zdCBicmlja0lkWSA9IE1hdGguZmxvb3IodnYpO1xyXG4gICAgICAgICAgICBpZiAoYnJpY2tJZFggPiBzaXplWClcclxuICAgICAgICAgICAgICAgIGJyaWNrSWRYID0gMDtcclxuICAgICAgICAgICAgdiAqPSByYW5kKGJyaWNrSWRYICogMC4wMSwgYnJpY2tJZFkgKiAwLjAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB2ID0gMC4wO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodiwgdiwgdiwgMSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYnJpY2tzID0gYnJpY2tzO1xyXG5mdW5jdGlvbiBjaGVja2VyKHNpemVYLCBzaXplWSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3Qgc3ggPSAwLjUgLyBNYXRoLm1heChzaXplWCwgMSk7XHJcbiAgICAgICAgY29uc3Qgc3kgPSAwLjUgLyBNYXRoLm1heChzaXplWSwgMSk7XHJcbiAgICAgICAgY29uc3QgbnggPSBNYXRoLmZsb29yKHAueCAvIHN4KTtcclxuICAgICAgICBjb25zdCBueSA9IE1hdGguZmxvb3IocC55IC8gc3kpO1xyXG4gICAgICAgIGNvbnN0IHYgPSAobnggKyBueSkgJSAyID09PSAwID8gMS4wIDogMC4wO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3Iodiwgdiwgdik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY2hlY2tlciA9IGNoZWNrZXI7XHJcbmZ1bmN0aW9uIGRlZm9ybShpbnB1dCwgaGVpZ2h0TWFwLCBpbnRlbnNpdHkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHRNYXAocCkubHVtYSAtIDAuNTtcclxuICAgICAgICBjb25zdCBjID0gbmV3IGNvcmVfMS5WZWN0b3IyKHAueCArIGggKiBpbnRlbnNpdHksIHAueSArIGggKiAtaW50ZW5zaXR5KTtcclxuICAgICAgICByZXR1cm4gaW5wdXQoYyk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmb3JtID0gZGVmb3JtO1xyXG5mdW5jdGlvbiB0aHJlc2hvbGQoaW5wdXQsIHRocmVzaG9sZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IGlucHV0KHApLmx1bWE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih2ID4gdGhyZXNob2xkID8gMSA6IDAsIHYgPiB0aHJlc2hvbGQgPyAxIDogMCwgdiA+IHRocmVzaG9sZCA/IDEgOiAwKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XHJcbmZ1bmN0aW9uIHNtb290aFN0ZXAoZWRnZTAsIGVkZ2UxLCBhbXQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBhbXQocCkubHVtYTtcclxuICAgICAgICBjb25zdCB2ID0gc3N0ZXAoZWRnZTAsIGVkZ2UxLCB4KTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNtb290aFN0ZXAgPSBzbW9vdGhTdGVwO1xyXG5mdW5jdGlvbiBjaXJjbGUocmFkaXVzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBuZXcgY29yZV8xLlZlY3RvcjIoMC41LCAwLjUpO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9IHJhZGl1cyArIDAuMDAwMTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gcC5kaXN0YW5jZVRvKGNlbnRlcik7XHJcbiAgICAgICAgY29uc3QgdiA9IGRpc3QgPD0gcmFkID8gMS4wIC0gZGlzdCAvIHJhZCA6IDAuMDtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNpcmNsZSA9IGNpcmNsZTtcclxuZnVuY3Rpb24gcG9seWdvbihyYWRpdXMsIGFuZ2xlLCBzaWRlcywgZ3JhZGllbnQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgY29yZV8xLlZlY3RvcjIocC54ICogMi4wIC0gMS4wLCBwLnkgKiAyLjAgLSAxLjApO1xyXG4gICAgICAgIGNvbnN0IGEgPSBNYXRoLmF0YW4yKGMueCwgYy55KSArIGFuZ2xlO1xyXG4gICAgICAgIGNvbnN0IGIgPSAoTWF0aC5QSSAqIDIuMCkgLyBzaWRlcztcclxuICAgICAgICBjb25zdCBkID0gTWF0aC5jb3MoTWF0aC5mbG9vcigwLjUgKyBhIC8gYikgKiBiIC0gYSkgKiBjLmxlbigpIC8gcmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHYgPSAxLjAgLSBsc3RlcCgwLjggLSBncmFkaWVudCwgMC44LCBkKTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBvbHlnb24gPSBwb2x5Z29uO1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm0oaW5wdXQsIHgsIHksIHNjYWxlWCA9IDEsIHNjYWxlWSA9IDEsIHJvdGF0aW9uID0gMCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IG5ldyBjb3JlXzEuVmVjdG9yMihwLnggKiAyLjAgLSAxLjAsIHAueSAqIDIuMCAtIDEuMCk7XHJcbiAgICAgICAgLy8gcm90YXRlXHJcbiAgICAgICAgY29uc3QgciA9IG5ldyBjb3JlXzEuVmVjdG9yMihjLnggKiBNYXRoLmNvcyhyb3RhdGlvbikgLSBjLnkgKiBNYXRoLnNpbihyb3RhdGlvbiksIGMueCAqIE1hdGguc2luKHJvdGF0aW9uKSArIGMueSAqIE1hdGguY29zKHJvdGF0aW9uKSk7XHJcbiAgICAgICAgLy8gc2NhbGUgKyB0cmFuc2xhdGVcclxuICAgICAgICBjb25zdCBzID0gbmV3IGNvcmVfMS5WZWN0b3IyKHIueCAqIHNjYWxlWCArIHgsIHIueSAqIHNjYWxlWSArIHkpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dChzKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbnZhciBCbGVuZE1vZGU7XHJcbihmdW5jdGlvbiAoQmxlbmRNb2RlKSB7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiQWRkXCJdID0gMF0gPSBcIkFkZFwiO1xyXG4gICAgQmxlbmRNb2RlW0JsZW5kTW9kZVtcIlN1YnRyYWN0XCJdID0gMV0gPSBcIlN1YnRyYWN0XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiTXVsdGlwbHlcIl0gPSAyXSA9IFwiTXVsdGlwbHlcIjtcclxuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJTY3JlZW5cIl0gPSAzXSA9IFwiU2NyZWVuXCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiT3ZlcmxheVwiXSA9IDRdID0gXCJPdmVybGF5XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiRGl2aWRlXCJdID0gNV0gPSBcIkRpdmlkZVwiO1xyXG4gICAgQmxlbmRNb2RlW0JsZW5kTW9kZVtcIk1pblwiXSA9IDZdID0gXCJNaW5cIjtcclxuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJNYXhcIl0gPSA3XSA9IFwiTWF4XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiQ29sb3JcIl0gPSA4XSA9IFwiQ29sb3JcIjtcclxufSkoQmxlbmRNb2RlID0gZXhwb3J0cy5CbGVuZE1vZGUgfHwgKGV4cG9ydHMuQmxlbmRNb2RlID0ge30pKTtcclxuZnVuY3Rpb24gYmxlbmQoYSwgYiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdmEgPSBhKHApO1xyXG4gICAgICAgIGNvbnN0IHZiID0gYihwKTtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBCbGVuZE1vZGUuQWRkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLmFkZCh2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLlN1YnRyYWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLnN1Yih2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLk11bHRpcGx5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLlNjcmVlbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YS5tdWwodmIpLmFkZCh2YS5tdWwodmIpLnN1Yih2YSkubXVsU2NhbGFyKDIuMCkpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5PdmVybGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2YikuYWRkKHZhLm11bCh2YikubXVsU2NhbGFyKDIuMCkuc3ViKHZhKS5tdWwodmIpLm11bFNjYWxhcigyLjApKTtcclxuICAgICAgICAgICAgY2FzZSBCbGVuZE1vZGUuRGl2aWRlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2YikuZGl2KHZhLmFkZCh2YikubXVsU2NhbGFyKDIuMCkpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5NaW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1hdGgubWluKHZhLnIsIHZiLnIpLCBNYXRoLm1pbih2YS5nLCB2Yi5nKSwgTWF0aC5taW4odmEuYiwgdmIuYikpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5NYXg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1hdGgubWF4KHZhLnIsIHZiLnIpLCBNYXRoLm1heCh2YS5nLCB2Yi5nKSwgTWF0aC5tYXgodmEuYiwgdmIuYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmE7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYmxlbmQgPSBibGVuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TaGFkZXIgPSBleHBvcnRzLlF1YXRlcm5pb24gPSBleHBvcnRzLk1hdHJpeDQgPSBleHBvcnRzLk1hdHJpeDMgPSBleHBvcnRzLlZlY3RvcjQgPSBleHBvcnRzLlZlY3RvcjMgPSBleHBvcnRzLlZlY3RvcjIgPSB2b2lkIDA7XHJcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0aC5nbC9jb3JlXCIpO1xyXG52YXIgY29yZV8yID0gcmVxdWlyZShcIkBtYXRoLmdsL2NvcmVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlZlY3RvcjJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvcmVfMi5WZWN0b3IyOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJWZWN0b3IzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3JlXzIuVmVjdG9yMzsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVmVjdG9yNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29yZV8yLlZlY3RvcjQ7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hdHJpeDNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvcmVfMi5NYXRyaXgzOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXRyaXg0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3JlXzIuTWF0cml4NDsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUXVhdGVybmlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29yZV8yLlF1YXRlcm5pb247IH0gfSk7XHJcbmNsYXNzIFNoYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihnbCkge1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgZW5hYmxlVmVydGV4KHNyYykge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IHRoaXMuY29tcGlsZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIsIHNyYyk7XHJcbiAgICAgICAgaWYgKHZlcnRleFNoYWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSB2ZXJ0ZXggc2hhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBlbmFibGVGcmFnbWVudChzcmMpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuY29tcGlsZVNoYWRlcih0aGlzLmdsLkZSQUdNRU5UX1NIQURFUiwgc3JjKTtcclxuICAgICAgICBpZiAoZnJhZ21lbnRTaGFkZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNvbXBpbGUgZnJhZ21lbnQgc2hhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgIGlmICghdGhpcy5nbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgdGhpcy5nbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vdyB3ZSBjYW4gZGV0YWNoIGFuZCBkZWxldGUgdGhlIHNoYWRlcnNcclxuICAgICAgICBsZXQgc2hhZGVycyA9IHRoaXMuZ2wuZ2V0QXR0YWNoZWRTaGFkZXJzKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgaWYgKHNoYWRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzaGFkZXIgb2Ygc2hhZGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZXRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCBzaGFkZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldEF0dHJpYnV0ZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYyA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvYyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tuYW1lXSA9IGxvYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIGJpbmRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgaW5kZXgsIG5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0VGV4dHVyZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHRoaXMudW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvYyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmlmb3JtIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0gPSBsb2M7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VW5pZm9ybShuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHRoaXMudW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGxvYyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmlmb3JtIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0gPSBsb2M7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb3JlXzEuVmVjdG9yMikge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHZhbHVlLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY29yZV8xLlZlY3RvcjMpIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2YWx1ZS50b0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvcmVfMS5WZWN0b3I0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdmFsdWUudG9BcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb3JlXzEuTWF0cml4Mykge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZS50b0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvcmVfMS5NYXRyaXg0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuICAgIGNvbXBpbGVTaGFkZXIodHlwZSwgc3JjKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgICAgaWYgKHNoYWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHNoYWRlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzcmMpO1xyXG4gICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TaGFkZXIgPSBTaGFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UZXh0dXJlMkQgPSBleHBvcnRzLklUZXh0dXJlID0gdm9pZCAwO1xyXG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuY29uc3QgY29tcGxldGVyXzEgPSByZXF1aXJlKFwiLi9jb21wbGV0ZXJcIik7XHJcbmNsYXNzIElUZXh0dXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBiaW5kKHVuaXQpIHtcclxuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHVuaXQpO1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy50YXJnZXQsIHRoaXMudGV4dHVyZSk7XHJcbiAgICB9XHJcbiAgICB1bmJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLnRhcmdldCwgbnVsbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JVGV4dHVyZSA9IElUZXh0dXJlO1xyXG5jbGFzcyBUZXh0dXJlMkQgZXh0ZW5kcyBJVGV4dHVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnbCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBpbnRlcm5hbEZvcm1hdCwgdHlwZSkge1xyXG4gICAgICAgIHN1cGVyKGdsLCBnbC5URVhUVVJFXzJEKTtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcclxuICAgICAgICB0aGlzLmludGVybmFsRm9ybWF0ID0gaW50ZXJuYWxGb3JtYXQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJpbmcobWluLCBtYWcpIHtcclxuICAgICAgICB0aGlzLmJpbmQoMCk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgbWluKTtcclxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBtYWcpO1xyXG4gICAgICAgIHRoaXMudW5iaW5kKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZnJvbUltYWdlKGdsLCB1cmwsIGZvcm1hdCA9IGdsLlJHQkEsIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQSwgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wbCA9IG5ldyBjb21wbGV0ZXJfMS5Db21wbGV0ZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleCA9IG5ldyBUZXh0dXJlMkQoZ2wsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIGZvcm1hdCwgaW50ZXJuYWxGb3JtYXQsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGV4LmJpbmQoMCk7XHJcbiAgICAgICAgICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcclxuICAgICAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgICAgICAgICAgICAgdGV4LnVuYmluZCgpO1xyXG4gICAgICAgICAgICAgICAgY29tcGwuY29tcGxldGUodGV4KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgY29tcGwucmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wbC5wcm9taXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHByb2NlZHVyYWwoZ2wsIHdpZHRoLCBoZWlnaHQsIGZ1bmMpIHtcclxuICAgICAgICBsZXQgdGV4ID0gbmV3IFRleHR1cmUyRChnbCwgd2lkdGgsIGhlaWdodCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSk7XHJcbiAgICAgICAgdGV4LmJpbmQoMCk7XHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gZnVuYyhuZXcgY29yZV8xLlZlY3RvcjIoeCAvIHdpZHRoLCB5IC8gaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyh5ICogd2lkdGggKyB4KSAqIDQgKyAwXSA9IH5+KHYuciAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyh5ICogd2lkdGggKyB4KSAqIDQgKyAxXSA9IH5+KHYuZyAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyh5ICogd2lkdGggKyB4KSAqIDQgKyAyXSA9IH5+KHYuYiAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyh5ICogd2lkdGggKyB4KSAqIDQgKyAzXSA9IH5+KHYuYSAqIDI1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBkYXRhKTtcclxuICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgICAgICB0ZXgudW5iaW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRleDtcclxuICAgIH1cclxuICAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoOyB9XHJcbiAgICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5faGVpZ2h0OyB9XHJcbn1cclxuZXhwb3J0cy5UZXh0dXJlMkQgPSBUZXh0dXJlMkQ7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==