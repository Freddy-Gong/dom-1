const div = dom.create('<div>new</div>')
console.log(div)

dom.after(test, div)

const div3 = dom.create('<div id ="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'hi')
const title = dom.attr(test, 'title')
console.log(`title:${title}`)

dom.text(test, '新的文本内容')
dom.text(test)

dom.style(test, { border: '1px solid red', color: 'blue' })

dom.on(test, 'click', () => {
    console.log('点击了')
})

dom.parent(test)

console.log(dom.sibling(dom.find('#s2')[0]))
