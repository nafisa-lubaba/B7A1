# Generics in TypeScript

## Introduction

At some point, the same function starts showing up again and again — same logic, just different types. It works, but it doesn’t feel clean.

That’s where generics come in.

Generics make it possible to write code once and reuse it for different types, without losing type safety. No need for `any`, and no unnecessary duplication.

---

## The Problem

A simple example — wrapping a value in an array:

```ts id="a1b2c3"
function wrapInArray(value: string): string[] {
  return [value];
}
```

Now the same logic is needed for numbers, booleans, or objects. That usually leads to either repeating code or using `any`:

```ts id="d4e5f6"
function wrapInArray(value: any): any[] {
  return [value];
}
```

One approach duplicates code, the other removes type safety.

---

## The Generic Solution

Using generics solves both problems:

```ts id="g7h8i9"
function wrapInArray<T>(value: T): T[] {
  return [value];
}
```

Now it works for any type:

```ts id="j1k2l3"
const a = wrapInArray("hello");  
const b = wrapInArray(42);       
const c = wrapInArray({ id: 1 }); 
```

TypeScript automatically infers what `T` should be based on the input.

---

## Real Example: API Response

In real applications, API responses often share a common structure, but the data inside varies.

```ts id="m4n5o6"
interface ApiResponse<T> {
  data: T;
  status: number;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  return res.json();
}
```

Usage:

```ts id="p7q8r9"
const user = await fetchData<{ name: string }>("/user");
console.log(user.data.name);
```

TypeScript now understands exactly what’s inside `data`.

---

## Adding Constraints

Sometimes flexibility is needed, but with certain rules.

```ts id="s1t2u3"
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
```

This works for any type that has an `id`, while preventing invalid usage.

---

## Generic Classes

Generics also work with classes:

```ts id="v4w5x6"
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}
```

Usage:

```ts id="y7z8a9"
const stack = new Stack<number>();
stack.push(10);
// stack.push("text"); // Error
```

One class can handle multiple types while staying fully type-safe.

---

## Conclusion

Generics help keep code:

* Reusable
* Type-safe
* Clean and maintainable

Whenever the same logic starts repeating for different types, or `any` feels like the only option, generics are usually the better solution. Once the pattern becomes familiar, it naturally fits into everyday TypeScript code.
