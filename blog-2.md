# The Four Pillars of OOP in TypeScript

## Introduction

Object-Oriented Programming (OOP) can feel unnecessary in small projects. But as an application grows, these concepts become useful for keeping things organized and maintainable.

The four pillars — **Encapsulation, Abstraction, Inheritance, and Polymorphism** — are not just theory. They help manage complexity in real-world applications, especially when multiple developers are working on the same codebase.

---

## 1. Encapsulation: Control What Can Be Accessed

Encapsulation is about restricting direct access to certain parts of the code and exposing only what’s necessary.

```ts
class BankAccount {
  private balance: number;

  constructor(initial: number) {
    this.balance = initial;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Here, `balance` is private, so it can’t be modified directly from outside. All updates must go through controlled methods like `deposit()`.

---

## 2. Abstraction: Hide Complexity

Abstraction means exposing only the essential parts while hiding internal details.

```ts
abstract class NotificationService {
  abstract send(user: string, msg: string): void;

  notify(user: string, msg: string) {
    this.send(user, msg);
  }
}

class EmailService extends NotificationService {
  send(user: string, msg: string) {
    console.log("Email sent");
  }
}
```

The internal implementation of sending messages stays hidden. Only the `notify()` method is used from outside.

---

## 3. Inheritance: Reuse Common Logic

Inheritance allows shared logic to be written once and reused.

```ts
abstract class PaymentProcessor {
  calculateTotal(amount: number) {
    return amount * 1.02;
  }
}

class Stripe extends PaymentProcessor {}
class Bkash extends PaymentProcessor {}
```

Both `Stripe` and `Bkash` reuse `calculateTotal()` without redefining it.

---

## 4. Polymorphism: One Interface, Multiple Behaviors

Polymorphism allows different implementations to be used through a common interface.

```ts
function sendNotification(service: NotificationService) {
  service.notify("user", "Hello");
}

sendNotification(new EmailService());
```

New services like SMS or Push can be added later without changing this function.

---

## Conclusion

These four pillars work together to keep code structured and maintainable:

* Encapsulation protects data
* Abstraction reduces complexity
* Inheritance avoids repetition
* Polymorphism improves flexibility

OOP doesn’t need to be overused, but in larger projects, these concepts help keep the codebase clean and easier to manage. TypeScript supports all of this with built-in features like classes, interfaces, and access control.
