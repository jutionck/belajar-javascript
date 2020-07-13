function Login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "" && password =="") {
        alert("Username dan password harus diisi")
    } else if(username != "jution") {
        alert("Maaf username yang anda masukkan salah!")
    } else if (password != "jution") {
        alert("Maaf password yang anda masukkan salah!")
    } else if (username != "jution" && password != "jution") {
        alert("Username atau passowrd salah!")
    } else {
        redirect()
    }
}

function redirect() {
    let url = "index.html";
    window.location(url);
}

function listBiodata() {

    let biodata = {
        nama: "Jution Candra Kirana",
        alamat: "Jl Bumi Manti IV Kel Kampung Baru, Kec Labuhan Ratu, Bandar Lampung",
        no_telp: "082180221160"
    };

    document.getElementById("listBiodata").innerHTML = `
        <h3 class="card-title">${biodata.nama}</h3>
        <blockquote class="blockquote mb-0">
            <p>${biodata.alamat}</p>
            <footer class="blockquote-footer"><cite title="Source Title">${biodata.no_telp}</cite></footer>
        </blockquote>
        `;

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