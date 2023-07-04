let currentStep = 1;

        function showStep(stepIndex) {
            const steps = document.getElementsByClassName("step");
            for (let i = 0; i < steps.length; i++) {
                steps[i].classList.remove("active");
            }
            steps[stepIndex - 1].classList.add("active");
        }

        function nextStep() {
            currentStep++;
            if (currentStep > 4) {
                document.getElementById("login").style.display = "block";
                return;
            }
            showStep(currentStep);
        }

        function previousStep() {
            currentStep--;
            if (currentStep < 1) {
                currentStep = 1;
            }
            showStep(currentStep);
        }

        function submitForm() {
            // Code to submit the form
            // You can implement this function using AJAX or any other method
            console.log("Form submitted!");
        }

        function showLoginOption(option) {
            const otpContainer = document.getElementById("otpContainer");
            const passwordContainer = document.getElementById("passwordContainer");

            otpContainer.style.display = option === "otp" ? "block" : "none";
            passwordContainer.style.display =
                option === "password" ? "block" : "none";
        }

        function sendOTP() {
            // Code to send OTP
            // You can implement this function using AJAX or any other method
            console.log("OTP sent!");
        }