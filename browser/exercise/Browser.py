from Socket import Socket
import ssl

class Browser:
    def request(self, url):
        assert url.startswith("http://")
        host, path = url[len("http://"):].split("/", 1)
        path = "/" + path

        s = Socket()
        
        if self.recognize_HTTP_kind(url) == "https":
            s = self.wrap_socket_with_SSL(s, host)

        s.connect(host)
        s.send(b"GET /index.html HTTP/1.0\r\n" + 
            b"Host: example.org\r\n\r\n")
        headers, body = s.read()

        return headers, body

    def show(self, body):
        in_angle = False
        for c in body:
            if c == "<":
                in_angle = True
            elif c == ">":
                in_angle = False
            elif not in_angle:
                print(c, end="")

    def load(self, url):
        headers, body = self.request(url)
        self.show(body)

    def recognize_HTTP_kind(self, url):
        scheme, url = url.split("://", 1)
        assert scheme in ["http", "https"], \
            "Unknown scheme {}".format(scheme)

        return scheme

    def wrap_socket_with_SSL(self, s, host):
        ctx = ssl.create_default_context()
        wrapped_s = ctx.wrap_socket(s, server_hostname=host)
        
        return wrapped_s
        




if __name__ == "__main__":
    import sys
    browser = Browser()
    browser.load(sys.argv[1])
