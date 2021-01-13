$(() => {
    


    $('.feedback-form').submit(e =>{
        e.preventDefault();
    
        $.post('/api', {
            name: $('#feedback-form-name').val(),
            message:$('#feedback-form-message').val()
        }, updateFeedback)
        
    })
    
    const updateFeedback = (data) => {
            let output = '';
    
            data.forEach((item, key) => {
                output += '     <div class="feedback-item item-list media-list">';
                output += '       <div class="feedback-item media">';
                // output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
                output += '         <div class="feedback-info media-body">';
                output += '           <div class="feedback-head">';
                output += '             <div class="feedback-name label label-info h6 textGreen">' + item.name + '</div>';
                output += '           </div>';
                output += '           <div class="feedback-message h5 textPurple">' + item.message + '</div>';
                output += '         </div>'; 
                output += '       </div>';
                output += '     </div>';
            });
            
            $('.feedback-messages').html(output)
    }
    
    $.getJSON('/api', updateFeedback)
    
    })