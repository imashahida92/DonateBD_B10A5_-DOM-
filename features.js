//donation button clicked
document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-form')
    this.style.backgroundColor='limegreen'
    document.getElementById('history-btn').style.backgroundColor='white'
})



//history button click
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-display')
    // color on button if clicked
    this.style.backgroundColor='limegreen'
    document.getElementById('donation-btn').style.backgroundColor='white'
    // 
    document.getElementById('footer-section').classList.add('hidden')
})