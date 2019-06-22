---
layout: post
title: Object Oriented Programming
category: software-development
toc: true
---

## Why OOP?

The Object Oriented Programming (OOP) Languages directly represent the real life objects like Car, Jeep, Account, Customer, etc. Its key benefits are increased quality and reduced development time, due to:

- ***Re-use of previous work:*** using implementation inheritance and object composition;
- ***Real mapping to the problem domain:*** Objects map to real world and represent vehicles, customers, products etc: with encapsulation;
- ***Modular Architecture:*** Objects, systems, frameworks, etc. are the building blocks of larger systems.

## Common terms

- ***Abstraction*** is a more generic term, it can also be achieved by (amongst others) subclassing. For example, the interface List in the standard library is an abstraction for a sequence of items, indexed by their position, concrete examples of a List are an ArrayList or a LinkedList. Code that interacts with a List abstracts over the detail of which kind of a list it is using.
- ***Classes*** are blueprints or prototypes used to create objects.
- ***Inheritance*** allows one class to reuse the state and behavior of another class. The derived class inherits the properties and method implementations of the base class and extends it by overriding methods and adding additional properties and methods. There are two types of inheritance:
  - ***Implementation inheritance (aka class inheritance):*** You can extend an application’s functionality by reusing functionality in the parent class by inheriting all or some of the operations already implemented. In Java, you can only inherit from one superclass. Implementation inheritance promotes reusability but improper use of class inheritance can cause programming nightmares by breaking encapsulation and making future changes a problem. With implementation inheritance, the subclass becomes tightly coupled with the superclass.
  - ***Interface inheritance (aka type inheritance):*** This is also known as subtyping. Interfaces provide a mechanism for specifying a relationship between otherwise unrelated classes, typically by specifying a set of common methods each implementing class must contain. Interface inheritance promotes the design concept of program to interfaces not to implementations. This also reduces the coupling or implementation dependencies between systems.
- ***Encapsulation*** is a strategy used as part of abstraction. Encapsulation refers to the state of objects - objects encapsulate their state and hide it from the outside; outside users of the class interact with it through its methods, but cannot access the classes state directly. So the class abstracts away the implementation details related to its state. Good encapsulation improves code modularity by preventing objects interacting with each other in an unexpected way, which in turn makes future development and refactoring efforts easy. Being able to encapsulate members of a class is important for security and integrity.
- ***Polymorphism*** is the ability of a class instance to behave as if it were an instance of another class in its inheritance tree, most often one of its ancestor classes. In a nutshell, polymorphism is a bottom-up method call. The benefit of polymorphism is that it is very easy to add new classes of derived objects without breaking the calling code. The process used by object-oriented programming languages to implement polymorphism is called dynamic binding.
- ***Objects*** are software bundles of related state and behavior. Software objects are often used to model the real-world objects that you find in everyday life.
- ***Interfaces*** are a contract between a class and the outside world. When a class implements an interface, it promises to provide the behavior published by that interface.
- ***Overloading*** means writing two are or more methods in the same class by using the same method name, but passing the parameters is different.
- ***Overriding*** a method means that replacing a method functionality in child class. To imply overriding functionality we need parent and child classes. In the child class you define the same method signature as one defined in the parent class.
- ***Packages*** are namespaces used for organizing classes and interfaces in a logical manner. Placing your code into packages makes large software projects easier to manage.
