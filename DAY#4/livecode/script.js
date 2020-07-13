const Login = () => {
    let getUsername = document.getElementById("username").value;
    let getPassword = document.getElementById("password").value;
    let username = getUsername.toLowerCase();
    let password = getPassword.toLowerCase();
    if (username == "" && password =="") {
        alert("Username dan password harus diisi")
        return false
    } else if(username != "jution") {
        alert("Maaf username yang anda masukkan salah!")
        return false
    } else if (password != "jution") {
        alert("Maaf password yang anda masukkan salah!")
        return false
    } else if (username != "jution" && password != "jution") {
        alert("Username atau passowrd salah!")
        return false
    } else {
        alert(`Selamat datang ${username}`)
        return true;
    }
}


const listBiodata = () => {
    let biodata = [
        {
            nama: "Jution Candra Kirana",
            alamat: "Jl Bumi Manti IV Kel Kampung Baru, Kec Labuhan Ratu, Bandar Lampung",
            no_telp: "082180221160"
        },
        {
            nama: "Destry Faradila Nur'avisa",
            alamat: "Jl Kepayang Ragom Gawi, Rajabasa, Bandar Lampung",
            no_telp: "082292929929"
        },
        {
            nama: "Dinda Aditiya",
            alamat: "Jl Abdul Kadir, Gg Murai, Bandar Lampung",
            no_telp: "085783081202"
        }
    ];

    let listBiodata = '';
    let printBiodata = biodata;
    let no = 1;
    printBiodata.forEach(row => {
        listBiodata += `
                <tr>
                    <td>${no}</td>   
                    <td>${row.nama}</td>   
                    <td>${row.alamat}</td>   
                    <td>${row.no_telp}</td>
                 </tr>   
        `;
        no++;
    });
    document.getElementById("listBiodata").innerHTML = listBiodata

}

const Biodata = () => (
    new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve(listBiodata())
        }, 1000)
    }))

const Result = async () => {
    return await Biodata()
}


Result().then().catch((err)=> console.log(err));
