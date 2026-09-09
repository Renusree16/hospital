// ==========================================
// APPOINTMENT FORM
// ==========================================

const appointmentForm =
    document.querySelector(".appointment-form form");


if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get values

        const name =
            appointmentForm.querySelector(
                'input[placeholder="Full Name"]'
            ).value.trim();


        const age =
            appointmentForm.querySelector(
                'input[placeholder="Age"]'
            ).value;


        const mobile =
            appointmentForm.querySelector(
                'input[placeholder="Mobile Number"]'
            ).value.trim();


        const selects =
            appointmentForm.querySelectorAll("select");


        const gender = selects[0].value;

        const department = selects[1].value;

        const doctor = selects[2].value;


        const date =
            appointmentForm.querySelector(
                'input[type="date"]'
            ).value;


        const time =
            appointmentForm.querySelector(
                'input[type="time"]'
            ).value;


        // ==========================================
        // VALIDATION
        // ==========================================

        if (name === "") {

            alert("Please enter your name.");

            return;

        }


        if (age === "" || age <= 0) {

            alert("Please enter a valid age.");

            return;

        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;

        }


        if (gender === "Select Gender") {

            alert("Please select your gender.");

            return;

        }


        if (department === "Select Department") {

            alert("Please select a department.");

            return;

        }


        if (doctor === "Select Doctor") {

            alert("Please select a doctor.");

            return;

        }


        if (date === "") {

            alert("Please select an appointment date.");

            return;

        }


        if (time === "") {

            alert("Please select an appointment time.");

            return;

        }


        // ==========================================
        // CREATE APPOINTMENT
        // ==========================================

        const appointment = {

            name: name,

            age: age,

            mobile: mobile,

            gender: gender,

            department: department,

            doctor: doctor,

            date: date,

            time: time

        };


        // Get existing appointments

        let appointments =
            JSON.parse(
                localStorage.getItem("appointments")
            ) || [];


        // Add new appointment

        appointments.push(appointment);


        // Save appointments

        localStorage.setItem(
            "appointments",
            JSON.stringify(appointments)
        );


        // Success message

        alert(
            "Appointment booked successfully!\n\n" +

            "Patient Name: " + name + "\n" +

            "Doctor: " + doctor + "\n" +

            "Department: " + department + "\n" +

            "Date: " + date + "\n" +

            "Time: " + time
        );


        // Clear form

        appointmentForm.reset();

    });

}


// ==========================================
// ADMIN DASHBOARD
// ==========================================

const appointmentTableBody =
    document.getElementById(
        "appointmentTableBody"
    );


if (appointmentTableBody) {

    displayAppointments();

}


// ==========================================
// DISPLAY APPOINTMENTS
// ==========================================

function displayAppointments() {

    const appointments =
        JSON.parse(
            localStorage.getItem("appointments")
        ) || [];


    appointmentTableBody.innerHTML = "";


    appointments.forEach(function(appointment, index) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${appointment.name}</td>

            <td>${appointment.age}</td>

            <td>${appointment.mobile}</td>

            <td>${appointment.gender}</td>

            <td>${appointment.department}</td>

            <td>${appointment.doctor}</td>

            <td>${appointment.date}</td>

            <td>${appointment.time}</td>

        `;


        appointmentTableBody.appendChild(row);

    });


    // Update statistics

    const totalAppointments =
        document.getElementById(
            "totalAppointments"
        );


    const totalPatients =
        document.getElementById(
            "totalPatients"
        );


    if (totalAppointments) {

        totalAppointments.textContent =
            appointments.length;

    }


    if (totalPatients) {

        totalPatients.textContent =
            appointments.length;

    }

}


// ==========================================
// CLEAR APPOINTMENTS
// ==========================================

function clearAppointments() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete all appointments?"
        );


    if (confirmDelete) {

        localStorage.removeItem("appointments");

        displayAppointments();

        alert("All appointments have been deleted.");

    }

}
// ==========================================
// PATIENT REGISTRATION
// ==========================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const mobile =
                document.getElementById(
                    "registerMobile"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;

            }


            const patient = {

                name: name,

                email: email,

                mobile: mobile,

                password: password

            };


            localStorage.setItem(
                "patient",
                JSON.stringify(patient)
            );


            alert(
                "Registration successful!"
            );


            window.location.href =
                "login.html";

        }
    );

}


// ==========================================
// PATIENT LOGIN
// ==========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const savedPatient =
                JSON.parse(
                    localStorage.getItem("patient")
                );


            if (!savedPatient) {

                alert(
                    "No account found. Please register first."
                );

                return;

            }


            if (
                email === savedPatient.email &&
                password === savedPatient.password
            ) {

                alert(
                    "Login successful!"
                );


                window.location.href =
                    "appointment.html";

            }

            else {

                alert(
                    "Invalid email or password."
                );

            }

        }
    );

}