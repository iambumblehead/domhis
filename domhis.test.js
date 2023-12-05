import test from 'node:test'
import assert from 'node:assert/strict'
import jsdom from 'jsdom'
import domhis from './domhis.js'

test('should basically work', async () => {
  const popped = []
  const dom = new jsdom.JSDOM(
    '<!DOCTYPE html><body><div id="first-element"></div></body>', {
      url: 'https://0.0.0.0:4545/'
    })

  domhis.onpopstate(dom.window, (e, fn) => {
    popped.push(e)

    fn()
  })

  dom.window.history.pushState({ page: 1 }, "title 1", "?page=1")
  dom.window.history.pushState({ page: 2 }, "title 2", "?page=2")
  dom.window.history.back()
  dom.window.history.back()
  dom.window.onpopstate({ state: { uri: 'newurl/1' }})
  dom.window.onpopstate({ state: { uri: 'newurl/2' }})

  assert.deepStrictEqual(popped, [
    'newurl/1',
    'newurl/2'
  ])
})
