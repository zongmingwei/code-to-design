// fetch 函数接受两个参数
fetch(
  // 第一个是一个请求地址
  '',
  // 第二个是请求的额外参数
  {
    headers: {
      'X-Figma-Token': ''
    }
  }
)
.then(res => res.json())
.then(data => {
  // 取到 data.document，等同于 document = data.document
  const { document } = data
  const home = document.children[0].children[2]
  const introduction = home.children[1]
  // 取到 title 和 description
  // 等同于 title = introduction.children[0]，description = introduction.children[1]
  const [title, description] = introduction.children
  // 找到 DOM 元素并替换文字
  const introTitle = document.querySelector('.introduction h3')
  const introDesc = document.querySelector('.introduction p')
  introTitle.innerText = title.characters
  introDesc.innerText = description.characters
})