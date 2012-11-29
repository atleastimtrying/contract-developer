class window.App
  constructor: ->
    
  supports_html5_storage: -> window.localStorage isnt null

$ ->
  window.app = new App()