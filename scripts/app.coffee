class window.App
  constructor: ->
    @bindEvents()
    @setup()

  setup: ->
    $('nav a[href="#employers"]').trigger 'click'

  bindEvents: ->
    $('nav a').click @showTab

  showTab: (event)->
    link = $ event.currentTarget
    console.log 'hello'
    link.siblings('.active').removeClass('active')
    link.addClass('active')
    target = $ link.attr 'href'
    target.siblings('article').hide()
    target.show()
    false



$ ->
  window.app = new App()