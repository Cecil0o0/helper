const walkDom = function walkDomGen(attrs = ['nodeName']) {
  return function walkDom(element) {
    const node = {
      children: []
    }
    // 取值
    for(let i = 0 ; i < attrs.length; i ++) {
      let attr = attrs[i]
      element[attr] && (node[attr] = element[attr])
    }
    let children = element.children
    for (let i = 0; i < children.length; i ++) {
      let child = walkDom(children[i])
      node.children.push(child)
    }
    return node
  }
}

module.exports = {
  walkDom
}
