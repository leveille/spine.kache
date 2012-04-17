Spine = @Spine or require('spine')
Kache = @Kache or require('kache')

Spine.Model.Kache =
  extended: ->
    @change @setKache
    @fetch @loadKache

  loadKache: ->
    @cache = Kache(@className)
    result = @cache.get(@className)
    @refresh(result or [], clear: true)

  setKache: ->
    if Kache.isEnabled()
      @cache = Kache(@className)
      @cache.set(@className, this)

module?.exports = Spine.Model.Kache