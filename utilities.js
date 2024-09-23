//section
function showSectionById(id){

    
    //hide all
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-display').classList.add('hidden');


    //show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
}