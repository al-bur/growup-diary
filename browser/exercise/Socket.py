import socket

class Socket:
    def __init__(self):
        self.s = socket.socket(
            family=socket.AF_INET,
            type=socket.SOCK_STREAM,
            proto=socket.IPPROTO_TCP,
        )

    def connect(self, host):
        self.s.connect((host, 80))

    def send(self, message):
        return self.s.send(message)

    def read(self):
        response = self.s.makefile("r", encoding="utf8", newline="\r\n")
        statusline = response.readline()
        version, status, explanation = statusline.split(" ", 2)
        assert status == "200", "{}: {}".format(status, explanation)
        
        headers = {}
        while True:
            line = response.readline()
            if line == "\r\n": break
            header, value = line.split(":", 1)
            headers[header.lower()] = value.strip()
        
        body = response.read()
        self.s.close()

        return headers, body