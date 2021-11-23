export  const postRegister = async(regForm) => {
    const data = {nombres: regForm.name,
        id_cliente: regForm.id,
        temperatura: regForm.temperature,
        oxigenacion: regForm.oxygenation,
        id_habitacion: regForm.room,
        factura: regForm.invoice,
        check_in: regForm.checkInVal,
        check_out: regForm.checkOutVal,
        destino: regForm.destination,
    };
    const url= `https://hotelesaitechbeta.azurewebsites.net/api/flujos/`
    const resp = await fetch(url,{
        method: 'POST',// *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) 
    }
        
        );

    
    const { status, flujo } = await resp.json();
    
    if(status){
        console.log(flujo)
        return flujo;
    }
    return false;
}