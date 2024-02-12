import * as pg from 'pg'
export const con = new pg.Client({
    host:'Localhost',
    user:'postgres',
    port:'5432',
    password:'Julisal20',
    database: 'Catastral'
})

con.connect()
.then(()=>console.log("conexion exitosa"))
.catch((err)=>console.log(err))

con.query("SET search_path TO ric",(err,rest)=>{
    if(err)console.log(err)
    console.log(rest)
}
)
