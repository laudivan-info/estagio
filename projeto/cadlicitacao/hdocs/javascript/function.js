
/**
 * Change to page with id passed by clickToPage attribute
 * 
 * @param {EventTarget} event 
 */
function clickToPage(event) {
    target = event.target

    toPageId = $(target).attr('clickToPage')

    if (!toPageId) return

    console.log('Change to ' + toPageId)

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
