var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

var myData = [

  ["Head & Neck","hair loss in men"],
  ["Head & Neck","headache"],
  ["Head & Neck","dizzy from standing"],
  ["Head & Neck","neck pain"],
  ["Head & Neck","Loss of smell and taste"],
  ["Head & Neck","Swollen glands in the neck"],
  ["Head & Neck","Jaw, gums and teeth pain"],
  ["Head & Neck","Insomnia"],
  ["Eyes","Dry eyes and mouth"],
  ["Eyes","eye secretions"],
  ["Eyes","eye pain"],
  ["Ear, Nose & Throat","Cough and cold"],
  ["Ear, Nose & Throat","Dry mouth and excessive thirst"],
  ["Ear, Nose & Throat","Earache in adults"],
  ["Ear, Nose & Throat","Chronic cough"],
  ["Ear, Nose & Throat","Sore throat"],
  ["Ear, Nose & Throat","sudden hearing loss"],
  ["Ear, Nose & Throat","difficulty swallowing"],
  ["Ear, Nose & Throat","Tinnitus"],
  ["chest and back","chest pain"],
  ["chest and back","Heart palpitations"],
  ["chest and back","lower back pain"],
  ["chest and back","shortness of breath in adults"],
  ["chest and back","wheezing with breathing in adults"],
  ["arms and hands","elbow pain"],
  ["arms and hands","hand pain"],
  ["arms and hands","nail problems"],
  ["arms and hands","positive rheumatoid factor"],
  ["arms and hands","shoulder pain"],
  ["arms and hands","wrist pain"],
  ["Abdomen and pelvis","stomach acid reflux"],
  ["Abdomen and pelvis","Intestinal gas"],
  ["Abdomen and pelvis","blood in urine"],
  ["Abdomen and pelvis","Colon Cancer"],
  ["Abdomen and pelvis","Constipation in adults"],
  ["Abdomen and pelvis","diarrhea"],
  ["Abdomen and pelvis","difficulty urinating"],
  ["Abdomen and pelvis","muscle weakness"],
  ["Abdomen and pelvis","pelvic joint pain"],
  ["Abdomen and pelvis","Loss of control over urination"],
  ["Abdomen and pelvis","A tumor or pain in the testicle sac"],
  ["Abdomen and pelvis","Frequent or painful urination in men"],
  ["Abdomen and pelvis","Penile pain, ulcers, secretions and tumors"],
  ["Abdomen and pelvis","rectal bleeding"],
  ["Abdomen and pelvis","Rectal pain and itching"],
  ["Abdomen and pelvis","Recurring pain in the abdomen"],
  ["Abdomen and pelvis","Recent severe abdominal pain"],
  ["Abdomen and pelvis","prostate antigen"],
  ["legs","foot pain"],
  ["legs","gout"],
  ["legs","knee pain"],
  ["legs","severe foot swelling"],
  ["legs","Osteoarthritis of the knee"],
  ["legs","Chronic knee swelling"],
  ["legs","ankle pain"],
  ["Other","worry"],
  ["Other","Fainting and loss of consciousness"],
  ["Other","erectile dysfunction for men"],
  ["Other","Depression"],
  ["Other","laziness during the day"],
  ["Other","skin dryness"],
  ["Other","fever in adults"],
  ["Other","Forgetting and amnesia"],
  ["Other","Imbalance"],
  ["Other","Itching without a rash"],
  ["Other","jaundice in adults"],
  ["Other","Nausea and vomiting"],
  ["Other","Numbness and tingling"],
  ["Other","Raynaud's phenomenon"],
  ["Other","ANA-antinuclear antibody positive"],
  ["Other","Male sexual problems"],
  ["Other","swollen glands"],
  ["Other","shivering"],
  ["Other","Weight gain without knowing the reason"],
  ["Other","Unintended weight loss"],
  ["Other","general pain"]

];

function makeDropDown(data,level1filter){

  const filteredArray = data.filter(r => r[0] === level1filter);

  const uniqueOptions = new Set();
  
  filteredArray.forEach(r => uniqueOptions.add(r[1]));
  
  const uniqueList = [...uniqueOptions];
  
  const selectLevel2 = document.getElementById("level2");

  selectLevel2.innerHTML = "";

  uniqueList.forEach(item => {
  
      const option = document.createElement("option");
      option.textContent = item;
      selectLevel2.appendChild(option);
  });    

}
function applyDropDown(){

  const selectLevel1Value = document.getElementById("level1").value;
  makeDropDown(myData,selectLevel1Value)
}

document.getElementById("level1").addEventListener("change",applyDropDown);
document.addEventListener("DOMContentLoaded",applyDropDown);