//new: cách appendChild
//     thêm element DOM

var getSubmit = document.querySelector('.submit')
var getContainer = document.querySelector('.container')
var getValue = document.getElementById('form-input')
var getDelete = document.querySelector('.delete')

//add list
getSubmit.addEventListener('click', function() {
    addItem() 
})

function addItem() {
    var divParent = document.createElement('div')
    var pChild = document.createElement('p')
    var div_icon = document.createElement("div")
    var icon = document.createElement("input")
    var trash = document.createElement("i")

    divParent.className = 'notes'
    pChild.className = 'text'
    pChild.innerText = getValue.value
    divParent.appendChild(pChild)

    div_icon.className = 'icon'
    icon.type = 'checkbox' 
    div_icon.appendChild(icon)

    //remove từng list
    trash.className = 'fa-solid fa-trash'
    trash.addEventListener('click', function() {
        divParent.remove()
    })

    div_icon.appendChild(trash)
    divParent.appendChild(div_icon)
    getContainer.appendChild(divParent)

    //thêm chức năng remove tất cả list
    getDelete.addEventListener('click', function() {
        divParent.remove()
    })
}

