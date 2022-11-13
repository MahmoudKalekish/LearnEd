const firebaseConfig = {
  apiKey: "AIzaSyDNFHGV0ulcJEmHMUxQYd_SV0TlKzATas0",
  authDomain: "learned-a030e.firebaseapp.com",
  databaseURL: "https://learned-a030e-default-rtdb.firebaseio.com",
  projectId: "learned-a030e",
  storageBucket: "learned-a030e.appspot.com",
  messagingSenderId: "9229312731",
  appId: "1:9229312731:web:3e2029d4b9d817ed0be2fe"
  };
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };  