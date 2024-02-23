function sweet_else() {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "โปรดกรอกข้อมูลให้เสร็จสิ้น",
    showConfirmButton: true,
    timer: 9000,
  });
}

function calculateBmi() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (!weight || !height) {
    sweet_else();
    return;
  }

  const bmi = weight / (height / 100) ** 2;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
            <div role="alert" class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>คำณวนสำเร็จ !</span>
        </div>
        <br>
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">

        <p>ค่า BMI ของคุณคือ: ${bmi.toFixed(2)}</p>
        <p>ผลลัพธ์:</p>
        <p class="${getResultClass(bmi)}">${checkBmiResult(bmi)}</p>
        </div>
        </div>
    `;
}

function checkBmiResult(bmi) {
  if (bmi < 18.5) return "อยู่ในเกณฑ์น้ำหนักน้อย / ผอม";
  if (bmi < 23) return "อยู่ในเกณฑ์ปกติ (สุขภาพดี)";
  if (bmi < 25) return "อยู่ในเกณฑ์น้ำหนักเกิน";
  if (bmi < 30) return "อยู่ในเกณฑ์อ้วน";
  return "อยู่ในเกณฑ์อ้วนมาก";
}

function getResultClass(bmi) {
  if (bmi < 18.5) return "gray";
  if (bmi < 23) return "green";
  if (bmi < 25) return "yellow";
  return "red";
}
