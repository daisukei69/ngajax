async function ngajax(data_ngajak){
    // store data json
    data = data_ngajak
    // check jika data option kososng
    data_option = data['option'] || null
    // data success harus di isi
    success = data['success'] || alert(`empty success`)
    // data url harus di isi
    url = data['url'] || alert(`empty url`)
    await fetch(url,data_option)
        .then(res => {
            if (!res.ok) throw new Error(res.status)
            data = res.json()
            return data
        }).then(success).catch(err => {
            alert(`error \n${err}`)
        })
}
