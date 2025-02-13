// 类型约束
type A = {
  name: number;
  age: number;
};

type B = {
  name: string;
  age: string;
};

type NumToStr<T> = {
  [K in keyof T]: string;
};

let instanceOfB: B = {
  name: "CC",
  age: "18",
};

// extends的三个使用场景
// 接口继承
interface IPerson {
  name: string;
  age?: number;
}

interface IStudent extends IPerson {
  grade: number;
}

const student: IStudent = {
  name: "cc",
  age: 18,
  grade: 6,
};

// 泛型约束
const teacher = {
  name: "ll",
  age: 18,
  male: true,
};
// function getProperty<T>(obj: T, key: keyof T) {
//   return obj[key];
// }
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const o = getProperty(teacher, "name");

// 条件类型
type isString<T> = T extends string ? true : false;
type Word = isString<"Hello">;
type n = isString<number>;
type s = isString<string>;

// 整数:类型体操里获取一个整数就是通过元组类型的长度
type Length<T extends any[]> = T["length"];
type Len = Length<[1, 2, 3]>;

type Add<T extends any[], K extends any[]> = [...T, ...K]["length"];
type Sum = Add<[1, "2", true], [4, 5]>;

// 类型里的递归
type Addone<T extends number, R extends any[] = []> = R["length"] extends T
  ? [...R, 1]["length"]
  : Addone<T, [...R, 1]>;

// R相当于初始值，利用["length"]生成整数再通过extends来和T比大小不断递归调用自身
type Result = Addone<5>;

// infer
// 获取类型的联合
type HD = { name: number; age: string };
type AttrType<T> = T extends { name: infer M; age: infer M } ? M : never;
type C = AttrType<HD>;

// 获取元组类型的最后一个元素
type Last<T extends any[]> = T extends [...infer R, infer L] ? L : never;
type Last1 = Last<[1, 2, 3]>;
