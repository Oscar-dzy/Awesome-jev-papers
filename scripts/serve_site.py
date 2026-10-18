"""Local static preview, including correct ES module MIME types on Windows."""
import functools
import http.server
from pathlib import Path

http.server.SimpleHTTPRequestHandler.extensions_map['.mjs'] = 'text/javascript'
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(Path(__file__).resolve().parents[1] / 'docs'))
http.server.ThreadingHTTPServer(('127.0.0.1', 8766), handler).serve_forever()
