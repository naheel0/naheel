const starsContainer = document.querySelector('#stars-background');

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`; 

  starsContainer.appendChild(star);
}
function sendEmail(event) {
    event.preventDefault();
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    const serviceID = "service_6kxz2ig";
const templateID = "template_qd8leoi";
    emailjs.send(serviceID, templateID,params)
        .then(
            res => {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                console.log(res);
                alert("Your message has been sent successfully!");
            }
        )
        .catch(err => console.log(err));
}
