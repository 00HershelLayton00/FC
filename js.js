// Variable global para la fecha de nacimiento  
const birthdate = new Date(2007,9,23); // Cambia esta fecha por la de la persona año/mes/dia

function updateCountdown() {  
    const now = new Date();
    let currentYear = now.getFullYear();  
    let nextBirthday = new Date(currentYear, birthdate.getMonth(), birthdate.getDate(), 0,0,0);  

    var timeDifference = nextBirthday - now;  
    if(timeDifference<0)timeDifference*=-1;
       
    // Calcular días, horas, minutos y segundos restantes  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);  

    // Actualizar el contenido en el HTML  
    document.getElementById('days').textContent = String(days).padStart(2, '0');  
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');  
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');  
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');  

    // Mostrar mensajes y actualizar estilos según sea necesario  
    if(now.getMonth()==birthdate.getMonth()&&now.getDate()==birthdate.getDate()) {
        const age = now.getFullYear() - birthdate.getFullYear();  
        document.getElementById('age').textContent = age;  
        document.getElementById('birthdayMessage').style.display = 'block';  
        document.getElementById('poem').style.display = 'block';  
        document.getElementById('countdown').style.fontSize = '1rem'; // Hacer el contador más pequeño  
        document.getElementById('mainMessage').style.display = 'none'; // Ocultar el mensaje principal  
    } else {  
        document.getElementById('birthdayMessage').style.display = 'none';  
        document.getElementById('poem').style.display = 'none';  
        document.getElementById('countdown').style.fontSize = '1.5rem'; // Restaurar tamaño del contador  
        document.getElementById('mainMessage').style.display = 'block'; // Mostrar el mensaje principal  
    }  
}  

// Iniciar el cronómetro y actualizar cada segundo  
setInterval(updateCountdown, 1000);  
updateCountdown(); // Iniciar inmediatamente  
