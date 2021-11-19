
export  const getUser = async(passaporte) => {
    const url= `https://hotelesaitechbeta.azurewebsites.net/api/user/${passaporte}`
    const resp = await fetch(url);
    const { status, usuario } = await resp.json();
    if(status){
        console.log(usuario[0])
        return usuario[0];
    }
    return false;
}