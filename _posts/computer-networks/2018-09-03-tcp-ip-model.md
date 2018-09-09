---
layout: post
title: TCP/IP
category: computer networks
---

The TCP/IP model is a set of design guidelines and protocol implementations that enable computers to interface with each other via network connections, maintained by the Internet Engineering Task Force (IETF). TCP/IP provides end-to-end connectivity and delineates how data must be formatted, as well as addressed, transmitted, routed and received.

There are four layers in the model:

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
