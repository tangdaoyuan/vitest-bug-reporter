import bindings from 'bindings'

export function invoke() {
  let hello = bindings('drivelist-osx')

  delete require.cache[require.resolve(hello.path)]

  hello = bindings('drivelist-osx')

  return new Promise((resolve, reject) => {
    hello.list((error: Error, drives: any[]) => {
      if (error)
        reject(error)

      else
        resolve(drives)
    })
  })
}
