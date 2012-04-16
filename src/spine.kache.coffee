Spine = @Spine or require('spine')
Kache = @Kache or require('kache')

Spine.Model.Kache =
  init: ->
    @cache = Kache(@className)

  extended: ->
    @change @set
    @fetch @get

  get: ->
    result = @cache.get(@className)
    @refresh(result or [], clear: true)

  isEnabled: ->
    Kache.isEnabled()

  set: ->
    if @isEnabled()
      @cache.set(@className, result)

module?.exports = Spine.Model.Kache