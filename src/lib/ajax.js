export default function ajax(method, url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.response);
        }
      }
    };

    request.send();
  });
}
