const app = document.getElementById('app')

const req = new XMLHttpRequest()
req.onreadystatechange = () => {
  if (req.readyState == 4) {
    if (req.status == 200) {
      app.innerHTML = req.responseText
    }
  } else {
    app.innerHTML = '通信中...'
  }
}

req.open('GET', '/get')
req.send(null)
