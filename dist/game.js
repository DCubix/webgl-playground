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
const loaders_1 = __webpack_require__(/*! ./loaders */ "./src/loaders.ts");
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
        let img = yield (0, loaders_1.loadImage)("me.jpg");
        let redDonut = (0, procedural_texture_1.mix)((0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#ffff00")), (0, procedural_texture_1.sample)(img, procedural_texture_1.Filter.Linear), (0, procedural_texture_1.deform)((0, procedural_texture_1.smoothStep)(0.3, 0.31, (0, procedural_texture_1.blend)((0, procedural_texture_1.circle)(0.5), (0, procedural_texture_1.circle)(0.28), procedural_texture_1.BlendMode.Subtract)), (0, procedural_texture_1.perlin)(2, 2), 0.04));
        let texGen = (0, procedural_texture_1.mix)((0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#363b45")), (0, procedural_texture_1.solid)(procedural_texture_1.Color.fromHex("#94544d")), (0, procedural_texture_1.bricks)(4.0, 8.0));
        let tex = texture_1.Texture2D.procedural(display.gl, 256, 256, redDonut);
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

/***/ "./src/loaders.ts":
/*!************************!*\
  !*** ./src/loaders.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadImage = void 0;
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            resolve(context.getImageData(0, 0, image.width, image.height));
        };
        image.onerror = () => reject(new Error(`Could not load image: ${url}`));
        image.src = url;
    });
}
exports.loadImage = loadImage;


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
exports.sample = exports.Filter = exports.normalMap = exports.blend = exports.BlendMode = exports.transform = exports.polygon = exports.circle = exports.smoothStep = exports.threshold = exports.deform = exports.checker = exports.bricks = exports.voronoi = exports.perlin = exports.mix = exports.scalar = exports.solid = exports.Color = void 0;
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
function bricks(sizeX, sizeY, xoffset = 0.5, gap = 0.01, smooth = 0.03) {
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
            // let brickIdX = Math.floor(uu);
            // const brickIdY = Math.floor(vv);
            // if (brickIdX > sizeX) brickIdX = 0;
            // v *= rand(brickIdX * 0.01, brickIdY * 0.01);
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
function normalMap(input, width, height, strength = 1) {
    return function (p) {
        const epx = 1.0 / width, epy = 1.0 / height;
        const d0 = Math.abs(input(p).luma);
        const d1 = Math.abs(input(new core_1.Vector2(p.x + epx, p.y)).luma) * strength / 2.0;
        const d2 = Math.abs(input(new core_1.Vector2(p.x - epx, p.y)).luma) * strength / 2.0;
        const d3 = Math.abs(input(new core_1.Vector2(p.x, p.y + epy)).luma) * strength / 2.0;
        const d4 = Math.abs(input(new core_1.Vector2(p.x, p.y - epy)).luma) * strength / 2.0;
        const dx = ((d2 - d0) + (d0 - d1)) * 0.5;
        const dy = ((d4 - d0) + (d0 - d3)) * 0.5;
        const n = new core_1.Vector3(dx, dy, 1.0).normalize();
        return new Color(n.x * 0.5 + 0.5, n.y * 0.5 + 0.5, n.z * 0.5 + 0.5);
    };
}
exports.normalMap = normalMap;
var Filter;
(function (Filter) {
    Filter[Filter["Nearest"] = 0] = "Nearest";
    Filter[Filter["Linear"] = 1] = "Linear";
})(Filter = exports.Filter || (exports.Filter = {}));
function sample(image, filter = Filter.Nearest) {
    return function (p) {
        switch (filter) {
            case Filter.Nearest: {
                const x = Math.floor(p.x * image.width);
                const y = Math.floor(p.y * image.height);
                const i = (y * image.width + x) * 4;
                return new Color(image.data[i + 0] / 255.0, image.data[i + 1] / 255.0, image.data[i + 2] / 255.0, image.data[i + 3] / 255.0);
            }
            case Filter.Linear: {
                const x0 = Math.floor(p.x * image.width);
                const y0 = Math.floor(p.y * image.height);
                const x1 = x0 + 1;
                const y1 = y0 + 1;
                const x = p.x * image.width - x0;
                const y = p.y * image.height - y0;
                const i0 = (y0 * image.width + x0) * 4;
                const i1 = (y0 * image.width + x1) * 4;
                const i2 = (y1 * image.width + x0) * 4;
                const i3 = (y1 * image.width + x1) * 4;
                const c0 = new Color(image.data[i0 + 0] / 255.0, image.data[i0 + 1] / 255.0, image.data[i0 + 2] / 255.0, image.data[i0 + 3] / 255.0);
                const c1 = new Color(image.data[i1 + 0] / 255.0, image.data[i1 + 1] / 255.0, image.data[i1 + 2] / 255.0, image.data[i1 + 3] / 255.0);
                const c2 = new Color(image.data[i2 + 0] / 255.0, image.data[i2 + 1] / 255.0, image.data[i2 + 2] / 255.0, image.data[i2 + 3] / 255.0);
                const c3 = new Color(image.data[i3 + 0] / 255.0, image.data[i3 + 1] / 255.0, image.data[i3 + 2] / 255.0, image.data[i3 + 3] / 255.0);
                return new Color(c0.r * (1.0 - x) * (1.0 - y) + c1.r * x * (1.0 - y) + c2.r * (1.0 - x) * y + c3.r * x * y, c0.g * (1.0 - x) * (1.0 - y) + c1.g * x * (1.0 - y) + c2.g * (1.0 - x) * y + c3.g * x * y, c0.b * (1.0 - x) * (1.0 - y) + c1.b * x * (1.0 - y) + c2.b * (1.0 - x) * y + c3.b * x * y, c0.a * (1.0 - x) * (1.0 - y) + c1.a * x * (1.0 - y) + c2.a * (1.0 - x) * y + c3.a * x * y);
            }
        }
    };
}
exports.sample = sample;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixrREFBSzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixrREFBSzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDLGVBQWUsS0FBSztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7Ozs7O0FDN1NGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7Ozs7O0FDdkJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUN0QkY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyx5REFBUztBQUMvQyxhQUFhO0FBQ2IsdUNBQXVDLG1CQUFPLENBQUMsMkVBQWtCO0FBQ2pFLHNCQUFzQjtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx5REFBUztBQUMvQyxhQUFhOzs7Ozs7Ozs7OztBQ1ZBO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUMvQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDcFFGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjs7Ozs7OztVQ3RGakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS9tYXRoLWFycmF5LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9iYXNlL21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL2V1bGVyLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9tYXRyaXgzLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9tYXRyaXg0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9wb3NlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9xdWF0ZXJuaW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9zcGhlcmljYWwtY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjIuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2xpYi9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9saWIvY29tbW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vbGliL2dsLW1hdHJpeC1leHRyYXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9saWIvbWF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2xpYi92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vY29tbW9uLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0My5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDQuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9xdWF0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjMi5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS92ZWM0LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL2ludGVycG9sYXRpb24uanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbWF0aGNvbnN0cy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvTW9kdWxlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvR2VuZXJhdG9yTW9kdWxlLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvYmlsbG93LmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvY2hlY2tlcmJvYXJkLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3IvY29uc3QuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvci9jeWxpbmRlcnMuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3Blcmxpbi5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3JpZGdlZG11bHRpLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL21vZHVsZS9nZW5lcmF0b3Ivc3BoZXJlcy5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy9tb2R1bGUvZ2VuZXJhdG9yL3Zvcm9ub2kuanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvbm9pc2VnZW4uanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvdXRpbC9UdXBsZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy91dGlsL2NsYW1wLmpzIiwid2VicGFjazovL3NuYWtlLy4vbm9kZV9tb2R1bGVzL2xpYm5vaXNlLXRzL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9ub2RlX21vZHVsZXMvbGlibm9pc2UtdHMvdXRpbC9tYWtlSW50MzJSYW5nZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL25vZGVfbW9kdWxlcy9saWJub2lzZS10cy92ZWN0b3J0YWJsZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9jb21wbGV0ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zcmMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9sb2FkZXJzLnRzIiwid2VicGFjazovL3NuYWtlLy4vc3JjL21lc2gudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zcmMvcHJvY2VkdXJhbF90ZXh0dXJlLnRzIiwid2VicGFjazovL3NuYWtlLy4vc3JjL3NoYWRlci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy90ZXh0dXJlLnRzIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogY2xzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgfSBlbHNlIHtcbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gIH1cblxuICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbmltcG9ydCB7IGNvbmZpZywgZm9ybWF0VmFsdWUsIGVxdWFscywgaXNBcnJheSB9IGZyb20gJy4uLy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IGFzc2VydCBmcm9tICcuLi8uLi9saWIvYXNzZXJ0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhBcnJheSBleHRlbmRzIF9leHRlbmRhYmxlQnVpbHRpbihBcnJheSkge1xuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgYXNzZXJ0KGZhbHNlKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG4gIH1cblxuICBmcm9tKGFycmF5T3JPYmplY3QpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheU9yT2JqZWN0KSA/IHRoaXMuY29weShhcnJheU9yT2JqZWN0KSA6IHRoaXMuZnJvbU9iamVjdChhcnJheU9yT2JqZWN0KTtcbiAgfVxuXG4gIGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gYXJyYXlbaSArIG9mZnNldF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRvKGFycmF5T3JPYmplY3QpIHtcbiAgICBpZiAoYXJyYXlPck9iamVjdCA9PT0gdGhpcykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXlPck9iamVjdCkgPyB0aGlzLnRvQXJyYXkoYXJyYXlPck9iamVjdCkgOiB0aGlzLnRvT2JqZWN0KGFycmF5T3JPYmplY3QpO1xuICB9XG5cbiAgdG9UYXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldCA/IHRoaXMudG8odGFyZ2V0KSA6IHRoaXM7XG4gIH1cblxuICB0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgYXJyYXlbb2Zmc2V0ICsgaV0gPSB0aGlzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKGNvbmZpZyk7XG4gIH1cblxuICBmb3JtYXRTdHJpbmcob3B0cykge1xuICAgIGxldCBzdHJpbmcgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBzdHJpbmcgKz0gKGkgPiAwID8gJywgJyA6ICcnKSArIGZvcm1hdFZhbHVlKHRoaXNbaV0sIG9wdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiLmNvbmNhdChvcHRzLnByaW50VHlwZXMgPyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgOiAnJywgXCJbXCIpLmNvbmNhdChzdHJpbmcsIFwiXVwiKTtcbiAgfVxuXG4gIGVxdWFscyhhcnJheSkge1xuICAgIGlmICghYXJyYXkgfHwgdGhpcy5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBpZiAoIWVxdWFscyh0aGlzW2ldLCBhcnJheVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhhY3RFcXVhbHMoYXJyYXkpIHtcbiAgICBpZiAoIWFycmF5IHx8IHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgaWYgKHRoaXNbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5lZ2F0ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IC10aGlzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBsZXJwKGEsIGIsIHQpIHtcbiAgICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ID0gYjtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGNvbnN0IGFpID0gYVtpXTtcbiAgICAgIHRoaXNbaV0gPSBhaSArIHQgKiAoYltpXSAtIGFpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbWluKHZlY3Rvcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gTWF0aC5taW4odmVjdG9yW2ldLCB0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbWF4KHZlY3Rvcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gTWF0aC5tYXgodmVjdG9yW2ldLCB0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2xhbXAobWluVmVjdG9yLCBtYXhWZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXNbaV0sIG1pblZlY3RvcltpXSksIG1heFZlY3RvcltpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGFkZCguLi52ZWN0b3JzKSB7XG4gICAgZm9yIChjb25zdCB2ZWN0b3Igb2YgdmVjdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSArPSB2ZWN0b3JbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHN1YnRyYWN0KC4uLnZlY3RvcnMpIHtcbiAgICBmb3IgKGNvbnN0IHZlY3RvciBvZiB2ZWN0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICB0aGlzW2ldIC09IHZlY3RvcltpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2NhbGUoc2NhbGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2FsZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KHNjYWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSAqPSBzY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc3ViKGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIHNldFNjYWxhcihhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSBhO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGRTY2FsYXIoYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldICs9IGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHN1YlNjYWxhcihhKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkU2NhbGFyKC1hKTtcbiAgfVxuXG4gIG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldICo9IHNjYWxhcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZGl2aWRlU2NhbGFyKGEpIHtcbiAgICByZXR1cm4gdGhpcy5zY2FsZSgxIC8gYSk7XG4gIH1cblxuICBjbGFtcFNjYWxhcihtaW4sIG1heCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gTWF0aC5taW4oTWF0aC5tYXgodGhpc1tpXSwgbWluKSwgbWF4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICByZXR1cm4gdGhpcy5zY2FsZShzY2FsYXIpO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2soKSB7XG4gICAgaWYgKGNvbmZpZy5kZWJ1ZyAmJiAhdGhpcy52YWxpZGF0ZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYXRoLmdsOiBcIi5jb25jYXQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBcIiBzb21lIGZpZWxkcyBzZXQgdG8gaW52YWxpZCBudW1iZXJzJ1wiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgdmFsaWQgPSB0aGlzLmxlbmd0aCA9PT0gdGhpcy5FTEVNRU5UUztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB2YWxpZCA9IHZhbGlkICYmIE51bWJlci5pc0Zpbml0ZSh0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC1hcnJheS5qcy5tYXAiLCJpbXBvcnQgTWF0aEFycmF5IGZyb20gJy4vbWF0aC1hcnJheSc7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uLy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IGFzc2VydCBmcm9tICcuLi8uLi9saWIvYXNzZXJ0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCBleHRlbmRzIE1hdGhBcnJheSB7XG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICBhc3NlcnQoZmFsc2UpO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IFJBTksoKSB7XG4gICAgYXNzZXJ0KGZhbHNlKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmcgPSAnWyc7XG5cbiAgICBpZiAoY29uZmlnLnByaW50Um93TWFqb3IpIHtcbiAgICAgIHN0cmluZyArPSAncm93LW1ham9yOic7XG5cbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuUkFOSzsgKytyb3cpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5SQU5LOyArK2NvbCkge1xuICAgICAgICAgIHN0cmluZyArPSBcIiBcIi5jb25jYXQodGhpc1tjb2wgKiB0aGlzLlJBTksgKyByb3ddKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgKz0gJ2NvbHVtbi1tYWpvcjonO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICBzdHJpbmcgKz0gXCIgXCIuY29uY2F0KHRoaXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZyArPSAnXSc7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGdldEVsZW1lbnRJbmRleChyb3csIGNvbCkge1xuICAgIHJldHVybiBjb2wgKiB0aGlzLlJBTksgKyByb3c7XG4gIH1cblxuICBnZXRFbGVtZW50KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXNbY29sICogdGhpcy5SQU5LICsgcm93XTtcbiAgfVxuXG4gIHNldEVsZW1lbnQocm93LCBjb2wsIHZhbHVlKSB7XG4gICAgdGhpc1tjb2wgKiB0aGlzLlJBTksgKyByb3ddID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29sdW1uKGNvbHVtbkluZGV4LCByZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5SQU5LKS5maWxsKC0wKSkge1xuICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjb2x1bW5JbmRleCAqIHRoaXMuUkFOSztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5SQU5LOyArK2kpIHtcbiAgICAgIHJlc3VsdFtpXSA9IHRoaXNbZmlyc3RJbmRleCArIGldO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXRDb2x1bW4oY29sdW1uSW5kZXgsIGNvbHVtblZlY3Rvcikge1xuICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjb2x1bW5JbmRleCAqIHRoaXMuUkFOSztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5SQU5LOyArK2kpIHtcbiAgICAgIHRoaXNbZmlyc3RJbmRleCArIGldID0gY29sdW1uVmVjdG9yW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdHJpeC5qcy5tYXAiLCJpbXBvcnQgTWF0aEFycmF5IGZyb20gJy4vbWF0aC1hcnJheSc7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uLy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnLi4vLi4vbGliL2Fzc2VydCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IgZXh0ZW5kcyBNYXRoQXJyYXkge1xuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgYXNzZXJ0KGZhbHNlKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvcHkodmVjdG9yKSB7XG4gICAgYXNzZXJ0KGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXNbMV07XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBsZW4oKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxdWFyZWQoKSk7XG4gIH1cblxuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuKCk7XG4gIH1cblxuICBsZW5ndGhTcXVhcmVkKCkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSB0aGlzW2ldICogdGhpc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgbWFnbml0dWRlU3F1YXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhTcXVhcmVkKCk7XG4gIH1cblxuICBkaXN0YW5jZShtYXRoQXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcXVhcmVkKG1hdGhBcnJheSkpO1xuICB9XG5cbiAgZGlzdGFuY2VTcXVhcmVkKG1hdGhBcnJheSkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGNvbnN0IGRpc3QgPSB0aGlzW2ldIC0gbWF0aEFycmF5W2ldO1xuICAgICAgbGVuZ3RoICs9IGRpc3QgKiBkaXN0O1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja051bWJlcihsZW5ndGgpO1xuICB9XG5cbiAgZG90KG1hdGhBcnJheSkge1xuICAgIGxldCBwcm9kdWN0ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBwcm9kdWN0ICs9IHRoaXNbaV0gKiBtYXRoQXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKHByb2R1Y3QpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG5cbiAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICB0aGlzW2ldIC89IGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHkoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gKj0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkaXZpZGUoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gLz0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBsZW5ndGhTcSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhTcXVhcmVkKCk7XG4gIH1cblxuICBkaXN0YW5jZVRvKHZlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlKHZlY3Rvcik7XG4gIH1cblxuICBkaXN0YW5jZVRvU3F1YXJlZCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZVNxdWFyZWQodmVjdG9yKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudChpKSB7XG4gICAgYXNzZXJ0KGkgPj0gMCAmJiBpIDwgdGhpcy5FTEVNRU5UUywgJ2luZGV4IGlzIG91dCBvZiByYW5nZScpO1xuICAgIHJldHVybiBjaGVja051bWJlcih0aGlzW2ldKTtcbiAgfVxuXG4gIHNldENvbXBvbmVudChpLCB2YWx1ZSkge1xuICAgIGFzc2VydChpID49IDAgJiYgaSA8IHRoaXMuRUxFTUVOVFMsICdpbmRleCBpcyBvdXQgb2YgcmFuZ2UnKTtcbiAgICB0aGlzW2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGFkZFZlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiB0aGlzLmNvcHkoYSkuYWRkKGIpO1xuICB9XG5cbiAgc3ViVmVjdG9ycyhhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weShhKS5zdWJ0cmFjdChiKTtcbiAgfVxuXG4gIG11bHRpcGx5VmVjdG9ycyhhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weShhKS5tdWx0aXBseShiKTtcbiAgfVxuXG4gIGFkZFNjYWxlZFZlY3RvcihhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5ldyB0aGlzLmNvbnN0cnVjdG9yKGEpLm11bHRpcGx5U2NhbGFyKGIpKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IuanMubWFwIiwiaW1wb3J0IE1hdGhBcnJheSBmcm9tICcuL2Jhc2UvbWF0aC1hcnJheSc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgUXVhdGVybmlvbiBmcm9tICcuL3F1YXRlcm5pb24nO1xuY29uc3QgRVJSX1VOS05PV05fT1JERVIgPSAnVW5rbm93biBFdWxlciBhbmdsZSBvcmRlcic7XG5jb25zdCBBTE1PU1RfT05FID0gMC45OTk5OTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcmRlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8IDY7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3JkZXIodmFsdWUpIHtcbiAgaWYgKHZhbHVlIDwgMCAmJiB2YWx1ZSA+PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKEVSUl9VTktOT1dOX09SREVSKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXVsZXIgZXh0ZW5kcyBNYXRoQXJyYXkge1xuICBzdGF0aWMgZ2V0IFpZWCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWVhaKCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgc3RhdGljIGdldCBYWlkoKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFpYWSgpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWVpYKCkge1xuICAgIHJldHVybiA0O1xuICB9XG5cbiAgc3RhdGljIGdldCBYWVooKSB7XG4gICAgcmV0dXJuIDU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFJvbGxQaXRjaFlhdygpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdE9yZGVyKCkge1xuICAgIHJldHVybiBFdWxlci5aWVg7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFJvdGF0aW9uT3JkZXJzKCkge1xuICAgIHJldHVybiBbJ1pZWCcsICdZWFonLCAnWFpZJywgJ1pYWScsICdZWlgnLCAnWFlaJ107XG4gIH1cblxuICBzdGF0aWMgcm90YXRpb25PcmRlcihvcmRlcikge1xuICAgIHJldHVybiBFdWxlci5Sb3RhdGlvbk9yZGVyc1tvcmRlcl07XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBvcmRlciA9IEV1bGVyLkRlZmF1bHRPcmRlcikge1xuICAgIHN1cGVyKC0wLCAtMCwgLTAsIC0wKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIHRoaXMuZnJvbVZlY3RvcjMoLi4uYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXQoeCwgeSwgeiwgb3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZyb21RdWF0ZXJuaW9uKHF1YXRlcm5pb24pIHtcbiAgICBjb25zdCBbeCwgeSwgeiwgd10gPSBxdWF0ZXJuaW9uO1xuICAgIGNvbnN0IHlzcXIgPSB5ICogeTtcbiAgICBjb25zdCB0MCA9IC0yLjAgKiAoeXNxciArIHogKiB6KSArIDEuMDtcbiAgICBjb25zdCB0MSA9ICsyLjAgKiAoeCAqIHkgKyB3ICogeik7XG4gICAgbGV0IHQyID0gLTIuMCAqICh4ICogeiAtIHcgKiB5KTtcbiAgICBjb25zdCB0MyA9ICsyLjAgKiAoeSAqIHogKyB3ICogeCk7XG4gICAgY29uc3QgdDQgPSAtMi4wICogKHggKiB4ICsgeXNxcikgKyAxLjA7XG4gICAgdDIgPSB0MiA+IDEuMCA/IDEuMCA6IHQyO1xuICAgIHQyID0gdDIgPCAtMS4wID8gLTEuMCA6IHQyO1xuICAgIGNvbnN0IHJvbGwgPSBNYXRoLmF0YW4yKHQzLCB0NCk7XG4gICAgY29uc3QgcGl0Y2ggPSBNYXRoLmFzaW4odDIpO1xuICAgIGNvbnN0IHlhdyA9IE1hdGguYXRhbjIodDEsIHQwKTtcbiAgICByZXR1cm4gbmV3IEV1bGVyKHJvbGwsIHBpdGNoLCB5YXcsIEV1bGVyLlJvbGxQaXRjaFlhdyk7XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IE51bWJlci5pc0Zpbml0ZShhcnJheVszXSkgfHwgdGhpcy5vcmRlcjtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0KHggPSAwLCB5ID0gMCwgeiA9IDAsIG9yZGVyKSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgdGhpc1syXSA9IHo7XG4gICAgdGhpc1szXSA9IE51bWJlci5pc0Zpbml0ZShvcmRlcikgPyBvcmRlciA6IHRoaXNbM107XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIHJldHVybiB2YWxpZGF0ZU9yZGVyKHRoaXNbM10pICYmIE51bWJlci5pc0Zpbml0ZSh0aGlzWzBdKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpc1sxXSkgJiYgTnVtYmVyLmlzRmluaXRlKHRoaXNbMl0pO1xuICB9XG5cbiAgdG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG4gICAgYXJyYXlbb2Zmc2V0XSA9IHRoaXNbMF07XG4gICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzWzFdO1xuICAgIGFycmF5W29mZnNldCArIDJdID0gdGhpc1syXTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICB0b0FycmF5NChhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG4gICAgYXJyYXlbb2Zmc2V0XSA9IHRoaXNbMF07XG4gICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzWzFdO1xuICAgIGFycmF5W29mZnNldCArIDJdID0gdGhpc1syXTtcbiAgICBhcnJheVtvZmZzZXQgKyAzXSA9IHRoaXNbM107XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgdG9WZWN0b3IzKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IHRoaXNbMF07XG4gICAgcmVzdWx0WzFdID0gdGhpc1sxXTtcbiAgICByZXN1bHRbMl0gPSB0aGlzWzJdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzWzFdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgYWxwaGEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICBzZXQgYWxwaGEodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGJldGEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMV07XG4gIH1cblxuICBzZXQgYmV0YSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZ2FtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgZ2FtbWEodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBoaSgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCBwaGkodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRoZXRhKCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHRoZXRhKHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwc2koKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgcHNpKHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCByb2xsKCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IHJvbGwodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBpdGNoKCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHBpdGNoKHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5YXcoKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeWF3KHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBvcmRlcigpIHtcbiAgICByZXR1cm4gdGhpc1szXTtcbiAgfVxuXG4gIHNldCBvcmRlcih2YWx1ZSkge1xuICAgIHRoaXNbM10gPSBjaGVja09yZGVyKHZhbHVlKTtcbiAgfVxuXG4gIGZyb21WZWN0b3IzKHYsIG9yZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHZbMF0sIHZbMV0sIHZbMl0sIE51bWJlci5pc0Zpbml0ZShvcmRlcikgPyBvcmRlciA6IHRoaXNbM10pO1xuICB9XG5cbiAgZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzAgKyBvZmZzZXRdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxICsgb2Zmc2V0XTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMiArIG9mZnNldF07XG5cbiAgICBpZiAoYXJyYXlbM10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tUm9sbFBpdGNoWWF3KHJvbGwsIHBpdGNoLCB5YXcpIHtcbiAgICByZXR1cm4gdGhpcy5zZXQocm9sbCwgcGl0Y2gsIHlhdywgRXVsZXIuWllYKTtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvbk1hdHJpeChtLCBvcmRlciA9IEV1bGVyLkRlZmF1bHRPcmRlcikge1xuICAgIHRoaXMuX2Zyb21Sb3RhdGlvbk1hdHJpeChtLCBvcmRlcik7XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXgobSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRSb3RhdGlvbk1hdHJpeChtKTtcbiAgfVxuXG4gIGdldFF1YXRlcm5pb24oKSB7XG4gICAgY29uc3QgcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbiAgICBzd2l0Y2ggKHRoaXNbM10pIHtcbiAgICAgIGNhc2UgRXVsZXIuWFlaOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVYKHRoaXNbMF0pLnJvdGF0ZVkodGhpc1sxXSkucm90YXRlWih0aGlzWzJdKTtcblxuICAgICAgY2FzZSBFdWxlci5ZWFo6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVkodGhpc1swXSkucm90YXRlWCh0aGlzWzFdKS5yb3RhdGVaKHRoaXNbMl0pO1xuXG4gICAgICBjYXNlIEV1bGVyLlpYWTpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWih0aGlzWzBdKS5yb3RhdGVYKHRoaXNbMV0pLnJvdGF0ZVkodGhpc1syXSk7XG5cbiAgICAgIGNhc2UgRXVsZXIuWllYOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVaKHRoaXNbMF0pLnJvdGF0ZVkodGhpc1sxXSkucm90YXRlWCh0aGlzWzJdKTtcblxuICAgICAgY2FzZSBFdWxlci5ZWlg6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVkodGhpc1swXSkucm90YXRlWih0aGlzWzFdKS5yb3RhdGVYKHRoaXNbMl0pO1xuXG4gICAgICBjYXNlIEV1bGVyLlhaWTpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWCh0aGlzWzBdKS5yb3RhdGVaKHRoaXNbMV0pLnJvdGF0ZVkodGhpc1syXSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gICAgfVxuICB9XG5cbiAgX2Zyb21Sb3RhdGlvbk1hdHJpeChtLCBvcmRlciA9IEV1bGVyLkRlZmF1bHRPcmRlcikge1xuICAgIGNvbnN0IHRlID0gbS5lbGVtZW50cztcbiAgICBjb25zdCBtMTEgPSB0ZVswXSxcbiAgICAgICAgICBtMTIgPSB0ZVs0XSxcbiAgICAgICAgICBtMTMgPSB0ZVs4XTtcbiAgICBjb25zdCBtMjEgPSB0ZVsxXSxcbiAgICAgICAgICBtMjIgPSB0ZVs1XSxcbiAgICAgICAgICBtMjMgPSB0ZVs5XTtcbiAgICBjb25zdCBtMzEgPSB0ZVsyXSxcbiAgICAgICAgICBtMzIgPSB0ZVs2XSxcbiAgICAgICAgICBtMzMgPSB0ZVsxMF07XG4gICAgb3JkZXIgPSBvcmRlciB8fCB0aGlzWzNdO1xuXG4gICAgc3dpdGNoIChvcmRlcikge1xuICAgICAgY2FzZSBFdWxlci5YWVo6XG4gICAgICAgIHRoaXNbMV0gPSBNYXRoLmFzaW4oY2xhbXAobTEzLCAtMSwgMSkpO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhtMTMpIDwgQUxNT1NUX09ORSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBNYXRoLmF0YW4yKC1tMjMsIG0zMyk7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIoLW0xMiwgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMihtMzIsIG0yMik7XG4gICAgICAgICAgdGhpc1syXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFdWxlci5ZWFo6XG4gICAgICAgIHRoaXNbMF0gPSBNYXRoLmFzaW4oLWNsYW1wKG0yMywgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTIzKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMihtMTMsIG0zMyk7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIobTIxLCBtMjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKC1tMzEsIG0xMSk7XG4gICAgICAgICAgdGhpc1syXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFdWxlci5aWFk6XG4gICAgICAgIHRoaXNbMF0gPSBNYXRoLmFzaW4oY2xhbXAobTMyLCAtMSwgMSkpO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhtMzIpIDwgQUxNT1NUX09ORSkge1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKC1tMzEsIG0zMyk7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIoLW0xMiwgbTIyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzFdID0gMDtcbiAgICAgICAgICB0aGlzWzJdID0gTWF0aC5hdGFuMihtMjEsIG0xMSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFdWxlci5aWVg6XG4gICAgICAgIHRoaXNbMV0gPSBNYXRoLmFzaW4oLWNsYW1wKG0zMSwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTMxKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMihtMzIsIG0zMyk7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIobTIxLCBtMTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbMF0gPSAwO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKC1tMTIsIG0yMik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFdWxlci5ZWlg6XG4gICAgICAgIHRoaXNbMl0gPSBNYXRoLmFzaW4oY2xhbXAobTIxLCAtMSwgMSkpO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhtMjEpIDwgQUxNT1NUX09ORSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBNYXRoLmF0YW4yKC1tMjMsIG0yMik7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIoLW0zMSwgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gMDtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMihtMTMsIG0zMyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFdWxlci5YWlk6XG4gICAgICAgIHRoaXNbMl0gPSBNYXRoLmFzaW4oLWNsYW1wKG0xMiwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTEyKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMihtMzIsIG0yMik7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIobTEzLCBtMTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbMF0gPSBNYXRoLmF0YW4yKC1tMjMsIG0zMyk7XG4gICAgICAgICAgdGhpc1sxXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9VTktOT1dOX09SREVSKTtcbiAgICB9XG5cbiAgICB0aGlzWzNdID0gb3JkZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfZ2V0Um90YXRpb25NYXRyaXgocmVzdWx0KSB7XG4gICAgY29uc3QgdGUgPSByZXN1bHQgfHwgWy0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wXTtcbiAgICBjb25zdCB4ID0gdGhpcy54LFxuICAgICAgICAgIHkgPSB0aGlzLnksXG4gICAgICAgICAgeiA9IHRoaXMuejtcbiAgICBjb25zdCBhID0gTWF0aC5jb3MoeCk7XG4gICAgY29uc3QgYyA9IE1hdGguY29zKHkpO1xuICAgIGNvbnN0IGUgPSBNYXRoLmNvcyh6KTtcbiAgICBjb25zdCBiID0gTWF0aC5zaW4oeCk7XG4gICAgY29uc3QgZCA9IE1hdGguc2luKHkpO1xuICAgIGNvbnN0IGYgPSBNYXRoLnNpbih6KTtcblxuICAgIHN3aXRjaCAodGhpc1szXSkge1xuICAgICAgY2FzZSBFdWxlci5YWVo6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBhZSA9IGEgKiBlLFxuICAgICAgICAgICAgICAgIGFmID0gYSAqIGYsXG4gICAgICAgICAgICAgICAgYmUgPSBiICogZSxcbiAgICAgICAgICAgICAgICBiZiA9IGIgKiBmO1xuICAgICAgICAgIHRlWzBdID0gYyAqIGU7XG4gICAgICAgICAgdGVbNF0gPSAtYyAqIGY7XG4gICAgICAgICAgdGVbOF0gPSBkO1xuICAgICAgICAgIHRlWzFdID0gYWYgKyBiZSAqIGQ7XG4gICAgICAgICAgdGVbNV0gPSBhZSAtIGJmICogZDtcbiAgICAgICAgICB0ZVs5XSA9IC1iICogYztcbiAgICAgICAgICB0ZVsyXSA9IGJmIC0gYWUgKiBkO1xuICAgICAgICAgIHRlWzZdID0gYmUgKyBhZiAqIGQ7XG4gICAgICAgICAgdGVbMTBdID0gYSAqIGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBFdWxlci5ZWFo6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjZSA9IGMgKiBlLFxuICAgICAgICAgICAgICAgIGNmID0gYyAqIGYsXG4gICAgICAgICAgICAgICAgZGUgPSBkICogZSxcbiAgICAgICAgICAgICAgICBkZiA9IGQgKiBmO1xuICAgICAgICAgIHRlWzBdID0gY2UgKyBkZiAqIGI7XG4gICAgICAgICAgdGVbNF0gPSBkZSAqIGIgLSBjZjtcbiAgICAgICAgICB0ZVs4XSA9IGEgKiBkO1xuICAgICAgICAgIHRlWzFdID0gYSAqIGY7XG4gICAgICAgICAgdGVbNV0gPSBhICogZTtcbiAgICAgICAgICB0ZVs5XSA9IC1iO1xuICAgICAgICAgIHRlWzJdID0gY2YgKiBiIC0gZGU7XG4gICAgICAgICAgdGVbNl0gPSBkZiArIGNlICogYjtcbiAgICAgICAgICB0ZVsxMF0gPSBhICogYztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLlpYWTpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGNlID0gYyAqIGUsXG4gICAgICAgICAgICAgICAgY2YgPSBjICogZixcbiAgICAgICAgICAgICAgICBkZSA9IGQgKiBlLFxuICAgICAgICAgICAgICAgIGRmID0gZCAqIGY7XG4gICAgICAgICAgdGVbMF0gPSBjZSAtIGRmICogYjtcbiAgICAgICAgICB0ZVs0XSA9IC1hICogZjtcbiAgICAgICAgICB0ZVs4XSA9IGRlICsgY2YgKiBiO1xuICAgICAgICAgIHRlWzFdID0gY2YgKyBkZSAqIGI7XG4gICAgICAgICAgdGVbNV0gPSBhICogZTtcbiAgICAgICAgICB0ZVs5XSA9IGRmIC0gY2UgKiBiO1xuICAgICAgICAgIHRlWzJdID0gLWEgKiBkO1xuICAgICAgICAgIHRlWzZdID0gYjtcbiAgICAgICAgICB0ZVsxMF0gPSBhICogYztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLlpZWDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFlID0gYSAqIGUsXG4gICAgICAgICAgICAgICAgYWYgPSBhICogZixcbiAgICAgICAgICAgICAgICBiZSA9IGIgKiBlLFxuICAgICAgICAgICAgICAgIGJmID0gYiAqIGY7XG4gICAgICAgICAgdGVbMF0gPSBjICogZTtcbiAgICAgICAgICB0ZVs0XSA9IGJlICogZCAtIGFmO1xuICAgICAgICAgIHRlWzhdID0gYWUgKiBkICsgYmY7XG4gICAgICAgICAgdGVbMV0gPSBjICogZjtcbiAgICAgICAgICB0ZVs1XSA9IGJmICogZCArIGFlO1xuICAgICAgICAgIHRlWzldID0gYWYgKiBkIC0gYmU7XG4gICAgICAgICAgdGVbMl0gPSAtZDtcbiAgICAgICAgICB0ZVs2XSA9IGIgKiBjO1xuICAgICAgICAgIHRlWzEwXSA9IGEgKiBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgRXVsZXIuWVpYOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYWMgPSBhICogYyxcbiAgICAgICAgICAgICAgICBhZCA9IGEgKiBkLFxuICAgICAgICAgICAgICAgIGJjID0gYiAqIGMsXG4gICAgICAgICAgICAgICAgYmQgPSBiICogZDtcbiAgICAgICAgICB0ZVswXSA9IGMgKiBlO1xuICAgICAgICAgIHRlWzRdID0gYmQgLSBhYyAqIGY7XG4gICAgICAgICAgdGVbOF0gPSBiYyAqIGYgKyBhZDtcbiAgICAgICAgICB0ZVsxXSA9IGY7XG4gICAgICAgICAgdGVbNV0gPSBhICogZTtcbiAgICAgICAgICB0ZVs5XSA9IC1iICogZTtcbiAgICAgICAgICB0ZVsyXSA9IC1kICogZTtcbiAgICAgICAgICB0ZVs2XSA9IGFkICogZiArIGJjO1xuICAgICAgICAgIHRlWzEwXSA9IGFjIC0gYmQgKiBmO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgRXVsZXIuWFpZOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYWMgPSBhICogYyxcbiAgICAgICAgICAgICAgICBhZCA9IGEgKiBkLFxuICAgICAgICAgICAgICAgIGJjID0gYiAqIGMsXG4gICAgICAgICAgICAgICAgYmQgPSBiICogZDtcbiAgICAgICAgICB0ZVswXSA9IGMgKiBlO1xuICAgICAgICAgIHRlWzRdID0gLWY7XG4gICAgICAgICAgdGVbOF0gPSBkICogZTtcbiAgICAgICAgICB0ZVsxXSA9IGFjICogZiArIGJkO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSBhZCAqIGYgLSBiYztcbiAgICAgICAgICB0ZVsyXSA9IGJjICogZiAtIGFkO1xuICAgICAgICAgIHRlWzZdID0gYiAqIGU7XG4gICAgICAgICAgdGVbMTBdID0gYmQgKiBmICsgYWM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9VTktOT1dOX09SREVSKTtcbiAgICB9XG5cbiAgICB0ZVszXSA9IDA7XG4gICAgdGVbN10gPSAwO1xuICAgIHRlWzExXSA9IDA7XG4gICAgdGVbMTJdID0gMDtcbiAgICB0ZVsxM10gPSAwO1xuICAgIHRlWzE0XSA9IDA7XG4gICAgdGVbMTVdID0gMTtcbiAgICByZXR1cm4gdGU7XG4gIH1cblxuICB0b1F1YXRlcm5pb24oKSB7XG4gICAgY29uc3QgY3kgPSBNYXRoLmNvcyh0aGlzLnlhdyAqIDAuNSk7XG4gICAgY29uc3Qgc3kgPSBNYXRoLnNpbih0aGlzLnlhdyAqIDAuNSk7XG4gICAgY29uc3QgY3IgPSBNYXRoLmNvcyh0aGlzLnJvbGwgKiAwLjUpO1xuICAgIGNvbnN0IHNyID0gTWF0aC5zaW4odGhpcy5yb2xsICogMC41KTtcbiAgICBjb25zdCBjcCA9IE1hdGguY29zKHRoaXMucGl0Y2ggKiAwLjUpO1xuICAgIGNvbnN0IHNwID0gTWF0aC5zaW4odGhpcy5waXRjaCAqIDAuNSk7XG4gICAgY29uc3QgdyA9IGN5ICogY3IgKiBjcCArIHN5ICogc3IgKiBzcDtcbiAgICBjb25zdCB4ID0gY3kgKiBzciAqIGNwIC0gc3kgKiBjciAqIHNwO1xuICAgIGNvbnN0IHkgPSBjeSAqIGNyICogc3AgKyBzeSAqIHNyICogY3A7XG4gICAgY29uc3QgeiA9IHN5ICogY3IgKiBjcCAtIGN5ICogc3IgKiBzcDtcbiAgICByZXR1cm4gbmV3IFF1YXRlcm5pb24oeCwgeSwgeiwgdyk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXVsZXIuanMubWFwIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuL2Jhc2UvbWF0cml4JztcbmltcG9ydCB7IGNoZWNrVmVjdG9yLCBkZXByZWNhdGVkIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHsgdmVjNF90cmFuc2Zvcm1NYXQzIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuaW1wb3J0ICogYXMgbWF0MyBmcm9tICdnbC1tYXRyaXgvbWF0Myc7XG5pbXBvcnQgKiBhcyB2ZWMyIGZyb20gJ2dsLW1hdHJpeC92ZWMyJztcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSAnZ2wtbWF0cml4L3ZlYzMnO1xuY29uc3QgSURFTlRJVFkgPSBPYmplY3QuZnJlZXplKFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSk7XG5jb25zdCBaRVJPID0gT2JqZWN0LmZyZWV6ZShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pO1xuY29uc3QgSU5ESUNFUyA9IE9iamVjdC5mcmVlemUoe1xuICBDT0wwUk9XMDogMCxcbiAgQ09MMFJPVzE6IDEsXG4gIENPTDBST1cyOiAyLFxuICBDT0wxUk9XMDogMyxcbiAgQ09MMVJPVzE6IDQsXG4gIENPTDFST1cyOiA1LFxuICBDT0wyUk9XMDogNixcbiAgQ09MMlJPVzE6IDcsXG4gIENPTDJST1cyOiA4XG59KTtcbmNvbnN0IGNvbnN0YW50cyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4MyBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBnZXQgSURFTlRJVFkoKSB7XG4gICAgY29uc3RhbnRzLklERU5USVRZID0gY29uc3RhbnRzLklERU5USVRZIHx8IE9iamVjdC5mcmVlemUobmV3IE1hdHJpeDMoSURFTlRJVFkpKTtcbiAgICByZXR1cm4gY29uc3RhbnRzLklERU5USVRZO1xuICB9XG5cbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIGNvbnN0YW50cy5aRVJPID0gY29uc3RhbnRzLlpFUk8gfHwgT2JqZWN0LmZyZWV6ZShuZXcgTWF0cml4MyhaRVJPKSk7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5aRVJPO1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiA5O1xuICB9XG5cbiAgZ2V0IFJBTksoKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBnZXQgSU5ESUNFUygpIHtcbiAgICByZXR1cm4gSU5ESUNFUztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgdGhpcy5jb3B5KGFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pZGVudGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvcHkoYXJyYXkpIHtcbiAgICB0aGlzWzBdID0gYXJyYXlbMF07XG4gICAgdGhpc1sxXSA9IGFycmF5WzFdO1xuICAgIHRoaXNbMl0gPSBhcnJheVsyXTtcbiAgICB0aGlzWzNdID0gYXJyYXlbM107XG4gICAgdGhpc1s0XSA9IGFycmF5WzRdO1xuICAgIHRoaXNbNV0gPSBhcnJheVs1XTtcbiAgICB0aGlzWzZdID0gYXJyYXlbNl07XG4gICAgdGhpc1s3XSA9IGFycmF5WzddO1xuICAgIHRoaXNbOF0gPSBhcnJheVs4XTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0KG0wMCwgbTEwLCBtMjAsIG0wMSwgbTExLCBtMjEsIG0wMiwgbTEyLCBtMjIpIHtcbiAgICB0aGlzWzBdID0gbTAwO1xuICAgIHRoaXNbMV0gPSBtMTA7XG4gICAgdGhpc1syXSA9IG0yMDtcbiAgICB0aGlzWzNdID0gbTAxO1xuICAgIHRoaXNbNF0gPSBtMTE7XG4gICAgdGhpc1s1XSA9IG0yMTtcbiAgICB0aGlzWzZdID0gbTAyO1xuICAgIHRoaXNbN10gPSBtMTI7XG4gICAgdGhpc1s4XSA9IG0yMjtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0Um93TWFqb3IobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIHRoaXNbMF0gPSBtMDA7XG4gICAgdGhpc1sxXSA9IG0xMDtcbiAgICB0aGlzWzJdID0gbTIwO1xuICAgIHRoaXNbM10gPSBtMDE7XG4gICAgdGhpc1s0XSA9IG0xMTtcbiAgICB0aGlzWzVdID0gbTIxO1xuICAgIHRoaXNbNl0gPSBtMDI7XG4gICAgdGhpc1s3XSA9IG0xMjtcbiAgICB0aGlzWzhdID0gbTIyO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkZXRlcm1pbmFudCgpIHtcbiAgICByZXR1cm4gbWF0My5kZXRlcm1pbmFudCh0aGlzKTtcbiAgfVxuXG4gIGlkZW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvcHkoSURFTlRJVFkpO1xuICB9XG5cbiAgZnJvbVF1YXRlcm5pb24ocSkge1xuICAgIG1hdDMuZnJvbVF1YXQodGhpcywgcSk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zcG9zZSgpIHtcbiAgICBtYXQzLnRyYW5zcG9zZSh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgaW52ZXJ0KCkge1xuICAgIG1hdDMuaW52ZXJ0KHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseUxlZnQoYSkge1xuICAgIG1hdDMubXVsdGlwbHkodGhpcywgYSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5UmlnaHQoYSkge1xuICAgIG1hdDMubXVsdGlwbHkodGhpcywgdGhpcywgYSk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZShyYWRpYW5zKSB7XG4gICAgbWF0My5yb3RhdGUodGhpcywgdGhpcywgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKGZhY3Rvcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZhY3RvcikpIHtcbiAgICAgIG1hdDMuc2NhbGUodGhpcywgdGhpcywgZmFjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0My5zY2FsZSh0aGlzLCB0aGlzLCBbZmFjdG9yLCBmYWN0b3IsIGZhY3Rvcl0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2xhdGUodmVjKSB7XG4gICAgbWF0My50cmFuc2xhdGUodGhpcywgdGhpcywgdmVjKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgc3dpdGNoICh2ZWN0b3IubGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJlc3VsdCA9IHZlYzIudHJhbnNmb3JtTWF0MyhyZXN1bHQgfHwgWy0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJlc3VsdCA9IHZlYzMudHJhbnNmb3JtTWF0MyhyZXN1bHQgfHwgWy0wLCAtMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICByZXN1bHQgPSB2ZWM0X3RyYW5zZm9ybU1hdDMocmVzdWx0IHx8IFstMCwgLTAsIC0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgdmVjdG9yJyk7XG4gICAgfVxuXG4gICAgY2hlY2tWZWN0b3IocmVzdWx0LCB2ZWN0b3IubGVuZ3RoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgZGVwcmVjYXRlZCgnTWF0cml4My50cmFuc2Zvcm1WZWN0b3InKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0odmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yMih2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGRlcHJlY2F0ZWQoJ01hdHJpeDMudHJhbnNmb3JtVmVjdG9yJyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZlY3RvciwgcmVzdWx0KTtcbiAgfVxuXG4gIHRyYW5zZm9ybVZlY3RvcjModmVjdG9yLCByZXN1bHQpIHtcbiAgICBkZXByZWNhdGVkKCdNYXRyaXgzLnRyYW5zZm9ybVZlY3RvcicpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0cml4My5qcy5tYXAiLCJpbXBvcnQgeyBjaGVja1ZlY3RvciwgZGVwcmVjYXRlZCB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9iYXNlL21hdHJpeCc7XG5pbXBvcnQgeyB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3RvciwgdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IgfSBmcm9tICcuLi9saWIvZ2wtbWF0cml4LWV4dHJhcyc7XG5pbXBvcnQgKiBhcyBtYXQ0IGZyb20gJ2dsLW1hdHJpeC9tYXQ0JztcbmltcG9ydCAqIGFzIHZlYzIgZnJvbSAnZ2wtbWF0cml4L3ZlYzInO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJ2dsLW1hdHJpeC92ZWM0JztcbmNvbnN0IElERU5USVRZID0gT2JqZWN0LmZyZWV6ZShbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV0pO1xuY29uc3QgWkVSTyA9IE9iamVjdC5mcmVlemUoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcbmNvbnN0IElORElDRVMgPSBPYmplY3QuZnJlZXplKHtcbiAgQ09MMFJPVzA6IDAsXG4gIENPTDBST1cxOiAxLFxuICBDT0wwUk9XMjogMixcbiAgQ09MMFJPVzM6IDMsXG4gIENPTDFST1cwOiA0LFxuICBDT0wxUk9XMTogNSxcbiAgQ09MMVJPVzI6IDYsXG4gIENPTDFST1czOiA3LFxuICBDT0wyUk9XMDogOCxcbiAgQ09MMlJPVzE6IDksXG4gIENPTDJST1cyOiAxMCxcbiAgQ09MMlJPVzM6IDExLFxuICBDT0wzUk9XMDogMTIsXG4gIENPTDNST1cxOiAxMyxcbiAgQ09MM1JPVzI6IDE0LFxuICBDT0wzUk9XMzogMTVcbn0pO1xuY29uc3QgY29uc3RhbnRzID0ge307XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXg0IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGdldCBJREVOVElUWSgpIHtcbiAgICBjb25zdGFudHMuSURFTlRJVFkgPSBjb25zdGFudHMuSURFTlRJVFkgfHwgT2JqZWN0LmZyZWV6ZShuZXcgTWF0cml4NChJREVOVElUWSkpO1xuICAgIHJldHVybiBjb25zdGFudHMuSURFTlRJVFk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFpFUk8oKSB7XG4gICAgY29uc3RhbnRzLlpFUk8gPSBjb25zdGFudHMuWkVSTyB8fCBPYmplY3QuZnJlZXplKG5ldyBNYXRyaXg0KFpFUk8pKTtcbiAgICByZXR1cm4gY29uc3RhbnRzLlpFUk87XG4gIH1cblxuICBnZXQgSU5ESUNFUygpIHtcbiAgICByZXR1cm4gSU5ESUNFUztcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gMTY7XG4gIH1cblxuICBnZXQgUkFOSygpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHRoaXMuY29weShhcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWRlbnRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHRoaXNbNF0gPSBhcnJheVs0XTtcbiAgICB0aGlzWzVdID0gYXJyYXlbNV07XG4gICAgdGhpc1s2XSA9IGFycmF5WzZdO1xuICAgIHRoaXNbN10gPSBhcnJheVs3XTtcbiAgICB0aGlzWzhdID0gYXJyYXlbOF07XG4gICAgdGhpc1s5XSA9IGFycmF5WzldO1xuICAgIHRoaXNbMTBdID0gYXJyYXlbMTBdO1xuICAgIHRoaXNbMTFdID0gYXJyYXlbMTFdO1xuICAgIHRoaXNbMTJdID0gYXJyYXlbMTJdO1xuICAgIHRoaXNbMTNdID0gYXJyYXlbMTNdO1xuICAgIHRoaXNbMTRdID0gYXJyYXlbMTRdO1xuICAgIHRoaXNbMTVdID0gYXJyYXlbMTVdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzZXQobTAwLCBtMTAsIG0yMCwgbTMwLCBtMDEsIG0xMSwgbTIxLCBtMzEsIG0wMiwgbTEyLCBtMjIsIG0zMiwgbTAzLCBtMTMsIG0yMywgbTMzKSB7XG4gICAgdGhpc1swXSA9IG0wMDtcbiAgICB0aGlzWzFdID0gbTEwO1xuICAgIHRoaXNbMl0gPSBtMjA7XG4gICAgdGhpc1szXSA9IG0zMDtcbiAgICB0aGlzWzRdID0gbTAxO1xuICAgIHRoaXNbNV0gPSBtMTE7XG4gICAgdGhpc1s2XSA9IG0yMTtcbiAgICB0aGlzWzddID0gbTMxO1xuICAgIHRoaXNbOF0gPSBtMDI7XG4gICAgdGhpc1s5XSA9IG0xMjtcbiAgICB0aGlzWzEwXSA9IG0yMjtcbiAgICB0aGlzWzExXSA9IG0zMjtcbiAgICB0aGlzWzEyXSA9IG0wMztcbiAgICB0aGlzWzEzXSA9IG0xMztcbiAgICB0aGlzWzE0XSA9IG0yMztcbiAgICB0aGlzWzE1XSA9IG0zMztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0Um93TWFqb3IobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gICAgdGhpc1swXSA9IG0wMDtcbiAgICB0aGlzWzFdID0gbTEwO1xuICAgIHRoaXNbMl0gPSBtMjA7XG4gICAgdGhpc1szXSA9IG0zMDtcbiAgICB0aGlzWzRdID0gbTAxO1xuICAgIHRoaXNbNV0gPSBtMTE7XG4gICAgdGhpc1s2XSA9IG0yMTtcbiAgICB0aGlzWzddID0gbTMxO1xuICAgIHRoaXNbOF0gPSBtMDI7XG4gICAgdGhpc1s5XSA9IG0xMjtcbiAgICB0aGlzWzEwXSA9IG0yMjtcbiAgICB0aGlzWzExXSA9IG0zMjtcbiAgICB0aGlzWzEyXSA9IG0wMztcbiAgICB0aGlzWzEzXSA9IG0xMztcbiAgICB0aGlzWzE0XSA9IG0yMztcbiAgICB0aGlzWzE1XSA9IG0zMztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9Sb3dNYWpvcihyZXN1bHQpIHtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzBdO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbNF07XG4gICAgcmVzdWx0WzJdID0gdGhpc1s4XTtcbiAgICByZXN1bHRbM10gPSB0aGlzWzEyXTtcbiAgICByZXN1bHRbNF0gPSB0aGlzWzFdO1xuICAgIHJlc3VsdFs1XSA9IHRoaXNbNV07XG4gICAgcmVzdWx0WzZdID0gdGhpc1s5XTtcbiAgICByZXN1bHRbN10gPSB0aGlzWzEzXTtcbiAgICByZXN1bHRbOF0gPSB0aGlzWzJdO1xuICAgIHJlc3VsdFs5XSA9IHRoaXNbNl07XG4gICAgcmVzdWx0WzEwXSA9IHRoaXNbMTBdO1xuICAgIHJlc3VsdFsxMV0gPSB0aGlzWzE0XTtcbiAgICByZXN1bHRbMTJdID0gdGhpc1szXTtcbiAgICByZXN1bHRbMTNdID0gdGhpc1s3XTtcbiAgICByZXN1bHRbMTRdID0gdGhpc1sxMV07XG4gICAgcmVzdWx0WzE1XSA9IHRoaXNbMTVdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KElERU5USVRZKTtcbiAgfVxuXG4gIGZyb21RdWF0ZXJuaW9uKHEpIHtcbiAgICBtYXQ0LmZyb21RdWF0KHRoaXMsIHEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcnVzdHVtKHtcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIGJvdHRvbSxcbiAgICB0b3AsXG4gICAgbmVhcixcbiAgICBmYXJcbiAgfSkge1xuICAgIGlmIChmYXIgPT09IEluZmluaXR5KSB7XG4gICAgICBNYXRyaXg0Ll9jb21wdXRlSW5maW5pdGVQZXJzcGVjdGl2ZU9mZkNlbnRlcih0aGlzLCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXQ0LmZydXN0dW0odGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzdGF0aWMgX2NvbXB1dGVJbmZpbml0ZVBlcnNwZWN0aXZlT2ZmQ2VudGVyKHJlc3VsdCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyKSB7XG4gICAgY29uc3QgY29sdW1uMFJvdzAgPSAyLjAgKiBuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gICAgY29uc3QgY29sdW1uMVJvdzEgPSAyLjAgKiBuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XG4gICAgY29uc3QgY29sdW1uMlJvdzAgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xuICAgIGNvbnN0IGNvbHVtbjJSb3cxID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcbiAgICBjb25zdCBjb2x1bW4yUm93MiA9IC0xLjA7XG4gICAgY29uc3QgY29sdW1uMlJvdzMgPSAtMS4wO1xuICAgIGNvbnN0IGNvbHVtbjNSb3cyID0gLTIuMCAqIG5lYXI7XG4gICAgcmVzdWx0WzBdID0gY29sdW1uMFJvdzA7XG4gICAgcmVzdWx0WzFdID0gMC4wO1xuICAgIHJlc3VsdFsyXSA9IDAuMDtcbiAgICByZXN1bHRbM10gPSAwLjA7XG4gICAgcmVzdWx0WzRdID0gMC4wO1xuICAgIHJlc3VsdFs1XSA9IGNvbHVtbjFSb3cxO1xuICAgIHJlc3VsdFs2XSA9IDAuMDtcbiAgICByZXN1bHRbN10gPSAwLjA7XG4gICAgcmVzdWx0WzhdID0gY29sdW1uMlJvdzA7XG4gICAgcmVzdWx0WzldID0gY29sdW1uMlJvdzE7XG4gICAgcmVzdWx0WzEwXSA9IGNvbHVtbjJSb3cyO1xuICAgIHJlc3VsdFsxMV0gPSBjb2x1bW4yUm93MztcbiAgICByZXN1bHRbMTJdID0gMC4wO1xuICAgIHJlc3VsdFsxM10gPSAwLjA7XG4gICAgcmVzdWx0WzE0XSA9IGNvbHVtbjNSb3cyO1xuICAgIHJlc3VsdFsxNV0gPSAwLjA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGxvb2tBdChleWUsIGNlbnRlciwgdXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgKHtcbiAgICAgICAgZXllLFxuICAgICAgICBjZW50ZXIsXG4gICAgICAgIHVwXG4gICAgICB9ID0gZXllKTtcbiAgICB9XG5cbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgWzAsIDAsIDBdO1xuICAgIHVwID0gdXAgfHwgWzAsIDEsIDBdO1xuICAgIG1hdDQubG9va0F0KHRoaXMsIGV5ZSwgY2VudGVyLCB1cCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG9ydGhvKHtcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIGJvdHRvbSxcbiAgICB0b3AsXG4gICAgbmVhciA9IDAuMSxcbiAgICBmYXIgPSA1MDBcbiAgfSkge1xuICAgIG1hdDQub3J0aG8odGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBvcnRob2dyYXBoaWMoe1xuICAgIGZvdnkgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgYXNwZWN0ID0gMSxcbiAgICBmb2NhbERpc3RhbmNlID0gMSxcbiAgICBuZWFyID0gMC4xLFxuICAgIGZhciA9IDUwMFxuICB9KSB7XG4gICAgaWYgKGZvdnkgPiBNYXRoLlBJICogMikge1xuICAgICAgdGhyb3cgRXJyb3IoJ3JhZGlhbnMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYWxmWSA9IGZvdnkgLyAyO1xuICAgIGNvbnN0IHRvcCA9IGZvY2FsRGlzdGFuY2UgKiBNYXRoLnRhbihoYWxmWSk7XG4gICAgY29uc3QgcmlnaHQgPSB0b3AgKiBhc3BlY3Q7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0KCkub3J0aG8oe1xuICAgICAgbGVmdDogLXJpZ2h0LFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b206IC10b3AsXG4gICAgICB0b3AsXG4gICAgICBuZWFyLFxuICAgICAgZmFyXG4gICAgfSk7XG4gIH1cblxuICBwZXJzcGVjdGl2ZSh7XG4gICAgZm92eSA9IHVuZGVmaW5lZCxcbiAgICBmb3YgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgYXNwZWN0ID0gMSxcbiAgICBuZWFyID0gMC4xLFxuICAgIGZhciA9IDUwMFxuICB9ID0ge30pIHtcbiAgICBmb3Z5ID0gZm92eSB8fCBmb3Y7XG5cbiAgICBpZiAoZm92eSA+IE1hdGguUEkgKiAyKSB7XG4gICAgICB0aHJvdyBFcnJvcigncmFkaWFucycpO1xuICAgIH1cblxuICAgIG1hdDQucGVyc3BlY3RpdmUodGhpcywgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkZXRlcm1pbmFudCgpIHtcbiAgICByZXR1cm4gbWF0NC5kZXRlcm1pbmFudCh0aGlzKTtcbiAgfVxuXG4gIGdldFNjYWxlKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IE1hdGguc3FydCh0aGlzWzBdICogdGhpc1swXSArIHRoaXNbMV0gKiB0aGlzWzFdICsgdGhpc1syXSAqIHRoaXNbMl0pO1xuICAgIHJlc3VsdFsxXSA9IE1hdGguc3FydCh0aGlzWzRdICogdGhpc1s0XSArIHRoaXNbNV0gKiB0aGlzWzVdICsgdGhpc1s2XSAqIHRoaXNbNl0pO1xuICAgIHJlc3VsdFsyXSA9IE1hdGguc3FydCh0aGlzWzhdICogdGhpc1s4XSArIHRoaXNbOV0gKiB0aGlzWzldICsgdGhpc1sxMF0gKiB0aGlzWzEwXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IHRoaXNbMTJdO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbMTNdO1xuICAgIHJlc3VsdFsyXSA9IHRoaXNbMTRdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRSb3RhdGlvbihyZXN1bHQgPSBbLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTBdLCBzY2FsZVJlc3VsdCA9IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUoc2NhbGVSZXN1bHQgfHwgWy0wLCAtMCwgLTBdKTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUwID0gMSAvIHNjYWxlWzBdO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTEgPSAxIC8gc2NhbGVbMV07XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMiA9IDEgLyBzY2FsZVsyXTtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzBdICogaW52ZXJzZVNjYWxlMDtcbiAgICByZXN1bHRbMV0gPSB0aGlzWzFdICogaW52ZXJzZVNjYWxlMTtcbiAgICByZXN1bHRbMl0gPSB0aGlzWzJdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXN1bHRbM10gPSAwO1xuICAgIHJlc3VsdFs0XSA9IHRoaXNbNF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFs1XSA9IHRoaXNbNV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFs2XSA9IHRoaXNbNl0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJlc3VsdFs3XSA9IDA7XG4gICAgcmVzdWx0WzhdID0gdGhpc1s4XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzldID0gdGhpc1s5XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzEwXSA9IHRoaXNbMTBdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXN1bHRbMTFdID0gMDtcbiAgICByZXN1bHRbMTJdID0gMDtcbiAgICByZXN1bHRbMTNdID0gMDtcbiAgICByZXN1bHRbMTRdID0gMDtcbiAgICByZXN1bHRbMTVdID0gMTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXgzKHJlc3VsdCA9IFstMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wXSwgc2NhbGVSZXN1bHQgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKHNjYWxlUmVzdWx0IHx8IFstMCwgLTAsIC0wXSk7XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMCA9IDEgLyBzY2FsZVswXTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUxID0gMSAvIHNjYWxlWzFdO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTIgPSAxIC8gc2NhbGVbMl07XG4gICAgcmVzdWx0WzBdID0gdGhpc1swXSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzFdID0gdGhpc1sxXSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzJdID0gdGhpc1syXSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzNdID0gdGhpc1s0XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzRdID0gdGhpc1s1XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzVdID0gdGhpc1s2XSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzZdID0gdGhpc1s4XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzddID0gdGhpc1s5XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzhdID0gdGhpc1sxMF0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0cmFuc3Bvc2UoKSB7XG4gICAgbWF0NC50cmFuc3Bvc2UodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGludmVydCgpIHtcbiAgICBtYXQ0LmludmVydCh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlMZWZ0KGEpIHtcbiAgICBtYXQ0Lm11bHRpcGx5KHRoaXMsIGEsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseVJpZ2h0KGEpIHtcbiAgICBtYXQ0Lm11bHRpcGx5KHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVYKHJhZGlhbnMpIHtcbiAgICBtYXQ0LnJvdGF0ZVgodGhpcywgdGhpcywgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVkocmFkaWFucykge1xuICAgIG1hdDQucm90YXRlWSh0aGlzLCB0aGlzLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWihyYWRpYW5zKSB7XG4gICAgbWF0NC5yb3RhdGVaKHRoaXMsIHRoaXMsIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVYWVooW3J4LCByeSwgcnpdKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRlWChyeCkucm90YXRlWShyeSkucm90YXRlWihyeik7XG4gIH1cblxuICByb3RhdGVBeGlzKHJhZGlhbnMsIGF4aXMpIHtcbiAgICBtYXQ0LnJvdGF0ZSh0aGlzLCB0aGlzLCByYWRpYW5zLCBheGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2NhbGUoZmFjdG9yKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFjdG9yKSkge1xuICAgICAgbWF0NC5zY2FsZSh0aGlzLCB0aGlzLCBmYWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXQ0LnNjYWxlKHRoaXMsIHRoaXMsIFtmYWN0b3IsIGZhY3RvciwgZmFjdG9yXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh2ZWMpIHtcbiAgICBtYXQ0LnRyYW5zbGF0ZSh0aGlzLCB0aGlzLCB2ZWMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmVjdG9yLCByZXN1bHQpIHtcbiAgICBpZiAodmVjdG9yLmxlbmd0aCA9PT0gNCkge1xuICAgICAgcmVzdWx0ID0gdmVjNC50cmFuc2Zvcm1NYXQ0KHJlc3VsdCB8fCBbLTAsIC0wLCAtMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgY2hlY2tWZWN0b3IocmVzdWx0LCA0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1BvaW50KHZlY3RvciwgcmVzdWx0KSB7XG4gICAgY29uc3Qge1xuICAgICAgbGVuZ3RoXG4gICAgfSA9IHZlY3RvcjtcblxuICAgIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJlc3VsdCA9IHZlYzIudHJhbnNmb3JtTWF0NChyZXN1bHQgfHwgWy0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJlc3VsdCA9IHZlYzMudHJhbnNmb3JtTWF0NChyZXN1bHQgfHwgWy0wLCAtMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIHZlY3RvcicpO1xuICAgIH1cblxuICAgIGNoZWNrVmVjdG9yKHJlc3VsdCwgdmVjdG9yLmxlbmd0aCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRyYW5zZm9ybUFzVmVjdG9yKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgc3dpdGNoICh2ZWN0b3IubGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJlc3VsdCA9IHZlYzJfdHJhbnNmb3JtTWF0NEFzVmVjdG9yKHJlc3VsdCB8fCBbLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmVzdWx0ID0gdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IocmVzdWx0IHx8IFstMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCB2ZWN0b3InKTtcbiAgICB9XG5cbiAgICBjaGVja1ZlY3RvcihyZXN1bHQsIHZlY3Rvci5sZW5ndGgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYWtlUm90YXRpb25YKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eSgpLnJvdGF0ZVgocmFkaWFucyk7XG4gIH1cblxuICBtYWtlVHJhbnNsYXRpb24oeCwgeSwgeikge1xuICAgIHJldHVybiB0aGlzLmlkZW50aXR5KCkudHJhbnNsYXRlKFt4LCB5LCB6XSk7XG4gIH1cblxuICB0cmFuc2Zvcm1Qb2ludCh2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGRlcHJlY2F0ZWQoJ01hdHJpeDQudHJhbnNmb3JtUG9pbnQnLCAnMy4wJyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1WZWN0b3IodmVjdG9yLCByZXN1bHQpIHtcbiAgICBkZXByZWNhdGVkKCdNYXRyaXg0LnRyYW5zZm9ybVZlY3RvcicsICczLjAnKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1BvaW50KHZlY3RvciwgcmVzdWx0KTtcbiAgfVxuXG4gIHRyYW5zZm9ybURpcmVjdGlvbih2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGRlcHJlY2F0ZWQoJ01hdHJpeDQudHJhbnNmb3JtRGlyZWN0aW9uJywgJzMuMCcpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzVmVjdG9yKHZlY3RvciwgcmVzdWx0KTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRyaXg0LmpzLm1hcCIsImltcG9ydCBNYXRyaXg0IGZyb20gJy4vbWF0cml4NCc7XG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuL3ZlY3RvcjMnO1xuaW1wb3J0IEV1bGVyIGZyb20gJy4vZXVsZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB4ID0gMCxcbiAgICB5ID0gMCxcbiAgICB6ID0gMCxcbiAgICByb2xsID0gMCxcbiAgICBwaXRjaCA9IDAsXG4gICAgeWF3ID0gMCxcbiAgICBwb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICBvcmllbnRhdGlvbiA9IHVuZGVmaW5lZFxuICB9ID0ge30pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwb3NpdGlvbikgJiYgcG9zaXRpb24ubGVuZ3RoID09PSAzKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMocG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMoeCwgeSwgeik7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3JpZW50YXRpb24pICYmIG9yaWVudGF0aW9uLmxlbmd0aCA9PT0gNCkge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG5ldyBFdWxlcihvcmllbnRhdGlvbiwgb3JpZW50YXRpb25bM10pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gbmV3IEV1bGVyKHJvbGwsIHBpdGNoLCB5YXcsIEV1bGVyLlJvbGxQaXRjaFlhdyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLno7XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXMucG9zaXRpb24ueiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHJvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24ucm9sbDtcbiAgfVxuXG4gIHNldCByb2xsKHZhbHVlKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbi5yb2xsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGl0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24ucGl0Y2g7XG4gIH1cblxuICBzZXQgcGl0Y2godmFsdWUpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uLnBpdGNoID0gdmFsdWU7XG4gIH1cblxuICBnZXQgeWF3KCkge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uLnlhdztcbiAgfVxuXG4gIHNldCB5YXcodmFsdWUpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uLnlhdyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbjtcbiAgfVxuXG4gIGVxdWFscyhwb3NlKSB7XG4gICAgaWYgKCFwb3NlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uZXF1YWxzKHBvc2UucG9zaXRpb24pICYmIHRoaXMub3JpZW50YXRpb24uZXF1YWxzKHBvc2Uub3JpZW50YXRpb24pO1xuICB9XG5cbiAgZXhhY3RFcXVhbHMocG9zZSkge1xuICAgIGlmICghcG9zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmV4YWN0RXF1YWxzKHBvc2UucG9zaXRpb24pICYmIHRoaXMub3JpZW50YXRpb24uZXhhY3RFcXVhbHMocG9zZS5vcmllbnRhdGlvbik7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpIHtcbiAgICBjb25zdCBzciA9IE1hdGguc2luKHRoaXMucm9sbCk7XG4gICAgY29uc3Qgc3AgPSBNYXRoLnNpbih0aGlzLnBpdGNoKTtcbiAgICBjb25zdCBzdyA9IE1hdGguc2luKHRoaXMueWF3KTtcbiAgICBjb25zdCBjciA9IE1hdGguY29zKHRoaXMucm9sbCk7XG4gICAgY29uc3QgY3AgPSBNYXRoLmNvcyh0aGlzLnBpdGNoKTtcbiAgICBjb25zdCBjdyA9IE1hdGguY29zKHRoaXMueWF3KTtcbiAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4NCgpLnNldFJvd01ham9yKGN3ICogY3AsIC1zdyAqIGNyICsgY3cgKiBzcCAqIHNyLCBzdyAqIHNyICsgY3cgKiBzcCAqIGNyLCB0aGlzLngsIHN3ICogY3AsIGN3ICogY3IgKyBzdyAqIHNwICogc3IsIC1jdyAqIHNyICsgc3cgKiBzcCAqIGNyLCB0aGlzLnksIC1zcCwgY3AgKiBzciwgY3AgKiBjciwgdGhpcy56LCAwLCAwLCAwLCAxKTtcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXhGcm9tUG9zZShwb3NlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0KCkubXVsdGlwbHlSaWdodCh0aGlzLmdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCkpLm11bHRpcGx5UmlnaHQocG9zZS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpLmludmVydCgpKTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4VG9Qb3NlKHBvc2UpIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeDQoKS5tdWx0aXBseVJpZ2h0KHBvc2UuZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKSkubXVsdGlwbHlSaWdodCh0aGlzLmdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCkuaW52ZXJ0KCkpO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvc2UuanMubWFwIiwiaW1wb3J0IE1hdGhBcnJheSBmcm9tICcuL2Jhc2UvbWF0aC1hcnJheSc7XG5pbXBvcnQgeyBjaGVja051bWJlciwgY2hlY2tWZWN0b3IgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJy4uL2xpYi9hc3NlcnQnO1xuaW1wb3J0ICogYXMgcXVhdCBmcm9tICdnbC1tYXRyaXgvcXVhdCc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJ2dsLW1hdHJpeC92ZWM0JztcbmNvbnN0IElERU5USVRZX1FVQVRFUk5JT04gPSBbMCwgMCwgMCwgMV07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWF0ZXJuaW9uIGV4dGVuZHMgTWF0aEFycmF5IHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdyA9IDEpIHtcbiAgICBzdXBlcigtMCwgLTAsIC0wLCAtMCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNvcHkoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KHgsIHksIHosIHcpO1xuICAgIH1cbiAgfVxuXG4gIGNvcHkoYXJyYXkpIHtcbiAgICB0aGlzWzBdID0gYXJyYXlbMF07XG4gICAgdGhpc1sxXSA9IGFycmF5WzFdO1xuICAgIHRoaXNbMl0gPSBhcnJheVsyXTtcbiAgICB0aGlzWzNdID0gYXJyYXlbM107XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldCh4LCB5LCB6LCB3KSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgdGhpc1syXSA9IHo7XG4gICAgdGhpc1szXSA9IHc7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGZyb21NYXRyaXgzKG0pIHtcbiAgICBxdWF0LmZyb21NYXQzKHRoaXMsIG0pO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBpZGVudGl0eSgpIHtcbiAgICBxdWF0LmlkZW50aXR5KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tQXhpc1JvdGF0aW9uKGF4aXMsIHJhZCkge1xuICAgIHF1YXQuc2V0QXhpc0FuZ2xlKHRoaXMsIGF4aXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNldEF4aXNBbmdsZShheGlzLCByYWQpIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tQXhpc1JvdGF0aW9uKGF4aXMsIHJhZCk7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzWzFdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgdygpIHtcbiAgICByZXR1cm4gdGhpc1szXTtcbiAgfVxuXG4gIHNldCB3KHZhbHVlKSB7XG4gICAgdGhpc1szXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGxlbigpIHtcbiAgICByZXR1cm4gcXVhdC5sZW5ndGgodGhpcyk7XG4gIH1cblxuICBsZW5ndGhTcXVhcmVkKCkge1xuICAgIHJldHVybiBxdWF0LnNxdWFyZWRMZW5ndGgodGhpcyk7XG4gIH1cblxuICBkb3QoYSwgYikge1xuICAgIGlmIChiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVhdGVybmlvbi5kb3Qgb25seSB0YWtlcyBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVhdC5kb3QodGhpcywgYSk7XG4gIH1cblxuICByb3RhdGlvblRvKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICBxdWF0LnJvdGF0aW9uVG8odGhpcywgdmVjdG9yQSwgdmVjdG9yQik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGFkZChhLCBiKSB7XG4gICAgaWYgKGIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWF0ZXJuaW9uLmFkZCBvbmx5IHRha2VzIG9uZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIHF1YXQuYWRkKHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjYWxjdWxhdGVXKCkge1xuICAgIHF1YXQuY2FsY3VsYXRlVyh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY29uanVnYXRlKCkge1xuICAgIHF1YXQuY29uanVnYXRlKHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBpbnZlcnQoKSB7XG4gICAgcXVhdC5pbnZlcnQodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGxlcnAoYSwgYiwgdCkge1xuICAgIHF1YXQubGVycCh0aGlzLCBhLCBiLCB0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlSaWdodChhLCBiKSB7XG4gICAgYXNzZXJ0KCFiKTtcbiAgICBxdWF0Lm11bHRpcGx5KHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseUxlZnQoYSwgYikge1xuICAgIGFzc2VydCghYik7XG4gICAgcXVhdC5tdWx0aXBseSh0aGlzLCBhLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuKCk7XG4gICAgY29uc3QgbCA9IGxlbmd0aCA+IDAgPyAxIC8gbGVuZ3RoIDogMDtcbiAgICB0aGlzWzBdID0gdGhpc1swXSAqIGw7XG4gICAgdGhpc1sxXSA9IHRoaXNbMV0gKiBsO1xuICAgIHRoaXNbMl0gPSB0aGlzWzJdICogbDtcbiAgICB0aGlzWzNdID0gdGhpc1szXSAqIGw7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzWzNdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWChyYWQpIHtcbiAgICBxdWF0LnJvdGF0ZVgodGhpcywgdGhpcywgcmFkKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWShyYWQpIHtcbiAgICBxdWF0LnJvdGF0ZVkodGhpcywgdGhpcywgcmFkKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWihyYWQpIHtcbiAgICBxdWF0LnJvdGF0ZVoodGhpcywgdGhpcywgcmFkKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2NhbGUoYikge1xuICAgIHF1YXQuc2NhbGUodGhpcywgdGhpcywgYik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNsZXJwKHN0YXJ0LCB0YXJnZXQsIHJhdGlvKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICh7XG4gICAgICAgICAgc3RhcnQgPSBJREVOVElUWV9RVUFURVJOSU9OLFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICByYXRpb1xuICAgICAgICB9ID0gYXJndW1lbnRzWzBdKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgW3RhcmdldCwgcmF0aW9dID0gYXJndW1lbnRzO1xuICAgICAgICBzdGFydCA9IHRoaXM7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIHF1YXQuc2xlcnAodGhpcywgc3RhcnQsIHRhcmdldCwgcmF0aW8pO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1WZWN0b3I0KHZlY3RvciwgcmVzdWx0ID0gdmVjdG9yKSB7XG4gICAgdmVjNC50cmFuc2Zvcm1RdWF0KHJlc3VsdCwgdmVjdG9yLCB0aGlzKTtcbiAgICByZXR1cm4gY2hlY2tWZWN0b3IocmVzdWx0LCA0KTtcbiAgfVxuXG4gIGxlbmd0aFNxKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aFNxdWFyZWQoKTtcbiAgfVxuXG4gIHNldEZyb21BeGlzQW5nbGUoYXhpcywgcmFkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0QXhpc0FuZ2xlKGF4aXMsIHJhZCk7XG4gIH1cblxuICBwcmVtdWx0aXBseShhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHlMZWZ0KGEsIGIpO1xuICB9XG5cbiAgbXVsdGlwbHkoYSwgYikge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5UmlnaHQoYSwgYik7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVhdGVybmlvbi5qcy5tYXAiLCJpbXBvcnQgeyBmb3JtYXRWYWx1ZSwgZXF1YWxzLCBjb25maWcgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGRlZ3JlZXMsIHJhZGlhbnMsIGNsYW1wIH0gZnJvbSAnLi4vbGliL2NvbW1vbic7XG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuL3ZlY3RvcjMnO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5jb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5jb25zdCBFQVJUSF9SQURJVVNfTUVURVJTID0gNi4zNzFlNjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaGVyaWNhbENvb3JkaW5hdGVzIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHBoaSA9IDAsXG4gICAgdGhldGEgPSAwLFxuICAgIHJhZGl1cyA9IDEsXG4gICAgYmVhcmluZyA9IHVuZGVmaW5lZCxcbiAgICBwaXRjaCA9IHVuZGVmaW5lZCxcbiAgICBhbHRpdHVkZSA9IHVuZGVmaW5lZCxcbiAgICByYWRpdXNTY2FsZSA9IEVBUlRIX1JBRElVU19NRVRFUlNcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5waGkgPSBwaGk7XG4gICAgdGhpcy50aGV0YSA9IHRoZXRhO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IGFsdGl0dWRlIHx8IDE7XG4gICAgdGhpcy5yYWRpdXNTY2FsZSA9IHJhZGl1c1NjYWxlIHx8IDE7XG5cbiAgICBpZiAoYmVhcmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlYXJpbmcgPSBiZWFyaW5nO1xuICAgIH1cblxuICAgIGlmIChwaXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnBpdGNoID0gcGl0Y2g7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKGNvbmZpZyk7XG4gIH1cblxuICBmb3JtYXRTdHJpbmcoe1xuICAgIHByaW50VHlwZXMgPSBmYWxzZVxuICB9KSB7XG4gICAgY29uc3QgZiA9IGZvcm1hdFZhbHVlO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmludFR5cGVzID8gJ1NwaGVyaWNhbCcgOiAnJywgXCJbcmhvOlwiKS5jb25jYXQoZih0aGlzLnJhZGl1cyksIFwiLHRoZXRhOlwiKS5jb25jYXQoZih0aGlzLnRoZXRhKSwgXCIscGhpOlwiKS5jb25jYXQoZih0aGlzLnBoaSksIFwiXVwiKTtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiBlcXVhbHModGhpcy5yYWRpdXMsIG90aGVyLnJhZGl1cykgJiYgZXF1YWxzKHRoaXMudGhldGEsIG90aGVyLnRoZXRhKSAmJiBlcXVhbHModGhpcy5waGksIG90aGVyLnBoaSk7XG4gIH1cblxuICBleGFjdEVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyA9PT0gb3RoZXIucmFkaXVzICYmIHRoaXMudGhldGEgPT09IG90aGVyLnRoZXRhICYmIHRoaXMucGhpID09PSBvdGhlci5waGk7XG4gIH1cblxuICBnZXQgYmVhcmluZygpIHtcbiAgICByZXR1cm4gMTgwIC0gZGVncmVlcyh0aGlzLnBoaSk7XG4gIH1cblxuICBzZXQgYmVhcmluZyh2KSB7XG4gICAgdGhpcy5waGkgPSBNYXRoLlBJIC0gcmFkaWFucyh2KTtcbiAgfVxuXG4gIGdldCBwaXRjaCgpIHtcbiAgICByZXR1cm4gZGVncmVlcyh0aGlzLnRoZXRhKTtcbiAgfVxuXG4gIHNldCBwaXRjaCh2KSB7XG4gICAgdGhpcy50aGV0YSA9IHJhZGlhbnModik7XG4gIH1cblxuICBnZXQgbG9uZ2l0dWRlKCkge1xuICAgIHJldHVybiBkZWdyZWVzKHRoaXMucGhpKTtcbiAgfVxuXG4gIGdldCBsYXRpdHVkZSgpIHtcbiAgICByZXR1cm4gZGVncmVlcyh0aGlzLnRoZXRhKTtcbiAgfVxuXG4gIGdldCBsbmcoKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy5waGkpO1xuICB9XG5cbiAgZ2V0IGxhdCgpIHtcbiAgICByZXR1cm4gZGVncmVlcyh0aGlzLnRoZXRhKTtcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiAodGhpcy5yYWRpdXMgLSAxKSAqIHRoaXMucmFkaXVzU2NhbGU7XG4gIH1cblxuICBzZXQocmFkaXVzLCBwaGksIHRoZXRhKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5waGkgPSBwaGk7XG4gICAgdGhpcy50aGV0YSA9IHRoZXRhO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFNwaGVyaWNhbENvb3JkaW5hdGVzKCkuY29weSh0aGlzKTtcbiAgfVxuXG4gIGNvcHkob3RoZXIpIHtcbiAgICB0aGlzLnJhZGl1cyA9IG90aGVyLnJhZGl1cztcbiAgICB0aGlzLnBoaSA9IG90aGVyLnBoaTtcbiAgICB0aGlzLnRoZXRhID0gb3RoZXIudGhldGE7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGZyb21MbmdMYXRaKFtsbmcsIGxhdCwgel0pIHtcbiAgICB0aGlzLnJhZGl1cyA9IDEgKyB6IC8gdGhpcy5yYWRpdXNTY2FsZTtcbiAgICB0aGlzLnBoaSA9IHJhZGlhbnMobGF0KTtcbiAgICB0aGlzLnRoZXRhID0gcmFkaWFucyhsbmcpO1xuICB9XG5cbiAgZnJvbVZlY3RvcjModikge1xuICAgIHRoaXMucmFkaXVzID0gdmVjMy5sZW5ndGgodik7XG5cbiAgICBpZiAodGhpcy5yYWRpdXMgPiAwKSB7XG4gICAgICB0aGlzLnRoZXRhID0gTWF0aC5hdGFuMih2WzBdLCB2WzFdKTtcbiAgICAgIHRoaXMucGhpID0gTWF0aC5hY29zKGNsYW1wKHZbMl0gLyB0aGlzLnJhZGl1cywgLTEsIDEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9WZWN0b3IzKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAwLCB0aGlzLnJhZGl1cykucm90YXRlWCh7XG4gICAgICByYWRpYW5zOiB0aGlzLnRoZXRhXG4gICAgfSkucm90YXRlWih7XG4gICAgICByYWRpYW5zOiB0aGlzLnBoaVxuICAgIH0pO1xuICB9XG5cbiAgbWFrZVNhZmUoKSB7XG4gICAgdGhpcy5waGkgPSBNYXRoLm1heChFUFNJTE9OLCBNYXRoLm1pbihNYXRoLlBJIC0gRVBTSUxPTiwgdGhpcy5waGkpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMucGhpKSB8fCAhTnVtYmVyLmlzRmluaXRlKHRoaXMudGhldGEpIHx8ICEodGhpcy5yYWRpdXMgPiAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcGhlcmljYWxDb29yZGluYXRlczogc29tZSBmaWVsZHMgc2V0IHRvIGludmFsaWQgbnVtYmVycycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaGVyaWNhbC1jb29yZGluYXRlcy5qcy5tYXAiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4vYmFzZS92ZWN0b3InO1xuaW1wb3J0IHsgY29uZmlnLCBpc0FycmF5IH0gZnJvbSAnLi4vbGliL2NvbW1vbic7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCAqIGFzIHZlYzIgZnJvbSAnZ2wtbWF0cml4L3ZlYzInO1xuaW1wb3J0IHsgdmVjMl90cmFuc2Zvcm1NYXQ0QXNWZWN0b3IgfSBmcm9tICcuLi9saWIvZ2wtbWF0cml4LWV4dHJhcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyIGV4dGVuZHMgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgc3VwZXIoMik7XG5cbiAgICBpZiAoaXNBcnJheSh4KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNvcHkoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgICAgY2hlY2tOdW1iZXIoeCk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzWzBdID0geDtcbiAgICAgIHRoaXNbMV0gPSB5O1xuICAgIH1cbiAgfVxuXG4gIHNldCh4LCB5KSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNvcHkoYXJyYXkpIHtcbiAgICB0aGlzWzBdID0gYXJyYXlbMF07XG4gICAgdGhpc1sxXSA9IGFycmF5WzFdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC54KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC55KTtcbiAgICB9XG5cbiAgICB0aGlzWzBdID0gb2JqZWN0Lng7XG4gICAgdGhpc1sxXSA9IG9iamVjdC55O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0b09iamVjdChvYmplY3QpIHtcbiAgICBvYmplY3QueCA9IHRoaXNbMF07XG4gICAgb2JqZWN0LnkgPSB0aGlzWzFdO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBob3Jpem9udGFsQW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG5cbiAgdmVydGljYWxBbmdsZSgpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICB0cmFuc2Zvcm0obWF0cml4NCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQobWF0cml4NCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDQodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUFzVmVjdG9yKG1hdHJpeDQpIHtcbiAgICB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3Rvcih0aGlzLCB0aGlzLCBtYXRyaXg0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgzKG1hdHJpeDMpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDModGhpcywgdGhpcywgbWF0cml4Myk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MngzKG1hdHJpeDJ4Mykge1xuICAgIHZlYzIudHJhbnNmb3JtTWF0MmQodGhpcywgdGhpcywgbWF0cml4MngzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgyKG1hdHJpeDIpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDIodGhpcywgdGhpcywgbWF0cml4Mik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IyLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9iYXNlL3ZlY3Rvcic7XG5pbXBvcnQgeyBjb25maWcsIGlzQXJyYXkgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgeyB2ZWMzX3RyYW5zZm9ybU1hdDIsIHZlYzNfdHJhbnNmb3JtTWF0NEFzVmVjdG9yIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuY29uc3QgT1JJR0lOID0gWzAsIDAsIDBdO1xuY29uc3QgY29uc3RhbnRzID0ge307XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IzIGV4dGVuZHMgVmVjdG9yIHtcbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIHJldHVybiBjb25zdGFudHMuWkVSTyA9IGNvbnN0YW50cy5aRVJPIHx8IE9iamVjdC5mcmVlemUobmV3IFZlY3RvcjMoMCwgMCwgMCwgMCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xuICAgIHN1cGVyKC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheSh4KSkge1xuICAgICAgdGhpcy5jb3B5KHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgIGNoZWNrTnVtYmVyKHgpO1xuICAgICAgICBjaGVja051bWJlcih5KTtcbiAgICAgICAgY2hlY2tOdW1iZXIoeik7XG4gICAgICB9XG5cbiAgICAgIHRoaXNbMF0gPSB4O1xuICAgICAgdGhpc1sxXSA9IHk7XG4gICAgICB0aGlzWzJdID0gejtcbiAgICB9XG4gIH1cblxuICBzZXQoeCwgeSwgeikge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHRoaXNbMl0gPSB6O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LngpO1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LnkpO1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LnopO1xuICAgIH1cblxuICAgIHRoaXNbMF0gPSBvYmplY3QueDtcbiAgICB0aGlzWzFdID0gb2JqZWN0Lnk7XG4gICAgdGhpc1syXSA9IG9iamVjdC56O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0b09iamVjdChvYmplY3QpIHtcbiAgICBvYmplY3QueCA9IHRoaXNbMF07XG4gICAgb2JqZWN0LnkgPSB0aGlzWzFdO1xuICAgIG9iamVjdC56ID0gdGhpc1syXTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBhbmdsZSh2ZWN0b3IpIHtcbiAgICByZXR1cm4gdmVjMy5hbmdsZSh0aGlzLCB2ZWN0b3IpO1xuICB9XG5cbiAgY3Jvc3ModmVjdG9yKSB7XG4gICAgdmVjMy5jcm9zcyh0aGlzLCB0aGlzLCB2ZWN0b3IpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVYKHtcbiAgICByYWRpYW5zLFxuICAgIG9yaWdpbiA9IE9SSUdJTlxuICB9KSB7XG4gICAgdmVjMy5yb3RhdGVYKHRoaXMsIHRoaXMsIG9yaWdpbiwgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVkoe1xuICAgIHJhZGlhbnMsXG4gICAgb3JpZ2luID0gT1JJR0lOXG4gIH0pIHtcbiAgICB2ZWMzLnJvdGF0ZVkodGhpcywgdGhpcywgb3JpZ2luLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWih7XG4gICAgcmFkaWFucyxcbiAgICBvcmlnaW4gPSBPUklHSU5cbiAgfSkge1xuICAgIHZlYzMucm90YXRlWih0aGlzLCB0aGlzLCBvcmlnaW4sIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0obWF0cml4NCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQobWF0cml4NCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpIHtcbiAgICB2ZWMzLnRyYW5zZm9ybU1hdDQodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUFzVmVjdG9yKG1hdHJpeDQpIHtcbiAgICB2ZWMzX3RyYW5zZm9ybU1hdDRBc1ZlY3Rvcih0aGlzLCB0aGlzLCBtYXRyaXg0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgzKG1hdHJpeDMpIHtcbiAgICB2ZWMzLnRyYW5zZm9ybU1hdDModGhpcywgdGhpcywgbWF0cml4Myk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MihtYXRyaXgyKSB7XG4gICAgdmVjM190cmFuc2Zvcm1NYXQyKHRoaXMsIHRoaXMsIG1hdHJpeDIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeVF1YXRlcm5pb24ocXVhdGVybmlvbikge1xuICAgIHZlYzMudHJhbnNmb3JtUXVhdCh0aGlzLCB0aGlzLCBxdWF0ZXJuaW9uKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlY3RvcjMuanMubWFwIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL2Jhc2UvdmVjdG9yJztcbmltcG9ydCB7IGNvbmZpZywgaXNBcnJheSB9IGZyb20gJy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJ2dsLW1hdHJpeC92ZWMzJztcbmltcG9ydCB7IHZlYzRfdHJhbnNmb3JtTWF0MiwgdmVjNF90cmFuc2Zvcm1NYXQzIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuY29uc3QgY29uc3RhbnRzID0ge307XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3I0IGV4dGVuZHMgVmVjdG9yIHtcbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIHJldHVybiBjb25zdGFudHMuWkVSTyA9IGNvbnN0YW50cy5aRVJPIHx8IE9iamVjdC5mcmVlemUobmV3IFZlY3RvcjQoMCwgMCwgMCwgMCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdyA9IDApIHtcbiAgICBzdXBlcigtMCwgLTAsIC0wLCAtMCk7XG5cbiAgICBpZiAoaXNBcnJheSh4KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNvcHkoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgICAgY2hlY2tOdW1iZXIoeCk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHkpO1xuICAgICAgICBjaGVja051bWJlcih6KTtcbiAgICAgICAgY2hlY2tOdW1iZXIodyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXNbMF0gPSB4O1xuICAgICAgdGhpc1sxXSA9IHk7XG4gICAgICB0aGlzWzJdID0gejtcbiAgICAgIHRoaXNbM10gPSB3O1xuICAgIH1cbiAgfVxuXG4gIHNldCh4LCB5LCB6LCB3KSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgdGhpc1syXSA9IHo7XG4gICAgdGhpc1szXSA9IHc7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNvcHkoYXJyYXkpIHtcbiAgICB0aGlzWzBdID0gYXJyYXlbMF07XG4gICAgdGhpc1sxXSA9IGFycmF5WzFdO1xuICAgIHRoaXNbMl0gPSBhcnJheVsyXTtcbiAgICB0aGlzWzNdID0gYXJyYXlbM107XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LngpO1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LnkpO1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LnopO1xuICAgICAgY2hlY2tOdW1iZXIob2JqZWN0LncpO1xuICAgIH1cblxuICAgIHRoaXNbMF0gPSBvYmplY3QueDtcbiAgICB0aGlzWzFdID0gb2JqZWN0Lnk7XG4gICAgdGhpc1syXSA9IG9iamVjdC56O1xuICAgIHRoaXNbM10gPSBvYmplY3QudztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvT2JqZWN0KG9iamVjdCkge1xuICAgIG9iamVjdC54ID0gdGhpc1swXTtcbiAgICBvYmplY3QueSA9IHRoaXNbMV07XG4gICAgb2JqZWN0LnogPSB0aGlzWzJdO1xuICAgIG9iamVjdC53ID0gdGhpc1szXTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiA0O1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgdygpIHtcbiAgICByZXR1cm4gdGhpc1szXTtcbiAgfVxuXG4gIHNldCB3KHZhbHVlKSB7XG4gICAgdGhpc1szXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShtYXRyaXg0KSB7XG4gICAgdmVjNC50cmFuc2Zvcm1NYXQ0KHRoaXMsIHRoaXMsIG1hdHJpeDQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeU1hdHJpeDMobWF0cml4Mykge1xuICAgIHZlYzRfdHJhbnNmb3JtTWF0Myh0aGlzLCB0aGlzLCBtYXRyaXgzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgyKG1hdHJpeDIpIHtcbiAgICB2ZWM0X3RyYW5zZm9ybU1hdDIodGhpcywgdGhpcywgbWF0cml4Mik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5UXVhdGVybmlvbihxdWF0ZXJuaW9uKSB7XG4gICAgdmVjNC50cmFuc2Zvcm1RdWF0KHRoaXMsIHRoaXMsIHF1YXRlcm5pb24pO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhcHBseU1hdHJpeDQobSkge1xuICAgIG0udHJhbnNmb3JtKHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlY3RvcjQuanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9saWIvY29tbW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yMiB9IGZyb20gJy4vY2xhc3Nlcy92ZWN0b3IyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yMyB9IGZyb20gJy4vY2xhc3Nlcy92ZWN0b3IzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yNCB9IGZyb20gJy4vY2xhc3Nlcy92ZWN0b3I0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4MyB9IGZyb20gJy4vY2xhc3Nlcy9tYXRyaXgzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4NCB9IGZyb20gJy4vY2xhc3Nlcy9tYXRyaXg0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXVhdGVybmlvbiB9IGZyb20gJy4vY2xhc3Nlcy9xdWF0ZXJuaW9uJztcbmV4cG9ydCB7IGNvbmZpZywgY29uZmlndXJlLCBmb3JtYXRWYWx1ZSwgaXNBcnJheSwgY2xvbmUsIGVxdWFscywgZXhhY3RFcXVhbHMsIHRvUmFkaWFucywgdG9EZWdyZWVzLCByYWRpYW5zLCBkZWdyZWVzLCBzaW4sIGNvcywgdGFuLCBhc2luLCBhY29zLCBhdGFuLCBjbGFtcCwgbGVycCwgd2l0aEVwc2lsb24gfSBmcm9tICcuL2xpYi9jb21tb24nO1xuZXhwb3J0IHsgY2hlY2tOdW1iZXIgfSBmcm9tICcuL2xpYi92YWxpZGF0b3JzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX01hdGhVdGlscyB9IGZyb20gJy4vbGliL21hdGgtdXRpbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGhlcmljYWxDb29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcy9zcGhlcmljYWwtY29vcmRpbmF0ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3NlIH0gZnJvbSAnLi9jbGFzc2VzL3Bvc2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdWxlciB9IGZyb20gJy4vY2xhc3Nlcy9ldWxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2VydCB9IGZyb20gJy4vbGliL2Fzc2VydCc7XG5jb25zdCBnbG9iYWxzID0ge1xuICBzZWxmOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZixcbiAgd2luZG93OiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3csXG4gIGdsb2JhbDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsXG59O1xuY29uc3QgZ2xvYmFsXyA9IGdsb2JhbHMuZ2xvYmFsIHx8IGdsb2JhbHMuc2VsZiB8fCBnbG9iYWxzLndpbmRvdztcbmdsb2JhbF8ubWF0aGdsID0ge1xuICBjb25maWdcbn07XG5leHBvcnQgeyBkZWZhdWx0IGFzIF9TcGhlcmljYWxDb29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcy9zcGhlcmljYWwtY29vcmRpbmF0ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBfUG9zZSB9IGZyb20gJy4vY2xhc3Nlcy9wb3NlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX0V1bGVyIH0gZnJvbSAnLi9jbGFzc2VzL2V1bGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYXRoLmdsIGFzc2VydGlvbiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3NlcnQuanMubWFwIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL2Fzc2VydCc7XG5jb25zdCBSQURJQU5TX1RPX0RFR1JFRVMgPSAxIC8gTWF0aC5QSSAqIDE4MDtcbmNvbnN0IERFR1JFRVNfVE9fUkFESUFOUyA9IDEgLyAxODAgKiBNYXRoLlBJO1xuY29uc3QgY29uZmlnID0ge307XG5jb25maWcuRVBTSUxPTiA9IDFlLTEyO1xuY29uZmlnLmRlYnVnID0gZmFsc2U7XG5jb25maWcucHJlY2lzaW9uID0gNDtcbmNvbmZpZy5wcmludFR5cGVzID0gZmFsc2U7XG5jb25maWcucHJpbnREZWdyZWVzID0gZmFsc2U7XG5jb25maWcucHJpbnRSb3dNYWpvciA9IHRydWU7XG5leHBvcnQgeyBjb25maWcgfTtcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucyA9IHt9KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICBhc3NlcnQoa2V5IGluIGNvbmZpZyk7XG4gICAgY29uZmlnW2tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIGNvbmZpZy5FUFNJTE9OKSAqIGNvbmZpZy5FUFNJTE9OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUsIHtcbiAgcHJlY2lzaW9uID0gY29uZmlnLnByZWNpc2lvbiB8fCA0XG59ID0ge30pIHtcbiAgdmFsdWUgPSByb3VuZCh2YWx1ZSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdChwYXJzZUZsb2F0KHZhbHVlLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG5cbmZ1bmN0aW9uIGR1cGxpY2F0ZUFycmF5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5jbG9uZSA/IGFycmF5LmNsb25lKCkgOiBuZXcgQXJyYXkoYXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5jbG9uZSA/IGFycmF5LmNsb25lKCkgOiBuZXcgQXJyYXkoLi4uYXJyYXkpO1xufVxuXG5mdW5jdGlvbiBtYXAodmFsdWUsIGZ1bmMsIHJlc3VsdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgZHVwbGljYXRlQXJyYXkodmFsdWUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoICYmIGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgcmVzdWx0W2ldID0gZnVuYyh2YWx1ZVtpXSwgaSwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIHJhZGlhbnMoZGVncmVlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMocmFkaWFucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFkaWFucyhkZWdyZWVzLCByZXN1bHQpIHtcbiAgcmV0dXJuIG1hcChkZWdyZWVzLCBkZWdyZWVzID0+IGRlZ3JlZXMgKiBERUdSRUVTX1RPX1JBRElBTlMsIHJlc3VsdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVncmVlcyhyYWRpYW5zLCByZXN1bHQpIHtcbiAgcmV0dXJuIG1hcChyYWRpYW5zLCByYWRpYW5zID0+IHJhZGlhbnMgKiBSQURJQU5TX1RPX0RFR1JFRVMsIHJlc3VsdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2luKHJhZGlhbnMpIHtcbiAgcmV0dXJuIG1hcChyYWRpYW5zLCBhbmdsZSA9PiBNYXRoLnNpbihhbmdsZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvcyhyYWRpYW5zKSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5jb3MoYW5nbGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0YW4ocmFkaWFucykge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGgudGFuKGFuZ2xlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNpbihyYWRpYW5zKSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5hc2luKGFuZ2xlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWNvcyhyYWRpYW5zKSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5hY29zKGFuZ2xlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXRhbihyYWRpYW5zKSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5hdGFuKGFuZ2xlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBtYXAodmFsdWUsIHZhbHVlID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgaWYgKGlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gYS5tYXAoKGFpLCBpKSA9PiBsZXJwKGFpLCBiW2ldLCB0KSk7XG4gIH1cblxuICByZXR1cm4gdCAqIGIgKyAoMSAtIHQpICogYTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYiwgZXBzaWxvbikge1xuICBjb25zdCBvbGRFcHNpbG9uID0gY29uZmlnLkVQU0lMT047XG5cbiAgaWYgKGVwc2lsb24pIHtcbiAgICBjb25maWcuRVBTSUxPTiA9IGVwc2lsb247XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShhKSAmJiBpc0FycmF5KGIpKSB7XG4gICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICghZXF1YWxzKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhICYmIGEuZXF1YWxzKSB7XG4gICAgICByZXR1cm4gYS5lcXVhbHMoYik7XG4gICAgfVxuXG4gICAgaWYgKGIgJiYgYi5lcXVhbHMpIHtcbiAgICAgIHJldHVybiBiLmVxdWFscyhhKTtcbiAgICB9XG5cbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKSkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8PSBjb25maWcuRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZmluYWxseSB7XG4gICAgY29uZmlnLkVQU0lMT04gPSBvbGRFcHNpbG9uO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIGIgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYS5leGFjdEVxdWFscykge1xuICAgICAgcmV0dXJuIGEuZXhhY3RFcXVhbHMoYik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQXJyYXkoYSkgJiYgaXNBcnJheShiKSkge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICghZXhhY3RFcXVhbHMoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhFcHNpbG9uKEVQU0lMT04sIGZ1bmMpIHtcbiAgY29uc3Qgb2xkUHJlY2lzaW9uID0gY29uZmlnLkVQU0lMT047XG4gIGNvbmZpZy5FUFNJTE9OID0gRVBTSUxPTjtcbiAgbGV0IHZhbHVlO1xuXG4gIHRyeSB7XG4gICAgdmFsdWUgPSBmdW5jKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY29uZmlnLkVQU0lMT04gPSBvbGRQcmVjaXNpb247XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIHZlYzJfdHJhbnNmb3JtTWF0NEFzVmVjdG9yKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIGNvbnN0IHcgPSBtWzNdICogeCArIG1bN10gKiB5IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkpIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkpIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2ZWMzX3RyYW5zZm9ybU1hdDRBc1ZlY3RvcihvdXQsIGEsIG0pIHtcbiAgY29uc3QgeCA9IGFbMF07XG4gIGNvbnN0IHkgPSBhWzFdO1xuICBjb25zdCB6ID0gYVsyXTtcbiAgY29uc3QgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6KSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHopIC8gdztcbiAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHopIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2ZWMzX3RyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gIGNvbnN0IHggPSBhWzBdO1xuICBjb25zdCB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2ZWM0X3RyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gIGNvbnN0IHggPSBhWzBdO1xuICBjb25zdCB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2ZWM0X3RyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIGNvbnN0IHggPSBhWzBdO1xuICBjb25zdCB5ID0gYVsxXTtcbiAgY29uc3QgeiA9IGFbMl07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdICogejtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzRdICogeSArIG1bN10gKiB6O1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNV0gKiB5ICsgbVs4XSAqIHo7XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbC1tYXRyaXgtZXh0cmFzLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgRVBTSUxPTjE6IDFlLTEsXG4gIEVQU0lMT04yOiAxZS0yLFxuICBFUFNJTE9OMzogMWUtMyxcbiAgRVBTSUxPTjQ6IDFlLTQsXG4gIEVQU0lMT041OiAxZS01LFxuICBFUFNJTE9ONjogMWUtNixcbiAgRVBTSUxPTjc6IDFlLTcsXG4gIEVQU0lMT044OiAxZS04LFxuICBFUFNJTE9OOTogMWUtOSxcbiAgRVBTSUxPTjEwOiAxZS0xMCxcbiAgRVBTSUxPTjExOiAxZS0xMSxcbiAgRVBTSUxPTjEyOiAxZS0xMixcbiAgRVBTSUxPTjEzOiAxZS0xMyxcbiAgRVBTSUxPTjE0OiAxZS0xNCxcbiAgRVBTSUxPTjE1OiAxZS0xNSxcbiAgRVBTSUxPTjE2OiAxZS0xNixcbiAgRVBTSUxPTjE3OiAxZS0xNyxcbiAgRVBTSUxPTjE4OiAxZS0xOCxcbiAgRVBTSUxPTjE5OiAxZS0xOSxcbiAgRVBTSUxPTjIwOiAxZS0yMCxcbiAgUElfT1ZFUl9UV086IE1hdGguUEkgLyAyLFxuICBQSV9PVkVSX0ZPVVI6IE1hdGguUEkgLyA0LFxuICBQSV9PVkVSX1NJWDogTWF0aC5QSSAvIDYsXG4gIFRXT19QSTogTWF0aC5QSSAqIDJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRoLXV0aWxzLmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29tbW9uJztcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVZlY3Rvcih2LCBsZW5ndGgpIHtcbiAgaWYgKHYubGVuZ3RoICE9PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVtYmVyKHZhbHVlKSB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbnVtYmVyIFwiLmNvbmNhdCh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmVjdG9yKHYsIGxlbmd0aCwgY2FsbGVyTmFtZSA9ICcnKSB7XG4gIGlmIChjb25maWcuZGVidWcgJiYgIXZhbGlkYXRlVmVjdG9yKHYsIGxlbmd0aCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYXRoLmdsOiBcIi5jb25jYXQoY2FsbGVyTmFtZSwgXCIgc29tZSBmaWVsZHMgc2V0IHRvIGludmFsaWQgbnVtYmVycydcIikpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59XG5jb25zdCBtYXAgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVkKG1ldGhvZCwgdmVyc2lvbikge1xuICBpZiAoIW1hcFttZXRob2RdKSB7XG4gICAgbWFwW21ldGhvZF0gPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChtZXRob2QsIFwiIGhhcyBiZWVuIHJlbW92ZWQgaW4gdmVyc2lvbiBcIikuY29uY2F0KHZlcnNpb24sIFwiLCBzZWUgdXBncmFkZSBndWlkZSBmb3IgbW9yZSBpbmZvcm1hdGlvblwiKSk7XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbGlkYXRvcnMuanMubWFwIiwiLyoqXHJcbiAqIENvbW1vbiB1dGlsaXRpZXNcclxuICogQG1vZHVsZSBnbE1hdHJpeFxyXG4gKi9cbi8vIENvbmZpZ3VyYXRpb24gQ29uc3RhbnRzXG5leHBvcnQgdmFyIEVQU0lMT04gPSAwLjAwMDAwMTtcbmV4cG9ydCB2YXIgQVJSQVlfVFlQRSA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gRmxvYXQzMkFycmF5IDogQXJyYXk7XG5leHBvcnQgdmFyIFJBTkRPTSA9IE1hdGgucmFuZG9tO1xuLyoqXHJcbiAqIFNldHMgdGhlIHR5cGUgb2YgYXJyYXkgdXNlZCB3aGVuIGNyZWF0aW5nIG5ldyB2ZWN0b3JzIGFuZCBtYXRyaWNlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0Zsb2F0MzJBcnJheUNvbnN0cnVjdG9yIHwgQXJyYXlDb25zdHJ1Y3Rvcn0gdHlwZSBBcnJheSB0eXBlLCBzdWNoIGFzIEZsb2F0MzJBcnJheSBvciBBcnJheVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1hdHJpeEFycmF5VHlwZSh0eXBlKSB7XG4gIEFSUkFZX1RZUEUgPSB0eXBlO1xufVxudmFyIGRlZ3JlZSA9IE1hdGguUEkgLyAxODA7XG4vKipcclxuICogQ29udmVydCBEZWdyZWUgVG8gUmFkaWFuXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIEFuZ2xlIGluIERlZ3JlZXNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogZGVncmVlO1xufVxuLyoqXHJcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IHRoZSBhcmd1bWVudHMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIHZhbHVlLCB3aXRoaW4gYW4gYWJzb2x1dGVcclxuICogb3IgcmVsYXRpdmUgdG9sZXJhbmNlIG9mIGdsTWF0cml4LkVQU0lMT04gKGFuIGFic29sdXRlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciB2YWx1ZXMgbGVzc1xyXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCBudW1iZXIgdG8gdGVzdC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDw9IEVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEpLCBNYXRoLmFicyhiKSk7XG59XG5pZiAoIU1hdGguaHlwb3QpIE1hdGguaHlwb3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB5ID0gMCxcbiAgICAgIGkgPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICB5ICs9IGFyZ3VtZW50c1tpXSAqIGFyZ3VtZW50c1tpXTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLnNxcnQoeSk7XG59OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDN4MyBNYXRyaXhcclxuICogQG1vZHVsZSBtYXQzXHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSAgIHRoZSBzb3VyY2UgNHg0IG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbNF07XG4gIG91dFs0XSA9IGFbNV07XG4gIG91dFs1XSA9IGFbNl07XG4gIG91dFs2XSA9IGFbOF07XG4gIG91dFs3XSA9IGFbOV07XG4gIG91dFs4XSA9IGFbMTBdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBtYXRyaXggdG8gY2xvbmVcclxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYXQzIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcmV0dXJucyB7bWF0M30gQSBuZXcgbWF0M1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0MyB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMiA9IGFbNV07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGEwMTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGEwMjtcbiAgICBvdXRbN10gPSBhMTI7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYVsxXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYVsyXTtcbiAgICBvdXRbN10gPSBhWzVdO1xuICAgIG91dFs4XSA9IGFbOF07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEludmVydHMgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIHZhciBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjE7XG4gIHZhciBiMTEgPSAtYTIyICogYTEwICsgYTEyICogYTIwO1xuICB2YXIgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgb3V0WzJdID0gKGExMiAqIGEwMSAtIGEwMiAqIGExMSkgKiBkZXQ7XG4gIG91dFszXSA9IGIxMSAqIGRldDtcbiAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gIG91dFs1XSA9ICgtYTEyICogYTAwICsgYTAyICogYTEwKSAqIGRldDtcbiAgb3V0WzZdID0gYjIxICogZGV0O1xuICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTEgKiBhMDAgLSBhMDEgKiBhMTApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XTtcbiAgb3V0WzBdID0gYTExICogYTIyIC0gYTEyICogYTIxO1xuICBvdXRbMV0gPSBhMDIgKiBhMjEgLSBhMDEgKiBhMjI7XG4gIG91dFsyXSA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgb3V0WzNdID0gYTEyICogYTIwIC0gYTEwICogYTIyO1xuICBvdXRbNF0gPSBhMDAgKiBhMjIgLSBhMDIgKiBhMjA7XG4gIG91dFs1XSA9IGEwMiAqIGExMCAtIGEwMCAqIGExMjtcbiAgb3V0WzZdID0gYTEwICogYTIxIC0gYTExICogYTIwO1xuICBvdXRbN10gPSBhMDEgKiBhMjAgLSBhMDAgKiBhMjE7XG4gIG91dFs4XSA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XTtcbiAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIHZhciBiMDAgPSBiWzBdLFxuICAgICAgYjAxID0gYlsxXSxcbiAgICAgIGIwMiA9IGJbMl07XG4gIHZhciBiMTAgPSBiWzNdLFxuICAgICAgYjExID0gYls0XSxcbiAgICAgIGIxMiA9IGJbNV07XG4gIHZhciBiMjAgPSBiWzZdLFxuICAgICAgYjIxID0gYls3XSxcbiAgICAgIGIyMiA9IGJbOF07XG4gIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgb3V0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICBvdXRbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjI7XG4gIG91dFszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgb3V0WzRdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxO1xuICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG4gIG91dFs2XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMDtcbiAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICBvdXRbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNsYXRlIGEgbWF0MyBieSB0aGUgZ2l2ZW4gdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XSxcbiAgICAgIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XSxcbiAgICAgIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV07XG4gIG91dFswXSA9IGEwMDtcbiAgb3V0WzFdID0gYTAxO1xuICBvdXRbMl0gPSBhMDI7XG4gIG91dFszXSA9IGExMDtcbiAgb3V0WzRdID0gYTExO1xuICBvdXRbNV0gPSBhMTI7XG4gIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMTtcbiAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XSxcbiAgICAgIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XSxcbiAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICBvdXRbMV0gPSBjICogYTAxICsgcyAqIGExMTtcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTI7XG4gIG91dFszXSA9IGMgKiBhMTAgLSBzICogYTAwO1xuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMTtcbiAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG4gIG91dFs2XSA9IGEyMDtcbiAgb3V0WzddID0gYTIxO1xuICBvdXRbOF0gPSBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIHRoZSBtYXQzIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKiovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV07XG4gIG91dFswXSA9IHggKiBhWzBdO1xuICBvdXRbMV0gPSB4ICogYVsxXTtcbiAgb3V0WzJdID0geCAqIGFbMl07XG4gIG91dFszXSA9IHkgKiBhWzNdO1xuICBvdXRbNF0gPSB5ICogYVs0XTtcbiAgb3V0WzVdID0geSAqIGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDMudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IHZbMF07XG4gIG91dFs3XSA9IHZbMV07XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0My5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAtcztcbiAgb3V0WzRdID0gYztcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQzLnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgU2NhbGluZyB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB2WzFdO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcGllcyB0aGUgdmFsdWVzIGZyb20gYSBtYXQyZCBpbnRvIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjb3B5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDJkKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSBhWzJdO1xuICBvdXRbNF0gPSBhWzNdO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSBhWzRdO1xuICBvdXRbN10gPSBhWzVdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFszXSA9IHl4IC0gd3o7XG4gIG91dFs2XSA9IHp4ICsgd3k7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbN10gPSB6eSAtIHd4O1xuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbNV0gPSB6eSArIHd4O1xuICBvdXRbOF0gPSAxIC0geHggLSB5eTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG5vcm1hbCBtYXRyaXggKHRyYW5zcG9zZSBpbnZlcnNlKSBmcm9tIHRoZSA0eDQgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgZ2wgY29udGV4dFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbihvdXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtMiAvIGhlaWdodDtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gLTE7XG4gIG91dFs3XSA9IDE7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4gTWF0aC5oeXBvdChhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBhWzRdLCBhWzVdLCBhWzZdLCBhWzddLCBhWzhdKTtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byBtYXQzJ3NcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byBtYXQzJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdICogc2NhbGU7XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdICogc2NhbGU7XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdICogc2NhbGU7XG4gIG91dFs3XSA9IGFbN10gKyBiWzddICogc2NhbGU7XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiYgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdICYmIGFbNl0gPT09IGJbNl0gJiYgYVs3XSA9PT0gYls3XSAmJiBhWzhdID09PSBiWzhdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdLFxuICAgICAgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddLFxuICAgICAgYTggPSBhWzhdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdLFxuICAgICAgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddLFxuICAgICAgYjggPSBiWzhdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLnN1YnRyYWN0fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogNHg0IE1hdHJpeDxicj5Gb3JtYXQ6IGNvbHVtbi1tYWpvciwgd2hlbiB0eXBlZCBvdXQgaXQgbG9va3MgbGlrZSByb3ctbWFqb3I8YnI+VGhlIG1hdHJpY2VzIGFyZSBiZWluZyBwb3N0IG11bHRpcGxpZWQuXHJcbiAqIEBtb2R1bGUgbWF0NFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICBvdXRbOV0gPSBhWzldO1xuICBvdXRbMTBdID0gYVsxMF07XG4gIG91dFsxMV0gPSBhWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYXQ0IHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBBIG5ldyBtYXQ0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIHZhciBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIHZhciBhMjMgPSBhWzExXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYTAxO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYTAyO1xuICAgIG91dFs5XSA9IGExMjtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGEwMztcbiAgICBvdXRbMTNdID0gYTEzO1xuICAgIG91dFsxNF0gPSBhMjM7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYVsxXTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYVsyXTtcbiAgICBvdXRbOV0gPSBhWzZdO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGFbM107XG4gICAgb3V0WzEzXSA9IGFbN107XG4gICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICB2YXIgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIG91dFswXSA9IGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKTtcbiAgb3V0WzFdID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbMl0gPSBhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMik7XG4gIG91dFszXSA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzRdID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbNV0gPSBhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMik7XG4gIG91dFs2XSA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzddID0gYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpO1xuICBvdXRbOF0gPSBhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSk7XG4gIG91dFs5XSA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgb3V0WzEwXSA9IGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKTtcbiAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgb3V0WzEzXSA9IGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKTtcbiAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgb3V0WzE1XSA9IGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdOyAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcblxuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICBvdXRbMF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbM10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzRdO1xuICBiMSA9IGJbNV07XG4gIGIyID0gYls2XTtcbiAgYjMgPSBiWzddO1xuICBvdXRbNF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbN10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzhdO1xuICBiMSA9IGJbOV07XG4gIGIyID0gYlsxMF07XG4gIGIzID0gYlsxMV07XG4gIG91dFs4XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTFdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYlsxMl07XG4gIGIxID0gYlsxM107XG4gIGIyID0gYlsxNF07XG4gIGIzID0gYlsxNV07XG4gIG91dFsxMl0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxNV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gIGlmIChhID09PSBvdXQpIHtcbiAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgfSBlbHNlIHtcbiAgICBhMDAgPSBhWzBdO1xuICAgIGEwMSA9IGFbMV07XG4gICAgYTAyID0gYVsyXTtcbiAgICBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07XG4gICAgYTExID0gYVs1XTtcbiAgICBhMTIgPSBhWzZdO1xuICAgIGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTtcbiAgICBhMjEgPSBhWzldO1xuICAgIGEyMiA9IGFbMTBdO1xuICAgIGEyMyA9IGFbMTFdO1xuICAgIG91dFswXSA9IGEwMDtcbiAgICBvdXRbMV0gPSBhMDE7XG4gICAgb3V0WzJdID0gYTAyO1xuICAgIG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7XG4gICAgb3V0WzVdID0gYTExO1xuICAgIG91dFs2XSA9IGExMjtcbiAgICBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwO1xuICAgIG91dFs5XSA9IGEyMTtcbiAgICBvdXRbMTBdID0gYTIyO1xuICAgIG91dFsxMV0gPSBhMjM7XG4gICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzMgbm90IHVzaW5nIHZlY3Rvcml6YXRpb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdLFxuICAgICAgeiA9IHZbMl07XG4gIG91dFswXSA9IGFbMF0gKiB4O1xuICBvdXRbMV0gPSBhWzFdICogeDtcbiAgb3V0WzJdID0gYVsyXSAqIHg7XG4gIG91dFszXSA9IGFbM10gKiB4O1xuICBvdXRbNF0gPSBhWzRdICogeTtcbiAgb3V0WzVdID0gYVs1XSAqIHk7XG4gIG91dFs2XSA9IGFbNl0gKiB5O1xuICBvdXRbN10gPSBhWzddICogeTtcbiAgb3V0WzhdID0gYVs4XSAqIHo7XG4gIG91dFs5XSA9IGFbOV0gKiB6O1xuICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICB2YXIgYjAwLCBiMDEsIGIwMjtcbiAgdmFyIGIxMCwgYjExLCBiMTI7XG4gIHZhciBiMjAsIGIyMSwgYjIyO1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdOyAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcblxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjOyAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTEwID0gYVs0XTtcbiAgdmFyIGExMSA9IGFbNV07XG4gIHZhciBhMTIgPSBhWzZdO1xuICB2YXIgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSB2WzFdO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gdlsyXTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYzsgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21YUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAtcztcbiAgb3V0WzEwXSA9IGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlWShkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHM7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZVooZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVpSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgb3V0WzFdID0geHkgKyB3ejtcbiAgb3V0WzJdID0geHogLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geHkgLSB3ejtcbiAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgb3V0WzZdID0geXogKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geHogKyB3eTtcbiAgb3V0WzldID0geXogLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgZnJvbSBhIGR1YWwgcXVhdC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgTWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb25cclxuICogQHJldHVybnMge21hdDR9IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdDIob3V0LCBhKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidzsgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgYSwgdHJhbnNsYXRpb24pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxyXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICBvdXRbMF0gPSBtYXRbMTJdO1xuICBvdXRbMV0gPSBtYXRbMTNdO1xuICBvdXRbMl0gPSBtYXRbMTRdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXHJcbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZVxyXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXHJcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsaW5nKG91dCwgbWF0KSB7XG4gIHZhciBtMTEgPSBtYXRbMF07XG4gIHZhciBtMTIgPSBtYXRbMV07XG4gIHZhciBtMTMgPSBtYXRbMl07XG4gIHZhciBtMjEgPSBtYXRbNF07XG4gIHZhciBtMjIgPSBtYXRbNV07XG4gIHZhciBtMjMgPSBtYXRbNl07XG4gIHZhciBtMzEgPSBtYXRbOF07XG4gIHZhciBtMzIgPSBtYXRbOV07XG4gIHZhciBtMzMgPSBtYXRbMTBdO1xuICBvdXRbMF0gPSBNYXRoLmh5cG90KG0xMSwgbTEyLCBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLmh5cG90KG0yMSwgbTIyLCBtMjMpO1xuICBvdXRbMl0gPSBNYXRoLmh5cG90KG0zMSwgbTMyLCBtMzMpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWF0ZXJuaW9uIHJlcHJlc2VudGluZyB0aGUgcm90YXRpb25hbCBjb21wb25lbnRcclxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXHJcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcclxuICogIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gb3JpZ2luYWxseSBzdXBwbGllZC5cclxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXHJcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKG91dCwgbWF0KSB7XG4gIHZhciBzY2FsaW5nID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIGdldFNjYWxpbmcoc2NhbGluZywgbWF0KTtcbiAgdmFyIGlzMSA9IDEgLyBzY2FsaW5nWzBdO1xuICB2YXIgaXMyID0gMSAvIHNjYWxpbmdbMV07XG4gIHZhciBpczMgPSAxIC8gc2NhbGluZ1syXTtcbiAgdmFyIHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gIHZhciBzbTEyID0gbWF0WzFdICogaXMyO1xuICB2YXIgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgdmFyIHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gIHZhciBzbTIyID0gbWF0WzVdICogaXMyO1xuICB2YXIgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgdmFyIHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gIHZhciBzbTMyID0gbWF0WzldICogaXMyO1xuICB2YXIgc20zMyA9IG1hdFsxMF0gKiBpczM7XG4gIHZhciB0cmFjZSA9IHNtMTEgKyBzbTIyICsgc20zMztcbiAgdmFyIFMgPSAwO1xuXG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgb3V0WzBdID0gKHNtMjMgLSBzbTMyKSAvIFM7XG4gICAgb3V0WzFdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMTEgLSBzbTIyIC0gc20zMykgKiAyO1xuICAgIG91dFszXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dFsyXSA9IChzbTMxICsgc20xMykgLyBTO1xuICB9IGVsc2UgaWYgKHNtMjIgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTIyIC0gc20xMSAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20zMSAtIHNtMTMpIC8gUztcbiAgICBvdXRbMF0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICBvdXRbMl0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgfSBlbHNlIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMzMgLSBzbTExIC0gc20yMikgKiAyO1xuICAgIG91dFszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgIG91dFswXSA9IChzbTMxICsgc20xMykgLyBTO1xuICAgIG91dFsxXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICBvdXRbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gIG91dFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG9yaWdpbik7XHJcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XHJcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XHJcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG5lZ2F0aXZlT3JpZ2luKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBzIFNjYWxpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBvIFRoZSBvcmlnaW4gdmVjdG9yIGFyb3VuZCB3aGljaCB0byBzY2FsZSBhbmQgcm90YXRlXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlT3JpZ2luKG91dCwgcSwgdiwgcywgbykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICB2YXIgb3ggPSBvWzBdO1xuICB2YXIgb3kgPSBvWzFdO1xuICB2YXIgb3ogPSBvWzJdO1xuICB2YXIgb3V0MCA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICB2YXIgb3V0MSA9ICh4eSArIHd6KSAqIHN4O1xuICB2YXIgb3V0MiA9ICh4eiAtIHd5KSAqIHN4O1xuICB2YXIgb3V0NCA9ICh4eSAtIHd6KSAqIHN5O1xuICB2YXIgb3V0NSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICB2YXIgb3V0NiA9ICh5eiArIHd4KSAqIHN5O1xuICB2YXIgb3V0OCA9ICh4eiArIHd5KSAqIHN6O1xuICB2YXIgb3V0OSA9ICh5eiAtIHd4KSAqIHN6O1xuICB2YXIgb3V0MTAgPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzBdID0gb3V0MDtcbiAgb3V0WzFdID0gb3V0MTtcbiAgb3V0WzJdID0gb3V0MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gb3V0NDtcbiAgb3V0WzVdID0gb3V0NTtcbiAgb3V0WzZdID0gb3V0NjtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gb3V0ODtcbiAgb3V0WzldID0gb3V0OTtcbiAgb3V0WzEwXSA9IG91dDEwO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXQwICogb3ggKyBvdXQ0ICogb3kgKyBvdXQ4ICogb3opO1xuICBvdXRbMTNdID0gdlsxXSArIG95IC0gKG91dDEgKiBveCArIG91dDUgKiBveSArIG91dDkgKiBveik7XG4gIG91dFsxNF0gPSB2WzJdICsgb3ogLSAob3V0MiAqIG94ICsgb3V0NiAqIG95ICsgb3V0MTAgKiBveik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHl4IC0gd3o7XG4gIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbNl0gPSB6eSArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICB2YXIgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IG5lYXIgKiAyICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IG5lYXIgKiAyICogdGI7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyICogMiAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXHJcbiAqIFBhc3NpbmcgbnVsbC91bmRlZmluZWQvbm8gdmFsdWUgZm9yIGZhciB3aWxsIGdlbmVyYXRlIGluZmluaXRlIHByb2plY3Rpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtLCBjYW4gYmUgbnVsbCBvciBJbmZpbml0eVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgIG5mO1xuICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBmO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE1XSA9IDA7XG5cbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLTIgKiBuZWFyO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxyXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXHJcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbik7XG4gIHZhciB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNTtcbiAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzExXSA9IC0xLjA7XG4gIG91dFsxMl0gPSAwLjA7XG4gIG91dFsxM10gPSAwLjA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTVdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpcy5cclxuICogSWYgeW91IHdhbnQgYSBtYXRyaXggdGhhdCBhY3R1YWxseSBtYWtlcyBhbiBvYmplY3QgbG9vayBhdCBhbm90aGVyIG9iamVjdCwgeW91IHNob3VsZCB1c2UgdGFyZ2V0VG8gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICB9XG5cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguaHlwb3QoejAsIHoxLCB6Mik7XG4gIHowICo9IGxlbjtcbiAgejEgKj0gbGVuO1xuICB6MiAqPSBsZW47XG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguaHlwb3QoeDAsIHgxLCB4Mik7XG5cbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgbGVuID0gTWF0aC5oeXBvdCh5MCwgeTEsIHkyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgdmFyIGV5ZXggPSBleWVbMF0sXG4gICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICB1cHogPSB1cFsyXTtcbiAgdmFyIHowID0gZXlleCAtIHRhcmdldFswXSxcbiAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcbiAgdmFyIGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcbiAgfVxuXG4gIHZhciB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIiwgXCIgKyBhWzldICsgXCIsIFwiICsgYVsxMF0gKyBcIiwgXCIgKyBhWzExXSArIFwiLCBcIiArIGFbMTJdICsgXCIsIFwiICsgYVsxM10gKyBcIiwgXCIgKyBhWzE0XSArIFwiLCBcIiArIGFbMTVdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcclxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSwgYVs2XSwgYVs3XSwgYVs4XSwgYVs5XSwgYVsxMF0sIGFbMTFdLCBhWzEyXSwgYVsxM10sIGFbMTRdLCBhWzE1XSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICBvdXRbOV0gPSBhWzldICsgYls5XSAqIHNjYWxlO1xuICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXSAqIHNjYWxlO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXSAqIHNjYWxlO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXSAqIHNjYWxlO1xuICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXSAqIHNjYWxlO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XSAqIHNjYWxlO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiYgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddO1xuICB2YXIgYTggPSBhWzhdLFxuICAgICAgYTkgPSBhWzldLFxuICAgICAgYTEwID0gYVsxMF0sXG4gICAgICBhMTEgPSBhWzExXTtcbiAgdmFyIGExMiA9IGFbMTJdLFxuICAgICAgYTEzID0gYVsxM10sXG4gICAgICBhMTQgPSBhWzE0XSxcbiAgICAgIGExNSA9IGFbMTVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICB2YXIgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddO1xuICB2YXIgYjggPSBiWzhdLFxuICAgICAgYjkgPSBiWzldLFxuICAgICAgYjEwID0gYlsxMF0sXG4gICAgICBiMTEgPSBiWzExXTtcbiAgdmFyIGIxMiA9IGJbMTJdLFxuICAgICAgYjEzID0gYlsxM10sXG4gICAgICBiMTQgPSBiWzE0XSxcbiAgICAgIGIxNSA9IGJbMTVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiYgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiYgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJiBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiYgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJiBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0ICogYXMgbWF0MyBmcm9tIFwiLi9tYXQzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL3ZlYzMuanNcIjtcbmltcG9ydCAqIGFzIHZlYzQgZnJvbSBcIi4vdmVjNC5qc1wiO1xuLyoqXHJcbiAqIFF1YXRlcm5pb25cclxuICogQG1vZHVsZSBxdWF0XHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBxdWF0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIHF1YXQgdG8gdGhlIGlkZW50aXR5IHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcclxuICogdGhlbiByZXR1cm5zIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgYXJvdW5kIHdoaWNoIHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gIHJhZCA9IHJhZCAqIDAuNTtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgb3V0WzFdID0gcyAqIGF4aXNbMV07XG4gIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdldHMgdGhlIHJvdGF0aW9uIGF4aXMgYW5kIGFuZ2xlIGZvciBhIGdpdmVuXHJcbiAqICBxdWF0ZXJuaW9uLiBJZiBhIHF1YXRlcm5pb24gaXMgY3JlYXRlZCB3aXRoXHJcbiAqICBzZXRBeGlzQW5nbGUsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBzYW1lXHJcbiAqICB2YWx1ZXMgYXMgcHJvdmlkaWVkIGluIHRoZSBvcmlnaW5hbCBwYXJhbWV0ZXIgbGlzdFxyXG4gKiAgT1IgZnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdmFsdWVzLlxyXG4gKiBFeGFtcGxlOiBUaGUgcXVhdGVybmlvbiBmb3JtZWQgYnkgYXhpcyBbMCwgMCwgMV0gYW5kXHJcbiAqICBhbmdsZSAtOTAgaXMgdGhlIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5XHJcbiAqICBbMCwgMCwgMV0gYW5kIDI3MC4gVGhpcyBtZXRob2QgZmF2b3JzIHRoZSBsYXR0ZXIuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dF9heGlzICBWZWN0b3IgcmVjZWl2aW5nIHRoZSBheGlzIG9mIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gcSAgICAgUXVhdGVybmlvbiB0byBiZSBkZWNvbXBvc2VkXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBvZiB0aGUgcm90YXRpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBeGlzQW5nbGUob3V0X2F4aXMsIHEpIHtcbiAgdmFyIHJhZCA9IE1hdGguYWNvcyhxWzNdKSAqIDIuMDtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQgLyAyLjApO1xuXG4gIGlmIChzID4gZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIG91dF9heGlzWzBdID0gcVswXSAvIHM7XG4gICAgb3V0X2F4aXNbMV0gPSBxWzFdIC8gcztcbiAgICBvdXRfYXhpc1syXSA9IHFbMl0gLyBzO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHMgaXMgemVybywgcmV0dXJuIGFueSBheGlzIChubyByb3RhdGlvbiAtIGF4aXMgZG9lcyBub3QgbWF0dGVyKVxuICAgIG91dF9heGlzWzBdID0gMTtcbiAgICBvdXRfYXhpc1sxXSA9IDA7XG4gICAgb3V0X2F4aXNbMl0gPSAwO1xuICB9XG5cbiAgcmV0dXJuIHJhZDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSBhbmd1bGFyIGRpc3RhbmNlIGJldHdlZW4gdHdvIHVuaXQgcXVhdGVybmlvbnNcclxuICpcclxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBhICAgICBPcmlnaW4gdW5pdCBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gYiAgICAgRGVzdGluYXRpb24gdW5pdCBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBiZXR3ZWVuIHRoZSB0d28gcXVhdGVybmlvbnNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShhLCBiKSB7XG4gIHZhciBkb3Rwcm9kdWN0ID0gZG90KGEsIGIpO1xuICByZXR1cm4gTWF0aC5hY29zKDIgKiBkb3Rwcm9kdWN0ICogZG90cHJvZHVjdCAtIDEpO1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXSxcbiAgICAgIGJ3ID0gYlszXTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFggYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieDtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF6ICogYng7XG4gIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFkgYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnkgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnk7XG4gIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXkgKiBieTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFogYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnogPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgb3V0WzFdID0gYXkgKiBidyAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBXIGNvbXBvbmVudCBvZiBhIHF1YXQgZnJvbSB0aGUgWCwgWSwgYW5kIFogY29tcG9uZW50cy5cclxuICogQXNzdW1lcyB0aGF0IHF1YXRlcm5pb24gaXMgMSB1bml0IGluIGxlbmd0aC5cclxuICogQW55IGV4aXN0aW5nIFcgY29tcG9uZW50IHdpbGwgYmUgaWdub3JlZC5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIFcgY29tcG9uZW50IG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSBNYXRoLnNxcnQoTWF0aC5hYnMoMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6KSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZiBhIHVuaXQgcXVhdGVybmlvbi5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdLFxuICAgICAgdyA9IGFbM107XG4gIHZhciByID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciBldCA9IE1hdGguZXhwKHcpO1xuICB2YXIgcyA9IHIgPiAwID8gZXQgKiBNYXRoLnNpbihyKSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogcztcbiAgb3V0WzFdID0geSAqIHM7XG4gIG91dFsyXSA9IHogKiBzO1xuICBvdXRbM10gPSBldCAqIE1hdGguY29zKHIpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aGUgbmF0dXJhbCBsb2dhcml0aG0gb2YgYSB1bml0IHF1YXRlcm5pb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxuKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdLFxuICAgICAgdyA9IGFbM107XG4gIHZhciByID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciB0ID0gciA+IDAgPyBNYXRoLmF0YW4yKHIsIHcpIC8gciA6IDA7XG4gIG91dFswXSA9IHggKiB0O1xuICBvdXRbMV0gPSB5ICogdDtcbiAgb3V0WzJdID0geiAqIHQ7XG4gIG91dFszXSA9IDAuNSAqIE1hdGgubG9nKHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGUgdGhlIHNjYWxhciBwb3dlciBvZiBhIHVuaXQgcXVhdGVybmlvbi5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHF1YXRlcm5pb24gYnlcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBvdyhvdXQsIGEsIGIpIHtcbiAgbG4ob3V0LCBhKTtcbiAgc2NhbGUob3V0LCBvdXQsIGIpO1xuICBleHAob3V0LCBvdXQpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgLy8gYmVuY2htYXJrczpcbiAgLy8gICAgaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi1zbGVycC1pbXBsZW1lbnRhdGlvbnNcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXSxcbiAgICAgIGJ3ID0gYlszXTtcbiAgdmFyIG9tZWdhLCBjb3NvbSwgc2lub20sIHNjYWxlMCwgc2NhbGUxOyAvLyBjYWxjIGNvc2luZVxuXG4gIGNvc29tID0gYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ICsgYXcgKiBidzsgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXG5cbiAgaWYgKGNvc29tIDwgMC4wKSB7XG4gICAgY29zb20gPSAtY29zb207XG4gICAgYnggPSAtYng7XG4gICAgYnkgPSAtYnk7XG4gICAgYnogPSAtYno7XG4gICAgYncgPSAtYnc7XG4gIH0gLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuXG5cbiAgaWYgKDEuMCAtIGNvc29tID4gZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKVxuICAgIG9tZWdhID0gTWF0aC5hY29zKGNvc29tKTtcbiAgICBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTtcbiAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2lub207XG4gIH0gZWxzZSB7XG4gICAgLy8gXCJmcm9tXCIgYW5kIFwidG9cIiBxdWF0ZXJuaW9ucyBhcmUgdmVyeSBjbG9zZVxuICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgIHNjYWxlMSA9IHQ7XG4gIH0gLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuXG5cbiAgb3V0WzBdID0gc2NhbGUwICogYXggKyBzY2FsZTEgKiBieDtcbiAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgb3V0WzJdID0gc2NhbGUwICogYXogKyBzY2FsZTEgKiBiejtcbiAgb3V0WzNdID0gc2NhbGUwICogYXcgKyBzY2FsZTEgKiBidztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdW5pdCBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCkge1xuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBodHRwOi8vcGxhbm5pbmcuY3MudWl1Yy5lZHUvbm9kZTE5OC5odG1sXG4gIC8vIFRPRE86IENhbGxpbmcgcmFuZG9tIDMgdGltZXMgaXMgcHJvYmFibHkgbm90IHRoZSBmYXN0ZXN0IHNvbHV0aW9uXG4gIHZhciB1MSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgdTIgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHUzID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciBzcXJ0MU1pbnVzVTEgPSBNYXRoLnNxcnQoMSAtIHUxKTtcbiAgdmFyIHNxcnRVMSA9IE1hdGguc3FydCh1MSk7XG4gIG91dFswXSA9IHNxcnQxTWludXNVMSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiB1Mik7XG4gIG91dFsxXSA9IHNxcnQxTWludXNVMSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiB1Mik7XG4gIG91dFsyXSA9IHNxcnRVMSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiB1Myk7XG4gIG91dFszXSA9IHNxcnRVMSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiB1Myk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGludmVyc2Ugb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTtcbiAgdmFyIGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gIHZhciBpbnZEb3QgPSBkb3QgPyAxLjAgLyBkb3QgOiAwOyAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gIG91dFswXSA9IC1hMCAqIGludkRvdDtcbiAgb3V0WzFdID0gLWExICogaW52RG90O1xuICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gIG91dFszXSA9IGEzICogaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcclxuICogSWYgdGhlIHF1YXRlcm5pb24gaXMgbm9ybWFsaXplZCwgdGhpcyBmdW5jdGlvbiBpcyBmYXN0ZXIgdGhhbiBxdWF0LmludmVyc2UgYW5kIHByb2R1Y2VzIHRoZSBzYW1lIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGNvbmp1Z2F0ZSBvZlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29uanVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIDN4MyByb3RhdGlvbiBtYXRyaXguXHJcbiAqXHJcbiAqIE5PVEU6IFRoZSByZXN1bHRhbnQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28geW91IHNob3VsZCBiZSBzdXJlXHJcbiAqIHRvIHJlbm9ybWFsaXplIHRoZSBxdWF0ZXJuaW9uIHlvdXJzZWxmIHdoZXJlIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIHJvdGF0aW9uIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkge1xuICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAvLyBhcnRpY2xlIFwiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb25cIi5cbiAgdmFyIGZUcmFjZSA9IG1bMF0gKyBtWzRdICsgbVs4XTtcbiAgdmFyIGZSb290O1xuXG4gIGlmIChmVHJhY2UgPiAwLjApIHtcbiAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgLy8gMndcblxuICAgIG91dFszXSA9IDAuNSAqIGZSb290O1xuICAgIGZSb290ID0gMC41IC8gZlJvb3Q7IC8vIDEvKDR3KVxuXG4gICAgb3V0WzBdID0gKG1bNV0gLSBtWzddKSAqIGZSb290O1xuICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICBvdXRbMl0gPSAobVsxXSAtIG1bM10pICogZlJvb3Q7XG4gIH0gZWxzZSB7XG4gICAgLy8gfHd8IDw9IDEvMlxuICAgIHZhciBpID0gMDtcbiAgICBpZiAobVs0XSA+IG1bMF0pIGkgPSAxO1xuICAgIGlmIChtWzhdID4gbVtpICogMyArIGldKSBpID0gMjtcbiAgICB2YXIgaiA9IChpICsgMSkgJSAzO1xuICAgIHZhciBrID0gKGkgKyAyKSAlIDM7XG4gICAgZlJvb3QgPSBNYXRoLnNxcnQobVtpICogMyArIGldIC0gbVtqICogMyArIGpdIC0gbVtrICogMyArIGtdICsgMS4wKTtcbiAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290O1xuICAgIG91dFszXSA9IChtW2ogKiAzICsga10gLSBtW2sgKiAzICsgal0pICogZlJvb3Q7XG4gICAgb3V0W2pdID0gKG1baiAqIDMgKyBpXSArIG1baSAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICBvdXRba10gPSAobVtrICogMyArIGldICsgbVtpICogMyArIGtdKSAqIGZSb290O1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHt4fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFggYXhpcyBpbiBkZWdyZWVzLlxyXG4gKiBAcGFyYW0ge3l9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWSBheGlzIGluIGRlZ3JlZXMuXHJcbiAqIEBwYXJhbSB7en0gQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBaIGF4aXMgaW4gZGVncmVlcy5cclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXVsZXIob3V0LCB4LCB5LCB6KSB7XG4gIHZhciBoYWxmVG9SYWQgPSAwLjUgKiBNYXRoLlBJIC8gMTgwLjA7XG4gIHggKj0gaGFsZlRvUmFkO1xuICB5ICo9IGhhbGZUb1JhZDtcbiAgeiAqPSBoYWxmVG9SYWQ7XG4gIHZhciBzeCA9IE1hdGguc2luKHgpO1xuICB2YXIgY3ggPSBNYXRoLmNvcyh4KTtcbiAgdmFyIHN5ID0gTWF0aC5zaW4oeSk7XG4gIHZhciBjeSA9IE1hdGguY29zKHkpO1xuICB2YXIgc3ogPSBNYXRoLnNpbih6KTtcbiAgdmFyIGN6ID0gTWF0aC5jb3Moeik7XG4gIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgb3V0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcXVhdGVuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJxdWF0KFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdGVybmlvbiB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgY2xvbmUgPSB2ZWM0LmNsb25lO1xuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZyb21WYWx1ZXMgPSB2ZWM0LmZyb21WYWx1ZXM7XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHF1YXQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIHNvdXJjZSBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGNvcHkgPSB2ZWM0LmNvcHk7XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzZXQgPSB2ZWM0LnNldDtcbi8qKlxyXG4gKiBBZGRzIHR3byBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBhZGQgPSB2ZWM0LmFkZDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNjYWxlID0gdmVjNC5zY2FsZTtcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gcXVhdCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkb3QgPSB2ZWM0LmRvdDtcbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVycCA9IHZlYzQubGVycDtcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbmd0aCA9IHZlYzQubGVuZ3RoO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3F1YXJlZExlbmd0aCA9IHZlYzQuc3F1YXJlZExlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogTm9ybWFsaXplIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdGVybmlvbiB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBUaGUgZmlyc3QgcXVhdGVybmlvbi5cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgVGhlIHNlY29uZCBxdWF0ZXJuaW9uLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCB2YXIgZXhhY3RFcXVhbHMgPSB2ZWM0LmV4YWN0RXF1YWxzO1xuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IHZhciBlcXVhbHMgPSB2ZWM0LmVxdWFscztcbi8qKlxyXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXHJcbiAqIHZlY3RvciB0byBhbm90aGVyLlxyXG4gKlxyXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvbi5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBkZXN0aW5hdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IHZhciByb3RhdGlvblRvID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG1wdmVjMyA9IHZlYzMuY3JlYXRlKCk7XG4gIHZhciB4VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCk7XG4gIHZhciB5VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiKSB7XG4gICAgdmFyIGRvdCA9IHZlYzMuZG90KGEsIGIpO1xuXG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB4VW5pdFZlYzMsIGEpO1xuICAgICAgaWYgKHZlYzMubGVuKHRtcHZlYzMpIDwgMC4wMDAwMDEpIHZlYzMuY3Jvc3ModG1wdmVjMywgeVVuaXRWZWMzLCBhKTtcbiAgICAgIHZlYzMubm9ybWFsaXplKHRtcHZlYzMsIHRtcHZlYzMpO1xuICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgIG91dFswXSA9IDA7XG4gICAgICBvdXRbMV0gPSAwO1xuICAgICAgb3V0WzJdID0gMDtcbiAgICAgIG91dFszXSA9IDE7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIGEsIGIpO1xuICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTtcbiAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICBvdXRbMl0gPSB0bXB2ZWMzWzJdO1xuICAgICAgb3V0WzNdID0gMSArIGRvdDtcbiAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbiAgfTtcbn0oKTtcbi8qKlxyXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgc3FsZXJwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGVtcDEgPSBjcmVhdGUoKTtcbiAgdmFyIHRlbXAyID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpO1xuICAgIHNsZXJwKHRlbXAyLCBiLCBjLCB0KTtcbiAgICBzbGVycChvdXQsIHRlbXAxLCB0ZW1wMiwgMiAqIHQgKiAoMSAtIHQpKTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xufSgpO1xuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXHJcbiAqIGF4ZXMuIEVhY2ggYXhpcyBpcyBhIHZlYzMgYW5kIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXQgbGVuZ3RoIGFuZFxyXG4gKiBwZXJwZW5kaWN1bGFyIHRvIGFsbCBvdGhlciBzcGVjaWZpZWQgYXhlcy5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHZpZXcgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSB2aWV3aW5nIGRpcmVjdGlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcmlnaHQgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsIFwicmlnaHRcIiBkaXJlY3Rpb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgc2V0QXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hdHIgPSBtYXQzLmNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG4gICAgbWF0clsxXSA9IHVwWzBdO1xuICAgIG1hdHJbNF0gPSB1cFsxXTtcbiAgICBtYXRyWzddID0gdXBbMl07XG4gICAgbWF0clsyXSA9IC12aWV3WzBdO1xuICAgIG1hdHJbNV0gPSAtdmlld1sxXTtcbiAgICBtYXRyWzhdID0gLXZpZXdbMl07XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDIgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjMlxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcclxuICpcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5KSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMiB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSkge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIERpdmlkZXMgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBmbG9vclxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIHJvdW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cbi8qKlxyXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gbmVnYXRlXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHk7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xufVxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcclxuICogTm90ZSB0aGF0IHRoZSBjcm9zcyBwcm9kdWN0IG11c3QgYnkgZGVmaW5pdGlvbiBwcm9kdWNlIGEgM0QgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gIHZhciB6ID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgb3V0WzBdID0gb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0Mn0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5O1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQyZH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeSArIG1bNF07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcclxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzNdICogeSArIG1bNl07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcclxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bMTJdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgMkQgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IFRoZSByZWNlaXZpbmcgdmVjMlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgdmVjMiBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgYiwgcmFkKSB7XG4gIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgdmFyIHAwID0gYVswXSAtIGJbMF0sXG4gICAgICBwMSA9IGFbMV0gLSBiWzFdLFxuICAgICAgc2luQyA9IE1hdGguc2luKHJhZCksXG4gICAgICBjb3NDID0gTWF0aC5jb3MocmFkKTsgLy9wZXJmb3JtIHJvdGF0aW9uIGFuZCB0cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHAwICogY29zQyAtIHAxICogc2luQyArIGJbMF07XG4gIG91dFsxXSA9IHAwICogc2luQyArIHAxICogY29zQyArIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAyRCB2ZWN0b3JzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgdmFyIHgxID0gYVswXSxcbiAgICAgIHkxID0gYVsxXSxcbiAgICAgIHgyID0gYlswXSxcbiAgICAgIHkyID0gYlsxXSxcbiAgICAgIC8vIG1hZyBpcyB0aGUgcHJvZHVjdCBvZiB0aGUgbWFnbml0dWRlcyBvZiBhIGFuZCBiXG4gIG1hZyA9IE1hdGguc3FydCh4MSAqIHgxICsgeTEgKiB5MSkgKiBNYXRoLnNxcnQoeDIgKiB4MiArIHkyICogeTIpLFxuICAgICAgLy8gbWFnICYmLi4gc2hvcnQgY2lyY3VpdHMgaWYgbWFnID09IDBcbiAgY29zaW5lID0gbWFnICYmICh4MSAqIHgyICsgeTEgKiB5MikgLyBtYWc7IC8vIE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSBjbGFtcHMgdGhlIGNvc2luZSBiZXR3ZWVuIC0xIGFuZCAxXG5cbiAgcmV0dXJuIE1hdGguYWNvcyhNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkpO1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gemVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjMihcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBleGFjdGx5IGhhdmUgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKTtcbn1cbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkTGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcbi8qKlxyXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjMnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMi4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMycyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cclxuICogQHJldHVybnMge0FycmF5fSBhXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmVjID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG5cbiAgICBpZiAoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gMjtcbiAgICB9XG5cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbihjb3VudCAqIHN0cmlkZSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07XG4gICAgICB2ZWNbMV0gPSBhW2kgKyAxXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDMgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjM1xyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcclxuICpcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeik7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjZWlsXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBmbG9vclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gcm91bmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLnJvdW5kKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcclxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBpbnZlcnRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIG91dFsyXSA9IDEuMCAvIGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTm9ybWFsaXplIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIG91dFsyXSA9IGFbMl0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG4vKipcclxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdO1xuICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdO1xuICB2YXIgYXkgPSBhWzFdO1xuICB2YXIgYXogPSBhWzJdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgaGVybWl0ZSBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICB2YXIgZmFjdG9yMSA9IGZhY3RvclRpbWVzMiAqICgyICogdCAtIDMpICsgMTtcbiAgdmFyIGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdDtcbiAgdmFyIGZhY3RvcjMgPSBmYWN0b3JUaW1lczIgKiAodCAtIDEpO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqICgzIC0gMiAqIHQpO1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgYmV6aWVyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiZXppZXIob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBpbnZlcnNlRmFjdG9yID0gMSAtIHQ7XG4gIHZhciBpbnZlcnNlRmFjdG9yVGltZXNUd28gPSBpbnZlcnNlRmFjdG9yICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICB2YXIgZmFjdG9yMSA9IGludmVyc2VGYWN0b3JUaW1lc1R3byAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3IyID0gMyAqIHQgKiBpbnZlcnNlRmFjdG9yVGltZXNUd287XG4gIHZhciBmYWN0b3IzID0gMyAqIGZhY3RvclRpbWVzMiAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3I0ID0gZmFjdG9yVGltZXMyICogdDtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7XG4gIHZhciByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICB2YXIgeiA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wIC0gMS4wO1xuICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMCAtIHogKiB6KSAqIHNjYWxlO1xuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHpTY2FsZTtcbiAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGU7XG4gIG91dFsyXSA9IHogKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxyXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIHZhciB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICB3ID0gdyB8fCAxLjA7XG4gIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSkgLyB3O1xuICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gdztcbiAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICBvdXRbMF0gPSB4ICogbVswXSArIHkgKiBtWzNdICsgeiAqIG1bNl07XG4gIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XTtcbiAgb3V0WzJdID0geCAqIG1bMl0gKyB5ICogbVs1XSArIHogKiBtWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIHF1YXRcclxuICogQ2FuIGFsc28gYmUgdXNlZCBmb3IgZHVhbCBxdWF0ZXJuaW9ucy4gKE11bHRpcGx5IGl0IHdpdGggdGhlIHJlYWwgcGFydClcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgLy8gYmVuY2htYXJrczogaHR0cHM6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tdHJhbnNmb3JtLXZlYzMtaW1wbGVtZW50YXRpb25zLWZpeGVkXG4gIHZhciBxeCA9IHFbMF0sXG4gICAgICBxeSA9IHFbMV0sXG4gICAgICBxeiA9IHFbMl0sXG4gICAgICBxdyA9IHFbM107XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07IC8vIHZhciBxdmVjID0gW3F4LCBxeSwgcXpdO1xuICAvLyB2YXIgdXYgPSB2ZWMzLmNyb3NzKFtdLCBxdmVjLCBhKTtcblxuICB2YXIgdXZ4ID0gcXkgKiB6IC0gcXogKiB5LFxuICAgICAgdXZ5ID0gcXogKiB4IC0gcXggKiB6LFxuICAgICAgdXZ6ID0gcXggKiB5IC0gcXkgKiB4OyAvLyB2YXIgdXV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgdXYpO1xuXG4gIHZhciB1dXZ4ID0gcXkgKiB1dnogLSBxeiAqIHV2eSxcbiAgICAgIHV1dnkgPSBxeiAqIHV2eCAtIHF4ICogdXZ6LFxuICAgICAgdXV2eiA9IHF4ICogdXZ5IC0gcXkgKiB1dng7IC8vIHZlYzMuc2NhbGUodXYsIHV2LCAyICogdyk7XG5cbiAgdmFyIHcyID0gcXcgKiAyO1xuICB1dnggKj0gdzI7XG4gIHV2eSAqPSB3MjtcbiAgdXZ6ICo9IHcyOyAvLyB2ZWMzLnNjYWxlKHV1diwgdXV2LCAyKTtcblxuICB1dXZ4ICo9IDI7XG4gIHV1dnkgKj0gMjtcbiAgdXV2eiAqPSAyOyAvLyByZXR1cm4gdmVjMy5hZGQob3V0LCBhLCB2ZWMzLmFkZChvdXQsIHV2LCB1dXYpKTtcblxuICBvdXRbMF0gPSB4ICsgdXZ4ICsgdXV2eDtcbiAgb3V0WzFdID0geSArIHV2eSArIHV1dnk7XG4gIG91dFsyXSA9IHogKyB1dnogKyB1dXZ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCBiLCByYWQpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzBdO1xuICByWzFdID0gcFsxXSAqIE1hdGguY29zKHJhZCkgLSBwWzJdICogTWF0aC5zaW4ocmFkKTtcbiAgclsyXSA9IHBbMV0gKiBNYXRoLnNpbihyYWQpICsgcFsyXSAqIE1hdGguY29zKHJhZCk7IC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCBiLCByYWQpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzJdICogTWF0aC5zaW4ocmFkKSArIHBbMF0gKiBNYXRoLmNvcyhyYWQpO1xuICByWzFdID0gcFsxXTtcbiAgclsyXSA9IHBbMl0gKiBNYXRoLmNvcyhyYWQpIC0gcFswXSAqIE1hdGguc2luKHJhZCk7IC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCByYWQpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzBdICogTWF0aC5jb3MocmFkKSAtIHBbMV0gKiBNYXRoLnNpbihyYWQpO1xuICByWzFdID0gcFswXSAqIE1hdGguc2luKHJhZCkgKyBwWzFdICogTWF0aC5jb3MocmFkKTtcbiAgclsyXSA9IHBbMl07IC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBtYWcxID0gTWF0aC5zcXJ0KGF4ICogYXggKyBheSAqIGF5ICsgYXogKiBheiksXG4gICAgICBtYWcyID0gTWF0aC5zcXJ0KGJ4ICogYnggKyBieSAqIGJ5ICsgYnogKiBieiksXG4gICAgICBtYWcgPSBtYWcxICogbWFnMixcbiAgICAgIGNvc2luZSA9IG1hZyAmJiBkb3QoYSwgYikgLyBtYWc7XG4gIHJldHVybiBNYXRoLmFjb3MoTWF0aC5taW4oTWF0aC5tYXgoY29zaW5lLCAtMSksIDEpKTtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHplcm9cclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjMyhcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl07XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnN1YnRyYWN0fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpdmlkZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpdiA9IGRpdmlkZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXN0ID0gZGlzdGFuY2U7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWREaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDM7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICB2ZWNbMl0gPSBhW2kgKyAyXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KCk7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogNCBEaW1lbnNpb25hbCBWZWN0b3JcclxuICogQG1vZHVsZSB2ZWM0XHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjNFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6LCB3KSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIG91dFszXSA9IGFbM10gKiBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAvIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5jZWlsKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBmbG9vclxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguZmxvb3IoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIG91dFszXSA9IE1hdGgucm91bmQoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzQncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICB2YXIgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6LCB3KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgdmFyIHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgdyA9IGFbM107XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHosIHcpO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG4vKipcclxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSAtYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgdyA9IGFbM107XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IHggKiBsZW47XG4gIG91dFsxXSA9IHkgKiBsZW47XG4gIG91dFsyXSA9IHogKiBsZW47XG4gIG91dFszXSA9IHcgKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHRocmVlIHZlY3RvcnMgaW4gYSA0LWRpbWVuc2lvbmFsIHNwYWNlXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSByZXN1bHQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IFUgdGhlIGZpcnN0IHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gViB0aGUgc2Vjb25kIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gVyB0aGUgdGhpcmQgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIHUsIHYsIHcpIHtcbiAgdmFyIEEgPSB2WzBdICogd1sxXSAtIHZbMV0gKiB3WzBdLFxuICAgICAgQiA9IHZbMF0gKiB3WzJdIC0gdlsyXSAqIHdbMF0sXG4gICAgICBDID0gdlswXSAqIHdbM10gLSB2WzNdICogd1swXSxcbiAgICAgIEQgPSB2WzFdICogd1syXSAtIHZbMl0gKiB3WzFdLFxuICAgICAgRSA9IHZbMV0gKiB3WzNdIC0gdlszXSAqIHdbMV0sXG4gICAgICBGID0gdlsyXSAqIHdbM10gLSB2WzNdICogd1syXTtcbiAgdmFyIEcgPSB1WzBdO1xuICB2YXIgSCA9IHVbMV07XG4gIHZhciBJID0gdVsyXTtcbiAgdmFyIEogPSB1WzNdO1xuICBvdXRbMF0gPSBIICogRiAtIEkgKiBFICsgSiAqIEQ7XG4gIG91dFsxXSA9IC0oRyAqIEYpICsgSSAqIEMgLSBKICogQjtcbiAgb3V0WzJdID0gRyAqIEUgLSBIICogQyArIEogKiBBO1xuICBvdXRbM10gPSAtKEcgKiBEKSArIEggKiBCIC0gSSAqIEE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIHZhciBhdyA9IGFbM107XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDsgLy8gTWFyc2FnbGlhLCBHZW9yZ2UuIENob29zaW5nIGEgUG9pbnQgZnJvbSB0aGUgU3VyZmFjZSBvZiBhXG4gIC8vIFNwaGVyZS4gQW5uLiBNYXRoLiBTdGF0aXN0LiA0MyAoMTk3MiksIG5vLiAyLCA2NDUtLTY0Ni5cbiAgLy8gaHR0cDovL3Byb2plY3RldWNsaWQub3JnL2V1Y2xpZC5hb21zLzExNzc2OTI2NDQ7XG5cbiAgdmFyIHYxLCB2MiwgdjMsIHY0O1xuICB2YXIgczEsIHMyO1xuXG4gIGRvIHtcbiAgICB2MSA9IGdsTWF0cml4LlJBTkRPTSgpICogMiAtIDE7XG4gICAgdjIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHMxID0gdjEgKiB2MSArIHYyICogdjI7XG4gIH0gd2hpbGUgKHMxID49IDEpO1xuXG4gIGRvIHtcbiAgICB2MyA9IGdsTWF0cml4LlJBTkRPTSgpICogMiAtIDE7XG4gICAgdjQgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHMyID0gdjMgKiB2MyArIHY0ICogdjQ7XG4gIH0gd2hpbGUgKHMyID49IDEpO1xuXG4gIHZhciBkID0gTWF0aC5zcXJ0KCgxIC0gczEpIC8gczIpO1xuICBvdXRbMF0gPSBzY2FsZSAqIHYxO1xuICBvdXRbMV0gPSBzY2FsZSAqIHYyO1xuICBvdXRbMl0gPSBzY2FsZSAqIHYzICogZDtcbiAgb3V0WzNdID0gc2NhbGUgKiB2NCAqIGQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgbWF0NC5cclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdLFxuICAgICAgdyA9IGFbM107XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10gKiB3O1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3O1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgdmFyIHF4ID0gcVswXSxcbiAgICAgIHF5ID0gcVsxXSxcbiAgICAgIHF6ID0gcVsyXSxcbiAgICAgIHF3ID0gcVszXTsgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcblxuICB2YXIgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG4gIHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgdmFyIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICB2YXIgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6OyAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG5cbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHplcm9cclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJ2ZWM0KFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM107XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM107XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJiBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnN1YnRyYWN0fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpdmlkZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpdiA9IGRpdmlkZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuZGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXN0ID0gZGlzdGFuY2U7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWREaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzQuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDQ7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICB2ZWNbMl0gPSBhW2kgKyAyXTtcbiAgICAgIHZlY1szXSA9IGFbaSArIDNdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdO1xuICAgICAgYVtpICsgMV0gPSB2ZWNbMV07XG4gICAgICBhW2kgKyAyXSA9IHZlY1syXTtcbiAgICAgIGFbaSArIDNdID0gdmVjWzNdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEludGVycG9sYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJwb2xhdGlvbigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgY3ViaWMgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgYm91bmQgYmV0d2VlbiB0d28gb3RoZXJcbiAgICAgKiB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYWxwaGEgdmFsdWUgc2hvdWxkIHJhbmdlIGZyb20gMC4wIHRvIDEuMC4gIElmIHRoZSBhbHBoYSB2YWx1ZSBpc1xuICAgICAqIDAuMCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIG4xLiAgSWYgdGhlIGFscGhhIHZhbHVlIGlzIDEuMCwgdGhpc1xuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgbjIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbjAgVGhlIHZhbHVlIGJlZm9yZSB0aGUgZmlyc3QgdmFsdWUuXG4gICAgICogQHBhcmFtIG4xIFRoZSBmaXJzdCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gbjIgVGhlIHNlY29uZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gbjMgVGhlIHZhbHVlIGFmdGVyIHRoZSBzZWNvbmQgdmFsdWUuXG4gICAgICogQHBhcmFtIGEgVGhlIGFscGhhIHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGludGVycG9sYXRlZCB2YWx1ZS5cbiAgICAgKlxuICAgICAqL1xuICAgIEludGVycG9sYXRpb24uY3ViaWMgPSBmdW5jdGlvbiAobjAsIG4xLCBuMiwgbjMsIGEpIHtcbiAgICAgICAgdmFyIHAgPSAoKG4zIC0gbjIpIC0gKG4wIC0gbjEpKTtcbiAgICAgICAgdmFyIHEgPSAoKG4wIC0gbjEpIC0gcCk7XG4gICAgICAgIHZhciByID0gKG4yIC0gbjApO1xuICAgICAgICB2YXIgcyA9IChuMSk7XG4gICAgICAgIHJldHVybiAocCAqIGEgKiBhICogYSArIHEgKiBhICogYSArIHIgKiBhICsgcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYWxwaGEgdmFsdWUgc2hvdWxkIHJhbmdlIGZyb20gMC4wIHRvIDEuMC4gIElmIHRoZSBhbHBoYSB2YWx1ZSBpc1xuICAgICAqIDAuMCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIG4wLiAgSWYgdGhlIGFscGhhIHZhbHVlIGlzIDEuMCwgdGhpc1xuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgbjEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbjAgVGhlIGZpcnN0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBuMSBUaGUgc2Vjb25kIHZhbHVlLlxuICAgICAqIEBwYXJhbSBhIFRoZSBhbHBoYSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUuXG4gICAgICovXG4gICAgSW50ZXJwb2xhdGlvbi5saW5lYXIgPSBmdW5jdGlvbiAobjAsIG4xLCBhKSB7XG4gICAgICAgIHJldHVybiAoKDEuMCAtIGEpICogKG4wKSkgKyAoYSAqIChuMSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFwcyBhIHZhbHVlIG9udG8gYSBjdWJpYyBTLWN1cnZlLlxuICAgICAqIFRoZSBkZXJpdmF0aXZlIG9mIGEgY3ViaWMgUy1jdXJ2ZSBpcyB6ZXJvIGF0IGBhID0gMC4wYCBhbmQgYGEgPSAxLjBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmFsdWUgdG8gbWFwIG9udG8gYSBjdWJpYyBTLWN1cnZlLiBTaG91bGQgcmFuZ2UgZnJvbSAwLjAgdG8gMS4wLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG1hcHBlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBJbnRlcnBvbGF0aW9uLmN1YmljU0N1cnZlID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIChhICogYSAqICgzLjAgLSAyLjAgKiBhKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYXBzIGEgdmFsdWUgb250byBhIHF1aW50aWMgUy1jdXJ2ZS5cbiAgICAgKiBUaGUgZmlyc3QgZGVyaXZhdGl2ZSBvZiBhIHF1aW50aWMgUy1jdXJ2ZSBpcyB6ZXJvIGF0IGBhID0gMC4wYCBhbmQgYGEgPSAxLjBgXG4gICAgICpcbiAgICAgKiBUaGUgc2Vjb25kIGRlcml2YXRpdmUgb2YgYSBxdWludGljIFMtY3VydmUgaXMgemVybyBhdCBgYSA9IDAuMGAgYW5kIGBhID0gMS4wYFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZhbHVlIHRvIG1hcCBvbnRvIGEgcXVpbnRpYyBTLWN1cnZlLiBTaG91bGQgcmFuZ2UgZnJvbSAwLjAgdG8gMS4wLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG1hcHBlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBJbnRlcnBvbGF0aW9uLnF1aW50aWNTQ3VydmUgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYTMgPSAoYSAqIGEgKiBhKTtcbiAgICAgICAgdmFyIGE0ID0gKGEzICogYSk7XG4gICAgICAgIHZhciBhNSA9IChhNCAqIGEpO1xuICAgICAgICByZXR1cm4gKCg2LjAgKiBhNSkgLSAoMTUuMCAqIGE0KSArICgxMC4wICogYTMpKTtcbiAgICB9O1xuICAgIHJldHVybiBJbnRlcnBvbGF0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEludGVycG9sYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNYXRoQ29uc3RzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hdGhDb25zdHMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBpLiBUaGlzIGlzIHRoZSByYXRpbyBvZiB0aGUgY2lyY3VtZmVyZW5jZSBvZiBhIGNpcmNsZSB0byBpdHMgZGlhbWV0ZXIuXG4gICAgICovXG4gICAgTWF0aENvbnN0cy5QSSA9IE1hdGguUEk7XG4gICAgLyoqXG4gICAgICogVGhlIHNxdWFyZSByb290IG9mIDIuXG4gICAgICovXG4gICAgTWF0aENvbnN0cy5TUVJUXzIgPSBNYXRoLlNRUlQyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzcXVhcmUgcm9vdCBvZiAzLlxuICAgICAqL1xuICAgIE1hdGhDb25zdHMuU1FSVF8zID0gMS43MzIwNTA4MDc1Njg4NzcyOTM1O1xuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zIGJ5IG11bHRpcGx5aW5nIGJ5IHRoaXMgY29uc3RhbnQuXG4gICAgICovXG4gICAgTWF0aENvbnN0cy5ERUdfVE9fUkFEID0gTWF0aC5QSSAvIDE4MC4wO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzIGJ5IG11bHRpcGx5aW5nIGJ5IHRoaXMgY29uc3RhbnQuXG4gICAgICovXG4gICAgTWF0aENvbnN0cy5SQURfVE9fREVHID0gMS4wIC8gKE1hdGguUEkgLyAxODAuMCk7XG4gICAgcmV0dXJuIE1hdGhDb25zdHM7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTWF0aENvbnN0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2R1bGUoKSB7XG4gICAgfVxuICAgIHJldHVybiBNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi8uLi9Nb2R1bGVcIikpO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBnZW5lcmF0ZSBtb2R1bGVzLlxuICogR2VuZXJhdG9yIG1vZHVsZXMgb3V0cHV0IGEgdmFsdWUgZ2VuZXJhdGVkIGJ5IGEgY29oZXJlbnQtbm9pc2VcbiAqIGZ1bmN0aW9uIG9yIHNvbWUgb3RoZXIgbWF0aGVtYXRpY2FsIGZ1bmN0aW9uLlxuICovXG52YXIgR2VuZXJhdG9yTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHZW5lcmF0b3JNb2R1bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2VuZXJhdG9yTW9kdWxlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBHZW5lcmF0b3JNb2R1bGU7XG59KE1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdlbmVyYXRvck1vZHVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbm9pc2VnZW5fMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi8uLi8uLi9ub2lzZWdlblwiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vdXRpbFwiKTtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuLyoqXG4gKiBOb2lzZSBtb2R1bGUgdGhhdCBvdXRwdXRzIHRocmVlLWRpbWVuc2lvbmFsIFwiYmlsbG93eVwiIG5vaXNlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGdlbmVyYXRlcyBcImJpbGxvd3lcIiBub2lzZSBzdWl0YWJsZSBmb3IgY2xvdWRzIGFuZFxuICogcm9ja3MuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgaXMgbmVhcmx5IGlkZW50aWNhbCB0byBQZXJsaW4gZXhjZXB0IHRoaXMgbm9pc2UgbW9kdWxlXG4gKiBtb2RpZmllcyBlYWNoIG9jdGF2ZSB3aXRoIGFuIGFic29sdXRlLXZhbHVlIGZ1bmN0aW9uLiAgU2VlIHRoZVxuICogZG9jdW1lbnRhdGlvbiBvZiBQZXJsaW4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBCaWxsb3cgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJpbGxvdywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnJlcXVlbmN5IEZyZXF1ZW5jeSBvZiB0aGUgZmlyc3Qgb2N0YXZlLlxuICAgICAqIEBwYXJhbSBsYWN1bmFyaXR5IEZyZXF1ZW5jeSBtdWx0aXBsaWVyIGJldHdlZW4gc3VjY2Vzc2l2ZSBvY3RhdmVzLlxuICAgICAqIEBwYXJhbSBvY3RhdmVzIFRvdGFsIG51bWJlciBvZiBvY3RhdmVzIHRoYXQgZ2VuZXJhdGUgdGhlIGJpbGxvd3kgbm9pc2UuXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlIFBlcnNpc3RlbmNlIHZhbHVlIG9mIHRoZSBiaWxsb3d5IG5vaXNlLlxuICAgICAqIEBwYXJhbSBzZWVkIFNlZWQgdmFsdWUgdXNlZCBieSB0aGUgYmlsbG93eS1ub2lzZSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBRdWFsaXR5IG9mIHRoZSBiaWxsb3d5IG5vaXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJpbGxvdyhmcmVxdWVuY3ksIGxhY3VuYXJpdHksIG9jdGF2ZXMsIHBlcnNpc3RlbmNlLCBzZWVkLCBxdWFsaXR5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9vY3RhdmVzID0gQmlsbG93LkRFRkFVTFRfQklMTE9XX09DVEFWRV9DT1VOVDtcbiAgICAgICAgX3RoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5IHx8IEJpbGxvdy5ERUZBVUxUX0JJTExPV19GUkVRVUVOQ1k7XG4gICAgICAgIF90aGlzLmxhY3VuYXJpdHkgPSBsYWN1bmFyaXR5IHx8IEJpbGxvdy5ERUZBVUxUX0JJTExPV19MQUNVTkFSSVRZO1xuICAgICAgICBfdGhpcy5vY3RhdmVzID0gb2N0YXZlcyB8fCBCaWxsb3cuREVGQVVMVF9CSUxMT1dfT0NUQVZFX0NPVU5UO1xuICAgICAgICBfdGhpcy5wZXJzaXN0ZW5jZSA9IHBlcnNpc3RlbmNlIHx8IEJpbGxvdy5ERUZBVUxUX0JJTExPV19QRVJTSVNURU5DRTtcbiAgICAgICAgX3RoaXMuc2VlZCA9IHNlZWQgfHwgQmlsbG93LkRFRkFVTFRfQklMTE9XX1NFRUQ7XG4gICAgICAgIF90aGlzLnF1YWxpdHkgPSBxdWFsaXR5IHx8IEJpbGxvdy5ERUZBVUxUX0JJTExPV19RVUFMSVRZO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaWxsb3cucHJvdG90eXBlLCBcIm9jdGF2ZXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVG90YWwgbnVtYmVyIG9mIG9jdGF2ZXMgdGhhdCBnZW5lcmF0ZSB0aGUgYmlsbG93eSBub2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29jdGF2ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBCaWxsb3cuQklMTE9XX01BWF9PQ1RBVkUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IG9jdGF2ZXMgZ3JlYXRlciB0aGFuIG1heGltdW0gb2YgXCIgKyBCaWxsb3cuQklMTE9XX01BWF9PQ1RBVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb2N0YXZlcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCaWxsb3cucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgdmFyIG54O1xuICAgICAgICB2YXIgbnk7XG4gICAgICAgIHZhciBuejtcbiAgICAgICAgdmFyIHZhbHVlID0gMC4wO1xuICAgICAgICB2YXIgc2lnbmFsID0gMC4wO1xuICAgICAgICB2YXIgcGVyc2lzdCA9IDEuMDtcbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHogPSAoeiAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgZm9yICh2YXIgb2N0YXZlID0gMDsgb2N0YXZlIDwgdGhpcy5vY3RhdmVzOyBvY3RhdmUrKykge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlc2UgZmxvYXRpbmctcG9pbnQgdmFsdWVzIGhhdmUgdGhlIHNhbWUgcmFuZ2UgYXMgYSAzMi1cbiAgICAgICAgICAgIC8vIGJpdCBpbnRlZ2VyIHNvIHRoYXQgd2UgY2FuIHBhc3MgdGhlbSB0byB0aGUgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zLlxuICAgICAgICAgICAgbnggPSB1dGlsXzEubWFrZUludDMyUmFuZ2UoeCk7XG4gICAgICAgICAgICBueSA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh5KTtcbiAgICAgICAgICAgIG56ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHopO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb2hlcmVudC1ub2lzZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCB2YWx1ZSBhbmQgYWRkIGl0IHRvIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICAgICBzaWduYWwgPSAyLjAgKiBNYXRoLmFicyhub2lzZWdlbl8xLmRlZmF1bHQuZ3JhZGllbnRDb2hlcmVudE5vaXNlM0QobngsIG55LCBueiwgKCh0aGlzLnNlZWQgKyBvY3RhdmUpICYgMHhmZmZmZmZmZiksIHRoaXMucXVhbGl0eSkpIC0gMS4wO1xuICAgICAgICAgICAgdmFsdWUgKz0gc2lnbmFsICogcGVyc2lzdDtcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIG5leHQgb2N0YXZlLlxuICAgICAgICAgICAgeCAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICB5ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHogKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgcGVyc2lzdCAqPSB0aGlzLnBlcnNpc3RlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSArIDAuNTtcbiAgICB9O1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19GUkVRVUVOQ1kgPSAxLjA7XG4gICAgQmlsbG93LkRFRkFVTFRfQklMTE9XX0xBQ1VOQVJJVFkgPSAyLjA7XG4gICAgQmlsbG93LkRFRkFVTFRfQklMTE9XX09DVEFWRV9DT1VOVCA9IDY7XG4gICAgQmlsbG93LkRFRkFVTFRfQklMTE9XX1BFUlNJU1RFTkNFID0gMC41O1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19RVUFMSVRZID0gbm9pc2VnZW5fMS5RdWFsaXR5LlN0YW5kYXJkO1xuICAgIEJpbGxvdy5ERUZBVUxUX0JJTExPV19TRUVEID0gMDtcbiAgICBCaWxsb3cuQklMTE9XX01BWF9PQ1RBVkUgPSAzMDtcbiAgICByZXR1cm4gQmlsbG93O1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCaWxsb3c7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuLy4uLy4uL3V0aWxcIik7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyBhIGNoZWNrZXJib2FyZCBwYXR0ZXJuLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIG91dHB1dHMgdW5pdC1zaXplZCBibG9ja3Mgb2YgYWx0ZXJuYXRpbmcgdmFsdWVzLlxuICogVGhlIHZhbHVlcyBvZiB0aGVzZSBibG9ja3MgYWx0ZXJuYXRlIGJldHdlZW4gLTEuMCBhbmQgKzEuMC5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBpcyBub3QgcmVhbGx5IHVzZWZ1bCBieSBpdHNlbGYsIGJ1dCBpdCBpcyBvZnRlbiB1c2VkXG4gKiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGRvZXMgbm90IHJlcXVpcmUgYW55IHNvdXJjZSBtb2R1bGVzLlxuICovXG52YXIgQ2hlY2tlcmJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGVja2VyYm9hcmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hlY2tlcmJvYXJkKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENoZWNrZXJib2FyZC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB2YXIgaXggPSBNYXRoLmZsb29yKHV0aWxfMS5tYWtlSW50MzJSYW5nZSh4KSk7XG4gICAgICAgIHZhciBpeSA9IE1hdGguZmxvb3IodXRpbF8xLm1ha2VJbnQzMlJhbmdlKHkpKTtcbiAgICAgICAgdmFyIGl6ID0gTWF0aC5mbG9vcih1dGlsXzEubWFrZUludDMyUmFuZ2UoeikpO1xuICAgICAgICByZXR1cm4gKGl4ICYgMSBeIGl5ICYgMSBeIGl6ICYgMSkgPyAtMS4wIDogMS4wO1xuICAgIH07XG4gICAgcmV0dXJuIENoZWNrZXJib2FyZDtcbn0oR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2hlY2tlcmJvYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuLyoqXG4gKiBOb2lzZSBtb2R1bGUgdGhhdCBvdXRwdXRzIGEgY29uc3RhbnQgdmFsdWUuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgaXMgbm90IHVzZWZ1bCBieSBpdHNlbGYsIGJ1dCBpdCBpcyBvZnRlbiB1c2VkIGFzIGFcbiAqIHNvdXJjZSBtb2R1bGUgZm9yIG90aGVyIG5vaXNlIG1vZHVsZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgZG9lcyBub3QgcmVxdWlyZSBhbnkgc291cmNlIG1vZHVsZXMuXG4gKi9cbnZhciBDb25zdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29uc3QsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb25zdGFudCBvdXRwdXQgdmFsdWUgZm9yIHRoaXMgbm9pc2UgbW9kdWxlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbnN0KHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnZhbHVlID0gdmFsdWUgfHwgQ29uc3QuREVGQVVMVF9DT05TVF9WQUxVRTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25zdC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgQ29uc3QuREVGQVVMVF9DT05TVF9WQUxVRSA9IDAuMDtcbiAgICByZXR1cm4gQ29uc3Q7XG59KEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuLyoqXG4gKiBOb2lzZSBtb2R1bGUgdGhhdCBvdXRwdXRzIGNvbmNlbnRyaWMgY3lsaW5kZXJzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIG91dHB1dHMgY29uY2VudHJpYyBjeWxpbmRlcnMgY2VudGVyZWQgb24gdGhlIG9yaWdpbi5cbiAqIFRoZXNlIGN5bGluZGVycyBhcmUgb3JpZW50ZWQgYWxvbmcgdGhlIHkgYXhpcyBzaW1pbGFyIHRvIHRoZVxuICogY29uY2VudHJpYyByaW5ncyBvZiBhIHRyZWUuICBFYWNoIGN5bGluZGVyIGV4dGVuZHMgaW5maW5pdGVseSBhbG9uZ1xuICogdGhlIHkgYXhpcy5cbiAqXG4gKiBUaGUgZmlyc3QgY3lsaW5kZXIgaGFzIGEgcmFkaXVzIG9mIDEuMC4gIEVhY2ggc3Vic2VxdWVudCBjeWxpbmRlciBoYXNcbiAqIGEgcmFkaXVzIHRoYXQgaXMgMS4wIHVuaXQgbGFyZ2VyIHRoYW4gdGhlIHByZXZpb3VzIGN5bGluZGVyLlxuICpcbiAqIFRoZSBvdXRwdXQgdmFsdWUgZnJvbSB0aGlzIG5vaXNlIG1vZHVsZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgaW5wdXQgdmFsdWUgYW5kIHRoZSB0aGUgbmVhcmVzdCBjeWxpbmRlciBzdXJmYWNlLiAgVGhlXG4gKiBpbnB1dCB2YWx1ZXMgdGhhdCBhcmUgbG9jYXRlZCBvbiBhIGN5bGluZGVyIHN1cmZhY2UgYXJlIGdpdmVuIHRoZVxuICogb3V0cHV0IHZhbHVlIDEuMCBhbmQgdGhlIGlucHV0IHZhbHVlcyB0aGF0IGFyZSBlcXVpZGlzdGFudCBmcm9tIHR3b1xuICogY3lsaW5kZXIgc3VyZmFjZXMgYXJlIGdpdmVuIHRoZSBvdXRwdXQgdmFsdWUgLTEuMC5cbiAqXG4gKiBBbiBhcHBsaWNhdGlvbiBjYW4gY2hhbmdlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIGNvbmNlbnRyaWMgY3lsaW5kZXJzLlxuICogSW5jcmVhc2luZyB0aGUgZnJlcXVlbmN5IHJlZHVjZXMgdGhlIGRpc3RhbmNlcyBiZXR3ZWVuIGN5bGluZGVycy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSwgbW9kaWZpZWQgd2l0aCBzb21lIGxvdy1mcmVxdWVuY3ksIGxvdy1wb3dlclxuICogdHVyYnVsZW5jZSwgaXMgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHdvb2QtbGlrZSB0ZXh0dXJlcy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBkb2VzIG5vdCByZXF1aXJlIGFueSBzb3VyY2UgbW9kdWxlcy5cbiAqL1xudmFyIEN5bGluZGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ3lsaW5kZXJzLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmcmVxdWVuY3kgVGhlIGZyZXF1ZW5jeSBvZiB0aGUgY29uY2VudHJpYyBjeWxpbmRlcnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ3lsaW5kZXJzKGZyZXF1ZW5jeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3kgfHwgQ3lsaW5kZXJzLkRFRkFVTFRfQ1lMSU5ERVJTX0ZSRVFVRU5DWTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDeWxpbmRlcnMucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHZhciBkaXN0RnJvbUNlbnRlciA9IE1hdGguc3FydCh4ICogeCArIHogKiB6KTtcbiAgICAgICAgdmFyIGRpc3RGcm9tU21hbGxlclNwaGVyZSA9IGRpc3RGcm9tQ2VudGVyIC0gTWF0aC5mbG9vcihkaXN0RnJvbUNlbnRlcik7XG4gICAgICAgIHZhciBkaXN0RnJvbUxhcmdlclNwaGVyZSA9IDEuMCAtIGRpc3RGcm9tU21hbGxlclNwaGVyZTtcbiAgICAgICAgdmFyIG5lYXJlc3REaXN0ID0gTWF0aC5taW4oZGlzdEZyb21TbWFsbGVyU3BoZXJlLCBkaXN0RnJvbUxhcmdlclNwaGVyZSk7XG4gICAgICAgIHJldHVybiAxLjAgLSAobmVhcmVzdERpc3QgKiA0LjApOyAvLyBQdXRzIGl0IGluIHRoZSAtMS4wIHRvICsxLjAgcmFuZ2UuXG4gICAgfTtcbiAgICBDeWxpbmRlcnMuREVGQVVMVF9DWUxJTkRFUlNfRlJFUVVFTkNZID0gMS4wO1xuICAgIHJldHVybiBDeWxpbmRlcnM7XG59KEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEN5bGluZGVycztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJpbGxvd18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2JpbGxvd1wiKSk7XG5leHBvcnRzLkJpbGxvdyA9IGJpbGxvd18xLmRlZmF1bHQ7XG52YXIgY2hlY2tlcmJvYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2hlY2tlcmJvYXJkXCIpKTtcbmV4cG9ydHMuQ2hlY2tlcmJvYXJkID0gY2hlY2tlcmJvYXJkXzEuZGVmYXVsdDtcbnZhciBjb25zdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnN0XCIpKTtcbmV4cG9ydHMuQ29uc3QgPSBjb25zdF8xLmRlZmF1bHQ7XG52YXIgY3lsaW5kZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY3lsaW5kZXJzXCIpKTtcbmV4cG9ydHMuQ3lsaW5kZXJzID0gY3lsaW5kZXJzXzEuZGVmYXVsdDtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdDtcbnZhciBwZXJsaW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wZXJsaW5cIikpO1xuZXhwb3J0cy5QZXJsaW4gPSBwZXJsaW5fMS5kZWZhdWx0O1xudmFyIHJpZGdlZG11bHRpXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmlkZ2VkbXVsdGlcIikpO1xuZXhwb3J0cy5SaWRnZWRNdWx0aSA9IHJpZGdlZG11bHRpXzEuZGVmYXVsdDtcbnZhciBzcGhlcmVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3BoZXJlc1wiKSk7XG5leHBvcnRzLlNwaGVyZXMgPSBzcGhlcmVzXzEuZGVmYXVsdDtcbnZhciB2b3Jvbm9pXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdm9yb25vaVwiKSk7XG5leHBvcnRzLlZvcm9ub2kgPSB2b3Jvbm9pXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbm9pc2VnZW5fMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi8uLi8uLi9ub2lzZWdlblwiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vdXRpbFwiKTtcbnZhciBHZW5lcmF0b3JNb2R1bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZW5lcmF0b3JNb2R1bGVcIikpO1xuLyoqXG4gKiBOb2lzZSBtb2R1bGUgdGhhdCBvdXRwdXRzIDMtZGltZW5zaW9uYWwgUGVybGluIG5vaXNlLlxuICpcbiAqIFBlcmxpbiBub2lzZSBpcyB0aGUgc3VtIG9mIHNldmVyYWwgY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zIG9mXG4gKiBldmVyLWluY3JlYXNpbmcgZnJlcXVlbmNpZXMgYW5kIGV2ZXItZGVjcmVhc2luZyBhbXBsaXR1ZGVzLlxuICpcbiAqIEFuIGltcG9ydGFudCBwcm9wZXJ0eSBvZiBQZXJsaW4gbm9pc2UgaXMgdGhhdCBhIHNtYWxsIGNoYW5nZSBpbiB0aGVcbiAqIGlucHV0IHZhbHVlIHdpbGwgcHJvZHVjZSBhIHNtYWxsIGNoYW5nZSBpbiB0aGUgb3V0cHV0IHZhbHVlLCB3aGlsZSBhXG4gKiBsYXJnZSBjaGFuZ2UgaW4gdGhlIGlucHV0IHZhbHVlIHdpbGwgcHJvZHVjZSBhIHJhbmRvbSBjaGFuZ2UgaW4gdGhlXG4gKiBvdXRwdXQgdmFsdWUuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgb3V0cHV0cyBQZXJsaW4tbm9pc2UgdmFsdWVzIHRoYXQgdXN1YWxseSByYW5nZSBmcm9tXG4gKiAtMS4wIHRvICsxLjAsIGJ1dCB0aGVyZSBhcmUgbm8gZ3VhcmFudGVlcyB0aGF0IGFsbCBvdXRwdXQgdmFsdWVzIHdpbGxcbiAqIGV4aXN0IHdpdGhpbiB0aGF0IHJhbmdlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlIGRvZXMgbm90IHJlcXVpcmUgYW55IHNvdXJjZSBtb2R1bGVzLlxuICpcbiAqICMjIE9jdGF2ZXNcbiAqXG4gKiBUaGUgbnVtYmVyIG9mIG9jdGF2ZXMgY29udHJvbCB0aGUgYW1vdW50IG9mIGRldGFpbCBvZiB0aGVcbiAqIFBlcmxpbiBub2lzZS4gIEFkZGluZyBtb3JlIG9jdGF2ZXMgaW5jcmVhc2VzIHRoZSBkZXRhaWwgb2YgdGhlIFBlcmxpblxuICogbm9pc2UsIGJ1dCB3aXRoIHRoZSBkcmF3YmFjayBvZiBpbmNyZWFzaW5nIHRoZSBjYWxjdWxhdGlvbiB0aW1lLlxuICpcbiAqIEFuIG9jdGF2ZSBpcyBvbmUgb2YgdGhlIGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9ucyBpbiBhIHNlcmllcyBvZlxuICogY29oZXJlbnQtbm9pc2UgZnVuY3Rpb25zIHRoYXQgYXJlIGFkZGVkIHRvZ2V0aGVyIHRvIGZvcm0gUGVybGluXG4gKiBub2lzZS5cbiAqXG4gKiBUaGVzZSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCBvY3RhdmVzIGJlY2F1c2UgZWFjaCBvY3RhdmVcbiAqIGhhcywgYnkgZGVmYXVsdCwgZG91YmxlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIHByZXZpb3VzIG9jdGF2ZS4gIE11c2ljYWxcbiAqIHRvbmVzIGhhdmUgdGhpcyBwcm9wZXJ0eSBhcyB3ZWxsOyBhIG11c2ljYWwgQyB0b25lIHRoYXQgaXMgb25lIG9jdGF2ZVxuICogaGlnaGVyIHRoYW4gdGhlIHByZXZpb3VzIEMgdG9uZSBoYXMgZG91YmxlIGl0cyBmcmVxdWVuY3kuXG4gKlxuICogIyMgUGVyc2lzdGVuY2VcbiAqXG4gKiBUaGUgcGVyc2lzdGVuY2UgdmFsdWUgY29udHJvbHMgdGhlIHJvdWdobmVzcyBvZiB0aGUgUGVybGluXG4gKiBub2lzZS4gIExhcmdlciB2YWx1ZXMgcHJvZHVjZSByb3VnaGVyIG5vaXNlLlxuICpcbiAqIFRoZSBwZXJzaXN0ZW5jZSB2YWx1ZSBkZXRlcm1pbmVzIGhvdyBxdWlja2x5IHRoZSBhbXBsaXR1ZGVzIGRpbWluaXNoXG4gKiBmb3Igc3VjY2Vzc2l2ZSBvY3RhdmVzLiAgVGhlIGFtcGxpdHVkZSBvZiB0aGUgZmlyc3Qgb2N0YXZlIGlzIDEuMC5cbiAqIFRoZSBhbXBsaXR1ZGUgb2YgZWFjaCBzdWJzZXF1ZW50IG9jdGF2ZSBpcyBlcXVhbCB0byB0aGUgcHJvZHVjdCBvZiB0aGVcbiAqIHByZXZpb3VzIG9jdGF2ZSdzIGFtcGxpdHVkZSBhbmQgdGhlIHBlcnNpc3RlbmNlIHZhbHVlLiAgU28gYVxuICogcGVyc2lzdGVuY2UgdmFsdWUgb2YgMC41IHNldHMgdGhlIGFtcGxpdHVkZSBvZiB0aGUgZmlyc3Qgb2N0YXZlIHRvXG4gKiAxLjA7IHRoZSBzZWNvbmQsIDAuNTsgdGhlIHRoaXJkLCAwLjI1OyBldGMuXG4gKlxuICogIyMgTGFjdW5hcml0eVxuICpcbiAqIFRoZSBsYWN1bmFyaXR5IHNwZWNpZmllcyB0aGUgZnJlcXVlbmN5IG11bHRpcGxpZXIgYmV0d2VlbiBzdWNjZXNzaXZlXG4gKiBvY3RhdmVzLlxuICpcbiAqIFRoZSBlZmZlY3Qgb2YgbW9kaWZ5aW5nIHRoZSBsYWN1bmFyaXR5IGlzIHN1YnRsZTsgeW91IG1heSBuZWVkIHRvIHBsYXlcbiAqIHdpdGggdGhlIGxhY3VuYXJpdHkgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBlZmZlY3RzLiAgRm9yIGJlc3QgcmVzdWx0cyxcbiAqIHNldCB0aGUgbGFjdW5hcml0eSB0byBhIG51bWJlciBiZXR3ZWVuIDEuNSBhbmQgMy41LlxuICpcbiAqICMjIFJlZmVyZW5jZXMgJiBhY2tub3dsZWRnZW1lbnRzXG4gKlxuICogW1RoZSBOb2lzZSBNYWNoaW5lXShodHRwOi8vd3d3Lm5vaXNlbWFjaGluZS5jb20vdGFsazEpIC1cbiAqIEZyb20gdGhlIG1hc3RlciwgS2VuIFBlcmxpbiBoaW1zZWxmLiAgVGhpcyBwYWdlIGNvbnRhaW5zIGFcbiAqIHByZXNlbnRhdGlvbiB0aGF0IGRlc2NyaWJlcyBQZXJsaW4gbm9pc2UgYW5kIHNvbWUgb2YgaXRzIHZhcmlhbnRzLlxuICogSGUgd29uIGFuIE9zY2FyIGZvciBjcmVhdGluZyB0aGUgUGVybGluIG5vaXNlIGFsZ29yaXRobSFcbiAqXG4gKiBbUGVybGluIE5vaXNlXShodHRwOi8vZnJlZXNwYWNlLnZpcmdpbi5uZXQvaHVnby5lbGlhcy9tb2RlbHMvbV9wZXJsaW4uaHRtKSAtXG4gKiBIdWdvIEVsaWFzJ3Mgd2VicGFnZSBjb250YWlucyBhIHZlcnkgZ29vZFxuICogZGVzY3JpcHRpb24gb2YgUGVybGluIG5vaXNlIGFuZCBkZXNjcmliZXMgaXRzIG1hbnkgYXBwbGljYXRpb25zLiAgVGhpc1xuICogcGFnZSBnYXZlIG1lIHRoZSBpbnNwaXJhdGlvbiB0byBjcmVhdGUgbGlibm9pc2UgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICogTm93IHRoYXQgSSBrbm93IGhvdyB0byBnZW5lcmF0ZSBQZXJsaW4gbm9pc2UsIEkgd2lsbCBuZXZlciBhZ2FpbiB1c2VcbiAqIGNoZWVzeSBzdWJkaXZpc2lvbiBhbGdvcml0aG1zIHRvIGNyZWF0ZSB0ZXJyYWluICh1bmxlc3MgSSBhYnNvbHV0ZWx5XG4gKiBuZWVkIHRoZSBzcGVlZC4pXG4gKlxuICogW1RoZSBQZXJsaW4gbm9pc2UgbWF0aCBGQVFdKGh0dHA6Ly93d3cucm9iby1tdXJpdG8ubmV0L2NvZGUvcGVybGluLW5vaXNlLW1hdGgtZmFxLmh0bWwpIC1cbiAqIEEgZ29vZCBwYWdlIHRoYXQgZGVzY3JpYmVzIFBlcmxpbiBub2lzZSBpblxuICogcGxhaW4gRW5nbGlzaCB3aXRoIG9ubHkgYSBtaW5vciBhbW91bnQgb2YgbWF0aC4gIER1cmluZyBkZXZlbG9wbWVudCBvZlxuICogbGlibm9pc2UsIEkgbm90aWNlZCB0aGF0IG15IGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9uIGdlbmVyYXRlZCB0ZXJyYWluXG4gKiB3aXRoIHNvbWUgXCJyZWd1bGFyaXR5XCIgdG8gdGhlIHRlcnJhaW4gZmVhdHVyZXMuICBUaGlzIHBhZ2UgZGVzY3JpYmVzIGFcbiAqIGJldHRlciBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbiBjYWxsZWQgZ3JhZGllbnQgbm9pc2UuICBUaGlzXG4gKiB2ZXJzaW9uIG9mIG5vaXNlOjptb2R1bGU6OlBlcmxpbiB1c2VzIGdyYWRpZW50IGNvaGVyZW50IG5vaXNlIHRvXG4gKiBnZW5lcmF0ZSBQZXJsaW4gbm9pc2UuXG4gKi9cbnZhciBQZXJsaW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBlcmxpbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnJlcXVlbmN5IEZyZXF1ZW5jeSBvZiB0aGUgZmlyc3Qgb2N0YXZlLlxuICAgICAqIEBwYXJhbSBsYWN1bmFyaXR5IEZyZXF1ZW5jeSBtdWx0aXBsaWVyIGJldHdlZW4gc3VjY2Vzc2l2ZSBvY3RhdmVzLlxuICAgICAqIEBwYXJhbSBvY3RhdmVzIFRvdGFsIG51bWJlciBvZiBvY3RhdmVzIHRoYXQgZ2VuZXJhdGUgdGhlIHBlcmxpbiBub2lzZS5cbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2UgUGVyc2lzdGVuY2UgdmFsdWUgb2YgdGhlIHBlcmxpbiBub2lzZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBTZWVkIHZhbHVlIHVzZWQgYnkgdGhlIHBlcmxpbi1ub2lzZSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBRdWFsaXR5IG9mIHRoZSBwZXJsaW4gbm9pc2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gUGVybGluKGZyZXF1ZW5jeSwgbGFjdW5hcml0eSwgb2N0YXZlcywgcGVyc2lzdGVuY2UsIHNlZWQsIHF1YWxpdHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX29jdGF2ZXMgPSBQZXJsaW4uREVGQVVMVF9QRVJMSU5fT0NUQVZFX0NPVU5UO1xuICAgICAgICBfdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3kgfHwgUGVybGluLkRFRkFVTFRfUEVSTElOX0ZSRVFVRU5DWTtcbiAgICAgICAgX3RoaXMubGFjdW5hcml0eSA9IGxhY3VuYXJpdHkgfHwgUGVybGluLkRFRkFVTFRfUEVSTElOX0xBQ1VOQVJJVFk7XG4gICAgICAgIF90aGlzLm9jdGF2ZXMgPSBvY3RhdmVzIHx8IFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9PQ1RBVkVfQ09VTlQ7XG4gICAgICAgIF90aGlzLnBlcnNpc3RlbmNlID0gcGVyc2lzdGVuY2UgfHwgUGVybGluLkRFRkFVTFRfUEVSTElOX1BFUlNJU1RFTkNFO1xuICAgICAgICBfdGhpcy5zZWVkID0gc2VlZCB8fCBQZXJsaW4uREVGQVVMVF9QRVJMSU5fU0VFRDtcbiAgICAgICAgX3RoaXMucXVhbGl0eSA9IHF1YWxpdHkgfHwgUGVybGluLkRFRkFVTFRfUEVSTElOX1FVQUxJVFk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBlcmxpbi5wcm90b3R5cGUsIFwib2N0YXZlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3RhbCBudW1iZXIgb2Ygb2N0YXZlcyB0aGF0IGdlbmVyYXRlIHRoZSBwZXJsaW4gbm9pc2UuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vY3RhdmVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gUGVybGluLlBFUkxJTl9NQVhfT0NUQVZFKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBvY3RhdmVzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIG9mIFwiICsgUGVybGluLlBFUkxJTl9NQVhfT0NUQVZFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29jdGF2ZXMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgUGVybGluLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHZhciBueCwgbnksIG56O1xuICAgICAgICB2YXIgdmFsdWUgPSAwLjA7XG4gICAgICAgIHZhciBzaWduYWwgPSAwLjA7XG4gICAgICAgIHZhciBwZXJzaXN0ID0gMS4wO1xuICAgICAgICB4ID0gKHggKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHkgPSAoeSAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeiA9ICh6ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICBmb3IgKHZhciBvY3RhdmUgPSAwOyBvY3RhdmUgPCB0aGlzLm9jdGF2ZXM7IG9jdGF2ZSsrKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGVzZSBmbG9hdGluZy1wb2ludCB2YWx1ZXMgaGF2ZSB0aGUgc2FtZSByYW5nZSBhcyBhIDMyLVxuICAgICAgICAgICAgLy8gYml0IGludGVnZXIgc28gdGhhdCB3ZSBjYW4gcGFzcyB0aGVtIHRvIHRoZSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbnMuXG4gICAgICAgICAgICBueCA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh4KTtcbiAgICAgICAgICAgIG55ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHkpO1xuICAgICAgICAgICAgbnogPSB1dGlsXzEubWFrZUludDMyUmFuZ2Uoeik7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNvaGVyZW50LW5vaXNlIHZhbHVlIGZyb20gdGhlIGlucHV0IHZhbHVlIGFuZCBhZGQgaXQgdG8gdGhlIGZpbmFsIHJlc3VsdC5cbiAgICAgICAgICAgIHNpZ25hbCA9IG5vaXNlZ2VuXzEuZGVmYXVsdC5ncmFkaWVudENvaGVyZW50Tm9pc2UzRChueCwgbnksIG56LCAoKHRoaXMuc2VlZCArIG9jdGF2ZSkgJiAweGZmZmZmZmZmKSwgdGhpcy5xdWFsaXR5KTtcbiAgICAgICAgICAgIHZhbHVlICs9IHNpZ25hbCAqIHBlcnNpc3Q7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBuZXh0IG9jdGF2ZS5cbiAgICAgICAgICAgIHggKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgeSAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICB6ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHBlcnNpc3QgKj0gdGhpcy5wZXJzaXN0ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fRlJFUVVFTkNZID0gMS4wO1xuICAgIFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9MQUNVTkFSSVRZID0gMi4wO1xuICAgIFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9PQ1RBVkVfQ09VTlQgPSA2O1xuICAgIFBlcmxpbi5ERUZBVUxUX1BFUkxJTl9QRVJTSVNURU5DRSA9IDAuNTtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fUVVBTElUWSA9IG5vaXNlZ2VuXzEuUXVhbGl0eS5TdGFuZGFyZDtcbiAgICBQZXJsaW4uREVGQVVMVF9QRVJMSU5fU0VFRCA9IDA7XG4gICAgUGVybGluLlBFUkxJTl9NQVhfT0NUQVZFID0gMzA7XG4gICAgcmV0dXJuIFBlcmxpbjtcbn0oR2VuZXJhdG9yTW9kdWxlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUGVybGluO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub2lzZWdlbl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLy4uLy4uL25vaXNlZ2VuXCIpKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi8uLi8uLi91dGlsXCIpO1xudmFyIEdlbmVyYXRvck1vZHVsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dlbmVyYXRvck1vZHVsZVwiKSk7XG4vKipcbiAqIE5vaXNlIG1vZHVsZSB0aGF0IG91dHB1dHMgMy1kaW1lbnNpb25hbCByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlLCBoZWF2aWx5IGJhc2VkIG9uIHRoZSBQZXJsaW4tbm9pc2UgbW9kdWxlLCBnZW5lcmF0ZXNcbiAqIHJpZGdlZC1tdWx0aWZyYWN0YWwgbm9pc2UuICBSaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlIGlzIGdlbmVyYXRlZCBpblxuICogbXVjaCBvZiB0aGUgc2FtZSB3YXkgYXMgUGVybGluIG5vaXNlLCBleGNlcHQgdGhlIG91dHB1dCBvZiBlYWNoIG9jdGF2ZVxuICogaXMgbW9kaWZpZWQgYnkgYW4gYWJzb2x1dGUtdmFsdWUgZnVuY3Rpb24uICBNb2RpZnlpbmcgdGhlIG9jdGF2ZVxuICogdmFsdWVzIGluIHRoaXMgd2F5IHByb2R1Y2VzIHJpZGdlLWxpa2UgZm9ybWF0aW9ucy5cbiAqXG4gKiBSaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlIGRvZXMgbm90IHVzZSBhIHBlcnNpc3RlbmNlIHZhbHVlLiAgVGhpcyBpc1xuICogYmVjYXVzZSB0aGUgcGVyc2lzdGVuY2UgdmFsdWVzIG9mIHRoZSBvY3RhdmVzIGFyZSBiYXNlZCBvbiB0aGUgdmFsdWVzXG4gKiBnZW5lcmF0ZWQgZnJvbSBmcm9tIHByZXZpb3VzIG9jdGF2ZXMsIGNyZWF0aW5nIGEgZmVlZGJhY2sgbG9vcCAob3JcbiAqIHRoYXQncyB3aGF0IGl0IGxvb2tzIGxpa2UgYWZ0ZXIgcmVhZGluZyB0aGUgY29kZS4pXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgb3V0cHV0cyByaWRnZWQtbXVsdGlmcmFjdGFsLW5vaXNlIHZhbHVlcyB0aGF0XG4gKiB1c3VhbGx5IHJhbmdlIGZyb20gLTEuMCB0byArMS4wLCBidXQgdGhlcmUgYXJlIG5vIGd1YXJhbnRlZXMgdGhhdCBhbGxcbiAqIG91dHB1dCB2YWx1ZXMgd2lsbCBleGlzdCB3aXRoaW4gdGhhdCByYW5nZS5cbiAqXG4gKiBAbm90ZSBGb3IgcmlkZ2VkLW11bHRpZnJhY3RhbCBub2lzZSBnZW5lcmF0ZWQgd2l0aCBvbmx5IG9uZSBvY3RhdmUsXG4gKiB0aGUgb3V0cHV0IHZhbHVlIHJhbmdlcyBmcm9tIC0xLjAgdG8gMC4wLlxuICpcbiAqIFJpZGdlZC1tdWx0aWZyYWN0YWwgbm9pc2UgaXMgb2Z0ZW4gdXNlZCB0byBnZW5lcmF0ZSBjcmFnZ3kgbW91bnRhaW5vdXNcbiAqIHRlcnJhaW4gb3IgbWFyYmxlLWxpa2UgdGV4dHVyZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgZG9lcyBub3QgcmVxdWlyZSBhbnkgc291cmNlIG1vZHVsZXMuXG4gKlxuICogIyMgT2N0YXZlc1xuICpcbiAqIFRoZSBudW1iZXIgb2Ygb2N0YXZlcyBjb250cm9sIHRoZSAqYW1vdW50IG9mIGRldGFpbCogb2YgdGhlXG4gKiByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLiAgQWRkaW5nIG1vcmUgb2N0YXZlcyBpbmNyZWFzZXMgdGhlIGRldGFpbFxuICogb2YgdGhlIHJpZGdlZC1tdWx0aWZyYWN0YWwgbm9pc2UsIGJ1dCB3aXRoIHRoZSBkcmF3YmFjayBvZiBpbmNyZWFzaW5nXG4gKiB0aGUgY2FsY3VsYXRpb24gdGltZS5cbiAqXG4gKiAjIyBMYWN1bmFyaXR5XG4gKlxuICogVGhlIGxhY3VuYXJpdHkgc3BlY2lmaWVzIHRoZSBmcmVxdWVuY3kgbXVsdGlwbGllciBiZXR3ZWVuIHN1Y2Nlc3NpdmVcbiAqIG9jdGF2ZXMuXG4gKlxuICogVGhlIGVmZmVjdCBvZiBtb2RpZnlpbmcgdGhlIGxhY3VuYXJpdHkgaXMgc3VidGxlOyB5b3UgbWF5IG5lZWQgdG8gcGxheVxuICogd2l0aCB0aGUgbGFjdW5hcml0eSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIGVmZmVjdHMuICBGb3IgYmVzdCByZXN1bHRzLFxuICogc2V0IHRoZSBsYWN1bmFyaXR5IHRvIGEgbnVtYmVyIGJldHdlZW4gMS41IGFuZCAzLjUuXG4gKlxuICogIyMgUmVmZXJlbmNlcyAmIEFja25vd2xlZGdtZW50c1xuICpcbiAqIFtGLiBLZW50b24gXCJEb2MgTW9qb1wiIE11c2dyYXZlJ3MgdGV4dHVyaW5nIHBhZ2VdKGh0dHA6Ly93d3cudGV4dHVyaW5nYW5kbW9kZWxpbmcuY29tL011c2dyYXZlLmh0bWwpIC1cbiAqIFRoaXMgcGFnZSBjb250YWlucyBsaW5rcyB0byBzb3VyY2UgY29kZSB0aGF0IGdlbmVyYXRlcyByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLCBhbW9uZ1xuICogb3RoZXIgdHlwZXMgb2Ygbm9pc2UuICBUaGUgc291cmNlIGZpbGUgW2ZyYWN0YWwuY10oaHR0cDovL3d3dy50ZXh0dXJpbmdhbmRtb2RlbGluZy5jb20vQ09ERS9NVVNHUkFWRS9DTE9VRC9mcmFjdGFsLmMpXG4gKiBjb250YWlucyB0aGUgY29kZSBJIHVzZWQgaW4gbXkgcmlkZ2VkLW11bHRpZnJhY3RhbCBjbGFzcyAoc2VlIHRoZSBSaWRnZWRNdWx0aWZyYWN0YWwoKSBmdW5jdGlvbi4pXG4gKiBUaGlzIGNvZGUgd2FzIHdyaXR0ZW4gYnkgRi4gS2VudG9uIE11c2dyYXZlLCB0aGUgcGVyc29uIHdobyBjcmVhdGVkIFtNb2pvV29ybGRdKGh0dHA6Ly93d3cucGFuZHJvbWVkYS5jb20pLlxuICogSGUgaXMgYWxzbyBvbmUgb2YgdGhlIGF1dGhvcnMgaW4gKlRleHR1cmluZyBhbmQgTW9kZWxpbmc6IEEgUHJvY2VkdXJhbCBBcHByb2FjaCpcbiAqIChNb3JnYW4gS2F1Zm1hbm4sIDIwMDIuIElTQk4gMS01NTg2MC04NDgtNi4pXG4gKi9cbnZhciBSaWRnZWRNdWx0aSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmlkZ2VkTXVsdGksIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZyZXF1ZW5jeSBGcmVxdWVuY3kgb2YgdGhlIGZpcnN0IG9jdGF2ZS5cbiAgICAgKiBAcGFyYW0gbGFjdW5hcml0eSBGcmVxdWVuY3kgbXVsdGlwbGllciBiZXR3ZWVuIHN1Y2Nlc3NpdmUgb2N0YXZlcy5cbiAgICAgKiBAcGFyYW0gb2N0YXZlcyBUb3RhbCBudW1iZXIgb2Ygb2N0YXZlcyB0aGF0IGdlbmVyYXRlIHRoZSByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICAgICAqIEBwYXJhbSBzZWVkIFNlZWQgdmFsdWUgdXNlZCBieSB0aGUgcmlkZ2VkLW11bHRpZnJhY3RhbC1ub2lzZSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBRdWFsaXR5IG9mIHRoZSByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHVzZWQgd2hlbiBnZW5lcmF0aW5nIHJpZGdlZC1tdWx0aWZyYWN0YWwgbm9pc2UuXG4gICAgICogQHBhcmFtIGdhaW4gR2FpbiB1c2VkIHdoZW4gZ2VuZXJhdGluZyByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJpZGdlZE11bHRpKGZyZXF1ZW5jeSwgbGFjdW5hcml0eSwgb2N0YXZlcywgc2VlZCwgcXVhbGl0eSwgb2Zmc2V0LCBnYWluKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9vY3RhdmVzID0gUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfT0NUQVZFX0NPVU5UO1xuICAgICAgICBfdGhpcy5fbGFjdW5hcml0eSA9IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX0xBQ1VOQVJJVFk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250YWlucyB0aGUgc3BlY3RyYWwgd2VpZ2h0cyBmb3IgZWFjaCBvY3RhdmUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53ZWlnaHRzID0gW107XG4gICAgICAgIF90aGlzLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeSB8fCBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9GUkVRVUVOQ1k7XG4gICAgICAgIF90aGlzLmxhY3VuYXJpdHkgPSBsYWN1bmFyaXR5IHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX0xBQ1VOQVJJVFk7XG4gICAgICAgIF90aGlzLm9jdGF2ZXMgPSBvY3RhdmVzIHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX09DVEFWRV9DT1VOVDtcbiAgICAgICAgX3RoaXMuc2VlZCA9IHNlZWQgfHwgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfU0VFRDtcbiAgICAgICAgX3RoaXMucXVhbGl0eSA9IHF1YWxpdHkgfHwgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfUVVBTElUWTtcbiAgICAgICAgX3RoaXMub2Zmc2V0ID0gb2Zmc2V0IHx8IFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX09GRlNFVDtcbiAgICAgICAgX3RoaXMuZ2FpbiA9IGdhaW4gfHwgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfR0FJTjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmlkZ2VkTXVsdGkucHJvdG90eXBlLCBcImxhY3VuYXJpdHlcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogRnJlcXVlbmN5IG11bHRpcGxpZXIgYmV0d2VlbiBzdWNjZXNzaXZlIG9jdGF2ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWN1bmFyaXR5O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLl9sYWN1bmFyaXR5ID0gdjtcbiAgICAgICAgICAgIHZhciBoID0gMS4wO1xuICAgICAgICAgICAgdmFyIGZyZXF1ZW5jeSA9IDEuMDtcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBSaWRnZWRNdWx0aS5SSURHRURfTUFYX09DVEFWRTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB3ZWlnaHQgZm9yIGVhY2ggZnJlcXVlbmN5LlxuICAgICAgICAgICAgICAgIHRoaXMud2VpZ2h0c1tpXSA9IE1hdGgucG93KGZyZXF1ZW5jeSwgLWgpO1xuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeSAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSaWRnZWRNdWx0aS5wcm90b3R5cGUsIFwib2N0YXZlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3RhbCBudW1iZXIgb2Ygb2N0YXZlcyB0aGF0IGdlbmVyYXRlIHRoZSByaWRnZWQtbXVsdGlmcmFjdGFsIG5vaXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb2N0YXZlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IFJpZGdlZE11bHRpLlJJREdFRF9NQVhfT0NUQVZFKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBvY3RhdmVzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIG9mIFwiICsgUmlkZ2VkTXVsdGkuUklER0VEX01BWF9PQ1RBVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb2N0YXZlcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBSaWRnZWRNdWx0aS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB2YXIgbng7XG4gICAgICAgIHZhciBueTtcbiAgICAgICAgdmFyIG56O1xuICAgICAgICB2YXIgc2VlZDtcbiAgICAgICAgdmFyIHZhbHVlID0gMC4wO1xuICAgICAgICB2YXIgc2lnbmFsID0gMC4wO1xuICAgICAgICB2YXIgd2VpZ2h0ID0gMS4wO1xuICAgICAgICB4ID0gKHggKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHkgPSAoeSAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeiA9ICh6ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICBmb3IgKHZhciBvY3RhdmUgPSAwOyBvY3RhdmUgPCB0aGlzLm9jdGF2ZXM7IG9jdGF2ZSsrKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGVzZSBmbG9hdGluZy1wb2ludCB2YWx1ZXMgaGF2ZSB0aGUgc2FtZSByYW5nZSBhcyBhIDMyLVxuICAgICAgICAgICAgLy8gYml0IGludGVnZXIgc28gdGhhdCB3ZSBjYW4gcGFzcyB0aGVtIHRvIHRoZSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbnMuXG4gICAgICAgICAgICBueCA9IHV0aWxfMS5tYWtlSW50MzJSYW5nZSh4KTtcbiAgICAgICAgICAgIG55ID0gdXRpbF8xLm1ha2VJbnQzMlJhbmdlKHkpO1xuICAgICAgICAgICAgbnogPSB1dGlsXzEubWFrZUludDMyUmFuZ2Uoeik7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNvaGVyZW50LW5vaXNlIHZhbHVlLlxuICAgICAgICAgICAgc2VlZCA9ICh0aGlzLnNlZWQgKyBvY3RhdmUpICYgMHg3ZmZmZmZmZjtcbiAgICAgICAgICAgIHNpZ25hbCA9IG5vaXNlZ2VuXzEuZGVmYXVsdC5ncmFkaWVudENvaGVyZW50Tm9pc2UzRChueCwgbnksIG56LCBzZWVkLCB0aGlzLnF1YWxpdHkpO1xuICAgICAgICAgICAgLy8gTWFrZSB0aGUgcmlkZ2VzLlxuICAgICAgICAgICAgc2lnbmFsID0gTWF0aC5hYnMoc2lnbmFsKTtcbiAgICAgICAgICAgIHNpZ25hbCA9IHRoaXMub2Zmc2V0IC0gc2lnbmFsO1xuICAgICAgICAgICAgLy8gU3F1YXJlIHRoZSBzaWduYWwgdG8gaW5jcmVhc2UgdGhlIHNoYXJwbmVzcyBvZiB0aGUgcmlkZ2VzLlxuICAgICAgICAgICAgc2lnbmFsICo9IHNpZ25hbDtcbiAgICAgICAgICAgIC8vIFRoZSB3ZWlnaHRpbmcgZnJvbSB0aGUgcHJldmlvdXMgb2N0YXZlIGlzIGFwcGxpZWQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICAgIC8vIExhcmdlciB2YWx1ZXMgaGF2ZSBoaWdoZXIgd2VpZ2h0cywgcHJvZHVjaW5nIHNoYXJwIHBvaW50cyBhbG9uZyB0aGVcbiAgICAgICAgICAgIC8vIHJpZGdlcy5cbiAgICAgICAgICAgIHNpZ25hbCAqPSB3ZWlnaHQ7XG4gICAgICAgICAgICAvLyBXZWlnaHQgc3VjY2Vzc2l2ZSBjb250cmlidXRpb25zIGJ5IHRoZSBwcmV2aW91cyBzaWduYWwuXG4gICAgICAgICAgICB3ZWlnaHQgPSBzaWduYWwgKiB0aGlzLmdhaW47XG4gICAgICAgICAgICAvLyBDbGFtcCB2YWx1ZSB0byB3aXRoaW4gMCBhbmQgMVxuICAgICAgICAgICAgd2VpZ2h0ID0gdXRpbF8xLmNsYW1wKHdlaWdodCwgMC4wLCAxLjApO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBzaWduYWwgdG8gdGhlIG91dHB1dCB2YWx1ZS5cbiAgICAgICAgICAgIHZhbHVlICs9IChzaWduYWwgKiB0aGlzLndlaWdodHNbb2N0YXZlXSk7XG4gICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV4dCBvY3RhdmUuXG4gICAgICAgICAgICB4ICo9IHRoaXMubGFjdW5hcml0eTtcbiAgICAgICAgICAgIHkgKj0gdGhpcy5sYWN1bmFyaXR5O1xuICAgICAgICAgICAgeiAqPSB0aGlzLmxhY3VuYXJpdHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEuMjUpIC0gMS4wO1xuICAgIH07XG4gICAgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfRlJFUVVFTkNZID0gMS4wO1xuICAgIFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX0xBQ1VOQVJJVFkgPSAyLjA7XG4gICAgUmlkZ2VkTXVsdGkuREVGQVVMVF9SSURHRURfT0NUQVZFX0NPVU5UID0gNjtcbiAgICBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9RVUFMSVRZID0gbm9pc2VnZW5fMS5RdWFsaXR5LlN0YW5kYXJkO1xuICAgIFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX1NFRUQgPSAwO1xuICAgIFJpZGdlZE11bHRpLkRFRkFVTFRfUklER0VEX09GRlNFVCA9IDEuMDtcbiAgICBSaWRnZWRNdWx0aS5ERUZBVUxUX1JJREdFRF9HQUlOID0gMi4wO1xuICAgIFJpZGdlZE11bHRpLlJJREdFRF9NQVhfT0NUQVZFID0gMzA7XG4gICAgcmV0dXJuIFJpZGdlZE11bHRpO1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSaWRnZWRNdWx0aTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyBjb25jZW50cmljIHNwaGVyZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgb3V0cHV0cyBjb25jZW50cmljIHNwaGVyZXMgY2VudGVyZWQgb24gdGhlIG9yaWdpblxuICogbGlrZSB0aGUgY29uY2VudHJpYyByaW5ncyBvZiBhbiBvbmlvbi5cbiAqXG4gKiBUaGUgZmlyc3Qgc3BoZXJlIGhhcyBhIHJhZGl1cyBvZiAxLjAuICBFYWNoIHN1YnNlcXVlbnQgc3BoZXJlIGhhcyBhXG4gKiByYWRpdXMgdGhhdCBpcyAxLjAgdW5pdCBsYXJnZXIgdGhhbiB0aGUgcHJldmlvdXMgc3BoZXJlLlxuICpcbiAqIFRoZSBvdXRwdXQgdmFsdWUgZnJvbSB0aGlzIG5vaXNlIG1vZHVsZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgaW5wdXQgdmFsdWUgYW5kIHRoZSB0aGUgbmVhcmVzdCBzcGhlcmljYWwgc3VyZmFjZS4gIFRoZVxuICogaW5wdXQgdmFsdWVzIHRoYXQgYXJlIGxvY2F0ZWQgb24gYSBzcGhlcmljYWwgc3VyZmFjZSBhcmUgZ2l2ZW4gdGhlXG4gKiBvdXRwdXQgdmFsdWUgMS4wIGFuZCB0aGUgaW5wdXQgdmFsdWVzIHRoYXQgYXJlIGVxdWlkaXN0YW50IGZyb20gdHdvXG4gKiBzcGhlcmljYWwgc3VyZmFjZXMgYXJlIGdpdmVuIHRoZSBvdXRwdXQgdmFsdWUgLTEuMC5cbiAqXG4gKiBBbiBhcHBsaWNhdGlvbiBjYW4gY2hhbmdlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIGNvbmNlbnRyaWMgc3BoZXJlcy5cbiAqIEluY3JlYXNpbmcgdGhlIGZyZXF1ZW5jeSByZWR1Y2VzIHRoZSBkaXN0YW5jZXMgYmV0d2VlbiBzcGhlcmVzLlxuICpcbiAqIFRoaXMgbm9pc2UgbW9kdWxlLCBtb2RpZmllZCB3aXRoIHNvbWUgbG93LWZyZXF1ZW5jeSwgbG93LXBvd2VyXG4gKiB0dXJidWxlbmNlLCBpcyB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgYWdhdGUtbGlrZSB0ZXh0dXJlcy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBkb2VzIG5vdCByZXF1aXJlIGFueSBzb3VyY2UgbW9kdWxlcy5cbiAqL1xudmFyIFNwaGVyZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNwaGVyZXMsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZyZXF1ZW5jeSBGcmVxdWVuY3kgb2YgdGhlIGNvbmNlbnRyaWMgc3BoZXJlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTcGhlcmVzKGZyZXF1ZW5jeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3kgfHwgU3BoZXJlcy5ERUZBVUxUX1NQSEVSRVNfRlJFUVVFTkNZO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNwaGVyZXMucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgeCA9ICh4ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB5ID0gKHkgKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHogPSAoeiAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgdmFyIGRpc3RGcm9tQ2VudGVyID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgICAgIHZhciBkaXN0RnJvbVNtYWxsZXJTcGhlcmUgPSBkaXN0RnJvbUNlbnRlciAtIE1hdGguZmxvb3IoZGlzdEZyb21DZW50ZXIpO1xuICAgICAgICB2YXIgZGlzdEZyb21MYXJnZXJTcGhlcmUgPSAxLjAgLSBkaXN0RnJvbVNtYWxsZXJTcGhlcmU7XG4gICAgICAgIHZhciBuZWFyZXN0RGlzdCA9IE1hdGgubWluKGRpc3RGcm9tU21hbGxlclNwaGVyZSwgZGlzdEZyb21MYXJnZXJTcGhlcmUpO1xuICAgICAgICByZXR1cm4gMS4wIC0gKG5lYXJlc3REaXN0ICogNC4wKTsgLy8gUHV0cyBpdCBpbiB0aGUgLTEuMCB0byArMS4wIHJhbmdlLlxuICAgIH07XG4gICAgU3BoZXJlcy5ERUZBVUxUX1NQSEVSRVNfRlJFUVVFTkNZID0gNC4wO1xuICAgIHJldHVybiBTcGhlcmVzO1xufShHZW5lcmF0b3JNb2R1bGVfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGhlcmVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXRoY29uc3RzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vLi4vbWF0aGNvbnN0c1wiKSk7XG52YXIgbm9pc2VnZW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi8uLi8uLi9ub2lzZWdlblwiKSk7XG52YXIgR2VuZXJhdG9yTW9kdWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2VuZXJhdG9yTW9kdWxlXCIpKTtcbi8qKlxuICogTm9pc2UgbW9kdWxlIHRoYXQgb3V0cHV0cyBWb3Jvbm9pIGNlbGxzLlxuICpcbiAqIEluIG1hdGhlbWF0aWNzLCBhICpWb3Jvbm9pIGNlbGwqIGlzIGEgcmVnaW9uIGNvbnRhaW5pbmcgYWxsIHRoZVxuICogcG9pbnRzIHRoYXQgYXJlIGNsb3NlciB0byBhIHNwZWNpZmljICpzZWVkIHBvaW50KiB0aGFuIHRvIGFueVxuICogb3RoZXIgc2VlZCBwb2ludC4gIFRoZXNlIGNlbGxzIG1lc2ggd2l0aCBvbmUgYW5vdGhlciwgcHJvZHVjaW5nXG4gKiBwb2x5Z29uLWxpa2UgZm9ybWF0aW9ucy5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIG5vaXNlIG1vZHVsZSByYW5kb21seSBwbGFjZXMgYSBzZWVkIHBvaW50IHdpdGhpblxuICogZWFjaCB1bml0IGN1YmUuICBCeSBtb2RpZnlpbmcgdGhlICpmcmVxdWVuY3kqIG9mIHRoZSBzZWVkIHBvaW50cyxcbiAqIGFuIGFwcGxpY2F0aW9uIGNhbiBjaGFuZ2UgdGhlIGRpc3RhbmNlIGJldHdlZW4gc2VlZCBwb2ludHMuICBUaGVcbiAqIGhpZ2hlciB0aGUgZnJlcXVlbmN5LCB0aGUgY2xvc2VyIHRvZ2V0aGVyIHRoaXMgbm9pc2UgbW9kdWxlIHBsYWNlc1xuICogdGhlIHNlZWQgcG9pbnRzLCB3aGljaCByZWR1Y2VzIHRoZSBzaXplIG9mIHRoZSBjZWxscy5cbiAqXG4gKiBUaGlzIG5vaXNlIG1vZHVsZSBhc3NpZ25zIGVhY2ggVm9yb25vaSBjZWxsIHdpdGggYSByYW5kb20gY29uc3RhbnRcbiAqIHZhbHVlIGZyb20gYSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbi4gIFRoZSAqZGlzcGxhY2VtZW50IHZhbHVlKlxuICogY29udHJvbHMgdGhlIHJhbmdlIG9mIHJhbmRvbSB2YWx1ZXMgdG8gYXNzaWduIHRvIGVhY2ggY2VsbC4gIFRoZVxuICogcmFuZ2Ugb2YgcmFuZG9tIHZhbHVlcyBpcyArLy0gdGhlIGRpc3BsYWNlbWVudCB2YWx1ZS5cbiAqXG4gKiBUbyBtb2RpZnkgdGhlIHJhbmRvbSBwb3NpdGlvbnMgb2YgdGhlIHNlZWQgcG9pbnRzLCB1cGRhdGUgdGhlIHNlZWQgdmFsdWUuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgY2FuIG9wdGlvbmFsbHkgYWRkIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBuZWFyZXN0XG4gKiBzZWVkIHRvIHRoZSBvdXRwdXQgdmFsdWUuICBUbyBlbmFibGUgdGhpcyBmZWF0dXJlLCBzZXQgdGhlIGBkaXN0YW5jZWAgZmxhZ1xuICogdG8gdHJ1ZS4gIFRoaXMgY2F1c2VzIHRoZSBwb2ludHMgaW4gdGhlIFZvcm9ub2kgY2VsbHNcbiAqIHRvIGluY3JlYXNlIGluIHZhbHVlIHRoZSBmdXJ0aGVyIGF3YXkgdGhhdCBwb2ludCBpcyBmcm9tIHRoZSBuZWFyZXN0XG4gKiBzZWVkIHBvaW50LlxuICpcbiAqIFZvcm9ub2kgY2VsbHMgYXJlIG9mdGVuIHVzZWQgdG8gZ2VuZXJhdGUgY3JhY2tlZC1tdWQgdGVycmFpblxuICogZm9ybWF0aW9ucyBvciBjcnlzdGFsLWxpa2UgdGV4dHVyZXMuXG4gKlxuICogVGhpcyBub2lzZSBtb2R1bGUgcmVxdWlyZXMgbm8gc291cmNlIG1vZHVsZXMuXG4gKi9cbnZhciBWb3Jvbm9pID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWb3Jvbm9pLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZyZXF1ZW5jeSBGcmVxdWVuY3kgb2YgdGhlIHNlZWQgcG9pbnRzLlxuICAgICAqIEBwYXJhbSBkaXNwbGFjZW1lbnQgU2NhbGUgb2YgdGhlIHJhbmRvbSBkaXNwbGFjZW1lbnQgdG8gYXBwbHkgdG8gZWFjaCBWb3Jvbm9pIGNlbGwuXG4gICAgICogQHBhcmFtIGRpc3RhbmNlIERldGVybWluZXMgaWYgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG5lYXJlc3Qgc2VlZCBwb2ludCBpcyBhcHBsaWVkIHRvIHRoZSBvdXRwdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgU2VlZCB2YWx1ZSB1c2VkIGJ5IHRoZSBjb2hlcmVudC1ub2lzZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgc2VlZCBwb2ludHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gVm9yb25vaShmcmVxdWVuY3ksIGRpc3BsYWNlbWVudCwgZGlzdGFuY2UsIHNlZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5IHx8IFZvcm9ub2kuREVGQVVMVF9WT1JPTk9JX0ZSRVFVRU5DWTtcbiAgICAgICAgX3RoaXMuZGlzcGxhY2VtZW50ID0gZGlzcGxhY2VtZW50IHx8IFZvcm9ub2kuREVGQVVMVF9WT1JPTk9JX0RJU1BMQUNFTUVOVDtcbiAgICAgICAgX3RoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZSB8fCBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2VlZCA9IHNlZWQgfHwgVm9yb25vaS5ERUZBVUxUX1ZPUk9OT0lfU0VFRDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGNvdWxkIGJlIG1vcmUgZWZmaWNpZW50IGJ5IGNhY2hpbmcgdGhlIHNlZWQgdmFsdWVzLlxuICAgICAgICB4ID0gKHggKiB0aGlzLmZyZXF1ZW5jeSk7XG4gICAgICAgIHkgPSAoeSAqIHRoaXMuZnJlcXVlbmN5KTtcbiAgICAgICAgeiA9ICh6ICogdGhpcy5mcmVxdWVuY3kpO1xuICAgICAgICB2YXIgeFBvcywgeVBvcywgelBvcywgeERpc3QsIHlEaXN0LCB6RGlzdCwgZGlzdDtcbiAgICAgICAgdmFyIHhpID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgdmFyIHlpID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgdmFyIHppID0gTWF0aC5mbG9vcih6KTtcbiAgICAgICAgdmFyIHhJbnQgPSAoeCA+IDAuMCA/IHhpIDogeGkgLSAxKTtcbiAgICAgICAgdmFyIHlJbnQgPSAoeSA+IDAuMCA/IHlpIDogeWkgLSAxKTtcbiAgICAgICAgdmFyIHpJbnQgPSAoeiA+IDAuMCA/IHppIDogemkgLSAxKTtcbiAgICAgICAgdmFyIG1pbkRpc3QgPSAyMTQ3NDgzNjQ3LjA7XG4gICAgICAgIHZhciB4Q2FuZGlkYXRlID0gMDtcbiAgICAgICAgdmFyIHlDYW5kaWRhdGUgPSAwO1xuICAgICAgICB2YXIgekNhbmRpZGF0ZSA9IDA7XG4gICAgICAgIHZhciB2YWx1ZSA9IDAuMDtcbiAgICAgICAgLy8gSW5zaWRlIGVhY2ggdW5pdCBjdWJlLCB0aGVyZSBpcyBhIHNlZWQgcG9pbnQgYXQgYSByYW5kb20gcG9zaXRpb24uICBHb1xuICAgICAgICAvLyB0aHJvdWdoIGVhY2ggb2YgdGhlIG5lYXJieSBjdWJlcyB1bnRpbCB3ZSBmaW5kIGEgY3ViZSB3aXRoIGEgc2VlZCBwb2ludFxuICAgICAgICAvLyB0aGF0IGlzIGNsb3Nlc3QgdG8gdGhlIHNwZWNpZmllZCBwb3NpdGlvbi5cbiAgICAgICAgZm9yICh2YXIgekN1ciA9IHpJbnQgLSAyOyB6Q3VyIDw9IHpJbnQgKyAyOyB6Q3VyKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHlDdXIgPSB5SW50IC0gMjsgeUN1ciA8PSB5SW50ICsgMjsgeUN1cisrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeEN1ciA9IHhJbnQgLSAyOyB4Q3VyIDw9IHhJbnQgKyAyOyB4Q3VyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhbmQgZGlzdGFuY2UgdG8gdGhlIHNlZWQgcG9pbnQgaW5zaWRlIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdW5pdCBjdWJlLlxuICAgICAgICAgICAgICAgICAgICB4UG9zID0gKHhDdXIgKyBub2lzZWdlbl8xLmRlZmF1bHQudmFsdWVOb2lzZTNEKHhDdXIsIHlDdXIsIHpDdXIsIHRoaXMuc2VlZCkpO1xuICAgICAgICAgICAgICAgICAgICB5UG9zID0gKHlDdXIgKyBub2lzZWdlbl8xLmRlZmF1bHQudmFsdWVOb2lzZTNEKHhDdXIsIHlDdXIsIHpDdXIsIHRoaXMuc2VlZCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgelBvcyA9ICh6Q3VyICsgbm9pc2VnZW5fMS5kZWZhdWx0LnZhbHVlTm9pc2UzRCh4Q3VyLCB5Q3VyLCB6Q3VyLCB0aGlzLnNlZWQgKyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIHhEaXN0ID0gKHhQb3MgLSB4KTtcbiAgICAgICAgICAgICAgICAgICAgeURpc3QgPSAoeVBvcyAtIHkpO1xuICAgICAgICAgICAgICAgICAgICB6RGlzdCA9ICh6UG9zIC0geik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSAoeERpc3QgKiB4RGlzdCArIHlEaXN0ICogeURpc3QgKyB6RGlzdCAqIHpEaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5EaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHNlZWQgcG9pbnQgaXMgY2xvc2VyIHRvIGFueSBvdGhlcnMgZm91bmQgc28gZmFyLCBzbyByZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2VlZCBwb2ludC5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgeENhbmRpZGF0ZSA9IHhQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB5Q2FuZGlkYXRlID0geVBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHpDYW5kaWRhdGUgPSB6UG9zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGRpc3RhbmNlIHRvIHRoZSBuZWFyZXN0IHNlZWQgcG9pbnQuXG4gICAgICAgICAgICB4RGlzdCA9IHhDYW5kaWRhdGUgLSB4O1xuICAgICAgICAgICAgeURpc3QgPSB5Q2FuZGlkYXRlIC0geTtcbiAgICAgICAgICAgIHpEaXN0ID0gekNhbmRpZGF0ZSAtIHo7XG4gICAgICAgICAgICB2YWx1ZSA9IChNYXRoLnNxcnQoeERpc3QgKiB4RGlzdCArIHlEaXN0ICogeURpc3QgKyB6RGlzdCAqIHpEaXN0KSkgKiBtYXRoY29uc3RzXzEuZGVmYXVsdC5TUVJUXzMgLSAxLjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBjYWxjdWxhdGVkIGRpc3RhbmNlIHdpdGggdGhlIGRpc3BsYWNlbWVudCB2YWx1ZSBhcHBsaWVkLlxuICAgICAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5kaXNwbGFjZW1lbnQgKiBub2lzZWdlbl8xLmRlZmF1bHQudmFsdWVOb2lzZTNEKChNYXRoLmZsb29yKHhDYW5kaWRhdGUpKSwgKE1hdGguZmxvb3IoeUNhbmRpZGF0ZSkpLCAoTWF0aC5mbG9vcih6Q2FuZGlkYXRlKSkpKTtcbiAgICB9O1xuICAgIFZvcm9ub2kuREVGQVVMVF9WT1JPTk9JX0RJU1BMQUNFTUVOVCA9IDEuMDtcbiAgICBWb3Jvbm9pLkRFRkFVTFRfVk9ST05PSV9GUkVRVUVOQ1kgPSAxLjA7XG4gICAgVm9yb25vaS5ERUZBVUxUX1ZPUk9OT0lfU0VFRCA9IDA7XG4gICAgcmV0dXJuIFZvcm9ub2k7XG59KEdlbmVyYXRvck1vZHVsZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZvcm9ub2k7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbnRlcnBvbGF0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW50ZXJwb2xhdGlvblwiKSk7XG52YXIgdmVjdG9ydGFibGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92ZWN0b3J0YWJsZVwiKSk7XG52YXIgUXVhbGl0eTtcbihmdW5jdGlvbiAoUXVhbGl0eSkge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBjb2hlcmVudCBub2lzZSBxdWlja2x5LiAgV2hlbiBhIGNvaGVyZW50LW5vaXNlIGZ1bmN0aW9uIHdpdGhcbiAgICAgKiBOb2lzZUdlbi5wcm90b3R5cGUgcXVhbGl0eSBzZXR0aW5nIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBidW1wLW1hcCBpbWFnZSwgdGhlcmUgYXJlXG4gICAgICogbm90aWNlYWJsZSBcImNyZWFzaW5nXCIgYXJ0aWZhY3RzIGluIHRoZSByZXN1bHRpbmcgaW1hZ2UuICBUaGlzIGlzXG4gICAgICogYmVjYXVzZSB0aGUgZGVyaXZhdGl2ZSBvZiB0aGF0IGZ1bmN0aW9uIGlzIGRpc2NvbnRpbnVvdXMgYXQgaW50ZWdlclxuICAgICAqIGJvdW5kYXJpZXMuXG4gICAgICovXG4gICAgUXVhbGl0eVtRdWFsaXR5W1wiRmFzdFwiXSA9IDBdID0gXCJGYXN0XCI7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIHN0YW5kYXJkLXF1YWxpdHkgY29oZXJlbnQgbm9pc2UuICBXaGVuIGEgY29oZXJlbnQtbm9pc2VcbiAgICAgKiBmdW5jdGlvbiB3aXRoIE5vaXNlR2VuLnByb3RvdHlwZSBxdWFsaXR5IHNldHRpbmcgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIGJ1bXAtbWFwXG4gICAgICogaW1hZ2UsIHRoZXJlIGFyZSBzb21lIG1pbm9yIFwiY3JlYXNpbmdcIiBhcnRpZmFjdHMgaW4gdGhlIHJlc3VsdGluZ1xuICAgICAqIGltYWdlLiAgVGhpcyBpcyBiZWNhdXNlIHRoZSBzZWNvbmQgZGVyaXZhdGl2ZSBvZiB0aGF0IGZ1bmN0aW9uIGlzXG4gICAgICogZGlzY29udGludW91cyBhdCBpbnRlZ2VyIGJvdW5kYXJpZXMuXG4gICAgICovXG4gICAgUXVhbGl0eVtRdWFsaXR5W1wiU3RhbmRhcmRcIl0gPSAxXSA9IFwiU3RhbmRhcmRcIjtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIGJlc3QtcXVhbGl0eSBjb2hlcmVudCBub2lzZS4gIFdoZW4gYSBjb2hlcmVudC1ub2lzZVxuICAgICAqIGZ1bmN0aW9uIHdpdGggTm9pc2VHZW4ucHJvdG90eXBlIHF1YWxpdHkgc2V0dGluZyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgYnVtcC1tYXBcbiAgICAgKiBpbWFnZSwgdGhlcmUgYXJlIG5vIFwiY3JlYXNpbmdcIiBhcnRpZmFjdHMgaW4gdGhlIHJlc3VsdGluZyBpbWFnZS4gIFRoaXNcbiAgICAgKiBpcyBiZWNhdXNlIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGRlcml2YXRpdmVzIG9mIHRoYXQgZnVuY3Rpb24gYXJlXG4gICAgICogY29udGludW91cyBhdCBpbnRlZ2VyIGJvdW5kYXJpZXMuXG4gICAgICovXG4gICAgUXVhbGl0eVtRdWFsaXR5W1wiQmVzdFwiXSA9IDJdID0gXCJCZXN0XCI7XG59KShRdWFsaXR5ID0gZXhwb3J0cy5RdWFsaXR5IHx8IChleHBvcnRzLlF1YWxpdHkgPSB7fSkpO1xudmFyIE5vaXNlR2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vaXNlR2VuKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gaW50ZWdlci1ub2lzZSB2YWx1ZSBmcm9tIHRoZSBjb29yZGluYXRlcyBvZiBhXG4gICAgICogdGhyZWUtZGltZW5zaW9uYWwgaW5wdXQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geCBUaGUgaW50ZWdlciB4IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IFRoZSBpbnRlZ2VyIHkgY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHogVGhlIGludGVnZXIgeiBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBBIHJhbmRvbSBudW1iZXIgc2VlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgaW50ZWdlci1ub2lzZSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgcmFuZ2VzIGZyb20gMCB0byAyMTQ3NDgzNjQ3LlxuICAgICAqXG4gICAgICogQSBub2lzZSBmdW5jdGlvbiBkaWZmZXJzIGZyb20gYSByYW5kb20tbnVtYmVyIGdlbmVyYXRvciBiZWNhdXNlIGl0XG4gICAgICogYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgb3V0cHV0IHZhbHVlIGlmIHRoZSBzYW1lIGlucHV0IHZhbHVlIGlzIHBhc3NlZFxuICAgICAqIHRvIGl0LlxuICAgICAqL1xuICAgIE5vaXNlR2VuLmludFZhbHVlTm9pc2UzRCA9IGZ1bmN0aW9uICh4LCB5LCB6LCBzZWVkKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgeiA9IE1hdGguZmxvb3Ioeik7XG4gICAgICAgIHNlZWQgPSBNYXRoLmZsb29yKHNlZWQpO1xuICAgICAgICAvLyBBbGwgY29uc3RhbnRzIGFyZSBwcmltZXMgYW5kIG11c3QgcmVtYWluIHByaW1lIGluIG9yZGVyIGZvciB0aGlzIG5vaXNlXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHdvcmsgY29ycmVjdGx5LlxuICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoKE5vaXNlR2VuLlhfTk9JU0VfR0VOICogeFxuICAgICAgICAgICAgKyBOb2lzZUdlbi5ZX05PSVNFX0dFTiAqIHlcbiAgICAgICAgICAgICsgTm9pc2VHZW4uWl9OT0lTRV9HRU4gKiB6XG4gICAgICAgICAgICArIE5vaXNlR2VuLlNFRURfTk9JU0VfR0VOICogc2VlZClcbiAgICAgICAgICAgICYgMHg3ZmZmZmZmZik7XG4gICAgICAgIG4gPSAobiA+PiAxMykgXiBuO1xuICAgICAgICByZXR1cm4gKChuICogKG4gKiBuICogNjA0OTMgKyAxOTk5MDMwMykgKyAxMzc2MzEyNTg5KSAmIDB4N2ZmZmZmZmYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdmFsdWUtbm9pc2UgdmFsdWUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgb2YgYVxuICAgICAqIHRocmVlLWRpbWVuc2lvbmFsIGlucHV0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHogVGhlIHogY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgQSByYW5kb20gbnVtYmVyIHNlZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHZhbHVlLW5vaXNlIHZhbHVlLlxuICAgICAqXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSByYW5nZXMgZnJvbSAtMS4wIHRvICsxLjAuXG4gICAgICpcbiAgICAgKiBBIG5vaXNlIGZ1bmN0aW9uIGRpZmZlcnMgZnJvbSBhIHJhbmRvbS1udW1iZXIgZ2VuZXJhdG9yIGJlY2F1c2UgaXRcbiAgICAgKiBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSBvdXRwdXQgdmFsdWUgaWYgdGhlIHNhbWUgaW5wdXQgdmFsdWUgaXMgcGFzc2VkXG4gICAgICogdG8gaXQuXG4gICAgICovXG4gICAgTm9pc2VHZW4udmFsdWVOb2lzZTNEID0gZnVuY3Rpb24gKHgsIHksIHosIHNlZWQpIHtcbiAgICAgICAgaWYgKHNlZWQgPT09IHZvaWQgMCkgeyBzZWVkID0gMDsgfVxuICAgICAgICByZXR1cm4gMS4wIC0gKE5vaXNlR2VuLmludFZhbHVlTm9pc2UzRChNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpLCBNYXRoLmZsb29yKHopLCBNYXRoLmZsb29yKHNlZWQpKSAvIDEwNzM3NDE4MjQuMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBncmFkaWVudC1ub2lzZSB2YWx1ZSBmcm9tIHRoZSBjb29yZGluYXRlcyBvZiBhXG4gICAgICogdGhyZWUtZGltZW5zaW9uYWwgaW5wdXQgdmFsdWUgYW5kIHRoZSBpbnRlZ2VyIGNvb3JkaW5hdGVzIG9mIGFcbiAgICAgKiBuZWFyYnkgdGhyZWUtZGltZW5zaW9uYWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZnggVGhlIGZsb2F0aW5nLXBvaW50IHggY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIGZ5IFRoZSBmbG9hdGluZy1wb2ludCB5IGNvb3JkaW5hdGUgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIEBwYXJhbSBmeiBUaGUgZmxvYXRpbmctcG9pbnQgeiBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gaXggVGhlIGludGVnZXIgeCBjb29yZGluYXRlIG9mIGEgbmVhcmJ5IHZhbHVlLlxuICAgICAqIEBwYXJhbSBpeSBUaGUgaW50ZWdlciB5IGNvb3JkaW5hdGUgb2YgYSBuZWFyYnkgdmFsdWUuXG4gICAgICogQHBhcmFtIGl6IFRoZSBpbnRlZ2VyIHogY29vcmRpbmF0ZSBvZiBhIG5lYXJieSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgcmFuZG9tIG51bWJlciBzZWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncmFkaWVudC1ub2lzZSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gZnggYW5kIGl4IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsXG4gICAgICogdG8gb25lLlxuICAgICAqXG4gICAgICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBmeSBhbmQgaXkgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWxcbiAgICAgKiB0byBvbmUuXG4gICAgICpcbiAgICAgKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGZ6IGFuZCBpeiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbFxuICAgICAqIHRvIG9uZS5cbiAgICAgKlxuICAgICAqIEEgKmdyYWRpZW50Ki1ub2lzZSBmdW5jdGlvbiBnZW5lcmF0ZXMgYmV0dGVyLXF1YWxpdHkgbm9pc2UgdGhhbiBhXG4gICAgICogKnZhbHVlKi1ub2lzZSBmdW5jdGlvbi4gIE1vc3Qgbm9pc2UgbW9kdWxlcyB1c2UgZ3JhZGllbnQgbm9pc2UgZm9yXG4gICAgICogdGhpcyByZWFzb24sIGFsdGhvdWdoIGl0IHRha2VzIG11Y2ggbG9uZ2VyIHRvIGNhbGN1bGF0ZS5cbiAgICAgKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgcmFuZ2VzIGZyb20gLTEuMCB0byArMS4wLlxuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSBncmFkaWVudC1ub2lzZSB2YWx1ZSBieSBwZXJmb3JtaW5nIHRoZVxuICAgICAqIGZvbGxvd2luZyBzdGVwczpcbiAgICAgKiAtIEl0IGZpcnN0IGNhbGN1bGF0ZXMgYSByYW5kb20gbm9ybWFsaXplZCB2ZWN0b3IgYmFzZWQgb24gdGhlXG4gICAgICogICBuZWFyYnkgaW50ZWdlciB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICAgKiAtIEl0IHRoZW4gY2FsY3VsYXRlcyBhIG5ldyB2YWx1ZSBieSBhZGRpbmcgdGhpcyB2ZWN0b3IgdG8gdGhlXG4gICAgICogICBuZWFyYnkgaW50ZWdlciB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICAgKiAtIEl0IHRoZW4gY2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhlIGFib3ZlLWdlbmVyYXRlZCB2YWx1ZVxuICAgICAqICAgYW5kIHRoZSBmbG9hdGluZy1wb2ludCBpbnB1dCB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEEgbm9pc2UgZnVuY3Rpb24gZGlmZmVycyBmcm9tIGEgcmFuZG9tLW51bWJlciBnZW5lcmF0b3IgYmVjYXVzZSBpdFxuICAgICAqIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIG91dHB1dCB2YWx1ZSBpZiB0aGUgc2FtZSBpbnB1dCB2YWx1ZSBpcyBwYXNzZWRcbiAgICAgKiB0byBpdC5cbiAgICAgKi9cbiAgICBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QgPSBmdW5jdGlvbiAoZngsIGZ5LCBmeiwgaXgsIGl5LCBpeiwgc2VlZCkge1xuICAgICAgICBpZiAoc2VlZCA9PT0gdm9pZCAwKSB7IHNlZWQgPSAxOyB9XG4gICAgICAgIC8vIFJhbmRvbWx5IGdlbmVyYXRlIGEgZ3JhZGllbnQgdmVjdG9yIGdpdmVuIHRoZSBpbnRlZ2VyIGNvb3JkaW5hdGVzIG9mIHRoZVxuICAgICAgICAvLyBpbnB1dCB2YWx1ZS4gIFRoaXMgaW1wbGVtZW50YXRpb24gZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBhbmQgdXNlcyBpdFxuICAgICAgICAvLyBhcyBhbiBpbmRleCBpbnRvIGEgbm9ybWFsaXplZC12ZWN0b3IgbG9va3VwIHRhYmxlLlxuICAgICAgICB2YXIgdmVjdG9ySW5kZXggPSBNYXRoLmZsb29yKE5vaXNlR2VuLlhfTk9JU0VfR0VOICogaXggK1xuICAgICAgICAgICAgTm9pc2VHZW4uWV9OT0lTRV9HRU4gKiBpeSArXG4gICAgICAgICAgICBOb2lzZUdlbi5aX05PSVNFX0dFTiAqIGl6ICtcbiAgICAgICAgICAgIE5vaXNlR2VuLlNFRURfTk9JU0VfR0VOICogc2VlZCkgJiAweGZmZmZmZmZmO1xuICAgICAgICB2ZWN0b3JJbmRleCBePSAodmVjdG9ySW5kZXggPj4gTm9pc2VHZW4uU0hJRlRfTk9JU0VfR0VOKTtcbiAgICAgICAgdmVjdG9ySW5kZXggJj0gMHhmZjtcbiAgICAgICAgdmFyIHh2R3JhZGllbnQgPSB2ZWN0b3J0YWJsZV8xLmRlZmF1bHRbKHZlY3RvckluZGV4IDw8IDIpXTtcbiAgICAgICAgdmFyIHl2R3JhZGllbnQgPSB2ZWN0b3J0YWJsZV8xLmRlZmF1bHRbKHZlY3RvckluZGV4IDw8IDIpICsgMV07XG4gICAgICAgIHZhciB6dkdyYWRpZW50ID0gdmVjdG9ydGFibGVfMS5kZWZhdWx0Wyh2ZWN0b3JJbmRleCA8PCAyKSArIDJdO1xuICAgICAgICAvLyBTZXQgdXAgdXMgYW5vdGhlciB2ZWN0b3IgZXF1YWwgdG8gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byB2ZWN0b3JzXG4gICAgICAgIC8vIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLlxuICAgICAgICB2YXIgeHZQb2ludCA9IChmeCAtIGl4KTtcbiAgICAgICAgdmFyIHl2UG9pbnQgPSAoZnkgLSBpeSk7XG4gICAgICAgIHZhciB6dlBvaW50ID0gKGZ6IC0gaXopO1xuICAgICAgICAvLyBOb3cgY29tcHV0ZSB0aGUgZG90IHByb2R1Y3Qgb2YgdGhlIGdyYWRpZW50IHZlY3RvciB3aXRoIHRoZSBkaXN0YW5jZVxuICAgICAgICAvLyB2ZWN0b3IuICBUaGUgcmVzdWx0aW5nIHZhbHVlIGlzIGdyYWRpZW50IG5vaXNlLiAgQXBwbHkgYSBzY2FsaW5nIHZhbHVlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhpcyBub2lzZSB2YWx1ZSByYW5nZXMgZnJvbSAtMS4wIHRvIDEuMC5cbiAgICAgICAgcmV0dXJuICgoeHZHcmFkaWVudCAqIHh2UG9pbnQpICtcbiAgICAgICAgICAgICh5dkdyYWRpZW50ICogeXZQb2ludCkgK1xuICAgICAgICAgICAgKHp2R3JhZGllbnQgKiB6dlBvaW50KSkgKiAyLjEyO1xuICAgIH07XG4gICAgLy8gQFRPRE8gcmVtb3ZlIGBzZWVkYCBwYXJhbSwgaXQgaXMgbm90IHVzZWQuIE9yIG1heWJlIGl0IHNob3VsZCBiZT9cbiAgICBOb2lzZUdlbi5jb2hlcmVudE5vaXNlM0QgPSBmdW5jdGlvbiAoeCwgeSwgeiwgc2VlZCwgcXVhbGl0eSwgZnVuYykge1xuICAgICAgICBpZiAoIWZ1bmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIHByb3BlciBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VlZCkge1xuICAgICAgICAgICAgc2VlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWVkID0gTWF0aC5mbG9vcihzZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXF1YWxpdHkpIHtcbiAgICAgICAgICAgIHF1YWxpdHkgPSBRdWFsaXR5LlN0YW5kYXJkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVhbGl0eSA9IE1hdGguZmxvb3IocXVhbGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHhpID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgdmFyIHlpID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgdmFyIHppID0gTWF0aC5mbG9vcih6KTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgdW5pdC1sZW5ndGggY3ViZSBhbGlnbmVkIGFsb25nIGFuIGludGVnZXIgYm91bmRhcnkuICBUaGlzIGN1YmVcbiAgICAgICAgLy8gc3Vycm91bmRzIHRoZSBpbnB1dCBwb2ludC5cbiAgICAgICAgdmFyIHgwID0gKHggPiAwLjAgPyB4aSA6IHggLSAxKTtcbiAgICAgICAgdmFyIHgxID0geDAgKyAxO1xuICAgICAgICB2YXIgeTAgPSAoeSA+IDAuMCA/IHlpIDogeSAtIDEpO1xuICAgICAgICB2YXIgeTEgPSB5MCArIDE7XG4gICAgICAgIHZhciB6MCA9ICh6ID4gMC4wID8gemkgOiB6IC0gMSk7XG4gICAgICAgIHZhciB6MSA9IHowICsgMTtcbiAgICAgICAgLy8gTWFwIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBpbnB1dCB2YWx1ZSBhbmQgdGhlXG4gICAgICAgIC8vIGNvb3JkaW5hdGVzIG9mIHRoZSBjdWJlJ3Mgb3V0ZXItbG93ZXItbGVmdCB2ZXJ0ZXggb250byBhbiBTLWN1cnZlLlxuICAgICAgICB2YXIgeHMgPSAwLCB5cyA9IDAsIHpzID0gMDtcbiAgICAgICAgc3dpdGNoIChxdWFsaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFF1YWxpdHkuQmVzdDpcbiAgICAgICAgICAgICAgICB4cyA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LnF1aW50aWNTQ3VydmUoeCAtIHgwKTtcbiAgICAgICAgICAgICAgICB5cyA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LnF1aW50aWNTQ3VydmUoeSAtIHkwKTtcbiAgICAgICAgICAgICAgICB6cyA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LnF1aW50aWNTQ3VydmUoeiAtIHowKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUXVhbGl0eS5TdGFuZGFyZDpcbiAgICAgICAgICAgICAgICB4cyA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmN1YmljU0N1cnZlKHggLSB4MCk7XG4gICAgICAgICAgICAgICAgeXMgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5jdWJpY1NDdXJ2ZSh5IC0geTApO1xuICAgICAgICAgICAgICAgIHpzID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQuY3ViaWNTQ3VydmUoeiAtIHowKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlIFF1YWxpdHkuRmFzdDpcbiAgICAgICAgICAgICAgICB4cyA9IHggLSB4MDtcbiAgICAgICAgICAgICAgICB5cyA9IHkgLSB5MDtcbiAgICAgICAgICAgICAgICB6cyA9IHogLSB6MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyB1c2UgcHJvdmlkZWQgZnVuY3Rpb24gdG8gaW50ZXJwb2xhdGVcbiAgICAgICAgcmV0dXJuIGZ1bmMoeDAsIHkwLCB6MCwgeDEsIHkxLCB6MSwgeHMsIHlzLCB6cyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB2YWx1ZS1jb2hlcmVudC1ub2lzZSB2YWx1ZSBmcm9tIHRoZSBjb29yZGluYXRlcyBvZiBhXG4gICAgICogdGhyZWUtZGltZW5zaW9uYWwgaW5wdXQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiBUaGUgeiBjb29yZGluYXRlIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgcmFuZG9tIG51bWJlciBzZWVkLlxuICAgICAqIEBwYXJhbSBxdWFsaXR5IFRoZSBxdWFsaXR5IG9mIHRoZSBjb2hlcmVudC1ub2lzZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgdmFsdWUtY29oZXJlbnQtbm9pc2UgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHJhbmdlcyBmcm9tIC0xLjAgdG8gKzEuMC5cbiAgICAgKlxuICAgICAqIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuICpncmFkaWVudCogbm9pc2UgYW5kXG4gICAgICogKnZhbHVlKiBub2lzZSwgc2VlIHRoZSBjb21tZW50cyBmb3IgdGhlIGdyYWRpZW50Tm9pc2UzRCgpIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIE5vaXNlR2VuLnZhbHVlQ29oZXJlbnROb2lzZTNEID0gZnVuY3Rpb24gKHgsIHksIHosIHNlZWQsIHF1YWxpdHkpIHtcbiAgICAgICAgcmV0dXJuIE5vaXNlR2VuLmNvaGVyZW50Tm9pc2UzRCh4LCB5LCB6LCBzZWVkLCBxdWFsaXR5LCBmdW5jdGlvbiAoeDAsIHkwLCB6MCwgeDEsIHkxLCB6MSwgeHMsIHlzLCB6cykge1xuICAgICAgICAgICAgLy8gTm93IGNhbGN1bGF0ZSB0aGUgbm9pc2UgdmFsdWVzIGF0IGVhY2ggdmVydGV4IG9mIHRoZSBjdWJlLiAgVG8gZ2VuZXJhdGVcbiAgICAgICAgICAgIC8vIHRoZSBjb2hlcmVudC1ub2lzZSB2YWx1ZSBhdCB0aGUgaW5wdXQgcG9pbnQsIGludGVycG9sYXRlIHRoZXNlIGVpZ2h0XG4gICAgICAgICAgICAvLyBub2lzZSB2YWx1ZXMgdXNpbmcgdGhlIFMtY3VydmUgdmFsdWUgYXMgdGhlIGludGVycG9sYW50ICh0cmlsaW5lYXJcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb24uKVxuICAgICAgICAgICAgdmFyIG4wLCBuMSwgaXgwLCBpeDEsIGl5MCwgaXkxO1xuICAgICAgICAgICAgbjAgPSBOb2lzZUdlbi52YWx1ZU5vaXNlM0QoeDAsIHkwLCB6MCwgc2VlZCk7XG4gICAgICAgICAgICBuMSA9IE5vaXNlR2VuLnZhbHVlTm9pc2UzRCh4MSwgeTAsIHowLCBzZWVkKTtcbiAgICAgICAgICAgIGl4MCA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihuMCwgbjEsIHhzKTtcbiAgICAgICAgICAgIG4wID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgwLCB5MSwgejAsIHNlZWQpO1xuICAgICAgICAgICAgbjEgPSBOb2lzZUdlbi52YWx1ZU5vaXNlM0QoeDEsIHkxLCB6MCwgc2VlZCk7XG4gICAgICAgICAgICBpeDEgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIobjAsIG4xLCB4cyk7XG4gICAgICAgICAgICBpeTAgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIoaXgwLCBpeDEsIHlzKTtcbiAgICAgICAgICAgIG4wID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgwLCB5MCwgejEsIHNlZWQpO1xuICAgICAgICAgICAgbjEgPSBOb2lzZUdlbi52YWx1ZU5vaXNlM0QoeDEsIHkwLCB6MSwgc2VlZCk7XG4gICAgICAgICAgICBpeDAgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIobjAsIG4xLCB4cyk7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLnZhbHVlTm9pc2UzRCh4MCwgeTEsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4udmFsdWVOb2lzZTNEKHgxLCB5MSwgejEsIHNlZWQpO1xuICAgICAgICAgICAgaXgxID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgaXkxID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKGl4MCwgaXgxLCB5cyk7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKGl5MCwgaXkxLCB6cyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZ3JhZGllbnQtY29oZXJlbnQtbm9pc2UgdmFsdWUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgb2YgYVxuICAgICAqIHRocmVlLWRpbWVuc2lvbmFsIGlucHV0IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHogVGhlIHogY29vcmRpbmF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHJhbmRvbSBudW1iZXIgc2VlZC5cbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBUaGUgcXVhbGl0eSBvZiB0aGUgY29oZXJlbnQtbm9pc2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyYWRpZW50LWNvaGVyZW50LW5vaXNlIHZhbHVlLlxuICAgICAqXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSByYW5nZXMgZnJvbSAtMS4wIHRvICsxLjAuXG4gICAgICpcbiAgICAgKiBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAqZ3JhZGllbnQqIG5vaXNlIGFuZFxuICAgICAqICp2YWx1ZSogbm9pc2UsIHNlZSB0aGUgY29tbWVudHMgZm9yIHRoZSBncmFkaWVudE5vaXNlM0QoKSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBOb2lzZUdlbi5ncmFkaWVudENvaGVyZW50Tm9pc2UzRCA9IGZ1bmN0aW9uICh4LCB5LCB6LCBzZWVkLCBxdWFsaXR5KSB7XG4gICAgICAgIHJldHVybiBOb2lzZUdlbi5jb2hlcmVudE5vaXNlM0QoeCwgeSwgeiwgc2VlZCwgcXVhbGl0eSwgZnVuY3Rpb24gKHgwLCB5MCwgejAsIHgxLCB5MSwgejEsIHhzLCB5cywgenMpIHtcbiAgICAgICAgICAgIC8vIE5vdyBjYWxjdWxhdGUgdGhlIG5vaXNlIHZhbHVlcyBhdCBlYWNoIHZlcnRleCBvZiB0aGUgY3ViZS4gIFRvIGdlbmVyYXRlXG4gICAgICAgICAgICAvLyB0aGUgY29oZXJlbnQtbm9pc2UgdmFsdWUgYXQgdGhlIGlucHV0IHBvaW50LCBpbnRlcnBvbGF0ZSB0aGVzZSBlaWdodFxuICAgICAgICAgICAgLy8gbm9pc2UgdmFsdWVzIHVzaW5nIHRoZSBTLWN1cnZlIHZhbHVlIGFzIHRoZSBpbnRlcnBvbGFudCAodHJpbGluZWFyXG4gICAgICAgICAgICAvLyBpbnRlcnBvbGF0aW9uLilcbiAgICAgICAgICAgIHZhciBuMCwgbjEsIGl4MCwgaXgxLCBpeTAsIGl5MTtcbiAgICAgICAgICAgIG4wID0gTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEKHgsIHksIHosIHgwLCB5MCwgejAsIHNlZWQpO1xuICAgICAgICAgICAgbjEgPSBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QoeCwgeSwgeiwgeDEsIHkwLCB6MCwgc2VlZCk7XG4gICAgICAgICAgICBpeDAgPSBpbnRlcnBvbGF0aW9uXzEuZGVmYXVsdC5saW5lYXIobjAsIG4xLCB4cyk7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MCwgeTEsIHowLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEKHgsIHksIHosIHgxLCB5MSwgejAsIHNlZWQpO1xuICAgICAgICAgICAgaXgxID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgaXkwID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKGl4MCwgaXgxLCB5cyk7XG4gICAgICAgICAgICBuMCA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MCwgeTAsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIG4xID0gTm9pc2VHZW4uZ3JhZGllbnROb2lzZTNEKHgsIHksIHosIHgxLCB5MCwgejEsIHNlZWQpO1xuICAgICAgICAgICAgaXgwID0gaW50ZXJwb2xhdGlvbl8xLmRlZmF1bHQubGluZWFyKG4wLCBuMSwgeHMpO1xuICAgICAgICAgICAgbjAgPSBOb2lzZUdlbi5ncmFkaWVudE5vaXNlM0QoeCwgeSwgeiwgeDAsIHkxLCB6MSwgc2VlZCk7XG4gICAgICAgICAgICBuMSA9IE5vaXNlR2VuLmdyYWRpZW50Tm9pc2UzRCh4LCB5LCB6LCB4MSwgeTEsIHoxLCBzZWVkKTtcbiAgICAgICAgICAgIGl4MSA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihuMCwgbjEsIHhzKTtcbiAgICAgICAgICAgIGl5MSA9IGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihpeDAsIGl4MSwgeXMpO1xuICAgICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb25fMS5kZWZhdWx0LmxpbmVhcihpeTAsIGl5MSwgenMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIENvbnN0YW50c1xuICAgIE5vaXNlR2VuLlhfTk9JU0VfR0VOID0gMTYxOTtcbiAgICBOb2lzZUdlbi5ZX05PSVNFX0dFTiA9IDMxMzM3O1xuICAgIE5vaXNlR2VuLlpfTk9JU0VfR0VOID0gNjk3MTtcbiAgICBOb2lzZUdlbi5TRUVEX05PSVNFX0dFTiA9IDEwMTM7XG4gICAgTm9pc2VHZW4uU0hJRlRfTk9JU0VfR0VOID0gODtcbiAgICByZXR1cm4gTm9pc2VHZW47XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTm9pc2VHZW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVHVwbGUgY2xhc3MuIEZvciBzdG9yaW5nIGEgcGFpciBvZiB2YWx1ZXMuXG4gKi9cbnZhciBUdXBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXRlbTEgRmlyc3QgaXRlbSBpbiBwYWlyLlxuICAgICAqIEBwYXJhbSBpdGVtMiBTZWNvbmQgaXRlbSBpbiBwYWlyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFR1cGxlKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICB0aGlzLml0ZW0xID0gaXRlbTE7XG4gICAgICAgIHRoaXMuaXRlbTIgPSBpdGVtMjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSB0dXBsZSBpbiBhIHByZXR0eSBmb3JtYXQuXG4gICAgICogQGV4YW1wbGUgXCJbMSwgMl1cIlxuICAgICAqL1xuICAgIFR1cGxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgdGhpcy5pdGVtMSArIFwiLCBcIiArIHRoaXMuaXRlbTIgKyBcIl1cIjtcbiAgICB9O1xuICAgIHJldHVybiBUdXBsZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUdXBsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBDbGFtcCBhIHZhbHVlIHRvIHdpdGhpbiBhIGxvd2VyIGFuZCB1cHBlciBib3VuZC5cbiAqIElmIHRoZSB2YWx1ZSBpcyBsb3dlciB0aGFuIHRoZSBsb3dlciBib3VuZCwgdGhlIGxvd2VyIGJvdW5kIGlzIHJldHVybmVkLlxuICogSWYgdGhlIHZhbHVlIGlzIGFib3ZlIHRoZSB1cHBlciBib3VuZCwgdGhlIHVwcGVyIGJvdW5kIGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2xhbXBlZC5cbiAqIEBwYXJhbSBsb3dlckJvdW5kIFRoZSBsb3dlciBib3VuZCB0byByZXN0cmljdCB0aGUgdmFsdWUgdG8uXG4gKiBAcGFyYW0gdXBwZXJCb3VuZCBUaGUgdXBwZXIgYm91bmQgdG8gcmVzdHJpY3QgdGhlIHZhbHVlIHRvLlxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICAgIGlmICh2YWx1ZSA8IGxvd2VyQm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGxvd2VyQm91bmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlID4gdXBwZXJCb3VuZCkge1xuICAgICAgICByZXR1cm4gdXBwZXJCb3VuZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjbGFtcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNsYW1wXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2xhbXBcIikpO1xuZXhwb3J0cy5jbGFtcCA9IGNsYW1wXzEuZGVmYXVsdDtcbnZhciBtYWtlSW50MzJSYW5nZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VJbnQzMlJhbmdlXCIpKTtcbmV4cG9ydHMubWFrZUludDMyUmFuZ2UgPSBtYWtlSW50MzJSYW5nZV8xLmRlZmF1bHQ7XG52YXIgVHVwbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UdXBsZVwiKSk7XG5leHBvcnRzLlR1cGxlID0gVHVwbGVfMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIE1vZGlmaWVzIGEgZmxvYXRpbmctcG9pbnQgdmFsdWUgc28gdGhhdCBpdCBjYW4gYmUgc3RvcmVkIGluIGFcbiAqIGludDMyIHZhcmlhYmxlLlxuICpcbiAqIEBwYXJhbSBuIEEgZmxvYXRpbmctcG9pbnQgbnVtYmVyLlxuICpcbiAqIEByZXR1cm5zIFRoZSBtb2RpZmllZCBmbG9hdGluZy1wb2ludCBudW1iZXIuXG4gKlxuICogSW4gbGlibm9pc2UsIHRoZSBub2lzZS1nZW5lcmF0aW5nIGFsZ29yaXRobXMgYXJlIGFsbCBpbnRlZ2VyLWJhc2VkO1xuICogdGhleSB1c2UgdmFyaWFibGVzIG9mIHR5cGUgaW50MzIuICBCZWZvcmUgY2FsbGluZyBhIG5vaXNlXG4gKiBmdW5jdGlvbiwgcGFzcyB0aGUgeCwgeSwgYW5kIHogY29vcmRpbmF0ZXMgdG8gdGhpcyBmdW5jdGlvbiB0b1xuICogZW5zdXJlIHRoYXQgdGhlc2UgY29vcmRpbmF0ZXMgY2FuIGJlIGNhc3QgdG8gYSBpbnQzMiB2YWx1ZS5cbiAqXG4gKiBBbHRob3VnaCB5b3UgY291bGQgZG8gYSBzdHJhaWdodCBjYXN0IGZyb20gZG91YmxlIHRvIGludDMyLCB0aGVcbiAqIHJlc3VsdGluZyB2YWx1ZSBtYXkgZGlmZmVyIGJldHdlZW4gcGxhdGZvcm1zLiAgQnkgdXNpbmcgdGhpcyBmdW5jdGlvbixcbiAqIHlvdSBlbnN1cmUgdGhhdCB0aGUgcmVzdWx0aW5nIHZhbHVlIGlzIGlkZW50aWNhbCBiZXR3ZWVuIHBsYXRmb3Jtcy5cbiAqXG4gKiBAVE9ETyBJJ20gbm90IHN1cmUgdGhpcyBpcyBuZWNlc3NhcnkgaW4gSmF2YVNjcmlwdC5cbiAqICBIb3cgY2FuIHdlIHRlc3QgdGhhdCByZW1vdmluZyB0aGlzIGlzIHNhZmU/XG4gKi9cbmZ1bmN0aW9uIG1ha2VJbnQzMlJhbmdlKG4pIHtcbiAgICBpZiAobiA+PSAxMDczNzQxODI0LjApIHtcbiAgICAgICAgcmV0dXJuICgyLjAgKiAobiAlIDEwNzM3NDE4MjQuMCkpIC0gMTA3Mzc0MTgyNC4wO1xuICAgIH1cbiAgICBlbHNlIGlmIChuIDw9IC0xMDczNzQxODI0LjApIHtcbiAgICAgICAgcmV0dXJuICgyLjAgKiAobiAlIDEwNzM3NDE4MjQuMCkpICsgMTA3Mzc0MTgyNC4wO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1ha2VJbnQzMlJhbmdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVmVjdG9yVGFibGUgPSBbXG4gICAgLTAuNzYzODc0LCAtMC41OTY0MzksIC0wLjI0NjQ4OSwgMC4wLFxuICAgIDAuMzk2MDU1LCAwLjkwNDUxOCwgLTAuMTU4MDczLCAwLjAsXG4gICAgLTAuNDk5MDA0LCAtMC44NjY1LCAtMC4wMTMxNjMxLCAwLjAsXG4gICAgMC40Njg3MjQsIC0wLjgyNDc1NiwgMC4zMTYzNDYsIDAuMCxcbiAgICAwLjgyOTU5OCwgMC40MzE5NSwgMC4zNTM4MTYsIDAuMCxcbiAgICAtMC40NTQ0NzMsIDAuNjI5NDk3LCAtMC42MzAyMjgsIDAuMCxcbiAgICAtMC4xNjIzNDksIC0wLjg2OTk2MiwgLTAuNDY1NjI4LCAwLjAsXG4gICAgMC45MzI4MDUsIDAuMjUzNDUxLCAwLjI1NjE5OCwgMC4wLFxuICAgIC0wLjM0NTQxOSwgMC45MjcyOTksIC0wLjE0NDIyNywgMC4wLFxuICAgIC0wLjcxNTAyNiwgLTAuMjkzNjk4LCAtMC42MzQ0MTMsIDAuMCxcbiAgICAtMC4yNDU5OTcsIDAuNzE3NDY3LCAtMC42NTE3MTEsIDAuMCxcbiAgICAtMC45Njc0MDksIC0wLjI1MDQzNSwgLTAuMDM3NDUxLCAwLjAsXG4gICAgMC45MDE3MjksIDAuMzk3MTA4LCAtMC4xNzA4NTIsIDAuMCxcbiAgICAwLjg5MjY1NywgLTAuMDcyMDYyMiwgLTAuNDQ0OTM4LCAwLjAsXG4gICAgMC4wMjYwMDg0LCAtMC4wMzYxNzAxLCAwLjk5OTAwNywgMC4wLFxuICAgIDAuOTQ5MTA3LCAtMC4xOTQ4NiwgMC4yNDc0MzksIDAuMCxcbiAgICAwLjQ3MTgwMywgLTAuODA3MDY0LCAtMC4zNTUwMzYsIDAuMCxcbiAgICAwLjg3OTczNywgMC4xNDE4NDUsIDAuNDUzODA5LCAwLjAsXG4gICAgMC41NzA3NDcsIDAuNjk2NDE1LCAwLjQzNTAzMywgMC4wLFxuICAgIC0wLjE0MTc1MSwgLTAuOTg4MjMzLCAtMC4wNTc0NTg0LCAwLjAsXG4gICAgLTAuNTgyMTksIC0wLjAzMDMwMDUsIDAuODEyNDg4LCAwLjAsXG4gICAgLTAuNjA5MjIsIDAuMjM5NDgyLCAtMC43NTU5NzUsIDAuMCxcbiAgICAwLjI5OTM5NCwgLTAuMTk3MDY2LCAtMC45MzM1NTcsIDAuMCxcbiAgICAtMC44NTE2MTUsIC0wLjIyMDcwMiwgLTAuNDc1NDQsIDAuMCxcbiAgICAwLjg0ODg4NiwgMC4zNDE4MjksIC0wLjQwMzE2OSwgMC4wLFxuICAgIC0wLjE1NjEyOSwgLTAuNjg3MjQxLCAwLjcwOTQ1MywgMC4wLFxuICAgIC0wLjY2NTY1MSwgMC42MjY3MjQsIDAuNDA1MTI0LCAwLjAsXG4gICAgMC41OTU5MTQsIC0wLjY3NDU4MiwgMC40MzU2OSwgMC4wLFxuICAgIDAuMTcxMDI1LCAtMC41MDkyOTIsIDAuODQzNDI4LCAwLjAsXG4gICAgMC43ODYwNSwgMC41MzY0MTQsIC0wLjMwNzIyMiwgMC4wLFxuICAgIDAuMTg5MDUsIC0wLjc5MTYxMywgMC41ODEwNDIsIDAuMCxcbiAgICAtMC4yOTQ5MTYsIDAuODQ0OTk0LCAwLjQ0NjEwNSwgMC4wLFxuICAgIDAuMzQyMDMxLCAtMC41ODczNiwgLTAuNzMzNSwgMC4wLFxuICAgIDAuNTcxNTUsIDAuNzg2OSwgMC4yMzI2MzUsIDAuMCxcbiAgICAwLjg4NTAyNiwgLTAuNDA4MjIzLCAwLjIyMzc5MSwgMC4wLFxuICAgIC0wLjc4OTUxOCwgMC41NzE2NDUsIDAuMjIzMzQ3LCAwLjAsXG4gICAgMC43NzQ1NzEsIDAuMzE1NjYsIDAuNTQ4MDg3LCAwLjAsXG4gICAgLTAuNzk2OTUsIC0wLjA0MzM2MDMsIC0wLjYwMjQ4NywgMC4wLFxuICAgIC0wLjE0MjQyNSwgLTAuNDczMjQ5LCAtMC44NjkzMzksIDAuMCxcbiAgICAtMC4wNjk4ODM4LCAwLjE3MDQ0MiwgMC45ODI4ODYsIDAuMCxcbiAgICAwLjY4NzgxNSwgLTAuNDg0NzQ4LCAwLjU0MDMwNiwgMC4wLFxuICAgIDAuNTQzNzAzLCAtMC41MzQ0NDYsIC0wLjY0NzExMiwgMC4wLFxuICAgIDAuOTcxODYsIDAuMTg0MzkxLCAtMC4xNDY1ODgsIDAuMCxcbiAgICAwLjcwNzA4NCwgMC40ODU3MTMsIC0wLjUxMzkyMSwgMC4wLFxuICAgIDAuOTQyMzAyLCAwLjMzMTk0NSwgMC4wNDMzNDgsIDAuMCxcbiAgICAwLjQ5OTA4NCwgMC41OTk5MjIsIDAuNjI1MzA3LCAwLjAsXG4gICAgLTAuMjg5MjAzLCAwLjIxMTEwNywgMC45MzM3LCAwLjAsXG4gICAgMC40MTI0MzMsIC0wLjcxNjY3LCAtMC41NjIzOSwgMC4wLFxuICAgIDAuODc3MjEsIC0wLjA4MjgxNiwgMC40NzI5MSwgMC4wLFxuICAgIC0wLjQyMDY4NSwgLTAuMjE0Mjc4LCAwLjg4MTUzOCwgMC4wLFxuICAgIDAuNzUyNTU4LCAtMC4wMzkxNTc5LCAwLjY1NzM2MSwgMC4wLFxuICAgIDAuMDc2NTcyNSwgLTAuOTk2Nzg5LCAwLjAyMzQwODIsIDAuMCxcbiAgICAtMC41NDQzMTIsIC0wLjMwOTQzNSwgLTAuNzc5NzI3LCAwLjAsXG4gICAgLTAuNDU1MzU4LCAtMC40MTU1NzIsIDAuNzg3MzY4LCAwLjAsXG4gICAgLTAuODc0NTg2LCAwLjQ4Mzc0NiwgMC4wMzMwMTMxLCAwLjAsXG4gICAgMC4yNDUxNzIsIC0wLjA4Mzg2MjMsIDAuOTY1ODQ2LCAwLjAsXG4gICAgMC4zODIyOTMsIC0wLjQzMjgxMywgMC44MTY0MSwgMC4wLFxuICAgIC0wLjI4NzczNSwgLTAuOTA1NTE0LCAwLjMxMTg1MywgMC4wLFxuICAgIC0wLjY2NzcwNCwgMC43MDQ5NTUsIC0wLjIzOTE4NiwgMC4wLFxuICAgIDAuNzE3ODg1LCAtMC40NjQwMDIsIC0wLjUxODk4MywgMC4wLFxuICAgIDAuOTc2MzQyLCAtMC4yMTQ4OTUsIDAuMDI0MDA1MywgMC4wLFxuICAgIC0wLjA3MzMwOTYsIC0wLjkyMTEzNiwgMC4zODIyNzYsIDAuMCxcbiAgICAtMC45ODYyODQsIDAuMTUxMjI0LCAtMC4wNjYxMzc5LCAwLjAsXG4gICAgLTAuODk5MzE5LCAtMC40Mjk2NzEsIDAuMDgxMjkwOCwgMC4wLFxuICAgIDAuNjUyMTAyLCAtMC43MjQ2MjUsIDAuMjIyODkzLCAwLjAsXG4gICAgMC4yMDM3NjEsIDAuNDU4MDIzLCAtMC44NjUyNzIsIDAuMCxcbiAgICAtMC4wMzAzOTYsIDAuNjk4NzI0LCAtMC43MTQ3NDUsIDAuMCxcbiAgICAtMC40NjAyMzIsIDAuODM5MTM4LCAwLjI4OTg4NywgMC4wLFxuICAgIC0wLjA4OTg2MDIsIDAuODM3ODk0LCAwLjUzODM4NiwgMC4wLFxuICAgIC0wLjczMTU5NSwgMC4wNzkzNzg0LCAwLjY3NzEwMiwgMC4wLFxuICAgIC0wLjQ0NzIzNiwgLTAuNzg4Mzk3LCAwLjQyMjM4NiwgMC4wLFxuICAgIDAuMTg2NDgxLCAwLjY0NTg1NSwgLTAuNzQwMzM1LCAwLjAsXG4gICAgLTAuMjU5MDA2LCAwLjkzNTQ2MywgMC4yNDA0NjcsIDAuMCxcbiAgICAwLjQ0NTgzOSwgMC44MTk2NTUsIC0wLjM1OTcxMiwgMC4wLFxuICAgIDAuMzQ5OTYyLCAwLjc1NTAyMiwgLTAuNTU0NDk5LCAwLjAsXG4gICAgLTAuOTk3MDc4LCAtMC4wMzU5NTc3LCAwLjA2NzM5NzcsIDAuMCxcbiAgICAtMC40MzExNjMsIC0wLjE0NzUxNiwgLTAuODkwMTMzLCAwLjAsXG4gICAgMC4yOTk2NDgsIC0wLjYzOTE0LCAwLjcwODMxNiwgMC4wLFxuICAgIDAuMzk3MDQzLCAwLjU2NjUyNiwgLTAuNzIyMDg0LCAwLjAsXG4gICAgLTAuNTAyNDg5LCAwLjQzODMwOCwgLTAuNzQ1MjQ2LCAwLjAsXG4gICAgMC4wNjg3MjM1LCAwLjM1NDA5NywgMC45MzI2OCwgMC4wLFxuICAgIC0wLjA0NzY2NTEsIC0wLjQ2MjU5NywgMC44ODUyODYsIDAuMCxcbiAgICAtMC4yMjE5MzQsIDAuOTAwNzM5LCAtMC4zNzMzODMsIDAuMCxcbiAgICAtMC45NTYxMDcsIC0wLjIyNTY3NiwgMC4xODY4OTMsIDAuMCxcbiAgICAtMC4xODc2MjcsIDAuMzkxNDg3LCAtMC45MDA4NTIsIDAuMCxcbiAgICAtMC4yMjQyMDksIC0wLjMxNTQwNSwgMC45MjIwOSwgMC4wLFxuICAgIC0wLjczMDgwNywgLTAuNTM3MDY4LCAwLjQyMTI4MywgMC4wLFxuICAgIC0wLjAzNTMxMzUsIC0wLjgxNjc0OCwgMC41NzU5MTMsIDAuMCxcbiAgICAtMC45NDEzOTEsIDAuMTc2OTkxLCAtMC4yODcxNTMsIDAuMCxcbiAgICAtMC4xNTQxNzQsIDAuMzkwNDU4LCAwLjkwNzYyLCAwLjAsXG4gICAgLTAuMjgzODQ3LCAwLjUzMzg0MiwgMC43OTY1MTksIDAuMCxcbiAgICAtMC40ODI3MzcsIC0wLjg1MDQ0OCwgMC4yMDkwNTIsIDAuMCxcbiAgICAtMC42NDkxNzUsIDAuNDc3NzQ4LCAwLjU5MTg4NiwgMC4wLFxuICAgIDAuODg1MzczLCAtMC40MDUzODcsIC0wLjIyNzU0MywgMC4wLFxuICAgIC0wLjE0NzI2MSwgMC4xODE2MjMsIC0wLjk3MjI3OSwgMC4wLFxuICAgIDAuMDk1OTIzNiwgLTAuMTE1ODQ3LCAtMC45ODg2MjQsIDAuMCxcbiAgICAtMC44OTcyNCwgLTAuMTkxMzQ4LCAwLjM5NzkyOCwgMC4wLFxuICAgIDAuOTAzNTUzLCAtMC40Mjg0NjEsIC0wLjAwMzUwNDYxLCAwLjAsXG4gICAgMC44NDkwNzIsIC0wLjI5NTgwNywgLTAuNDM3NjkzLCAwLjAsXG4gICAgMC42NTU1MSwgMC43NDE3NTQsIC0wLjE0MTgwNCwgMC4wLFxuICAgIDAuNjE1OTgsIC0wLjE3ODY2OSwgMC43NjcyMzIsIDAuMCxcbiAgICAwLjAxMTI5NjcsIDAuOTMyMjU2LCAtMC4zNjE2MjMsIDAuMCxcbiAgICAtMC43OTMwMzEsIDAuMjU4MDEyLCAwLjU1MTg0NSwgMC4wLFxuICAgIDAuNDIxOTMzLCAwLjQ1NDMxMSwgMC43ODQ1ODUsIDAuMCxcbiAgICAtMC4zMTk5OTMsIDAuMDQwMTYxOCwgLTAuOTQ2NTY4LCAwLjAsXG4gICAgLTAuODE1NzEsIDAuNTUxMzA3LCAtMC4xNzUxNTEsIDAuMCxcbiAgICAtMC4zNzc2NDQsIDAuMDAzMjIzMTMsIDAuOTI1OTQ1LCAwLjAsXG4gICAgMC4xMjk3NTksIC0wLjY2NjU4MSwgLTAuNzM0MDUyLCAwLjAsXG4gICAgMC42MDE5MDEsIC0wLjY1NDIzNywgLTAuNDU3OTE5LCAwLjAsXG4gICAgLTAuOTI3NDYzLCAtMC4wMzQzNTc2LCAtMC4zNzIzMzQsIDAuMCxcbiAgICAtMC40Mzg2NjMsIC0wLjg2ODMwMSwgLTAuMjMxNTc4LCAwLjAsXG4gICAgLTAuNjQ4ODQ1LCAtMC43NDkxMzgsIC0wLjEzMzM4NywgMC4wLFxuICAgIDAuNTA3MzkzLCAtMC41ODgyOTQsIDAuNjI5NjUzLCAwLjAsXG4gICAgMC43MjY5NTgsIDAuNjIzNjY1LCAwLjI4NzM1OCwgMC4wLFxuICAgIDAuNDExMTU5LCAwLjM2NzYxNCwgLTAuODM0MTUxLCAwLjAsXG4gICAgMC44MDYzMzMsIDAuNTg1MTE3LCAtMC4wODY0MDE2LCAwLjAsXG4gICAgMC4yNjM5MzUsIC0wLjg4MDg3NiwgMC4zOTI5MzIsIDAuMCxcbiAgICAwLjQyMTU0NiwgLTAuMjAxMzM2LCAwLjg4NDE3NCwgMC4wLFxuICAgIC0wLjY4MzE5OCwgLTAuNTY5NTU3LCAtMC40NTY5OTYsIDAuMCxcbiAgICAtMC4xMTcxMTYsIC0wLjA0MDY2NTQsIC0wLjk5MjI4NSwgMC4wLFxuICAgIC0wLjY0MzY3OSwgLTAuMTA5MTk2LCAtMC43NTc0NjUsIDAuMCxcbiAgICAtMC41NjE1NTksIC0wLjYyOTg5LCAwLjUzNjU1NCwgMC4wLFxuICAgIDAuMDYyODQyMiwgMC4xMDQ2NzcsIC0wLjk5MjUxOSwgMC4wLFxuICAgIDAuNDgwNzU5LCAtMC4yODY3LCAtMC44Mjg2NTgsIDAuMCxcbiAgICAtMC4yMjg1NTksIC0wLjIyODk2NSwgLTAuOTQ2MjIyLCAwLjAsXG4gICAgLTAuMTAxOTQsIC0wLjY1NzA2LCAtMC43NDY5MTQsIDAuMCxcbiAgICAwLjA2ODkxOTMsIC0wLjY3ODIzNiwgMC43MzE2MDUsIDAuMCxcbiAgICAwLjQwMTAxOSwgLTAuNzU0MDI2LCAwLjUyMDIyLCAwLjAsXG4gICAgLTAuNzQyMTQxLCAwLjU0NzA4MywgLTAuMzg3MjAzLCAwLjAsXG4gICAgLTAuMDAyMTA2MDMsIC0wLjc5NjQxNywgLTAuNjA0NzQ1LCAwLjAsXG4gICAgMC4yOTY3MjUsIC0wLjQwOTkwOSwgLTAuODYyNTEzLCAwLjAsXG4gICAgLTAuMjYwOTMyLCAtMC43OTgyMDEsIDAuNTQyOTQ1LCAwLjAsXG4gICAgLTAuNjQxNjI4LCAwLjc0MjM3OSwgMC4xOTI4MzgsIDAuMCxcbiAgICAtMC4xODYwMDksIC0wLjEwMTUxNCwgMC45NzcyOSwgMC4wLFxuICAgIDAuMTA2NzExLCAtMC45NjIwNjcsIDAuMjUxMDc5LCAwLjAsXG4gICAgLTAuNzQzNDk5LCAwLjMwOTg4LCAtMC41OTI2MDcsIDAuMCxcbiAgICAtMC43OTU4NTMsIC0wLjYwNTA2NiwgLTAuMDIyNjYwNywgMC4wLFxuICAgIC0wLjgyODY2MSwgLTAuNDE5NDcxLCAtMC4zNzA2MjgsIDAuMCxcbiAgICAwLjA4NDcyMTgsIC0wLjQ4OTgxNSwgLTAuODY3NywgMC4wLFxuICAgIC0wLjM4MTQwNSwgMC43ODgwMTksIC0wLjQ4MzI3NiwgMC4wLFxuICAgIDAuMjgyMDQyLCAtMC45NTMzOTQsIDAuMTA3MjA1LCAwLjAsXG4gICAgMC41MzA3NzQsIDAuODQ3NDEzLCAwLjAxMzA2OTYsIDAuMCxcbiAgICAwLjA1MTUzOTcsIDAuOTIyNTI0LCAwLjM4MjQ4NCwgMC4wLFxuICAgIC0wLjYzMTQ2NywgLTAuNzA5MDQ2LCAwLjMxMzg1MiwgMC4wLFxuICAgIDAuNjg4MjQ4LCAwLjUxNzI3MywgMC41MDg2NjgsIDAuMCxcbiAgICAwLjY0NjY4OSwgLTAuMzMzNzgyLCAtMC42ODU4NDUsIDAuMCxcbiAgICAtMC45MzI1MjgsIC0wLjI0NzUzMiwgLTAuMjYyOTA2LCAwLjAsXG4gICAgMC42MzA2MDksIDAuNjg3NTcsIC0wLjM1OTk3MywgMC4wLFxuICAgIDAuNTc3ODA1LCAtMC4zOTQxODksIDAuNzE0NjczLCAwLjAsXG4gICAgLTAuODg3ODMzLCAtMC40MzczMDEsIC0wLjE0MzI1LCAwLjAsXG4gICAgMC42OTA5ODIsIDAuMTc0MDAzLCAwLjcwMTYxNywgMC4wLFxuICAgIC0wLjg2NjcwMSwgMC4wMTE4MTgyLCAwLjQ5ODY4OSwgMC4wLFxuICAgIC0wLjQ4Mjg3NiwgMC43MjcxNDMsIDAuNDg3OTQ5LCAwLjAsXG4gICAgLTAuNTc3NTY3LCAwLjY4MjU5MywgLTAuNDQ3NzUyLCAwLjAsXG4gICAgMC4zNzM3NjgsIDAuMDk4Mjk5MSwgMC45MjIyOTksIDAuMCxcbiAgICAwLjE3MDc0NCwgMC45NjQyNDMsIC0wLjIwMjY4NywgMC4wLFxuICAgIDAuOTkzNjU0LCAtMC4wMzU3OTEsIC0wLjEwNjYzMiwgMC4wLFxuICAgIDAuNTg3MDY1LCAwLjQxNDMsIC0wLjY5NTQ5MywgMC4wLFxuICAgIC0wLjM5NjUwOSwgMC4yNjUwOSwgLTAuODc4OTI0LCAwLjAsXG4gICAgLTAuMDg2Njg1MywgMC44MzU1MywgLTAuNTQyNTYzLCAwLjAsXG4gICAgMC45MjMxOTMsIDAuMTMzMzk4LCAtMC4zNjA0NDMsIDAuMCxcbiAgICAwLjAwMzc5MTA4LCAtMC4yNTg2MTgsIDAuOTY1OTcyLCAwLjAsXG4gICAgMC4yMzkxNDQsIDAuMjQ1MTU0LCAtMC45Mzk1MjYsIDAuMCxcbiAgICAwLjc1ODczMSwgLTAuNTU1ODcxLCAwLjMzOTYxLCAwLjAsXG4gICAgMC4yOTUzNTUsIDAuMzA5NTEzLCAwLjkwMzg2MiwgMC4wLFxuICAgIDAuMDUzMTIyMiwgLTAuOTEwMDMsIC0wLjQxMTEyNCwgMC4wLFxuICAgIDAuMjcwNDUyLCAwLjAyMjk0MzksIC0wLjk2MjQ2LCAwLjAsXG4gICAgMC41NjM2MzQsIDAuMDMyNDM1MiwgMC44MjUzODcsIDAuMCxcbiAgICAwLjE1NjMyNiwgMC4xNDczOTIsIDAuOTc2NjQ2LCAwLjAsXG4gICAgLTAuMDQxMDE0MSwgMC45ODE4MjQsIDAuMTg1MzA5LCAwLjAsXG4gICAgLTAuMzg1NTYyLCAtMC41NzYzNDMsIC0wLjcyMDUzNSwgMC4wLFxuICAgIDAuMzg4MjgxLCAwLjkwNDQ0MSwgMC4xNzY3MDIsIDAuMCxcbiAgICAwLjk0NTU2MSwgLTAuMTkyODU5LCAtMC4yNjIxNDYsIDAuMCxcbiAgICAwLjg0NDUwNCwgMC41MjAxOTMsIDAuMTI3MzI1LCAwLjAsXG4gICAgMC4wMzMwODkzLCAwLjk5OTEyMSwgLTAuMDI1NzUwNSwgMC4wLFxuICAgIC0wLjU5MjYxNiwgLTAuNDgyNDc1LCAtMC42NDQ5OTksIDAuMCxcbiAgICAwLjUzOTQ3MSwgMC42MzEwMjQsIC0wLjU1NzQ3NiwgMC4wLFxuICAgIDAuNjU1ODUxLCAtMC4wMjczMTksIC0wLjc1NDM5NiwgMC4wLFxuICAgIDAuMjc0NDY1LCAwLjg4NzY1OSwgMC4zNjk3NzIsIDAuMCxcbiAgICAtMC4xMjM0MTksIDAuOTc1MTc3LCAtMC4xODM4NDIsIDAuMCxcbiAgICAtMC4yMjM0MjksIDAuNzA4MDQ1LCAwLjY2OTg5LCAwLjAsXG4gICAgLTAuOTA4NjU0LCAwLjE5NjMwMiwgMC4zNjg1MjgsIDAuMCxcbiAgICAtMC45NTc1OSwgLTAuMDA4NjM3MDgsIDAuMjg4MDA1LCAwLjAsXG4gICAgMC45NjA1MzUsIDAuMDMwNTkyLCAwLjI3NjQ3MiwgMC4wLFxuICAgIC0wLjQxMzE0NiwgMC45MDc1MzcsIDAuMDc1NDE2MSwgMC4wLFxuICAgIC0wLjg0Nzk5MiwgMC4zNTA4NDksIC0wLjM5NzI1OSwgMC4wLFxuICAgIDAuNjE0NzM2LCAwLjM5NTg0MSwgMC42ODIyMSwgMC4wLFxuICAgIC0wLjUwMzUwNCwgLTAuNjY2MTI4LCAtMC41NTAyMzQsIDAuMCxcbiAgICAtMC4yNjg4MzMsIC0wLjczODUyNCwgLTAuNjE4MzE0LCAwLjAsXG4gICAgMC43OTI3MzcsIC0wLjYwMDAxLCAtMC4xMDc1MDIsIDAuMCxcbiAgICAtMC42Mzc1ODIsIDAuNTA4MTQ0LCAtMC41NzkwMzIsIDAuMCxcbiAgICAwLjc1MDEwNSwgMC4yODIxNjUsIC0wLjU5ODEwMSwgMC4wLFxuICAgIC0wLjM1MTE5OSwgLTAuMzkyMjk0LCAtMC44NTAxNTUsIDAuMCxcbiAgICAwLjI1MDEyNiwgLTAuOTYwOTkzLCAtMC4xMTgwMjUsIDAuMCxcbiAgICAtMC43MzIzNDEsIDAuNjgwOTA5LCAtMC4wMDYzMjc0LCAwLjAsXG4gICAgLTAuNzYwNjc0LCAtMC4xNDEwMDksIDAuNjMzNjM0LCAwLjAsXG4gICAgMC4yMjI4MjMsIC0wLjMwNDAxMiwgMC45MjYyNDMsIDAuMCxcbiAgICAwLjIwOTE3OCwgMC41MDU2NzEsIDAuODM2OTg0LCAwLjAsXG4gICAgMC43NTc5MTQsIC0wLjU2NjI5LCAtMC4zMjM4NTcsIDAuMCxcbiAgICAtMC43ODI5MjYsIC0wLjMzOTE5NiwgMC41MjE1MSwgMC4wLFxuICAgIC0wLjQ2Mjk1MiwgMC41ODU1NjUsIDAuNjY1NDI0LCAwLjAsXG4gICAgMC42MTg3OSwgMC4xOTQxMTksIC0wLjc2MTE5NCwgMC4wLFxuICAgIDAuNzQxMzg4LCAtMC4yNzY3NDMsIDAuNjExMzU3LCAwLjAsXG4gICAgMC43MDc1NzEsIDAuNzAyNjIxLCAwLjA3NTI4NzIsIDAuMCxcbiAgICAwLjE1NjU2MiwgMC44MTk5NzcsIDAuNTUwNTY5LCAwLjAsXG4gICAgLTAuNzkzNjA2LCAwLjQ0MDIxNiwgMC40MiwgMC4wLFxuICAgIDAuMjM0NTQ3LCAwLjg4NTMwOSwgLTAuNDAxNTE3LCAwLjAsXG4gICAgMC4xMzI1OTgsIDAuODAxMTUsIC0wLjU4MzU5LCAwLjAsXG4gICAgLTAuMzc3ODk5LCAtMC42MzkxNzksIDAuNjY5ODA4LCAwLjAsXG4gICAgLTAuODY1OTkzLCAtMC4zOTY0NjUsIDAuMzA0NzQ4LCAwLjAsXG4gICAgLTAuNjI0ODE1LCAtMC40NDI4MywgMC42NDMwNDYsIDAuMCxcbiAgICAtMC40ODU3MDUsIDAuODI1NjE0LCAtMC4yODcxNDYsIDAuMCxcbiAgICAtMC45NzE3ODgsIDAuMTc1NTM1LCAwLjE1NzUyOSwgMC4wLFxuICAgIC0wLjQ1NjAyNywgMC4zOTI2MjksIDAuNzk4Njc1LCAwLjAsXG4gICAgLTAuMDEwNDQ0MywgMC41MjE2MjMsIC0wLjg1MzExMiwgMC4wLFxuICAgIC0wLjY2MDU3NSwgLTAuNzQ1MTksIDAuMDkxMjgyLCAwLjAsXG4gICAgLTAuMDE1NzY5OCwgLTAuMzA3NDc1LCAtMC45NTE0MjUsIDAuMCxcbiAgICAtMC42MDM0NjcsIC0wLjI1MDE5MiwgMC43NTcxMjEsIDAuMCxcbiAgICAwLjUwNjg3NiwgMC4yNTAwNiwgMC44MjQ5NTIsIDAuMCxcbiAgICAwLjI1NTQwNCwgMC45NjY3OTQsIDAuMDA4ODQ0OTgsIDAuMCxcbiAgICAwLjQ2Njc2NCwgLTAuODc0MjI4LCAtMC4xMzM2MjUsIDAuMCxcbiAgICAwLjQ3NTA3NywgLTAuMDY4MjM1MSwgLTAuODc3Mjk1LCAwLjAsXG4gICAgLTAuMjI0OTY3LCAtMC45Mzg5NzIsIC0wLjI2MDIzMywgMC4wLFxuICAgIC0wLjM3NzkyOSwgLTAuODE0NzU3LCAtMC40Mzk3MDUsIDAuMCxcbiAgICAtMC4zMDU4NDcsIDAuNTQyMzMzLCAtMC43ODI1MTcsIDAuMCxcbiAgICAwLjI2NjU4LCAtMC45MDI5MDUsIC0wLjMzNzE5MSwgMC4wLFxuICAgIDAuMDI3NTc3MywgMC4zMjIxNTgsIC0wLjk0NjI4NCwgMC4wLFxuICAgIDAuMDE4NTQyMiwgMC43MTYzNDksIDAuNjk3NDk2LCAwLjAsXG4gICAgLTAuMjA0ODMsIDAuOTc4NDE2LCAwLjAyNzMzNzEsIDAuMCxcbiAgICAtMC44OTgyNzYsIDAuMzczOTY5LCAwLjIzMDc1MiwgMC4wLFxuICAgIC0wLjAwOTA5Mzc4LCAwLjU0NjU5NCwgMC44MzczNDksIDAuMCxcbiAgICAwLjY2MDIsIC0wLjc1MTA4OSwgMC4wMDA5NTkyMzYsIDAuMCxcbiAgICAwLjg1NTMwMSwgLTAuMzAzMDU2LCAwLjQyMDI1OSwgMC4wLFxuICAgIDAuNzk3MTM4LCAwLjA2MjMwMTMsIC0wLjYwMDU3NCwgMC4wLFxuICAgIDAuNDg5NDcsIC0wLjg2NjgxMywgMC4wOTUxNTA5LCAwLjAsXG4gICAgMC4yNTExNDIsIDAuNjc0NTMxLCAwLjY5NDIxNiwgMC4wLFxuICAgIC0wLjU3ODQyMiwgLTAuNzM3MzczLCAtMC4zNDg4NjcsIDAuMCxcbiAgICAtMC4yNTQ2ODksIC0wLjUxNDgwNywgMC44MTg2MDEsIDAuMCxcbiAgICAwLjM3NDk3MiwgMC43NjE2MTIsIDAuNTI4NTI5LCAwLjAsXG4gICAgMC42NDAzMDMsIC0wLjczNDI3MSwgLTAuMjI1NTE3LCAwLjAsXG4gICAgLTAuNjM4MDc2LCAwLjI4NTUyNywgMC43MTUwNzUsIDAuMCxcbiAgICAwLjc3Mjk1NiwgLTAuMTU5ODQsIC0wLjYxMzk5NSwgMC4wLFxuICAgIDAuNzk4MjE3LCAtMC41OTA2MjgsIDAuMTE4MzU2LCAwLjAsXG4gICAgLTAuOTg2Mjc2LCAtMC4wNTc4MzM3LCAtMC4xNTQ2NDQsIDAuMCxcbiAgICAtMC4zMTI5ODgsIC0wLjk0NTQ5LCAwLjA4OTkyNzIsIDAuMCxcbiAgICAtMC40OTczMzgsIDAuMTc4MzI1LCAwLjg0OTAzMiwgMC4wLFxuICAgIC0wLjEwMTEzNiwgLTAuOTgxMDE0LCAwLjE2NTQ3NywgMC4wLFxuICAgIC0wLjUyMTY4OCwgMC4wNTUzNDM0LCAtMC44NTEzMzksIDAuMCxcbiAgICAtMC43ODYxODIsIC0wLjU4MzgxNCwgMC4yMDI2NzgsIDAuMCxcbiAgICAtMC41NjUxOTEsIDAuODIxODU4LCAtMC4wNzE0NjU4LCAwLjAsXG4gICAgMC40Mzc4OTUsIDAuMTUyNTk4LCAtMC44ODU5ODEsIDAuMCxcbiAgICAtMC45MjM5NCwgMC4zNTM0MzYsIC0wLjE0NjM1LCAwLjAsXG4gICAgMC4yMTIxODksIC0wLjgxNTE2MiwgLTAuNTM4OTY5LCAwLjAsXG4gICAgLTAuODU5MjYyLCAwLjE0MzQwNSwgLTAuNDkxMDI0LCAwLjAsXG4gICAgMC45OTEzNTMsIDAuMTEyODE0LCAwLjA2NzAyNzMsIDAuMCxcbiAgICAwLjAzMzc4ODQsIC0wLjk3OTg5MSwgLTAuMTk2NjU0LCAwLjAsXG5dO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yVGFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbXBsZXRlciA9IHZvaWQgMDtcclxuY2xhc3MgQ29tcGxldGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcGxldGVyID0gQ29tcGxldGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRpc3BsYXkgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBBbiBPcGVuR0wtY2FwYWJsZSBkaXNwbGF5IGJhc2VkIG9uIEhUTUw1IENhbnZhc1xyXG4gKi9cclxuY2xhc3MgRGlzcGxheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICBpZiAoY2FudmFzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMjgwO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA3MjA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYW52YXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlYkdMIDIuMFxyXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuICAgICAgICBpZiAoIXRoaXMuZ2wpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG9yIG1hY2hpbmUgbWF5IG5vdCBzdXBwb3J0IGl0LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcclxuICAgICAgICB0aGlzLmdsLmNsZWFyRGVwdGgoMS4wKTtcclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xyXG4gICAgICAgIHRoaXMuZ2wuZGVwdGhGdW5jKHRoaXMuZ2wuTEVRVUFMKTtcclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcclxuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZ2wuZnJvbnRGYWNlKHRoaXMuZ2wuQ0NXKTtcclxuICAgICAgICAvLyB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XHJcbiAgICAgICAgLy8gdGhpcy5nbC5jdWxsRmFjZSh0aGlzLmdsLkJBQ0spO1xyXG4gICAgfVxyXG4gICAgY2xlYXIociwgZywgYiwgYSA9IDEuMCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgKF9hID0gdGhpcy5nbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsZWFyQ29sb3IociwgZywgYiwgYSk7XHJcbiAgICAgICAgKF9iID0gdGhpcy5nbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICB9XHJcbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAoX2EgPSB0aGlzLmdsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eudmlld3BvcnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDsgfVxyXG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDsgfVxyXG4gICAgZ2V0IGFzcGVjdFJhdGlvKCkgeyByZXR1cm4gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0OyB9XHJcbn1cclxuZXhwb3J0cy5EaXNwbGF5ID0gRGlzcGxheTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xyXG5jb25zdCBzaGFkZXJfMSA9IHJlcXVpcmUoXCIuL3NoYWRlclwiKTtcclxuY29uc3QgbWVzaF8xID0gcmVxdWlyZShcIi4vbWVzaFwiKTtcclxuY29uc3QgdGV4dHVyZV8xID0gcmVxdWlyZShcIi4vdGV4dHVyZVwiKTtcclxuY29uc3QgcHJvY2VkdXJhbF90ZXh0dXJlXzEgPSByZXF1aXJlKFwiLi9wcm9jZWR1cmFsX3RleHR1cmVcIik7XHJcbmNvbnN0IGxvYWRlcnNfMSA9IHJlcXVpcmUoXCIuL2xvYWRlcnNcIik7XHJcbmxldCBkaXNwbGF5ID0gbmV3IGRpc3BsYXlfMS5EaXNwbGF5KG51bGwpO1xyXG5sZXQgYmFzaWNWUyA9IGAjdmVyc2lvbiAzMDAgZXNcclxuaW4gdmVjMyBhX3Bvc2l0aW9uO1xyXG5pbiB2ZWMzIGFfbm9ybWFsO1xyXG5pbiB2ZWMzIGFfdGFuZ2VudDtcclxuaW4gdmVjMiBhX3V2O1xyXG5pbiB2ZWM0IGFfY29sb3I7XHJcblxyXG51bmlmb3JtIG1hdDQgdV9tb2RlbDtcclxudW5pZm9ybSBtYXQ0IHVfdmlldztcclxudW5pZm9ybSBtYXQ0IHVfcHJvamVjdGlvbjtcclxuXHJcbm91dCB2ZWMzIHZfbm9ybWFsO1xyXG5vdXQgdmVjMiB2X3V2O1xyXG5cclxudm9pZCBtYWluKCkge1xyXG4gICAgbWF0NCBtb2RlbFZpZXcgPSB1X3ZpZXcgKiB1X21vZGVsO1xyXG4gICAgZ2xfUG9zaXRpb24gPSB1X3Byb2plY3Rpb24gKiBtb2RlbFZpZXcgKiB2ZWM0KGFfcG9zaXRpb24sIDEuMCk7XHJcblxyXG4gICAgbWF0MyBub3JtYWxNYXRyaXggPSBtYXQzKHRyYW5zcG9zZShpbnZlcnNlKG1vZGVsVmlldykpKTtcclxuICAgIHZfbm9ybWFsID0gbm9ybWFsTWF0cml4ICogYV9ub3JtYWw7XHJcblxyXG4gICAgdl91diA9IGFfdXY7XHJcbn1gO1xyXG5sZXQgYmFzaWNGUyA9IGAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5cclxub3V0IHZlYzQgZnJhZ0NvbG9yO1xyXG5pbiB2ZWMzIHZfbm9ybWFsO1xyXG5pbiB2ZWMyIHZfdXY7XHJcblxyXG51bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmU7XHJcblxyXG52b2lkIG1haW4oKSB7XHJcbiAgICBmbG9hdCBsYW1iZXJ0ID0gbWF4KGRvdChub3JtYWxpemUodl9ub3JtYWwpLCBub3JtYWxpemUodmVjMygwLCAwLCAtMSkpKSwgMC4wKTtcclxuICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlKHVfdGV4dHVyZSwgdl91dik7XHJcbiAgICBmcmFnQ29sb3IgPSB2ZWM0KHZlYzMobGFtYmVydCksIDEuMCkgKiB0ZXhDb2xvcjtcclxufWA7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGxldCBzaGFkZXIgPSBuZXcgc2hhZGVyXzEuU2hhZGVyKGRpc3BsYXkuZ2wpXHJcbiAgICAgICAgICAgIC5iaW5kQXR0cmlidXRlTG9jYXRpb24oXCJhX3Bvc2l0aW9uXCIsIDApXHJcbiAgICAgICAgICAgIC5iaW5kQXR0cmlidXRlTG9jYXRpb24oXCJhX25vcm1hbFwiLCAxKVxyXG4gICAgICAgICAgICAuYmluZEF0dHJpYnV0ZUxvY2F0aW9uKFwiYV90YW5nZW50XCIsIDIpXHJcbiAgICAgICAgICAgIC5iaW5kQXR0cmlidXRlTG9jYXRpb24oXCJhX3V2XCIsIDMpXHJcbiAgICAgICAgICAgIC5iaW5kQXR0cmlidXRlTG9jYXRpb24oXCJhX2NvbG9yXCIsIDQpXHJcbiAgICAgICAgICAgIC5lbmFibGVWZXJ0ZXgoYmFzaWNWUylcclxuICAgICAgICAgICAgLmVuYWJsZUZyYWdtZW50KGJhc2ljRlMpXHJcbiAgICAgICAgICAgIC5saW5rKCk7XHJcbiAgICAgICAgLy8gbGV0IHRleCA9IGF3YWl0IFRleHR1cmUyRC5mcm9tSW1hZ2UoZGlzcGxheS5nbCEsIFwibWUuanBnXCIpO1xyXG4gICAgICAgIGxldCBpbWcgPSB5aWVsZCAoMCwgbG9hZGVyc18xLmxvYWRJbWFnZSkoXCJtZS5qcGdcIik7XHJcbiAgICAgICAgbGV0IHJlZERvbnV0ID0gKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLm1peCkoKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLnNvbGlkKShwcm9jZWR1cmFsX3RleHR1cmVfMS5Db2xvci5mcm9tSGV4KFwiI2ZmZmYwMFwiKSksICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5zYW1wbGUpKGltZywgcHJvY2VkdXJhbF90ZXh0dXJlXzEuRmlsdGVyLkxpbmVhciksICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5kZWZvcm0pKCgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5zbW9vdGhTdGVwKSgwLjMsIDAuMzEsICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5ibGVuZCkoKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLmNpcmNsZSkoMC41KSwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLmNpcmNsZSkoMC4yOCksIHByb2NlZHVyYWxfdGV4dHVyZV8xLkJsZW5kTW9kZS5TdWJ0cmFjdCkpLCAoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEucGVybGluKSgyLCAyKSwgMC4wNCkpO1xyXG4gICAgICAgIGxldCB0ZXhHZW4gPSAoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEubWl4KSgoMCwgcHJvY2VkdXJhbF90ZXh0dXJlXzEuc29saWQpKHByb2NlZHVyYWxfdGV4dHVyZV8xLkNvbG9yLmZyb21IZXgoXCIjMzYzYjQ1XCIpKSwgKDAsIHByb2NlZHVyYWxfdGV4dHVyZV8xLnNvbGlkKShwcm9jZWR1cmFsX3RleHR1cmVfMS5Db2xvci5mcm9tSGV4KFwiIzk0NTQ0ZFwiKSksICgwLCBwcm9jZWR1cmFsX3RleHR1cmVfMS5icmlja3MpKDQuMCwgOC4wKSk7XHJcbiAgICAgICAgbGV0IHRleCA9IHRleHR1cmVfMS5UZXh0dXJlMkQucHJvY2VkdXJhbChkaXNwbGF5LmdsLCAyNTYsIDI1NiwgcmVkRG9udXQpO1xyXG4gICAgICAgIHRleC5zZXRGaWx0ZXJpbmcoZGlzcGxheS5nbC5MSU5FQVJfTUlQTUFQX0xJTkVBUiwgZGlzcGxheS5nbC5MSU5FQVIpO1xyXG4gICAgICAgIGxldCBtZXNoID0gbmV3IG1lc2hfMS5NZXNoQnVpbGRlcigpLmFkZEN1YmUoKS5yZWNhbGN1bGF0ZU5vcm1hbHMoKS5idWlsZChkaXNwbGF5LmdsKTtcclxuICAgICAgICBsZXQgcm90ID0gMDtcclxuICAgICAgICBmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5LmNsZWFyKDAuMSwgMC40LCAwLjcsIDEuMCk7XHJcbiAgICAgICAgICAgIHRleC5iaW5kKDApO1xyXG4gICAgICAgICAgICBzaGFkZXIuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIHNoYWRlci5zZXRUZXh0dXJlKFwidV90ZXh0dXJlXCIsIDApO1xyXG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBuZXcgc2hhZGVyXzEuTWF0cml4NCgpLnJvdGF0ZVkocm90KS5yb3RhdGVYKHJvdCAqIDAuNSkucm90YXRlWihyb3QgKiAwLjI1KTtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSBuZXcgc2hhZGVyXzEuTWF0cml4NCgpLnRyYW5zbGF0ZShbMCwgMCwgLTVdKTtcclxuICAgICAgICAgICAgbGV0IHByb2ogPSBuZXcgc2hhZGVyXzEuTWF0cml4NCgpLnBlcnNwZWN0aXZlKHsgZm92OiBNYXRoLlBJIC8gNCwgYXNwZWN0OiBkaXNwbGF5LmFzcGVjdFJhdGlvLCBuZWFyOiAwLjEsIGZhcjogMTAwMCB9KTtcclxuICAgICAgICAgICAgc2hhZGVyLnNldFVuaWZvcm0oXCJ1X21vZGVsXCIsIG1vZGVsKTtcclxuICAgICAgICAgICAgc2hhZGVyLnNldFVuaWZvcm0oXCJ1X3ZpZXdcIiwgdmlldyk7XHJcbiAgICAgICAgICAgIHNoYWRlci5zZXRVbmlmb3JtKFwidV9wcm9qZWN0aW9uXCIsIHByb2opO1xyXG4gICAgICAgICAgICBtZXNoLmRyYXcoZGlzcGxheS5nbCk7XHJcbiAgICAgICAgICAgIHJvdCArPSAwLjAyO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb29wKCk7XHJcbiAgICB9KTtcclxufVxyXG5pbml0KCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubG9hZEltYWdlID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBsb2FkSW1hZ2UodXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgICAgICByZXNvbHZlKGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKGBDb3VsZCBub3QgbG9hZCBpbWFnZTogJHt1cmx9YCkpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1lc2hCdWlsZGVyID0gZXhwb3J0cy5NZXNoID0gZXhwb3J0cy5WZXJ0ZXggPSBleHBvcnRzLklCYXNlVmVydGV4ID0gdm9pZCAwO1xyXG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuY2xhc3MgSUJhc2VWZXJ0ZXgge1xyXG59XHJcbmV4cG9ydHMuSUJhc2VWZXJ0ZXggPSBJQmFzZVZlcnRleDtcclxuY2xhc3MgVmVydGV4IGV4dGVuZHMgSUJhc2VWZXJ0ZXgge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIG5vcm1hbCA9IG5ldyBjb3JlXzEuVmVjdG9yMygpLCB0YW5nZW50ID0gbmV3IGNvcmVfMS5WZWN0b3IzKCksIHV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKCksIGNvbG9yID0gbmV3IGNvcmVfMS5WZWN0b3I0KDEsIDEsIDEsIDEpKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XHJcbiAgICAgICAgdGhpcy50YW5nZW50ID0gdGFuZ2VudDtcclxuICAgICAgICB0aGlzLnV2ID0gdXY7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0U2V0dXAoZ2wpIHtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgzKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSg0KTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgNjAsIDApO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMSwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMTIpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMiwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMjQpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMywgMiwgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgMzYpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoNCwgNCwgZ2wuRkxPQVQsIGZhbHNlLCA2MCwgNDQpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJsZWF2ZSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnBvc2l0aW9uLnRvQXJyYXkobmV3IEFycmF5KDMpKSxcclxuICAgICAgICAgICAgLi4udGhpcy5ub3JtYWwudG9BcnJheShuZXcgQXJyYXkoMykpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnRhbmdlbnQudG9BcnJheShuZXcgQXJyYXkoMykpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnV2LnRvQXJyYXkobmV3IEFycmF5KDIpKSxcclxuICAgICAgICAgICAgLi4udGhpcy5jb2xvci50b0FycmF5KG5ldyBBcnJheSg0KSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXgodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLm5vcm1hbC5jbG9uZSgpLCB0aGlzLnRhbmdlbnQuY2xvbmUoKSwgdGhpcy51di5jbG9uZSgpLCB0aGlzLmNvbG9yLmNsb25lKCkpO1xyXG4gICAgfVxyXG4gICAgYWRkKG90aGVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQob3RoZXIucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9ybWFsLmFkZChvdGhlci5ub3JtYWwpO1xyXG4gICAgICAgIHRoaXMudGFuZ2VudC5hZGQob3RoZXIudGFuZ2VudCk7XHJcbiAgICAgICAgdGhpcy51di5hZGQob3RoZXIudXYpO1xyXG4gICAgICAgIHRoaXMuY29sb3IuYWRkKG90aGVyLmNvbG9yKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN1YihvdGhlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc3ViKG90aGVyLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLm5vcm1hbC5zdWIob3RoZXIubm9ybWFsKTtcclxuICAgICAgICB0aGlzLnRhbmdlbnQuc3ViKG90aGVyLnRhbmdlbnQpO1xyXG4gICAgICAgIHRoaXMudXYuc3ViKG90aGVyLnV2KTtcclxuICAgICAgICB0aGlzLmNvbG9yLnN1YihvdGhlci5jb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLm5vcm1hbC5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLnRhbmdlbnQuZGl2aWRlU2NhbGFyKHNjYWxhcik7XHJcbiAgICAgICAgdGhpcy51di5kaXZpZGVTY2FsYXIoc2NhbGFyKTtcclxuICAgICAgICB0aGlzLmNvbG9yLmRpdmlkZVNjYWxhcihzY2FsYXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbGVycChvdGhlciwgYWxwaGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlcnRleCh0aGlzLnBvc2l0aW9uLmNsb25lKCkubGVycCh0aGlzLnBvc2l0aW9uLCBvdGhlci5wb3NpdGlvbiwgYWxwaGEpLCB0aGlzLm5vcm1hbC5jbG9uZSgpLmxlcnAodGhpcy5ub3JtYWwsIG90aGVyLm5vcm1hbCwgYWxwaGEpLCB0aGlzLnRhbmdlbnQuY2xvbmUoKS5sZXJwKHRoaXMudGFuZ2VudCwgb3RoZXIudGFuZ2VudCwgYWxwaGEpLCB0aGlzLnV2LmNsb25lKCkubGVycCh0aGlzLnV2LCBvdGhlci51diwgYWxwaGEpLCB0aGlzLmNvbG9yLmNsb25lKCkubGVycCh0aGlzLmNvbG9yLCBvdGhlci5jb2xvciwgYWxwaGEpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlZlcnRleCA9IFZlcnRleDtcclxuLyoqXHJcbiAqIFdlYkdMIE1lc2ggKGRvZXMgbm90IHN0b3JlIGRhdGEpXHJcbiAqL1xyXG5jbGFzcyBNZXNoIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCB2ZXJ0aWNlcywgaW5kaWNlcykge1xyXG4gICAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNoIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgdmVydGV4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52Ym8gPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICB0aGlzLmlibyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMudmJvU2l6ZSA9IHRoaXMuaWJvU2l6ZSA9IDA7XHJcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShnbCwgdmVydGljZXMsIGluZGljZXMpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGdsLCB2ZXJ0aWNlcywgaW5kaWNlcykge1xyXG4gICAgICAgIGxldCB2ZXJ0cyA9IHZlcnRpY2VzLm1hcCgoZSkgPT4gZS5pbnRlcmxlYXZlKCkpLmZsYXQoKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8pO1xyXG4gICAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPiB0aGlzLnZib1NpemUpIHtcclxuICAgICAgICAgICAgdmVydGljZXNbMF0ubGF5b3V0U2V0dXAoZ2wpO1xyXG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cyksIGdsLkRZTkFNSUNfRFJBVyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmlibyk7XHJcbiAgICAgICAgaWYgKGluZGljZXMubGVuZ3RoID4gdGhpcy5pYm9TaXplKSB7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuRFlOQU1JQ19EUkFXKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIDAsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcclxuICAgICAgICB0aGlzLmlib1NpemUgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnZib1NpemUgPSB2ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBkcmF3KGdsLCBtb2RlID0gZ2wuVFJJQU5HTEVTKSB7XHJcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcclxuICAgICAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgdGhpcy5pYm9TaXplLCBnbC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZXNoID0gTWVzaDtcclxuLyoqXHJcbiAqIEJhc2ljIG1lc2ggcHJpbWl0aXZlcyBnZW5lcmF0b3JcclxuICovXHJcbmNsYXNzIE1lc2hCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGdldCBvZmZzZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgYWRkVmVydGV4KHZlcnRleCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMudmVydGljZXMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICBhZGRJbmRleChpbmRleCwgd2l0aE9mZnNldCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmluZGljZXMucHVzaChpbmRleCArICh3aXRoT2Zmc2V0ID8gdGhpcy5vZmZzZXQgOiAwKSk7XHJcbiAgICB9XHJcbiAgICBhZGRUcmlhbmdsZShhLCBiLCBjKSB7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYSk7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYik7XHJcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRRdWFkKGEsIGIsIGMsIGQpIHtcclxuICAgICAgICB0aGlzLmFkZEluZGV4KDApO1xyXG4gICAgICAgIHRoaXMuYWRkSW5kZXgoMSk7XHJcbiAgICAgICAgdGhpcy5hZGRJbmRleCgyKTtcclxuICAgICAgICB0aGlzLmFkZEluZGV4KDIpO1xyXG4gICAgICAgIHRoaXMuYWRkSW5kZXgoMyk7XHJcbiAgICAgICAgdGhpcy5hZGRJbmRleCgwKTtcclxuICAgICAgICBsZXQgdjEgPSB0aGlzLmFkZFZlcnRleChhLmNsb25lKCkpO1xyXG4gICAgICAgIGxldCB2MiA9IHRoaXMuYWRkVmVydGV4KGIuY2xvbmUoKSk7XHJcbiAgICAgICAgbGV0IHYzID0gdGhpcy5hZGRWZXJ0ZXgoYy5jbG9uZSgpKTtcclxuICAgICAgICBsZXQgdjQgPSB0aGlzLmFkZFZlcnRleChkLmNsb25lKCkpO1xyXG4gICAgICAgIHYxLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHYyLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDEsIDApO1xyXG4gICAgICAgIHYzLnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDEsIDEpO1xyXG4gICAgICAgIHY0LnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkQ3ViZShzaXplID0gMSkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMygtc2l6ZSwgLXNpemUsIC1zaXplKSk7XHJcbiAgICAgICAgY29uc3QgYiA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC1zaXplLCAtc2l6ZSkpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMyhzaXplLCBzaXplLCAtc2l6ZSkpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMygtc2l6ZSwgc2l6ZSwgLXNpemUpKTtcclxuICAgICAgICBjb25zdCBlID0gbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIC1zaXplLCBzaXplKSk7XHJcbiAgICAgICAgY29uc3QgZiA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC1zaXplLCBzaXplKSk7XHJcbiAgICAgICAgY29uc3QgZyA9IG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIHNpemUsIHNpemUpKTtcclxuICAgICAgICBjb25zdCBoID0gbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIHNpemUsIHNpemUpKTtcclxuICAgICAgICB0aGlzLmFkZFF1YWQoYSwgYiwgYywgZCk7XHJcbiAgICAgICAgdGhpcy5hZGRRdWFkKGgsIGcsIGYsIGUpO1xyXG4gICAgICAgIHRoaXMuYWRkUXVhZChkLCBoLCBlLCBhKTtcclxuICAgICAgICB0aGlzLmFkZFF1YWQoYiwgZiwgZywgYyk7XHJcbiAgICAgICAgdGhpcy5hZGRRdWFkKGMsIGcsIGgsIGQpO1xyXG4gICAgICAgIHRoaXMuYWRkUXVhZChhLCBlLCBmLCBiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZEljb3NhaGVkcm9uKHNpemUgPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdCA9ICgoMSArIE1hdGguc3FydCg1KSkgLyAyKSAqIHNpemU7XHJcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKC1zaXplLCB0LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIHQsIDApKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXNpemUsIC10LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHNpemUsIC10LCAwKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIC1zaXplLCB0KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIHNpemUsIHQpKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoMCwgLXNpemUsIC10KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKDAsIHNpemUsIC10KSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHQsIDAsIC1zaXplKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKHQsIDAsIHNpemUpKSxcclxuICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoLXQsIDAsIC1zaXplKSksXHJcbiAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IGNvcmVfMS5WZWN0b3IzKC10LCAwLCBzaXplKSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbXHJcbiAgICAgICAgICAgIDAsIDExLCA1LCAwLCA1LCAxLCAwLCAxLCA3LCAwLCA3LCAxMCwgMCwgMTAsIDExLFxyXG4gICAgICAgICAgICAxLCA1LCA5LCA1LCAxMSwgNCwgMTEsIDEwLCAyLCAxMCwgNywgNiwgNywgMSwgOCxcclxuICAgICAgICAgICAgMywgOSwgNCwgMywgNCwgMiwgMywgMiwgNiwgMywgNiwgOCwgMywgOCwgOSxcclxuICAgICAgICAgICAgNCwgOSwgNSwgMiwgNCwgMTEsIDYsIDIsIDEwLCA4LCA2LCA3LCA4LCAxLCA5XHJcbiAgICAgICAgXS5yZXZlcnNlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW5kZXgoaW5kaWNlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmFkZFZlcnRleCh2ZXJ0aWNlc1tpXSk7XHJcbiAgICAgICAgICAgIHYudXYgPSBuZXcgY29yZV8xLlZlY3RvcjIodmVydGljZXNbaV0ucG9zaXRpb24ueCAvIHNpemUsIHZlcnRpY2VzW2ldLnBvc2l0aW9uLnkgLyBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRDeWxpbmRlcihyYWRpdXMgPSAwLjUsIGhlaWdodCA9IDEsIHNlZ21lbnRzID0gMjQpIHtcclxuICAgICAgICBpZiAoc2VnbWVudHMgPCAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzaEJ1aWxkZXIuYWRkQ3lsaW5kZXI6IHNlZ21lbnRzIG11c3QgYmUgZ3JlYXRlciB0aGFuIDInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IE1hdGguUEkgKiAyIC8gc2VnbWVudHM7XHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGRSaW5nKG1iLCBjZW50ZXIsIHV2X3YsIGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogc3RlcDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBtYi5hZGRWZXJ0ZXgobmV3IFZlcnRleChuZXcgY29yZV8xLlZlY3RvcjMoeCwgMCwgeikuYWRkKGNlbnRlcikpKTtcclxuICAgICAgICAgICAgICAgIHYudXYgPSBuZXcgY29yZV8xLlZlY3RvcjIoKGkgLyBzZWdtZW50cykgKiAyLjAsIHV2X3YpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUluZGV4ID0gbWIudmVydGljZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0c1BlclJvdyA9IHNlZ21lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCwgYmFzZUluZGV4IC0gMSwgYmFzZUluZGV4IC0gdmVydHNQZXJSb3csIGJhc2VJbmRleCAtIHZlcnRzUGVyUm93IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbM10sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29ubmVjdCBsYXN0IHNlZ21lbnQgd2l0aCBmaXJzdCB2ZXJ0ZXhcclxuICAgICAgICAgICAgaWYgKGJ1aWxkVHJpYW5nbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlSW5kZXggPSBtYi52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydHNQZXJSb3cgPSBzZWdtZW50cyArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCAtIHZlcnRzUGVyUm93ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0c1BlclJvdyAtIDEsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1swXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1szXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1syXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkQ2FwKG1iLCBjZW50ZXIsIHJldmVyc2UpIHtcclxuICAgICAgICAgICAgbGV0IGN2ID0gbWIuYWRkVmVydGV4KG5ldyBWZXJ0ZXgoY2VudGVyKSk7XHJcbiAgICAgICAgICAgIGN2LnV2ID0gbmV3IGNvcmVfMS5WZWN0b3IyKDAuNSwgMC41KTtcclxuICAgICAgICAgICAgY29uc3QgY2VudGVySW5kZXggPSBtYi52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzZWdtZW50czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBzdGVwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IG1iLmFkZFZlcnRleChuZXcgVmVydGV4KG5ldyBjb3JlXzEuVmVjdG9yMyh4ICogcmFkaXVzLCAwLCB6ICogcmFkaXVzKS5hZGQoY2VudGVyKSkpO1xyXG4gICAgICAgICAgICAgICAgdi51diA9IG5ldyBjb3JlXzEuVmVjdG9yMih4ICogMC41ICsgMC41LCB6ICogMC41ICsgMC41KTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VJbmRleCA9IG1iLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IHJldmVyc2UgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlckluZGV4LCBiYXNlSW5kZXggLSAxLCBiYXNlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICBdIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJJbmRleCwgYmFzZUluZGV4LCBiYXNlSW5kZXggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBtYi5hZGRJbmRleChpbmRpY2VzWzBdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWIuYWRkSW5kZXgoaW5kaWNlc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1iLmFkZEluZGV4KGluZGljZXNbMl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZFJpbmcodGhpcywgbmV3IGNvcmVfMS5WZWN0b3IzKDAsIC1oZWlnaHQgLyAyLCAwKSwgMS4wLCBmYWxzZSk7XHJcbiAgICAgICAgYnVpbGRSaW5nKHRoaXMsIG5ldyBjb3JlXzEuVmVjdG9yMygwLCBoZWlnaHQgLyAyLCAwKSwgMC4wLCB0cnVlKTtcclxuICAgICAgICBidWlsZENhcCh0aGlzLCBuZXcgY29yZV8xLlZlY3RvcjMoMCwgLWhlaWdodCAvIDIsIDApLCBmYWxzZSk7XHJcbiAgICAgICAgYnVpbGRDYXAodGhpcywgbmV3IGNvcmVfMS5WZWN0b3IzKDAsIGhlaWdodCAvIDIsIDApLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlY2FsY3VsYXRlTm9ybWFscygpIHtcclxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IHRoaXMuaW5kaWNlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHZlcnRpY2VzW2luZGljZXNbaV1dO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdmVydGljZXNbaW5kaWNlc1tpICsgMV1dO1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdmVydGljZXNbaW5kaWNlc1tpICsgMl1dO1xyXG4gICAgICAgICAgICBjb25zdCBhYiA9IGIucG9zaXRpb24uY2xvbmUoKS5zdWIoYS5wb3NpdGlvbi5jbG9uZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgYWMgPSBjLnBvc2l0aW9uLmNsb25lKCkuc3ViKGEucG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGFiLmNyb3NzKGFjKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgYS5ub3JtYWwuYWRkKG5vcm1hbCk7XHJcbiAgICAgICAgICAgIGIubm9ybWFsLmFkZChub3JtYWwpO1xyXG4gICAgICAgICAgICBjLm5vcm1hbC5hZGQobm9ybWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGFsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmVydGljZXNbaV0ubm9ybWFsLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJ1aWxkKGdsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNZXNoKGdsLCB0aGlzLnZlcnRpY2VzLCB0aGlzLmluZGljZXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVzaEJ1aWxkZXIgPSBNZXNoQnVpbGRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zYW1wbGUgPSBleHBvcnRzLkZpbHRlciA9IGV4cG9ydHMubm9ybWFsTWFwID0gZXhwb3J0cy5ibGVuZCA9IGV4cG9ydHMuQmxlbmRNb2RlID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLnBvbHlnb24gPSBleHBvcnRzLmNpcmNsZSA9IGV4cG9ydHMuc21vb3RoU3RlcCA9IGV4cG9ydHMudGhyZXNob2xkID0gZXhwb3J0cy5kZWZvcm0gPSBleHBvcnRzLmNoZWNrZXIgPSBleHBvcnRzLmJyaWNrcyA9IGV4cG9ydHMudm9yb25vaSA9IGV4cG9ydHMucGVybGluID0gZXhwb3J0cy5taXggPSBleHBvcnRzLnNjYWxhciA9IGV4cG9ydHMuc29saWQgPSBleHBvcnRzLkNvbG9yID0gdm9pZCAwO1xyXG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuY29uc3QgZ2VuZXJhdG9yXzEgPSByZXF1aXJlKFwibGlibm9pc2UtdHMvbW9kdWxlL2dlbmVyYXRvclwiKTtcclxuZnVuY3Rpb24gbGVycFNjYWxhcihhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gYSAqICgxIC0gdCkgKyBiICogdDtcclxufVxyXG5mdW5jdGlvbiBzYXR1cmF0ZSh4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgeCkpO1xyXG59XHJcbmZ1bmN0aW9uIHNzdGVwKGVkZ2UwLCBlZGdlMSwgeCkge1xyXG4gICAgbGV0IHQgPSBzYXR1cmF0ZSgoeCAtIGVkZ2UwKSAvIChlZGdlMSAtIGVkZ2UwKSk7XHJcbiAgICByZXR1cm4gdCAqIHQgKiAoMyAtIDIgKiB0KTtcclxufVxyXG5mdW5jdGlvbiBsc3RlcChhLCBiLCB0KSB7XHJcbiAgICBpZiAodCA8PSBhKVxyXG4gICAgICAgIHJldHVybiAwLjA7XHJcbiAgICBpZiAodCA+PSBiKVxyXG4gICAgICAgIHJldHVybiAxLjA7XHJcbiAgICByZXR1cm4gKHQgLSBhKSAvIChiIC0gYSk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZCh4LCB5KSB7XHJcbiAgICB4ICs9IDAuMjEyNyArIHggKiAwLjM3MTMgKiB5O1xyXG4gICAgeSArPSAwLjIxMjcgKyB4ICogMC4zNzEzICogeTtcclxuICAgIGNvbnN0IHJ4ID0gNC43ODkgKiBNYXRoLnNpbig0ODkuMTIzICogeCk7XHJcbiAgICBjb25zdCByeSA9IDQuNzg5ICogTWF0aC5zaW4oNDg5LjEyMyAqIHkpO1xyXG4gICAgY29uc3QgdiA9IHJ4ICogcnk7XHJcbiAgICByZXR1cm4gdiAtIE1hdGguZmxvb3Iodik7XHJcbn1cclxuY2xhc3MgQ29sb3Ige1xyXG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLnIgPSBzYXR1cmF0ZShyKTtcclxuICAgICAgICB0aGlzLmcgPSBzYXR1cmF0ZShnKTtcclxuICAgICAgICB0aGlzLmIgPSBzYXR1cmF0ZShiKTtcclxuICAgICAgICB0aGlzLmEgPSBzYXR1cmF0ZShhKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tSGV4KGhleCkge1xyXG4gICAgICAgIGlmIChoZXguc3RhcnRzV2l0aChcIiNcIikpXHJcbiAgICAgICAgICAgIGhleCA9IGhleC5zbGljZSgxKTtcclxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMylcclxuICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KFwiXCIpLm1hcCh4ID0+IHggKyB4KS5qb2luKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMCwgMiksIDE2KSAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDIsIDQpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg0LCA2KSwgMTYpIC8gMjU1O1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgICB9XHJcbiAgICBsZXJwKGIsIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKGxlcnBTY2FsYXIodGhpcy5yLCBiLnIsIHQpLCBsZXJwU2NhbGFyKHRoaXMuZywgYi5nLCB0KSwgbGVycFNjYWxhcih0aGlzLmIsIGIuYiwgdCksIGxlcnBTY2FsYXIodGhpcy5hLCBiLmEsIHQpKTtcclxuICAgIH1cclxuICAgIGFkZChiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgKyBiLnIsIHRoaXMuZyArIGIuZywgdGhpcy5iICsgYi5iLCB0aGlzLmEgKyBiLmEpO1xyXG4gICAgfVxyXG4gICAgc3ViKGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMuciAtIGIuciwgdGhpcy5nIC0gYi5nLCB0aGlzLmIgLSBiLmIsIHRoaXMuYSAtIGIuYSk7XHJcbiAgICB9XHJcbiAgICBtdWwoYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodGhpcy5yICogYi5yLCB0aGlzLmcgKiBiLmcsIHRoaXMuYiAqIGIuYiwgdGhpcy5hICogYi5hKTtcclxuICAgIH1cclxuICAgIGRpdihiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIgLyAoYi5yICsgMC4wMDAxKSwgdGhpcy5nIC8gKGIuZyArIDAuMDAwMSksIHRoaXMuYiAvIChiLmIgKyAwLjAwMDEpLCAxLjApO1xyXG4gICAgfVxyXG4gICAgbXVsU2NhbGFyKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMuciAqIHMsIHRoaXMuZyAqIHMsIHRoaXMuYiAqIHMsIHRoaXMuYSAqIHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGx1bWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIHRoaXMuciArIDAuNzE1MiAqIHRoaXMuZyArIDAuMDcyMiAqIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbmNvbnN0IHBnZW4gPSBuZXcgZ2VuZXJhdG9yXzEuUGVybGluKCk7XHJcbmNvbnN0IHZnZW4gPSBuZXcgZ2VuZXJhdG9yXzEuVm9yb25vaSgpO1xyXG5mdW5jdGlvbiBzb2xpZChjKSB7XHJcbiAgICByZXR1cm4gKHApID0+IGM7XHJcbn1cclxuZXhwb3J0cy5zb2xpZCA9IHNvbGlkO1xyXG5mdW5jdGlvbiBzY2FsYXIocykge1xyXG4gICAgcmV0dXJuIChwKSA9PiBuZXcgQ29sb3Iocywgcywgcyk7XHJcbn1cclxuZXhwb3J0cy5zY2FsYXIgPSBzY2FsYXI7XHJcbmZ1bmN0aW9uIG1peChhLCBiLCBhbXQpIHtcclxuICAgIHJldHVybiAocCkgPT4gYShwKS5sZXJwKGIocCksIGFtdChwKS5sdW1hKTtcclxufVxyXG5leHBvcnRzLm1peCA9IG1peDtcclxuZnVuY3Rpb24gcGVybGluKHNpemVYLCBzaXplWSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IE1hdGguYWJzKHBnZW4uZ2V0VmFsdWUocC54ICogc2l6ZVgsIHAueSAqIHNpemVZLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih2LCB2LCB2LCAxKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wZXJsaW4gPSBwZXJsaW47XHJcbmZ1bmN0aW9uIHZvcm9ub2koc2l6ZVgsIHNpemVZKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICBjb25zdCB2ID0gdmdlbi5nZXRWYWx1ZShwLnggKiBzaXplWCwgcC55ICogc2l6ZVksIDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodiwgdiwgdiwgMSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudm9yb25vaSA9IHZvcm9ub2k7XHJcbmZ1bmN0aW9uIGJyaWNrcyhzaXplWCwgc2l6ZVksIHhvZmZzZXQgPSAwLjUsIGdhcCA9IDAuMDEsIHNtb290aCA9IDAuMDMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGxldCB1dSA9IHAueCAqIHNpemVYO1xyXG4gICAgICAgIGxldCB2diA9IHAueSAqIHNpemVZO1xyXG4gICAgICAgIGlmICgodnYgKiAwLjUgLSBNYXRoLmZsb29yKHZ2ICogMC41KSkgPj0gMC41KVxyXG4gICAgICAgICAgICB1dSArPSB4b2Zmc2V0O1xyXG4gICAgICAgIGlmICh1dSA+PSBzaXplWClcclxuICAgICAgICAgICAgdXUgLT0gc2l6ZVg7XHJcbiAgICAgICAgaWYgKHZ2ID49IHNpemVZKVxyXG4gICAgICAgICAgICB2diAtPSBzaXplWTtcclxuICAgICAgICBsZXQgeCA9IHV1IC0gTWF0aC5mbG9vcih1dSk7XHJcbiAgICAgICAgbGV0IHkgPSB2diAtIE1hdGguZmxvb3IodnYpO1xyXG4gICAgICAgIGxldCBpbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChnYXAgPiAwLjApIHtcclxuICAgICAgICAgICAgaW5zaWRlICYmIChpbnNpZGUgPSB4ID4gZ2FwICogc2l6ZVgpO1xyXG4gICAgICAgICAgICBpbnNpZGUgJiYgKGluc2lkZSA9IHkgPiBnYXAgKiBzaXplWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2ID0gMS4wO1xyXG4gICAgICAgIGlmIChpbnNpZGUpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSBNYXRoLm1pbihNYXRoLm1pbih4IC0gZ2FwICogc2l6ZVgsIDEuMCAtIHgpIC8gc2l6ZVgsIE1hdGgubWluKHkgLSBnYXAgKiBzaXplWSwgMS4wIC0geSkgLyBzaXplWSk7XHJcbiAgICAgICAgICAgIGRpc3QgKj0gTWF0aC5taW4oc2l6ZVgsIHNpemVZKTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBzbW9vdGgpIHtcclxuICAgICAgICAgICAgICAgIHYgKj0gZGlzdCAvIHNtb290aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgYnJpY2tJZFggPSBNYXRoLmZsb29yKHV1KTtcclxuICAgICAgICAgICAgLy8gY29uc3QgYnJpY2tJZFkgPSBNYXRoLmZsb29yKHZ2KTtcclxuICAgICAgICAgICAgLy8gaWYgKGJyaWNrSWRYID4gc2l6ZVgpIGJyaWNrSWRYID0gMDtcclxuICAgICAgICAgICAgLy8gdiAqPSByYW5kKGJyaWNrSWRYICogMC4wMSwgYnJpY2tJZFkgKiAwLjAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB2ID0gMC4wO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IodiwgdiwgdiwgMSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYnJpY2tzID0gYnJpY2tzO1xyXG5mdW5jdGlvbiBjaGVja2VyKHNpemVYLCBzaXplWSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3Qgc3ggPSAwLjUgLyBNYXRoLm1heChzaXplWCwgMSk7XHJcbiAgICAgICAgY29uc3Qgc3kgPSAwLjUgLyBNYXRoLm1heChzaXplWSwgMSk7XHJcbiAgICAgICAgY29uc3QgbnggPSBNYXRoLmZsb29yKHAueCAvIHN4KTtcclxuICAgICAgICBjb25zdCBueSA9IE1hdGguZmxvb3IocC55IC8gc3kpO1xyXG4gICAgICAgIGNvbnN0IHYgPSAobnggKyBueSkgJSAyID09PSAwID8gMS4wIDogMC4wO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3Iodiwgdiwgdik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY2hlY2tlciA9IGNoZWNrZXI7XHJcbmZ1bmN0aW9uIGRlZm9ybShpbnB1dCwgaGVpZ2h0TWFwLCBpbnRlbnNpdHkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHRNYXAocCkubHVtYSAtIDAuNTtcclxuICAgICAgICBjb25zdCBjID0gbmV3IGNvcmVfMS5WZWN0b3IyKHAueCArIGggKiBpbnRlbnNpdHksIHAueSArIGggKiAtaW50ZW5zaXR5KTtcclxuICAgICAgICByZXR1cm4gaW5wdXQoYyk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmb3JtID0gZGVmb3JtO1xyXG5mdW5jdGlvbiB0aHJlc2hvbGQoaW5wdXQsIHRocmVzaG9sZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IGlucHV0KHApLmx1bWE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih2ID4gdGhyZXNob2xkID8gMSA6IDAsIHYgPiB0aHJlc2hvbGQgPyAxIDogMCwgdiA+IHRocmVzaG9sZCA/IDEgOiAwKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XHJcbmZ1bmN0aW9uIHNtb290aFN0ZXAoZWRnZTAsIGVkZ2UxLCBhbXQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBhbXQocCkubHVtYTtcclxuICAgICAgICBjb25zdCB2ID0gc3N0ZXAoZWRnZTAsIGVkZ2UxLCB4KTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNtb290aFN0ZXAgPSBzbW9vdGhTdGVwO1xyXG5mdW5jdGlvbiBjaXJjbGUocmFkaXVzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBuZXcgY29yZV8xLlZlY3RvcjIoMC41LCAwLjUpO1xyXG4gICAgICAgIGNvbnN0IHJhZCA9IHJhZGl1cyArIDAuMDAwMTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gcC5kaXN0YW5jZVRvKGNlbnRlcik7XHJcbiAgICAgICAgY29uc3QgdiA9IGRpc3QgPD0gcmFkID8gMS4wIC0gZGlzdCAvIHJhZCA6IDAuMDtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNpcmNsZSA9IGNpcmNsZTtcclxuZnVuY3Rpb24gcG9seWdvbihyYWRpdXMsIGFuZ2xlLCBzaWRlcywgZ3JhZGllbnQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgY29yZV8xLlZlY3RvcjIocC54ICogMi4wIC0gMS4wLCBwLnkgKiAyLjAgLSAxLjApO1xyXG4gICAgICAgIGNvbnN0IGEgPSBNYXRoLmF0YW4yKGMueCwgYy55KSArIGFuZ2xlO1xyXG4gICAgICAgIGNvbnN0IGIgPSAoTWF0aC5QSSAqIDIuMCkgLyBzaWRlcztcclxuICAgICAgICBjb25zdCBkID0gTWF0aC5jb3MoTWF0aC5mbG9vcigwLjUgKyBhIC8gYikgKiBiIC0gYSkgKiBjLmxlbigpIC8gcmFkaXVzO1xyXG4gICAgICAgIGNvbnN0IHYgPSAxLjAgLSBsc3RlcCgwLjggLSBncmFkaWVudCwgMC44LCBkKTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHYsIHYsIHYpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBvbHlnb24gPSBwb2x5Z29uO1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm0oaW5wdXQsIHgsIHksIHNjYWxlWCA9IDEsIHNjYWxlWSA9IDEsIHJvdGF0aW9uID0gMCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IG5ldyBjb3JlXzEuVmVjdG9yMihwLnggKiAyLjAgLSAxLjAsIHAueSAqIDIuMCAtIDEuMCk7XHJcbiAgICAgICAgLy8gcm90YXRlXHJcbiAgICAgICAgY29uc3QgciA9IG5ldyBjb3JlXzEuVmVjdG9yMihjLnggKiBNYXRoLmNvcyhyb3RhdGlvbikgLSBjLnkgKiBNYXRoLnNpbihyb3RhdGlvbiksIGMueCAqIE1hdGguc2luKHJvdGF0aW9uKSArIGMueSAqIE1hdGguY29zKHJvdGF0aW9uKSk7XHJcbiAgICAgICAgLy8gc2NhbGUgKyB0cmFuc2xhdGVcclxuICAgICAgICBjb25zdCBzID0gbmV3IGNvcmVfMS5WZWN0b3IyKHIueCAqIHNjYWxlWCArIHgsIHIueSAqIHNjYWxlWSArIHkpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dChzKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbnZhciBCbGVuZE1vZGU7XHJcbihmdW5jdGlvbiAoQmxlbmRNb2RlKSB7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiQWRkXCJdID0gMF0gPSBcIkFkZFwiO1xyXG4gICAgQmxlbmRNb2RlW0JsZW5kTW9kZVtcIlN1YnRyYWN0XCJdID0gMV0gPSBcIlN1YnRyYWN0XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiTXVsdGlwbHlcIl0gPSAyXSA9IFwiTXVsdGlwbHlcIjtcclxuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJTY3JlZW5cIl0gPSAzXSA9IFwiU2NyZWVuXCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiT3ZlcmxheVwiXSA9IDRdID0gXCJPdmVybGF5XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiRGl2aWRlXCJdID0gNV0gPSBcIkRpdmlkZVwiO1xyXG4gICAgQmxlbmRNb2RlW0JsZW5kTW9kZVtcIk1pblwiXSA9IDZdID0gXCJNaW5cIjtcclxuICAgIEJsZW5kTW9kZVtCbGVuZE1vZGVbXCJNYXhcIl0gPSA3XSA9IFwiTWF4XCI7XHJcbiAgICBCbGVuZE1vZGVbQmxlbmRNb2RlW1wiQ29sb3JcIl0gPSA4XSA9IFwiQ29sb3JcIjtcclxufSkoQmxlbmRNb2RlID0gZXhwb3J0cy5CbGVuZE1vZGUgfHwgKGV4cG9ydHMuQmxlbmRNb2RlID0ge30pKTtcclxuZnVuY3Rpb24gYmxlbmQoYSwgYiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgY29uc3QgdmEgPSBhKHApO1xyXG4gICAgICAgIGNvbnN0IHZiID0gYihwKTtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBCbGVuZE1vZGUuQWRkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLmFkZCh2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLlN1YnRyYWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLnN1Yih2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLk11bHRpcGx5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2Yik7XHJcbiAgICAgICAgICAgIGNhc2UgQmxlbmRNb2RlLlNjcmVlbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YS5tdWwodmIpLmFkZCh2YS5tdWwodmIpLnN1Yih2YSkubXVsU2NhbGFyKDIuMCkpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5PdmVybGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2YikuYWRkKHZhLm11bCh2YikubXVsU2NhbGFyKDIuMCkuc3ViKHZhKS5tdWwodmIpLm11bFNjYWxhcigyLjApKTtcclxuICAgICAgICAgICAgY2FzZSBCbGVuZE1vZGUuRGl2aWRlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhLm11bCh2YikuZGl2KHZhLmFkZCh2YikubXVsU2NhbGFyKDIuMCkpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5NaW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1hdGgubWluKHZhLnIsIHZiLnIpLCBNYXRoLm1pbih2YS5nLCB2Yi5nKSwgTWF0aC5taW4odmEuYiwgdmIuYikpO1xyXG4gICAgICAgICAgICBjYXNlIEJsZW5kTW9kZS5NYXg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1hdGgubWF4KHZhLnIsIHZiLnIpLCBNYXRoLm1heCh2YS5nLCB2Yi5nKSwgTWF0aC5tYXgodmEuYiwgdmIuYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmE7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYmxlbmQgPSBibGVuZDtcclxuZnVuY3Rpb24gbm9ybWFsTWFwKGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBzdHJlbmd0aCA9IDEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIGNvbnN0IGVweCA9IDEuMCAvIHdpZHRoLCBlcHkgPSAxLjAgLyBoZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZDAgPSBNYXRoLmFicyhpbnB1dChwKS5sdW1hKTtcclxuICAgICAgICBjb25zdCBkMSA9IE1hdGguYWJzKGlucHV0KG5ldyBjb3JlXzEuVmVjdG9yMihwLnggKyBlcHgsIHAueSkpLmx1bWEpICogc3RyZW5ndGggLyAyLjA7XHJcbiAgICAgICAgY29uc3QgZDIgPSBNYXRoLmFicyhpbnB1dChuZXcgY29yZV8xLlZlY3RvcjIocC54IC0gZXB4LCBwLnkpKS5sdW1hKSAqIHN0cmVuZ3RoIC8gMi4wO1xyXG4gICAgICAgIGNvbnN0IGQzID0gTWF0aC5hYnMoaW5wdXQobmV3IGNvcmVfMS5WZWN0b3IyKHAueCwgcC55ICsgZXB5KSkubHVtYSkgKiBzdHJlbmd0aCAvIDIuMDtcclxuICAgICAgICBjb25zdCBkNCA9IE1hdGguYWJzKGlucHV0KG5ldyBjb3JlXzEuVmVjdG9yMihwLngsIHAueSAtIGVweSkpLmx1bWEpICogc3RyZW5ndGggLyAyLjA7XHJcbiAgICAgICAgY29uc3QgZHggPSAoKGQyIC0gZDApICsgKGQwIC0gZDEpKSAqIDAuNTtcclxuICAgICAgICBjb25zdCBkeSA9ICgoZDQgLSBkMCkgKyAoZDAgLSBkMykpICogMC41O1xyXG4gICAgICAgIGNvbnN0IG4gPSBuZXcgY29yZV8xLlZlY3RvcjMoZHgsIGR5LCAxLjApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3Iobi54ICogMC41ICsgMC41LCBuLnkgKiAwLjUgKyAwLjUsIG4ueiAqIDAuNSArIDAuNSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubm9ybWFsTWFwID0gbm9ybWFsTWFwO1xyXG52YXIgRmlsdGVyO1xyXG4oZnVuY3Rpb24gKEZpbHRlcikge1xyXG4gICAgRmlsdGVyW0ZpbHRlcltcIk5lYXJlc3RcIl0gPSAwXSA9IFwiTmVhcmVzdFwiO1xyXG4gICAgRmlsdGVyW0ZpbHRlcltcIkxpbmVhclwiXSA9IDFdID0gXCJMaW5lYXJcIjtcclxufSkoRmlsdGVyID0gZXhwb3J0cy5GaWx0ZXIgfHwgKGV4cG9ydHMuRmlsdGVyID0ge30pKTtcclxuZnVuY3Rpb24gc2FtcGxlKGltYWdlLCBmaWx0ZXIgPSBGaWx0ZXIuTmVhcmVzdCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSBGaWx0ZXIuTmVhcmVzdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IocC54ICogaW1hZ2Uud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IocC55ICogaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAoeSAqIGltYWdlLndpZHRoICsgeCkgKiA0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihpbWFnZS5kYXRhW2kgKyAwXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kgKyAxXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kgKyAyXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kgKyAzXSAvIDI1NS4wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEZpbHRlci5MaW5lYXI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHgwID0gTWF0aC5mbG9vcihwLnggKiBpbWFnZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5MCA9IE1hdGguZmxvb3IocC55ICogaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHgxID0geDAgKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeTEgPSB5MCArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcC54ICogaW1hZ2Uud2lkdGggLSB4MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBwLnkgKiBpbWFnZS5oZWlnaHQgLSB5MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkwID0gKHkwICogaW1hZ2Uud2lkdGggKyB4MCkgKiA0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaTEgPSAoeTAgKiBpbWFnZS53aWR0aCArIHgxKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMiA9ICh5MSAqIGltYWdlLndpZHRoICsgeDApICogNDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gKHkxICogaW1hZ2Uud2lkdGggKyB4MSkgKiA0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYzAgPSBuZXcgQ29sb3IoaW1hZ2UuZGF0YVtpMCArIDBdIC8gMjU1LjAsIGltYWdlLmRhdGFbaTAgKyAxXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kwICsgMl0gLyAyNTUuMCwgaW1hZ2UuZGF0YVtpMCArIDNdIC8gMjU1LjApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYzEgPSBuZXcgQ29sb3IoaW1hZ2UuZGF0YVtpMSArIDBdIC8gMjU1LjAsIGltYWdlLmRhdGFbaTEgKyAxXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kxICsgMl0gLyAyNTUuMCwgaW1hZ2UuZGF0YVtpMSArIDNdIC8gMjU1LjApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYzIgPSBuZXcgQ29sb3IoaW1hZ2UuZGF0YVtpMiArIDBdIC8gMjU1LjAsIGltYWdlLmRhdGFbaTIgKyAxXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kyICsgMl0gLyAyNTUuMCwgaW1hZ2UuZGF0YVtpMiArIDNdIC8gMjU1LjApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYzMgPSBuZXcgQ29sb3IoaW1hZ2UuZGF0YVtpMyArIDBdIC8gMjU1LjAsIGltYWdlLmRhdGFbaTMgKyAxXSAvIDI1NS4wLCBpbWFnZS5kYXRhW2kzICsgMl0gLyAyNTUuMCwgaW1hZ2UuZGF0YVtpMyArIDNdIC8gMjU1LjApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjMC5yICogKDEuMCAtIHgpICogKDEuMCAtIHkpICsgYzEuciAqIHggKiAoMS4wIC0geSkgKyBjMi5yICogKDEuMCAtIHgpICogeSArIGMzLnIgKiB4ICogeSwgYzAuZyAqICgxLjAgLSB4KSAqICgxLjAgLSB5KSArIGMxLmcgKiB4ICogKDEuMCAtIHkpICsgYzIuZyAqICgxLjAgLSB4KSAqIHkgKyBjMy5nICogeCAqIHksIGMwLmIgKiAoMS4wIC0geCkgKiAoMS4wIC0geSkgKyBjMS5iICogeCAqICgxLjAgLSB5KSArIGMyLmIgKiAoMS4wIC0geCkgKiB5ICsgYzMuYiAqIHggKiB5LCBjMC5hICogKDEuMCAtIHgpICogKDEuMCAtIHkpICsgYzEuYSAqIHggKiAoMS4wIC0geSkgKyBjMi5hICogKDEuMCAtIHgpICogeSArIGMzLmEgKiB4ICogeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2FtcGxlID0gc2FtcGxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNoYWRlciA9IGV4cG9ydHMuUXVhdGVybmlvbiA9IGV4cG9ydHMuTWF0cml4NCA9IGV4cG9ydHMuTWF0cml4MyA9IGV4cG9ydHMuVmVjdG9yNCA9IGV4cG9ydHMuVmVjdG9yMyA9IGV4cG9ydHMuVmVjdG9yMiA9IHZvaWQgMDtcclxuY29uc3QgY29yZV8xID0gcmVxdWlyZShcIkBtYXRoLmdsL2NvcmVcIik7XHJcbnZhciBjb3JlXzIgPSByZXF1aXJlKFwiQG1hdGguZ2wvY29yZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVmVjdG9yMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29yZV8yLlZlY3RvcjI7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlZlY3RvcjNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvcmVfMi5WZWN0b3IzOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJWZWN0b3I0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3JlXzIuVmVjdG9yNDsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWF0cml4M1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29yZV8yLk1hdHJpeDM7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hdHJpeDRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvcmVfMi5NYXRyaXg0OyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRdWF0ZXJuaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3JlXzIuUXVhdGVybmlvbjsgfSB9KTtcclxuY2xhc3MgU2hhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsKSB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XHJcbiAgICB9XHJcbiAgICBlbmFibGVWZXJ0ZXgoc3JjKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gdGhpcy5jb21waWxlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUiwgc3JjKTtcclxuICAgICAgICBpZiAodmVydGV4U2hhZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb21waWxlIHZlcnRleCBzaGFkZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVuYWJsZUZyYWdtZW50KHNyYykge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5jb21waWxlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSLCBzcmMpO1xyXG4gICAgICAgIGlmIChmcmFnbWVudFNoYWRlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSBmcmFnbWVudCBzaGFkZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbGluaygpIHtcclxuICAgICAgICB0aGlzLmdsLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5nbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm93IHdlIGNhbiBkZXRhY2ggYW5kIGRlbGV0ZSB0aGUgc2hhZGVyc1xyXG4gICAgICAgIGxldCBzaGFkZXJzID0gdGhpcy5nbC5nZXRBdHRhY2hlZFNoYWRlcnModGhpcy5wcm9ncmFtKTtcclxuICAgICAgICBpZiAoc2hhZGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNoYWRlciBvZiBzaGFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRldGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHNoYWRlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobG9jID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgXCIke25hbWV9XCIgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW25hbWVdID0gbG9jO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgYmluZEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCBpbmRleCwgbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0dXJlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICBpZiAobG9jYXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobG9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaWZvcm0gXCIke25hbWV9XCIgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1tuYW1lXSA9IGxvYztcclxuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRVbmlmb3JtKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICBpZiAobG9jYXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobG9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaWZvcm0gXCIke25hbWV9XCIgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1tuYW1lXSA9IGxvYztcclxuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvcmVfMS5WZWN0b3IyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdmFsdWUudG9BcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb3JlXzEuVmVjdG9yMykge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY29yZV8xLlZlY3RvcjQpIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZS50b0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvcmVfMS5NYXRyaXgzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY29yZV8xLk1hdHJpeDQpIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUudG9BcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgfVxyXG4gICAgY29tcGlsZVNoYWRlcih0eXBlLCBzcmMpIHtcclxuICAgICAgICBjb25zdCBzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgICAgICBpZiAoc2hhZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgc2hhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNyYyk7XHJcbiAgICAgICAgdGhpcy5nbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNoYWRlciA9IFNoYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRleHR1cmUyRCA9IGV4cG9ydHMuSVRleHR1cmUgPSB2b2lkIDA7XHJcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0aC5nbC9jb3JlXCIpO1xyXG5jb25zdCBjb21wbGV0ZXJfMSA9IHJlcXVpcmUoXCIuL2NvbXBsZXRlclwiKTtcclxuY2xhc3MgSVRleHR1cmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2wsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIGJpbmQodW5pdCkge1xyXG4gICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdCk7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLnRhcmdldCwgdGhpcy50ZXh0dXJlKTtcclxuICAgIH1cclxuICAgIHVuYmluZCgpIHtcclxuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMudGFyZ2V0LCBudWxsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLklUZXh0dXJlID0gSVRleHR1cmU7XHJcbmNsYXNzIFRleHR1cmUyRCBleHRlbmRzIElUZXh0dXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGludGVybmFsRm9ybWF0LCB0eXBlKSB7XHJcbiAgICAgICAgc3VwZXIoZ2wsIGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtYXQgPSBpbnRlcm5hbEZvcm1hdDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIH1cclxuICAgIHNldEZpbHRlcmluZyhtaW4sIG1hZykge1xyXG4gICAgICAgIHRoaXMuYmluZCgwKTtcclxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBtaW4pO1xyXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIG1hZyk7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tSW1hZ2UoZ2wsIHVybCwgZm9ybWF0ID0gZ2wuUkdCQSwgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBLCB0eXBlID0gZ2wuVU5TSUdORURfQllURSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsID0gbmV3IGNvbXBsZXRlcl8xLkNvbXBsZXRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4ID0gbmV3IFRleHR1cmUyRChnbCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgZm9ybWF0LCBpbnRlcm5hbEZvcm1hdCwgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0ZXguYmluZCgwKTtcclxuICAgICAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICAgICAgICAgICAgICB0ZXgudW5iaW5kKCk7XHJcbiAgICAgICAgICAgICAgICBjb21wbC5jb21wbGV0ZSh0ZXgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICBjb21wbC5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBsLnByb21pc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcHJvY2VkdXJhbChnbCwgd2lkdGgsIGhlaWdodCwgZnVuYykge1xyXG4gICAgICAgIGxldCB0ZXggPSBuZXcgVGV4dHVyZTJEKGdsLCB3aWR0aCwgaGVpZ2h0LCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFKTtcclxuICAgICAgICB0ZXguYmluZCgwKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBmdW5jKG5ldyBjb3JlXzEuVmVjdG9yMih4IC8gd2lkdGgsIHkgLyBoZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbKHkgKiB3aWR0aCArIHgpICogNCArIDBdID0gfn4odi5yICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGRhdGFbKHkgKiB3aWR0aCArIHgpICogNCArIDFdID0gfn4odi5nICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGRhdGFbKHkgKiB3aWR0aCArIHgpICogNCArIDJdID0gfn4odi5iICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGRhdGFbKHkgKiB3aWR0aCArIHgpICogNCArIDNdID0gfn4odi5hICogMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xyXG4gICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgICAgIHRleC51bmJpbmQoKTtcclxuICAgICAgICByZXR1cm4gdGV4O1xyXG4gICAgfVxyXG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5fd2lkdGg7IH1cclxuICAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQ7IH1cclxufVxyXG5leHBvcnRzLlRleHR1cmUyRCA9IFRleHR1cmUyRDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9