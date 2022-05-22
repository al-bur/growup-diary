from Socket import Socket
import tkinter
import ssl

WIDTH = 800
HEIGHT = 600
VSTEP = 13
HSTEP = 18
SCROLL_STEP = 100

def request(url):
    assert url.startswith("http://")
    host, path = url[len("http://"):].split("/", 1)
    path = "/" + path

    s = Socket()
    
    if recognize_HTTP_kind(url) == "https":
        s = wrap_socket_with_SSL(s, host)

    s.connect(host)
    s.send(b"GET /index.html HTTP/1.0\r\n" + 
        b"Host: example.org\r\n\r\n")
    headers, body = s.read()

    return headers, body

def recognize_HTTP_kind(url):
    scheme, url = url.split("://", 1)
    assert scheme in ["http", "https"], \
        "Unknown scheme {}".format(scheme)

    return scheme


def wrap_socket_with_SSL(s, host):
    ctx = ssl.create_default_context()
    wrapped_s = ctx.wrap_socket(s, server_hostname=host)
    
    return wrapped_s


def lex(body):
    text = ''
    in_angle = False
    for c in body:
        if c == "<":
            in_angle = True
        elif c == ">":
            in_angle = False
        elif not in_angle:
            text += c
    
    return text

def layout(text):
    display_list = []
    cursor_x, cursor_y = HSTEP, VSTEP
    for c in text:
        display_list.append((cursor_x, cursor_y, c))
        cursor_x += HSTEP
        if cursor_x >= WIDTH - HSTEP:
            cursor_y += VSTEP
            cursor_x = HSTEP

    return display_list

class Browser:
    def __init__(self):
        self.window = tkinter.Tk()
        self.canvas = tkinter.Canvas(
            self.window, 
            width=WIDTH,
            height=HEIGHT
        )
        self.canvas.pack()
        self.display_list = []
        self.scroll = 0
        self.window.bind("<Down>", self.scrolldown)

    def draw(self):
        self.canvas.delete("all")
        for x, y, c in self.display_list:
            self.canvas.create_text(x, y - self.scroll, text=c)
    
    def load(self, url):
        headers, body = request(url)
        text = lex(body)
        self.display_list = layout(text)
        self.draw()
        
    def scrolldown(self, e):
        self.scroll += SCROLL_STEP
        self.draw()




if __name__ == "__main__":
    import sys
    browser = Browser()
    browser.load(sys.argv[1])
    tkinter.mainloop()
