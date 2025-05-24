let add = document.getElementById("add")
let first = document.getElementById('first')
// localStorage.setItem('11',JSON.stringify("abd"))
let arr = JSON.parse(localStorage.getItem('studentData')) || []

add.addEventListener("click", function () {
    first.innerHTML = `   <input type="text" placeholder="Enter Your Name" id="name"  class="btn"><br>
    <input type="email" placeholder="Enter Your Email" id="email"  class="btn"  required><br>
    <input type="number" placeholder="Enter Your Age" id="age"  class="btn"><br>
    <input type="number" placeholder="Enter A Mobile Number" id="mobile"  class="btn"><br>
    <input type="radio" value="Male" name="gender" class="abc"> Male
    <input type="radio" value="Female" name="gender" class="abc"> Female <br>
    <button id="second" class="btn bg-primary text-light mt-3">Add Student</button>
    <button id="clear" class="btn bg-primary text-light mt-3">Delete All Data</button>
    <button id="checkStudent" class="btn bg-primary text-light mt-3">Check Student</button>
    <br>
    <br>
    <table border="1">
    <thead>
    <tr>
    <th>Roll Number</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Age</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Joining </th>
    </tr>
    </thead>
    <tbody id="table">
    </tbody>
    
    </table>
    `
    document.getElementById('checkStudent').addEventListener('click', () => {
        window.location.href = `student.html`
    })

    let table = document.getElementById("table")
    document.getElementById('clear').addEventListener('click', () => {
        clear();
    })
    add.style.display = 'none'
    let mob = document.getElementById("mobile")
    let email = document.getElementById("email")
    let age = document.getElementById("age")
    let StudentName = document.getElementById("name")
    let img = document.getElementById("img")
    let gender = document.getElementsByName('gender')
    let ans

    let second = document.getElementById("second").addEventListener('click', function () {
        let abc = StudentName.value.slice(0, 1).toUpperCase() + StudentName.value.slice(1)
        // console.log(abc);
        let random = Math.floor(Math.random() * 1000 + 1000)
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                ans = gender[i].defaultValue
            }
        }

        let obj = {
            RollNumber: random,
            name: abc,
            gender: ans,
            age: age.value,
            email: email.value,
            mobile: mob.value,
            Date: dayjs().format(),
        }
        arr.push(obj)

        mob.value = ``
        StudentName.value = ``
        age.value = ``
        email.value = ``
        local()
    })

    function clear() {
        localStorage.clear();
        table.innerHTML = ``
    }
    local()
})



function local() {
    table.innerHTML = ``
    localStorage.setItem('studentData', JSON.stringify(arr))
    for (let i = 0; i < arr.length; i++) {
        let now = dayjs();
        let date = dayjs(arr[i].Date);
        let minutes = now.diff(date, 'minute');
        let second = now.diff(date, 'second');
        let Hours = now.diff(date, 'hour');
        let Days = now.diff(date, 'day');
        let result;
        if (second < 60) {
            result = `${second} Seconds ago`;
        }
        else if (minutes < 60) {
            result = `${minutes} Minutes ago`;
        } else if (Hours < 24) {
            result = `${Hours} Hours ago`;
        } else {
            result = `${Days} Days ago`;
        }

        table.innerHTML += `<tr>
            <td>${arr[i].RollNumber}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].gender}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].mobile}</td>
            <td>${result}</td>
            <td><img src="delete.png" alt="" width="25" class="dlt"></td>
        </tr>`
        let dlt = document.querySelectorAll('.dlt')

        for (let j = 0; j < dlt.length; j++) {
            dlt[j].addEventListener('click', (e) => {
                let parentElement = e.target.parentElement.parentElement
                parentElement.remove()
                arr.splice(j, 1)
                localStorage.setItem("studentData", JSON.stringify(arr));
            })
        }
    }
}


// let now = dayjs().format('h:m A')
// let date = arr[0].Date
// let abc = dayjs()
// console.log(date.diff(abc,'min'));
// console.log(now);

// console.log(result);