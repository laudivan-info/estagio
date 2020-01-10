
/**
 * Change to page with id passed by clickToPage attribute
 * 
 * @param {EventTarget} event 
 */
function clickToPage(event) {
    toPageId = $(event.target).attr('clickToPage')

    if (!toPageId) return

    changePageById(toPageId)
}

/**
 * 
 * @param {String} toPageId 
 */
function changePageById(toPageId) {
    toPage = $('#' + toPageId)

    $('section:not(hidden)').addClass('hidden').fadeOut('fast')

    $(toPage).removeClass('hidden').fadeIn('slow')
}

/* Funções de acesso ao FireBase */


/**
 * 
 * @param {String} idEdital 
 */
function removeEdital(event) {
    edital = $(event.target).attr('removeEdital')

    $('#confirmRemoveModal .modal-body span').html(edital)

    $('#confirmRemoveModal').modal('show')

    console.log(edital)

}
