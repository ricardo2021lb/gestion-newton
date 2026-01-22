const CONFIG = {
    // Reemplaza con la URL que obtendrás al publicar tu script
    URL_BACKEND: "https://script.google.com/macros/s/AKfycbyzqD1w54dzJEhw2VWSaf4tw5G2ZT9Jzf6SXXK8cZjZMJywgkeqc4oXjPamkCEMeinPYw/exec", 
    API_KEY: "Newton_2026_Seguro_XY123" // Inventa una clave
};

// FUNCIÓN MAESTRA PARA LLAMAR AL BACKEND
async function ejecutarBackend(accion, parametros = {}) {
    const cuerpo = {
        key: CONFIG.API_KEY,
        accion: accion,
        ...parametros
    };

    try {
        const respuesta = await fetch(CONFIG.URL_BACKEND, {
            method: "POST",
            mode: "no-cors", // Importante para evitar bloqueos de navegador
            body: JSON.stringify(cuerpo)
        });
        
        // Nota: Con 'no-cors' no podemos leer la respuesta directamente.
        // Si necesitas leer datos (GET), se usa un método un poco diferente.
        return true; 
    } catch (e) {
        console.error("Error de conexión:", e);
    }
}

// EJEMPLO: Adaptación de tu función actual para registrar un pago
async function registrarPagoEnGoogle() {
    const datos = {
        dni: document.getElementById('dniInput').value,
        monto: 150.00
    };
    
    const exito = await ejecutarBackend("registrarMatricula", datos);
    if(exito) Swal.fire("Éxito", "El pago se envió a proceso", "success");
}