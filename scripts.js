const cardList = [
    {
        title: "British Shorthair",
        path: "images/british-shorthair.png",
        link: "About British Shorthair",
        desciption: "The British Shorthair is a compact, well-balanced, and powerful cat, with a short, very dense coat"
    },
    {
        title: "Burmese",
        path: "images/burmese.png",
        link: "About Burmese",
        desciption: "The Burmese is a cat of medium size with substantial bone structure, good muscular development, and a surprising weight for their size."
    },
    {
        title: "Calico",
        path: "images/Calico.png",
        link: "About Calico Cat ",
        desciption: "Calico cats are wonderful! Keep in mind, calico cats are not a breed. Instead, calico refers to their tri-color coats which include black, orange and white."
    }
    ];


const addCards = (items) => {
    items.forEach(item =>{
    let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
        '</div><div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
        '</div></div></div>';
    $("#card-section").append(itemToAppend);
    });
    }
    const submitForm = () => {
        let formData = {};
        formData.first_name = $('#first_name').val();
        formData.last_name = $('#last_name').val();
        formData.password = $('#password').val();
        formData.email = $('#email').val();
        console.log("Form Data Submitted: ", formData);
        }
    
$(document).ready(function(){
        $('.materialboxed').materialbox();
        $('.modal').modal();
        addCards(cardList);
        $('#formSubmit').click(()=>{
            submitForm();
        })
        });    
    