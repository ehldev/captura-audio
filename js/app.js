const recorder = document.getElementById('recorder')
const player = document.getElementById('player')

recorder.addEventListener('change', e => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)

    document.write(url)

    player.url = url
})