---
layout: post
title: Load Balancers
category: software-development
toc: true
---

Load balancing refers to efficiently distributing incoming network traffic across a group of back-end servers, also known as a “server farm” or “server pool”.

Modern high-traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To cost effectively scale to meet these high volumes, modern computing best practice generally requires adding more servers.

A load balancer acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

In this manner, a load balancer performs the following functions:

- Distributes client requests or network load efficiently across multiple servers
- Ensures high availability and reliability by sending requests only to servers that are online
- Provides the flexibility to add or subtract servers as demand dictates

### Load Balancing Algorithms

Different load balancing algorithms provide different benefits; the choice of load balancing method depends on your needs:

- Round-robin – Requests are distributed across the group of servers sequentially.
- Least connections – A new request is sent to the server with the fewest current connections to clients. The relative computing capacity of each server is factored into determining which one has the least connections.
- IP hash – The IP address of the client is used to determine which server receives the request.

### Session Persistence

Information about a user’s session is often stored locally in the browser. For example, in a shopping cart application the items in a user’s cart might be stored at the browser level until the user is ready to purchase them. Changing which server receives requests from that client in the middle of the shopping session can cause performance issues or outright transaction failure. In such cases, it is essential that all requests from a client are sent to the same server for the duration of the session. This is known as session persistence.

The best load balancers can handle session persistence as needed. Another use case for session persistence is when an upstream server stores information requested by a user in its cache to boost performance. Switching servers would cause that information to be fetched for the second time, creating performance inefficiencies.

### Dynamic Configuration of Server Groups

Many fast-changing applications require new servers to be added or taken down on a constant basis. This is common in environments such as the Amazon Elastic Compute Cloud (EC2), which enables users to pay only for the computing capacity they actually use, while at the same time ensuring that capacity scales up in response traffic spikes. In such environments it greatly helps if the load balancer can dynamically add or remove servers from the group without interrupting existing connections.

### Hardware vs. Software Load Balancing

Load balancers typically come in two flavors: hardware-based and software-based. Vendors of hardware-based solutions load proprietary software onto the machine they provide, which often uses specialized processors. To cope with increasing traffic at your website, you have to buy more or bigger machines from the vendor. Software solutions generally run on commodity hardware, making them less expensive and more flexible. You can install the software on the hardware of your choice or in cloud environments like AWS EC2.
