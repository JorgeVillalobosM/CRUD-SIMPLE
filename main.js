var name;
var names=[];
var names2;
var userTR= document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create(){
    name=document.getElementById("name").value;
    if(name==''){
        alert("Escribe el nombre");
    }else{
        names.push(name);
    }
}

function Read(){
    userTR.innerHTML='';
    names2=names;
    if(names2!=null){
        for(var i=0;i<names2.length;i++){
            userTR.innerHTML+=`
            <div class="bg-dark border border-success text-white card mb-2">
            <div class="card-body">
            <p>Usuario: ${names2[i]}</p>
            <button class="col-5 text-white btn btn-warning" onclick="Update(${i})">Editar</button>
            <button class="col-5 text-white btn btn-danger" onclick="Delete(${i})">Eliminar</button>
            </div>
            </div>
            `
        }
    }
}

function Update(i3){
    let names4=[names2];
    userTR.innerHTML='';
    for(var i=0;i<names4.length;i++){
        if(i==i3){
            userTR.innerHTML+=`
            <div class="bg-dark border border-danger text-white card mb-2">
            <div class="card-body">
            <p>Usuario: ${names2[i]}</p>
            <input class="mb-2 form-control" id="newName" placeholder="${names4[i]}">
            <button class="col-5 text-white btn btn-success" onclick="Update2(${i})">Actualizar</button>
            <button class="col-5 text-white btn btn-danger" onclick="Read()">Cancelar</button>
            </div>
            </div>
            `
        }else{
            userTR.innerHTML+=
           `<div class="bg-dark border border-success text-white card mb-2">
           <div class="card-body">
           <p>Usuario: ${names2[i]}</p>
           <button disabled class="col-5 text-white btn btn-warning" onclick="Update(${i})">Editar</button>
           <button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${i})">Eliminar</button>
           </div>
           </div>`
        }
    }
}

function Update2(i){
    let names5=names;
    names5[i]=document.getElementById("newName").value;
    if(names5[i]==''){
        alert("Escribe un nombre");
    }else{
        names5=names
        Read();
    }
}

function Delete(i2){
    let names3=names;
    names3.splice(i2,1);
    Read();
}

