if (!window.FAQIT) {
  ;(function () {
    var url = 'https://cdn.jsdelivr.net/gh/fractionapps/faqit-dist@master/faqit.js?' + new Date().getTime()
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = url
    var x = document.querySelector('body')
    x.appendChild(s)
  })()
}
