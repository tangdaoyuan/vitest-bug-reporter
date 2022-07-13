import bindings from 'bindings'

export function invoke() {
  const hello = bindings('hello')
  return hello.hello()
}
