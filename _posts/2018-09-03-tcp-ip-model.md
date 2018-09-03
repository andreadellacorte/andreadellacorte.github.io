---
layout: post
title: TCP/IP Model
tags: [computer networks]
---

As a description framework used in computer network protocols, the TCP/IP model sets forth the design guidelines in a general sense as well as the specific networking protocol implementation. This creates a way for computers to interface via network connections.

TCP/IP does provide end-to-end connectivity, and also delineates the way in which data must be formatted, as well as addressed, transmitted and routed, and even the way it will be received. There are various protocols for communication services to and from computers.

There are four unique layers in the TCP/IP model. This is represented in the below image. The Internet Engineering Task Force (IETF) maintains the TCP/IP model and other related protocols. In another model, the OSI Reference Model, there are actually seven (7) layers. The TCP/IP model has fewer steps because it allows applications to manage actions past a certain layer.

- The Application Layer (or Layer 4)
  - Programs communicate through application layers. Think of it as a “user interface layer.” Through application layers, browser, file-sharing software, email software, and other user-facing (the user interacts with the software directly) software can interact.
  - Other aspects handled in this layer include encryption and session details.
- The Transport Layer (or Layer 3)
  - In the transport layer, devices will negotiate to determine how to talk to each other over a network.
  - This involves such decisions as communication type (e.g., User Diagram Protocol or Transmission Control Protocol), the window size, which port, how to deal with errors, as well as sequencing. Most work done in device communications is completed through this layer.
- The Internet Layer (or Layer 2)
  - The Internet Layer is where IP addressing, internetworking (connecting one network with others through gateways), and path determination occur.
  - The path that a packet will take through a network is handled in this layer through routers. The protocols in this layer will examine multiple avenues to determine the most efficient way for one host to connect to the other.
- The Link Layer (or Layer 1)
  - The link layer is responsible for encapsulating the data. The network type will determine which way this layer accomplishes it task—which encapsulation protocol is appropriate.
  - Some of them include Ethernet, Frame Relay, PPP, HDLC or CDP. The physical connection between the devices (as well as the topology of the network) plays a major part in the selection.
