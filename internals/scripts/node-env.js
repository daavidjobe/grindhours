
export function checkEnv (env) {
  if (!env) {
    throw new Error('Expected environment argument not set')
  }
  if (process.env.NODE_ENV !== env) {
    console.log(`"process.env.NODE_ENV" must be "${env}" to use this webpack config`)
    process.exit(2)
  }
}
