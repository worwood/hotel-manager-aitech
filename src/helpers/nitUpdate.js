export  const nitUpdate = async(nit, id) => {
    const dataSend = {nit: nit,
    };
    console.log(dataSend)
    const url= `https://hotelesaitechbeta.azurewebsites.net/api/user/${id}`
    const resp = await fetch(url,{
            method: 'PUT',// *default, no-cache, reload, force-cache, only-if-cached
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(dataSend) 
        }
    );

    const { status, data } = await resp.json();
    
    if(status){
        console.log(data)
        return data;
    }
    return false;
}