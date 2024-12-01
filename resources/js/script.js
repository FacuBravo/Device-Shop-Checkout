const selects = document.querySelectorAll('.custom_select')
selects.forEach(e => e.addEventListener('click', () => showOptions(e.id)))

function showOptions(id) {
    const select = document.getElementById(id)
    const optionsList = select.querySelector('.options')
    const options = optionsList.querySelectorAll('.option')
    const currentStyle = optionsList.style.display

    if (!currentStyle) {
        optionsList.style.display = 'flex'
        select.style.borderBottomLeftRadius = '0'
        select.style.borderBottomRightRadius = '0'
        options.forEach(e => e.addEventListener('click', (e) => changeSelected(e, select)))
    } else {
        optionsList.style.display = ''
        select.style.borderBottomLeftRadius = ''
        select.style.borderBottomRightRadius = ''
    }
}

function changeSelected(e, select) {
    const selected = select.querySelector('.selected')
    selected.innerText = e.target.innerText
    selected.setAttribute('data-value', e.target.getAttribute('data-value'))
}