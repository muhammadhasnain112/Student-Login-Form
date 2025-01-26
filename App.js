let add = document.getElementById("add")
let first = document.getElementById('first')
add.addEventListener("click", function () {
    first.innerHTML = `   <input type="text" placeholder="Enter Your Name" id="name"  class="btn"><br>
    <input type="email" placeholder="Enter Your Email" id="email"  class="btn"  required><br>
    <input type="number" placeholder="Enter Your Age" id="age"  class="btn"><br>
    <input type="number" placeholder="Enter A Mobile Number" id="mobile"  class="btn"><br>
    <input type="radio" value="Male" name="gender" class="abc"> Male
    <input type="radio" value="Female" name="gender" class="abc"> Female <br>
    <button id="second" class="btn bg-primary text-light mt-3">Add Student</button>
    <br>
    <br>
    <table border="1" id="table">
    <tr>
        <th>Roll Number</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Email</th>
        <th>Mobile Number</th>
    </tr>
</table>
`
    add.style.display = 'none'
    let mob = document.getElementById("mobile")
    let email = document.getElementById("email")
    let age = document.getElementById("age")
    let name = document.getElementById("name")
    let gender = document.getElementsByName('gender')
    let ans
    let second = document.getElementById("second").addEventListener('click', function () {
        let abc = name.value.slice(0, 1).toUpperCase() + name.value.slice(1)
        // console.log(abc);
        let random = Math.floor(Math.random() * 1000 + 1000)
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                ans = gender[i].defaultValue
            }
        }
        let table = document.getElementById("table")
        table.innerHTML += `<tr>
        <td>${random}</td>
        <td>${abc}</td>
        <td>${ans}</td>
        <td>${age.value}</td>
        <td>${email.value}</td>
        <td>${mob.value}</td>
    </tr>`
        mob.value = ``
        name.value = ``
        age.value = ``
        email.value = ``
    })


})