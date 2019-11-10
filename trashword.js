function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}



// define trashword function
function trashword(options) {
  const job = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let word = ''
  //防止複選多位
  if (options.founder === 'on' && options.designer === 'on') {
    let word = '請只選取一位來講幹話'
    return word
  }
  if (options.founder === 'on' && options.enginer === 'on') {
    let word = '請只選取一位來講幹話'
    return word
  }
  if (options.designer === 'on' && options.enginer === 'on') {
    let word = '請只選取一位來講幹話'
    return word
  }
  if (options.designer === 'on' && options.enginer === 'on' && options.founder === 'on') {
    let word = '請只選取一位來講幹話'
    return word
  }
  if (options.designer !== 'on' && options.enginer !== 'on' && options.founder !== 'on') {
    let word = '請至少選擇一位來講幹話'
    return word
  }

  if (options.enginer === 'on') {
    word = job[0] + `${sample(task.engineer)}${sample(phrase)}`
    return word
  }
  if (options.designer === 'on') {
    word = job[1] + `${sample(task.designer)}${sample(phrase)}`
    return word
  }

  if (options.founder === 'on') {
    word = job[2] + `${sample(task.entrepreneur)}${sample(phrase)}`
    return word
  }


}

module.exports = trashword