let forms=document.getElementById('my-form');
forms.addEventListener('submit',addData);


function addData(e)
{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let PhNum=document.getElementById('PhNum').value;
    let email=document.getElementById('email').value;
    let myobj={
        name,PhNum,email
    } 
    axios
      .post("http://localhost:3200/add-appointment",myobj)
      .then(response=>{
        console.log(response);
        showUser(response.data.newUserDetail);
      })
      .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"    
        console.log(err)});
}

window.addEventListener("DOMContentLoaded",()=>{
    axios
        .get("http://localhost:3200")
        .then((response)=>{
            for(var i=0;i<response.data.allUserData.length;i++)
              showUser(response.data.allUserData[i]);
        })
        .catch((error)=>console.log(error));
})

function showUser(myobj)
{
    var parentElem=document.getElementById('users');
    const childElem=document.createElement('li');
    childElem.textContent=myobj.Name+'-'+myobj.Email+" "; 
    const deletebtn=document.createElement('button');
    deletebtn.textContent='Delete';

    const editbtn=document.createElement('button');
    editbtn.textContent='Edit';
    childElem.appendChild(deletebtn);
    childElem.appendChild(editbtn);
    parentElem.appendChild(childElem);

    deletebtn.addEventListener('click',function(){
      const dId=myobj.id;
        axios
          .delete(`http://localhost:3200/delete-appointment/${dId}`)
          .then(()=>{
                parentElem.removeChild(childElem);
          })
          .catch((err)=>console.log(err));
         
    });
    editbtn.addEventListener('click',function(){
      parentElem.removeChild(childElem);
      document.getElementById('name').value=myobj.Name;
      document.getElementById('PhNum').value=myobj.PhNum;
      document.getElementById('email').value=myobj.Email;
      const dId=myobj.id;
      axios
      .delete(`http://localhost:3200/delete-appointment/${dId}`)
      .then(()=>{
            parentElem.removeChild(childElem);
      })
      .catch((err)=>console.log(err));
    })
}