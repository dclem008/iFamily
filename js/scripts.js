$(document).ready(function() {
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
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

    $("#loginLink").click(function() {
        $("#loginModal").modal('toggle');
    });
    
    $("#reserveButton").click(function() {
        $("#reserveModal").modal('toggle');
    });

    $("#scheduleLink").click(function() {
        $("#scheduleModal").modal('toggle');
    });

    $("#addPhotoButton").click(function() {
        $("#addPhotoModal").modal('toggle');
    });

    var families = {0: 'Choose..',  id1:'Family 1', id2:'Family 2', id3:'Family 3'};
    
    $("#addUser").click(function() {
        $("#addUserModal").modal('toggle');
        var select = document.getElementById('familyGroup');
        

        for (var key in families){
          var opt = document.createElement('option');
          opt.value = key;
          opt.innerHTML = families[key];
          select.appendChild(opt);
        }
    });

    $("#CancelButton").click(function() {
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
        header.innerHTML = "May 03 2020";

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
    
});

