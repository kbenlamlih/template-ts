// src/math/Vector2.ts
import { matrix, multiply, inv, Matrix } from 'mathjs';

export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  setX(value: number) {
    this.x = value;
  }

  getY(): number {
    return this.y;
  }

  setY(value: number) {
    this.y = value;
  }

  toMatrix(): Matrix {
    return matrix([[this.x], [this.y], [1]]);
  }

  static fromMatrix(mat: Matrix): Vector2 {
    const values = mat.valueOf() as number[][];
    return new Vector2(values[0][0], values[1][0]);
  }
  
}

export class Matrix3 {

    mat: Matrix;

    constructor(mat: Matrix) {
      this.mat = mat;
    }
  
    static identity(): Matrix3 {
      return new Matrix3(matrix([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]));
    }
  
    static translation(tx: number, ty: number): Matrix3 {
      return new Matrix3(matrix([
        [1, 0, tx],
        [0, 1, ty],
        [0, 0, 1]
      ]));
    }
  
    static rotation(angle: number): Matrix3 {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return new Matrix3(matrix([
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1]
      ]));
    }
  
    static scaling(sx: number, sy: number): Matrix3 {
      return new Matrix3(matrix([
        [sx, 0, 0],
        [0, sy, 0],
        [0, 0, 1]
      ]));
    }
  
    inverse(): Matrix3 {
      return new Matrix3(inv(this.mat));
    }
  
    multiply(other: Matrix3): Matrix3 {
      return new Matrix3(multiply(this.mat, other.mat));
    }



    transformVector(vector: Vector2): Vector2 {
        const resultMatrix = multiply(this.mat, vector.toMatrix()) as Matrix;
        return Vector2.fromMatrix(resultMatrix);
      }
    
  
  }

