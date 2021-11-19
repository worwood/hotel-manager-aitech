export  const postUser = async(regForm) => {
    const data = {nombres: regForm.name,
        apellidos: regForm.lastName,
        nacionalidad: regForm.citizen,
        email: regForm.correo,
        sexo: regForm.genero,
        edad: regForm.edad,
        celular: regForm.cellphone,
        pasaporte_CI: regForm.passaporte
    };
    const url= `https://hotelesaitechbeta.azurewebsites.net/api/user/`
    const resp = await fetch(url,{
        method: 'POST',// *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) 
    }
        
        );

    
    const { status, usuario } = await resp.json();
    if(status){
        console.log(usuario)
        return usuario;
    }
    return false;
}