import Users from '../components/Users'

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function Indexpage(){
  const users = await fetchUsers();

  return(
    <div>
      <h1>Index</h1>
      <Users users={users}/>
    </div>
  )
}

export default Indexpage