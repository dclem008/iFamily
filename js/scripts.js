$(document).ready(function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = (((today.getHours() + 1) % 12) + ":" + today.getMinutes() + " " + (today.getHours() > 11 ? 'PM' : 'AM'));

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("todayDate").innerHTML = today;

    let families = { 0: 'Choose..', id1: 'Family 1', id2: 'Family 2', id3: 'Family 3' };
    let select = document.getElementById("familyGroup");

    for (let key in families) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = families[key];
        select.appendChild(opt);
    }
    
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        }
        else if ($("#carouselButton").children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
        }

    });

    $("#loginLink").click(function () {
        $("#loginModal").modal('toggle');
    });

    $("#reserveButton").click(function () {
        $("#reserveModal").modal('toggle');
    });

    $("#scheduleLink").click(function () {
        $("#scheduleModal").modal('toggle');
    });

    $("#addPhotoButton").click(function () {
        $("#addPhotoModal").modal('toggle');
    });


    $("#addUser").click(function () {
        $("#addUserModal").modal('toggle');
    });

    const validation = () => {
        let textInput = document.getElementById("messageInput").value;
        if (textInput === '' || textInput === null) {
            alert("Please fill all fields...!!!!!!");
            return false;
        } else {
            return true;
        }
    }

    $('.msg_send_btn').click(function () {
        if (validation) {
            var tempScrollTop = $(window).scrollTop();
            let text = document.getElementById("messageInput").value;

            var msgHistoryDiv = document.getElementById("messageHistory");
            var outGoingDiv = document.createElement('div');
            outGoingDiv.className = 'outgoing_msg';

            var sentMsgDiv = document.createElement('div');
            sentMsgDiv.className = 'sent_msg';

            var textParagraph = document.createElement('p');
            textParagraph.innerHTML = text;

            var spanDate = document.createElement('span');
            spanDate.className = 'time_date';
            spanDate.innerHTML = time + " | " + "Today"; //today

            sentMsgDiv.appendChild(textParagraph);
            sentMsgDiv.appendChild(spanDate);

            outGoingDiv.appendChild(sentMsgDiv);

            msgHistoryDiv.appendChild(outGoingDiv);

            $(window).scrollTop($(document).height());
            document.getElementById("messageInput").value = "";
            event.preventDefault();
        }
    });

    $("#CancelButton").click(function () {
        var select = document.getElementById('innerCarousel');

        //if there is more than one image uploaded, may need list of createdElements for each image
        //add carousel div
        var addPic = document.createElement('div');
        addPic.className = "carousel-item";

        //get added image(s) may have to have list/array of createdImgs,
        var fileSrc = "img/profile-pic.jpg";
        var image = document.createElement('img');
        image.src = fileSrc;
        image.className = "d-block img-fluid";

        addPic.appendChild(image);

        //add caption, title to new carousel item
        //caption= description of pic
        //title may equal date of photo, or vice versa w/caption
        var innerDiv = document.createElement('div');
        innerDiv.className = "carousel-caption d-none d-md-block";

        var header = document.createElement('h2');
        header.innerHTML = today;

        var caption = document.createElement('p');
        caption.className = "d-none d-sm-block";
        caption.innerHTML = "Gigi!";

        innerDiv.appendChild(header);
        innerDiv.appendChild(caption);

        addPic.appendChild(innerDiv);

        select.appendChild(addPic);

        var indicatorList = document.getElementById('carouselList');

        //add image(s) to list of carousel
        var addIndicator = document.createElement('li');
        addIndicator.setAttribute('data-target', '#mycarousel');
        addIndicator.setAttribute('data-slide-to', indicatorList.length - 1);

        indicatorList.appendChild(addIndicator);

    });

    $('input[type=checkbox]').change(function () {

        if (this.checked) {
            $(this).next(".label-text").css("text-decoration-line", "line-through");
        } else {
            $(this).next(".label-text").css("text-decoration-line", "none");
        }

    });

});

