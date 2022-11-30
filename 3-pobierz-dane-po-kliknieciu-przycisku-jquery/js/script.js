$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`)
                let pUserId = $('<p></p>').text(`Post ID: ${data.UserId}`)
                let pTitle = $('<p></p>').text(`Post ID: ${data.title}`)
                let pBody = $('<p></p>').text(`Post ID: ${data.body}`)
                let hr = $('<hr/>')

                let jqBody = $('body')

                jqBody.append(pId)
                jqBody.append(pUserId)
                jqBody.append(pTitle)
                jqBody.append(pBody)
                jqBody.append(hr)

            })

            .fail(function (error) {
                console.error(error);
            });
    });

    // $('#get-data').click(function () {

    //     $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    //         .done(function (data) {

    //             let pId = $('<p></p>').text(`Post ID: ${data.id}`)
    //             let pUserId = $('<p></p>').text(`Post ID: ${data.UserId}`)
    //             let pTitle = $('<p></p>').text(`Post ID: ${data.title}`)
    //             let pBody = $('<p></p>').text(`Post ID: ${data.body}`)
    //             let hr = $('<hr/>')

    //             let jqBody = $('body')

    //             jqBody.append(pId)
    //             jqBody.append(pUserId)
    //             jqBody.append(pTitle)
    //             jqBody.append(pBody)
    //             jqBody.append(hr)

    //         })

    //         .fail(function (error) {
    //             console.error(error);
    //         });
    // });
});