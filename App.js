let add = document.getElementById("add")
    let first = document.getElementById('first')
    let arr = JSON.parse(localStorage.getItem('studentData')) || []

    add.addEventListener("click", function () {
      first.innerHTML = `
        <input type="text" placeholder="Enter Your Name" id="name"><br>
        <input type="email" placeholder="Enter Your Email" id="email" required><br>
        <input type="number" placeholder="Enter Your Age" id="age"><br>
        <input type="number" placeholder="Enter A Mobile Number" id="mobile"><br>
        <input type="radio" value="Male" name="gender" class="abc" id="male"><label for="male" id="">Male</label>
        <input type="radio" value="Female" name="gender" class="abc" id="female"><label for="female" id="">Female</label>  <br>
        <button id="second" class="btn btn-success mt-3">Add Student</button>
        <button id="clear" class="btn btn-danger mt-3">Delete All Data</button>
        <button id="checkStudent" class="btn btn-info mt-3 text-white">Check Student</button>
        <br><br>
        <table class="table table-bordered text-white">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Joined</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="table"></tbody>
        </table>
      `
      document.getElementById('checkStudent').addEventListener('click', () => {
        window.location.href = `student.html`
      })

      let table = document.getElementById("table")
      document.getElementById('clear').addEventListener('click', () => {
        localStorage.clear();
        arr = [];
        table.innerHTML = ``;
      })

      add.style.display = 'none'
      let mob = document.getElementById("mobile")
      let email = document.getElementById("email")
      let age = document.getElementById("age")
      let StudentName = document.getElementById("name")
      let gender = document.getElementsByName('gender')

      document.getElementById("second").addEventListener('click', function () {
        let ans;
        for (let i = 0; i < gender.length; i++) {
          if (gender[i].checked) {
            ans = gender[i].value
          }
        }

        if (!StudentName.value || !email.value || !age.value || !mob.value || !ans) {
          alert("Please fill all fields!");
          return;
        }

        let obj = {
          RollNumber: Math.floor(Math.random() * 1000 + 1000),
          name: StudentName.value.charAt(0).toUpperCase() + StudentName.value.slice(1),
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

      local()
    })

    function local() {
      let table = document.getElementById("table")
      table.innerHTML = ``
      localStorage.setItem('studentData', JSON.stringify(arr))
      for (let i = 0; i < arr.length; i++) {
        let now = dayjs();
        let date = dayjs(arr[i].Date);
        let diff = now.diff(date, 'second');
        let result =
          diff < 60 ? `${diff} seconds ago` :
            diff < 3600 ? `${Math.floor(diff / 60)} minutes ago` :
              diff < 86400 ? `${Math.floor(diff / 3600)} hours ago` :
                `${Math.floor(diff / 86400)} days ago`;

        table.innerHTML += `
          <tr>
            <td>${arr[i].RollNumber}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].gender}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].mobile}</td>
            <td>${result}</td>
            <td><img src="https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png" alt="delete" class="dlt" width="25"></td>
          </tr>`
      }

      let dlt = document.querySelectorAll('.dlt')
      dlt.forEach((icon, index) => {
        icon.addEventListener('click', () => {
          arr.splice(index, 1)
          localStorage.setItem("studentData", JSON.stringify(arr));
          local()
        })
      })
    }