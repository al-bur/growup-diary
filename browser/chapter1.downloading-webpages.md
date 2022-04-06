# Downloading Web Pages


A web browser displays information identified by a URL. And the first step is to use that URL to connect to and download that information from a server somewhere on the Internet.

## Connecting to a server

 the first part of the web page’s URL (before the first /) tells it the server’s host name. -> The OS then talks to a DNS server which convertsOn some systems, you can run dig +short example.org to do this conversion yourself. a host name like example.org into a destination IP address like 93.184.216.34. -> When the message reaches the server, a connection is created. 
 
 ## Requesting information

Once it’s connected, the browser requests information from the server by giving its path, the path being the part of a URL that comes after the host name, like /index.html.

![image](https://user-images.githubusercontent.com/64825713/161973306-70c30a62-5304-4928-bafa-c59a2d0b41a0.png)

After the first line, each line contains a header, which has a name (like Host) and a value (like example.org).
the Host header, for example, tells the server who you think it is.
Finally, after the headers comes a single blank line; that tells the host that you are done with headers. 
and you should get a response from example.org.

## The server’s response

The server’s response starts with this line:

![image](https://user-images.githubusercontent.com/64825713/161973626-776bb09a-718b-445b-95f1-c73d839f3734.png)

![image](https://user-images.githubusercontent.com/64825713/161973720-07ad70aa-bf31-43dd-857a-8ae1e2ee396b.png)

After the 200 OK line, the server sends its own headers. 

![image](https://user-images.githubusercontent.com/64825713/161973870-36e05476-74b6-4b45-a0e6-68d893bc02d0.png)

There is a lot here, about the information you are requesting (Content-Type, Content-Length, and Last-Modified), about the server (Server, X-Cache), about how long the browser should cache this information (Cache-Control, Expires, Etag), about all sorts of other stuff.

After the headers there is a blank line followed by a bunch of HTML code. This is called the body of the server’s response, and your browser knows that it is HTML because of the Content-Type header, which says that it is text/html. 

## Telnet in Python


![image](https://user-images.githubusercontent.com/64825713/161974125-c19fddc8-5f61-4846-84a7-8c88abbab468.png)


This URL has three parts: the scheme explains how to get the information; the host explains where to get it; and the path explains what information to get.

Now we must separate the host from the path.

With the host and path identified, the next step is to connect to the host. 

When you want to talk to other computers (either to tell them something, or to wait for them to tell you something), you create a socket, and then that socket can be used to send information back and forth. 

we can create a socket like so:

![image](https://user-images.githubusercontent.com/64825713/161974654-97d82aea-d2e5-4693-a2f9-6bd31ef5eb0a.png)

Once you have a socket, you need to tell it to connect to the other computer. For that, you need the host and a port. The port depends on the type of server you’re connecting to

![image](https://user-images.githubusercontent.com/64825713/161974729-8935a6fe-08e3-49f1-83cf-516df7ae44ae.png)


## Request and response

Now that we have a connection, we make a request to the other server. To do so, we send it some data using the send method

You’ll notice that the send call returns a number, in this case 47. That tells you how many bytes of data you sent to the other computer; if, say, your network connection failed midway through sending the data, you might want to know how much you sent before the connection failed.

Here makefile returns a file-like object containing every byte we receive from the server. I am instructing Python to turn those bytes into a string using the utf8 encoding, or method of associating bytes to letters.

The first line is the status line:

After the status line come the headers

Finally, the body is everything else the server sent us:

## Displaying the HTML

The HTML code in the body defines the content you see in your browser window when you go to http://example.org/index.html. 

In HTML, there are tags and text. Each tag starts with a < and ends with a >; generally speaking, tags tell you what kind of thing some content is, while text is the actual content.That said, some tags, like img, are content, not information about it. Most tags come in pairs of a start and an end tag;

The most important HTML tag is called <body> (with its pair, </body>). Between these tags is the content of the page; outside of these tags is various information about the page,

## Encrypted connections

websites are migrating to the https scheme. The difference between http and https is that https is more secure— The https scheme, or more formally HTTP over TLS, is identical to the normal http scheme, except that all communication between the browser and the host is encrypted.

