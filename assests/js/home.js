const checkboxes  = document.querySelectorAll('.list-checkbox');
const desc =  document.querySelector('.in-description');
const select =  document.querySelector('.in-select');
const date =  document.querySelector('.in-date');
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');




function deleteItems() {
    for(let i = 0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            console.log(checkboxes[i].value, "id of the checkbox");
            fetch(`http://localhost:8000/tasks/delete/${checkboxes[i].value}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                location.reload();
            })
            .catch((err) => {
                console.log("Error in deletion");
            })

        }
    }
}