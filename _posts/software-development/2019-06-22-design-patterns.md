---
layout: post
title: Design Patterns
category: software-development
toc: true
---

## Model-View-Controller

The Model–view–controller (MVC) is a software architectural pattern mostly (but not exclusively) for implementing user interfaces on computers. It divides a given software application into three interconnected parts, so as to separate internal representations of information from the ways that information is presented to or accepted from the user.

  - The ***Model*** represents the data, and does nothing else. The model does NOT depend on the controller or the view.
  - The ***View*** displays the model data, and sends user actions (e.g. button clicks) to the controller. The view can:
    - be independent of both the model and the controller; or
    - actually be the controller, and therefore depend on the model.
  - The ***Controller*** provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model. In some cases, the controller and the view are the same object.

## Singleton

Ensures that a class has only one instance and provides a global point of access to it.

## Builder

Builder pattern builds a complex object using simple objects and using a step by step approach. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object. A Builder class builds the final object step by step.

## Data Access Object

Data Access Object Pattern or DAO pattern is used to separate low level data accessing API or operations from high level business services.

## Iterator

Provides a way to access the elements of an aggregate object without exposing its underlying implementation.

## Strategy

The Strategy pattern lets you build software as a loosely coupled collection of interchangeable parts, in contrast to a monolithic, tightly coupled system. Loose coupling makes your software much more extensible, maintainable, and reusable. The main attribute of this pattern is that each strategy encapsulates algorithms i.e. it is not data based but algorithm based.

## Decorator

You can think of a decorator as a shell around the object decorated. The decorator catches any message that a client sends to the object instead. The decorator may apply some action and then pass the message it received on to the decorated object. That object probably returns a value to the decorator which may again apply an action to that result, finally sending the (perhaps-modified) result to the original client. To the client the decorator is invisible. It just sent a message and got a result. However the decorator had two chances to enhance the result returned

## Visitor

The visitor pattern makes adding new operations easy and all the related operations are localized in a visitor. The visitor pattern allows you to manipulate a collection of polymorphic objects without the messy and unmaintainable typecasts and instanceof operations. Visitor pattern allows you to add new operations, which affect a class hierarchy without having to change any of the classes in the hierarchy.

## Command

The Command pattern is an object behavioral pattern that allows you to achieve complete decoupling between the sender and the receiver. A sender is an object that invokes an operation, and a receiver is an
object that receives the request to execute a certain operation. With decoupling, the sender has no knowledge of the Receiver's interface. The term request here refers to the command that is to be executed. The Command pattern also allows you to vary when and how a request is fulfilled. At times it is necessary to issue requests to objects without knowing anything about the operation being requested or the receiver of the request. In procedural languages, this type of communication is accomplished via a call-back: a function that is registered somewhere to be called at a later point.
Commands are the object-oriented equivalent of call-backs and encapsulate the call-back function.

## Factory

The Factory method pattern (aka Factory pattern) is a creational pattern. The creational patterns abstract the object instantiation process by hiding how the objects are created and make the system independent of the object creation process. An Abstract factory pattern is one level of abstraction higher than a factory method pattern, which means it returns the factory classes.

## Class Diagrams

<img src="{{site.url}}/{{site.images}}/software-development/design-patterns.jpg">
