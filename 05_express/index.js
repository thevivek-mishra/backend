const express = require("express")
const fs = require("fs")

const app = express();

const users = require("./MOCK_DATA.json");
const { PerformanceNodeTiming } = require("perf_hooks");


const port = 8000

app.use(express.urlencoded({extended:false}))

app.use((req,res, next)=>{
    console.log("hello from middleware");
    fs.appendFile("./log.txt",`\n${Date.now()}: ${req.method} ${req.path} `,()=>{
        next()
    })
})

app.get("/api/users",(req,res)=>{
    res.json(users)
})
app.get("/users",(req,res)=>{
    const html = `
    <ul>
     ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user)
})
app.post("/api/users",(req,res)=>{
    const body = req.body
    users.push({id:users.length, ...body})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{

        return res.json({status: "success", id:users.length+1})
    })
    
    

})

app.patch("/api/users/:id",(req,res)=>{
    // TODO: Edit the user with id
    const id = Number(req.param.id);
    const updatedData = req.body
    const index = users.findIndex((item)=>item.id === id)
    users[index] = {...users[index], ...updatedData}
    res.json({status:"successfully data updated", id:users.length})
//    if(index !== -1){

//    }else {
//     // If the item with the given ID is not found
//     res.status(404).json({ message: 'Item not found' });
// }
    
})

app.delete("/api/users/:id", (req, res) => {
    // TODO: Delete the user with id 1
   return res.join({status: "pending"});
})

// here route "/api/users/:id" is same in every router so we can use single route

// app.route("/api/users/:id")
// .get((req,res)=>{})
// .patch((req,res)=>{})
// .delete((req,res)=>{})
// .post((req,res)=>{})


app.listen(port, ()=>{
    console.log("server is running on port"+port)
})