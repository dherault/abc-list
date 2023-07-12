const abc = 'abcdefghijklmnopqrstuvwxyz'
const abcLength = abc.length

export function toAbc(number: number) {
  let result = ''
  let rest = number

  while (rest >= 0) {
    const index = rest % abcLength

    result = abc[index] + result
    rest = Math.floor(rest / abcLength) - 1
  }

  return result
}

export function fromAbc(string: string) {
  let result = 0

  for (let i = 0; i < string.length; i++) {
    const index = abc.indexOf(string[i])

    if (index === -1) throw new Error(`fromAbc: Invalid input: "${string}"`)

    result = result * abcLength + index + 1
  }

  return result - 1
}
