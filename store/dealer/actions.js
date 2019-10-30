async function getUsers() {
  const { data } = await this.$axios.get(
    'https://jsonplaceholder.typicode.com/users'
  )
  return data
}

async function createUser({ user }) {
  const result = await this.$axios.post(
    'https://jsonplaceholder.typicode.com/users',
    user
  )
  return result
}

export default { getUsers, createUser }
