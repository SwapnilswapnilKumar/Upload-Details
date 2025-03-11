var rightSection = $('#items');



$('button').click(function(e){
    var rollNo = $('#roll').val();
    var name = $('#name').val();
    var marks = $("#marks").val();

    e.preventDefault();
    
    if(rollNo==="" || name==="" || marks=== ""){

        alert("Please fill all the fields");

    }

    else{
        let item = `<div class="item">Roll no - <span class="highlight">${rollNo}</span> , <span class="highlight">${name}</span> have got <span class="highlight">${marks}</span> marks </div>`;

        rightSection.append(item);

        $('#roll').val("");
        $('#name').val("");
        $('#marks').val("");
    }

});     
